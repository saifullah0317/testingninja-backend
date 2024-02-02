import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Attempter } from './attempter.schema';
export declare class AttempterList {
    userid: User;
    title: string;
    description: string;
    attempters: Attempter[];
}
export declare const AttempterListSchema: mongoose.Schema<AttempterList, mongoose.Model<AttempterList, any, any, any, mongoose.Document<unknown, any, AttempterList> & AttempterList & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AttempterList, mongoose.Document<unknown, {}, mongoose.FlatRecord<AttempterList>> & mongoose.FlatRecord<AttempterList> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface AttempterListInterface extends mongoose.Document {
    userid: string;
    title: string;
    description?: string;
    attempters: string[];
}
export interface AttempterListFrontendInterface extends mongoose.Document {
    title: string;
    description?: string;
    attempters: string[];
    createdAt: string;
}
