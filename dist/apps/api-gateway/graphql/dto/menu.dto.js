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
exports.UpdateMenuInput = exports.CreateMenuInput = exports.Menu = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let Menu = class Menu {
    get id() {
        return this._id?.toString();
    }
};
exports.Menu = Menu;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Menu.prototype, "id", null);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Menu.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Menu.prototype, "icon", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Menu.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], Menu.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], Menu.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Menu], { nullable: true }),
    __metadata("design:type", Array)
], Menu.prototype, "children", void 0);
exports.Menu = Menu = __decorate([
    (0, graphql_1.ObjectType)()
], Menu);
let CreateMenuInput = class CreateMenuInput {
};
exports.CreateMenuInput = CreateMenuInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'El título debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El título es obligatorio' }),
    (0, class_validator_1.MinLength)(3, { message: 'El título debe tener al menos 3 caracteres' }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El ícono debe ser un texto' }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "icon", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El path debe ser un texto' }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Los roles deben ser un arreglo de strings' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Debe incluir al menos un rol si se especifica' }),
    (0, class_validator_1.ArrayUnique)({ message: 'No puede haber roles repetidos' }),
    __metadata("design:type", Array)
], CreateMenuInput.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, defaultValue: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'isActive debe ser un booleano' }),
    __metadata("design:type", Boolean)
], CreateMenuInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El parentId debe ser un string válido' }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "parentId", void 0);
exports.CreateMenuInput = CreateMenuInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMenuInput);
let UpdateMenuInput = class UpdateMenuInput {
};
exports.UpdateMenuInput = UpdateMenuInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El título debe ser un texto' }),
    (0, class_validator_1.MinLength)(3, { message: 'El título debe tener al menos 3 caracteres' }),
    __metadata("design:type", String)
], UpdateMenuInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El ícono debe ser un texto' }),
    __metadata("design:type", String)
], UpdateMenuInput.prototype, "icon", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El path debe ser un texto' }),
    __metadata("design:type", String)
], UpdateMenuInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Los roles deben ser un arreglo de strings' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Debe incluir al menos un rol si se especifica' }),
    (0, class_validator_1.ArrayUnique)({ message: 'No puede haber roles repetidos' }),
    __metadata("design:type", Array)
], UpdateMenuInput.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'isActive debe ser un booleano' }),
    __metadata("design:type", Boolean)
], UpdateMenuInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El parentId debe ser un string válido' }),
    __metadata("design:type", String)
], UpdateMenuInput.prototype, "parentId", void 0);
exports.UpdateMenuInput = UpdateMenuInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateMenuInput);
//# sourceMappingURL=menu.dto.js.map