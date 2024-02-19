/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsBoolean, IsDate, ArrayMinSize } from "class-validator"

export class TestDto{
    categoryid?:string; 

    @IsString()
    key:string;

    @IsString()
    title:string;

    description?:string;

    @IsBoolean()
    isPost:boolean;

    allowAll?:boolean;

    attempterListid?:string[];

    time?:number;

    expireat?:string;

    activeOn?:string;

    instructions?:string[];
}