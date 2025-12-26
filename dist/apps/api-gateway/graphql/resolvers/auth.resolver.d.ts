import { ClientProxy } from '@nestjs/microservices';
import { LoginInput, AuthResponse, SignupInput, SignupResponse } from '../dto/auth.dto';
export declare class AuthResolver {
    private readonly authClient;
    private readonly logger;
    constructor(authClient: ClientProxy);
    login(input: LoginInput): Promise<AuthResponse>;
    signup(input: SignupInput): Promise<SignupResponse>;
    refreshToken(refreshToken: string): Promise<AuthResponse>;
    logout(refreshToken: string): Promise<boolean>;
}
