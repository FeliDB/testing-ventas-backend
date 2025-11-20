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
exports.ProveedorRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const proveedor_entity_1 = require("../entity/proveedor.entity");
let ProveedorRepository = class ProveedorRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getProveedorRepository() {
        return await this.repository.find();
    }
    async getProveedorIDRespository(id) {
        return await this.repository.findOneBy({ idProveedor: id });
    }
    async postProveedorRespository(createProveedorDto) {
        const Proveedor = this.repository.create({ nombre: createProveedorDto.nombre });
        const codigo = 'PROV-' + Math.random().toString(36).substring(1, 4).toUpperCase();
        const existeCodigo = await this.repository.findOneBy({ codigoProveedor: codigo });
        if (existeCodigo) {
            throw new common_1.ConflictException('El código de proveedor ya existe');
        }
        Proveedor.codigoProveedor = codigo;
        return await this.repository.save(Proveedor);
    }
    async putProveedorRepository(idProveedor, editProveedorDto) {
        const buscarProveedor = await this.repository.findOneBy({ idProveedor: idProveedor });
        if (!buscarProveedor) {
            throw new common_1.NotFoundException('Proveedor no encontrado');
        }
        buscarProveedor.nombre = editProveedorDto.nombre ?? buscarProveedor.nombre;
        return await this.repository.save(buscarProveedor);
    }
    async deleteProveedorRepository(id) {
        const buscarProveedor = await this.repository.findOneBy({ idProveedor: id });
        if (!buscarProveedor) {
            throw new common_1.NotFoundException('Proveedor no encontrado');
        }
        await this.repository.remove(buscarProveedor);
    }
};
exports.ProveedorRepository = ProveedorRepository;
exports.ProveedorRepository = ProveedorRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(proveedor_entity_1.ProveedorEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProveedorRepository);
//# sourceMappingURL=proveedor.repository.js.map