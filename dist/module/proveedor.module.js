"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const proveedor_controller_1 = require("../controller/proveedor.controller");
const proveedor_entity_1 = require("../entity/proveedor.entity");
const proveedor_service_1 = require("../service/proveedor.service");
const proveedor_repository_1 = require("../repository/proveedor.repository");
const remote_auth_guard_1 = require("../guards/remote-auth.guard");
const user_role_guard_1 = require("../guards/user-role.guard");
const axios_1 = require("@nestjs/axios");
let ProveedorModule = class ProveedorModule {
};
exports.ProveedorModule = ProveedorModule;
exports.ProveedorModule = ProveedorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([proveedor_entity_1.ProveedorEntity]), axios_1.HttpModule],
        controllers: [proveedor_controller_1.ProveedorController],
        providers: [proveedor_service_1.ProveedorService, proveedor_repository_1.ProveedorRepository, remote_auth_guard_1.RemoteAuthGuard, user_role_guard_1.UserRoleGuard],
        exports: [proveedor_service_1.ProveedorService],
    })
], ProveedorModule);
//# sourceMappingURL=proveedor.module.js.map