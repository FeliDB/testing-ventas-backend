import { CreateMetodoPagoDto } from 'src/dto/metodo-pago-create.dto';
import { MetodoPagoEditDto } from 'src/dto/metodo-pago-edit.dto';
import { MetodoPagoRepository } from 'src/repository/metodo-pago.repository';
export declare class MetodoPagoService {
    private readonly metodoPagoRepository;
    constructor(metodoPagoRepository: MetodoPagoRepository);
    getMetodosPago(): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity[]>;
    getMetodoPago(id: number): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    createMetodoPago(data: CreateMetodoPagoDto): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    updateMetodoPago(data: MetodoPagoEditDto, id: number): Promise<import("../entity/metodoPago.entity").MetodoPagoEntity>;
    deleteMetodoPago(id: number): Promise<{
        message: string;
    }>;
}
