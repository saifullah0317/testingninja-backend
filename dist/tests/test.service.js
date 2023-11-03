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
exports.TestService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const test_schema_1 = require("../Schemas/test.schema");
let TestService = class TestService {
    constructor(testModel) {
        this.testModel = testModel;
    }
    async getall() {
        return await this.testModel.find().populate('userid').exec();
    }
    async getByKey(testkey) {
        let tempObj = { key: testkey };
        let test = await this.testModel.findOne(tempObj);
        return test;
    }
    async generateString(length) {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    async add(createTestDto) {
        let gottenTest = JSON.parse(JSON.stringify(createTestDto));
        let key = await this.generateString(6);
        gottenTest.key = key;
        const createdTest = new this.testModel(gottenTest);
        return createdTest.save();
    }
    async getByUserid(userid) {
        const testData = await this.testModel.find({ userid: userid }).populate('userid');
        return testData;
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(test_schema_1.Test.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TestService);
//# sourceMappingURL=test.service.js.map