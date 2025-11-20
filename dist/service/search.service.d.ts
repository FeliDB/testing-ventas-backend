import { SearchRepository } from 'src/repository/search.repository';
export declare class SearchService {
    private readonly searchRepository;
    constructor(searchRepository: SearchRepository);
    getProductoXLineaXMarca(input: string): Promise<import("../entity/producto.entity").ProductoEntity[]>;
    getFacturaPorFecha(fecha: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorTipo(tipo: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorMetodoPago(metodoPago: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorCliente(idCliente: number): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorPrecio(rangoMin: number, rangoMax: number): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getMetodosPagoDeFacturas(): Promise<{
        metodoPago: string;
        cantidad: number;
    }[]>;
}
