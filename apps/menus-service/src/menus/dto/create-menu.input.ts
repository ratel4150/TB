import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field()
  title!: string;

  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  path?: string;

  @Field(() => [String], { nullable: true })
  roles?: string[];

  @Field({ defaultValue: true })
  isActive?: boolean;

  @Field(() => ID, { nullable: true })
  parentId?: string; // Para asociar submenús
}
