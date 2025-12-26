import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BadRequestException, ConflictException, Inject, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { GraphQLJSONObject } from 'graphql-type-json';

@Resolver()
export class ProductResolver {
  constructor(
    @Inject('PRODUCTS_SERVICE')
    private readonly productsClient: ClientProxy,
  ) {}

  // 📌 Obtener todos los productos
  @Query(() => [GraphQLJSONObject])
  async products(): Promise<any[]> {
    return await firstValueFrom(
      this.productsClient.send({ cmd: 'products.findAll' }, {}),
    );
  }

  // 📌 Obtener producto por ID
  @Query(() => GraphQLJSONObject, { nullable: true })
  async product(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<any> {
    return await firstValueFrom(
      this.productsClient.send({ cmd: 'products.findOne' }, { id }),
    );
  }

  // 📌 Crear producto (INPUT LIBRE)
  @Mutation(() => GraphQLJSONObject)
  async createProduct(
    @Args('input', { type: () => GraphQLJSONObject }) input: any,
  ): Promise<any> {
   try {
      return await firstValueFrom(
        this.productsClient.send<any>(
          { cmd: 'products.create' },
          input,
        ),
      );
    } catch (error: any) {
      // 🔁 TRADUCCIÓN DE ERRORES (CAPA 3)

      if (error?.status === 409) {
        throw new ConflictException(error.message);
      }

      if (error?.status === 400) {
        throw new BadRequestException(error.message);
      }

      throw new InternalServerErrorException(
        error?.message || 'Error creando producto',
      );
    }
  }

  // 📌 Actualizar producto
  @Mutation(() => GraphQLJSONObject)
  async updateProduct(
    @Args('id', { type: () => ID }) id: string,
    @Args('input', { type: () => GraphQLJSONObject }) input: any,
  ): Promise<any> {
    return await firstValueFrom(
      this.productsClient.send({ cmd: 'products.update' }, { id, ...input }),
    );
  }

  // 📌 Eliminar producto
  @Mutation(() => Boolean)
  async deleteProduct(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<boolean> {
    return await firstValueFrom(
      this.productsClient.send({ cmd: 'products.remove' }, { id }),
    );
  }
}
