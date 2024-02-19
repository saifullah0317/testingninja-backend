/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Category } from './category.schema';
import { AttempterList } from './attempterList.schema';

@Schema({timestamps:true})
export class Test {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userid: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryid: Category;

  @Prop({ required:false, type: mongoose.Schema.Types.ObjectId, ref: 'AttempterList' })
  attempterListid: AttempterList[];

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
  time:number;

  @Prop({required:false})
  expireAt:string;

  @Prop({required:false})
  activeOn:string;

  @Prop({required:false})
  instructions:string[];
}
 
export const TestSchema = SchemaFactory.createForClass(Test);

export interface TestInterface extends mongoose.Document{
  _id:string,
  userid:string,
  categoryid:string,
  attempterListid?:string[],
  key:string,
  title:string,
  description?:string,
  isPost:boolean,
  allowAll?:boolean,
  time?:number,
  exireAt?:string,
  activeOn?:string,
  instructions?:string[]
}