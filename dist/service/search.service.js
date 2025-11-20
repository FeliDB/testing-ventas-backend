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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const search_repository_1 = require("../repository/search.repository");
let SearchService = class SearchService {
    searchRepository;
    constructor(searchRepository) {
        this.searchRepository = searchRepository;
    }
    async getProductoXLineaXMarca(input) {
        try {
            console.log('Service - Input:', input);
            const result = await this.searchRepository.getProductoXLineaXMarca(input);
            console.log('Service - Result:', result);
            return result;
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar productos');
        }
    }
    async getFacturaPorFecha(fecha) {
        try {
            return await this.searchRepository.getFacturaXFecha(fecha);
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar facturas por fecha');
        }
    }
    async getFacturaPorTipo(tipo) {
        try {
            return await this.searchRepository.getFacturaXTipo(tipo);
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar facturas por tipo');
        }
    }
    async getFacturaPorMetodoPago(metodoPago) {
        try {
            return await this.searchRepository.getFacturaXMetodoPago(metodoPago);
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar facturas por metodo de pago');
        }
    }
    async getFacturaPorCliente(idCliente) {
        try {
            return await this.searchRepository.getFacturaXCliente(idCliente);
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar facturas por cliente');
        }
    }
    async getFacturaPorPrecio(rangoMin, rangoMax) {
        try {
            return await this.searchRepository.getFacturaXPrecio(rangoMin, rangoMax);
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al buscar facturas por precio');
        }
    }
    async getMetodosPagoDeFacturas() {
        try {
            return await this.searchRepository.getMetodosPagoDeFacturas();
        }
        catch (error) {
            console.error('Error en service:', error);
            throw new common_1.InternalServerErrorException('Error al obtener métodos de pago');
        }
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [search_repository_1.SearchRepository])
], SearchService);
//# sourceMappingURL=search.service.js.map