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
exports.SignupResponse = exports.SignupInput = exports.AuthResponse = exports.UserType = exports.LoginInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let LoginInput = class LoginInput {
};
exports.LoginInput = LoginInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
exports.LoginInput = LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
let UserType = class UserType {
};
exports.UserType = UserType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], UserType.prototype, "roles", void 0);
exports.UserType = UserType = __decorate([
    (0, graphql_1.ObjectType)()
], UserType);
let AuthResponse = class AuthResponse {
};
exports.AuthResponse = AuthResponse;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], AuthResponse.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], AuthResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Object)
], AuthResponse.prototype, "expiresIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Object)
], AuthResponse.prototype, "refreshExpiresIn", void 0);
exports.AuthResponse = AuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AuthResponse);
let SignupInput = class SignupInput {
};
exports.SignupInput = SignupInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignupInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], SignupInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignupInput.prototype, "name", void 0);
exports.SignupInput = SignupInput = __decorate([
    (0, graphql_1.InputType)()
], SignupInput);
let SignupResponse = class SignupResponse {
};
exports.SignupResponse = SignupResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], SignupResponse.prototype, "success", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SignupResponse.prototype, "message", void 0);
exports.SignupResponse = SignupResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SignupResponse);
//# sourceMappingURL=auth.dto.js.map