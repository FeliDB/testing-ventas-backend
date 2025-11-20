import { Controller, Body, Get, Post, Put, Delete, Param, HttpStatus, HttpException } from "@nestjs/common";
import { DetalleVentaService } from "src/service/detalleVenta.service";
import { CreateDetalleVentaDto } from "src/dto/create-detalleVenta.dto";
import { EditDetalleVentaDto } from "src/dto/edit.detalleVenta.dto";


@Controller('detalleVenta')
export class DetalleVentaController {
    constructor(private readonly detalleVenta: DetalleVentaService){}

    @Get()
    async getDetalleVenta(){
        try {
            return await this.detalleVenta.getDetalleVentaService();
        } catch (error) {
            throw new HttpException('Error al obtener Lineas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':idDetalleVenta')
    async getDetalleVentaById(@Param('idLinea') idLinea: number){
        try {
            return await this.detalleVenta.getDetalleVentaByIdService(idLinea);
        } catch (error) {
            throw new HttpException('Error al obtener linea por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('ventas/:idVenta')
    async getDetalleVentaByIdVenta(@Param('idVenta') idVenta: number){
        try {
            return await this.detalleVenta.getDetalleConIDVentaService(idVenta);
        } catch (error) {
            throw new HttpException('Error al obtener linea por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Post('createDetalleVenta')
    async postDetalleVenta(@Body() data: CreateDetalleVentaDto){
        try {
            return await this.detalleVenta.postDetalleVentaService(data);
        } catch (error) {
            throw new HttpException('Error al crear linea', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @Put('modificarDetalleVenta/:id')
    // async putDetalleVenta(@Param('id') idDetalle: number, @Body() data: EditDetalleVentaDto){
    //     try {
    //         return await this.detalleVenta.putDetalleVentaService(idDetalle, data);
    //     } catch (error) {
    //         throw new HttpException('Error al modificar linea', HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

    // @Delete('eliminarDetalleVenta/:id')
    // async deleteDetalleVenta(@Param('idDetalleVenta') idDetalle: number){
    //     try {
    //         return await this.detalleVenta.deleteDetalleVentaService(idDetalle);
    //     } catch (error) {
    //         throw new HttpException('Error al eliminar linea', HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
}