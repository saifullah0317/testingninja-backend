/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, Query } from '@nestjs/common';
import { AttempterService } from './attempter.service';
import { Attempter } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
@Controller('attempter')
export class AttempterController {
  constructor(private readonly attempterService: AttempterService) {}
  
  // get all the questions
  @Get()
  async getall(@Query() query:ExpressQuery):Promise<Attempter[]>{
    return await this.attempterService.getall(query);
  }

  // add a new test
  @Post()
  async add(@Body (new ValidationPipe()) body:AttempterDto):Promise<Attempter>{
    return await this.attempterService.add(body);
  }
}
