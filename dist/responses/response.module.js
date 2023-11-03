"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const response_schema_1 = require("../Schemas/response.schema");
const response_controller_1 = require("./response.controller");
const response_service_1 = require("./response.service");
const attempter_module_1 = require("../attempters/attempter.module");
const question_module_1 = require("../questions/question.module");
const test_module_1 = require("../tests/test.module");
let ResponseModule = class ResponseModule {
};
exports.ResponseModule = ResponseModule;
exports.ResponseModule = ResponseModule = __decorate([
    (0, common_1.Module)({
        imports: [attempter_module_1.AttempterModule, question_module_1.QuestionModule, test_module_1.TestModule, mongoose_1.MongooseModule.forFeature([{ name: response_schema_1.Response.name, schema: response_schema_1.ResponseSchema }])],
        controllers: [response_controller_1.ResponseController],
        providers: [response_service_1.ResponseService],
        exports: [response_service_1.ResponseService]
    })
], ResponseModule);
//# sourceMappingURL=response.module.js.map