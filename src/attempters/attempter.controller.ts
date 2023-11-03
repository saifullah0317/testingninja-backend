/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, Query } from '@nestjs/common';
import { AttempterService } from './attempter.service';
import { Attempter, AttempterInterface } from 'src/Schemas/attempter.schema';
import { AttempterDto } from './attempter.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
@Controller('attempter')
export class AttempterController {
  constructor(private readonly attempterService: AttempterService) {}
  
  // get attempter by email
  @Get()
  async getbyEmail(@Query() query:ExpressQuery):Promise<AttempterInterface>{
    if(query.email){
      return await this.attempterService.getbyEmail(query.email.toString());
    }
  }

  @Post()
  async add(@Body (new ValidationPipe()) body:AttempterDto):Promise<Attempter>{
    return await this.attempterService.add(body);
  }
}
