import { MarcaEntity } from "./marca.entity";
import { LineaEntity } from "./linea.entity";
import { ProveedorProducto } from "./ProductoProveedor.entity";
export declare class ProductoEntity {
    idProducto: number;
    descripcion: string;
    precioUnitario: number;
    stock: number;
    marca: MarcaEntity;
    proveedorProductos: ProveedorProducto[];
    linea: LineaEntity;
}
