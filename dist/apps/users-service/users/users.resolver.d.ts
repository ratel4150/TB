import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User, {}, {}> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User, {}, {}> & import("./schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    user(id: string): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
    createUser(input: CreateUserInput): Promise<{
        success: boolean;
        message: string;
    }>;
}
