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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const search_service_1 = require("../service/search.service");
let SearchController = class SearchController {
    searchService;
    constructor(searchService) {
        this.searchService = searchService;
    }
    async getProductoXLineaXMarca(input) {
        if (!input) {
            throw new common_1.HttpException('Query parameter q is required', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            console.log('Input recibido:', input);
            const result = await this.searchService.getProductoXLineaXMarca(input);
            console.log('Resultado:', result);
            return result;
        }
        catch (error) {
            console.error('Error en controller:', error);
            throw new common_1.HttpException('Error al buscar productos', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaPorFecha(fecha) {
        if (!fecha) {
            throw new common_1.HttpException('La fecha es requerida', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorFecha(fecha);
        }
        catch (error) {
            throw new common_1.HttpException('Error al buscar facturas por fecha', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaPorTipo(tipo) {
        if (!tipo) {
            throw new common_1.HttpException('El tipo de factura es requerido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorTipo(tipo);
        }
        catch (error) {
            throw new common_1.HttpException('Error al buscar facturas por tipo', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaPorMetodoPago(metodoPago) {
        if (!metodoPago) {
            throw new common_1.HttpException('El metodo de pago es requerido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorMetodoPago(metodoPago);
        }
        catch (error) {
            throw new common_1.HttpException('Error al buscar facturas por metodo de pago', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaPorCliente(idCliente) {
        if (!idCliente) {
            throw new common_1.HttpException('El ID del cliente es requerido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorCliente(idCliente);
        }
        catch (error) {
            throw new common_1.HttpException('Error al buscar facturas por cliente', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getFacturaPorPrecio(precio) {
        if (!precio) {
            throw new common_1.HttpException('El precio es requerido', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.searchService.getFacturaPorPrecio(precio, 0);
        }
        catch (error) {
            throw new common_1.HttpException('Error al buscar facturas por precio', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMetodosPagoDeFacturas() {
        try {
            return await this.searchService.getMetodosPagoDeFacturas();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener métodos de pago', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Get)('producto-linea-marca'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getProductoXLineaXMarca", null);
__decorate([
    (0, common_1.Get)('factura-por-fecha'),
    __param(0, (0, common_1.Query)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getFacturaPorFecha", null);
__decorate([
    (0, common_1.Get)('factura-por-tipo'),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getFacturaPorTipo", null);
__decorate([
    (0, common_1.Get)('factura-por-metodo-pago'),
    __param(0, (0, common_1.Query)('metodoPago')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getFacturaPorMetodoPago", null);
__decorate([
    (0, common_1.Get)('factura-por-cliente'),
    __param(0, (0, common_1.Query)('idCliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getFacturaPorCliente", null);
__decorate([
    (0, common_1.Get)('factura-por-precio'),
    __param(0, (0, common_1.Query)('precio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getFacturaPorPrecio", null);
__decorate([
    (0, common_1.Get)('metodos-pagoXfacturas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getMetodosPagoDeFacturas", null);
exports.SearchController = SearchController = __decorate([
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
//# sourceMappingURL=search.controller.js.map