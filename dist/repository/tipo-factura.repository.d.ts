import { DataSource, Repository } from "typeorm";
import { TipoFacturaEntity } from "src/entity/tipoFactura.entity";
import { CreateTipoFacturaDto } from "src/dto/tipo-factura-create.dto";
import { TipoFacturaEditDto } from "src/dto/tipo-factura-edit.dto";
export declare class TipoFacturaRepository extends Repository<TipoFacturaEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getTiposFactura(): Promise<TipoFacturaEntity[]>;
    getTipoFacturaById(id: number): Promise<TipoFacturaEntity | null>;
    createTipoFactura(createTipoFacturaDto: CreateTipoFacturaDto): Promise<TipoFacturaEntity>;
    editTipoFactura(id: number, tipoFacturaEditDto: TipoFacturaEditDto): Promise<TipoFacturaEntity>;
    deleteTipoFactura(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
