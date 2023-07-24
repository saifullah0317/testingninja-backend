/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Test } from './test.shema';

@Schema()
export class Question {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
    test: Test;

    @Prop()
    isMcq: boolean;

    @Prop()
    question: string[];

    @Prop({required:false})
    suggestedAnswer: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);