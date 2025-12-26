// menu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>;

@Schema({ timestamps: true })
export class Menu {
  @Prop({ required: true })
  title!: string; // Nombre del menú o submenu

  @Prop()
  icon?: string; // Opcional, para frontend

  @Prop()
  path?: string; // Ruta en frontend o backend

  @Prop({ default: [] })
  roles!: string[]; // Roles que pueden acceder

  @Prop({ default: true })
  isActive!: boolean;

  // Relación con submenús
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Menu' }] })
  children?: Menu[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
