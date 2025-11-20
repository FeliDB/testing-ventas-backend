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
exports.LineaService = void 0;
const common_1 = require("@nestjs/common");
const linea_repository_1 = require("../repository/linea.repository");
let LineaService = class LineaService {
    lineaRespository;
    constructor(lineaRespository) {
        this.lineaRespository = lineaRespository;
    }
    async getLineasService() {
        try {
            return await this.lineaRespository.getLineaRepository();
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la lista de lineas.');
        }
    }
    async getLineaByIdService(id) {
        try {
            const linea = await this.lineaRespository.getLineaIDRespository(id);
            if (!linea) {
                throw new common_1.NotFoundException(`lineas con ID ${id} no encontrada.`);
            }
            return linea;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener la lineas con ID ${id}.`);
        }
    }
    async postLineasService(createlineasDto) {
        try {
            return await this.lineaRespository.postLineaRespository(createlineasDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al crear la lineas.');
        }
    }
    async putLineasService(idlineas, editlineasDto) {
        try {
            return await this.lineaRespository.putLineaRepository(idlineas, editlineasDto);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al actualizar la lineas con ID ${idlineas}.`);
        }
    }
    async deleteLineasService(id) {
        try {
            return await this.lineaRespository.deleteLineaRepository(id);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException(`Error al eliminar la lineas con ID ${id}.`);
        }
    }
};
exports.LineaService = LineaService;
exports.LineaService = LineaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [linea_repository_1.LineaRepository])
], LineaService);
//# sourceMappingURL=linea.service.js.map