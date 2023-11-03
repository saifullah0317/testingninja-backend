/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator"

export class AttempterDto{
    @IsEmail()
    email:string;
}