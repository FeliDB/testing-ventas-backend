import { Controller, Body, Get, Post, Put, Delete, Param, Query, HttpStatus, HttpException } from "@nestjs/common";
import { VentaService } from "src/service/venta.service";
import { CreateVentaDto } from "src/dto/create-venta.dto";
import { Auth } from "src/decorators/auth.decorator";

@Controller('venta')
export class VentaController {
    constructor(private readonly ventaService: VentaService){}

    @Get()
    async getVenta(@Query('periodo') periodo?: string){
        try {
            return await this.ventaService.getVentaService(periodo);
        } catch (error) {
            throw new HttpException('Error al obtener ventas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('paginada')
    async getVentaPaginada(@Query('page') page: number = 1, @Query('limit') limit: number = 10, @Query('periodo') periodo?: string){
        try {
            return await this.ventaService.getVentaPaginadaService(+page, +limit, periodo);
        } catch (error) {
            throw new HttpException('Error al obtener ventas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':idVenta')
    async getVentaById(@Param('idVenta') idVenta: number){
        try {
            return await this.ventaService.getVentaByIdService(idVenta);
        } catch (error) {
            throw new HttpException('Error al obtener venta por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':idVenta/factura')
    async getFacturaByVentaId(@Param('idVenta') idVenta: number){
        try {
            return await this.ventaService.getFacturaByVentaIdService(+idVenta);
        } catch (error) {
            throw new HttpException('Error al obtener factura de la venta', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('empleado', 'dueño')
    @Post('createVenta')
    async postVenta(@Body() createVentaDto: CreateVentaDto){
        // console.log("DTO Recibido en el controlador:", createVentaDto.detalles);
        try {
            return await this.ventaService.postVentaService(createVentaDto);
        } catch (error) {
            throw new HttpException('Error al crear venta', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //put
    //delete

}