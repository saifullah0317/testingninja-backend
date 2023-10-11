"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const test_schema_1 = require("../Schemas/test.schema");
const test_controller_1 = require("./test.controller");
const test_service_1 = require("./test.service");
const jwt_1 = require("@nestjs/jwt");
const question_module_1 = require("../questions/question.module");
let TestModule = class TestModule {
};
exports.TestModule = TestModule;
exports.TestModule = TestModule = __decorate([
    (0, common_1.Module)({
        imports: [question_module_1.QuestionModule, mongoose_1.MongooseModule.forFeature([{ name: test_schema_1.Test.name, schema: test_schema_1.TestSchema }])],
        controllers: [test_controller_1.TestController],
        providers: [test_service_1.TestService, jwt_1.JwtService],
        exports: [test_service_1.TestService]
    })
], TestModule);
//# sourceMappingURL=test.module.js.map