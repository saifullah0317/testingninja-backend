/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
import { JwtGuard } from 'src/auth/guards';
import { ExtractUser } from 'src/auth/auth.guard';
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  
  // get all the tests
  @UseGuards(JwtGuard)
  @UseGuards(ExtractUser)
  @Get()
  async getall(@Req() req):Promise<Test[]>{
    console.log('cookies: ',req.cookies);
    // const userId=await this.jwtService.verifyAsync(req.cookies.user_token,{
    //   secret:process.env.JWT_SECRET
    // })
    console.log("user: ",req.user);
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
