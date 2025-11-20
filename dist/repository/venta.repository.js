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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaRespository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const venta_entity_1 = require("../entity/venta.entity");
let VentaRespository = class VentaRespository {
    repository;
    dataSource;
    constructor(repository, dataSource) {
        this.repository = repository;
        this.dataSource = dataSource;
    }
    async getVentaRepository(periodo) {
        const queryBuilder = this.repository.createQueryBuilder('venta')
            .leftJoinAndSelect('venta.detalleVenta', 'detalle')
            .leftJoinAndSelect('detalle.producto', 'producto')
            .leftJoinAndSelect('venta.cliente', 'cliente')
            .orderBy('venta.fechaHora', 'DESC');
        if (periodo) {
            const now = new Date();
            let fechaInicio;
            switch (periodo) {
                case '30d':
                    fechaInicio = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    break;
                case '6m':
                    fechaInicio = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
                    break;
                case '1y':
                    fechaInicio = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
                    break;
                default:
                    return await queryBuilder.getMany();
            }
            queryBuilder.where('venta.fechaHora >= :fechaInicio', { fechaInicio });
        }
        return await queryBuilder.getMany();
    }
    async getVentaIDRespository(id) {
        return await this.repository.findOneBy({ idVenta: id });
    }
    async getVentasPaginadas(page = 1, limit = 10, periodo) {
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const skip = (pageNum - 1) * limitNum;
        const queryBuilder = this.repository.createQueryBuilder('venta')
            .leftJoinAndSelect('venta.detalleVenta', 'detalle')
            .leftJoinAndSelect('detalle.producto', 'producto')
            .leftJoinAndSelect('venta.cliente', 'cliente')
            .orderBy('venta.fechaHora', 'DESC')
            .skip(skip)
            .take(limitNum);
        if (periodo) {
            const now = new Date();
            let fechaInicio;
            switch (periodo) {
                case '30d':
                    fechaInicio = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    break;
                case '6m':
                    fechaInicio = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
                    break;
                case '1y':
                    fechaInicio = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
                    break;
            }
            if (fechaInicio) {
                queryBuilder.where('venta.fechaHora >= :fechaInicio', { fechaInicio });
            }
        }
        const [ventas, total] = await queryBuilder.getManyAndCount();
        return {
            data: ventas,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum)
        };
    }
    async postVentaRespository(createVentaDto) {
        const venta = this.repository.create({
            cliente: { idCliente: createVentaDto.idCliente },
            total: createVentaDto.factura.total
        });
        return await this.repository.save(venta);
    }
};
exports.VentaRespository = VentaRespository;
exports.VentaRespository = VentaRespository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(venta_entity_1.VentaEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], VentaRespository);
//# sourceMappingURL=venta.repository.js.map