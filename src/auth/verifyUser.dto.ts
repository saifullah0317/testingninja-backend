/* eslint-disable prettier/prettier */
import { IsString } from "class-validator"

export class VerifyUserDto{
    @IsString()
    code:string;
}