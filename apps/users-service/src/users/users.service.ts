import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(page = 1, limit = 10, role?: string) {
    const query = role ? { roles: role } : {};
    return this.userModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return {
      id: String(user._id),
      email: user.email,
      username: user.username,
      roles: user.roles,
    };
  }

   async create(input: { email: string; username: string; password: string; roles?: string[] }) {
    try {
      // Hash de la contraseña
      const passwordHash = crypto
        .createHash('sha256')
        .update(input.password)
        .digest('hex');

      // Crear documento
      const doc = new this.userModel({
        email: input.email,
        username: input.username,
        passwordHash,
        roles: input.roles?.length ? input.roles : ['user'],
      });

      const saved = await doc.save();

      this.logger.log(`Nuevo usuario creado: ${saved._id} ${saved.username} (${saved.email})`);

     return {
  success: true,
  message: 'User successfully created',
/*    user: "usercreado", */
 
};
    } catch (error) {
      this.logger.error('Error al crear usuario', error instanceof Error ? error.stack : String(error));

      // Lanza un error controlado que GraphQL/Apollo pueda manejar
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async update(id: string, updateData: { email?: string; username?: string; password?: string; roles?: string[] }) {
    const updatePayload: any = { ...updateData };

    if (updateData.password) {
      updatePayload.passwordHash = crypto
        .createHash('sha256')
        .update(updateData.password)
        .digest('hex');
      delete updatePayload.password;
    }

    const updated = await this.userModel.findByIdAndUpdate(id, updatePayload, { new: true }).exec();
    if (!updated) throw new NotFoundException(`User with ID ${id} not found`);

    return {
      id: String(updated._id),
      email: updated.email,
      username: updated.username,
      roles: updated.roles,
    };
  }

  async delete(id: string) {
    const deleted = await this.userModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`User with ID ${id} not found`);

    return {
      id: String(deleted._id),
      email: deleted.email,
      username: deleted.username,
      roles: deleted.roles,
    };
  }
}
