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
exports.FacturaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const factura_entity_1 = require("../entity/factura.entity");
const typeorm_2 = require("typeorm");
let FacturaRepository = class FacturaRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getFacturas() {
        return this.repository.find({
            relations: ['tipoFactura', 'metodoPago', 'venta']
        });
    }
    async getFacturaByVentaId(idVenta) {
        return await this.repository.findOne({
            where: { venta: { idVenta } },
            relations: ['venta', 'venta.cliente', 'venta.detalleVenta', 'venta.detalleVenta.producto', 'tipoFactura', 'metodoPago']
        });
    }
    async createFactura(idVenta, factura) {
        try {
            const nuevaFactura = this.repository.create({
                total: factura.total,
                tipoFactura: { idTipoFactura: factura.idTipoFactura },
                metodoPago: { idMetodoPago: factura.idMetodoPago },
                impuesto: factura.impuesto,
                venta: { idVenta }
            });
            const facturaGuardada = await this.repository.save(nuevaFactura);
            return facturaGuardada;
        }
        catch (error) {
            console.error('Error al crear factura:', error);
            throw error;
        }
    }
};
exports.FacturaRepository = FacturaRepository;
exports.FacturaRepository = FacturaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(factura_entity_1.FacturaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FacturaRepository);
//# sourceMappingURL=factura.repository.js.map