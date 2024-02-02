"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttempterListService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const attempterList_schema_1 = require("../Schemas/attempterList.schema");
const attempter_service_1 = require("../attempters/attempter.service");
let AttempterListService = class AttempterListService {
    constructor(attempterListModel, attempterService) {
        this.attempterListModel = attempterListModel;
        this.attempterService = attempterService;
    }
    async checkAttempterListDuplication(userId, attemptersList) {
        const foundAttemptersList = await this.attempterListModel.findOne({ $and: [{ userid: userId }, { attempters: attemptersList }] });
        if (foundAttemptersList) {
            return foundAttemptersList.title;
        }
        else {
            return "";
        }
    }
    async getAttemptersByEmails(emails) {
        const attemptersIds = [];
        let index = 0;
        while (index < emails.length) {
            const foundAttempter = await this.attempterService.getbyEmail(emails[index]);
            if (foundAttempter) {
                attemptersIds.push(foundAttempter._id);
            }
            else {
                const createdAttempter = await this.attempterService.add({ email: emails[index] });
                attemptersIds.push(createdAttempter._id);
            }
            index++;
        }
        return attemptersIds;
    }
    async getbyuserid(userid) {
        return await this.attempterListModel.find({ userid }).populate('attempters');
    }
    async getByListId(listId) {
        const foundList = await this.attempterListModel.findById(listId);
        if (foundList) {
            return foundList.attempters;
        }
        else {
            throw new common_1.HttpException('error fetching lists, try again', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateList(listId, newList) {
        try {
            const tempObj = JSON.parse(JSON.stringify(newList));
            tempObj.attempters = await this.getAttemptersByEmails(newList.attempters);
            const foundAttemptersList = await this.checkAttempterListDuplication(tempObj.userid, tempObj.attempters);
            if (foundAttemptersList) {
                throw new common_1.HttpException(`Respondents list already found with the name: "${foundAttemptersList}"`, common_1.HttpStatus.BAD_REQUEST);
            }
            const updatedList = await this.attempterListModel.findByIdAndUpdate(listId, tempObj, { new: true });
            if (updatedList) {
                return updatedList;
            }
            else {
                throw new common_1.HttpException('List not found', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async addlist(newlist) {
        try {
            const attemptersIds = await this.getAttemptersByEmails(newlist.attempters);
            const foundAttemptersList = await this.checkAttempterListDuplication(newlist.userid, attemptersIds);
            if (foundAttemptersList) {
                console.log("error in service: ", foundAttemptersList);
                throw new common_1.HttpException(`Respondents list already found with the name: "${foundAttemptersList}"`, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                newlist.attempters = attemptersIds;
                const createdlist = new this.attempterListModel(newlist);
                return createdlist.save();
            }
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AttempterListService = AttempterListService;
exports.AttempterListService = AttempterListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(attempterList_schema_1.AttempterList.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, attempter_service_1.AttempterService])
], AttempterListService);
//# sourceMappingURL=attempterlist.service.js.map