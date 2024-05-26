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
let QuestionService = class QuestionService {
    constructor(questionModel) {
        this.questionModel = questionModel;
    }
    async getall() {
        return await this.questionModel.find().exec();
    }
    async add(createquestionDto) {
        const createdTest = new this.questionModel(createquestionDto);
        return await createdTest.save();
    }
    async addAll(createAllQuestionsDto) {
        try {
            const createdQuestions = [];
            for (let i = 0; i < createAllQuestionsDto.questions.length; i++) {
                const foundQuestion = await this.questionModel.findOne({ question: createAllQuestionsDto.questions[i].question });
                if (!foundQuestion) {
                    const createdQuestion = new this.questionModel(createAllQuestionsDto.questions[i]);
                    await createdQuestion.save();
                    createdQuestions.push(createdQuestion);
                }
                else {
                    createdQuestions.push(foundQuestion);
                }
            }
            return createdQuestions;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.BAD_REQUEST);
        }
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
    __metadata("design:paramtypes", [mongoose_1.Model])
], QuestionService);
//# sourceMappingURL=question.service.js.map