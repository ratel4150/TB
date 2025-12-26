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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const crypto = require("crypto");
let UsersService = UsersService_1 = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    async findAll(page = 1, limit = 10, role) {
        const query = role ? { roles: role } : {};
        return this.userModel
            .find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
    }
    async findOne(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user)
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        return {
            id: String(user._id),
            email: user.email,
            username: user.username,
            roles: user.roles,
        };
    }
    async create(input) {
        try {
            const passwordHash = crypto
                .createHash('sha256')
                .update(input.password)
                .digest('hex');
            const doc = new this.userModel({
                email: input.email,
                username: input.username,
                passwordHash,
                roles: input.roles?.length ? input.roles : ['user'],
            });
            const saved = await doc.save();
            this.logger.log(`Nuevo usuario creado: ${saved._id} ${saved.username} (${saved.email})`);
            return {
                success: true,
                message: 'User successfully created',
            };
        }
        catch (error) {
            this.logger.error('Error al crear usuario', error instanceof Error ? error.stack : String(error));
            throw new common_1.InternalServerErrorException('Failed to create user');
        }
    }
    async update(id, updateData) {
        const updatePayload = { ...updateData };
        if (updateData.password) {
            updatePayload.passwordHash = crypto
                .createHash('sha256')
                .update(updateData.password)
                .digest('hex');
            delete updatePayload.password;
        }
        const updated = await this.userModel.findByIdAndUpdate(id, updatePayload, { new: true }).exec();
        if (!updated)
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        return {
            id: String(updated._id),
            email: updated.email,
            username: updated.username,
            roles: updated.roles,
        };
    }
    async delete(id) {
        const deleted = await this.userModel.findByIdAndDelete(id).exec();
        if (!deleted)
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        return {
            id: String(deleted._id),
            email: deleted.email,
            username: deleted.username,
            roles: deleted.roles,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map