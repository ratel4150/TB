import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'users.findAll' })
  async findAll(@Payload() data: { page?: number; limit?: number; role?: string }) {
    return this.usersService.findAll(data.page, data.limit, data.role);
  }

  @MessagePattern({ cmd: 'users.findOne' })
  async findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'users.create' })
  async create(@Payload() input: { email: string; username: string; password: string;  }) {
    return this.usersService.create(input);
  }

  @MessagePattern({ cmd: 'users.update' })
  async update(
    @Payload() data: { id: string; update: { email?: string; username?: string; password?: string; roles?: string[] } },
  ) {
    return this.usersService.update(data.id, data.update);
  }

  @MessagePattern({ cmd: 'users.remove' })
  async remove(@Payload() id: string) {
    return this.usersService.delete(id);
  }
}
