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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const cliente_repository_1 = require("../repository/cliente.repository");
let ClienteService = class ClienteService {
    clienteRepository;
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async getClienteService() {
        try {
            return await this.clienteRepository.getClienteRepository();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de clientes.');
        }
    }
    async getClienteByIdService(id) {
        try {
            const cliente = await this.clienteRepository.getClienteIDRespository(id);
            if (!cliente) {
                throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado.`);
            }
            return cliente;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener el cliente con ID ${id}.`);
        }
    }
    async getClienteByDniService(dni) {
        try {
            const cliente = await this.clienteRepository.getClienteDniRepository(dni);
            if (!cliente) {
                throw new common_1.NotFoundException(`Cliente con DNI ${dni} no encontrado.`);
            }
            return cliente;
        }
        catch (error) {
            console.error(error);
        }
    }
    async postClienteService(createClienteDto) {
        try {
            return await this.clienteRepository.postClienteRespository(createClienteDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear el cliente.');
        }
    }
    async putClienteService(idCliente, editClienteDto) {
        try {
            return await this.clienteRepository.putClienteRepository(idCliente, editClienteDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar el cliente con ID ${idCliente}.`);
        }
    }
    async deleteClienteService(id) {
        try {
            return await this.clienteRepository.deleteClienteRepository(id);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar el cliente con ID ${id}.`);
        }
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_repository_1.ClienteRepository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map