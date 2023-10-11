import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/login.dto';
import { UserDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/user.service';
export declare class AuthController {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    login(body: LoginDto, res: any): Promise<{
        message: string;
        token?: undefined;
    } | {
        token: string;
        message?: undefined;
    }>;
    signup(body: UserDto, res: any): Promise<{
        token: string;
    }>;
    logout(res: any): Promise<{
        message: string;
    }>;
}
