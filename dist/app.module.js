"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const dotenv = __importStar(require("dotenv"));
const cliente_entity_1 = require("./entity/cliente.entity");
const producto_entity_1 = require("./entity/producto.entity");
const venta_entity_1 = require("./entity/venta.entity");
const detalleVenta_entity_1 = require("./entity/detalleVenta.entity");
const factura_entity_1 = require("./entity/factura.entity");
const tipoFactura_entity_1 = require("./entity/tipoFactura.entity");
const marca_entity_1 = require("./entity/marca.entity");
const proveedor_entity_1 = require("./entity/proveedor.entity");
const metodoPago_entity_1 = require("./entity/metodoPago.entity");
const metodo_pago_module_1 = require("./module/metodo-pago.module");
const tipo_factura_module_1 = require("./module/tipo-factura.module");
const marcas_module_1 = require("./module/marcas.module");
const cliente_module_1 = require("./module/cliente.module");
const proveedor_module_1 = require("./module/proveedor.module");
const linea_entity_1 = require("./entity/linea.entity");
const linea_module_1 = require("./module/linea.module");
const venta_module_1 = require("./module/venta.module");
const producto_module_1 = require("./module/producto.module");
const search_module_1 = require("./module/search.module");
const factura_module_1 = require("./module/factura.module");
const detalleVenta_module_1 = require("./module/detalleVenta.module");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: (process.env.DB_TYPE || 'mysql'),
                host: process.env.MYSQL_HOST || 'localhost',
                port: parseInt(process.env.MYSQL_PORT || '3306', 10),
                username: 'root',
                password: process.env.MYSQL_ROOT_PASS || '',
                database: process.env.MYSQL_DATABASE || 'test',
                entities: [cliente_entity_1.ClienteEntity, producto_entity_1.ProductoEntity, venta_entity_1.VentaEntity, detalleVenta_entity_1.DetalleVentaEntity, factura_entity_1.FacturaEntity, tipoFactura_entity_1.TipoFacturaEntity, marca_entity_1.MarcaEntity, proveedor_entity_1.ProveedorEntity, metodoPago_entity_1.MetodoPagoEntity, linea_entity_1.LineaEntity],
                autoLoadEntities: true,
                synchronize: true,
            }),
            metodo_pago_module_1.MetodoPagoModule, tipo_factura_module_1.TipoFacturaModule, marcas_module_1.MarcasModule, cliente_module_1.ClienteModule, proveedor_module_1.ProveedorModule, linea_module_1.LineasModule, venta_module_1.VentasModule, producto_module_1.ProductoModule, search_module_1.SearchModule, factura_module_1.FacturaModule, detalleVenta_module_1.DetalleVentaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
        exports: [typeorm_1.TypeOrmModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map