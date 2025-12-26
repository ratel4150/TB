export declare class ProductType {
    identificacion: IdentificacionType;
    informacionGeneral: InformacionGeneralType;
    jerarquiaProducto: JerarquiaProductoType;
    multimedia: MultimediaType;
    clasificacion: ClasificacionType;
    especificacionesTecnicas: EspecificacionesTecnicasType;
    ingredientes: IngredientesType;
    preparacion: PreparacionType;
    presentacion: PresentacionType;
    aplicacionesUso: AplicacionesUsoType;
    certificaciones: CertificacionesType;
    estado: EstadoType;
    documentacion: DocumentacionType;
    seo: SEOType;
}
export declare class IdentificacionType {
    id: string;
    sku: string;
    codigoInterno: string;
    slug: string;
    urlAmigable: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    version: string;
}
export declare class InformacionGeneralType {
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
export declare class JerarquiaProductoType {
    tipoProducto: string;
    productoPadre?: string;
    variantes: VarianteType[];
    kitComponents: string[];
    relacionados: RelacionadosType;
}
export declare class VarianteType {
    id: string;
    nombre: string;
    diferencia: string;
}
export declare class RelacionadosType {
    crossSelling: string[];
    upSelling: string[];
    sustitutos: string[];
    complementarios: string[];
}
export declare class MultimediaType {
    imagenes?: ImageneType[];
    videos: VideoType[];
}
export declare class ImageneType {
    url?: string;
    tipo?: string;
    alt?: string;
    dimensiones?: string;
    formato?: string;
    peso?: string;
    orden?: number;
    thumbnail?: string;
}
export declare class VideoType {
    url?: string;
    tipo?: string;
    titulo?: string;
    duracion?: string;
    thumbnail?: string;
}
export declare class ClasificacionType {
    categoriaPrincipal: string;
    categoriaSecundaria: string;
    subcategoria: string;
    tipoProducto: string;
    familia: string;
    segmentoMercado: string[];
    estacionalidad: string[];
    slugCategoria: string;
    tagsSEO: string[];
    origen: OrigenType;
}
export declare class OrigenType {
    region: string;
    denominacion: string;
    influencia: string;
}
export declare class EspecificacionesTecnicasType {
    composicion: ComposicionType;
    propiedadesFisicas: PropiedadesFisicasType;
    caracteristicasSensoriales: CaracteristicasSensorialesType;
}
export declare class ComposicionType {
    tipoCarne?: string;
    corte?: string;
    tiempoCoccion?: string;
    metodoCoccion?: string;
    marinado?: string;
    adoboBase?: string;
    nivelPicor: string;
}
export declare class PropiedadesFisicasType {
    forma?: string;
    color: string;
    aroma: string;
    textura: string;
    temperaturaServicio: string;
    dimensiones?: DimensionesType;
}
export declare class DimensionesType {
    longitud: string;
    diametro: string;
    pesoAproximado: string;
}
export declare class CaracteristicasSensorialesType {
    sabor: string;
    aroma: string;
    textura: string;
    apariencia: string;
}
export declare class IngredientesType {
    ingredientesPrincipales: IngredientesPrincipaleType[];
    ingredientesSecundarios: string[];
    adoboEspecias: string[];
    alergenos: string[];
    etiquetasEspeciales: string[];
}
export declare class IngredientesPrincipaleType {
    nombre: string;
    porcentaje?: string;
    calidad?: string;
    origen?: string;
    tipo?: string;
    tamaño?: string;
    hechaMano?: boolean;
    preparacion?: string;
    funcion?: string;
}
export declare class PreparacionType {
    metodoCoccion: string;
    tiempoCoccion: string;
    temperaturaCoccion: string;
    tecnicas: string[];
    equipamiento: string[];
}
export declare class PresentacionType {
    estiloServicio: string;
    acompañamientosBase: string[];
    acompañamientosOpcionales: string[];
    garnitura: string;
    vajilla: string;
}
export declare class AplicacionesUsoType {
    ocasionesConsumo: string[];
    momentosIdeales: string[];
    maridajeRecomendado: MaridajeRecomendadoType;
}
export declare class MaridajeRecomendadoType {
    bebidas: string[];
    salsas: string[];
}
export declare class CertificacionesType {
    certificados: CertificadoType[];
    sellosCalidad: string[];
}
export declare class CertificadoType {
    agencia: string;
    certificado: string;
    validoHasta: string;
}
export declare class EstadoType {
    estatus: string;
    disponibilidad: string;
    etiquetas: string[];
    visibilidad: string[];
    prioridad: number;
    destacado: boolean;
}
export declare class DocumentacionType {
    fichaTecnica: string;
    recetaEstandarizada: string;
}
export declare class SEOType {
    slugCanonico: string;
    breadcrumbs: string;
    urlCanonica: string;
    structuredData: StructuredDataType;
}
export declare class StructuredDataType {
    type: string;
    name: string;
    description: string;
    brand: string;
    sku: string;
}
