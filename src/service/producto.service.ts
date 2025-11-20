import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { EditProductoDto } from 'src/dto/edit-producto.dto';
import { ProductoRepository } from 'src/repository/producto.repository';



@Injectable()
export class ProductoService {

    constructor(private readonly productosRespository: ProductoRepository) {}

    async getProductoService(page, limit) {
        try {
            return await this.productosRespository.getProductoRepository(page, limit);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la lista de marcas.');
        }
    }

    async getProductoByIdService(id: number){
        try {
            const producto = await this.productosRespository.getProductoIDRespository(id);
            if (!producto) {
                throw new NotFoundException(`producto con ID ${id} no encontrada.`);
            }
            return producto;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener el producto con ID ${id}.`);
        }
    }

    async postProductoService(createProductoDto: CreateProductoDto){
        try {
            return await this.productosRespository.postProductoRespository(createProductoDto);
        } catch (error) {
            console.error(error);
            if (error.status === 400) {
                throw error;
            }
            throw new InternalServerErrorException('Error al crear el producto.');
        }
    }

    async putProductoService(idProducto: number, editProductoDto: EditProductoDto){
        try {
            return await this.productosRespository.putProductoRepository(idProducto, editProductoDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al actualizar la producto con ID ${idProducto}.`);
        }
    }

    async deleteProductoService(id: number){
        try {
            return await this.productosRespository.deleteProductoRepository(id);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException(`Error al eliminar la producto con ID ${id}.`);
        }
    }
}
