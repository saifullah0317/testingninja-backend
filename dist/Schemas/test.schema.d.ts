import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Category } from './category.schema';
export declare class Test {
    userid: User;
    categoryid: Category;
    questionPoolid: string[];
    key: string;
    title: string;
    description: string;
    isPost: boolean;
    allowAll: boolean;
    attempts: number;
    attempterListid: string[];
    time: number;
    expireAt: Date;
    activeOn: Date;
    instructions: string[];
}
export declare const TestSchema: mongoose.Schema<Test, mongoose.Model<Test, any, any, any, mongoose.Document<unknown, any, Test> & Test & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Test, mongoose.Document<unknown, {}, mongoose.FlatRecord<Test>> & mongoose.FlatRecord<Test> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface TestInterface extends mongoose.Document {
    _id: string;
    userid: string;
    categoryid?: string;
    questionPoolid: string[];
    key: string;
    title: string;
    description?: string;
    isPost: boolean;
    allowAll?: boolean;
    attempts?: number;
    attempterListid?: string[];
    time?: number;
    exireAt?: string;
    activeOn?: string;
    instructions?: string[];
}
