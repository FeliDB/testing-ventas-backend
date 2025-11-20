import { Repository, DataSource } from "typeorm";
import { VentaEntity } from "src/entity/venta.entity";
export declare class VentaRespository {
    private readonly repository;
    private readonly dataSource;
    constructor(repository: Repository<VentaEntity>, dataSource: DataSource);
    getVentaRepository(periodo?: string): Promise<VentaEntity[]>;
    getVentaIDRespository(id: number): Promise<VentaEntity | null>;
    getVentasPaginadas(page?: number, limit?: number, periodo?: string): Promise<{
        data: VentaEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    postVentaRespository(createVentaDto: any): Promise<VentaEntity>;
}
