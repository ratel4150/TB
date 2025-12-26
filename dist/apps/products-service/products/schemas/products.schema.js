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
exports.DocumentacionSchema = exports.Documentacion = exports.EstadoSchema = exports.Estado = exports.AplicacionesUsoSchema = exports.AplicacionesUso = exports.MaridajeRecomendadoSchema = exports.MaridajeRecomendado = exports.InformacionGeneralSchema = exports.InformacionGeneral = exports.IdentificacionSchema = exports.Identificacion = exports.JerarquiaProductoSchema = exports.JerarquiaProducto = exports.RelacionadosSchema = exports.Relacionados = exports.VarianteSchema = exports.Variante = exports.MultimediaSchema = exports.Multimedia = exports.VideoSchema = exports.Video = exports.ImageneSchema = exports.Imagene = exports.PreparacionSchema = exports.Preparacion = exports.PresentacionSchema = exports.Presentacion = exports.CertificacionesSchema = exports.Certificaciones = exports.CertificadoSchema = exports.Certificado = exports.ClasificacionSchema = exports.Clasificacion = exports.OrigenSchema = exports.Origen = exports.IngredientesSchema = exports.Ingredientes = exports.IngredientesPrincipaleSchema = exports.IngredientesPrincipale = exports.EspecificacionesTecnicasSchema = exports.EspecificacionesTecnicas = exports.CaracteristicasSensorialesSchema = exports.CaracteristicasSensoriales = exports.ComposicionSchema = exports.Composicion = exports.PropiedadesFisicasSchema = exports.PropiedadesFisicas = exports.DimensionesSchema = exports.Dimensiones = void 0;
exports.ProductSchema = exports.Product = exports.SEOSchema = exports.SEO = exports.StructuredDataSchema = exports.StructuredData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Dimensiones = class Dimensiones {
};
exports.Dimensiones = Dimensiones;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Dimensiones.prototype, "longitud", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Dimensiones.prototype, "diametro", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Dimensiones.prototype, "pesoAproximado", void 0);
exports.Dimensiones = Dimensiones = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Dimensiones);
exports.DimensionesSchema = mongoose_1.SchemaFactory.createForClass(Dimensiones);
let PropiedadesFisicas = class PropiedadesFisicas {
};
exports.PropiedadesFisicas = PropiedadesFisicas;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PropiedadesFisicas.prototype, "forma", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PropiedadesFisicas.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PropiedadesFisicas.prototype, "aroma", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PropiedadesFisicas.prototype, "textura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PropiedadesFisicas.prototype, "temperaturaServicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.DimensionesSchema, required: true }),
    __metadata("design:type", Dimensiones)
], PropiedadesFisicas.prototype, "dimensiones", void 0);
exports.PropiedadesFisicas = PropiedadesFisicas = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PropiedadesFisicas);
exports.PropiedadesFisicasSchema = mongoose_1.SchemaFactory.createForClass(PropiedadesFisicas);
let Composicion = class Composicion {
};
exports.Composicion = Composicion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "tipoCarne", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "corte", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "tiempoCoccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "metodoCoccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "marinado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "adoboBase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Composicion.prototype, "nivelPicor", void 0);
exports.Composicion = Composicion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Composicion);
exports.ComposicionSchema = mongoose_1.SchemaFactory.createForClass(Composicion);
let CaracteristicasSensoriales = class CaracteristicasSensoriales {
};
exports.CaracteristicasSensoriales = CaracteristicasSensoriales;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], CaracteristicasSensoriales.prototype, "sabor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], CaracteristicasSensoriales.prototype, "aroma", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], CaracteristicasSensoriales.prototype, "textura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], CaracteristicasSensoriales.prototype, "apariencia", void 0);
exports.CaracteristicasSensoriales = CaracteristicasSensoriales = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CaracteristicasSensoriales);
exports.CaracteristicasSensorialesSchema = mongoose_1.SchemaFactory.createForClass(CaracteristicasSensoriales);
let EspecificacionesTecnicas = class EspecificacionesTecnicas {
};
exports.EspecificacionesTecnicas = EspecificacionesTecnicas;
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ComposicionSchema, required: true }),
    __metadata("design:type", Composicion)
], EspecificacionesTecnicas.prototype, "composicion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.PropiedadesFisicasSchema, required: true }),
    __metadata("design:type", PropiedadesFisicas)
], EspecificacionesTecnicas.prototype, "propiedadesFisicas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.CaracteristicasSensorialesSchema, required: true }),
    __metadata("design:type", CaracteristicasSensoriales)
], EspecificacionesTecnicas.prototype, "caracteristicasSensoriales", void 0);
exports.EspecificacionesTecnicas = EspecificacionesTecnicas = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], EspecificacionesTecnicas);
exports.EspecificacionesTecnicasSchema = mongoose_1.SchemaFactory.createForClass(EspecificacionesTecnicas);
let IngredientesPrincipale = class IngredientesPrincipale {
};
exports.IngredientesPrincipale = IngredientesPrincipale;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "porcentaje", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "calidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "origen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "tama\u00F1o", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], IngredientesPrincipale.prototype, "hechaMano", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "preparacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], IngredientesPrincipale.prototype, "funcion", void 0);
exports.IngredientesPrincipale = IngredientesPrincipale = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], IngredientesPrincipale);
exports.IngredientesPrincipaleSchema = mongoose_1.SchemaFactory.createForClass(IngredientesPrincipale);
let Ingredientes = class Ingredientes {
};
exports.Ingredientes = Ingredientes;
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.IngredientesPrincipaleSchema], required: true }),
    __metadata("design:type", Array)
], Ingredientes.prototype, "ingredientesPrincipales", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Ingredientes.prototype, "ingredientesSecundarios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Ingredientes.prototype, "adoboEspecias", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Ingredientes.prototype, "alergenos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Ingredientes.prototype, "etiquetasEspeciales", void 0);
exports.Ingredientes = Ingredientes = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Ingredientes);
exports.IngredientesSchema = mongoose_1.SchemaFactory.createForClass(Ingredientes);
let Origen = class Origen {
};
exports.Origen = Origen;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Origen.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Origen.prototype, "denominacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Origen.prototype, "influencia", void 0);
exports.Origen = Origen = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Origen);
exports.OrigenSchema = mongoose_1.SchemaFactory.createForClass(Origen);
let Clasificacion = class Clasificacion {
};
exports.Clasificacion = Clasificacion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "categoriaPrincipal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "categoriaSecundaria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "subcategoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "tipoProducto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "familia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Clasificacion.prototype, "segmentoMercado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Clasificacion.prototype, "estacionalidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Clasificacion.prototype, "slugCategoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Clasificacion.prototype, "tagsSEO", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.OrigenSchema, required: true }),
    __metadata("design:type", Origen)
], Clasificacion.prototype, "origen", void 0);
exports.Clasificacion = Clasificacion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Clasificacion);
exports.ClasificacionSchema = mongoose_1.SchemaFactory.createForClass(Clasificacion);
let Certificado = class Certificado {
};
exports.Certificado = Certificado;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Certificado.prototype, "agencia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Certificado.prototype, "certificado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Certificado.prototype, "validoHasta", void 0);
exports.Certificado = Certificado = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Certificado);
exports.CertificadoSchema = mongoose_1.SchemaFactory.createForClass(Certificado);
let Certificaciones = class Certificaciones {
};
exports.Certificaciones = Certificaciones;
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CertificadoSchema], required: true }),
    __metadata("design:type", Array)
], Certificaciones.prototype, "certificados", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Certificaciones.prototype, "sellosCalidad", void 0);
exports.Certificaciones = Certificaciones = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Certificaciones);
exports.CertificacionesSchema = mongoose_1.SchemaFactory.createForClass(Certificaciones);
let Presentacion = class Presentacion {
};
exports.Presentacion = Presentacion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Presentacion.prototype, "estiloServicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Presentacion.prototype, "acompa\u00F1amientosBase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Presentacion.prototype, "acompa\u00F1amientosOpcionales", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Presentacion.prototype, "garnitura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Presentacion.prototype, "vajilla", void 0);
exports.Presentacion = Presentacion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Presentacion);
exports.PresentacionSchema = mongoose_1.SchemaFactory.createForClass(Presentacion);
let Preparacion = class Preparacion {
};
exports.Preparacion = Preparacion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Preparacion.prototype, "metodoCoccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Preparacion.prototype, "tiempoCoccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Preparacion.prototype, "temperaturaCoccion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Preparacion.prototype, "tecnicas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Preparacion.prototype, "equipamiento", void 0);
exports.Preparacion = Preparacion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Preparacion);
exports.PreparacionSchema = mongoose_1.SchemaFactory.createForClass(Preparacion);
let Imagene = class Imagene {
};
exports.Imagene = Imagene;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "alt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "dimensiones", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "formato", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "peso", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Imagene.prototype, "orden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Imagene.prototype, "thumbnail", void 0);
exports.Imagene = Imagene = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Imagene);
exports.ImageneSchema = mongoose_1.SchemaFactory.createForClass(Imagene);
let Video = class Video {
};
exports.Video = Video;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Video.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Video.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Video.prototype, "titulo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Video.prototype, "duracion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Video.prototype, "thumbnail", void 0);
exports.Video = Video = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Video);
exports.VideoSchema = mongoose_1.SchemaFactory.createForClass(Video);
let Multimedia = class Multimedia {
};
exports.Multimedia = Multimedia;
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.ImageneSchema], required: true }),
    __metadata("design:type", Array)
], Multimedia.prototype, "imagenes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.VideoSchema], required: true }),
    __metadata("design:type", Array)
], Multimedia.prototype, "videos", void 0);
exports.Multimedia = Multimedia = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Multimedia);
exports.MultimediaSchema = mongoose_1.SchemaFactory.createForClass(Multimedia);
let Variante = class Variante {
};
exports.Variante = Variante;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Variante.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Variante.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Variante.prototype, "diferencia", void 0);
exports.Variante = Variante = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Variante);
exports.VarianteSchema = mongoose_1.SchemaFactory.createForClass(Variante);
let Relacionados = class Relacionados {
};
exports.Relacionados = Relacionados;
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Relacionados.prototype, "crossSelling", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Relacionados.prototype, "upSelling", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Relacionados.prototype, "sustitutos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Relacionados.prototype, "complementarios", void 0);
exports.Relacionados = Relacionados = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Relacionados);
exports.RelacionadosSchema = mongoose_1.SchemaFactory.createForClass(Relacionados);
let JerarquiaProducto = class JerarquiaProducto {
};
exports.JerarquiaProducto = JerarquiaProducto;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], JerarquiaProducto.prototype, "tipoProducto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], JerarquiaProducto.prototype, "productoPadre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.VarianteSchema], required: true }),
    __metadata("design:type", Array)
], JerarquiaProducto.prototype, "variantes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], JerarquiaProducto.prototype, "kitComponents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.RelacionadosSchema, required: true }),
    __metadata("design:type", Relacionados)
], JerarquiaProducto.prototype, "relacionados", void 0);
exports.JerarquiaProducto = JerarquiaProducto = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], JerarquiaProducto);
exports.JerarquiaProductoSchema = mongoose_1.SchemaFactory.createForClass(JerarquiaProducto);
let Identificacion = class Identificacion {
};
exports.Identificacion = Identificacion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "sku", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "codigoInterno", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "urlAmigable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "fechaCreacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Identificacion.prototype, "version", void 0);
exports.Identificacion = Identificacion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Identificacion);
exports.IdentificacionSchema = mongoose_1.SchemaFactory.createForClass(Identificacion);
let InformacionGeneral = class InformacionGeneral {
};
exports.InformacionGeneral = InformacionGeneral;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "nombreComercial", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "nombreTecnico", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "descripcionCorta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "descripcionLarga", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "marca", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "linea", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "modelo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "serie", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "metaTitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "metaDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], InformacionGeneral.prototype, "palabrasClave", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], InformacionGeneral.prototype, "leyendaProducto", void 0);
exports.InformacionGeneral = InformacionGeneral = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], InformacionGeneral);
exports.InformacionGeneralSchema = mongoose_1.SchemaFactory.createForClass(InformacionGeneral);
let MaridajeRecomendado = class MaridajeRecomendado {
};
exports.MaridajeRecomendado = MaridajeRecomendado;
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], MaridajeRecomendado.prototype, "bebidas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], MaridajeRecomendado.prototype, "salsas", void 0);
exports.MaridajeRecomendado = MaridajeRecomendado = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], MaridajeRecomendado);
exports.MaridajeRecomendadoSchema = mongoose_1.SchemaFactory.createForClass(MaridajeRecomendado);
let AplicacionesUso = class AplicacionesUso {
};
exports.AplicacionesUso = AplicacionesUso;
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AplicacionesUso.prototype, "ocasionesConsumo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AplicacionesUso.prototype, "momentosIdeales", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.MaridajeRecomendadoSchema, required: true }),
    __metadata("design:type", MaridajeRecomendado)
], AplicacionesUso.prototype, "maridajeRecomendado", void 0);
exports.AplicacionesUso = AplicacionesUso = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AplicacionesUso);
exports.AplicacionesUsoSchema = mongoose_1.SchemaFactory.createForClass(AplicacionesUso);
let Estado = class Estado {
};
exports.Estado = Estado;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Estado.prototype, "estatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Estado.prototype, "disponibilidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Estado.prototype, "etiquetas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Estado.prototype, "visibilidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Estado.prototype, "prioridad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], Estado.prototype, "destacado", void 0);
exports.Estado = Estado = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Estado);
exports.EstadoSchema = mongoose_1.SchemaFactory.createForClass(Estado);
let Documentacion = class Documentacion {
};
exports.Documentacion = Documentacion;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Documentacion.prototype, "fichaTecnica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Documentacion.prototype, "recetaEstandarizada", void 0);
exports.Documentacion = Documentacion = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Documentacion);
exports.DocumentacionSchema = mongoose_1.SchemaFactory.createForClass(Documentacion);
let StructuredData = class StructuredData {
};
exports.StructuredData = StructuredData;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], StructuredData.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], StructuredData.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], StructuredData.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], StructuredData.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], StructuredData.prototype, "sku", void 0);
exports.StructuredData = StructuredData = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], StructuredData);
exports.StructuredDataSchema = mongoose_1.SchemaFactory.createForClass(StructuredData);
let SEO = class SEO {
};
exports.SEO = SEO;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], SEO.prototype, "slugCanonico", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], SEO.prototype, "breadcrumbs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], SEO.prototype, "urlCanonica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.StructuredDataSchema, required: true }),
    __metadata("design:type", StructuredData)
], SEO.prototype, "structuredData", void 0);
exports.SEO = SEO = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SEO);
exports.SEOSchema = mongoose_1.SchemaFactory.createForClass(SEO);
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, mongoose_1.Prop)({ type: exports.IdentificacionSchema, required: false }),
    __metadata("design:type", Identificacion)
], Product.prototype, "identificacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.InformacionGeneralSchema, required: false }),
    __metadata("design:type", InformacionGeneral)
], Product.prototype, "informacionGeneral", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
exports.ProductSchema.index({ 'identificacion.productId': 1 }, { unique: true });
exports.ProductSchema.index({ 'identificacion.sku': 1 }, { unique: true });
//# sourceMappingURL=products.schema.js.map