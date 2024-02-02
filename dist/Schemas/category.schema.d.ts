import * as mongoose from 'mongoose';
import { User } from './user.schema';
export declare class Category {
    userid: User;
    category: string;
}
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Category & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & mongoose.FlatRecord<Category> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface CategoryInterface extends mongoose.Document {
    _id: string;
    userid: string;
    category: string;
}
