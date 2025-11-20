import { Repository } from "typeorm";
import { Injectable, ConflictException, NotFoundException, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from "src/entity/producto.entity";
import { MarcaEntity } from "src/entity/marca.entity";
import { ProveedorEntity } from "src/entity/proveedor.entity";
import { LineaEntity } from "src/entity/linea.entity";
import { ProveedorProducto } from "src/entity/ProductoProveedor.entity";
import { CreateProductoDto } from "src/dto/create-producto.dto";
import { EditProductoDto } from "src/dto/edit-producto.dto";


@Injectable()
export class ProductoRepository {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly repository: Repository<ProductoEntity>,
        @InjectRepository(MarcaEntity)
        private readonly marcaRepository: Repository<MarcaEntity>,
        @InjectRepository(ProveedorEntity)
        private readonly proveedorRepository: Repository<ProveedorEntity>,
        @InjectRepository(LineaEntity)
        private readonly lineaRepository: Repository<LineaEntity>,
        @InjectRepository(ProveedorProducto)
        private readonly proveedorProductoRepository: Repository<ProveedorProducto>
    ) {}

    async getProductoRepository(page: number = 1, limit: number = 10) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        
        const [productos, total] = await this.repository.findAndCount({
            relations: ['marca', 'linea', 'proveedorProductos', 'proveedorProductos.proveedor'],
            skip,
            take: limitNum
        });

        return {
            data: productos,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum)
        };
    }

    async getProductoIDRespository(id: number): Promise<ProductoEntity | null> {
        return await this.repository.findOne({
            where: { idProducto: id },
            relations: ['marca', 'linea', 'proveedorProductos', 'proveedorProductos.proveedor'],
        });
    }

    async postProductoRespository(createProductoDto: CreateProductoDto): Promise<ProductoEntity> {
        const marca = await this.marcaRepository.findOneBy({ idMarca: createProductoDto.idMarca });
        if (!marca) {
            throw new BadRequestException(`Marca con ID ${createProductoDto.idMarca} no existe`);
        }

        const linea = await this.lineaRepository.findOneBy({ idLinea: createProductoDto.idLinea });
        if (!linea) {
            throw new BadRequestException(`Línea con ID ${createProductoDto.idLinea} no existe`);
        }

        const proveedores = await this.proveedorRepository
            .createQueryBuilder('proveedor')
            .where('proveedor.idProveedor IN (:...ids)', { ids: createProductoDto.idProveedor })
            .getMany();
        if (proveedores.length !== createProductoDto.idProveedor.length) {
            throw new BadRequestException(`Uno o más proveedores no existen`);
        }

        const producto = this.repository.create({
            descripcion: createProductoDto.descripcion,
            precioUnitario: createProductoDto.precioUnitario,
            stock: createProductoDto.cantidad,
            marca,
            linea
        });
        
        const savedProducto = await this.repository.save(producto);

        // Crear relaciones en tabla intermedia y guardar código del proveedor
        for (const proveedor of proveedores) {
            const proveedorProducto = this.proveedorProductoRepository.create({
                producto: savedProducto,
                proveedor: proveedor,
                codigoProveedor: proveedor.codigoProveedor // 👈 se obtiene del proveedor
            });
            await this.proveedorProductoRepository.save(proveedorProducto);
        }

        return savedProducto;
    }


    async putProductoRepository(idProducto: number, editProductoDto: EditProductoDto): Promise<ProductoEntity> {
        const buscarProducto = await this.repository.findOneBy({ idProducto: idProducto });
        if (!buscarProducto) {
            throw new NotFoundException('Producto no encontrada');
        }

        buscarProducto.descripcion = editProductoDto.descripcionProducto ?? buscarProducto.descripcion;
        return await this.repository.save(buscarProducto);
    }

    async deleteProductoRepository(id: number): Promise<void> {
        const buscarMarca = await this.repository.findOneBy({ idProducto: id });
        if (!buscarMarca) {
            throw new NotFoundException('Producto no encontrada');
        }

        await this.repository.remove(buscarMarca);
    }
}
