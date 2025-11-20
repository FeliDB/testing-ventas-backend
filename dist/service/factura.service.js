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
exports.FacturaService = void 0;
const common_1 = require("@nestjs/common");
const factura_repository_1 = require("../repository/factura.repository");
let FacturaService = class FacturaService {
    facturaRepository;
    constructor(facturaRepository) {
        this.facturaRepository = facturaRepository;
    }
    async getFacturas() {
        return await this.facturaRepository.getFacturas();
    }
    async getFacturaPorId(idVenta) {
        return await this.facturaRepository.getFacturaByVentaId(idVenta);
    }
    async crearFactura(createFacturaDto) {
        try {
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear la factura.');
        }
    }
};
exports.FacturaService = FacturaService;
exports.FacturaService = FacturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [factura_repository_1.FacturaRepository])
], FacturaService);
//# sourceMappingURL=factura.service.js.map