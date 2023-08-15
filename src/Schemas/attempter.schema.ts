/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Attempter {
  @Prop()
  email:string;
}

export const AttempterSchema = SchemaFactory.createForClass(Attempter);