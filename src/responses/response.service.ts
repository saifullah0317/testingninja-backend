/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'src/Schemas/response.schema';
import { ResponseDto } from './response.dto';

@Injectable()
export class ResponseService {
  constructor(@InjectModel(Response.name) private responseModel: Model<Response>) {}

  async get(query):Promise<Response[]>{
    if(query.attempter && query.question){
        return this.responseModel.find({attempterid:query.attempter, questionid:query.question}).populate({
            path:'questionid',
            populate:{
                path:'testid',
                model:'Test',
                populate:{
                    path:'userid',
                    model:'User'
                }
            }
        }).populate('attempterid')
    }
  }

  async add(createquestionDto: ResponseDto): Promise<Response> {
    const createdTest = new this.responseModel(createquestionDto);
    return createdTest.save();
  }

}
