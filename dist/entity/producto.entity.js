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
exports.ProductoEntity = void 0;
const typeorm_1 = require("typeorm");
const marca_entity_1 = require("./marca.entity");
const linea_entity_1 = require("./linea.entity");
const ProductoProveedor_entity_1 = require("./ProductoProveedor.entity");
let ProductoEntity = class ProductoEntity {
    idProducto;
    descripcion;
    precioUnitario;
    stock;
    marca;
    proveedorProductos;
    linea;
};
exports.ProductoEntity = ProductoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "precioUnitario", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => marca_entity_1.MarcaEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", marca_entity_1.MarcaEntity)
], ProductoEntity.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductoProveedor_entity_1.ProveedorProducto, pp => pp.producto, { cascade: false }),
    __metadata("design:type", Array)
], ProductoEntity.prototype, "proveedorProductos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => linea_entity_1.LineaEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", linea_entity_1.LineaEntity)
], ProductoEntity.prototype, "linea", void 0);
exports.ProductoEntity = ProductoEntity = __decorate([
    (0, typeorm_1.Entity)()
], ProductoEntity);
//# sourceMappingURL=producto.entity.js.map