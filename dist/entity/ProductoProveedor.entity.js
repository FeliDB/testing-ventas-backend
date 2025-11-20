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
exports.ProveedorProducto = void 0;
const typeorm_1 = require("typeorm");
const proveedor_entity_1 = require("./proveedor.entity");
const producto_entity_1 = require("./producto.entity");
let ProveedorProducto = class ProveedorProducto {
    id;
    proveedor;
    producto;
    codigoProveedor;
};
exports.ProveedorProducto = ProveedorProducto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProveedorProducto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proveedor_entity_1.ProveedorEntity, proveedor => proveedor.proveedorProductos, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_proveedor' }),
    __metadata("design:type", proveedor_entity_1.ProveedorEntity)
], ProveedorProducto.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.ProductoEntity, producto => producto.proveedorProductos, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_producto' }),
    __metadata("design:type", producto_entity_1.ProductoEntity)
], ProveedorProducto.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_proveedor', length: 50, nullable: true }),
    __metadata("design:type", String)
], ProveedorProducto.prototype, "codigoProveedor", void 0);
exports.ProveedorProducto = ProveedorProducto = __decorate([
    (0, typeorm_1.Entity)('proveedor_producto')
], ProveedorProducto);
//# sourceMappingURL=ProductoProveedor.entity.js.map