import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatelineasDto } from 'src/dto/create-linea.dto';
import { EditLineaDto } from 'src/dto/edit-linea.dto';
import {LineaRepository } from 'src/repository/linea.repository';


@Injectable()
export class LineaService {

    constructor(private readonly lineaRespository: LineaRepository) {}

    async getLineasService() {
        try {
            return await this.lineaRespository.getLineaRepository();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de lineas.');
        }
    }

    async getLineaByIdService(id: number){
        try {
            const linea = await this.lineaRespository.getLineaIDRespository(id);
            if (!linea) {
                throw new NotFoundException(`lineas con ID ${id} no encontrada.`);
            }
            return linea;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener la lineas con ID ${id}.`);
        }
    }

    async postLineasService(createlineasDto: CreatelineasDto){
        try {
            return await this.lineaRespository.postLineaRespository(createlineasDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear la lineas.');
        }
    }

    async putLineasService(idlineas: number, editlineasDto: EditLineaDto){
        try {
            return await this.lineaRespository.putLineaRepository(idlineas, editlineasDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar la lineas con ID ${idlineas}.`);
        }
    }

    async deleteLineasService(id: number){
        try {
            return await this.lineaRespository.deleteLineaRepository(id);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar la lineas con ID ${id}.`);
        }
    }
}