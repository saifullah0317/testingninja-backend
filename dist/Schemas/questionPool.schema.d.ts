import * as mongoose from 'mongoose';
import { User } from './user.schema';
export declare class QuestionPool {
    userid: User;
    prompt: string;
    mcqs: number;
    questions: number;
}
export declare const QuestionPoolSchema: mongoose.Schema<QuestionPool, mongoose.Model<QuestionPool, any, any, any, mongoose.Document<unknown, any, QuestionPool> & QuestionPool & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, QuestionPool, mongoose.Document<unknown, {}, mongoose.FlatRecord<QuestionPool>> & mongoose.FlatRecord<QuestionPool> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface QuestionPoolInterface extends mongoose.Document {
    _id: string;
    userid: string;
    prompt: string;
    mcqs: number;
    questions: number;
}
