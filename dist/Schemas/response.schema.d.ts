import * as mongoose from 'mongoose';
import { Attempter } from './attempter.schema';
import { Question } from './question.schema';
export declare class SingleResponse {
    questionid: Question;
    response: string;
}
export declare const SingleResponseSchema: mongoose.Schema<SingleResponse, mongoose.Model<SingleResponse, any, any, any, mongoose.Document<unknown, any, SingleResponse> & SingleResponse & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, SingleResponse, mongoose.Document<unknown, {}, mongoose.FlatRecord<SingleResponse>> & mongoose.FlatRecord<SingleResponse> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare class Response {
    attempterid: Attempter;
    responses: SingleResponse[];
}
export declare const ResponseSchema: mongoose.Schema<Response, mongoose.Model<Response, any, any, any, mongoose.Document<unknown, any, Response> & Response & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Response, mongoose.Document<unknown, {}, mongoose.FlatRecord<Response>> & mongoose.FlatRecord<Response> & {
    _id: mongoose.Types.ObjectId;
}>;
