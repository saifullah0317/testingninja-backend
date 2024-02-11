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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("../Schemas/user.schema");
const nodemailer = require("nodemailer");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    sendMail(to, subject, verificationCode, username) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '2020cs102@student.uet.edu.pk',
                pass: 'zpkp xabd cgss gvxd'
            }
        });
        const mailOptions = {
            from: '2020cs102@student.uet.edu.pk',
            to,
            subject,
            html: `<p style="font-size: x-large;">Hi, ${username}</p><p style="font-size: large;">This is you email verification code: ${verificationCode}</p>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    async login(body) {
        try {
            const loggedinUser = await this.getByEmail(body.email);
            if (!loggedinUser) {
                throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.NOT_FOUND);
            }
            else {
                if (body.password != loggedinUser.password) {
                    throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
                }
                else {
                    return { userId: loggedinUser._id.toString() };
                }
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getall() {
        return await this.userModel.find().exec();
    }
    async add(createUserDto) {
        try {
            const tempObj = JSON.parse(JSON.stringify(createUserDto));
            tempObj.active = false;
            const createdUser = new this.userModel(tempObj);
            await createdUser.save();
            this.sendMail(createdUser.email, "Testingninja", tempObj.verificationCode, createdUser.username);
            return createdUser;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getByEmail(email) {
        const userData = await this.userModel.findOne({ email: email });
        if (!userData) {
            throw new common_1.NotFoundException('Invalid email !');
        }
        return userData;
    }
    async activateUser(id) {
        try {
            return await this.userModel.findByIdAndUpdate(id, { active: true }, { new: true });
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateUser(id, body) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedUser) {
            throw new common_1.NotFoundException(`User ${body.username} not found...!`);
        }
        return updatedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
//# sourceMappingURL=user.service.js.map