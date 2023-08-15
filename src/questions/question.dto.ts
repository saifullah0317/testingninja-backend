/* eslint-disable prettier/prettier */
import { IsString, ArrayMinSize } from "class-validator"

export class QuestionDto{
    @IsString()
    testid:string;

    @ArrayMinSize(1)
    question:string[];

    @ArrayMinSize(0)
    suggestedAnswer:string[];
}