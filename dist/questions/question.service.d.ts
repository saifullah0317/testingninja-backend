import { Model } from 'mongoose';
import { Question } from 'src/Schemas/question.schema';
import { OtionalQuestionDto } from './question.dto';
export declare class QuestionService {
    private questionModel;
    constructor(questionModel: Model<Question>);
    getall(): Promise<Question[]>;
    add(createquestionDto: OtionalQuestionDto): Promise<Question>;
    getByTestid(testid: string): Promise<Question[]>;
    update(id: string, body: OtionalQuestionDto): Promise<Question>;
    delete(id: string): Promise<Question>;
}
