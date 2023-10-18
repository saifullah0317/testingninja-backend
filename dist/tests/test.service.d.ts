import { Model } from 'mongoose';
import { Test } from 'src/Schemas/test.schema';
import { TestDto } from './test.dto';
import { QuestionService } from 'src/questions/question.service';
export declare class TestService {
    private testModel;
    private readonly questionService;
    constructor(testModel: Model<Test>, questionService: QuestionService);
    getall(): Promise<Test[]>;
    generateString(length: any): Promise<string>;
    add(createTestDto: TestDto): Promise<Test>;
    getByUserid(userid: string): Promise<any>;
}
