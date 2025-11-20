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
exports.ProveedorController = void 0;
const common_1 = require("@nestjs/common");
const proveedor_service_1 = require("../service/proveedor.service");
const create_proveedor_dto_1 = require("../dto/create-proveedor.dto");
const edit_proveedor_dto_1 = require("../dto/edit.proveedor.dto");
const auth_decorator_1 = require("../decorators/auth.decorator");
let ProveedorController = class ProveedorController {
    proveedorService;
    constructor(proveedorService) {
        this.proveedorService = proveedorService;
    }
    async getProveedor() {
        try {
            return await this.proveedorService.getProveedorService();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener proveedores', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getProveedorById(idProveedor) {
        try {
            return await this.proveedorService.getProveedorByIdService(idProveedor);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener proveedor por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postProveedor(data) {
        try {
            return await this.proveedorService.postProveedorService(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear proveedor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async putProveedor(idProveedor, data) {
        try {
            return await this.proveedorService.putProveedorService(idProveedor, data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar proveedor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteProveedor(idProveedor) {
        try {
            return await this.proveedorService.deleteProveedorService(idProveedor);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar proveedor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ProveedorController = ProveedorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProveedorController.prototype, "getProveedor", null);
__decorate([
    (0, auth_decorator_1.Auth)('gerente', 'dueño'),
    (0, common_1.Get)(':idProveedor'),
    __param(0, (0, common_1.Param)('idProveedor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProveedorController.prototype, "getProveedorById", null);
__decorate([
    (0, common_1.Post)('createProveedor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proveedor_dto_1.CreateProveedorDto]),
    __metadata("design:returntype", Promise)
], ProveedorController.prototype, "postProveedor", null);
__decorate([
    (0, common_1.Put)('modificarProveedor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_proveedor_dto_1.EditProveedorDto]),
    __metadata("design:returntype", Promise)
], ProveedorController.prototype, "putProveedor", null);
__decorate([
    (0, common_1.Delete)('eliminarProveedor/:idProveedor'),
    __param(0, (0, common_1.Param)('idProveedor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProveedorController.prototype, "deleteProveedor", null);
exports.ProveedorController = ProveedorController = __decorate([
    (0, common_1.Controller)('proveedor'),
    __metadata("design:paramtypes", [proveedor_service_1.ProveedorService])
], ProveedorController);
//# sourceMappingURL=proveedor.controller.js.map