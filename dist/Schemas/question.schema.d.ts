import * as mongoose from 'mongoose';
import { Test } from './test.schema';
export declare class Question {
    testid: Test;
    type: string;
    question: string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    mcqOption?: string;
    suggestedAnswer: string[];
}
export declare const QuestionSchema: mongoose.Schema<Question, mongoose.Model<Question, any, any, any, mongoose.Document<unknown, any, Question> & Question & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Question, mongoose.Document<unknown, {}, mongoose.FlatRecord<Question>> & mongoose.FlatRecord<Question> & {
    _id: mongoose.Types.ObjectId;
}>;
