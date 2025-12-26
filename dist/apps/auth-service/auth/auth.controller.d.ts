import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: any;
        refreshToken: any;
        expiresIn: any;
        refreshExpiresIn: any;
    }>;
    refresh(data: {
        refreshToken: string;
    }): Promise<any>;
    logout(data: {
        refreshToken: string;
    }): Promise<{
        success: boolean;
    }>;
    userInfo(data: {
        accessToken: string;
    }): Promise<any>;
    me(data: {
        accessToken: string;
    }): Promise<any>;
    signup(data: {
        email: string;
        password: string;
        name: string;
    }): Promise<{
        success: boolean;
        message: string;
        user: any;
    }>;
}
