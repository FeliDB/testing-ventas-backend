"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoFacturaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const tipoFactura_entity_1 = require("../entity/tipoFactura.entity");
const tipo_factura_controller_1 = require("../controller/tipo-factura.controller");
const tipo_factura_service_1 = require("../service/tipo-factura.service");
const tipo_factura_repository_1 = require("../repository/tipo-factura.repository");
let TipoFacturaModule = class TipoFacturaModule {
};
exports.TipoFacturaModule = TipoFacturaModule;
exports.TipoFacturaModule = TipoFacturaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipoFactura_entity_1.TipoFacturaEntity]), axios_1.HttpModule],
        controllers: [tipo_factura_controller_1.TipoFacturaController],
        providers: [tipo_factura_service_1.TipoFacturaService, tipo_factura_repository_1.TipoFacturaRepository],
        exports: [tipo_factura_service_1.TipoFacturaService, tipo_factura_repository_1.TipoFacturaRepository],
    })
], TipoFacturaModule);
//# sourceMappingURL=tipo-factura.module.js.map