// menus/dto/menu.dto.ts
import { Field, InputType, ObjectType, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsBoolean,
} from 'class-validator';

@ObjectType()

export class Menu {
  @Field(() => ID)
  get id(): string {
    // Mongoose guarda _id como ObjectId, lo convertimos a string
    return this._id?.toString();
  }

  @Field()
  title!: string;

  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  path?: string;

  @Field(() => [String])
  roles!: string[];

  @Field({ defaultValue: true })
  isActive!: boolean;

  @Field(() => [Menu], { nullable: true })
  children?: Menu[];

  // viene de Mongo, pero no se expone directamente en GraphQL
  _id?: any;
}


@InputType()
export class CreateMenuInput {
  @Field()
  @IsString({ message: 'El título debe ser un texto' })
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El ícono debe ser un texto' })
  icon?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El path debe ser un texto' })
  path?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray({ message: 'Los roles deben ser un arreglo de strings' })
  @ArrayNotEmpty({ message: 'Debe incluir al menos un rol si se especifica' })
  @ArrayUnique({ message: 'No puede haber roles repetidos' })
  roles?: string[];

  @Field({ nullable: true, defaultValue: true })
  @IsOptional()
  @IsBoolean({ message: 'isActive debe ser un booleano' })
  isActive?: boolean;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString({ message: 'El parentId debe ser un string válido' })
  parentId?: string;
}

@InputType()
export class UpdateMenuInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El título debe ser un texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El ícono debe ser un texto' })
  icon?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El path debe ser un texto' })
  path?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray({ message: 'Los roles deben ser un arreglo de strings' })
  @ArrayNotEmpty({ message: 'Debe incluir al menos un rol si se especifica' })
  @ArrayUnique({ message: 'No puede haber roles repetidos' })
  roles?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'isActive debe ser un booleano' })
  isActive?: boolean;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString({ message: 'El parentId debe ser un string válido' })
  parentId?: string;
}
