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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const question_dto_1 = require("./question.dto");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getall() {
        return await this.questionService.getall();
    }
    async getByEmail(id) {
        return await this.questionService.getByTestid(id);
    }
    async getByKey(testkey) {
        console.log("testkey: ", testkey);
        console.log("typeof testkey: ", typeof testkey);
        return await this.questionService.getByKey(testkey);
    }
    async add(body) {
        return await this.questionService.add(body);
    }
    async update(id, body) {
        return await this.questionService.update(id, body);
    }
    async delete(id) {
        return await this.questionService.delete(id);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByEmail", null);
__decorate([
    (0, common_1.Get)('key/:testkey'),
    __param(0, (0, common_1.Param)('testkey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByKey", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "delete", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map