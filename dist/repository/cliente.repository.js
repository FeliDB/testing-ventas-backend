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
exports.ClienteRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const cliente_entity_1 = require("../entity/cliente.entity");
let ClienteRepository = class ClienteRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getClienteRepository() {
        return await this.repository.find();
    }
    async getClienteIDRespository(id) {
        return await this.repository.findOneBy({ idCliente: id });
    }
    async getClienteDniRepository(dni) {
        return await this.repository.findOneBy({ dni: dni });
    }
    async postClienteRespository(createClienteDto) {
        const buscarCliente = await this.repository.findOneBy({ dni: createClienteDto.dni });
        if (buscarCliente) {
            throw new common_1.ConflictException('El cliente ya existe');
        }
        const cliente = this.repository.create({ nombre: createClienteDto.nombre, apellido: createClienteDto.apellido, dni: createClienteDto.dni, email: createClienteDto.email, telefono: createClienteDto.telefono });
        return await this.repository.save(cliente);
    }
    async putClienteRepository(idCliente, editClienteDto) {
        const buscarCliente = await this.repository.findOneBy({ idCliente: idCliente });
        if (!buscarCliente) {
            throw new common_1.NotFoundException('Cliente no encontrado');
        }
        buscarCliente.nombre = editClienteDto.nombre ?? buscarCliente.nombre;
        buscarCliente.apellido = editClienteDto.apellido ?? buscarCliente.apellido;
        buscarCliente.dni = editClienteDto.dni ?? buscarCliente.dni;
        buscarCliente.email = editClienteDto.email ?? buscarCliente.email;
        buscarCliente.telefono = editClienteDto.telefono ?? buscarCliente.telefono;
        return await this.repository.save(buscarCliente);
    }
    async deleteClienteRepository(id) {
        const buscarCliente = await this.repository.findOneBy({ idCliente: id });
        if (!buscarCliente) {
            throw new common_1.NotFoundException('Cliente no encontrado');
        }
        await this.repository.remove(buscarCliente);
    }
};
exports.ClienteRepository = ClienteRepository;
exports.ClienteRepository = ClienteRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cliente_entity_1.ClienteEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClienteRepository);
//# sourceMappingURL=cliente.repository.js.map