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
exports.MarcasRepository = void 0;
const typeorm_1 = require("typeorm");
const marca_entity_1 = require("../entity/marca.entity");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let MarcasRepository = class MarcasRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getMarcaRepository() {
        return await this.repository.find();
    }
    async getMarcaIDRespository(id) {
        return await this.repository.findOneBy({ idMarca: id });
    }
    async postMarcaRespository(createMarcaDto) {
        const buscarMarca = await this.repository.findOne({
            where: {
                descripcion: createMarcaDto.descripcion
            }
        });
        if (buscarMarca && buscarMarca.descripcion !== null) {
            throw new common_1.ConflictException('La marca ya existe');
        }
        const marca = this.repository.create({ descripcion: createMarcaDto.descripcion });
        return await this.repository.save(marca);
    }
    async putMarcaRepository(idMarca, editMarcaDto) {
        const buscarMarca = await this.repository.findOneBy({ idMarca: idMarca });
        if (!buscarMarca) {
            throw new common_1.NotFoundException('Marca no encontrada');
        }
        buscarMarca.descripcion = editMarcaDto.descripcion ?? buscarMarca.descripcion;
        return await this.repository.save(buscarMarca);
    }
    async deleteMarcaRepository(id) {
        const buscarMarca = await this.repository.findOneBy({ idMarca: id });
        if (!buscarMarca) {
            throw new common_1.NotFoundException('Marca no encontrada');
        }
        await this.repository.remove(buscarMarca);
    }
};
exports.MarcasRepository = MarcasRepository;
exports.MarcasRepository = MarcasRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(marca_entity_1.MarcaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MarcasRepository);
//# sourceMappingURL=marcas.repository.js.map