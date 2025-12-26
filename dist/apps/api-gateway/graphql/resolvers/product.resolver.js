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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const graphql_type_json_1 = require("graphql-type-json");
let ProductResolver = class ProductResolver {
    constructor(productsClient) {
        this.productsClient = productsClient;
    }
    async products() {
        return await (0, rxjs_1.firstValueFrom)(this.productsClient.send({ cmd: 'products.findAll' }, {}));
    }
    async product(id) {
        return await (0, rxjs_1.firstValueFrom)(this.productsClient.send({ cmd: 'products.findOne' }, { id }));
    }
    async createProduct(input) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.productsClient.send({ cmd: 'products.create' }, input));
        }
        catch (error) {
            if (error?.status === 409) {
                throw new common_1.ConflictException(error.message);
            }
            if (error?.status === 400) {
                throw new common_1.BadRequestException(error.message);
            }
            throw new common_1.InternalServerErrorException(error?.message || 'Error creando producto');
        }
    }
    async updateProduct(id, input) {
        return await (0, rxjs_1.firstValueFrom)(this.productsClient.send({ cmd: 'products.update' }, { id, ...input }));
    }
    async deleteProduct(id) {
        return await (0, rxjs_1.firstValueFrom)(this.productsClient.send({ cmd: 'products.remove' }, { id }));
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Query)(() => [graphql_type_json_1.GraphQLJSONObject]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_type_json_1.GraphQLJSONObject, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Mutation)(() => graphql_type_json_1.GraphQLJSONObject),
    __param(0, (0, graphql_1.Args)('input', { type: () => graphql_type_json_1.GraphQLJSONObject })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => graphql_type_json_1.GraphQLJSONObject),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('input', { type: () => graphql_type_json_1.GraphQLJSONObject })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __param(0, (0, common_1.Inject)('PRODUCTS_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map