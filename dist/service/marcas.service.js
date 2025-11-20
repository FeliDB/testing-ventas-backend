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
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const marcas_repository_1 = require("../repository/marcas.repository");
let MarcasService = class MarcasService {
    marcasRespository;
    constructor(marcasRespository) {
        this.marcasRespository = marcasRespository;
    }
    async getMarcasService() {
        try {
            return await this.marcasRespository.getMarcaRepository();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de marcas.');
        }
    }
    async getMarcaByIdService(id) {
        try {
            const marca = await this.marcasRespository.getMarcaIDRespository(id);
            if (!marca) {
                throw new common_1.NotFoundException(`Marca con ID ${id} no encontrada.`);
            }
            return marca;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener la marca con ID ${id}.`);
        }
    }
    async postMarcasService(createMarcaDto) {
        try {
            return await this.marcasRespository.postMarcaRespository(createMarcaDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear la marca.');
        }
    }
    async putMarcasService(idMarca, editMarcaDto) {
        try {
            return await this.marcasRespository.putMarcaRepository(idMarca, editMarcaDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar la marca con ID ${idMarca}.`);
        }
    }
    async deleteMarcasService(id) {
        try {
            return await this.marcasRespository.deleteMarcaRepository(id);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar la marca con ID ${id}.`);
        }
    }
};
exports.MarcasService = MarcasService;
exports.MarcasService = MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [marcas_repository_1.MarcasRepository])
], MarcasService);
//# sourceMappingURL=marcas.service.js.map