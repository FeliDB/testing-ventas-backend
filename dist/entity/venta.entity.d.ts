import { DetalleVentaEntity } from "./detalleVenta.entity";
import { FacturaEntity } from "./factura.entity";
import { ClienteEntity } from "./cliente.entity";
export declare class VentaEntity {
    idVenta: number;
    fechaHora: Date;
    detalleVenta: DetalleVentaEntity[];
    factura: FacturaEntity;
    cliente: ClienteEntity;
    total: number;
}
