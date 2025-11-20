"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const producto_entity_1 = require("../entity/producto.entity");
const marca_entity_1 = require("../entity/marca.entity");
const proveedor_entity_1 = require("../entity/proveedor.entity");
const linea_entity_1 = require("../entity/linea.entity");
const ProductoProveedor_entity_1 = require("../entity/ProductoProveedor.entity");
const producto_controller_1 = require("../controller/producto.controller");
const producto_service_1 = require("../service/producto.service");
const producto_repository_1 = require("../repository/producto.repository");
const remote_auth_guard_1 = require("../guards/remote-auth.guard");
const user_role_guard_1 = require("../guards/user-role.guard");
let ProductoModule = class ProductoModule {
};
exports.ProductoModule = ProductoModule;
exports.ProductoModule = ProductoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([producto_entity_1.ProductoEntity, marca_entity_1.MarcaEntity, proveedor_entity_1.ProveedorEntity, linea_entity_1.LineaEntity, ProductoProveedor_entity_1.ProveedorProducto]), axios_1.HttpModule],
        controllers: [producto_controller_1.ProductosController],
        providers: [producto_service_1.ProductoService, producto_repository_1.ProductoRepository, remote_auth_guard_1.RemoteAuthGuard, user_role_guard_1.UserRoleGuard],
        exports: [producto_service_1.ProductoService, producto_repository_1.ProductoRepository],
    })
], ProductoModule);
//# sourceMappingURL=producto.module.js.map