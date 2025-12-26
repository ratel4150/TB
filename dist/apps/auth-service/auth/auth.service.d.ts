export declare class AuthService {
    private readonly logger;
    private readonly tokenUrl;
    private readonly userInfoUrl;
    private readonly logoutUrl;
    private readonly kcAdminUrl;
    private usersClient;
    constructor();
    signup(input: any): Promise<{
        success: boolean;
        message: string;
        user: any;
    }>;
    private getAdminToken;
    login(email: string, password: string): Promise<{
        accessToken: any;
        refreshToken: any;
        expiresIn: any;
        refreshExpiresIn: any;
    }>;
    refreshToken(refreshToken: string): Promise<any>;
    logout(refreshToken: string): Promise<{
        success: boolean;
    }>;
    userInfo(accessToken: string): Promise<any>;
    me(accessToken: string): Promise<any>;
}
