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
exports.EditClienteDto = void 0;
const class_validator_1 = require("class-validator");
class EditClienteDto {
    idCliente;
    nombre;
    apellido;
    dni;
    email;
    telefono;
}
exports.EditClienteDto = EditClienteDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre debe ser una cadena de texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre no puede estar vacío" }),
    (0, class_validator_1.MaxLength)(30, { message: "El nombre no puede tener más de 30 caracteres" }),
    (0, class_validator_1.MinLength)(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    __metadata("design:type", String)
], EditClienteDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El apellido debe ser una cadena de texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El apellido no puede estar vacío" }),
    (0, class_validator_1.MaxLength)(30, { message: "El apellido no puede tener más de 30 caracteres" }),
    (0, class_validator_1.MinLength)(2, { message: "El apellido debe tener al menos 2 caracteres" }),
    __metadata("design:type", String)
], EditClienteDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El DNI debe ser una cadena de texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El DNI no puede estar vacío" }),
    (0, class_validator_1.Matches)(/^\d{7,8}$/, {
        message: "El DNI debe contener solo números y tener entre 7 y 8 dígitos",
    }),
    __metadata("design:type", String)
], EditClienteDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "El correo electrónico no es válido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El correo electrónico no puede estar vacío" }),
    __metadata("design:type", String)
], EditClienteDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[0-9+\-\s]{6,20}$/, {
        message: "El teléfono solo puede contener números, espacios o guiones, y debe tener entre 6 y 20 caracteres",
    }),
    __metadata("design:type", String)
], EditClienteDto.prototype, "telefono", void 0);
//# sourceMappingURL=edit-cliente.dto.js.map