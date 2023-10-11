import * as mongoose from 'mongoose';
export declare class User {
    orgName: string;
    username: string;
    email: string;
    password: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface UserInterface extends mongoose.Document {
    _id: string;
    orgName: string;
    username: string;
    email: string;
    password: string;
}
