/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from 'src/Schemas/test.shema';
import { TestDto } from './test.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async getall():Promise<Test[]>{
    return await this.testModel.find().populate('userid').exec();
  }

  async add(createTestDto: TestDto): Promise<Test> {
    const createdTest = new this.testModel(createTestDto);
    return createdTest.save();
  }

  async getByUserid(userid:string): Promise<any> {
    const testData=await this.testModel.find({userid:userid}).populate('userid');
    return testData;
  }
}
