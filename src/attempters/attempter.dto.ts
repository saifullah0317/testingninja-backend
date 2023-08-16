/* eslint-disable prettier/prettier */
import { IsEmail } from "class-validator"

export class AttempterDto{
    @IsEmail()
    email:string;
}