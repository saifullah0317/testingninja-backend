import { Model } from 'mongoose';
import { User } from 'src/Schemas/user.schema';
import { UserDto } from './user.dto';
import { UserInterface } from 'src/Schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserInterface>);
    sendMail(to: any, subject: any, verificationCode: any, username: any): void;
    login(body: any): Promise<any>;
    getall(): Promise<User[]>;
    add(createUserDto: any): Promise<UserInterface>;
    getByEmail(email: string): Promise<UserInterface>;
    activateUser(id: string): Promise<UserInterface>;
    updateUser(id: string, body: UserDto): Promise<User>;
}
