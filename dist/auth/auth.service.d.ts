import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    getUseridByToken(cookies: any): Promise<any>;
}
