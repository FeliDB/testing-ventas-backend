import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { EditProductoDto } from 'src/dto/edit-producto.dto';
import { ProductoRepository } from 'src/repository/producto.repository';
export declare class ProductoService {
    private readonly productosRespository;
    constructor(productosRespository: ProductoRepository);
    getProductoService(page: any, limit: any): Promise<{
        data: import("../entity/producto.entity").ProductoEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getProductoByIdService(id: number): Promise<import("../entity/producto.entity").ProductoEntity>;
    postProductoService(createProductoDto: CreateProductoDto): Promise<import("../entity/producto.entity").ProductoEntity>;
    putProductoService(idProducto: number, editProductoDto: EditProductoDto): Promise<import("../entity/producto.entity").ProductoEntity>;
    deleteProductoService(id: number): Promise<void>;
}
