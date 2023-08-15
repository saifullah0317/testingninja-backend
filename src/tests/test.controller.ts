/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'src/Schemas/test.shema';
import { TestDto } from './test.dto';
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  
  // get all the tests
  @Get()
  async getall():Promise<Test[]>{
    return await this.testService.getall();
  }
  
  // get test by userid
  @Get(':id')
  getByEmail(@Param('id') id:string):Promise<Test>{
    return this.testService.getByUserid(id);
  }

  // add a new test
  @Post()
  add(@Body (new ValidationPipe()) body:TestDto):Promise<Test>{
    return this.testService.add(body);
  }
}
