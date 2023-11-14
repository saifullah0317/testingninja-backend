import * as mongoose from 'mongoose';
import { User } from './user.schema';
export declare class Test {
    userid: User;
    key: string;
    title: string;
    description: string;
    prompt: string;
    mcqs: number;
    questions: number;
    problems: number;
    isPost: boolean;
    time: number;
}
export declare const TestSchema: mongoose.Schema<Test, mongoose.Model<Test, any, any, any, mongoose.Document<unknown, any, Test> & Test & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Test, mongoose.Document<unknown, {}, mongoose.FlatRecord<Test>> & mongoose.FlatRecord<Test> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface TestInterface extends mongoose.Document {
    _id: string;
    userid: string;
    key: string;
    title: string;
    description: string;
    prompt: string;
    mcqs: number;
    questions: number;
    problems: number;
    isPost: boolean;
    time?: number;
}
