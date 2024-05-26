import { QuestionService } from './question.service';
import { Question } from 'src/Schemas/question.schema';
import { QuestionDto } from './question.dto';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getall(): Promise<Question[]>;
    add(body: QuestionDto): Promise<Question>;
    addAll(body: {
        questions: QuestionDto[];
    }): Promise<Question[]>;
    update(id: string, body: QuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
}
