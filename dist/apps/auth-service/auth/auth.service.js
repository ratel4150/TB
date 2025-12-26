"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const keycloak_config_1 = require("../common/keycloak.config");
const node_fetch_1 = require("node-fetch");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let AuthService = AuthService_1 = class AuthService {
    constructor() {
        this.logger = new common_1.Logger(AuthService_1.name);
        this.tokenUrl = `${keycloak_config_1.keycloakConfig.baseUrl}/realms/${keycloak_config_1.keycloakConfig.realm}/protocol/openid-connect/token`;
        this.userInfoUrl = `${keycloak_config_1.keycloakConfig.baseUrl}/realms/${keycloak_config_1.keycloakConfig.realm}/protocol/openid-connect/userinfo`;
        this.logoutUrl = `${keycloak_config_1.keycloakConfig.baseUrl}/realms/${keycloak_config_1.keycloakConfig.realm}/protocol/openid-connect/logout`;
        this.kcAdminUrl = `${keycloak_config_1.keycloakConfig.baseUrl}/admin/realms/${keycloak_config_1.keycloakConfig.realm}`;
        this.usersClient = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.REDIS,
            options: {
                host: process.env.REDIS_HOST || 'localhost',
                port: parseInt(process.env.REDIS_PORT || '6379', 10),
            },
        });
        this.logger.log('AuthService initialized');
    }
    async signup(input) {
        const { email, password, name } = input;
        const sanitizedUsername = name
            .toLowerCase()
            .replace(/[^a-z0-9._-]/g, '');
        this.logger.log(`Signup data: email=${email}, username=${sanitizedUsername}, password=${password}`);
        try {
            const kcRes = await (0, node_fetch_1.default)(`${this.kcAdminUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${await this.getAdminToken()}`,
                },
                body: JSON.stringify({
                    username: sanitizedUsername,
                    email,
                    enabled: true,
                    credentials: [{ type: 'password', value: password, temporary: false }],
                }),
            });
            this.logger.log(`este es kcRESs: ${JSON.stringify(kcRes, null, 2)}`);
            if (!kcRes.ok) {
                const errText = await kcRes.text();
                this.logger.error(`Keycloak signup error: ${errText}`);
                throw new microservices_1.RpcException('Failed to register in Keycloak');
            }
            this.logger.log(`User ${email} created in Keycloak`);
            const user = await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.create' }, { email,
                username: name,
                password }));
            this.logger.log(`User ${email} created in UserService DB`);
            return {
                success: true,
                message: 'User successfully registered',
                user: user,
            };
        }
        catch (err) {
            if (err instanceof Error) {
                this.logger.error(`Signup error: ${err.message}`, err.stack);
                throw new microservices_1.RpcException(err.message);
            }
            else {
                this.logger.error(`Unknown error: ${JSON.stringify(err)}`);
                throw new microservices_1.RpcException('Unknown signup error');
            }
        }
    }
    async getAdminToken() {
        const params = new URLSearchParams();
        params.append('client_id', keycloak_config_1.keycloakConfig.clientId);
        params.append('client_secret', keycloak_config_1.keycloakConfig.clientSecret);
        params.append('grant_type', 'client_credentials');
        const res = await (0, node_fetch_1.default)(`${keycloak_config_1.keycloakConfig.baseUrl}/realms/${keycloak_config_1.keycloakConfig.realm}/protocol/openid-connect/token`, { method: 'POST', body: params });
        if (!res.ok) {
            const errorText = await res.text();
            this.logger.error(`Failed to get admin token: ${errorText}`);
            throw new common_1.UnauthorizedException('Cannot get admin token');
        }
        const data = await res.json();
        return data.access_token;
    }
    async login(email, password) {
        this.logger.debug(`Attempting login for user: ${email}`);
        const params = new URLSearchParams();
        params.append('client_id', keycloak_config_1.keycloakConfig.clientId);
        params.append('client_secret', keycloak_config_1.keycloakConfig.clientSecret);
        params.append('grant_type', 'password');
        params.append('username', email);
        params.append('password', password);
        try {
            const res = await (0, node_fetch_1.default)(this.tokenUrl, {
                method: 'POST',
                body: params,
            });
            if (!res.ok) {
                const errorText = await res.text();
                this.logger.warn(`Failed login attempt for user: ${email}, response: ${errorText}`);
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const data = await res.json();
            this.logger.log(`Successful login for user: ${email}`);
            this.logger.debug(`Keycloak token response: ${JSON.stringify(data)}`);
            return {
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
                expiresIn: data.expires_in,
                refreshExpiresIn: data.refresh_expires_in,
            };
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Login error for user ${email}: ${error.message}`, error.stack);
            }
            else {
                this.logger.error(`Unknown login error for user ${email}`, String(error));
            }
            throw error;
        }
    }
    async refreshToken(refreshToken) {
        this.logger.debug('Attempting token refresh');
        const params = new URLSearchParams();
        params.append('client_id', keycloak_config_1.keycloakConfig.clientId);
        params.append('client_secret', keycloak_config_1.keycloakConfig.clientSecret);
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', refreshToken);
        try {
            const res = await (0, node_fetch_1.default)(this.tokenUrl, { method: 'POST', body: params });
            if (!res.ok) {
                this.logger.warn('Invalid refresh token attempt');
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            this.logger.log('Token refreshed successfully');
            return res.json();
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Refresh token error: ${error.message}`, error.stack);
            }
            throw error;
        }
    }
    async logout(refreshToken) {
        this.logger.debug(`Attempting logout for token: ${refreshToken.substring(0, 10)}...`);
        const params = new URLSearchParams();
        params.append('client_id', keycloak_config_1.keycloakConfig.clientId);
        params.append('client_secret', keycloak_config_1.keycloakConfig.clientSecret);
        params.append('refresh_token', refreshToken);
        try {
            const res = await (0, node_fetch_1.default)(this.logoutUrl, { method: 'POST', body: params });
            if (!res.ok) {
                this.logger.warn('Failed logout attempt');
                throw new common_1.UnauthorizedException('Failed to logout');
            }
            this.logger.log('Logout successful');
            return { success: true };
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Logout error: ${error.message}`, error.stack);
            }
            throw error;
        }
    }
    async userInfo(accessToken) {
        this.logger.debug('Fetching user info');
        try {
            const res = await (0, node_fetch_1.default)(this.userInfoUrl, {
                method: 'GET',
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            if (!res.ok) {
                this.logger.warn('Invalid access token for user info');
                throw new common_1.UnauthorizedException('Invalid access token');
            }
            return res.json();
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`User info error: ${error.message}`, error.stack);
            }
            throw error;
        }
    }
    async me(accessToken) {
        this.logger.debug('Fetching user profile');
        try {
            const kcUser = await this.userInfo(accessToken);
            const profile = await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.findOne' }, { id: kcUser.sub })).catch((error) => {
                this.logger.warn(`User profile not found for ID: ${kcUser.sub}`, error.stack);
                return null;
            });
            this.logger.log(`Retrieved profile for user: ${kcUser.sub}`);
            return { ...kcUser, profile };
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Me endpoint error: ${error.message}`, error.stack);
            }
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthService);
//# sourceMappingURL=auth.service.js.map