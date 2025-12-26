import { Menu } from './schemas/menus.schema';
import { MenuService } from './menus.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(data: {
        page?: number;
        limit?: number;
        role?: string;
    }): Promise<Menu[]>;
    findOne(id: string): Promise<Menu>;
    create(input: {
        title: string;
        icon?: string;
        path?: string;
        roles?: string[];
        parentId?: string;
    }): Promise<Menu>;
    update(data: {
        id: string;
        update: {
            title?: string;
            icon?: string;
            path?: string;
            roles?: string[];
            isActive?: boolean;
            parentId?: string;
        };
    }): Promise<Menu>;
    remove(id: string): Promise<Menu>;
}
