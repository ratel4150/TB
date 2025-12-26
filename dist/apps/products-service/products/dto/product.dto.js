"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredDataType = exports.SEOType = exports.DocumentacionType = exports.EstadoType = exports.CertificadoType = exports.CertificacionesType = exports.MaridajeRecomendadoType = exports.AplicacionesUsoType = exports.PresentacionType = exports.PreparacionType = exports.IngredientesPrincipaleType = exports.IngredientesType = exports.CaracteristicasSensorialesType = exports.DimensionesType = exports.PropiedadesFisicasType = exports.ComposicionType = exports.EspecificacionesTecnicasType = exports.OrigenType = exports.ClasificacionType = exports.VideoType = exports.ImageneType = exports.MultimediaType = exports.RelacionadosType = exports.VarianteType = exports.JerarquiaProductoType = exports.InformacionGeneralType = exports.IdentificacionType = exports.ProductType = void 0;
const graphql_1 = require("@nestjs/graphql");
let ProductType = class ProductType {
};
exports.ProductType = ProductType;
__decorate([
    (0, graphql_1.Field)(() => IdentificacionType),
    __metadata("design:type", IdentificacionType)
], ProductType.prototype, "identificacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => InformacionGeneralType),
    __metadata("design:type", InformacionGeneralType)
], ProductType.prototype, "informacionGeneral", void 0);
__decorate([
    (0, graphql_1.Field)(() => JerarquiaProductoType),
    __metadata("design:type", JerarquiaProductoType)
], ProductType.prototype, "jerarquiaProducto", void 0);
__decorate([
    (0, graphql_1.Field)(() => MultimediaType),
    __metadata("design:type", MultimediaType)
], ProductType.prototype, "multimedia", void 0);
__decorate([
    (0, graphql_1.Field)(() => ClasificacionType),
    __metadata("design:type", ClasificacionType)
], ProductType.prototype, "clasificacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => EspecificacionesTecnicasType),
    __metadata("design:type", EspecificacionesTecnicasType)
], ProductType.prototype, "especificacionesTecnicas", void 0);
__decorate([
    (0, graphql_1.Field)(() => IngredientesType),
    __metadata("design:type", IngredientesType)
], ProductType.prototype, "ingredientes", void 0);
__decorate([
    (0, graphql_1.Field)(() => PreparacionType),
    __metadata("design:type", PreparacionType)
], ProductType.prototype, "preparacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => PresentacionType),
    __metadata("design:type", PresentacionType)
], ProductType.prototype, "presentacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => AplicacionesUsoType),
    __metadata("design:type", AplicacionesUsoType)
], ProductType.prototype, "aplicacionesUso", void 0);
__decorate([
    (0, graphql_1.Field)(() => CertificacionesType),
    __metadata("design:type", CertificacionesType)
], ProductType.prototype, "certificaciones", void 0);
__decorate([
    (0, graphql_1.Field)(() => EstadoType),
    __metadata("design:type", EstadoType)
], ProductType.prototype, "estado", void 0);
__decorate([
    (0, graphql_1.Field)(() => DocumentacionType),
    __metadata("design:type", DocumentacionType)
], ProductType.prototype, "documentacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => SEOType),
    __metadata("design:type", SEOType)
], ProductType.prototype, "seo", void 0);
exports.ProductType = ProductType = __decorate([
    (0, graphql_1.ObjectType)()
], ProductType);
let IdentificacionType = class IdentificacionType {
};
exports.IdentificacionType = IdentificacionType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "codigoInterno", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "urlAmigable", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "fechaCreacion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IdentificacionType.prototype, "version", void 0);
exports.IdentificacionType = IdentificacionType = __decorate([
    (0, graphql_1.ObjectType)()
], IdentificacionType);
let InformacionGeneralType = class InformacionGeneralType {
};
exports.InformacionGeneralType = InformacionGeneralType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "nombreComercial", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "nombreTecnico", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "descripcionCorta", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "descripcionLarga", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "marca", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "linea", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "modelo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "serie", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "metaTitle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "metaDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], InformacionGeneralType.prototype, "palabrasClave", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InformacionGeneralType.prototype, "leyendaProducto", void 0);
exports.InformacionGeneralType = InformacionGeneralType = __decorate([
    (0, graphql_1.ObjectType)()
], InformacionGeneralType);
let JerarquiaProductoType = class JerarquiaProductoType {
};
exports.JerarquiaProductoType = JerarquiaProductoType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], JerarquiaProductoType.prototype, "tipoProducto", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], JerarquiaProductoType.prototype, "productoPadre", void 0);
__decorate([
    (0, graphql_1.Field)(() => [VarianteType]),
    __metadata("design:type", Array)
], JerarquiaProductoType.prototype, "variantes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], JerarquiaProductoType.prototype, "kitComponents", void 0);
__decorate([
    (0, graphql_1.Field)(() => RelacionadosType),
    __metadata("design:type", RelacionadosType)
], JerarquiaProductoType.prototype, "relacionados", void 0);
exports.JerarquiaProductoType = JerarquiaProductoType = __decorate([
    (0, graphql_1.ObjectType)()
], JerarquiaProductoType);
let VarianteType = class VarianteType {
};
exports.VarianteType = VarianteType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VarianteType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VarianteType.prototype, "nombre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VarianteType.prototype, "diferencia", void 0);
exports.VarianteType = VarianteType = __decorate([
    (0, graphql_1.ObjectType)()
], VarianteType);
let RelacionadosType = class RelacionadosType {
};
exports.RelacionadosType = RelacionadosType;
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], RelacionadosType.prototype, "crossSelling", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], RelacionadosType.prototype, "upSelling", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], RelacionadosType.prototype, "sustitutos", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], RelacionadosType.prototype, "complementarios", void 0);
exports.RelacionadosType = RelacionadosType = __decorate([
    (0, graphql_1.ObjectType)()
], RelacionadosType);
let MultimediaType = class MultimediaType {
};
exports.MultimediaType = MultimediaType;
__decorate([
    (0, graphql_1.Field)(() => [ImageneType], { nullable: true }),
    __metadata("design:type", Array)
], MultimediaType.prototype, "imagenes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [VideoType]),
    __metadata("design:type", Array)
], MultimediaType.prototype, "videos", void 0);
exports.MultimediaType = MultimediaType = __decorate([
    (0, graphql_1.ObjectType)()
], MultimediaType);
let ImageneType = class ImageneType {
};
exports.ImageneType = ImageneType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "tipo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "alt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "dimensiones", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "formato", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "peso", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ImageneType.prototype, "orden", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ImageneType.prototype, "thumbnail", void 0);
exports.ImageneType = ImageneType = __decorate([
    (0, graphql_1.ObjectType)()
], ImageneType);
let VideoType = class VideoType {
};
exports.VideoType = VideoType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VideoType.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VideoType.prototype, "tipo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VideoType.prototype, "titulo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VideoType.prototype, "duracion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], VideoType.prototype, "thumbnail", void 0);
exports.VideoType = VideoType = __decorate([
    (0, graphql_1.ObjectType)()
], VideoType);
let ClasificacionType = class ClasificacionType {
};
exports.ClasificacionType = ClasificacionType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "categoriaPrincipal", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "categoriaSecundaria", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "subcategoria", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "tipoProducto", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "familia", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], ClasificacionType.prototype, "segmentoMercado", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], ClasificacionType.prototype, "estacionalidad", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClasificacionType.prototype, "slugCategoria", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], ClasificacionType.prototype, "tagsSEO", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrigenType),
    __metadata("design:type", OrigenType)
], ClasificacionType.prototype, "origen", void 0);
exports.ClasificacionType = ClasificacionType = __decorate([
    (0, graphql_1.ObjectType)()
], ClasificacionType);
let OrigenType = class OrigenType {
};
exports.OrigenType = OrigenType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrigenType.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrigenType.prototype, "denominacion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrigenType.prototype, "influencia", void 0);
exports.OrigenType = OrigenType = __decorate([
    (0, graphql_1.ObjectType)()
], OrigenType);
let EspecificacionesTecnicasType = class EspecificacionesTecnicasType {
};
exports.EspecificacionesTecnicasType = EspecificacionesTecnicasType;
__decorate([
    (0, graphql_1.Field)(() => ComposicionType),
    __metadata("design:type", ComposicionType)
], EspecificacionesTecnicasType.prototype, "composicion", void 0);
__decorate([
    (0, graphql_1.Field)(() => PropiedadesFisicasType),
    __metadata("design:type", PropiedadesFisicasType)
], EspecificacionesTecnicasType.prototype, "propiedadesFisicas", void 0);
__decorate([
    (0, graphql_1.Field)(() => CaracteristicasSensorialesType),
    __metadata("design:type", CaracteristicasSensorialesType)
], EspecificacionesTecnicasType.prototype, "caracteristicasSensoriales", void 0);
exports.EspecificacionesTecnicasType = EspecificacionesTecnicasType = __decorate([
    (0, graphql_1.ObjectType)()
], EspecificacionesTecnicasType);
let ComposicionType = class ComposicionType {
};
exports.ComposicionType = ComposicionType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "tipoCarne", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "corte", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "tiempoCoccion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "metodoCoccion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "marinado", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ComposicionType.prototype, "adoboBase", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ComposicionType.prototype, "nivelPicor", void 0);
exports.ComposicionType = ComposicionType = __decorate([
    (0, graphql_1.ObjectType)()
], ComposicionType);
let PropiedadesFisicasType = class PropiedadesFisicasType {
};
exports.PropiedadesFisicasType = PropiedadesFisicasType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], PropiedadesFisicasType.prototype, "forma", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PropiedadesFisicasType.prototype, "color", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PropiedadesFisicasType.prototype, "aroma", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PropiedadesFisicasType.prototype, "textura", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PropiedadesFisicasType.prototype, "temperaturaServicio", void 0);
__decorate([
    (0, graphql_1.Field)(() => DimensionesType, { nullable: true }),
    __metadata("design:type", DimensionesType)
], PropiedadesFisicasType.prototype, "dimensiones", void 0);
exports.PropiedadesFisicasType = PropiedadesFisicasType = __decorate([
    (0, graphql_1.ObjectType)()
], PropiedadesFisicasType);
let DimensionesType = class DimensionesType {
};
exports.DimensionesType = DimensionesType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DimensionesType.prototype, "longitud", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DimensionesType.prototype, "diametro", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DimensionesType.prototype, "pesoAproximado", void 0);
exports.DimensionesType = DimensionesType = __decorate([
    (0, graphql_1.ObjectType)()
], DimensionesType);
let CaracteristicasSensorialesType = class CaracteristicasSensorialesType {
};
exports.CaracteristicasSensorialesType = CaracteristicasSensorialesType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CaracteristicasSensorialesType.prototype, "sabor", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CaracteristicasSensorialesType.prototype, "aroma", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CaracteristicasSensorialesType.prototype, "textura", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CaracteristicasSensorialesType.prototype, "apariencia", void 0);
exports.CaracteristicasSensorialesType = CaracteristicasSensorialesType = __decorate([
    (0, graphql_1.ObjectType)()
], CaracteristicasSensorialesType);
let IngredientesType = class IngredientesType {
};
exports.IngredientesType = IngredientesType;
__decorate([
    (0, graphql_1.Field)(() => [IngredientesPrincipaleType]),
    __metadata("design:type", Array)
], IngredientesType.prototype, "ingredientesPrincipales", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], IngredientesType.prototype, "ingredientesSecundarios", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], IngredientesType.prototype, "adoboEspecias", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], IngredientesType.prototype, "alergenos", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], IngredientesType.prototype, "etiquetasEspeciales", void 0);
exports.IngredientesType = IngredientesType = __decorate([
    (0, graphql_1.ObjectType)()
], IngredientesType);
let IngredientesPrincipaleType = class IngredientesPrincipaleType {
};
exports.IngredientesPrincipaleType = IngredientesPrincipaleType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "nombre", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "porcentaje", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "calidad", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "origen", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "tipo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "tama\u00F1o", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], IngredientesPrincipaleType.prototype, "hechaMano", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "preparacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], IngredientesPrincipaleType.prototype, "funcion", void 0);
exports.IngredientesPrincipaleType = IngredientesPrincipaleType = __decorate([
    (0, graphql_1.ObjectType)()
], IngredientesPrincipaleType);
let PreparacionType = class PreparacionType {
};
exports.PreparacionType = PreparacionType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PreparacionType.prototype, "metodoCoccion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PreparacionType.prototype, "tiempoCoccion", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PreparacionType.prototype, "temperaturaCoccion", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PreparacionType.prototype, "tecnicas", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PreparacionType.prototype, "equipamiento", void 0);
exports.PreparacionType = PreparacionType = __decorate([
    (0, graphql_1.ObjectType)()
], PreparacionType);
let PresentacionType = class PresentacionType {
};
exports.PresentacionType = PresentacionType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PresentacionType.prototype, "estiloServicio", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PresentacionType.prototype, "acompa\u00F1amientosBase", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PresentacionType.prototype, "acompa\u00F1amientosOpcionales", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PresentacionType.prototype, "garnitura", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PresentacionType.prototype, "vajilla", void 0);
exports.PresentacionType = PresentacionType = __decorate([
    (0, graphql_1.ObjectType)()
], PresentacionType);
let AplicacionesUsoType = class AplicacionesUsoType {
};
exports.AplicacionesUsoType = AplicacionesUsoType;
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], AplicacionesUsoType.prototype, "ocasionesConsumo", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], AplicacionesUsoType.prototype, "momentosIdeales", void 0);
__decorate([
    (0, graphql_1.Field)(() => MaridajeRecomendadoType),
    __metadata("design:type", MaridajeRecomendadoType)
], AplicacionesUsoType.prototype, "maridajeRecomendado", void 0);
exports.AplicacionesUsoType = AplicacionesUsoType = __decorate([
    (0, graphql_1.ObjectType)()
], AplicacionesUsoType);
let MaridajeRecomendadoType = class MaridajeRecomendadoType {
};
exports.MaridajeRecomendadoType = MaridajeRecomendadoType;
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MaridajeRecomendadoType.prototype, "bebidas", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MaridajeRecomendadoType.prototype, "salsas", void 0);
exports.MaridajeRecomendadoType = MaridajeRecomendadoType = __decorate([
    (0, graphql_1.ObjectType)()
], MaridajeRecomendadoType);
let CertificacionesType = class CertificacionesType {
};
exports.CertificacionesType = CertificacionesType;
__decorate([
    (0, graphql_1.Field)(() => [CertificadoType]),
    __metadata("design:type", Array)
], CertificacionesType.prototype, "certificados", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CertificacionesType.prototype, "sellosCalidad", void 0);
exports.CertificacionesType = CertificacionesType = __decorate([
    (0, graphql_1.ObjectType)()
], CertificacionesType);
let CertificadoType = class CertificadoType {
};
exports.CertificadoType = CertificadoType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CertificadoType.prototype, "agencia", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CertificadoType.prototype, "certificado", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CertificadoType.prototype, "validoHasta", void 0);
exports.CertificadoType = CertificadoType = __decorate([
    (0, graphql_1.ObjectType)()
], CertificadoType);
let EstadoType = class EstadoType {
};
exports.EstadoType = EstadoType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], EstadoType.prototype, "estatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], EstadoType.prototype, "disponibilidad", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], EstadoType.prototype, "etiquetas", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], EstadoType.prototype, "visibilidad", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], EstadoType.prototype, "prioridad", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], EstadoType.prototype, "destacado", void 0);
exports.EstadoType = EstadoType = __decorate([
    (0, graphql_1.ObjectType)()
], EstadoType);
let DocumentacionType = class DocumentacionType {
};
exports.DocumentacionType = DocumentacionType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DocumentacionType.prototype, "fichaTecnica", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DocumentacionType.prototype, "recetaEstandarizada", void 0);
exports.DocumentacionType = DocumentacionType = __decorate([
    (0, graphql_1.ObjectType)()
], DocumentacionType);
let SEOType = class SEOType {
};
exports.SEOType = SEOType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SEOType.prototype, "slugCanonico", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SEOType.prototype, "breadcrumbs", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SEOType.prototype, "urlCanonica", void 0);
__decorate([
    (0, graphql_1.Field)(() => StructuredDataType),
    __metadata("design:type", StructuredDataType)
], SEOType.prototype, "structuredData", void 0);
exports.SEOType = SEOType = __decorate([
    (0, graphql_1.ObjectType)()
], SEOType);
let StructuredDataType = class StructuredDataType {
};
exports.StructuredDataType = StructuredDataType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StructuredDataType.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StructuredDataType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StructuredDataType.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StructuredDataType.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StructuredDataType.prototype, "sku", void 0);
exports.StructuredDataType = StructuredDataType = __decorate([
    (0, graphql_1.ObjectType)()
], StructuredDataType);
//# sourceMappingURL=product.dto.js.map