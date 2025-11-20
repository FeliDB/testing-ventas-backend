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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const edit_cliente_dto_1 = require("../dto/edit-cliente.dto");
const cliente_service_1 = require("../service/cliente.service");
const create_cliente_dto_1 = require("../dto/create-cliente.dto");
let ClienteController = class ClienteController {
    clienteService;
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async getCliente() {
        try {
            return await this.clienteService.getClienteService();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener clientes', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getClienteById(idCliente) {
        try {
            return await this.clienteService.getClienteByIdService(idCliente);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener cliente por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getClienteByDni(dni) {
        try {
            return await this.clienteService.getClienteByDniService(dni);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener cliente por DNI', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postCliente(data) {
        try {
            return await this.clienteService.postClienteService(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear cliente', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async putCliente(idCliente, data) {
        try {
            return await this.clienteService.putClienteService(idCliente, data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar cliente', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCliente(idCliente) {
        try {
            return await this.clienteService.deleteClienteService(idCliente);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar cliente', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getCliente", null);
__decorate([
    (0, common_1.Get)(':idCliente'),
    __param(0, (0, common_1.Param)('idCliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getClienteById", null);
__decorate([
    (0, common_1.Get)('searchByDni/:dni'),
    __param(0, (0, common_1.Param)('dni')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getClienteByDni", null);
__decorate([
    (0, common_1.Post)('createCliente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "postCliente", null);
__decorate([
    (0, common_1.Put)('modificarCliente/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_cliente_dto_1.EditClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "putCliente", null);
__decorate([
    (0, common_1.Delete)('eliminarCliente/:idCliente'),
    __param(0, (0, common_1.Param)('idCliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "deleteCliente", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map