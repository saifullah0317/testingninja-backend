/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
import { JwtGuard } from 'src/auth/guards';
import { ExtractUser } from 'src/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService,
    private readonly authService:AuthService
    ) {}
  
  // get all the tests
  @UseGuards(JwtGuard)
  @UseGuards(ExtractUser)
  @Get()
  async getall(@Req() req):Promise<Test[]>{
    console.log('cookies from request: ',req.cookies);
    let userid=await this.authService.getUseridByToken(req.cookies);
    console.log("user: ",userid);
    return await this.testService.getByUserid(userid);
  }

  // add a new test
  @UseGuards(JwtGuard)
  @UseGuards(ExtractUser)
  @Post()
  async add(@Body (new ValidationPipe()) body:TestDto, @Req() req):Promise<Test>{
    let testToPost=JSON.parse(JSON.stringify(body));
    testToPost.userid=await this.authService.getUseridByToken(req.cookies);
    return this.testService.add(testToPost);
  }
}
