import * as mongoose from 'mongoose';
import { Test } from './test.schema';
export declare class Question {
    testid: Test;
    question: string;
    options: string[];
    mcqOption: string;
}
export declare const QuestionSchema: mongoose.Schema<Question, mongoose.Model<Question, any, any, any, mongoose.Document<unknown, any, Question> & Question & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Question, mongoose.Document<unknown, {}, mongoose.FlatRecord<Question>> & mongoose.FlatRecord<Question> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface QuestionInterface extends mongoose.Document {
    _id: string;
    testid: string;
    question: string;
    options?: string[];
    mcqOption?: string;
}
