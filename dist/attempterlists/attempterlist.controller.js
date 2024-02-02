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
exports.AttempterListController = void 0;
const common_1 = require("@nestjs/common");
const attempterlist_service_1 = require("./attempterlist.service");
const attempterlist_dto_1 = require("./attempterlist.dto");
const guards_1 = require("../auth/guards");
const auth_guard_1 = require("../auth/auth.guard");
const auth_service_1 = require("../auth/auth.service");
const attempter_service_1 = require("../attempters/attempter.service");
let AttempterListController = class AttempterListController {
    constructor(attempterService, attempterListService, authService) {
        this.attempterService = attempterService;
        this.attempterListService = attempterListService;
        this.authService = authService;
    }
    async getall(req) {
        try {
            let userid = await this.authService.getUseridByToken(req.cookies);
            const foundLists = await this.attempterListService.getbyuserid(userid);
            return foundLists;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateList(id, req, body) {
        try {
            let tempObj = JSON.parse(JSON.stringify(body));
            tempObj.userid = await this.authService.getUseridByToken(req.cookies);
            const updatedList = await this.attempterListService.updateList(id, tempObj);
            return updatedList;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async addlist(req, body) {
        try {
            let tempObj = JSON.parse(JSON.stringify(body));
            tempObj.userid = await this.authService.getUseridByToken(req.cookies);
            const createdList = await this.attempterListService.addlist(tempObj);
            return createdList;
        }
        catch (e) {
            console.log("error in controller: ", e.response);
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AttempterListController = AttempterListController;
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttempterListController.prototype, "getall", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AttempterListController.prototype, "updateList", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, attempterlist_dto_1.AttempterListDto]),
    __metadata("design:returntype", Promise)
], AttempterListController.prototype, "addlist", null);
exports.AttempterListController = AttempterListController = __decorate([
    (0, common_1.Controller)('attempterlist'),
    __metadata("design:paramtypes", [attempter_service_1.AttempterService, attempterlist_service_1.AttempterListService, auth_service_1.AuthService])
], AttempterListController);
//# sourceMappingURL=attempterlist.controller.js.map