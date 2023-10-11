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
exports.ResultController = void 0;
const common_1 = require("@nestjs/common");
const result_service_1 = require("./result.service");
const result_dto_1 = require("./result.dto");
let ResultController = class ResultController {
    constructor(resultService) {
        this.resultService = resultService;
    }
    async get(id) {
        return await this.resultService.get(id);
    }
    async add(body) {
        return await this.resultService.add(body);
    }
};
exports.ResultController = ResultController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [result_dto_1.ResultDto]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "add", null);
exports.ResultController = ResultController = __decorate([
    (0, common_1.Controller)('result'),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], ResultController);
//# sourceMappingURL=result.controller.js.map