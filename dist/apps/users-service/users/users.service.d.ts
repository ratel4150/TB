import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    private readonly logger;
    constructor(userModel: Model<UserDocument>);
    findAll(page?: number, limit?: number, role?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
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
        roles?: string[];
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    update(id: string, updateData: {
        email?: string;
        username?: string;
        password?: string;
        roles?: string[];
    }): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
    delete(id: string): Promise<{
        id: string;
        email: string;
        username: string | undefined;
        roles: string[];
    }>;
}
