/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsBoolean, IsDate, ArrayMinSize } from "class-validator"

export class TestDto{
    categoryid?:string; 

    @ArrayMinSize(0)
    questionPoolid:string[];

    @IsString()
    key:string;

    @IsString()
    title:string;

    description?:string;

    @IsBoolean()
    isPost:boolean;

    allowAll?:boolean;

    attempts?:number;

    attempterListid?:string[];

    time?:number;

    expireat?:Date;

    activeOn?:Date;

    instructions?:string[];
}