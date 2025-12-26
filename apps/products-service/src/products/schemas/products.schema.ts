import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

/* -------------------------------------------------------------------------- */
/*                         📌 SUB-SCHEMAS INTERNOS (REQUIRED)                  */
/* -------------------------------------------------------------------------- */

/* ------------ Dimensiones ------------ */
@Schema({ _id: false })
export class Dimensiones {
  @Prop({ type: String, required: true })
  longitud!: string;

  @Prop({ type: String, required: true })
  diametro!: string;

  @Prop({ type: String, required: true })
  pesoAproximado!: string;
}
export const DimensionesSchema = SchemaFactory.createForClass(Dimensiones);

/* ------------ Propiedades Físicas ------------ */
@Schema({ _id: false })
export class PropiedadesFisicas {
  @Prop({ type: String, required: true })
  forma!: string;

  @Prop({ type: String, required: true })
  color!: string;

  @Prop({ type: String, required: true })
  aroma!: string;

  @Prop({ type: String, required: true })
  textura!: string;

  @Prop({ type: String, required: true })
  temperaturaServicio!: string;

  @Prop({ type: DimensionesSchema, required: true })
  dimensiones!: Dimensiones;
}
export const PropiedadesFisicasSchema =
  SchemaFactory.createForClass(PropiedadesFisicas);

/* ------------ Composición ------------ */
@Schema({ _id: false })
export class Composicion {
  @Prop({ type: String, required: true })
  tipoCarne!: string;

  @Prop({ type: String, required: true })
  corte!: string;

  @Prop({ type: String, required: true })
  tiempoCoccion!: string;

  @Prop({ type: String, required: true })
  metodoCoccion!: string;

  @Prop({ type: String, required: true })
  marinado!: string;

  @Prop({ type: String, required: true })
  adoboBase!: string;

  @Prop({ type: String, required: true })
  nivelPicor!: string;
}
export const ComposicionSchema = SchemaFactory.createForClass(Composicion);

/* ------------ Características Sensoriales ------------ */
@Schema({ _id: false })
export class CaracteristicasSensoriales {
  @Prop({ type: String, required: true })
  sabor!: string;

  @Prop({ type: String, required: true })
  aroma!: string;

  @Prop({ type: String, required: true })
  textura!: string;

  @Prop({ type: String, required: true })
  apariencia!: string;
}
export const CaracteristicasSensorialesSchema =
  SchemaFactory.createForClass(CaracteristicasSensoriales);

/* ------------ Especificaciones Técnicas ------------ */
@Schema({ _id: false })
export class EspecificacionesTecnicas {
  @Prop({ type: ComposicionSchema, required: true })
  composicion!: Composicion;

  @Prop({ type: PropiedadesFisicasSchema, required: true })
  propiedadesFisicas!: PropiedadesFisicas;

  @Prop({ type: CaracteristicasSensorialesSchema, required: true })
  caracteristicasSensoriales!: CaracteristicasSensoriales;
}
export const EspecificacionesTecnicasSchema =
  SchemaFactory.createForClass(EspecificacionesTecnicas);

/* ------------ IngredientesPrincipales ------------ */
@Schema({ _id: false })
export class IngredientesPrincipale {
  @Prop({ type: String, required: true })
  nombre!: string;

  @Prop({ type: String, required: true })
  porcentaje!: string;

  @Prop({ type: String, required: true })
  calidad!: string;

  @Prop({ type: String, required: true })
  origen!: string;

  @Prop({ type: String, required: true })
  tipo!: string;

  @Prop({ type: String, required: true })
  tamaño!: string;

  @Prop({ type: Boolean, required: true })
  hechaMano!: boolean;

  @Prop({ type: String, required: true })
  preparacion!: string;

  @Prop({ type: String, required: true })
  funcion!: string;
}
export const IngredientesPrincipaleSchema =
  SchemaFactory.createForClass(IngredientesPrincipale);

/* ------------ Ingredientes ------------ */
@Schema({ _id: false })
export class Ingredientes {
  @Prop({ type: [IngredientesPrincipaleSchema], required: true })
  ingredientesPrincipales!: IngredientesPrincipale[];

