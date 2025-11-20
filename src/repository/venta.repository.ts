import { Repository, DataSource, EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DetalleVentaEntity } from "src/entity/detalleVenta.entity";
import { VentaEntity } from "src/entity/venta.entity";
import { CreateVentaDto } from "src/dto/create-venta.dto";
import { FacturaEntity } from "src/entity/factura.entity";

@Injectable()
export class VentaRespository {
    constructor(
        @InjectRepository(VentaEntity)
        private readonly repository: Repository<VentaEntity>,
        private readonly dataSource: DataSource
    ) {}

    async getVentaRepository(periodo?: string): Promise<VentaEntity[]> {
        const queryBuilder = this.repository.createQueryBuilder('venta')
            .leftJoinAndSelect('venta.detalleVenta', 'detalle')
            .leftJoinAndSelect('detalle.producto', 'producto')
            .leftJoinAndSelect('venta.cliente', 'cliente')
            .orderBy('venta.fechaHora', 'DESC');

        if (periodo) {
            const now = new Date();
            let fechaInicio: Date;

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

    async getVentaIDRespository(id: number): Promise<VentaEntity | null> {
        return await this.repository.findOneBy({ idVenta: id });
    }

    async getVentasPaginadas(page: number = 1, limit: number = 10, periodo?: string) {
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
            let fechaInicio: Date | undefined;

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

    async postVentaRespository(createVentaDto): Promise<VentaEntity> {
        const venta = this.repository.create({
            cliente: {idCliente: createVentaDto.idCliente},
            total: createVentaDto.factura.total
        });
        return await this.repository.save(venta);
    }
    



    //put
    //delete
}
