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
var MenuService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menus_schema_1 = require("./schemas/menus.schema");
let MenuService = MenuService_1 = class MenuService {
    constructor(menuModel) {
        this.menuModel = menuModel;
        this.logger = new common_1.Logger(MenuService_1.name);
    }
    async findAll(page = 1, limit = 10, role) {
        const query = role ? { roles: role } : {};
        return this.menuModel
            .find(query)
            .populate('children')
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
    }
    async findOne(id) {
        const menu = await this.menuModel.findById(id).populate('children').exec();
        if (!menu)
            throw new common_1.NotFoundException(`Menu with ID ${id} not found`);
        return menu;
    }
    async create(input) {
        try {
            const doc = new this.menuModel({
                title: input.title,
                icon: input.icon,
                path: input.path,
                roles: input.roles?.length ? input.roles : [],
            });
            const saved = await doc.save();
            if (input.parentId) {
                await this.menuModel.findByIdAndUpdate(input.parentId, {
                    $push: { children: saved._id },
                });
            }
            this.logger.log(`Nuevo menú creado: ${saved._id} (${saved.title})`);
            return saved;
        }
        catch (error) {
            this.logger.error('Error al crear menú', error instanceof Error ? error.stack : String(error));
            throw new common_1.InternalServerErrorException('Failed to create menu');
        }
    }
    async update(id, updateData) {
        const updated = await this.menuModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updated)
            throw new common_1.NotFoundException(`Menu with ID ${id} not found`);
        this.logger.log(`Menú actualizado: ${updated._id} (${updated.title})`);
        return updated;
    }
    async delete(id) {
        const deleted = await this.menuModel.findByIdAndDelete(id).exec();
        if (!deleted)
            throw new common_1.NotFoundException(`Menu with ID ${id} not found`);
        await this.menuModel.updateMany({ children: id }, { $pull: { children: id } });
        this.logger.log(`Menú eliminado: ${deleted._id} (${deleted.title})`);
        return deleted;
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = MenuService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menus_schema_1.Menu.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MenuService);
//# sourceMappingURL=menus.service.js.map