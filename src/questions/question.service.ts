/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Model, ObjectId } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from 'src/Schemas/question.schema';
import {OtionalQuestionDto} from './question.dto';
import { TestService } from 'src/tests/test.service';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questionModel: Model<Question>,
  private readonly testService:TestService) {}

  async getall():Promise<Question[]>{
    return await this.questionModel.find().populate({
        path:'testid',
        populate:{
            path:'userid',
            model:'User'
        }
    }).exec();
  }

  async getByKey(key:string){
    console.log("typeof key from service: ",typeof key);
    const test:any=await this.testService.getByKey(key);
    if(test){
      console.log("test from questionService: ",test);
      let test_id=test._id;
      console.log("testid: ",test_id);
      const questions=await this.getByTestid(test_id);
      return questions;
    }
    else{
      return [];
    }
  }

  async add(createquestionDto: OtionalQuestionDto): Promise<Question> {
    const createdTest = new this.questionModel(createquestionDto);
    return (await createdTest.save()).populate('testid');
  }

  async getByTestid(test_id:ObjectId): Promise<Question[]> {
    console.log("test_id: ",test_id);
    const testData=await this.questionModel.find({testid:test_id}).populate({
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
