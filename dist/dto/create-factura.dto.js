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
exports.CreateFacturaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateFacturaDto {
    total;
    idTipoFactura;
    idMetodoPago;
    impuesto;
}
exports.CreateFacturaDto = CreateFacturaDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El total debe ser un número" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El total no puede estar vacío" }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El idTipoFactura debe ser un número" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El idTipoFactura no puede estar vacío" }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "idTipoFactura", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El idMetodoPago debe ser un número" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El idMetodoPago no puede estar vacío" }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "idMetodoPago", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "El impuesto debe ser un número" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El impuesto no puede estar vacío" }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "impuesto", void 0);
//# sourceMappingURL=create-factura.dto.js.map