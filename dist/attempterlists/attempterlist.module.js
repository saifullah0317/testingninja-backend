"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttempterListModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const attempterList_schema_1 = require("../Schemas/attempterList.schema");
const attempter_module_1 = require("../attempters/attempter.module");
const attempterlist_controller_1 = require("./attempterlist.controller");
const attempterlist_service_1 = require("./attempterlist.service");
const user_module_1 = require("../users/user.module");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let AttempterListModule = class AttempterListModule {
};
exports.AttempterListModule = AttempterListModule;
exports.AttempterListModule = AttempterListModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UsersModule, auth_module_1.AuthModule, attempter_module_1.AttempterModule, mongoose_1.MongooseModule.forFeature([{ name: attempterList_schema_1.AttempterList.name, schema: attempterList_schema_1.AttempterListSchema }])],
        controllers: [attempterlist_controller_1.AttempterListController],
        providers: [attempterlist_service_1.AttempterListService, jwt_1.JwtService],
    })
], AttempterListModule);
//# sourceMappingURL=attempterlist.module.js.map