import { VentaRespository } from 'src/repository/venta.repository';
import { CreateVentaDto } from 'src/dto/create-venta.dto';
import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';
import { FacturaRepository } from 'src/repository/factura.repository';
import { DetalleVentaEntity } from 'src/entity/detalleVenta.entity';
import { FacturaEntity } from 'src/entity/factura.entity';
import { ClienteRepository } from 'src/repository/cliente.repository';
import { ProductoRepository } from 'src/repository/producto.repository';
import { DataSource } from 'typeorm';
export declare class VentaService {
    private readonly ventaRespository;
    private readonly detalleVentaRepository;
    private readonly facturaRepository;
    private readonly clienteRepository;
    private readonly productoRepository;
    private dataSource;
    constructor(ventaRespository: VentaRespository, detalleVentaRepository: DetalleVentaRepository, facturaRepository: FacturaRepository, clienteRepository: ClienteRepository, productoRepository: ProductoRepository, dataSource: DataSource);
    getVentaService(periodo?: string): Promise<import("../entity/venta.entity").VentaEntity[]>;
    getVentaPaginadaService(page: number, limit: number, periodo?: string): Promise<{
        data: import("../entity/venta.entity").VentaEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getVentaByIdService(id: number): Promise<import("../entity/venta.entity").VentaEntity>;
    getFacturaByVentaIdService(idVenta: number): Promise<FacturaEntity>;
    postVentaService(createVentaDto: CreateVentaDto): Promise<{
        venta: import("../entity/venta.entity").VentaEntity;
        detalleVenta: DetalleVentaEntity[];
        factura: FacturaEntity;
    }>;
}
