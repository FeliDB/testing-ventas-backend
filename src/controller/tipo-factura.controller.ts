import { Body, Controller, Delete, Get, Param, Post, Put, HttpStatus, HttpException } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CreateTipoFacturaDto } from 'src/dto/tipo-factura-create.dto';
import { TipoFacturaEditDto } from 'src/dto/tipo-factura-edit.dto';
import { TipoFacturaService } from 'src/service/tipo-factura.service';

@Controller('tipo-factura')
export class TipoFacturaController {
    constructor (private readonly tipoFacturaService: TipoFacturaService) {}

    @Auth('admin', 'dueño')
    @Get()
    async getMetodosPago(){
        try {
            return await this.tipoFacturaService.getTipoFactura();
        } catch (error) {
            throw new HttpException('Error al obtener los tipos de factura', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('admin', 'dueño')
    @Get(':id')
    async getMetodoPago(@Param('id') id: number){
        try {
            return await this.tipoFacturaService.getTipoFacturaByID(id);
        } catch (error) {
            throw new HttpException('Error al obtener el tipo de factura por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @Auth('dueño')
    @Post('crear')
    async createMetodoPago(@Body() data: CreateTipoFacturaDto){
        try {
            return await this.tipoFacturaService.createTipoFactura(data);
        } catch (error) {
            throw new HttpException('Error al crear el tipo de factura', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('dueño')
    @Put('editar/:id')
    async updateMetodoPago(@Param('id') id: number,@Body() data: TipoFacturaEditDto){
        try {
            return await this.tipoFacturaService.updateTipoFactura(data, id);
        } catch (error) {
            throw new HttpException('Error al actualizar el tipo de factura', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('dueño')
    @Delete('eliminar/:id')
    async deleteMetodoPago(@Param('id') id: number){
        try {
            return await this.tipoFacturaService.deleteTipoFactura(id);
        } catch (error) {
            throw new HttpException('Error al eliminar el tipo de factura', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}