"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const linea_entity_1 = require("../entity/linea.entity");
const linea_controller_1 = require("../controller/linea.controller");
const linea_service_1 = require("../service/linea.service");
const linea_repository_1 = require("../repository/linea.repository");
let LineasModule = class LineasModule {
};
exports.LineasModule = LineasModule;
exports.LineasModule = LineasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([linea_entity_1.LineaEntity]), axios_1.HttpModule],
        controllers: [linea_controller_1.LineasController],
        providers: [linea_service_1.LineaService, linea_repository_1.LineaRepository],
        exports: [linea_service_1.LineaService, linea_repository_1.LineaRepository],
    })
], LineasModule);
//# sourceMappingURL=linea.module.js.map