// users/dto/user.dto.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
    id!: string;

  @Field()
    username!: string;

  @Field()
    email!: string;

  @Field(() => [String], { nullable: true })
  roles?: string[];

  @Field({ defaultValue: true })
  isActive?: boolean;
}
