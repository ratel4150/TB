// menu.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Product, ProductSchema } from './schemas/products.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
   controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],  // 👈 útil si lo usas en otros módulos
})
export class ProductsModule {}
