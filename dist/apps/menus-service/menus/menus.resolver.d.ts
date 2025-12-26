import { MenuService } from './menus.service';
import { CreateMenuInput } from './dto/create-menu.input';
export declare class MenuResolver {
    private readonly menuService;
    constructor(menuService: MenuService);
    menus(): Promise<import("./schemas/menus.schema").Menu[]>;
    menu(id: string): Promise<import("./schemas/menus.schema").Menu>;
    createMenu(input: CreateMenuInput): Promise<import("./schemas/menus.schema").Menu>;
    updateMenu(id: string, input: Partial<CreateMenuInput>): Promise<import("./schemas/menus.schema").Menu>;
    removeMenu(id: string): Promise<import("./schemas/menus.schema").Menu>;
}
