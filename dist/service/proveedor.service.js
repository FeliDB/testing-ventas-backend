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
exports.ProveedorService = void 0;
const common_1 = require("@nestjs/common");
const proveedor_repository_1 = require("../repository/proveedor.repository");
let ProveedorService = class ProveedorService {
    proveedorRepository;
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    async getProveedorService() {
        try {
            return await this.proveedorRepository.getProveedorRepository();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de proveedores.');
        }
    }
    async getProveedorByIdService(id) {
        try {
            const proveedor = await this.proveedorRepository.getProveedorIDRespository(id);
            if (!proveedor) {
                throw new common_1.NotFoundException(`Proveedor con ID ${id} no encontrado.`);
            }
            return proveedor;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener el proveedor con ID ${id}.`);
        }
    }
    async postProveedorService(createProveedorDto) {
        try {
            return await this.proveedorRepository.postProveedorRespository(createProveedorDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear el proveedor.');
        }
    }
    async putProveedorService(idProveedor, editProveedorDto) {
        try {
            return await this.proveedorRepository.putProveedorRepository(idProveedor, editProveedorDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar el proveedor con ID ${idProveedor}.`);
        }
    }
    async deleteProveedorService(id) {
        try {
            return await this.proveedorRepository.deleteProveedorRepository(id);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar el proveedor con ID ${id}.`);
        }
    }
};
exports.ProveedorService = ProveedorService;
exports.ProveedorService = ProveedorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [proveedor_repository_1.ProveedorRepository])
], ProveedorService);
//# sourceMappingURL=proveedor.service.js.map