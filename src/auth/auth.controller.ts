/* eslint-disable prettier/prettier */
import { Controller, Get, Res, Post, Body, ValidationPipe } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/login.dto';
import { UserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/user.service';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService,
    private userService:UsersService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) body:LoginDto, @Res({ passthrough: true }) res) {
    // const payload = { username: 'john', id: 1 };
    res.cookie('user_token', this.jwtService.sign(body), {
      expires: new Date(Date.now() + 3600000),
    });
    return {};
  }

  @Post('signup')
  async signup(@Body(new ValidationPipe()) body:UserDto, @Res({ passthrough: true }) res){
    const user=await this.userService.add(body);
    res.cookie('user_token', this.jwtService.sign(body), {
      expires: new Date(Date.now() + 3600000),
    });
    return {};
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.cookie('user_token', '', { expires: new Date(Date.now()) });
    return {};
  }
}
