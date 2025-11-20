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
exports.MetodoPagoRepository = void 0;
const typeorm_1 = require("typeorm");
const metodoPago_entity_1 = require("../entity/metodoPago.entity");
const common_1 = require("@nestjs/common");
let MetodoPagoRepository = class MetodoPagoRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(metodoPago_entity_1.MetodoPagoEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getMetodosPago() {
        return await this.find();
    }
    async getMetodoPagoById(id) {
        return await this.findOneBy({ idMetodoPago: id });
    }
    async createMetodoPago(createMetodoPagoDto) {
        const metodoPago = this.create({
            metodoPago: createMetodoPagoDto.nombre
        });
        return await this.save(metodoPago);
    }
    async editMetodoPago(id, metodoPagoEditDto) {
        const metodoPago = await this.findOneBy({ idMetodoPago: id });
        if (!metodoPago) {
            throw new Error('Método de pago no encontrado');
        }
        if (metodoPagoEditDto.nombre) {
            metodoPago.metodoPago = metodoPagoEditDto.nombre;
        }
        return await this.save(metodoPago);
    }
    async deleteMetodoPago(id) {
        const metodoPago = await this.findOneBy({ idMetodoPago: id });
        if (!metodoPago) {
            return { message: 'Método de pago no encontrado', status: 404 };
        }
        await this.softDelete(id);
        return { message: 'Método de pago eliminado correctamente', status: 200 };
    }
};
exports.MetodoPagoRepository = MetodoPagoRepository;
exports.MetodoPagoRepository = MetodoPagoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], MetodoPagoRepository);
//# sourceMappingURL=metodo-pago.repository.js.map