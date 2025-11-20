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
exports.DetalleVentaController = void 0;
const common_1 = require("@nestjs/common");
const detalleVenta_service_1 = require("../service/detalleVenta.service");
const create_detalleVenta_dto_1 = require("../dto/create-detalleVenta.dto");
let DetalleVentaController = class DetalleVentaController {
    detalleVenta;
    constructor(detalleVenta) {
        this.detalleVenta = detalleVenta;
    }
    async getDetalleVenta() {
        try {
            return await this.detalleVenta.getDetalleVentaService();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener Lineas', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getDetalleVentaById(idLinea) {
        try {
            return await this.detalleVenta.getDetalleVentaByIdService(idLinea);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener linea por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getDetalleVentaByIdVenta(idVenta) {
        try {
            return await this.detalleVenta.getDetalleConIDVentaService(idVenta);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener linea por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postDetalleVenta(data) {
        try {
            return await this.detalleVenta.postDetalleVentaService(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear linea', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.DetalleVentaController = DetalleVentaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetalleVentaController.prototype, "getDetalleVenta", null);
__decorate([
    (0, common_1.Get)(':idDetalleVenta'),
    __param(0, (0, common_1.Param)('idLinea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetalleVentaController.prototype, "getDetalleVentaById", null);
__decorate([
    (0, common_1.Get)('ventas/:idVenta'),
    __param(0, (0, common_1.Param)('idVenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetalleVentaController.prototype, "getDetalleVentaByIdVenta", null);
__decorate([
    (0, common_1.Post)('createDetalleVenta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalleVenta_dto_1.CreateDetalleVentaDto]),
    __metadata("design:returntype", Promise)
], DetalleVentaController.prototype, "postDetalleVenta", null);
exports.DetalleVentaController = DetalleVentaController = __decorate([
    (0, common_1.Controller)('detalleVenta'),
    __metadata("design:paramtypes", [detalleVenta_service_1.DetalleVentaService])
], DetalleVentaController);
//# sourceMappingURL=detalleVenta.controller.js.map