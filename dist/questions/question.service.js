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
exports.QuestionService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const question_schema_1 = require("../Schemas/question.schema");
const test_service_1 = require("../tests/test.service");
let QuestionService = class QuestionService {
    constructor(questionModel, testService) {
        this.questionModel = questionModel;
        this.testService = testService;
    }
    async getall() {
        return await this.questionModel.find().populate({
            path: 'testid',
            populate: {
                path: 'userid',
                model: 'User'
            }
        }).exec();
    }
    async getByKey(key) {
        console.log("typeof key from service: ", typeof key);
        const test = await this.testService.getByKey(key);
        if (test) {
            console.log("test from questionService: ", test);
            let test_id = test._id;
            console.log("testid: ", test_id);
            const questions = await this.getByTestid(test_id);
            return questions;
        }
        else {
            return [];
        }
    }
    async add(createquestionDto) {
        const createdTest = new this.questionModel(createquestionDto);
        return (await createdTest.save()).populate('testid');
    }
    async getByTestid(test_id) {
        console.log("test_id: ", test_id);
        const testData = await this.questionModel.find({ testid: test_id }).populate({
            path: 'testid',
            populate: {
                path: 'userid',
                model: 'User'
            }
        });
        return testData;
    }
    async update(id, body) {
        return await this.questionModel.findByIdAndUpdate(id, body, { new: true });
    }
    async delete(id) {
        return await this.questionModel.findByIdAndDelete(id);
    }
};
exports.QuestionService = QuestionService;
exports.QuestionService = QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(question_schema_1.Question.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        test_service_1.TestService])
], QuestionService);
//# sourceMappingURL=question.service.js.map