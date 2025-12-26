import { ClientProxy } from '@nestjs/microservices';
import { Menu, CreateMenuInput, UpdateMenuInput } from '../dto/menu.dto';
export declare class MenuResolver {
    private readonly menusClient;
    constructor(menusClient: ClientProxy);
    menus(): Promise<Menu[]>;
    menu(id: string): Promise<Menu | null>;
    createMenu(input: CreateMenuInput): Promise<Menu>;
    updateMenu(id: string, input: UpdateMenuInput): Promise<Menu>;
    deleteMenu(id: string): Promise<boolean>;
}
