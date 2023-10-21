import { QuestionService } from './question.service';
import { Question } from 'src/Schemas/question.schema';
import { QuestionDto } from './question.dto';
import { ObjectId } from 'mongoose';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getall(): Promise<Question[]>;
    getByEmail(id: ObjectId): Promise<Question[]>;
    getByKey(testkey: string): Promise<Question[]>;
    add(body: QuestionDto): Promise<Question>;
    update(id: string, body: QuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
}
