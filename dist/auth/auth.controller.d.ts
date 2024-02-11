import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/login.dto';
import { SignupDto } from 'src/users/user.dto';
import { UsersService } from 'src/users/user.service';
export declare class AuthController {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    login(body: LoginDto, res: any, req: any): Promise<{
        message: string;
        token?: undefined;
    } | {
        token: string;
        message?: undefined;
    }>;
    signup(body: SignupDto, res: any): Promise<{
        token: string;
        user: import("../Schemas/user.schema").UserInterface;
    }>;
    logout(res: any, req: any): Promise<{
        message: string;
    }>;
}
