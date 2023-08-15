/* eslint-disable prettier/prettier */
import { IsString } from "class-validator"

export class TestDto{
    @IsString()
    userid:string;

    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    prompt:string;
}