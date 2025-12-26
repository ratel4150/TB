// menu.service.ts
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Menu, MenuDocument } from './schemas/menus.schema';


@Injectable()
export class MenuService {
  private readonly logger = new Logger(MenuService.name);

  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  async findAll(page = 1, limit = 10, role?: string): Promise<Menu[]> {
    const query = role ? { roles: role } : {};
    return this.menuModel
      .find(query)
      .populate('children')
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Menu> {
    const menu = await this.menuModel.findById(id).populate('children').exec();
    if (!menu) throw new NotFoundException(`Menu with ID ${id} not found`);
    return menu;
  }

  async create(input: {
    title: string;
    icon?: string;
    path?: string;
    roles?: string[];
    parentId?: string;
  }): Promise<Menu> {
    try {
      const doc = new this.menuModel({
        title: input.title,
        icon: input.icon,
        path: input.path,
        roles: input.roles?.length ? input.roles : [],
      });

      const saved = await doc.save();

      // Si tiene un padre, agregamos este menú como hijo
      if (input.parentId) {
        await this.menuModel.findByIdAndUpdate(input.parentId, {
          $push: { children: saved._id },
        });
      }

      this.logger.log(`Nuevo menú creado: ${saved._id} (${saved.title})`);

      return saved;
    } catch (error) {
      this.logger.error(
        'Error al crear menú',
        error instanceof Error ? error.stack : String(error),
      );
      throw new InternalServerErrorException('Failed to create menu');
    }
  }

  async update(
    id: string,
    updateData: {
      title?: string;
      icon?: string;
      path?: string;
      roles?: string[];
      isActive?: boolean;
      parentId?: string;
    },
  ): Promise<Menu> {
    const updated = await this.menuModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updated) throw new NotFoundException(`Menu with ID ${id} not found`);

    this.logger.log(`Menú actualizado: ${updated._id} (${updated.title})`);

    return updated;
  }

  async delete(id: string): Promise<Menu> {
    const deleted = await this.menuModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`Menu with ID ${id} not found`);

    // Eliminar referencia del padre si existía
    await this.menuModel.updateMany(
      { children: id },
      { $pull: { children: id } },
    );

    this.logger.log(`Menú eliminado: ${deleted._id} (${deleted.title})`);

    return deleted;
  }
}
