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
exports.MenuResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const menu_dto_1 = require("../dto/menu.dto");
let MenuResolver = class MenuResolver {
    constructor(menusClient) {
        this.menusClient = menusClient;
    }
    async menus() {
        const menus = await (0, rxjs_1.firstValueFrom)(this.menusClient.send({ cmd: 'menus.findAll' }, {}));
        return menus.map(m => ({
            ...m,
            id: m._id?.toString() || m.id?.toString() || 'NO_ID',
        }));
    }
    async menu(id) {
        return await (0, rxjs_1.firstValueFrom)(this.menusClient.send({ cmd: 'menus.findOne' }, id));
    }
    async createMenu(input) {
        return await (0, rxjs_1.firstValueFrom)(this.menusClient.send({ cmd: 'menus.create' }, input));
    }
    async updateMenu(id, input) {
        return await (0, rxjs_1.firstValueFrom)(this.menusClient.send({ cmd: 'menus.update' }, { id, update: input }));
    }
    async deleteMenu(id) {
        return await (0, rxjs_1.firstValueFrom)(this.menusClient.send({ cmd: 'menus.remove' }, id));
    }
};
exports.MenuResolver = MenuResolver;
__decorate([
    (0, graphql_1.Query)(() => [menu_dto_1.Menu]),
    (0, nest_keycloak_connect_1.Roles)({ roles: [] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "menus", null);
__decorate([
    (0, graphql_1.Query)(() => menu_dto_1.Menu, { nullable: true }),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'user'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "menu", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_dto_1.Menu),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin', 'user'] }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_dto_1.CreateMenuInput]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "createMenu", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_dto_1.Menu),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, menu_dto_1.UpdateMenuInput]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "updateMenu", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['admin'] }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "deleteMenu", null);
exports.MenuResolver = MenuResolver = __decorate([
    (0, graphql_1.Resolver)(() => menu_dto_1.Menu),
    __param(0, (0, common_1.Inject)('MENUS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MenuResolver);
//# sourceMappingURL=menu.resolver.js.map