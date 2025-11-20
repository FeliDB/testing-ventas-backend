import { CreateTipoFacturaDto } from 'src/dto/tipo-factura-create.dto';
import { TipoFacturaEditDto } from 'src/dto/tipo-factura-edit.dto';
import { TipoFacturaService } from 'src/service/tipo-factura.service';
export declare class TipoFacturaController {
    private readonly tipoFacturaService;
    constructor(tipoFacturaService: TipoFacturaService);
    getMetodosPago(): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity[]>;
    getMetodoPago(id: number): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    createMetodoPago(data: CreateTipoFacturaDto): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    updateMetodoPago(id: number, data: TipoFacturaEditDto): Promise<import("../entity/tipoFactura.entity").TipoFacturaEntity>;
    deleteMetodoPago(id: number): Promise<{
        message: string;
    }>;
}
