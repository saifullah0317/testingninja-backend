"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionPoolModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("../users/user.module");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const questionPool_schema_1 = require("../Schemas/questionPool.schema");
const questionpool_controller_1 = require("./questionpool.controller");
const questionpool_service_1 = require("./questionpool.service");
let QuestionPoolModule = class QuestionPoolModule {
};
exports.QuestionPoolModule = QuestionPoolModule;
exports.QuestionPoolModule = QuestionPoolModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UsersModule, auth_module_1.AuthModule, mongoose_1.MongooseModule.forFeature([{ name: questionPool_schema_1.QuestionPool.name, schema: questionPool_schema_1.QuestionPoolSchema }])],
        controllers: [questionpool_controller_1.QuestionPoolController],
        providers: [questionpool_service_1.QuestionPoolService, jwt_1.JwtService],
    })
], QuestionPoolModule);
//# sourceMappingURL=questionpool.module.js.map