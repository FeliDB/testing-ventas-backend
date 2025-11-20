import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ProveedorRepository } from 'src/repository/proveedor.repository';
import { CreateProveedorDto } from 'src/dto/create-proveedor.dto';
import { EditProveedorDto } from 'src/dto/edit.proveedor.dto';

@Injectable()
export class ProveedorService {

    constructor(private readonly proveedorRepository: ProveedorRepository) {}

    async getProveedorService() {
        try {
            return await this.proveedorRepository.getProveedorRepository();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de proveedores.');
        }
    }

    async getProveedorByIdService(id: number){
        try {
            const proveedor = await this.proveedorRepository.getProveedorIDRespository(id);
            if (!proveedor) {
                throw new NotFoundException(`Proveedor con ID ${id} no encontrado.`);
            }
            return proveedor;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener el proveedor con ID ${id}.`);
        }
    }

    async postProveedorService(createProveedorDto: CreateProveedorDto){
        try {
            return await this.proveedorRepository.postProveedorRespository(createProveedorDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear el proveedor.');
        }
    }

    async putProveedorService(idProveedor: number, editProveedorDto: EditProveedorDto){
        try {
            return await this.proveedorRepository.putProveedorRepository(idProveedor, editProveedorDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar el proveedor con ID ${idProveedor}.`);
        }
    }

    async deleteProveedorService(id: number){
        try {
            return await this.proveedorRepository.deleteProveedorRepository(id);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar el proveedor con ID ${id}.`);
        }
    }
}