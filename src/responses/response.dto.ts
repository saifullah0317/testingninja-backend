/* eslint-disable prettier/prettier */
import { IsString } from "class-validator"

export class ResponseDto{
    @IsString()
    attempterid:string;

    @IsString()
    questionid:string;

    @IsString()
    response:string;
}