/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, Query } from '@nestjs/common';
import { ResponseService } from './response.service';
import { Response } from 'src/Schemas/response.schema';
import { ResponseDto } from './response.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AttempterKeyDto } from './attempterKey.dto';
@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}
  
  // get all the questions
  @Get()
  async get(@Query() query:ExpressQuery):Promise<Response[]>{
    return await this.responseService.get(query);
  }

  // add a new test
  @Post()
  async add(@Body (new ValidationPipe()) body:ResponseDto):Promise<Response>{
    return await this.responseService.add(body);
  }

  @Post('authorization')
  async checkValidity(@Body (new ValidationPipe()) body:AttempterKeyDto):Promise<{attempterid:string}>{
    return await this.responseService.checkByAttempter(body);
  }
}
