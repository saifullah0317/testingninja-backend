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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSchema = exports.Response = exports.SingleResponseSchema = exports.SingleResponse = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const attempter_schema_1 = require("./attempter.schema");
const question_schema_1 = require("./question.schema");
let SingleResponse = class SingleResponse {
};
exports.SingleResponse = SingleResponse;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }),
    __metadata("design:type", question_schema_1.Question)
], SingleResponse.prototype, "questionid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SingleResponse.prototype, "response", void 0);
exports.SingleResponse = SingleResponse = __decorate([
    (0, mongoose_1.Schema)()
], SingleResponse);
exports.SingleResponseSchema = mongoose_1.SchemaFactory.createForClass(SingleResponse);
let Response = class Response {
};
exports.Response = Response;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Attempter' }),
    __metadata("design:type", attempter_schema_1.Attempter)
], Response.prototype, "attempterid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.SingleResponseSchema] }),
    __metadata("design:type", Array)
], Response.prototype, "responses", void 0);
exports.Response = Response = __decorate([
    (0, mongoose_1.Schema)()
], Response);
exports.ResponseSchema = mongoose_1.SchemaFactory.createForClass(Response);
//# sourceMappingURL=response.schema.js.map