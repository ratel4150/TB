export declare class Menu {
    get id(): string;
    title: string;
    icon?: string;
    path?: string;
    roles: string[];
    isActive: boolean;
    children?: Menu[];
    _id?: any;
}
export declare class CreateMenuInput {
    title: string;
    icon?: string;
    path?: string;
    roles?: string[];
    isActive?: boolean;
    parentId?: string;
}
export declare class UpdateMenuInput {
    title?: string;
    icon?: string;
    path?: string;
    roles?: string[];
    isActive?: boolean;
    parentId?: string;
}
