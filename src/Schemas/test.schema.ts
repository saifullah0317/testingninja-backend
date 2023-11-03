/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

@Schema()
export class Test {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userid: User;

  @Prop({unique:true})
  key:string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  prompt: string;

  @Prop()
  mcqs:number;

  @Prop()
  questions:number;

  @Prop()
  problems:number;

  @Prop({required:false})
  isPost:boolean;

  @Prop({required:false})
  time:number;
}

export const TestSchema = SchemaFactory.createForClass(Test);