"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./users/user.module");
const auth_module_1 = require("./auth/auth.module");
const test_module_1 = require("./tests/test.module");
const config_1 = require("@nestjs/config");
const question_module_1 = require("./questions/question.module");
const attempter_module_1 = require("./attempters/attempter.module");
const response_module_1 = require("./responses/response.module");
const result_module_1 = require("./results/result.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UsersModule, test_module_1.TestModule, question_module_1.QuestionModule, attempter_module_1.AttempterModule, response_module_1.ResponseModule, result_module_1.ResultModule, auth_module_1.AuthModule, config_1.ConfigModule.forRoot({ isGlobal: true }), mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI)],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map