/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Category } from './category.schema';
import { QuestionPool } from './questionPool.schema';
import { AttempterList } from './attempterList.schema';

@Schema({timestamps:true})
export class Test {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userid: User;

  @Prop({ required:false, type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryid: Category;

  @Prop()
  questionPoolid: string[];

  @Prop({unique:true})
  key:string;

  @Prop()
  title: string;

  @Prop({required:false})
  description: string;

  @Prop()
  isPost:boolean;

  @Prop({required:false})
  allowAll:boolean;

  @Prop({required:false})
  attempts:number;

  @Prop({ required:false})
  attempterListid: string[];

  @Prop({required:false})
  time:number;

  @Prop({required:false})
  expireAt:Date;

  @Prop({required:false})
  activeOn:Date;

  @Prop({required:false})
  instructions:string[];
}
 
export const TestSchema = SchemaFactory.createForClass(Test);

export interface TestInterface extends mongoose.Document{
  _id:string,
  userid:string,
  categoryid?:string,
  questionPoolid:string[],
  key:string,
  title:string,
  description?:string,
  isPost:boolean,
  allowAll?:boolean,
  attempts?:number,
  attempterListid?:string[],
  time?:number,
  exireAt?:string,
  activeOn?:string,
  instructions?:string[]
}