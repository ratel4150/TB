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
const menus_service_1 = require("./menus.service");
const menu_dto_1 = require("./dto/menu.dto");
const create_menu_input_1 = require("./dto/create-menu.input");
let MenuResolver = class MenuResolver {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async menus() {
        return this.menuService.findAll();
    }
    async menu(id) {
        return this.menuService.findOne(id);
    }
    async createMenu(input) {
        return this.menuService.create(input);
    }
    async updateMenu(id, input) {
        return this.menuService.update(id, input);
    }
    async removeMenu(id) {
        return this.menuService.delete(id);
    }
};
exports.MenuResolver = MenuResolver;
__decorate([
    (0, graphql_1.Query)(() => [menu_dto_1.MenuType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "menus", null);
__decorate([
    (0, graphql_1.Query)(() => menu_dto_1.MenuType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "menu", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_dto_1.MenuType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_input_1.CreateMenuInput]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "createMenu", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_dto_1.MenuType),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "updateMenu", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuResolver.prototype, "removeMenu", null);
exports.MenuResolver = MenuResolver = __decorate([
    (0, graphql_1.Resolver)(() => menu_dto_1.MenuType),
    __metadata("design:paramtypes", [menus_service_1.MenuService])
], MenuResolver);
//# sourceMappingURL=menus.resolver.js.map