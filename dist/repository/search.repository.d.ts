import { Repository } from "typeorm";
import { ProductoEntity } from "src/entity/producto.entity";
import { FacturaEntity } from "src/entity/factura.entity";
export declare class SearchRepository {
    private productoRepository;
    private facturaRepository;
    constructor(productoRepository: Repository<ProductoEntity>, facturaRepository: Repository<FacturaEntity>);
    getProductoXLineaXMarca(input: string): Promise<ProductoEntity[]>;
    getFacturaXFecha(fecha: string): Promise<FacturaEntity[]>;
    getFacturaXTipo(tipo: string): Promise<FacturaEntity[]>;
    getFacturaXMetodoPago(metodoPago: string): Promise<FacturaEntity[]>;
    getFacturaXCliente(idCliente: number): Promise<FacturaEntity[]>;
    getFacturaXPrecio(rangoMin: number, rangoMax: number): Promise<FacturaEntity[]>;
    getMetodosPagoDeFacturas(): Promise<{
        metodoPago: string;
        cantidad: number;
    }[]>;
}
