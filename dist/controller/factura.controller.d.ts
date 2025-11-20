import { CreateFacturaDto } from 'src/dto/create-factura.dto';
import { FacturaService } from 'src/service/factura.service';
export declare class FacturaController {
    private readonly facturaService;
    constructor(facturaService: FacturaService);
    getFacturas(): Promise<any[]>;
    getFacturasPorId(idVenta: number): Promise<any[]>;
    crearFactura(createFacturaDTO: CreateFacturaDto): Promise<void>;
}
