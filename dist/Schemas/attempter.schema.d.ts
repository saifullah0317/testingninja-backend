import * as mongoose from 'mongoose';
export declare class Attempter {
    email: string;
}
export declare const AttempterSchema: mongoose.Schema<Attempter, mongoose.Model<Attempter, any, any, any, mongoose.Document<unknown, any, Attempter> & Attempter & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Attempter, mongoose.Document<unknown, {}, mongoose.FlatRecord<Attempter>> & mongoose.FlatRecord<Attempter> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface AttempterInterface extends mongoose.Document {
    _id: string;
    email: string;
}
