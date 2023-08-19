/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class User {
  @Prop()
  orgName: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface UserInterface extends mongoose.Document{
  _id:string,
  orgName:string,
  username:string,
  email:string,
  password:string
}