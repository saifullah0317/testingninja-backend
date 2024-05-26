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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("./test.service");
const test_dto_1 = require("./test.dto");
const guards_1 = require("../auth/guards");
const auth_guard_1 = require("../auth/auth.guard");
const auth_service_1 = require("../auth/auth.service");
let TestController = class TestController {
    constructor(testService, authService) {
        this.testService = testService;
        this.authService = authService;
    }
    async getall(req) {
        console.log('cookies from request: ', req.cookies);
        let userid = await this.authService.getUseridByToken(req.cookies);
        console.log("user: ", userid);
        return await this.testService.getByUserid(userid);
    }
    async getByKey(key) {
        try {
            return (await this.testService.getByKey(key)).populate('questions');
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async add(body, req) {
        let testToPost = JSON.parse(JSON.stringify(body));
        testToPost.userid = await this.authService.getUseridByToken(req.cookies);
        return this.testService.add(testToPost);
    }
    async updateTest(id, body) {
        try {
            return await this.testService.updateTest(id, body);
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async deleteTest(id) {
        try {
            return await this.testService.deleteTest(id);
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async sendKey(testid) {
        try {
            return await this.testService.sendTestKey(testid);
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async initiateResponse(body) {
        try {
            return this.testService.initiateResponse(body.email, body.key);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.TestController = TestController;
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getByKey", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [test_dto_1.TestDto, Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "add", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, test_dto_1.TestDto]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "updateTest", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "deleteTest", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.UseGuards)(auth_guard_1.ExtractUser),
    (0, common_1.Get)(':testid'),
    __param(0, (0, common_1.Param)('testid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "sendKey", null);
__decorate([
    (0, common_1.Post)('checkkey'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "initiateResponse", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)('test'),
    __metadata("design:paramtypes", [test_service_1.TestService,
        auth_service_1.AuthService])
], TestController);
//# sourceMappingURL=test.controller.js.map