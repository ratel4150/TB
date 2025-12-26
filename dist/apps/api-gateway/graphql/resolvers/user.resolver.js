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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const user_dto_1 = require("../dto/user.dto");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const rxjs_1 = require("rxjs");
let UserResolver = class UserResolver {
    constructor(usersClient) {
        this.usersClient = usersClient;
    }
    async users() {
        const users = await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.findAll' }, {}));
        console.log('Users from microservice:', users);
        return users.map(u => ({
            ...u,
            id: u._id?.toString() || u.id?.toString() || 'NO_ID',
        }));
    }
    async user(id) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.findOne' }, { id }));
    }
    async createUser(input) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.create' }, input));
    }
    async updateUser(id, input) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.update' }, { id, ...input }));
    }
    async deleteUser(id) {
        return await (0, rxjs_1.firstValueFrom)(this.usersClient.send({ cmd: 'users.remove' }, { id }));
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(() => [user_dto_1.User]),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'user'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(() => user_dto_1.User, { nullable: true }),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'user'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.User),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'user'] }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.User),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_dto_1.User),
    __param(0, (0, common_1.Inject)('USERS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map