import { TestService } from './test.service';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    getall(req: any): Promise<Test[]>;
    getByEmail(id: string): Promise<Test>;
    add(body: TestDto): Promise<Test>;
}
