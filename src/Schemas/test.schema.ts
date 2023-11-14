/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({timestamps:true})
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

  @Prop()
  isPost:boolean;

  @Prop({required:false})
  time:number;
}

export const TestSchema = SchemaFactory.createForClass(Test);

export interface TestInterface extends mongoose.Document{
  _id:string,
  userid:string,
  key:string,
  title:string,
  description:string,
  prompt:string,
  mcqs:number,
  questions:number,
  problems:number,
  isPost:boolean,
  time?:number
}