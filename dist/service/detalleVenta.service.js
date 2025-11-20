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
exports.DetalleVentaService = void 0;
const common_1 = require("@nestjs/common");
const detalleVenta_repository_1 = require("../repository/detalleVenta.repository");
let DetalleVentaService = class DetalleVentaService {
    detalleVentaRepository;
    constructor(detalleVentaRepository) {
        this.detalleVentaRepository = detalleVentaRepository;
    }
    async getDetalleVentaService() {
        try {
            return await this.detalleVentaRepository.getDetalleVentaRepository();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de detalle.');
        }
    }
    async getDetalleVentaByIdService(id) {
        try {
            const detalleVenta = await this.detalleVentaRepository.getDetalleVentaIDRespository(id);
            if (!detalleVenta) {
                throw new common_1.NotFoundException(`detalle con ID ${id} no encontrada.`);
            }
            return detalleVenta;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener la detalle con ID ${id}.`);
        }
    }
    async getDetalleConIDVentaService(idVenta) {
        try {
            return await this.detalleVentaRepository.getDetalleConIDVenta(idVenta);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al obtener la detalle con ID ${idVenta}.`);
        }
    }
    async postDetalleVentaService(createDetalleVentaDto) {
    }
};
exports.DetalleVentaService = DetalleVentaService;
exports.DetalleVentaService = DetalleVentaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [detalleVenta_repository_1.DetalleVentaRepository])
], DetalleVentaService);
//# sourceMappingURL=detalleVenta.service.js.map