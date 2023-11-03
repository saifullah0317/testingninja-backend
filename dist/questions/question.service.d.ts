import { Model } from 'mongoose';
import { Question } from 'src/Schemas/question.schema';
import { OtionalQuestionDto } from './question.dto';
import { TestService } from 'src/tests/test.service';
export declare class QuestionService {
    private questionModel;
    private readonly testService;
    constructor(questionModel: Model<Question>, testService: TestService);
    getall(): Promise<Question[]>;
    getByKey(key: string): Promise<any>;
    add(createquestionDto: OtionalQuestionDto): Promise<Question>;
    getByTestid(test_id: any): Promise<any>;
    update(id: string, body: OtionalQuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
}
