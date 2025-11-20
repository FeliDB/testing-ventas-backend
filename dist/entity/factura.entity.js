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
exports.FacturaEntity = void 0;
const typeorm_1 = require("typeorm");
const tipoFactura_entity_1 = require("./tipoFactura.entity");
const metodoPago_entity_1 = require("./metodoPago.entity");
const venta_entity_1 = require("./venta.entity");
let FacturaEntity = class FacturaEntity {
    idFactura;
    total;
    impuesto;
    fechaHora;
    tipoFactura;
    metodoPago;
    venta;
};
exports.FacturaEntity = FacturaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "idFactura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FacturaEntity.prototype, "impuesto", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], FacturaEntity.prototype, "fechaHora", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipoFactura_entity_1.TipoFacturaEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tipoFactura_entity_1.TipoFacturaEntity)
], FacturaEntity.prototype, "tipoFactura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => metodoPago_entity_1.MetodoPagoEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", metodoPago_entity_1.MetodoPagoEntity)
], FacturaEntity.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => venta_entity_1.VentaEntity),
    (0, typeorm_1.JoinColumn)({ name: 'idVenta' }),
    __metadata("design:type", venta_entity_1.VentaEntity)
], FacturaEntity.prototype, "venta", void 0);
exports.FacturaEntity = FacturaEntity = __decorate([
    (0, typeorm_1.Entity)()
], FacturaEntity);
//# sourceMappingURL=factura.entity.js.map