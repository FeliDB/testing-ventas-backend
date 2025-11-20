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
exports.TipoFacturaService = void 0;
const common_1 = require("@nestjs/common");
const tipo_factura_repository_1 = require("../repository/tipo-factura.repository");
let TipoFacturaService = class TipoFacturaService {
    tipoFacturaRepository;
    constructor(tipoFacturaRepository) {
        this.tipoFacturaRepository = tipoFacturaRepository;
    }
    async getTipoFactura() {
        try {
            return await this.tipoFacturaRepository.getTiposFactura();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de tipos de factura.');
        }
    }
    async getTipoFacturaByID(id) {
        try {
            const tipoFactura = await this.tipoFacturaRepository.getTipoFacturaById(id);
            if (!tipoFactura) {
                throw new common_1.NotFoundException(`Tipo de factura con ID ${id} no encontrado.`);
            }
            return tipoFactura;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener el tipo de factura con ID ${id}.`);
        }
    }
    async createTipoFactura(data) {
        try {
            return await this.tipoFacturaRepository.createTipoFactura(data);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear el tipo de factura.');
        }
    }
    async updateTipoFactura(data, id) {
        try {
            return await this.tipoFacturaRepository.editTipoFactura(id, data);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar el tipo de factura con ID ${id}.`);
        }
    }
    async deleteTipoFactura(id) {
        try {
            await this.tipoFacturaRepository.deleteTipoFactura(id);
            return { message: 'Tipo de Factura eliminado correctamente' };
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar el tipo de factura con ID ${id}.`);
        }
    }
};
exports.TipoFacturaService = TipoFacturaService;
exports.TipoFacturaService = TipoFacturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tipo_factura_repository_1.TipoFacturaRepository])
], TipoFacturaService);
//# sourceMappingURL=tipo-factura.service.js.map