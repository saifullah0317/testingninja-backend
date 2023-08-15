/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Attempter } from './attempter.schema';
import { Question } from './question.schema';

@Schema()
export class Response {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Attempter' })
    attempterid: Attempter;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Question' })
    questionid: Question;

    @Prop()
    response: string;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);