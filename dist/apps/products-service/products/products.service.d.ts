import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/products.schema';
export declare class ProductService {
    private readonly productModel;
    private readonly logger;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(input: any): Promise<Product>;
    update(id: string, input: any): Promise<Product>;
    delete(id: string): Promise<boolean>;
}