  @Prop({ type: [String], required: true })
  ingredientesSecundarios!: string[];

  @Prop({ type: [String], required: true })
  adoboEspecias!: string[];

  @Prop({ type: [String], required: true })
  alergenos!: string[];

  @Prop({ type: [String], required: true })
  etiquetasEspeciales!: string[];
}
export const IngredientesSchema = SchemaFactory.createForClass(Ingredientes);

/* ------------ Origen ------------ */
@Schema({ _id: false })
export class Origen {
  @Prop({ type: String, required: true })
  region!: string;

  @Prop({ type: String, required: true })
  denominacion!: string;

  @Prop({ type: String, required: true })
  influencia!: string;
}
export const OrigenSchema = SchemaFactory.createForClass(Origen);

/* ------------ Clasificación ------------ */
@Schema({ _id: false })
export class Clasificacion {
  @Prop({ type: String, required: true })
  categoriaPrincipal!: string;

  @Prop({ type: String, required: true })
  categoriaSecundaria!: string;

  @Prop({ type: String, required: true })
  subcategoria!: string;

  @Prop({ type: String, required: true })
  tipoProducto!: string;

  @Prop({ type: String, required: true })
  familia!: string;

  @Prop({ type: [String], required: true })
  segmentoMercado!: string[];

  @Prop({ type: [String], required: true })
  estacionalidad!: string[];

  @Prop({ type: String, required: true })
  slugCategoria!: string;

  @Prop({ type: [String], required: true })
  tagsSEO!: string[];

  @Prop({ type: OrigenSchema, required: true })
  origen!: Origen;
}
export const ClasificacionSchema = SchemaFactory.createForClass(Clasificacion);

/* ------------ Certificados ------------ */
@Schema({ _id: false })
export class Certificado {
  @Prop({ type: String, required: true })
  agencia!: string;

  @Prop({ type: String, required: true })
  certificado!: string;

  @Prop({ type: String, required: true })
  validoHasta!: string;
}
export const CertificadoSchema = SchemaFactory.createForClass(Certificado);

/* ------------ Certificaciones ------------ */
@Schema({ _id: false })
export class Certificaciones {
  @Prop({ type: [CertificadoSchema], required: true })
  certificados!: Certificado[];

  @Prop({ type: [String], required: true })
  sellosCalidad!: string[];
}
export const CertificacionesSchema =
  SchemaFactory.createForClass(Certificaciones);

/* ------------ Presentación ------------ */
@Schema({ _id: false })
export class Presentacion {
  @Prop({ type: String, required: true })
  estiloServicio!: string;

  @Prop({ type: [String], required: true })
  acompañamientosBase!: string[];

  @Prop({ type: [String], required: true })
  acompañamientosOpcionales!: string[];

  @Prop({ type: String, required: true })
  garnitura!: string;

  @Prop({ type: String, required: true })
  vajilla!: string;
}
export const PresentacionSchema = SchemaFactory.createForClass(Presentacion);

/* ------------ Preparación ------------ */
@Schema({ _id: false })
export class Preparacion {
  @Prop({ type: String, required: true })
  metodoCoccion!: string;

  @Prop({ type: String, required: true })
  tiempoCoccion!: string;

  @Prop({ type: String, required: true })
  temperaturaCoccion!: string;

  @Prop({ type: [String], required: true })
  tecnicas!: string[];

  @Prop({ type: [String], required: true })
  equipamiento!: string[];
}
export const PreparacionSchema = SchemaFactory.createForClass(Preparacion);

/* ------------ Imagenes ------------ */
@Schema({ _id: false })
export class Imagene {
  @Prop({ type: String, required: true })
  url!: string;

  @Prop({ type: String, required: true })
  tipo!: string;

  @Prop({ type: String, required: true })
  alt!: string;

  @Prop({ type: String, required: true })
  dimensiones!: string;

  @Prop({ type: String, required: true })
  formato!: string;

  @Prop({ type: String, required: true })
  peso!: string;

  @Prop({ type: Number, required: true })
  orden!: number;

  @Prop({ type: String, required: true })
  thumbnail!: string;
}
export const ImageneSchema = SchemaFactory.createForClass(Imagene);

