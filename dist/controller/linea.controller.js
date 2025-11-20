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
exports.LineasController = void 0;
const common_1 = require("@nestjs/common");
const linea_service_1 = require("../service/linea.service");
const create_linea_dto_1 = require("../dto/create-linea.dto");
const edit_linea_dto_1 = require("../dto/edit-linea.dto");
let LineasController = class LineasController {
    Lineaservice;
    constructor(Lineaservice) {
        this.Lineaservice = Lineaservice;
    }
    async getLineas() {
        try {
            return await this.Lineaservice.getLineasService();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener Lineas', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMarcaById(idLinea) {
        try {
            return await this.Lineaservice.getLineaByIdService(idLinea);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener linea por ID', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async postLineas(data) {
        try {
            return await this.Lineaservice.postLineasService(data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear linea', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async putLineas(idLinea, data) {
        try {
            return await this.Lineaservice.putLineasService(idLinea, data);
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar linea', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteLineas(idMarca) {
        try {
            return await this.Lineaservice.deleteLineasService(idMarca);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar linea', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.LineasController = LineasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "getLineas", null);
__decorate([
    (0, common_1.Get)(':idLinea'),
    __param(0, (0, common_1.Param)('idLinea')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "getMarcaById", null);
__decorate([
    (0, common_1.Post)('createLinea'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linea_dto_1.CreatelineasDto]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "postLineas", null);
__decorate([
    (0, common_1.Put)('modificarLinea/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_linea_dto_1.EditLineaDto]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "putLineas", null);
__decorate([
    (0, common_1.Delete)('eliminarMarca/:idMarca'),
    __param(0, (0, common_1.Param)('idMarca')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "deleteLineas", null);
exports.LineasController = LineasController = __decorate([
    (0, common_1.Controller)('lineas'),
    __metadata("design:paramtypes", [linea_service_1.LineaService])
], LineasController);
//# sourceMappingURL=linea.controller.js.map