import { CreateTipoFacturaDto } from 'src/dto/tipo-factura-create.dto';
import { TipoFacturaEditDto } from 'src/dto/tipo-factura-edit.dto';
import { TipoFacturaRepository } from 'src/repository/tipo-factura.repository';
export declare class TipoFacturaService {
    private readonly tipoFacturaRepository;
    constructor(tipoFacturaRepository: TipoFacturaRepository);
    getTipoFactura(): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity[]>;
    getTipoFacturaByID(id: number): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    createTipoFactura(data: CreateTipoFacturaDto): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    updateTipoFactura(data: TipoFacturaEditDto, id: number): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    deleteTipoFactura(id: number): Promise<{
        message: string;
    }>;
}
