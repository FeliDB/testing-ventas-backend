"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const producto_entity_1 = require("../entity/producto.entity");
const marca_entity_1 = require("../entity/marca.entity");
const proveedor_entity_1 = require("../entity/proveedor.entity");
const linea_entity_1 = require("../entity/linea.entity");
const ProductoProveedor_entity_1 = require("../entity/ProductoProveedor.entity");
let ProductoRepository = class ProductoRepository {
    repository;
    marcaRepository;
    proveedorRepository;
    lineaRepository;
    proveedorProductoRepository;
    constructor(repository, marcaRepository, proveedorRepository, lineaRepository, proveedorProductoRepository) {
        this.repository = repository;
        this.marcaRepository = marcaRepository;
        this.proveedorRepository = proveedorRepository;
        this.lineaRepository = lineaRepository;
        this.proveedorProductoRepository = proveedorProductoRepository;
    }
    async getProductoRepository(page = 1, limit = 10) {
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
    async getProductoIDRespository(id) {
        return await this.repository.findOne({
            where: { idProducto: id },
            relations: ['marca', 'linea', 'proveedorProductos', 'proveedorProductos.proveedor'],
        });
    }
    async postProductoRespository(createProductoDto) {
        const marca = await this.marcaRepository.findOneBy({ idMarca: createProductoDto.idMarca });
        if (!marca) {
            throw new common_1.BadRequestException(`Marca con ID ${createProductoDto.idMarca} no existe`);
        }
        const linea = await this.lineaRepository.findOneBy({ idLinea: createProductoDto.idLinea });
        if (!linea) {
            throw new common_1.BadRequestException(`Línea con ID ${createProductoDto.idLinea} no existe`);
        }
        const proveedores = await this.proveedorRepository
            .createQueryBuilder('proveedor')
            .where('proveedor.idProveedor IN (:...ids)', { ids: createProductoDto.idProveedor })
            .getMany();
        if (proveedores.length !== createProductoDto.idProveedor.length) {
            throw new common_1.BadRequestException(`Uno o más proveedores no existen`);
        }
        const producto = this.repository.create({
            descripcion: createProductoDto.descripcion,
            precioUnitario: createProductoDto.precioUnitario,
            stock: createProductoDto.cantidad,
            marca,
            linea
        });
        const savedProducto = await this.repository.save(producto);
        for (const proveedor of proveedores) {
            const proveedorProducto = this.proveedorProductoRepository.create({
                producto: savedProducto,
                proveedor: proveedor,
                codigoProveedor: proveedor.codigoProveedor
            });
            await this.proveedorProductoRepository.save(proveedorProducto);
        }
        return savedProducto;
    }
    async putProductoRepository(idProducto, editProductoDto) {
        const buscarProducto = await this.repository.findOneBy({ idProducto: idProducto });
        if (!buscarProducto) {
            throw new common_1.NotFoundException('Producto no encontrada');
        }
        buscarProducto.descripcion = editProductoDto.descripcionProducto ?? buscarProducto.descripcion;
        return await this.repository.save(buscarProducto);
    }
    async deleteProductoRepository(id) {
        const buscarMarca = await this.repository.findOneBy({ idProducto: id });
        if (!buscarMarca) {
            throw new common_1.NotFoundException('Producto no encontrada');
        }
        await this.repository.remove(buscarMarca);
    }
};
exports.ProductoRepository = ProductoRepository;
exports.ProductoRepository = ProductoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(producto_entity_1.ProductoEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(marca_entity_1.MarcaEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(proveedor_entity_1.ProveedorEntity)),
    __param(3, (0, typeorm_2.InjectRepository)(linea_entity_1.LineaEntity)),
    __param(4, (0, typeorm_2.InjectRepository)(ProductoProveedor_entity_1.ProveedorProducto)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ProductoRepository);
//# sourceMappingURL=producto.repository.js.map