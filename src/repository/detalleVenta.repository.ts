import { Repository } from "typeorm";
import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DetalleVentaEntity } from "src/entity/detalleVenta.entity";
import { CreateDetalleVentaDto } from "src/dto/create-detalleVenta.dto";
import { EditDetalleVentaDto } from "src/dto/edit.detalleVenta.dto";
import { EntityManager } from "typeorm";


@Injectable()
export class DetalleVentaRepository {
    constructor(
        @InjectRepository(DetalleVentaEntity)  // ⬅️ Aquí sí va
        private readonly repository: Repository<DetalleVentaEntity>
    ) {}

    async getDetalleVentaRepository(): Promise<DetalleVentaEntity[]> {
        return await this.repository.find(
            {
                relations: ['producto', 'venta']
            }
        );
    }

    async getDetalleVentaIDRespository(id: number): Promise<DetalleVentaEntity | null> {
        return await this.repository.findOneBy({ idDetalle: id });
    }

    async getDetalleConIDVenta(id: number): Promise<DetalleVentaEntity[] | null> {
        return await this.repository.find({ 
            relations: ['venta', 'producto'], 
            where: { venta: { idVenta: id } } 
        });
    }

    async postDetallesVentaRepository(idVenta: number, detalles: any[] ): Promise<DetalleVentaEntity[]> {
        
        const detallesVentaEntities = detalles.map(detalle =>
            this.repository.create({
            producto: { idProducto: detalle.productoId },
            cantidad: detalle.cantidad,
            venta: { idVenta },
            })
        );

        return await this.repository.save(detallesVentaEntities);

    }


}
