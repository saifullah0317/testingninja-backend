/* eslint-disable prettier/prettier */
import { IsString, ArrayMinSize } from "class-validator"
import { PartialType } from "@nestjs/swagger";

export class QuestionDto{
    @IsString()
    testid:string;

    @IsString()
    question:string;

    options?:string[];

    mcqOption?:string;
}
export class OtionalQuestionDto extends PartialType(QuestionDto) {}