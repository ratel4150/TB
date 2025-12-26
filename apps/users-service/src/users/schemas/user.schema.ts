import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email!: string;
  @Prop()
  username?: string;



  @Prop({ required: true, select: false })
  passwordHash!: string;
    @Prop({ default: [] })
  roles!: string[];

  @Prop({ default: true })
  isActive!: boolean;
}


export const UserSchema = SchemaFactory.createForClass(User);
