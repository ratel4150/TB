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
var ProductService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const products_schema_1 = require("./schemas/products.schema");
let ProductService = ProductService_1 = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
        this.logger = new common_1.Logger(ProductService_1.name);
    }
    async findAll() {
        return this.productModel.find().exec();
    }
    async findOne(id) {
        const product = await this.productModel.findById(id).exec();
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async create(input) {
        this.logger.log(input);
        const { identificacion } = input;
        if (!identificacion?.productId || !identificacion?.sku) {
            throw new common_1.BadRequestException('productId y sku son requeridos');
        }
        const existingProduct = await this.productModel.findOne({
            $or: [
                { 'identificacion.productId': identificacion.productId },
                { 'identificacion.sku': identificacion.sku },
            ],
        }).lean();
        if (existingProduct) {
            if (existingProduct.identificacion.productId === identificacion.productId) {
                throw new common_1.ConflictException(`Ya existe un producto con productId "${identificacion.productId}"`);
            }
            if (existingProduct.identificacion.sku === identificacion.sku) {
                throw new common_1.ConflictException(`Ya existe un producto con sku "${identificacion.sku}"`);
            }
        }
        try {
            const savedProduct = await new this.productModel(input).save();
            this.logger.log(`Product created: ${savedProduct._id}`);
            return savedProduct;
        }
        catch (error) {
            if (error.code === 11000) {
                const field = Object.keys(error.keyPattern)[0];
                const value = error.keyValue[field];
                throw new common_1.ConflictException(`El valor "${value}" ya existe para ${field}`);
            }
            throw new common_1.InternalServerErrorException('Error al crear el producto');
        }
    }
    async update(id, input) {
        const updated = await this.productModel
            .findByIdAndUpdate(id, input, { new: true })
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.logger.log(`Product updated: ${updated._id}`);
        return updated;
    }
    async delete(id) {
        const result = await this.productModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.logger.log(`Product deleted: ${result._id}`);
        return true;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = ProductService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(products_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
//# sourceMappingURL=products.service.js.map