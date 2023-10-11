/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from "class-validator"

export class TestDto{
    @IsString()
    userid:string;

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
}