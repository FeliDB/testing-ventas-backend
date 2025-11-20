import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { EditLineaDto } from 'src/dto/edit-linea.dto';
import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';
import { CreateDetalleVentaDto } from 'src/dto/create-detalleVenta.dto';
import { EditDetalleVentaDto } from 'src/dto/edit.detalleVenta.dto';


@Injectable()
export class DetalleVentaService {

    constructor(private readonly detalleVentaRepository: DetalleVentaRepository) {}

    async getDetalleVentaService() {
        try {
            return await this.detalleVentaRepository.getDetalleVentaRepository();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de detalle.');
        }
    }

    async getDetalleVentaByIdService(id: number){
        try {
            const detalleVenta = await this.detalleVentaRepository.getDetalleVentaIDRespository(id);
            if (!detalleVenta) {
                throw new NotFoundException(`detalle con ID ${id} no encontrada.`);
            }
            return detalleVenta;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener la detalle con ID ${id}.`);
        }
    }

    async getDetalleConIDVentaService(idVenta: number){
        try {
            return await this.detalleVentaRepository.getDetalleConIDVenta(idVenta);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al obtener la detalle con ID ${idVenta}.`);
        }
    }

    async postDetalleVentaService(createDetalleVentaDto: CreateDetalleVentaDto){
        // try {
        //     return await this.detalleVentaRepository.postDetalleVentaRespository(createDetalleVentaDto);
        // } catch (error) {
        //     console.error(error);
        //     throw new InternalServerErrorException('Error al crear la detalle.');
        // }
    }

    // async putDetalleVentaService(idDetalle: number, editDetalleVentaDto: EditDetalleVentaDto){
    //     try {
    //         return await this.detalleVentaRepository.putDetalleVentaRepository(idDetalle, editDetalleVentaDto);
    //     } catch (error) {
    //         console.error(error);
    //         throw new InternalServerErrorException(`Error al actualizar la detalle con ID ${idDetalle}.`);
    //     }
    // }

    // async deleteDetalleVentaService(id: number){
    //     try {
    //         return await this.detalleVentaRepository.deleteDetalleVentaRepository(id);
    //     } catch (error) {
    //         console.error(error);
    //         throw new InternalServerErrorException(`Error al eliminar la detalle con ID ${id}.`);
    //     }
    // }
}