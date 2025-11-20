import { CreateDetalleVentaDto } from "./create-detalleVenta.dto";
import { CreateFacturaDto } from "./create-factura.dto";
export declare class CreateVentaDto {
    detalles: CreateDetalleVentaDto[];
    factura: CreateFacturaDto;
    idCliente: number;
}
