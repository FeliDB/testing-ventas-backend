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
exports.VentaEntity = void 0;
const typeorm_1 = require("typeorm");
const detalleVenta_entity_1 = require("./detalleVenta.entity");
const factura_entity_1 = require("./factura.entity");
const cliente_entity_1 = require("./cliente.entity");
let VentaEntity = class VentaEntity {
    idVenta;
    fechaHora;
    detalleVenta;
    factura;
    cliente;
    total;
};
exports.VentaEntity = VentaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VentaEntity.prototype, "idVenta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], VentaEntity.prototype, "fechaHora", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detalleVenta_entity_1.DetalleVentaEntity, detalleVenta => detalleVenta.venta),
    __metadata("design:type", Array)
], VentaEntity.prototype, "detalleVenta", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => factura_entity_1.FacturaEntity),
    __metadata("design:type", factura_entity_1.FacturaEntity)
], VentaEntity.prototype, "factura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.ClienteEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cliente_entity_1.ClienteEntity)
], VentaEntity.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VentaEntity.prototype, "total", void 0);
exports.VentaEntity = VentaEntity = __decorate([
    (0, typeorm_1.Entity)()
], VentaEntity);
//# sourceMappingURL=venta.entity.js.map