/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserDto } from './user.dto';
import { User } from 'src/Schemas/user.shema';
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  
  @Get()
  async getall():Promise<User[]>{
    return await this.usersService.getall();
  }
  
  @Post()
  getByEmail(@Body() body:any):Promise<User>{
    return this.usersService.getByEmail(body.email);
  }

  @Post()
  add(@Body (new ValidationPipe()) body:UserDto):Promise<User>{
    return this.usersService.add(body);
  }

  @Put(':id')
  updateUser(@Param('id') id:string, @Body(new ValidationPipe()) body:UserDto):Promise<User>{
    return this.usersService.updateUser(id, body);
  }
}
