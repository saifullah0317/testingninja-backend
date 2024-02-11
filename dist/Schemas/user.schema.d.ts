import * as mongoose from 'mongoose';
export declare class User {
    username: string;
    email: string;
    password: string;
    active: boolean;
    verificationCode: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface UserInterface extends mongoose.Document {
    _id: string;
    username: string;
    email: string;
    password: string;
    active: boolean;
    verificationCode: string;
}
