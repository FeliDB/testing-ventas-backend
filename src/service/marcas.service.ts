import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { MarcasRepository } from 'src/repository/marcas.repository';
import { CreateMarcaDto } from 'src/dto/create-marca.dto';
import { EditMarcaDto } from 'src/dto/edit.marca.dto';


@Injectable()
export class MarcasService {

    constructor(private readonly marcasRespository: MarcasRepository) {}

    async getMarcasService() {
        try {
            return await this.marcasRespository.getMarcaRepository();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de marcas.');
        }
    }

    async getMarcaByIdService(id: number){
        try {
            const marca = await this.marcasRespository.getMarcaIDRespository(id);
            if (!marca) {
                throw new NotFoundException(`Marca con ID ${id} no encontrada.`);
            }
            return marca;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener la marca con ID ${id}.`);
        }
    }

    async postMarcasService(createMarcaDto: CreateMarcaDto){
        try {
            return await this.marcasRespository.postMarcaRespository(createMarcaDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear la marca.');
        }
    }

    async putMarcasService(idMarca: number, editMarcaDto: EditMarcaDto){
        try {
            return await this.marcasRespository.putMarcaRepository(idMarca, editMarcaDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar la marca con ID ${idMarca}.`);
        }
    }

    async deleteMarcasService(id: number){
        try {
            return await this.marcasRespository.deleteMarcaRepository(id);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar la marca con ID ${id}.`);
        }
    }
}