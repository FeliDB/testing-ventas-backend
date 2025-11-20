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
exports.TipoFacturaController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../decorators/auth.decorator");
const tipo_factura_create_dto_1 = require("../dto/tipo-factura-create.dto");
const tipo_factura_edit_dto_1 = require("../dto/tipo-factura-edit.dto");
const tipo_factura_service_1 = require("../service/tipo-factura.service");
let TipoFacturaController = class TipoFacturaController {
    tipoFacturaService;
    constructor(tipoFacturaService) {
        this.tipoFacturaService = tipoFacturaService;
    }
    async getMetodosPago() {
        try {
            return await this.tipoFacturaService.getTipoFactura();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los tipos de factura', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMetodoPago(id) {
        try {
            return await this.tipoFacturaService.getTipoFacturaByID(id);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el tipo de factura por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createMetodoPago(data) {
        try {
            return await this.tipoFacturaService.createTipoFactura(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el tipo de factura', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateMetodoPago(id, data) {
        try {
            return await this.tipoFacturaService.updateTipoFactura(data, id);
        }
        catch (error) {
            throw new common_1.HttpException('Error al actualizar el tipo de factura', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteMetodoPago(id) {
        try {
            return await this.tipoFacturaService.deleteTipoFactura(id);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el tipo de factura', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TipoFacturaController = TipoFacturaController;
__decorate([
    (0, auth_decorator_1.Auth)('admin', 'dueño'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoFacturaController.prototype, "getMetodosPago", null);
__decorate([
    (0, auth_decorator_1.Auth)('admin', 'dueño'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoFacturaController.prototype, "getMetodoPago", null);
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tipo_factura_create_dto_1.CreateTipoFacturaDto]),
    __metadata("design:returntype", Promise)
], TipoFacturaController.prototype, "createMetodoPago", null);
__decorate([
    (0, auth_decorator_1.Auth)('dueño'),
    (0, common_1.Put)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tipo_factura_edit_dto_1.TipoFacturaEditDto]),
    __metadata("design:returntype", Promise)
], TipoFacturaController.prototype, "updateMetodoPago", null);
__decorate([
    (0, auth_decorator_1.Auth)('dueño'),
    (0, common_1.Delete)('eliminar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoFacturaController.prototype, "deleteMetodoPago", null);
exports.TipoFacturaController = TipoFacturaController = __decorate([
    (0, common_1.Controller)('tipo-factura'),
    __metadata("design:paramtypes", [tipo_factura_service_1.TipoFacturaService])
], TipoFacturaController);
//# sourceMappingURL=tipo-factura.controller.js.map