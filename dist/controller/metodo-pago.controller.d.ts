import { MetodoPagoService } from '../service/metodo-pago.service';
import { MetodoPagoEditDto } from 'src/dto/metodo-pago-edit.dto';
import { CreateMetodoPagoDto } from 'src/dto/metodo-pago-create.dto';
export declare class MetodoPagoController {
    private readonly metodoPagoService;
    constructor(metodoPagoService: MetodoPagoService);
    getMetodosPago(): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity[]>;
    getMetodoPago(id: number): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    createMetodoPago(data: CreateMetodoPagoDto): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    updateMetodoPago(id: number, data: MetodoPagoEditDto): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    deleteMetodoPago(id: number): Promise<{
        message: string;
    }>;
}
