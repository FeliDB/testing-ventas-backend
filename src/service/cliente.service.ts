import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ClienteRepository } from 'src/repository/cliente.repository';
import { CreateClienteDto } from 'src/dto/create-cliente.dto';
import { EditClienteDto } from 'src/dto/edit-cliente.dto';

@Injectable()
export class ClienteService {

    constructor(private readonly clienteRepository: ClienteRepository) {}

    async getClienteService() {
        try {
            return await this.clienteRepository.getClienteRepository();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de clientes.');
        }
    }

    async getClienteByIdService(id: number){
        try {
            const cliente = await this.clienteRepository.getClienteIDRespository(id);
            if (!cliente) {
                throw new NotFoundException(`Cliente con ID ${id} no encontrado.`);
            }
            return cliente;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener el cliente con ID ${id}.`);
        }
    }

    async getClienteByDniService(dni: string){
        try {
            const cliente = await this.clienteRepository.getClienteDniRepository(dni);
            if (!cliente) {
                throw new NotFoundException(`Cliente con DNI ${dni} no encontrado.`);
            }
            return cliente;
        } catch (error) {
            console.error(error);
        }
    }

    async postClienteService(createClienteDto: CreateClienteDto){
        try {
            return await this.clienteRepository.postClienteRespository(createClienteDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear el cliente.');
        }
    }

    async putClienteService(idCliente: number, editClienteDto: EditClienteDto){
        try {
            return await this.clienteRepository.putClienteRepository(idCliente, editClienteDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar el cliente con ID ${idCliente}.`);
        }
    }

    async deleteClienteService(id: number){
        try {
            return await this.clienteRepository.deleteClienteRepository(id);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar el cliente con ID ${id}.`);
        }
    }
}