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
exports.VentaService = void 0;
const common_1 = require("@nestjs/common");
const venta_repository_1 = require("../repository/venta.repository");
const detalleVenta_repository_1 = require("../repository/detalleVenta.repository");
const factura_repository_1 = require("../repository/factura.repository");
const cliente_repository_1 = require("../repository/cliente.repository");
const producto_repository_1 = require("../repository/producto.repository");
const typeorm_1 = require("typeorm");
let VentaService = class VentaService {
    ventaRespository;
    detalleVentaRepository;
    facturaRepository;
    clienteRepository;
    productoRepository;
    dataSource;
    constructor(ventaRespository, detalleVentaRepository, facturaRepository, clienteRepository, productoRepository, dataSource) {
        this.ventaRespository = ventaRespository;
        this.detalleVentaRepository = detalleVentaRepository;
        this.facturaRepository = facturaRepository;
        this.clienteRepository = clienteRepository;
        this.productoRepository = productoRepository;
        this.dataSource = dataSource;
    }
    async getVentaService(periodo) {
        try {
            return await this.ventaRespository.getVentaRepository(periodo);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la venta.');
        }
    }
    async getVentaPaginadaService(page, limit, periodo) {
        try {
            return await this.ventaRespository.getVentasPaginadas(page, limit, periodo);
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al obtener la venta paginada.');
        }
    }
    async getVentaByIdService(id) {
        try {
            const detalleVenta = await this.ventaRespository.getVentaIDRespository(id);
            if (!detalleVenta) {
                throw new common_1.NotFoundException(`venta con ID ${id} no encontrada.`);
            }
            return detalleVenta;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener la venta con ID ${id}.`);
        }
    }
    async getFacturaByVentaIdService(idVenta) {
        try {
            const factura = await this.facturaRepository.getFacturaByVentaId(idVenta);
            if (!factura) {
                throw new common_1.NotFoundException(`Factura para la venta con ID ${idVenta} no encontrada.`);
            }
            return factura;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al obtener la factura de la venta con ID ${idVenta}.`);
        }
    }
    async postVentaService(createVentaDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const cliente = await this.clienteRepository.getClienteIDRespository(createVentaDto.idCliente);
            if (!cliente) {
                throw new common_1.NotFoundException(`Cliente con ID ${createVentaDto.idCliente} no encontrado.`);
            }
            const venta = await this.ventaRespository.postVentaRespository(createVentaDto);
            const detalleVenta = await this.detalleVentaRepository.postDetallesVentaRepository(venta.idVenta, createVentaDto.detalles);
            const factura = await this.facturaRepository.createFactura(venta.idVenta, createVentaDto.factura);
            await queryRunner.commitTransaction();
            return { venta, detalleVenta, factura };
        }
        catch (error) {
            console.error(error);
            await queryRunner.rollbackTransaction();
            throw new common_1.InternalServerErrorException('Error al crear la venta.');
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.VentaService = VentaService;
exports.VentaService = VentaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [venta_repository_1.VentaRespository,
        detalleVenta_repository_1.DetalleVentaRepository,
        factura_repository_1.FacturaRepository,
        cliente_repository_1.ClienteRepository,
        producto_repository_1.ProductoRepository,
        typeorm_1.DataSource])
], VentaService);
//# sourceMappingURL=venta.service.js.map