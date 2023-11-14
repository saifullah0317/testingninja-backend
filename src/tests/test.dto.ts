/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsBoolean } from "class-validator"

export class TestDto{
    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    prompt:string;

    @IsNumber()
    mcqs:number;

    @IsNumber()
    questions:number;

    @IsNumber()
    problems:number;

    @IsBoolean()
    isPost:boolean;

    time?:number;
}