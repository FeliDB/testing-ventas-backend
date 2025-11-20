import { CreateFacturaDto } from "src/dto/create-factura.dto";
import { FacturaEntity } from "src/entity/factura.entity";
import { Repository } from "typeorm";
export declare class FacturaRepository {
    private readonly repository;
    constructor(repository: Repository<FacturaEntity>);
    getFacturas(): Promise<FacturaEntity[]>;
    getFacturaByVentaId(idVenta: number): Promise<FacturaEntity | null>;
    createFactura(idVenta: any, factura: CreateFacturaDto): Promise<FacturaEntity>;
}
