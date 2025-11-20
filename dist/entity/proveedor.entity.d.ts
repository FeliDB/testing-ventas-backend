import { ProveedorProducto } from "./ProductoProveedor.entity";
export declare class ProveedorEntity {
    idProveedor: number;
    nombre: string;
    codigoProveedor: string;
    proveedorProductos: ProveedorProducto[];
}
