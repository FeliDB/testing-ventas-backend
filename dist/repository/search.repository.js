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
exports.SearchRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const producto_entity_1 = require("../entity/producto.entity");
const factura_entity_1 = require("../entity/factura.entity");
let SearchRepository = class SearchRepository {
    productoRepository;
    facturaRepository;
    constructor(productoRepository, facturaRepository) {
        this.productoRepository = productoRepository;
        this.facturaRepository = facturaRepository;
    }
    async getProductoXLineaXMarca(input) {
        try {
            console.log('Repository - Input:', input);
            const productos = await this.productoRepository.createQueryBuilder('producto')
                .leftJoinAndSelect('producto.marca', 'marca')
                .leftJoinAndSelect('producto.linea', 'linea')
                .where('(LOWER(producto.descripcion) LIKE LOWER(:input) OR LOWER(marca.descripcion) LIKE LOWER(:input) OR LOWER(linea.descripcion) LIKE LOWER(:input)', { input: `%${input}%` })
                .getMany();
            console.log('Repository - Productos encontrados:', productos.length);
            return productos;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getFacturaXFecha(fecha) {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .where('DATE(factura.fechaHora) = :fecha', { fecha })
                .getMany();
            return facturas;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getFacturaXTipo(tipo) {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.tipoFactura', 'tipoFactura')
                .where('tipoFactura.tipoFactura = :tipo', { tipo })
                .getMany();
            return facturas;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getFacturaXMetodoPago(metodoPago) {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.metodoPago', 'metodoPago')
                .where('metodoPago.metodoPago = :metodoPago', { metodoPago })
                .getMany();
            return facturas;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getFacturaXCliente(idCliente) {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.venta', 'venta')
                .leftJoinAndSelect('venta.cliente', 'cliente')
                .where('cliente.idCliente = :idCliente', { idCliente })
                .getMany();
            return facturas;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getFacturaXPrecio(rangoMin, rangoMax) {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .where('factura.total BETWEEN :rangoMin AND :rangoMax', { rangoMin, rangoMax })
                .getMany();
            return facturas;
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
    async getMetodosPagoDeFacturas() {
        try {
            const metodosPago = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.metodoPago', 'metodoPago')
                .select('metodoPago.metodoPago', 'metodoPago')
                .addSelect('COUNT(*)', 'cantidad')
                .groupBy('metodoPago.metodoPago')
                .getRawMany();
            return metodosPago.map(item => ({
                metodoPago: item.metodoPago,
                cantidad: parseInt(item.cantidad)
            }));
        }
        catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }
};
exports.SearchRepository = SearchRepository;
exports.SearchRepository = SearchRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(producto_entity_1.ProductoEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(factura_entity_1.FacturaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SearchRepository);
//# sourceMappingURL=search.repository.js.map