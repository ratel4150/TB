import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(data: {
        page?: number;
        limit?: number;
        role?: string;
    }): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User, {}, {}> & import("./schemas/user.schema").User & {
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
    findOne(id: string): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
    create(input: {
        email: string;
        username: string;
        password: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    update(data: {
        id: string;
        update: {
            email?: string;
            username?: string;
            password?: string;
            roles?: string[];
        };
    }): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
}
