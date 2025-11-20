import { ProveedorEntity } from "./proveedor.entity";
import { ProductoEntity } from "./producto.entity";
export declare class ProveedorProducto {
    id: number;
    proveedor: ProveedorEntity;
    producto: ProductoEntity;
    codigoProveedor: string;
}
