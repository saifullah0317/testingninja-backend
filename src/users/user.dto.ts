/* eslint-disable prettier/prettier */
import { IsString } from "class-validator"

export class UserDto{
    @IsString()
    orgName:string;

    @IsString()
    username:string;

    @IsString()
    email:string;

    @IsString()
    password:string;
}