import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './products.service';
import { Product } from './schemas/products.schema';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 📌 Obtener todos los productos
  @MessagePattern({ cmd: 'products.findAll' })
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  // 📌 Obtener un producto por ID
  @MessagePattern({ cmd: 'products.findOne' })
  async findOne(@Payload() data: { id: string }): Promise<Product | null> {
    return this.productService.findOne(data.id);
  }

  // 📌 Crear producto (SIN DTO)
  @MessagePattern({ cmd: 'products.create' })
  async create(@Payload() input: any): Promise<Product> {
    return this.productService.create(input);
  }

  // 📌 Actualizar producto (SIN DTO)
  @MessagePattern({ cmd: 'products.update' })
  async update(
    @Payload() data: { id: string } & any,
  ): Promise<Product> {
    const { id, ...input } = data;
    return this.productService.update(id, input);
  }

  // 📌 Eliminar producto
  @MessagePattern({ cmd: 'products.remove' })
  async remove(@Payload() data: { id: string }): Promise<boolean> {
    return this.productService.delete(data.id);
  }
}
