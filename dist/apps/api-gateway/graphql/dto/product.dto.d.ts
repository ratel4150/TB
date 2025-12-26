export declare class ProductType {
    productId: string;
    identificacion?: any;
    informacionGeneral?: any;
    jerarquiaProducto?: any;
    multimedia?: any;
    clasificacion?: any;
    especificacionesTecnicas?: any;
    ingredientes?: any;
    preparacion?: any;
    presentacion?: any;
    aplicacionesUso?: any;
    certificaciones?: any;
    estado?: any;
    documentacion?: any;
    seo?: any;
    private _id;
}
export declare class CreateProductInput {
    identificacion?: any;
    informacionGeneral?: any;
    jerarquiaProducto?: any;
}
declare const UpdateProductInput_base: import("@nestjs/common").Type<Partial<CreateProductInput>>;
export declare class UpdateProductInput extends UpdateProductInput_base {
}
export {};
