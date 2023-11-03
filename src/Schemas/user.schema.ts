/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class User {
  @Prop()
  userType: boolean;

  @Prop()
  orgName: string;

  @Prop()
  username: string;

  @Prop({unique:true})
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface UserInterface extends mongoose.Document{
  _id:string,
  userType:boolean,
  orgName:string,
  username:string,
  email:string,
  password:string
}