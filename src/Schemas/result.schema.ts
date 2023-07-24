/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Test } from './test.shema';
import { Attempter } from './attempter.schema';
import { Question } from './question.schema';

@Schema()
export class Result {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
    test: Test;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Question' })
    question: Question;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Attempter' })
    attempter: Attempter;

    @Prop()
    result: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);