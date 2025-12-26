import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
/*   @IsEmail({}, { message: 'El email no es válido' }) */
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsString()
/*   @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' }) */
  password!: string;
}

@ObjectType()
export class UserType {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field(() => [String])
  roles!: string[];
}
@ObjectType()
export class AuthResponse {
  @Field(() => String)
  accessToken: string | undefined;

  @Field(() => String)
  refreshToken: string | undefined;

  @Field(() => Number)
  expiresIn: number | undefined;

  @Field(() => Number)
  refreshExpiresIn: number | undefined;
}


@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsString()
  @MinLength(6)
  password!: string;

  @Field()
  @IsString()
  name!: string;
}



@ObjectType()
export class SignupResponse {
  @Field()
  success!: boolean;

  @Field({ nullable: true })
  message?: string;

/*  @Field({ nullable: true })
  user?: string; */
}
