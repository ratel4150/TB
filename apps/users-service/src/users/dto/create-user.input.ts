import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field() // ahora obligatorio
  password!: string;

  @Field(() => [String], { nullable: true })
  roles?: string[];
  
  @Field({ defaultValue: true })
  isActive?: boolean;
}
