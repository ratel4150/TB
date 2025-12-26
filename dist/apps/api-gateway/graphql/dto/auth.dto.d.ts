export declare class LoginInput {
    email: string;
    password: string;
}
export declare class UserType {
    id: string;
    email: string;
    username: string;
    roles: string[];
}
export declare class AuthResponse {
    accessToken: string | undefined;
    refreshToken: string | undefined;
    expiresIn: number | undefined;
    refreshExpiresIn: number | undefined;
}
export declare class SignupInput {
    email: string;
    password: string;
    name: string;
}
export declare class SignupResponse {
    success: boolean;
    message?: string;
}
