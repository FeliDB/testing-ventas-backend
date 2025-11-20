import { DetalleVentaService } from "src/service/detalleVenta.service";
import { CreateDetalleVentaDto } from "src/dto/create-detalleVenta.dto";
export declare class DetalleVentaController {
    private readonly detalleVenta;
    constructor(detalleVenta: DetalleVentaService);
    getDetalleVenta(): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity[]>;
    getDetalleVentaById(idLinea: number): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity>;
    getDetalleVentaByIdVenta(idVenta: number): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity[] | null>;
    postDetalleVenta(data: CreateDetalleVentaDto): Promise<void>;
}
