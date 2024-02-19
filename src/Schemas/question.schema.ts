/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Test } from './test.schema';
// import { QuestionPool } from './questionPool.schema';

@Schema()
export class Question {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
    testid: Test;

    // @Prop({required:false, type: mongoose.Schema.Types.ObjectId, ref: 'QuestionPool'})
    // questionPoolid: QuestionPool;

    @Prop()
    question: string;

    @Prop({required:false})
    options:string[];
    
    @Prop({required:false})
    mcqOption:string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

export interface QuestionInterface extends mongoose.Document{
  _id:string,
  testid:string,
  // questionPoolid?:string,
  question:string,
  options?:string[],
  mcqOption?:string
}