import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


/* import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input'; */
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  // 📌 Obtener todos los productos
  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // 📌 Obtener un producto por ID
  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  // 📌 Crear producto
async create(input: any): Promise<Product> {
  this.logger.log(input)
  const { identificacion } = input;

  if (!identificacion?.productId || !identificacion?.sku) {
    throw new BadRequestException('productId y sku son requeridos');
  }

  // 🔍 Verificar duplicados antes de crear
  const existingProduct = await this.productModel.findOne({
    $or: [
      { 'identificacion.productId': identificacion.productId },
      { 'identificacion.sku': identificacion.sku },
    ],
  }).lean();
  if (existingProduct) {
    if (
      existingProduct.identificacion.productId === identificacion.productId
    ) {
      throw new ConflictException(
        `Ya existe un producto con productId "${identificacion.productId}"`,
      );
    }

    if (existingProduct.identificacion.sku === identificacion.sku) {
      throw new ConflictException(
        `Ya existe un producto con sku "${identificacion.sku}"`,
      );
    }
  }

  try {
    const savedProduct = await new this.productModel(input).save();
    this.logger.log(`Product created: ${savedProduct._id}`);
    return savedProduct;

  } catch (error: any) {
    // 🔒 Protección final por índice único (race condition)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      const value = error.keyValue[field];

      throw new ConflictException(
        `El valor "${value}" ya existe para ${field}`,
      );
    }

    throw new InternalServerErrorException('Error al crear el producto');
  }
}

  // 📌 Actualizar producto
  async update(id: string, input: any): Promise<Product> {
    const updated = await this.productModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    this.logger.log(`Product updated: ${updated._id}`);

    return updated;
  }

  // 📌 Eliminar producto
  async delete(id: string): Promise<boolean> {
    const result = await this.productModel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    this.logger.log(`Product deleted: ${result._id}`);

    return true;
  }
}
