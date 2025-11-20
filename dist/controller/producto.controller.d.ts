import { ProductoService } from "src/service/producto.service";
import { CreateProductoDto } from "src/dto/create-producto.dto";
import { EditProductoDto } from "src/dto/edit-producto.dto";
export declare class ProductosController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    getProducto(page?: number, limit?: number): Promise<{
        data: import("../entity/producto.entity").ProductoEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getProductoById(idProducto: number): Promise<import("../entity/producto.entity").ProductoEntity>;
    postProductos(data: CreateProductoDto): Promise<import("../entity/producto.entity").ProductoEntity>;
    putProducto(idProducto: number, data: EditProductoDto): Promise<import("../entity/producto.entity").ProductoEntity>;
    deleteProducto(idProducto: number): Promise<void>;
}
