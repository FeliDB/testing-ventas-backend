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
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("../service/producto.service");
const create_producto_dto_1 = require("../dto/create-producto.dto");
const edit_producto_dto_1 = require("../dto/edit-producto.dto");
const auth_decorator_1 = require("../decorators/auth.decorator");
let ProductosController = class ProductosController {
    productoService;
    constructor(productoService) {
        this.productoService = productoService;
    }
    async getProducto(page = 1, limit = 10) {
        try {
            return await this.productoService.getProductoService(+page, +limit);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener productos', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getProductoById(idProducto) {
        try {
            return await this.productoService.getProductoByIdService(idProducto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener producto por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postProductos(data) {
        try {
            return await this.productoService.postProductoService(data);
        }
        catch (error) {
            if (error.status === 400) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Error al crear producto', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async putProducto(idProducto, data) {
        try {
            return await this.productoService.putProductoService(idProducto, data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar producto', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteProducto(idProducto) {
        try {
            return await this.productoService.deleteProductoService(idProducto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar producto', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "getProducto", null);
__decorate([
    (0, auth_decorator_1.Auth)('gerente', 'dueño'),
    (0, common_1.Get)(':idProducto'),
    __param(0, (0, common_1.Param)('idProducto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "getProductoById", null);
__decorate([
    (0, common_1.Post)('createProducto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "postProductos", null);
__decorate([
    (0, common_1.Put)('modificarProducto/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_producto_dto_1.EditProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "putProducto", null);
__decorate([
    (0, common_1.Delete)('eliminarProducto/:idProducto'),
    __param(0, (0, common_1.Param)('idProducto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "deleteProducto", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductosController);
//# sourceMappingURL=producto.controller.js.map