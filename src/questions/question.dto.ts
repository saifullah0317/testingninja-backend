/* eslint-disable prettier/prettier */
import { IsString, ArrayMinSize } from "class-validator"
import { PartialType } from "@nestjs/swagger";

export class QuestionDto{
    @IsString()
    testid:string;

    @IsString()
    type:string;

    @IsString()
    question:string;

    option1?:string;

    option2?:string;

    option3?:string;

    option4?:string;

    mcqOption?:string;

    @ArrayMinSize(0)
    suggestedAnswer:string[];
}
export class OtionalQuestionDto extends PartialType(QuestionDto) {}