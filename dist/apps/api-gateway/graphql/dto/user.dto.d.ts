export declare class User {
    id: string;
    email: string;
    username: string;
    roles: string[];
    _id: any;
}
export declare class CreateUserInput {
    email: string;
    username: string;
    password: string;
    roles?: string[];
}
export declare class UpdateUserInput {
    email?: string;
    username?: string;
    password?: string;
    roles?: string[];
}
