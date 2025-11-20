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
exports.EditLineaDto = void 0;
const class_validator_1 = require("class-validator");
class EditLineaDto {
    idLinea;
    descripcion;
}
exports.EditLineaDto = EditLineaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre no puede estar vacio" }),
    (0, class_validator_1.MaxLength)(15, { message: "El nombre no puede tener mas de 15 caracteres" }),
    __metadata("design:type", String)
], EditLineaDto.prototype, "descripcion", void 0);
//# sourceMappingURL=edit-linea.dto.js.map