import { VentaService } from "src/service/venta.service";
import { CreateVentaDto } from "src/dto/create-venta.dto";
export declare class VentaController {
    private readonly ventaService;
    constructor(ventaService: VentaService);
    getVenta(periodo?: string): Promise<import("../entity/venta.entity").VentaEntity[]>;
    getVentaPaginada(page?: number, limit?: number, periodo?: string): Promise<{
        data: import("../entity/venta.entity").VentaEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getVentaById(idVenta: number): Promise<import("../entity/venta.entity").VentaEntity>;
    getFacturaByVentaId(idVenta: number): Promise<import("../entity/factura.entity").FacturaEntity>;
    postVenta(createVentaDto: CreateVentaDto): Promise<{
        venta: import("../entity/venta.entity").VentaEntity;
        detalleVenta: import("../entity/detalleVenta.entity").DetalleVentaEntity[];
        factura: import("../entity/factura.entity").FacturaEntity;
    }>;
}
