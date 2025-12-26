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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthResolver_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const auth_dto_1 = require("../dto/auth.dto");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let AuthResolver = AuthResolver_1 = class AuthResolver {
    constructor(authClient) {
        this.authClient = authClient;
        this.logger = new common_1.Logger(AuthResolver_1.name);
    }
    async login(input) {
        this.logger.log(`Login attempt for user: ${input.email}`);
        try {
            const result = await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'auth.login' }, input));
            this.logger.log(`Login successful for user: ${input.email}`);
            this.logger.log(`${result}`);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                this.logger.error(`Login failed for user: ${input.email}`, error.stack);
                throw new Error(error.message);
            }
            else {
                this.logger.error(`Unknown error type during login for user: ${input.email}`, error);
                throw new Error('Unknown error occurred');
            }
        }
    }
    async signup(input) {
        this.logger.debug(`Signup request: ${input}`);
        this.logger.debug(`Signup request: email=${input.email}, password=${input.password}, name=${input.name}`);
        this.logger.debug(`Signup request: ${JSON.stringify(input)}`);
        return await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'auth.signup' }, input));
    }
    async refreshToken(refreshToken) {
        return await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'auth.refresh' }, { refreshToken }));
    }
    async logout(refreshToken) {
        return await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'auth.logout' }, { refreshToken }));
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => auth_dto_1.AuthResponse),
    (0, nest_keycloak_connect_1.Public)(),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_dto_1.SignupResponse),
    (0, nest_keycloak_connect_1.Public)(),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignupInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_dto_1.AuthResponse),
    (0, nest_keycloak_connect_1.Public)(),
    __param(0, (0, graphql_1.Args)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['user', 'admin'] }),
    __param(0, (0, graphql_1.Args)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
exports.AuthResolver = AuthResolver = AuthResolver_1 = __decorate([
    (0, graphql_1.Resolver)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map