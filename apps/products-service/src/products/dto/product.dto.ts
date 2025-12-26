import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => IdentificacionType)
  identificacion!: IdentificacionType;

  @Field(() => InformacionGeneralType)
  informacionGeneral!: InformacionGeneralType;

  @Field(() => JerarquiaProductoType)
  jerarquiaProducto!: JerarquiaProductoType;

  @Field(() => MultimediaType)
  multimedia!: MultimediaType;

  @Field(() => ClasificacionType)
  clasificacion!: ClasificacionType;

  @Field(() => EspecificacionesTecnicasType)
  especificacionesTecnicas!: EspecificacionesTecnicasType;

  @Field(() => IngredientesType)
  ingredientes!: IngredientesType;

  @Field(() => PreparacionType)
  preparacion!: PreparacionType;

  @Field(() => PresentacionType)
  presentacion!: PresentacionType;

  @Field(() => AplicacionesUsoType)
  aplicacionesUso!: AplicacionesUsoType;

  @Field(() => CertificacionesType)
  certificaciones!: CertificacionesType;

  @Field(() => EstadoType)
  estado!: EstadoType;

  @Field(() => DocumentacionType)
  documentacion!: DocumentacionType;

  @Field(() => SEOType)
  seo!: SEOType;
}
@ObjectType()
export class IdentificacionType {
  @Field()
  id!: string;

  @Field()
  sku!: string;

  @Field()
  codigoInterno!: string;

  @Field()
  slug!: string;

  @Field()
  urlAmigable!: string;

  @Field()
  fechaCreacion!: string;

  @Field()
  fechaActualizacion!: string;

  @Field()
  version!: string;
}
@ObjectType()
export class InformacionGeneralType {
  @Field()
  nombreComercial!: string;

  @Field()
  nombreTecnico!: string;

  @Field()
  descripcionCorta!: string;

  @Field()
  descripcionLarga!: string;

  @Field()
  marca!: string;

  @Field()
  linea!: string;

  @Field()
  modelo!: string;

  @Field()
  serie!: string;

  @Field()
  metaTitle!: string;

  @Field()
  metaDescription!: string;

  @Field(() => [String])
  palabrasClave!: string[];

  @Field()
  leyendaProducto!: string;
}
@ObjectType()
export class JerarquiaProductoType {
  @Field()
  tipoProducto!: string;

  @Field({ nullable: true })
  productoPadre?: string;

  @Field(() => [VarianteType])
  variantes!: VarianteType[];

  @Field(() => [String])
  kitComponents!: string[];

  @Field(() => RelacionadosType)
  relacionados!: RelacionadosType;
}

@ObjectType()
export class VarianteType {
  @Field()
  id!: string;

  @Field()
  nombre!: string;

  @Field()
  diferencia!: string;
}

@ObjectType()
export class RelacionadosType {
  @Field(() => [String])
  crossSelling!: string[];

  @Field(() => [String])
  upSelling!: string[];

  @Field(() => [String])
  sustitutos!: string[];

  @Field(() => [String])
  complementarios!: string[];
}
@ObjectType()
export class MultimediaType {
  @Field(() => [ImageneType], { nullable: true })
  imagenes?: ImageneType[];

  @Field(() => [VideoType])
  videos!: VideoType[];
}

@ObjectType()
export class ImageneType {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  tipo?: string;

  @Field({ nullable: true })
  alt?: string;

  @Field({ nullable: true })
  dimensiones?: string;

  @Field({ nullable: true })
  formato?: string;

  @Field({ nullable: true })
  peso?: string;

  @Field({ nullable: true })
  orden?: number;

  @Field({ nullable: true })
  thumbnail?: string;
}

@ObjectType()
export class VideoType {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  tipo?: string;

  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  duracion?: string;

  @Field({ nullable: true })
  thumbnail?: string;
}
@ObjectType()
export class ClasificacionType {
  @Field()
  categoriaPrincipal!: string;

  @Field()
  categoriaSecundaria!: string;

  @Field()
  subcategoria!: string;

  @Field()
  tipoProducto!: string;

  @Field()
  familia!: string;

  @Field(() => [String])
  segmentoMercado!: string[];

  @Field(() => [String])
  estacionalidad!: string[];

  @Field()
  slugCategoria!: string;

  @Field(() => [String])
  tagsSEO!: string[];

  @Field(() => OrigenType)
  origen!: OrigenType;
}

@ObjectType()
export class OrigenType {
  @Field()
  region!: string;

  @Field()
  denominacion!: string;

  @Field()
  influencia!: string;
}
@ObjectType()
export class EspecificacionesTecnicasType {
  @Field(() => ComposicionType)
  composicion!: ComposicionType;

  @Field(() => PropiedadesFisicasType)
  propiedadesFisicas!: PropiedadesFisicasType;