/* ------------ Videos ------------ */
@Schema({ _id: false })
export class Video {
  @Prop({ type: String, required: true })
  url!: string;

  @Prop({ type: String, required: true })
  tipo!: string;

  @Prop({ type: String, required: true })
  titulo!: string;

  @Prop({ type: String, required: true })
  duracion!: string;

  @Prop({ type: String, required: true })
  thumbnail!: string;
}
export const VideoSchema = SchemaFactory.createForClass(Video);

/* ------------ Multimedia ------------ */
@Schema({ _id: false })
export class Multimedia {
  @Prop({ type: [ImageneSchema], required: true })
  imagenes!: Imagene[];

  @Prop({ type: [VideoSchema], required: true })
  videos!: Video[];
}
export const MultimediaSchema = SchemaFactory.createForClass(Multimedia);

/* ------------ Variantes ------------ */
@Schema({ _id: false })
export class Variante {
  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: String, required: true })
  nombre!: string;

  @Prop({ type: String, required: true })
  diferencia!: string;
}
export const VarianteSchema = SchemaFactory.createForClass(Variante);

/* ------------ Relacionados ------------ */
@Schema({ _id: false })
export class Relacionados {
  @Prop({ type: [String], required: true })
  crossSelling!: string[];

  @Prop({ type: [String], required: true })
  upSelling!: string[];

  @Prop({ type: [String], required: true })
  sustitutos!: string[];

  @Prop({ type: [String], required: true })
  complementarios!: string[];
}
export const RelacionadosSchema = SchemaFactory.createForClass(Relacionados);

/* ------------ Jerarquía del Producto ------------ */
@Schema({ _id: false })
export class JerarquiaProducto {
  @Prop({ type: String, required: true })
  tipoProducto!: string;

  @Prop({ type: String, required: true })
  productoPadre!: string;

  @Prop({ type: [VarianteSchema], required: true })
  variantes!: Variante[];

  @Prop({ type: [String], required: true })
  kitComponents!: string[];

  @Prop({ type: RelacionadosSchema, required: true })
  relacionados!: Relacionados;
}
export const JerarquiaProductoSchema =
  SchemaFactory.createForClass(JerarquiaProducto);

/* ------------ Identificación ------------ */
@Schema({ _id: false })
export class Identificacion {
  @Prop({ type: String, required: true })
  productId!: string;

  @Prop({ type: String, required: true })
  sku!: string;

  @Prop({ type: String, required: true })
  codigoInterno!: string;

  @Prop({ type: String, required: true })
  slug!: string;

  @Prop({ type: String, required: true })
  urlAmigable!: string;

  @Prop({ type: String, required: true })
  fechaCreacion!: string;

  @Prop({ type: String, required: true })
  fechaActualizacion!: string;

  @Prop({ type: String, required: true })
  version!: string;
}
export const IdentificacionSchema =
  SchemaFactory.createForClass(Identificacion);

/* ------------ Información General ------------ */
@Schema({ _id: false })
export class InformacionGeneral {
  @Prop({ type: String, required: true })
  nombreComercial!: string;

  @Prop({ type: String, required: true })
  nombreTecnico!: string;

  @Prop({ type: String, required: true })
  descripcionCorta!: string;

  @Prop({ type: String, required: true })
  descripcionLarga!: string;

  @Prop({ type: String, required: true })
  marca!: string;

  @Prop({ type: String, required: true })
  linea!: string;

  @Prop({ type: String, required: true })
  modelo!: string;

  @Prop({ type: String, required: true })
  serie!: string;

  @Prop({ type: String, required: true })
  metaTitle!: string;

  @Prop({ type: String, required: true })
  metaDescription!: string;

  @Prop({ type: [String], required: true })
  palabrasClave!: string[];

  @Prop({ type: String, required: true })
  leyendaProducto!: string;
}
export const InformacionGeneralSchema =
  SchemaFactory.createForClass(InformacionGeneral);

/* ------------ Aplicaciones de Uso ------------ */
@Schema({ _id: false })
export class MaridajeRecomendado {
  @Prop({ type: [String], required: true })
  bebidas!: string[];

