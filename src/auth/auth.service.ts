/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { orgName: user.orgName, username: user.username, email:user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}