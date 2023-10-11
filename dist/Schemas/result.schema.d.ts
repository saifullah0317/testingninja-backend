import * as mongoose from 'mongoose';
import { Response } from './response.schema';
export declare class Result {
    responseid: Response;
    result: number;
}
export declare const ResultSchema: mongoose.Schema<Result, mongoose.Model<Result, any, any, any, mongoose.Document<unknown, any, Result> & Result & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Result, mongoose.Document<unknown, {}, mongoose.FlatRecord<Result>> & mongoose.FlatRecord<Result> & {
    _id: mongoose.Types.ObjectId;
}>;
