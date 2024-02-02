import { Model } from 'mongoose';
import { QuestionPool } from 'src/Schemas/questionPool.schema';
import { QuestionPoolDto } from './questionpool.dto';
export declare class QuestionPoolService {
    private questionPoolModel;
    constructor(questionPoolModel: Model<QuestionPool>);
    getbyuserid(userid: string): Promise<QuestionPool[]>;
    addlist(newlist: QuestionPoolDto): Promise<QuestionPool>;
}
