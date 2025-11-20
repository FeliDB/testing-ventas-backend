import { DataSource, Repository } from "typeorm";
import { MetodoPagoEntity } from "../entity/metodoPago.entity";
import { CreateMetodoPagoDto } from "../dto/metodo-pago-create.dto";
import { MetodoPagoEditDto } from "src/dto/metodo-pago-edit.dto";
export declare class MetodoPagoRepository extends Repository<MetodoPagoEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getMetodosPago(): Promise<MetodoPagoEntity[]>;
    getMetodoPagoById(id: number): Promise<MetodoPagoEntity | null>;
    createMetodoPago(createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPagoEntity>;
    editMetodoPago(id: number, metodoPagoEditDto: MetodoPagoEditDto): Promise<MetodoPagoEntity>;
    deleteMetodoPago(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
