/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from 'src/Schemas/question.schema';
import { QuestionDto } from './question.dto';
import { ObjectId } from 'mongoose';
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  
  // get all the questions
  @Get()
  async getall():Promise<Question[]>{
    return await this.questionService.getall();
  }
  
  // get test by testid
  @Get(':id')
  async getByEmail(@Param('id') id:ObjectId):Promise<Question[]>{
    return await this.questionService.getByTestid(id);
    // return await this.questionService.getByKey(id);
  }

  @Get('key/:testkey')
  async getByKey(@Param('testkey') testkey:string):Promise<Question[]>{
    console.log("testkey: ",testkey);
    console.log("typeof testkey: ",typeof testkey);
    return await this.questionService.getByKey(testkey);
  }
 
  // add a new test
  @Post()
  async add(@Body (new ValidationPipe()) body:QuestionDto):Promise<Question>{
    return await this.questionService.add(body);
  }

  // edit question
  @Put(':id')
  async update(@Param('id') id:string,@Body (new ValidationPipe()) body:QuestionDto):Promise<Question>{
    return await this.questionService.update(id,body);
  }

  // delete question
  @Delete(':id')
  async delete(@Param('id') id:string):Promise<Question>{
    return await this.questionService.delete(id);
  }
}
