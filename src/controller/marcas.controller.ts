import { Controller, Body, Get, Post, Put, Delete, Param, HttpStatus, HttpException } from "@nestjs/common";
import { MarcasService } from "src/service/marcas.service";
import { CreateMarcaDto } from "src/dto/create-marca.dto";
import { EditMarcaDto } from "src/dto/edit.marca.dto";
import { Auth } from "src/decorators/auth.decorator";

@Controller('marcas')
export class MarcasController {
    constructor(private readonly marcaService: MarcasService){}

    // @Auth('gerente', 'dueño')
    @Get()
    async getMarcas(){
        try {
            return await this.marcaService.getMarcasService();
        } catch (error) {
            throw new HttpException('Error al obtener marcas', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('gerente', 'dueño')
    @Get(':idMarca')
    async getMarcaById(@Param('idMarca') idMarca: number){
        try {
            return await this.marcaService.getMarcaByIdService(idMarca);
        } catch (error) {
            throw new HttpException('Error al obtener marca por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('createMarca')
    async postMarcas(@Body() data: CreateMarcaDto){
        try {
            return await this.marcaService.postMarcasService(data);
        } catch (error) {
            throw new HttpException('Error al crear marca', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('modificarMarca/:id')
    async putMarcas(@Param('id') idMarca: number, @Body() data: EditMarcaDto){
        try {
            return await this.marcaService.putMarcasService(idMarca, data);
        } catch (error) {
            throw new HttpException('Error al modificar marca', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminarMarca/:idMarca')
    async deleteMarcas(@Param('idMarca') idMarca: number){
        try {
            return await this.marcaService.deleteMarcasService(idMarca);
        } catch (error) {
            throw new HttpException('Error al eliminar marca', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}