/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from 'src/Schemas/question.schema';
import {OtionalQuestionDto} from './question.dto'

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questionModel: Model<Question>) {}

  async getall():Promise<Question[]>{
    return await this.questionModel.find().populate({
        path:'testid',
        populate:{
            path:'userid',
            model:'User'
        }
    }).exec();
  }

  async add(createquestionDto: OtionalQuestionDto): Promise<Question> {
    const createdTest = new this.questionModel(createquestionDto);
    return (await createdTest.save()).populate('testid');
  }

  async getByTestid(testid:string): Promise<Question[]> {
    const testData=await this.questionModel.find({testid:testid}).populate({
        path:'testid',
        populate:{
            path:'userid',
            model:'User'
        }
    });
    return testData;
  }

  async update(id:string,body:OtionalQuestionDto):Promise<Question>{
    return await this.questionModel.findByIdAndUpdate(id,body,{new:true});
  }

  async delete(id:string):Promise<Question>{
    return await this.questionModel.findByIdAndDelete(id);
  }

}
