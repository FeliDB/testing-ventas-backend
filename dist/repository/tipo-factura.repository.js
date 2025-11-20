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
exports.TipoFacturaRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const tipoFactura_entity_1 = require("../entity/tipoFactura.entity");
let TipoFacturaRepository = class TipoFacturaRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(tipoFactura_entity_1.TipoFacturaEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getTiposFactura() {
        return await this.find();
    }
    async getTipoFacturaById(id) {
        return await this.findOneBy({ idTipoFactura: id });
    }
    async createTipoFactura(createTipoFacturaDto) {
        const tipoFactura = this.create({
            tipoFactura: createTipoFacturaDto.nombre
        });
        return await this.save(tipoFactura);
    }
    async editTipoFactura(id, tipoFacturaEditDto) {
        const tipoFactura = await this.findOneBy({ idTipoFactura: id });
        if (!tipoFactura) {
            throw new Error('Tipo de Factura no encontrado');
        }
        if (tipoFacturaEditDto.nombre) {
            tipoFactura.tipoFactura = tipoFacturaEditDto.nombre;
        }
        return await this.save(tipoFactura);
    }
    async deleteTipoFactura(id) {
        const tipoFactura = await this.findOneBy({ idTipoFactura: id });
        if (!tipoFactura) {
            return { message: 'Tipo de Factura no encontrado', status: 404 };
        }
        await this.softDelete(id);
        return { message: 'Tipo de Factura eliminada correctamente', status: 200 };
    }
};
exports.TipoFacturaRepository = TipoFacturaRepository;
exports.TipoFacturaRepository = TipoFacturaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TipoFacturaRepository);
//# sourceMappingURL=tipo-factura.repository.js.map