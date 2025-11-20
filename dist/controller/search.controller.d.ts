import { SearchService } from "src/service/search.service";
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getProductoXLineaXMarca(input: string): Promise<import("../entity/producto.entity").ProductoEntity[]>;
    getFacturaPorFecha(fecha: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorTipo(tipo: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorMetodoPago(metodoPago: string): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorCliente(idCliente: number): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getFacturaPorPrecio(precio: number): Promise<import("../entity/factura.entity").FacturaEntity[]>;
    getMetodosPagoDeFacturas(): Promise<{
        metodoPago: string;
        cantidad: number;
    }[]>;
}
