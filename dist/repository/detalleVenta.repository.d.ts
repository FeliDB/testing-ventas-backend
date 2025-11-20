import { Repository } from "typeorm";
import { DetalleVentaEntity } from "src/entity/detalleVenta.entity";
export declare class DetalleVentaRepository {
    private readonly repository;
    constructor(repository: Repository<DetalleVentaEntity>);
    getDetalleVentaRepository(): Promise<DetalleVentaEntity[]>;
    getDetalleVentaIDRespository(id: number): Promise<DetalleVentaEntity | null>;
    getDetalleConIDVenta(id: number): Promise<DetalleVentaEntity[] | null>;
    postDetallesVentaRepository(idVenta: number, detalles: any[]): Promise<DetalleVentaEntity[]>;
}