  @Field(() => CaracteristicasSensorialesType)
  caracteristicasSensoriales!: CaracteristicasSensorialesType;
}

@ObjectType()
export class ComposicionType {
  @Field({ nullable: true })
  tipoCarne?: string;

  @Field({ nullable: true })
  corte?: string;

  @Field({ nullable: true })
  tiempoCoccion?: string;

  @Field({ nullable: true })
  metodoCoccion?: string;

  @Field({ nullable: true })
  marinado?: string;

  @Field({ nullable: true })
  adoboBase?: string;

  @Field()
  nivelPicor!: string;
}

@ObjectType()
export class PropiedadesFisicasType {
  @Field({ nullable: true })
  forma?: string;

  @Field()
  color!: string;

  @Field()
  aroma!: string;

  @Field()
  textura!: string;

  @Field()
  temperaturaServicio!: string;

  @Field(() => DimensionesType, { nullable: true })
  dimensiones?: DimensionesType;
}

@ObjectType()
export class DimensionesType {
  @Field()
  longitud!: string;

  @Field()
  diametro!: string;

  @Field()
  pesoAproximado!: string;
}

@ObjectType()
export class CaracteristicasSensorialesType {
  @Field()
  sabor!: string;

  @Field()
  aroma!: string;

  @Field()
  textura!: string;

  @Field()
  apariencia!: string;
}
@ObjectType()
export class IngredientesType {
  @Field(() => [IngredientesPrincipaleType])
  ingredientesPrincipales!: IngredientesPrincipaleType[];

  @Field(() => [String])
  ingredientesSecundarios!: string[];

  @Field(() => [String])
  adoboEspecias!: string[];

  @Field(() => [String])
  alergenos!: string[];

  @Field(() => [String])
  etiquetasEspeciales!: string[];
}

@ObjectType()
export class IngredientesPrincipaleType {
  @Field()
  nombre!: string;

  @Field({ nullable: true })
  porcentaje?: string;

  @Field({ nullable: true })
  calidad?: string;

  @Field({ nullable: true })
  origen?: string;

  @Field({ nullable: true })
  tipo?: string;

  @Field({ nullable: true })
  tamaño?: string;

  @Field({ nullable: true })
  hechaMano?: boolean;

  @Field({ nullable: true })
  preparacion?: string;

  @Field({ nullable: true })
  funcion?: string;
}
@ObjectType()
export class PreparacionType {
  @Field()
  metodoCoccion!: string;

  @Field()
  tiempoCoccion!: string;

  @Field()
  temperaturaCoccion!: string;

  @Field(() => [String])
  tecnicas!: string[];

  @Field(() => [String])
  equipamiento!: string[];
}
@ObjectType()
export class PresentacionType {
  @Field()
  estiloServicio!: string;

  @Field(() => [String])
  acompañamientosBase!: string[];

  @Field(() => [String])
  acompañamientosOpcionales!: string[];

  @Field()
  garnitura!: string;

  @Field()
  vajilla!: string;
}
@ObjectType()
export class AplicacionesUsoType {
  @Field(() => [String])
  ocasionesConsumo!: string[];

  @Field(() => [String])
  momentosIdeales!: string[];

  @Field(() => MaridajeRecomendadoType)
  maridajeRecomendado!: MaridajeRecomendadoType;
}

@ObjectType()
export class MaridajeRecomendadoType {
  @Field(() => [String])
  bebidas!: string[];

  @Field(() => [String])
  salsas!: string[];
}
@ObjectType()
export class CertificacionesType {
  @Field(() => [CertificadoType])
  certificados!: CertificadoType[];

  @Field(() => [String])
  sellosCalidad!: string[];
}

@ObjectType()
export class CertificadoType {
  @Field()
  agencia!: string;

  @Field()
  certificado!: string;

  @Field()
  validoHasta!: string;
}
@ObjectType()
export class EstadoType {
  @Field()
  estatus!: string;

  @Field()
  disponibilidad!: string;

  @Field(() => [String])
  etiquetas!: string[];

  @Field(() => [String])
  visibilidad!: string[];

  @Field()
  prioridad!: number;

  @Field()
  destacado!: boolean;
}
@ObjectType()
export class DocumentacionType {
  @Field()
  fichaTecnica!: string;

  @Field()
  recetaEstandarizada!: string;
}
@ObjectType()
export class SEOType {
  @Field()
  slugCanonico!: string;

  @Field()
  breadcrumbs!: string;

  @Field()
  urlCanonica!: string;

  @Field(() => StructuredDataType)
  structuredData!: StructuredDataType;
}

@ObjectType()
export class StructuredDataType {
  @Field()
  type!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  brand!: string;

  @Field()
  sku!: string;
}
