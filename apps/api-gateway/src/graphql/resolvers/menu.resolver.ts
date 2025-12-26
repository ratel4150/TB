// menus/menu.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Roles } from 'nest-keycloak-connect';
import { Menu, CreateMenuInput, UpdateMenuInput } from '../dto/menu.dto';



@Resolver(() => Menu)
export class MenuResolver {
  constructor(
    @Inject('MENUS_SERVICE') private readonly menusClient: ClientProxy,
  ) {}

  // 📌 Obtener todos los menús
  @Query(() => [Menu])
  @Roles({ roles: [] })
  async menus(): Promise<Menu[]> {
    const menus = await firstValueFrom(
      this.menusClient.send<Menu[]>({ cmd: 'menus.findAll' }, {}),
    );

    return menus.map(m => ({
      ...m,
      id: m._id?.toString() || m.id?.toString() || 'NO_ID',
    }));
  }

  // 📌 Obtener un menú por ID
  @Query(() => Menu, { nullable: true })
  @Roles({ roles: ['admin', 'user'] })
  async menu(@Args('id', { type: () => ID }) id: string): Promise<Menu | null> {
    return await firstValueFrom(
      this.menusClient.send<Menu | null>({ cmd: 'menus.findOne' }, id),
    );
  }

  // 📌 Crear un menú
  @Mutation(() => Menu)
  @Roles({ roles: ['admin','user'] })
  async createMenu(@Args('input') input: CreateMenuInput): Promise<Menu> {
    return await firstValueFrom(
      this.menusClient.send<Menu>({ cmd: 'menus.create' }, input),
    );
  }

  // 📌 Actualizar un menú
  @Mutation(() => Menu)
  @Roles({ roles: ['admin'] })
  async updateMenu(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateMenuInput,
  ): Promise<Menu> {
    return await firstValueFrom(
      this.menusClient.send<Menu>({ cmd: 'menus.update' }, { id, update: input }),
    );
  }

  // 📌 Eliminar un menú
  @Mutation(() => Boolean)
  @Roles({ roles: ['admin'] })
  async deleteMenu(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return await firstValueFrom(
      this.menusClient.send<boolean>({ cmd: 'menus.remove' }, id),
    );
  }
}
