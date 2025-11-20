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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const producto_repository_1 = require("../repository/producto.repository");
let ProductoService = class ProductoService {
    productosRespository;
    constructor(productosRespository) {
        this.productosRespository = productosRespository;
    }
    async getProductoService(page, limit) {
        try {
            return await this.productosRespository.getProductoRepository(page, limit);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de marcas.');
        }
    }
    async getProductoByIdService(id) {
        try {
            const producto = await this.productosRespository.getProductoIDRespository(id);
            if (!producto) {
                throw new common_1.NotFoundException(`producto con ID ${id} no encontrada.`);
            }
            return producto;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener el producto con ID ${id}.`);
        }
    }
    async postProductoService(createProductoDto) {
        try {
            return await this.productosRespository.postProductoRespository(createProductoDto);
        }
        catch (error) {
            console.error(error);
            if (error.status === 400) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error al crear el producto.');
        }
    }
    async putProductoService(idProducto, editProductoDto) {
        try {
            return await this.productosRespository.putProductoRepository(idProducto, editProductoDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar la producto con ID ${idProducto}.`);
        }
    }
    async deleteProductoService(id) {
        try {
            return await this.productosRespository.deleteProductoRepository(id);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar la producto con ID ${id}.`);
        }
    }
};
exports.ProductoService = ProductoService;
exports.ProductoService = ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [producto_repository_1.ProductoRepository])
], ProductoService);
//# sourceMappingURL=producto.service.js.map