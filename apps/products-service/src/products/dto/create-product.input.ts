import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float)
  price!: number;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => [String], { nullable: true })
  ingredientes?: string[];

  @Field({ defaultValue: true })
  isActive?: boolean; 
}
