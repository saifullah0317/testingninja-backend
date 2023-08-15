/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attempter } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class AttempterService {
  constructor(@InjectModel(Attempter.name) private attempterModel: Model<Attempter>) {}

  async getall(query:Query):Promise<Attempter[]>{
    if(query.email){
        return await this.attempterModel.find({email:query.email});
    }
    return await this.attempterModel.find().exec();
  }

  async add(createattempterDto: AttempterDto): Promise<Attempter> {
    const createdAttempter = new this.attempterModel(createattempterDto);
    return createdAttempter.save();
  }
}
