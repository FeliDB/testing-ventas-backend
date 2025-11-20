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
exports.LineaRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const linea_entity_1 = require("../entity/linea.entity");
let LineaRepository = class LineaRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getLineaRepository() {
        return await this.repository.find();
    }
    async getLineaIDRespository(id) {
        return await this.repository.findOneBy({ idLinea: id });
    }
    async postLineaRespository(createLineaDto) {
        const buscarLinea = await this.repository.findOne({
            where: {
                descripcion: createLineaDto.descripcion
            }
        });
        if (buscarLinea && buscarLinea.descripcion !== null) {
            throw new common_1.ConflictException('La Linea ya existe');
        }
        const Linea = this.repository.create({ descripcion: createLineaDto.descripcion });
        return await this.repository.save(Linea);
    }
    async putLineaRepository(idLinea, editLineaDto) {
        const buscarLinea = await this.repository.findOneBy({ idLinea: idLinea });
        if (!buscarLinea) {
            throw new common_1.NotFoundException('Linea no encontrada');
        }
        buscarLinea.descripcion = editLineaDto.descripcion ?? buscarLinea.descripcion;
        return await this.repository.save(buscarLinea);
    }
    async deleteLineaRepository(id) {
        const buscarLinea = await this.repository.findOneBy({ idLinea: id });
        if (!buscarLinea) {
            throw new common_1.NotFoundException('Linea no encontrada');
        }
        await this.repository.remove(buscarLinea);
    }
};
exports.LineaRepository = LineaRepository;
exports.LineaRepository = LineaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(linea_entity_1.LineaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LineaRepository);
//# sourceMappingURL=linea.repository.js.map