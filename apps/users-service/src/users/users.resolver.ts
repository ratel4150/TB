import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

import { CreateUserInput } from './dto/create-user.input';
import { UserType } from './dto/user.dto';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => UserType)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

@Mutation(() => UserType)
async createUser(@Args('input') input: CreateUserInput) {
  // Ahora el input tiene 'username', 'email', 'password' y opcionalmente 'roles'
  return this.usersService.create(input);
}
}
