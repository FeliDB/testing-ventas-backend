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
exports.MarcasController = void 0;
const common_1 = require("@nestjs/common");
const marcas_service_1 = require("../service/marcas.service");
const create_marca_dto_1 = require("../dto/create-marca.dto");
const edit_marca_dto_1 = require("../dto/edit.marca.dto");
const auth_decorator_1 = require("../decorators/auth.decorator");
let MarcasController = class MarcasController {
    marcaService;
    constructor(marcaService) {
        this.marcaService = marcaService;
    }
    async getMarcas() {
        try {
            return await this.marcaService.getMarcasService();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener marcas', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMarcaById(idMarca) {
        try {
            return await this.marcaService.getMarcaByIdService(idMarca);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener marca por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postMarcas(data) {
        try {
            return await this.marcaService.postMarcasService(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear marca', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async putMarcas(idMarca, data) {
        try {
            return await this.marcaService.putMarcasService(idMarca, data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar marca', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteMarcas(idMarca) {
        try {
            return await this.marcaService.deleteMarcasService(idMarca);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar marca', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MarcasController = MarcasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarcasController.prototype, "getMarcas", null);
__decorate([
    (0, auth_decorator_1.Auth)('gerente', 'dueño'),
    (0, common_1.Get)(':idMarca'),
    __param(0, (0, common_1.Param)('idMarca')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarcasController.prototype, "getMarcaById", null);
__decorate([
    (0, common_1.Post)('createMarca'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_marca_dto_1.CreateMarcaDto]),
    __metadata("design:returntype", Promise)
], MarcasController.prototype, "postMarcas", null);
__decorate([
    (0, common_1.Put)('modificarMarca/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_marca_dto_1.EditMarcaDto]),
    __metadata("design:returntype", Promise)
], MarcasController.prototype, "putMarcas", null);
__decorate([
    (0, common_1.Delete)('eliminarMarca/:idMarca'),
    __param(0, (0, common_1.Param)('idMarca')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MarcasController.prototype, "deleteMarcas", null);
exports.MarcasController = MarcasController = __decorate([
    (0, common_1.Controller)('marcas'),
    __metadata("design:paramtypes", [marcas_service_1.MarcasService])
], MarcasController);
//# sourceMappingURL=marcas.controller.js.map