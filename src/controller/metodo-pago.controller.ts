import { Body, Controller, Delete, Get, Param, Post, Put, HttpStatus, HttpException } from '@nestjs/common';
import { MetodoPagoService } from '../service/metodo-pago.service';
import { MetodoPagoEditDto } from 'src/dto/metodo-pago-edit.dto';
import { CreateMetodoPagoDto } from 'src/dto/metodo-pago-create.dto';

@Controller('metodo-pago')
export class MetodoPagoController {
    constructor (private readonly metodoPagoService: MetodoPagoService) {}

    @Get()
    async getMetodosPago(){
        try {
            return await this.metodoPagoService.getMetodosPago();
        } catch (error) {
            throw new HttpException('Error al obtener métodos de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async getMetodoPago(@Param('id') id: number){
        try {
            return await this.metodoPagoService.getMetodoPago(id);
        } catch (error) {
            throw new HttpException('Error al obtener el método de pago por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('crear')
    async createMetodoPago(@Body() data: CreateMetodoPagoDto){
        try {
            return await this.metodoPagoService.createMetodoPago(data);
        } catch (error) {
            throw new HttpException('Error al crear el método de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('editar/:id')
    async updateMetodoPago(@Param('id') id: number,@Body() data: MetodoPagoEditDto){
        try {
            return await this.metodoPagoService.updateMetodoPago(data, id);
        } catch (error) {
            throw new HttpException('Error al actualizar el método de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminar/:id')
    async deleteMetodoPago(@Param('id') id: number){
        try {
            return await this.metodoPagoService.deleteMetodoPago(id);
        } catch (error) {
            throw new HttpException('Error al eliminar el método de pago', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}