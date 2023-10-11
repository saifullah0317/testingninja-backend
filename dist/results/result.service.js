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
exports.ResultService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const result_schema_1 = require("../Schemas/result.schema");
let ResultService = class ResultService {
    constructor(resultModel) {
        this.resultModel = resultModel;
    }
    async get(id) {
        return this.resultModel.find({ responseid: id }).populate({
            path: 'responseid',
            populate: [
                {
                    path: 'attempterid',
                    model: 'Attempter'
                },
                {
                    path: 'questionid',
                    model: 'Question',
                    populate: {
                        path: 'testid',
                        model: 'Test',
                        populate: {
                            path: 'userid',
                            model: 'User'
                        }
                    }
                }
            ]
        });
    }
    async add(createquestionDto) {
        const createdTest = new this.resultModel(createquestionDto);
        return createdTest.save();
    }
};
exports.ResultService = ResultService;
exports.ResultService = ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(result_schema_1.Result.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ResultService);
//# sourceMappingURL=result.service.js.map