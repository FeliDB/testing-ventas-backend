import { Repository } from "typeorm";
import { ProductoEntity } from "src/entity/producto.entity";
import { MarcaEntity } from "src/entity/marca.entity";
import { ProveedorEntity } from "src/entity/proveedor.entity";
import { LineaEntity } from "src/entity/linea.entity";
import { ProveedorProducto } from "src/entity/ProductoProveedor.entity";
import { CreateProductoDto } from "src/dto/create-producto.dto";
import { EditProductoDto } from "src/dto/edit-producto.dto";
export declare class ProductoRepository {
    private readonly repository;
    private readonly marcaRepository;
    private readonly proveedorRepository;
    private readonly lineaRepository;
    private readonly proveedorProductoRepository;
    constructor(repository: Repository<ProductoEntity>, marcaRepository: Repository<MarcaEntity>, proveedorRepository: Repository<ProveedorEntity>, lineaRepository: Repository<LineaEntity>, proveedorProductoRepository: Repository<ProveedorProducto>);
    getProductoRepository(page?: number, limit?: number): Promise<{
        data: ProductoEntity[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getProductoIDRespository(id: number): Promise<ProductoEntity | null>;
    postProductoRespository(createProductoDto: CreateProductoDto): Promise<ProductoEntity>;
    putProductoRepository(idProducto: number, editProductoDto: EditProductoDto): Promise<ProductoEntity>;
    deleteProductoRepository(id: number): Promise<void>;
}
