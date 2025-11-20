"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const venta_entity_1 = require("../entity/venta.entity");
const detalleVenta_entity_1 = require("../entity/detalleVenta.entity");
const factura_entity_1 = require("../entity/factura.entity");
const venta_controller_1 = require("../controller/venta.controller");
const venta_service_1 = require("../service/venta.service");
const venta_repository_1 = require("../repository/venta.repository");
const detalleVenta_repository_1 = require("../repository/detalleVenta.repository");
const factura_repository_1 = require("../repository/factura.repository");
const factura_module_1 = require("./factura.module");
const cliente_module_1 = require("./cliente.module");
const producto_module_1 = require("./producto.module");
let VentasModule = class VentasModule {
};
exports.VentasModule = VentasModule;
exports.VentasModule = VentasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([venta_entity_1.VentaEntity, detalleVenta_entity_1.DetalleVentaEntity, factura_entity_1.FacturaEntity]), axios_1.HttpModule, factura_module_1.FacturaModule, cliente_module_1.ClienteModule, producto_module_1.ProductoModule],
        controllers: [venta_controller_1.VentaController],
        providers: [venta_service_1.VentaService, venta_repository_1.VentaRespository, detalleVenta_repository_1.DetalleVentaRepository, factura_repository_1.FacturaRepository],
        exports: [venta_service_1.VentaService, venta_repository_1.VentaRespository],
    })
], VentasModule);
//# sourceMappingURL=venta.module.js.map