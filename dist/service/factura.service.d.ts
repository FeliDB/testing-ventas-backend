import { CreateFacturaDto } from 'src/dto/create-factura.dto';
import { FacturaRepository } from 'src/repository/factura.repository';
export declare class FacturaService {
    private readonly facturaRepository;
    constructor(facturaRepository: FacturaRepository);
    getFacturas(): Promise<any[]>;
    getFacturaPorId(idVenta: number): Promise<any | null>;
    crearFactura(createFacturaDto: CreateFacturaDto): Promise<void>;
}
