import { Model } from 'mongoose';
import { Menu, MenuDocument } from './schemas/menus.schema';
export declare class MenuService {
    private menuModel;
    private readonly logger;
    constructor(menuModel: Model<MenuDocument>);
    findAll(page?: number, limit?: number, role?: string): Promise<Menu[]>;
    findOne(id: string): Promise<Menu>;
    create(input: {
        title: string;
        icon?: string;
        path?: string;
        roles?: string[];
        parentId?: string;
    }): Promise<Menu>;
    update(id: string, updateData: {
        title?: string;
        icon?: string;
        path?: string;
        roles?: string[];
        isActive?: boolean;
        parentId?: string;
    }): Promise<Menu>;
    delete(id: string): Promise<Menu>;
}
