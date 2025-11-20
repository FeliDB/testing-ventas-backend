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
exports.FacturaController = void 0;
const common_1 = require("@nestjs/common");
const create_factura_dto_1 = require("../dto/create-factura.dto");
const factura_service_1 = require("../service/factura.service");
let FacturaController = class FacturaController {
    facturaService;
    constructor(facturaService) {
        this.facturaService = facturaService;
    }
    async getFacturas() {
        return await this.facturaService.getFacturas();
    }
    async getFacturasPorId(idVenta) {
        return await this.facturaService.getFacturaPorId(idVenta);
    }
    async crearFactura(createFacturaDTO) {
        return await this.facturaService.crearFactura(createFacturaDTO);
    }
};
exports.FacturaController = FacturaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "getFacturas", null);
__decorate([
    (0, common_1.Get)(':idVenta'),
    __param(0, (0, common_1.Param)('idVenta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "getFacturasPorId", null);
__decorate([
    (0, common_1.Post)('crear-factura'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factura_dto_1.CreateFacturaDto]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "crearFactura", null);
exports.FacturaController = FacturaController = __decorate([
    (0, common_1.Controller)('factura'),
    __metadata("design:paramtypes", [factura_service_1.FacturaService])
], FacturaController);
//# sourceMappingURL=factura.controller.js.map