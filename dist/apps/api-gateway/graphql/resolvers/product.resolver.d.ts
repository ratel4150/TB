import { ClientProxy } from '@nestjs/microservices';
export declare class ProductResolver {
    private readonly productsClient;
    constructor(productsClient: ClientProxy);
    products(): Promise<any[]>;
    product(id: string): Promise<any>;
    createProduct(input: any): Promise<any>;
    updateProduct(id: string, input: any): Promise<any>;
    deleteProduct(id: string): Promise<boolean>;
}
