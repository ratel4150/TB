// menus/dto/menu.dto.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MenuType {
  @Field(() => ID)
  id!: string;

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

  // Relación jerárquica con submenús
  @Field(() => [MenuType], { nullable: true })
  children?: MenuType[];
    private _id: any;
}
