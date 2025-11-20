import { Controller, Body, Get, Post, Put, Delete, Param, HttpStatus, HttpException } from "@nestjs/common";
import { ProveedorService } from "src/service/proveedor.service";
import { CreateProveedorDto } from "src/dto/create-proveedor.dto";
import { EditProveedorDto } from "src/dto/edit.proveedor.dto";
import { Auth } from "src/decorators/auth.decorator";

@Controller('proveedor')
export class ProveedorController {
    constructor(private readonly proveedorService: ProveedorService){}

    // @Auth('gerente', 'dueño')
    @Get()
    async getProveedor(){
        try {
            return await this.proveedorService.getProveedorService();
        } catch (error) {
            throw new HttpException('Error al obtener proveedores', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @Auth('gerente', 'dueño')
    @Get(':idProveedor')
    async getProveedorById(@Param('idProveedor') idProveedor: number){
        try {
            return await this.proveedorService.getProveedorByIdService(idProveedor);
        } catch (error) {
            throw new HttpException('Error al obtener proveedor por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('createProveedor')
    async postProveedor(@Body() data: CreateProveedorDto){
        try {
            return await this.proveedorService.postProveedorService(data);
        } catch (error) {
            throw new HttpException('Error al crear proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('modificarProveedor/:id')
    async putProveedor(@Param('id') idProveedor: number, @Body() data: EditProveedorDto){
        try {
            return await this.proveedorService.putProveedorService(idProveedor, data);
        } catch (error) {
            throw new HttpException('Error al modificar proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminarProveedor/:idProveedor')
    async deleteProveedor(@Param('idProveedor') idProveedor: number){
        try {
            return await this.proveedorService.deleteProveedorService(idProveedor);
        } catch (error) {
            throw new HttpException('Error al eliminar proveedor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}