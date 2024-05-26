import * as mongoose from 'mongoose';
export declare class Question {
    question: string;
    startRange: number;
    endRange: number;
    allowMultChoice: boolean;
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
    question: string;
    startRange?: number;
    allowMultChoice?: boolean;
    endRange?: number;
    options?: string[];
    mcqOption?: string;
}
