import { Field, InputType, ObjectType, ID } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field(() => [String])
  roles!: string[];
  _id: any;
}

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail({}, { message: 'El email no es válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email!: string;

  @Field()
  @IsString({ message: 'El username debe ser un texto' })
  @MinLength(3, { message: 'El username debe tener al menos 3 caracteres' })
  username!: string;

  @Field()
  @IsString({ message: 'La contraseña debe ser un texto' })
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password!: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray({ message: 'Los roles deben ser un arreglo de strings' })
  @ArrayNotEmpty({ message: 'Debe incluir al menos un rol si se especifica' })
  @ArrayUnique({ message: 'No puede haber roles repetidos' })
  roles?: string[];
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: 'El email no es válido' })
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'El username debe ser un texto' })
  @MinLength(3, { message: 'El username debe tener al menos 3 caracteres' })
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString({ message: 'La contraseña debe ser un texto' })
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray({ message: 'Los roles deben ser un arreglo de strings' })
  @ArrayNotEmpty({ message: 'Debe incluir al menos un rol si se especifica' })
  @ArrayUnique({ message: 'No puede haber roles repetidos' })
  roles?: string[];
}
