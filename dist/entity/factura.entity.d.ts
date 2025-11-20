import { TipoFacturaEntity } from "./tipoFactura.entity";
import { MetodoPagoEntity } from "./metodoPago.entity";
import { VentaEntity } from "./venta.entity";
export declare class FacturaEntity {
    idFactura: number;
    total: number;
    impuesto: number;
    fechaHora: Date;
    tipoFactura: TipoFacturaEntity;
    metodoPago: MetodoPagoEntity;
    venta: VentaEntity;
}