  @Prop({ type: [String], required: true })
  salsas!: string[];
}
export const MaridajeRecomendadoSchema =
  SchemaFactory.createForClass(MaridajeRecomendado);

@Schema({ _id: false })
export class AplicacionesUso {
  @Prop({ type: [String], required: true })
  ocasionesConsumo!: string[];

  @Prop({ type: [String], required: true })
  momentosIdeales!: string[];

  @Prop({ type: MaridajeRecomendadoSchema, required: true })
  maridajeRecomendado!: MaridajeRecomendado;
}
export const AplicacionesUsoSchema =
  SchemaFactory.createForClass(AplicacionesUso);

/* ------------ Estado ------------ */
@Schema({ _id: false })
export class Estado {
  @Prop({ type: String, required: true })
  estatus!: string;

  @Prop({ type: String, required: true })
  disponibilidad!: string;

  @Prop({ type: [String], required: true })
  etiquetas!: string[];

  @Prop({ type: [String], required: true })
  visibilidad!: string[];

  @Prop({ type: Number, required: true })
  prioridad!: number;

  @Prop({ type: Boolean, required: true })
  destacado!: boolean;
}
export const EstadoSchema = SchemaFactory.createForClass(Estado);

/* ------------ Documentación ------------ */
@Schema({ _id: false })
export class Documentacion {
  @Prop({ type: String, required: true })
  fichaTecnica!: string;

  @Prop({ type: String, required: true })
  recetaEstandarizada!: string;
}
export const DocumentacionSchema =
  SchemaFactory.createForClass(Documentacion);

/* ------------ SEO ------------ */
@Schema({ _id: false })
export class StructuredData {
  @Prop({ type: String, required: true })
  type!: string;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: String, required: true })
  description!: string;

  @Prop({ type: String, required: true })
  brand!: string;

  @Prop({ type: String, required: true })
  sku!: string;
}
export const StructuredDataSchema =
  SchemaFactory.createForClass(StructuredData);

@Schema({ _id: false })
export class SEO {
  @Prop({ type: String, required: true })
  slugCanonico!: string;

  @Prop({ type: String, required: true })
  breadcrumbs!: string;

  @Prop({ type: String, required: true })
  urlCanonica!: string;

  @Prop({ type: StructuredDataSchema, required: true })
  structuredData!: StructuredData;
}
export const SEOSchema = SchemaFactory.createForClass(SEO);

/* -------------------------------------------------------------------------- */
/*                         📌 SCHEMA PRINCIPAL: PRODUCT                        */
/* -------------------------------------------------------------------------- */

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: IdentificacionSchema, required: false })
  identificacion!: Identificacion;

  @Prop({ type: InformacionGeneralSchema, required: false })
  informacionGeneral!: InformacionGeneral;

  
/* 
  

  @Prop({ type: MultimediaSchema, required: true })
  multimedia!: Multimedia;

  @Prop({ type: ClasificacionSchema, required: true })
  clasificacion!: Clasificacion;

  @Prop({ type: EspecificacionesTecnicasSchema, required: true })
  especificacionesTecnicas!: EspecificacionesTecnicas;

  @Prop({ type: IngredientesSchema, required: true })
  ingredientes!: Ingredientes;

  @Prop({ type: PreparacionSchema, required: true })
  preparacion!: Preparacion;

  @Prop({ type: PresentacionSchema, required: true })
  presentacion!: Presentacion;

  @Prop({ type: AplicacionesUsoSchema, required: true })
  aplicacionesUso!: AplicacionesUso;

  @Prop({ type: CertificacionesSchema, required: true })
  certificaciones!: Certificaciones;

  @Prop({ type: EstadoSchema, required: true })
  estado!: Estado;

  @Prop({ type: DocumentacionSchema, required: true })
  documentacion!: Documentacion;

  @Prop({ type: SEOSchema, required: true })
  seo!: SEO; */
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// 🚫 NO permitir duplicados de productId
ProductSchema.index(
  { 'identificacion.productId': 1 },
  { unique: true }
);

// 🚫 NO permitir duplicados de sku
ProductSchema.index(
  { 'identificacion.sku': 1 },
  { unique: true }
);