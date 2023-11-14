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
    console.log("login API hit !")
    console.log("API body: ",body);
    const userId=await this.userService.login(body);
    console.log("userId: ",userId.userId);
    if(userId.userId==""){
      return {message:"Invalid credentials!"}
    }
    console.log("payload: ",userId)
    const token= this.jwtService.sign(userId);
    console.log("token: ",token);
    res.cookie('user_token',token, {
      httpOnly: true,
      // secure: false,
      // sameSite: 'lax',
      expires: new Date(Date.now() + 3600000),
    });
    
    // console.log("date time: ",new Date(Date.now() + 3600000))
    return {token};
  }

  @Post('signup')
  async signup(@Body(new ValidationPipe()) body:UserDto, @Res({ passthrough: true }) res){
    const user=await this.userService.add(body);
    // const {password,...payload}=user;
    const token=this.jwtService.sign({userId:user._id});
    res.cookie('user_token', token, {
      expires: new Date(Date.now() + 3600000),
    });
    return {token};
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.cookie('user_token', '', { expires: new Date(Date.now()) });
    return {message:"loggedout!"};
  }
}
