/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from "class-validator"

export class UserDto{
    @IsString()
    orgName:string;

    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;
}