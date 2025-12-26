import { HydratedDocument, Types } from 'mongoose';
export type MenuDocument = HydratedDocument<Menu>;
export declare class Menu {
    title: string;
    icon?: string;
    path?: string;
    roles: string[];
    isActive: boolean;
    children?: Menu[];
}
export declare const MenuSchema: import("mongoose").Schema<Menu, import("mongoose").Model<Menu, any, any, any, import("mongoose").Document<unknown, any, Menu, any, {}> & Menu & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Menu, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Menu>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Menu> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
