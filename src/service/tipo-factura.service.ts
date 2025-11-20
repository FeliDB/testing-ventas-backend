import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTipoFacturaDto } from 'src/dto/tipo-factura-create.dto';
import { TipoFacturaEditDto } from 'src/dto/tipo-factura-edit.dto';
import { TipoFacturaRepository } from 'src/repository/tipo-factura.repository';

@Injectable()
export class TipoFacturaService {
    constructor(private readonly tipoFacturaRepository: TipoFacturaRepository) {}

    async getTipoFactura() {
        try {
            return await this.tipoFacturaRepository.getTiposFactura();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de tipos de factura.');
        }
    }

    async getTipoFacturaByID(id: number) {
        try {
            const tipoFactura = await this.tipoFacturaRepository.getTipoFacturaById(id);
            if (!tipoFactura) {
                throw new NotFoundException(`Tipo de factura con ID ${id} no encontrado.`);
            }
            return tipoFactura;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener el tipo de factura con ID ${id}.`);
        }
    }

    async createTipoFactura(data: CreateTipoFacturaDto) {
        try {
            return await this.tipoFacturaRepository.createTipoFactura(data);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear el tipo de factura.');
        }
    }

    async updateTipoFactura(data: TipoFacturaEditDto, id: number) {
        try {
            return await this.tipoFacturaRepository.editTipoFactura(id, data);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar el tipo de factura con ID ${id}.`);
        }
    }

    async deleteTipoFactura(id: number) {
        try {
            await this.tipoFacturaRepository.deleteTipoFactura(id);
            return { message: 'Tipo de Factura eliminado correctamente' };
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar el tipo de factura con ID ${id}.`);
        }
    }
}