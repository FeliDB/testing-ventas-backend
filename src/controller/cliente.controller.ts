import { Controller, Body, Get, Post, Put, Delete, Param, HttpStatus, HttpException } from "@nestjs/common";
import { EditClienteDto } from "src/dto/edit-cliente.dto";
import { ClienteService } from "../service/cliente.service";
import { CreateClienteDto } from "src/dto/create-cliente.dto";
import { Auth } from "src/decorators/auth.decorator";


@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService){}

    
    @Get()
    async getCliente(){
        try {
            return await this.clienteService.getClienteService();
        } catch (error) {
            throw new HttpException('Error al obtener clientes', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':idCliente')
    async getClienteById(@Param('idCliente') idCliente: number){
        try {
            return await this.clienteService.getClienteByIdService(idCliente);
        } catch (error) {
            throw new HttpException('Error al obtener cliente por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('searchByDni/:dni')
    async getClienteByDni(@Param('dni') dni: string){
        try {
            return await this.clienteService.getClienteByDniService(dni);
        } catch (error) {
            throw new HttpException('Error al obtener cliente por DNI', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('createCliente')
    async postCliente(@Body() data: CreateClienteDto){
        try {
            return await this.clienteService.postClienteService(data);
        } catch (error) {
            throw new HttpException('Error al crear cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('modificarCliente/:id')
    async putCliente(@Param('id') idCliente: number, @Body() data: EditClienteDto){
        try {
            return await this.clienteService.putClienteService(idCliente, data);
        } catch (error) {
            throw new HttpException('Error al modificar cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminarCliente/:idCliente')
    async deleteCliente(@Param('idCliente') idCliente: number){
        try {
            return await this.clienteService.deleteClienteService(idCliente);
        } catch (error) {
            throw new HttpException('Error al eliminar cliente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}