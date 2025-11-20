import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFacturaDto } from "src/dto/create-factura.dto";
import { FacturaEntity } from "src/entity/factura.entity";
import { Repository } from "typeorm";

@Injectable()
export class FacturaRepository {
    constructor(
        @InjectRepository(FacturaEntity)
        private readonly repository: Repository<FacturaEntity>
    ) {}

    getFacturas(): Promise<FacturaEntity[]> {
        return this.repository.find({
            relations: ['tipoFactura', 'metodoPago', 'venta']
        });
    }

    async getFacturaByVentaId(idVenta: number): Promise<FacturaEntity | null> {
        return await this.repository.findOne({
            where: { venta: { idVenta } },
            relations: ['venta', 'venta.cliente', 'venta.detalleVenta', 'venta.detalleVenta.producto', 'tipoFactura', 'metodoPago']
        });
    }

    async createFactura(idVenta, factura: CreateFacturaDto): Promise<FacturaEntity> {
        try {
            const nuevaFactura = this.repository.create({
                total: factura.total,
                tipoFactura: { idTipoFactura: factura.idTipoFactura },
                metodoPago: { idMetodoPago: factura.idMetodoPago },
                impuesto: factura.impuesto,
                venta: { idVenta }  
            });

            const facturaGuardada = await this.repository.save(nuevaFactura);
            return facturaGuardada;
        } catch (error) {
            console.error('Error al crear factura:', error);
            throw error;
        }
    }


}