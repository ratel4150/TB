import { ClientProxy } from '@nestjs/microservices';
import { User, CreateUserInput, UpdateUserInput } from '../dto/user.dto';
export declare class UserResolver {
    private readonly usersClient;
    constructor(usersClient: ClientProxy);
    users(): Promise<User[]>;
    user(id: string): Promise<User | null>;
    createUser(input: CreateUserInput): Promise<User>;
    updateUser(id: string, input: UpdateUserInput): Promise<User>;
    deleteUser(id: string): Promise<boolean>;
}
