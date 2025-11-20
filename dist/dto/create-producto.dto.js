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
exports.CreateProductoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProductoDto {
    descripcion;
    cantidad = 0;
    precioUnitario = 0;
    idMarca;
    idProveedor;
    idLinea;
}
exports.CreateProductoDto = CreateProductoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "La descripcion debe ser una cadena de texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El descripcion no puede estar vacio" }),
    (0, class_validator_1.MaxLength)(50, { message: "El descripcion no puede tener mas de 50 caracteres" }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "La cantidad debe ser un numero" }),
    (0, class_validator_1.Min)(0, { message: "El valor minimo de la cantidad es 0" }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "cantidad", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El precio unitario debe ser un numero" }),
    (0, class_validator_1.Min)(0, { message: "El precioUnitario minimo es 0" }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precioUnitario", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El id de marca debe ser un numero" }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "idMarca", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true, message: "Cada id de proveedor debe ser un numero" }),
    __metadata("design:type", Array)
], CreateProductoDto.prototype, "idProveedor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El id de linea debe ser un numero" }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "idLinea", void 0);
//# sourceMappingURL=create-producto.dto.js.map