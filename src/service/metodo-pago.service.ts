import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMetodoPagoDto } from 'src/dto/metodo-pago-create.dto';
import { MetodoPagoEditDto } from 'src/dto/metodo-pago-edit.dto';
import { MetodoPagoRepository } from 'src/repository/metodo-pago.repository';

@Injectable()
export class MetodoPagoService {
    constructor(private readonly metodoPagoRepository: MetodoPagoRepository) {}

    async getMetodosPago(){
        try {
            return await this.metodoPagoRepository.getMetodosPago();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de métodos de pago.');
        }
    }

    async getMetodoPago(id: number){
        try {
            const metodoPago = await this.metodoPagoRepository.getMetodoPagoById(id);
            if (!metodoPago) {
                throw new NotFoundException(`Método de pago con ID ${id} no encontrado.`);
            }
            return metodoPago;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener el método de pago con ID ${id}.`);
        }
    }

    async createMetodoPago(data: CreateMetodoPagoDto){
        try {
            return await this.metodoPagoRepository.createMetodoPago(data);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear el método de pago.');
        }
    }

    async updateMetodoPago(data: MetodoPagoEditDto, id: number){
        try {
            return await this.metodoPagoRepository.editMetodoPago(id, data);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar el método de pago con ID ${id}.`);
        }
    }

    async deleteMetodoPago(id: number){
        try {
            await this.metodoPagoRepository.deleteMetodoPago(id);
            return { message: 'Método de pago eliminado correctamente' };
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar el método de pago con ID ${id}.`);
        }
    }
}