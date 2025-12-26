import { ProductService } from './products.service';
import { Product } from './schemas/products.schema';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(data: {
        id: string;
    }): Promise<Product | null>;
    create(input: any): Promise<Product>;
    update(data: {
        id: string;
    } & any): Promise<Product>;
    remove(data: {
        id: string;
    }): Promise<boolean>;
}
