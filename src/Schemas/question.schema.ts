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

    @Prop()
    option1?:string;

    @Prop()
    option2?:string;

    @Prop()
    option3?:string;

    @Prop()
    option4?:string;
    
    @Prop()
    mcqOption?:string;

    @Prop({required:false})
    suggestedAnswer: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);