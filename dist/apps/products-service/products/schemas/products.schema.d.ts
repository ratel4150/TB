import { HydratedDocument } from 'mongoose';
export type ProductDocument = HydratedDocument<Product>;
export declare class Dimensiones {
    longitud: string;
    diametro: string;
    pesoAproximado: string;
}
export declare const DimensionesSchema: import("mongoose").Schema<Dimensiones, import("mongoose").Model<Dimensiones, any, any, any, import("mongoose").Document<unknown, any, Dimensiones, any, {}> & Dimensiones & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Dimensiones, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Dimensiones>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Dimensiones> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class PropiedadesFisicas {
    forma: string;
    color: string;
    aroma: string;
    textura: string;
    temperaturaServicio: string;
    dimensiones: Dimensiones;
}
export declare const PropiedadesFisicasSchema: import("mongoose").Schema<PropiedadesFisicas, import("mongoose").Model<PropiedadesFisicas, any, any, any, import("mongoose").Document<unknown, any, PropiedadesFisicas, any, {}> & PropiedadesFisicas & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PropiedadesFisicas, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PropiedadesFisicas>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PropiedadesFisicas> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Composicion {
    tipoCarne: string;
    corte: string;
    tiempoCoccion: string;
    metodoCoccion: string;
    marinado: string;
    adoboBase: string;
    nivelPicor: string;
}
export declare const ComposicionSchema: import("mongoose").Schema<Composicion, import("mongoose").Model<Composicion, any, any, any, import("mongoose").Document<unknown, any, Composicion, any, {}> & Composicion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Composicion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Composicion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Composicion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CaracteristicasSensoriales {
    sabor: string;
    aroma: string;
    textura: string;
    apariencia: string;
}
export declare const CaracteristicasSensorialesSchema: import("mongoose").Schema<CaracteristicasSensoriales, import("mongoose").Model<CaracteristicasSensoriales, any, any, any, import("mongoose").Document<unknown, any, CaracteristicasSensoriales, any, {}> & CaracteristicasSensoriales & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CaracteristicasSensoriales, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CaracteristicasSensoriales>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CaracteristicasSensoriales> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class EspecificacionesTecnicas {
    composicion: Composicion;
    propiedadesFisicas: PropiedadesFisicas;
    caracteristicasSensoriales: CaracteristicasSensoriales;
}
export declare const EspecificacionesTecnicasSchema: import("mongoose").Schema<EspecificacionesTecnicas, import("mongoose").Model<EspecificacionesTecnicas, any, any, any, import("mongoose").Document<unknown, any, EspecificacionesTecnicas, any, {}> & EspecificacionesTecnicas & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EspecificacionesTecnicas, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EspecificacionesTecnicas>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<EspecificacionesTecnicas> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IngredientesPrincipale {
    nombre: string;
    porcentaje: string;
    calidad: string;
    origen: string;
    tipo: string;
    tamaño: string;
    hechaMano: boolean;
    preparacion: string;
    funcion: string;
}
export declare const IngredientesPrincipaleSchema: import("mongoose").Schema<IngredientesPrincipale, import("mongoose").Model<IngredientesPrincipale, any, any, any, import("mongoose").Document<unknown, any, IngredientesPrincipale, any, {}> & IngredientesPrincipale & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IngredientesPrincipale, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IngredientesPrincipale>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IngredientesPrincipale> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Ingredientes {
    ingredientesPrincipales: IngredientesPrincipale[];
    ingredientesSecundarios: string[];
    adoboEspecias: string[];
    alergenos: string[];
    etiquetasEspeciales: string[];
}
export declare const IngredientesSchema: import("mongoose").Schema<Ingredientes, import("mongoose").Model<Ingredientes, any, any, any, import("mongoose").Document<unknown, any, Ingredientes, any, {}> & Ingredientes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ingredientes, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Ingredientes>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Ingredientes> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Origen {
    region: string;
    denominacion: string;
    influencia: string;
}
export declare const OrigenSchema: import("mongoose").Schema<Origen, import("mongoose").Model<Origen, any, any, any, import("mongoose").Document<unknown, any, Origen, any, {}> & Origen & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Origen, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Origen>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Origen> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Clasificacion {
    categoriaPrincipal: string;
    categoriaSecundaria: string;
    subcategoria: string;
    tipoProducto: string;
    familia: string;
    segmentoMercado: string[];
    estacionalidad: string[];
    slugCategoria: string;
    tagsSEO: string[];
    origen: Origen;
}
export declare const ClasificacionSchema: import("mongoose").Schema<Clasificacion, import("mongoose").Model<Clasificacion, any, any, any, import("mongoose").Document<unknown, any, Clasificacion, any, {}> & Clasificacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Clasificacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Clasificacion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Clasificacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Certificado {
    agencia: string;
    certificado: string;
    validoHasta: string;
}
export declare const CertificadoSchema: import("mongoose").Schema<Certificado, import("mongoose").Model<Certificado, any, any, any, import("mongoose").Document<unknown, any, Certificado, any, {}> & Certificado & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificado, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Certificado>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Certificado> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Certificaciones {
    certificados: Certificado[];
    sellosCalidad: string[];
}
export declare const CertificacionesSchema: import("mongoose").Schema<Certificaciones, import("mongoose").Model<Certificaciones, any, any, any, import("mongoose").Document<unknown, any, Certificaciones, any, {}> & Certificaciones & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificaciones, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Certificaciones>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Certificaciones> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Presentacion {
    estiloServicio: string;
    acompañamientosBase: string[];
    acompañamientosOpcionales: string[];
    garnitura: string;
    vajilla: string;
}
export declare const PresentacionSchema: import("mongoose").Schema<Presentacion, import("mongoose").Model<Presentacion, any, any, any, import("mongoose").Document<unknown, any, Presentacion, any, {}> & Presentacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Presentacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Presentacion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Presentacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Preparacion {
    metodoCoccion: string;
    tiempoCoccion: string;
    temperaturaCoccion: string;
    tecnicas: string[];
    equipamiento: string[];
}
export declare const PreparacionSchema: import("mongoose").Schema<Preparacion, import("mongoose").Model<Preparacion, any, any, any, import("mongoose").Document<unknown, any, Preparacion, any, {}> & Preparacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Preparacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Preparacion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Preparacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Imagene {
    url: string;
    tipo: string;
    alt: string;
    dimensiones: string;
    formato: string;
    peso: string;
    orden: number;
    thumbnail: string;
}
export declare const ImageneSchema: import("mongoose").Schema<Imagene, import("mongoose").Model<Imagene, any, any, any, import("mongoose").Document<unknown, any, Imagene, any, {}> & Imagene & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Imagene, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Imagene>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Imagene> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Video {
    url: string;
    tipo: string;
    titulo: string;
    duracion: string;
    thumbnail: string;
}
export declare const VideoSchema: import("mongoose").Schema<Video, import("mongoose").Model<Video, any, any, any, import("mongoose").Document<unknown, any, Video, any, {}> & Video & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Video, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Video>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Video> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Multimedia {
    imagenes: Imagene[];
    videos: Video[];
}
export declare const MultimediaSchema: import("mongoose").Schema<Multimedia, import("mongoose").Model<Multimedia, any, any, any, import("mongoose").Document<unknown, any, Multimedia, any, {}> & Multimedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Multimedia, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Multimedia>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Multimedia> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Variante {
    id: string;
    nombre: string;
    diferencia: string;
}
export declare const VarianteSchema: import("mongoose").Schema<Variante, import("mongoose").Model<Variante, any, any, any, import("mongoose").Document<unknown, any, Variante, any, {}> & Variante & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Variante, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Variante>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Variante> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Relacionados {
    crossSelling: string[];
    upSelling: string[];
    sustitutos: string[];
    complementarios: string[];
}
export declare const RelacionadosSchema: import("mongoose").Schema<Relacionados, import("mongoose").Model<Relacionados, any, any, any, import("mongoose").Document<unknown, any, Relacionados, any, {}> & Relacionados & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Relacionados, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Relacionados>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Relacionados> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class JerarquiaProducto {
    tipoProducto: string;
    productoPadre: string;
    variantes: Variante[];
    kitComponents: string[];
    relacionados: Relacionados;
}
export declare const JerarquiaProductoSchema: import("mongoose").Schema<JerarquiaProducto, import("mongoose").Model<JerarquiaProducto, any, any, any, import("mongoose").Document<unknown, any, JerarquiaProducto, any, {}> & JerarquiaProducto & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, JerarquiaProducto, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<JerarquiaProducto>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<JerarquiaProducto> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Identificacion {
    productId: string;
    sku: string;
    codigoInterno: string;
    slug: string;
    urlAmigable: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    version: string;
}
export declare const IdentificacionSchema: import("mongoose").Schema<Identificacion, import("mongoose").Model<Identificacion, any, any, any, import("mongoose").Document<unknown, any, Identificacion, any, {}> & Identificacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Identificacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Identificacion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Identificacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class InformacionGeneral {
    nombreComercial: string;
    nombreTecnico: string;
    descripcionCorta: string;
    descripcionLarga: string;
    marca: string;
    linea: string;
    modelo: string;
    serie: string;
    metaTitle: string;
    metaDescription: string;
    palabrasClave: string[];
    leyendaProducto: string;
}
export declare const InformacionGeneralSchema: import("mongoose").Schema<InformacionGeneral, import("mongoose").Model<InformacionGeneral, any, any, any, import("mongoose").Document<unknown, any, InformacionGeneral, any, {}> & InformacionGeneral & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InformacionGeneral, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<InformacionGeneral>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<InformacionGeneral> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class MaridajeRecomendado {
    bebidas: string[];
    salsas: string[];
}
export declare const MaridajeRecomendadoSchema: import("mongoose").Schema<MaridajeRecomendado, import("mongoose").Model<MaridajeRecomendado, any, any, any, import("mongoose").Document<unknown, any, MaridajeRecomendado, any, {}> & MaridajeRecomendado & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MaridajeRecomendado, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MaridajeRecomendado>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<MaridajeRecomendado> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class AplicacionesUso {
    ocasionesConsumo: string[];
    momentosIdeales: string[];
    maridajeRecomendado: MaridajeRecomendado;
}
export declare const AplicacionesUsoSchema: import("mongoose").Schema<AplicacionesUso, import("mongoose").Model<AplicacionesUso, any, any, any, import("mongoose").Document<unknown, any, AplicacionesUso, any, {}> & AplicacionesUso & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AplicacionesUso, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AplicacionesUso>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AplicacionesUso> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Estado {
    estatus: string;
    disponibilidad: string;
    etiquetas: string[];
    visibilidad: string[];
    prioridad: number;
    destacado: boolean;
}
export declare const EstadoSchema: import("mongoose").Schema<Estado, import("mongoose").Model<Estado, any, any, any, import("mongoose").Document<unknown, any, Estado, any, {}> & Estado & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Estado, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Estado>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Estado> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Documentacion {
    fichaTecnica: string;
    recetaEstandarizada: string;
}
export declare const DocumentacionSchema: import("mongoose").Schema<Documentacion, import("mongoose").Model<Documentacion, any, any, any, import("mongoose").Document<unknown, any, Documentacion, any, {}> & Documentacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Documentacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Documentacion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Documentacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class StructuredData {
    type: string;
    name: string;
    description: string;
    brand: string;
    sku: string;
}
export declare const StructuredDataSchema: import("mongoose").Schema<StructuredData, import("mongoose").Model<StructuredData, any, any, any, import("mongoose").Document<unknown, any, StructuredData, any, {}> & StructuredData & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StructuredData, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<StructuredData>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<StructuredData> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class SEO {
    slugCanonico: string;
    breadcrumbs: string;
    urlCanonica: string;
    structuredData: StructuredData;
}
export declare const SEOSchema: import("mongoose").Schema<SEO, import("mongoose").Model<SEO, any, any, any, import("mongoose").Document<unknown, any, SEO, any, {}> & SEO & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SEO, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SEO>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SEO> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Product {
    identificacion: Identificacion;
    informacionGeneral: InformacionGeneral;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product, any, {}> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
