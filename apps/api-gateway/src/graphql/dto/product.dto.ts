import { ObjectType, Field, ID, PartialType, InputType } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  productId!: string;

  @Field({ nullable: true })
  identificacion?: any;

  @Field({ nullable: true })
  informacionGeneral?: any;

  @Field({ nullable: true })
  jerarquiaProducto?: any;

  @Field({ nullable: true })
  multimedia?: any;

  @Field({ nullable: true })
  clasificacion?: any;

  @Field({ nullable: true })
  especificacionesTecnicas?: any;

  @Field({ nullable: true })
  ingredientes?: any;

  @Field({ nullable: true })
  preparacion?: any;

  @Field({ nullable: true })
  presentacion?: any;

  @Field({ nullable: true })
  aplicacionesUso?: any;

  @Field({ nullable: true })
  certificaciones?: any;

  @Field({ nullable: true })
  estado?: any;

  @Field({ nullable: true })
  documentacion?: any;

  @Field({ nullable: true })
  seo?: any;
  private _id: any;
}



@InputType()
export class CreateProductInput {
  @Field({ nullable: true })
  identificacion?: any;

  @Field({ nullable: true })
  informacionGeneral?: any;
   @Field({ nullable: true })
  jerarquiaProducto?: any;
/* 
 

  @Field({ nullable: true })
  multimedia?: any;

  @Field({ nullable: true })
  clasificacion?: any;

  @Field({ nullable: true })
  especificacionesTecnicas?: any;

  @Field({ nullable: true })
  ingredientes?: any;

  @Field({ nullable: true })
  preparacion?: any;

  @Field({ nullable: true })
  presentacion?: any;

  @Field({ nullable: true })
  aplicacionesUso?: any;

  @Field({ nullable: true })
  certificaciones?: any;

  @Field({ nullable: true })
  estado?: any;

  @Field({ nullable: true })
  documentacion?: any;

  @Field({ nullable: true })
  seo?: any; */
}


@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
