import { TestService } from './test.service';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class TestController {
    private readonly testService;
    private readonly authService;
    constructor(testService: TestService, authService: AuthService);
    getall(req: any): Promise<Test[]>;
    add(body: TestDto, req: any): Promise<Test>;
}
