import { Controller, Body, Get, Post, Put, Delete, Param, Query, HttpStatus, HttpException } from "@nestjs/common";
import { MarcasService } from "src/service/marcas.service";
import { SearchService } from "src/service/search.service";


@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService){}

    //getProductoXLineaXMarca --busca el input en la tabla producto, y hace joins a marca, linea , proveedor

    @Get('producto-linea-marca')
    async getProductoXLineaXMarca(@Query('q') input: string){
        if (!input) {
            throw new HttpException('Query parameter q is required', HttpStatus.BAD_REQUEST);
        }
        try {
            console.log('Input recibido:', input);
            const result = await this.searchService.getProductoXLineaXMarca(input);
            console.log('Resultado:', result);
            return result;
        } catch (error) {
            console.error('Error en controller:', error);
            throw new HttpException('Error al buscar productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    //getFacturaPorFecha (fecha) -- recibe por parametro la fecha y filtra ventas desde esa fecha hasta la actual
    @Get('factura-por-fecha')
    async getFacturaPorFecha(@Query('fecha') fecha: string){
        if (!fecha) {
            throw new HttpException('La fecha es requerida', HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorFecha(fecha);
        } catch (error) {
            throw new HttpException('Error al buscar facturas por fecha', HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    }


    //getFacturaPortipo (params) -- recibe el tipo factura q quiere ver y se hace un filtro

    @Get('factura-por-tipo')
    async getFacturaPorTipo(@Query('tipo') tipo: string){
        if (!tipo) {
            throw new HttpException('El tipo de factura es requerido', HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorTipo(tipo);
        } catch (error) {
            throw new HttpException('Error al buscar facturas por tipo', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //getFacturaPorMetodoPago (params) -- recibo el metodo de pago y filtro

    @Get('factura-por-metodo-pago')
    async getFacturaPorMetodoPago(@Query('metodoPago') metodoPago: string){
        if (!metodoPago) {
            throw new HttpException('El metodo de pago es requerido', HttpStatus.BAD_REQUEST);
        }
        try {
            // Llamar al servicio correspondiente (a implementar)
            return await this.searchService.getFacturaPorMetodoPago(metodoPago);
        } catch (error) {
            throw new HttpException('Error al buscar facturas por metodo de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //getFacturaPorCliente (idCliente) -- recibo el idCliente y filtro

    @Get('factura-por-cliente')
    async getFacturaPorCliente(@Query('idCliente') idCliente: number){
        if (!idCliente) {
            throw new HttpException('El ID del cliente es requerido', HttpStatus.BAD_REQUEST);
        }
        try {
            // Llamar al servicio correspondiente (a implementar)
            return await this.searchService.getFacturaPorCliente(idCliente);
        } catch (error) {
            throw new HttpException('Error al buscar facturas por cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //getFacturaPorPrecio (price) -- recibo el precio y filtro
    @Get('factura-por-precio')
    async getFacturaPorPrecio(@Query('precio') precio: number){
        if (!precio) {
            throw new HttpException('El precio es requerido', HttpStatus.BAD_REQUEST);
        }
        try {
            // Llamar al servicio correspondiente (a implementar)
            return await this.searchService.getFacturaPorPrecio(precio, 0);
        } catch (error) {
            throw new HttpException('Error al buscar facturas por precio', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('metodos-pagoXfacturas')
    async getMetodosPagoDeFacturas(){
        try {
            return await this.searchService.getMetodosPagoDeFacturas();
        } catch (error) {
            throw new HttpException('Error al obtener métodos de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}