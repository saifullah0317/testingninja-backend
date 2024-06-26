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
exports.AttempterService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const attempter_schema_1 = require("../Schemas/attempter.schema");
let AttempterService = class AttempterService {
    constructor(attempterModel) {
        this.attempterModel = attempterModel;
    }
    async getbyEmail(email) {
        try {
            return await this.attempterModel.findOne({ email: email });
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getbyIds(ids) {
        try {
            let index = 0, emails = [];
            while (index < ids.length) {
                let foundAttempter = await this.attempterModel.findById(ids[index]);
                emails.push(foundAttempter.email);
                index++;
            }
            return emails;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(createattempterDto) {
        try {
            const createdAttempter = new this.attempterModel(createattempterDto);
            return await createdAttempter.save();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AttempterService = AttempterService;
exports.AttempterService = AttempterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(attempter_schema_1.Attempter.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AttempterService);
//# sourceMappingURL=attempter.service.js.map