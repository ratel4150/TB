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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductInput = exports.CreateProductInput = exports.ProductType = void 0;
const graphql_1 = require("@nestjs/graphql");
let ProductType = class ProductType {
};
exports.ProductType = ProductType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], ProductType.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "identificacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "informacionGeneral", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "jerarquiaProducto", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "multimedia", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "clasificacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "especificacionesTecnicas", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "ingredientes", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "preparacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "presentacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "aplicacionesUso", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "certificaciones", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "estado", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "documentacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], ProductType.prototype, "seo", void 0);
exports.ProductType = ProductType = __decorate([
    (0, graphql_1.ObjectType)()
], ProductType);
let CreateProductInput = class CreateProductInput {
};
exports.CreateProductInput = CreateProductInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], CreateProductInput.prototype, "identificacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], CreateProductInput.prototype, "informacionGeneral", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Object)
], CreateProductInput.prototype, "jerarquiaProducto", void 0);
exports.CreateProductInput = CreateProductInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);
let UpdateProductInput = class UpdateProductInput extends (0, graphql_1.PartialType)(CreateProductInput) {
};
exports.UpdateProductInput = UpdateProductInput;
exports.UpdateProductInput = UpdateProductInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductInput);
//# sourceMappingURL=product.dto.js.map