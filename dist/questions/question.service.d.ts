import { Model } from 'mongoose';
import { Question } from 'src/Schemas/question.schema';
import { QuestionDto } from './question.dto';
export declare class QuestionService {
    private questionModel;
    constructor(questionModel: Model<Question>);
    getall(): Promise<Question[]>;
    add(createquestionDto: QuestionDto): Promise<Question>;
    getByTestid(testid: string): Promise<Question[]>;
    update(id: string, body: QuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
}
