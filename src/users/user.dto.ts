/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsBoolean } from "class-validator"

export class UserDto{
    @IsBoolean()
    userType:boolean;

    @IsString()
    orgName:string;

    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;
}