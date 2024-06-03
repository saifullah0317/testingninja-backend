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
const nodemailer = require("nodemailer");
const attempter_service_1 = require("../attempters/attempter.service");
const attempterlist_service_1 = require("../attempterlists/attempterlist.service");
let TestService = class TestService {
    constructor(testModel, attempterListService, attempterService) {
        this.testModel = testModel;
        this.attempterListService = attempterListService;
        this.attempterService = attempterService;
    }
    async getall() {
        return await this.testModel.find().populate('userid').exec();
    }
    async getByKey(testkey) {
        try {
            let tempObj = { key: testkey };
            let test = await this.testModel.findOne(tempObj);
            return test;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
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
        try {
            let gottenTest = JSON.parse(JSON.stringify(createTestDto));
            let key = await this.generateString(6);
            gottenTest.key = key;
            console.log("gottenTest: ", gottenTest);
            const createdTest = new this.testModel(gottenTest);
            if (createdTest._id && createdTest.active) {
                this.sendTestKey;
            }
            return createdTest.save();
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async updateTest(id, updateTestDto) {
        try {
            let gottenTest = JSON.parse(JSON.stringify(updateTestDto));
            let oldTest = await this.testModel.findById(id);
            gottenTest.userid = oldTest.userid;
            gottenTest.key = oldTest.key;
            const updatedTest = await this.testModel.findByIdAndUpdate(id, gottenTest, { new: true });
            return updatedTest;
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async deleteTest(id) {
        try {
            return await this.testModel.findByIdAndDelete(id);
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async getByUserid(userid) {
        const testData = await this.testModel.find({ userid: userid }).populate('categoryid').populate('questions').populate('attempterListid');
        return testData;
    }
    async sendTestKey(testid) {
        try {
            const foundTest = await this.testModel.findById(testid).populate('userid').populate({ path: 'attempterListid', populate: { path: 'attempters', model: 'Attempter' } });
            let allEmails = [], notSent = [];
            for (let i = 0; i < foundTest.attempterListid.length; i++) {
                allEmails = [...allEmails, ...foundTest.attempterListid[i].attempters.map(attempter => attempter.email)];
            }
            console.log("allEmails: ", allEmails);
            for (let i = 0; i < allEmails.length; i++) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: '2020cs102@student.uet.edu.pk',
                        pass: 'zpkp xabd cgss gvxd'
                    }
                });
                const mailOptions = {
                    from: '2020cs102@student.uet.edu.pk',
                    to: allEmails[i],
                    subject: `Exam Key for ${foundTest.title}`,
                    html: `<p style="font-size: x-large;">Hi ${allEmails[i].split(/[0-9]/g)[0] ? allEmails[i].split(/[0-9]/g)[0] : allEmails[i].split('@')[0]},</p><p style="font-size: large;">Exam key for "${foundTest.title}" is: ${foundTest.key}</p>`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        notSent.push(allEmails[i]);
                    }
                });
            }
            return notSent;
        }
        catch (error) {
            if (error.message) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            else {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
    async initiateResponse(email, key) {
        try {
            const foundAttempter = await this.attempterService.getbyEmail(email);
            const foundTest = await this.testModel.findOne({ key: key });
            let attempterId;
            if (foundTest) {
                if (!foundTest.active) {
                    return { message: "Test not available to attempt !" };
                }
                else {
                    if (foundTest.allowAll) {
                        if (foundAttempter) {
                            attempterId = foundAttempter._id;
                        }
                        else {
                            const createdAttempter = await this.attempterService.add({ email: email });
                            attempterId = createdAttempter._id;
                        }
                    }
                    else {
                        if (foundTest.attempterListid) {
                            for (let i = 0; i < foundTest.attempterListid.length; i++) {
                                let attempterList = await this.attempterListService.getByListId(foundTest.attempterListid[i].toString());
                                if (attempterList.includes(foundAttempter._id)) {
                                    attempterId = foundAttempter._id;
                                    i = foundTest.attempterListid.length;
                                }
                            }
                            if (!attempterId) {
                                return { message: "You are not allowed to attempt this test !" };
                            }
                        }
                        else {
                            return { message: "You are not allowed to attempt this test !" };
                        }
                    }
                }
                if (attempterId) {
                    return { testId: foundTest._id.toString(), attempterId: attempterId.toString() };
                }
            }
            else {
                return { message: "No test found with this key !" };
            }
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(test_schema_1.Test.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        attempterlist_service_1.AttempterListService,
        attempter_service_1.AttempterService])
], TestService);
//# sourceMappingURL=test.service.js.map