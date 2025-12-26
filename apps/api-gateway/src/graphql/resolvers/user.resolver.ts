import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User, CreateUserInput, UpdateUserInput } from '../dto/user.dto';
import { Roles } from 'nest-keycloak-connect';
import { firstValueFrom } from 'rxjs';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  // 📌 Obtener todos los usuarios
@Query(() => [User])
@Roles({ roles: ['admin','user'] })
async users(): Promise<User[]> {
  const users = await firstValueFrom(
    this.usersClient.send<User[]>({ cmd: 'users.findAll' }, {}),
  );

  console.log('Users from microservice:', users); // <--- revisa qué llega

  return users.map(u => ({
    ...u,
    id: u._id?.toString() || u.id?.toString() || 'NO_ID', // fallback si no hay id
  }));
}


  // 📌 Obtener un usuario por ID
  @Query(() => User, { nullable: true })
  @Roles({ roles: ['admin', 'user'] })
  async user(@Args('id', { type: () => ID }) id: string): Promise<User | null> {
    return await firstValueFrom(
      this.usersClient.send<User | null>({ cmd: 'users.findOne' }, { id }),
    );
  }

  // 📌 Crear usuario
  @Mutation(() => User)
  @Roles({ roles: ['admin', 'user'] })
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return await firstValueFrom(
      this.usersClient.send<User>({ cmd: 'users.create' }, input),
    );
  }

  // 📌 Actualizar usuario
  @Mutation(() => User)
  @Roles({ roles: ['admin'] })
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<User> {
    return await firstValueFrom(
      this.usersClient.send<User>({ cmd: 'users.update' }, { id, ...input }),
    );
  }

  // 📌 Eliminar usuario
  @Mutation(() => Boolean)
  @Roles({ roles: ['admin'] })
  async deleteUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<boolean> {
    return await firstValueFrom(
      this.usersClient.send<boolean>({ cmd: 'users.remove' }, { id }),
    );
  }
}
