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
const openai_1 = require("openai");
const question_service_1 = require("../questions/question.service");
let TestService = class TestService {
    constructor(testModel, questionService) {
        this.testModel = testModel;
        this.questionService = questionService;
    }
    async getall() {
        return await this.testModel.find().populate('userid').exec();
    }
    async add(createTestDto) {
        const openai = new openai_1.default({
            apiKey: process.env["OPENAI_API_KEY"]
        });
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `Generate a skill test related to the prompt: "${createTestDto.prompt}". There should be ${createTestDto.mcqs} MCQs, ${createTestDto.questions} theoretical questions, ${createTestDto.problems} problem solving questions. Your response should be an array of objects containing each question. Object of MCQ must be like {"q":"this is the question","o1":"option1","o2":"option2","o3":"option3","o4":"option4"} and other question's objects should be just like {"q":"this is the question"}. Just return me array of these objects nothing else !` }],
            model: 'gpt-3.5-turbo',
        });
        let response = completion.choices[0].message.content;
        console.log("response: ", response);
        const createdTest = new this.testModel(createTestDto);
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
    __metadata("design:paramtypes", [mongoose_1.Model,
        question_service_1.QuestionService])
], TestService);
//# sourceMappingURL=test.service.js.map