import { Controller, Body, Get, Post, Put, Delete, Param, Query, HttpStatus, HttpException } from "@nestjs/common";
import { ProductoService } from "src/service/producto.service";
import { CreateProductoDto } from "src/dto/create-producto.dto";
import { EditProductoDto } from "src/dto/edit-producto.dto";
import { Auth } from "src/decorators/auth.decorator";

@Controller('productos')
export class ProductosController {
    constructor(private readonly productoService: ProductoService){}

    // @Auth('gerente', 'dueño')
    @Get()
    async getProducto(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ){
        try {
            return await this.productoService.getProductoService(+page, +limit);
        } catch (error) {
            throw new HttpException('Error al obtener productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Auth('gerente', 'dueño')
    @Get(':idProducto')
    async getProductoById(@Param('idProducto') idProducto: number){
        try {
            return await this.productoService.getProductoByIdService(idProducto);
        } catch (error) {
            throw new HttpException('Error al obtener producto por ID', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('createProducto')
    async postProductos(@Body() data: CreateProductoDto){
        try {
            return await this.productoService.postProductoService(data);
        } catch (error) {
            if (error.status === 400) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Error al crear producto', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('modificarProducto/:id')
    async putProducto(@Param('id') idProducto: number, @Body() data: EditProductoDto){
        try {
            return await this.productoService.putProductoService(idProducto, data);
        } catch (error) {
            throw new HttpException('Error al modificar producto', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminarProducto/:idProducto')
    async deleteProducto(@Param('idProducto') idProducto: number){
        try {
            return await this.productoService.deleteProductoService(idProducto);
        } catch (error) {
            throw new HttpException('Error al eliminar producto', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}