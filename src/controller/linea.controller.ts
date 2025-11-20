import { Controller, Body, Get, Post, Put, Delete, Param, HttpStatus, HttpException } from "@nestjs/common";
import { LineaService } from "src/service/linea.service";
import { CreatelineasDto } from "src/dto/create-linea.dto";
import { EditLineaDto } from "src/dto/edit-linea.dto";


@Controller('lineas')
export class LineasController {
    constructor(private readonly Lineaservice: LineaService){}

    @Get()
    async getLineas(){
        try {
            return await this.Lineaservice.getLineasService();
        } catch (error) {
            throw new HttpException('Error al obtener Lineas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':idLinea')
    async getMarcaById(@Param('idLinea') idLinea: number){
        try {
            return await this.Lineaservice.getLineaByIdService(idLinea);
        } catch (error) {
            throw new HttpException('Error al obtener linea por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('createLinea')
    async postLineas(@Body() data: CreatelineasDto){
        try {
            return await this.Lineaservice.postLineasService(data);
        } catch (error) {
            throw new HttpException('Error al crear linea', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('modificarLinea/:id')
    async putLineas(@Param('id') idLinea: number, @Body() data: EditLineaDto){
        try {
            return await this.Lineaservice.putLineasService(idLinea, data);
        } catch (error) {
            throw new HttpException('Error al modificar linea', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminarMarca/:idMarca')
    async deleteLineas(@Param('idMarca') idMarca: number){
        try {
            return await this.Lineaservice.deleteLineasService(idMarca);
        } catch (error) {
            throw new HttpException('Error al eliminar linea', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}