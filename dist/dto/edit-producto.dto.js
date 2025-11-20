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
exports.EditProductoDto = void 0;
const class_validator_1 = require("class-validator");
class EditProductoDto {
    idProducto;
    descripcionProducto;
    precioUnitario = 0;
    stock = 0;
    idMarca;
    idProveedor;
    idLinea;
}
exports.EditProductoDto = EditProductoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "La descripcion debe ser una cadena de texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El descripcion no puede estar vacio" }),
    (0, class_validator_1.MaxLength)(15, { message: "El descripcion no puede tener mas de 15 caracteres" }),
    __metadata("design:type", String)
], EditProductoDto.prototype, "descripcionProducto", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: "El precioUnitario minimo de la cantidad es 0" }),
    __metadata("design:type", Number)
], EditProductoDto.prototype, "precioUnitario", void 0);
__decorate([
    (0, class_validator_1.Min)(0, { message: "El stock minimo de la cantidad es 0" }),
    __metadata("design:type", Number)
], EditProductoDto.prototype, "stock", void 0);
//# sourceMappingURL=edit-producto.dto.js.map