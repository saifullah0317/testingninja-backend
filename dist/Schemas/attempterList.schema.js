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
exports.AttempterListSchema = exports.AttempterList = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schema_1 = require("./user.schema");
let AttempterList = class AttempterList {
};
exports.AttempterList = AttempterList;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], AttempterList.prototype, "userid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], AttempterList.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], AttempterList.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attempter' }] }),
    __metadata("design:type", Array)
], AttempterList.prototype, "attempters", void 0);
exports.AttempterList = AttempterList = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], AttempterList);
exports.AttempterListSchema = mongoose_1.SchemaFactory.createForClass(AttempterList);
//# sourceMappingURL=attempterList.schema.js.map