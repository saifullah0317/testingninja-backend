import { UsersService } from './user.service';
import { UserDto } from './user.dto';
import { SignupDto } from './user.dto';
import { User } from 'src/Schemas/user.schema';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getall(): Promise<User[]>;
    getByEmail(body: any): Promise<User>;
    add(body: SignupDto): Promise<User>;
    updateUser(id: string, body: UserDto): Promise<User>;
}
