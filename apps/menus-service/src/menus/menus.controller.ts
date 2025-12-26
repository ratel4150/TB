// menu.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { Menu } from './schemas/menus.schema';
import { MenuService } from './menus.service';


@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @MessagePattern({ cmd: 'menus.findAll' })
  async findAll(@Payload() data: { page?: number; limit?: number; role?: string }): Promise<Menu[]> {
    return this.menuService.findAll(data.page, data.limit, data.role);
  }

  @MessagePattern({ cmd: 'menus.findOne' })
  async findOne(@Payload() id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @MessagePattern({ cmd: 'menus.create' })
  async create(
    @Payload()
    input: { title: string; icon?: string; path?: string; roles?: string[]; parentId?: string },
  ): Promise<Menu> {
    return this.menuService.create(input);
  }

  @MessagePattern({ cmd: 'menus.update' })
  async update(
    @Payload()
    data: {
      id: string;
      update: { title?: string; icon?: string; path?: string; roles?: string[]; isActive?: boolean; parentId?: string };
    },
  ): Promise<Menu> {
    return this.menuService.update(data.id, data.update);
  }

@MessagePattern({ cmd: 'menus.remove' })
async remove(@Payload() id: string): Promise<Menu> {
  return this.menuService.delete(id);
}

}
