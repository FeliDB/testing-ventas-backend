import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';
import { CreateDetalleVentaDto } from 'src/dto/create-detalleVenta.dto';
export declare class DetalleVentaService {
    private readonly detalleVentaRepository;
    constructor(detalleVentaRepository: DetalleVentaRepository);
    getDetalleVentaService(): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity[]>;
    getDetalleVentaByIdService(id: number): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity>;
    getDetalleConIDVentaService(idVenta: number): Promise<import("../entity/detalleVenta.entity").DetalleVentaEntity[] | null>;
    postDetalleVentaService(createDetalleVentaDto: CreateDetalleVentaDto): Promise<void>;
}
