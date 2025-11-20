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
exports.VentaController = void 0;
const common_1 = require("@nestjs/common");
const venta_service_1 = require("../service/venta.service");
const create_venta_dto_1 = require("../dto/create-venta.dto");
const auth_decorator_1 = require("../decorators/auth.decorator");
let VentaController = class VentaController {
    ventaService;
    constructor(ventaService) {
        this.ventaService = ventaService;
    }
    async getVenta(periodo) {
        try {
            return await this.ventaService.getVentaService(periodo);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener ventas', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getVentaPaginada(page = 1, limit = 10, periodo) {
        try {
            return await this.ventaService.getVentaPaginadaService(+page, +limit, periodo);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener ventas', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getVentaById(idVenta) {
        try {
            return await this.ventaService.getVentaByIdService(idVenta);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener venta por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaByVentaId(idVenta) {
        try {
            return await this.ventaService.getFacturaByVentaIdService(+idVenta);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener factura de la venta', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postVenta(createVentaDto) {
        try {
            return await this.ventaService.postVentaService(createVentaDto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear venta', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.VentaController = VentaController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('periodo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "getVenta", null);
__decorate([
    (0, common_1.Get)('paginada'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('periodo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "getVentaPaginada", null);
__decorate([
    (0, common_1.Get)(':idVenta'),
    __param(0, (0, common_1.Param)('idVenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "getVentaById", null);
__decorate([
    (0, common_1.Get)(':idVenta/factura'),
    __param(0, (0, common_1.Param)('idVenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "getFacturaByVentaId", null);
__decorate([
    (0, auth_decorator_1.Auth)('empleado', 'dueño'),
    (0, common_1.Post)('createVenta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venta_dto_1.CreateVentaDto]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "postVenta", null);
exports.VentaController = VentaController = __decorate([
    (0, common_1.Controller)('venta'),
    __metadata("design:paramtypes", [venta_service_1.VentaService])
], VentaController);
//# sourceMappingURL=venta.controller.js.map