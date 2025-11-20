"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const search_controller_1 = require("../controller/search.controller");
const search_service_1 = require("../service/search.service");
const search_repository_1 = require("../repository/search.repository");
const producto_entity_1 = require("../entity/producto.entity");
const factura_entity_1 = require("../entity/factura.entity");
let SearchModule = class SearchModule {
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([producto_entity_1.ProductoEntity, factura_entity_1.FacturaEntity])],
        controllers: [search_controller_1.SearchController],
        providers: [search_service_1.SearchService, search_repository_1.SearchRepository],
        exports: [search_service_1.SearchService, search_repository_1.SearchRepository],
    })
], SearchModule);
//# sourceMappingURL=search.module.js.map