import { ProductoEntity } from "./producto.entity";
import { VentaEntity } from "./venta.entity";
export declare class DetalleVentaEntity {
    idDetalle: number;
    producto: ProductoEntity;
    venta: VentaEntity;
    cantidad: number;
}
