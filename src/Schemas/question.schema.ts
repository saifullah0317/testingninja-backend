/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Test } from './test.schema';

@Schema()
export class Question {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
    testid: Test;

    @Prop()
    type:string;

    @Prop()
    question: string;

    @Prop({required:false})
    option1:string;

    @Prop({required:false})
    option2:string;

    @Prop({required:false})
    option3:string;

    @Prop({required:false})
    option4:string;
    
    @Prop({required:false})
    mcqOption:string;

    @Prop({required:false})
    suggestedAnswer: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

export interface QuestionInterface extends mongoose.Document{
  _id:string,
  testid:string,
  type:string,
  question:string,
  option1?:string,
  option2?:string,
  option3?:string,
  option4?:string,
  mcqOption?:string,
  suggestedAnswer:string[]
}