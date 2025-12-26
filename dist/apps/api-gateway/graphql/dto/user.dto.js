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
exports.UpdateUserInput = exports.CreateUserInput = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)()
], User);
let CreateUserInput = class CreateUserInput {
};
exports.CreateUserInput = CreateUserInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)({}, { message: 'El email no es válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El email es obligatorio' }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'El username debe ser un texto' }),
    (0, class_validator_1.MinLength)(3, { message: 'El username debe tener al menos 3 caracteres' }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser un texto' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Los roles deben ser un arreglo de strings' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Debe incluir al menos un rol si se especifica' }),
    (0, class_validator_1.ArrayUnique)({ message: 'No puede haber roles repetidos' }),
    __metadata("design:type", Array)
], CreateUserInput.prototype, "roles", void 0);
exports.CreateUserInput = CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
let UpdateUserInput = class UpdateUserInput {
};
exports.UpdateUserInput = UpdateUserInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'El email no es válido' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El username debe ser un texto' }),
    (0, class_validator_1.MinLength)(3, { message: 'El username debe tener al menos 3 caracteres' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser un texto' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: 'Los roles deben ser un arreglo de strings' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Debe incluir al menos un rol si se especifica' }),
    (0, class_validator_1.ArrayUnique)({ message: 'No puede haber roles repetidos' }),
    __metadata("design:type", Array)
], UpdateUserInput.prototype, "roles", void 0);
exports.UpdateUserInput = UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
//# sourceMappingURL=user.dto.js.map