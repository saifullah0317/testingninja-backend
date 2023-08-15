/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.shema';

@Schema()
export class Test {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userid: User;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  prompt: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);