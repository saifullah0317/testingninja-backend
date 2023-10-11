import * as mongoose from 'mongoose';
import { Attempter } from './attempter.schema';
import { Question } from './question.schema';
export declare class Response {
    attempterid: Attempter;
    questionid: Question;
    response: string;
}
export declare const ResponseSchema: mongoose.Schema<Response, mongoose.Model<Response, any, any, any, mongoose.Document<unknown, any, Response> & Response & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Response, mongoose.Document<unknown, {}, mongoose.FlatRecord<Response>> & mongoose.FlatRecord<Response> & {
    _id: mongoose.Types.ObjectId;
}>;
