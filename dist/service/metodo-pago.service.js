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
exports.MetodoPagoService = void 0;
const common_1 = require("@nestjs/common");
const metodo_pago_repository_1 = require("../repository/metodo-pago.repository");
let MetodoPagoService = class MetodoPagoService {
    metodoPagoRepository;
    constructor(metodoPagoRepository) {
        this.metodoPagoRepository = metodoPagoRepository;
    }
    async getMetodosPago() {
        try {
            return await this.metodoPagoRepository.getMetodosPago();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de métodos de pago.');
        }
    }
    async getMetodoPago(id) {
        try {
            const metodoPago = await this.metodoPagoRepository.getMetodoPagoById(id);
            if (!metodoPago) {
                throw new common_1.NotFoundException(`Método de pago con ID ${id} no encontrado.`);
            }
            return metodoPago;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener el método de pago con ID ${id}.`);
        }
    }
    async createMetodoPago(data) {
        try {
            return await this.metodoPagoRepository.createMetodoPago(data);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear el método de pago.');
        }
    }
    async updateMetodoPago(data, id) {
        try {
            return await this.metodoPagoRepository.editMetodoPago(id, data);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar el método de pago con ID ${id}.`);
        }
    }
    async deleteMetodoPago(id) {
        try {
            await this.metodoPagoRepository.deleteMetodoPago(id);
            return { message: 'Método de pago eliminado correctamente' };
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar el método de pago con ID ${id}.`);
        }
    }
};
exports.MetodoPagoService = MetodoPagoService;
exports.MetodoPagoService = MetodoPagoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [metodo_pago_repository_1.MetodoPagoRepository])
], MetodoPagoService);
//# sourceMappingURL=metodo-pago.service.js.map