import { DataSource, Repository } from "typeorm";
import { MetodoPagoEntity } from "../entity/metodoPago.entity";
import { CreateMetodoPagoDto } from "../dto/metodo-pago-create.dto";
import { Injectable } from "@nestjs/common";
import { MetodoPagoEditDto } from "src/dto/metodo-pago-edit.dto";
import { TipoFacturaEntity } from "src/entity/tipoFactura.entity";
import { CreateTipoFacturaDto } from "src/dto/tipo-factura-create.dto";
import { TipoFacturaEditDto } from "src/dto/tipo-factura-edit.dto";

@Injectable()
export class TipoFacturaRepository extends Repository<TipoFacturaEntity>{
    constructor(private dataSource: DataSource){
        super(TipoFacturaEntity, dataSource.createEntityManager())
    }

    async getTiposFactura(): Promise<TipoFacturaEntity[]>{
        return await this.find();
    }

    async getTipoFacturaById(id: number): Promise<TipoFacturaEntity | null>{
        return await this.findOneBy({ idTipoFactura: id });
    }

    async createTipoFactura(createTipoFacturaDto: CreateTipoFacturaDto): Promise<TipoFacturaEntity>{
        const tipoFactura = this.create({
            tipoFactura: createTipoFacturaDto.nombre
        });
        return await this.save(tipoFactura);
    }

    async editTipoFactura(id: number, tipoFacturaEditDto: TipoFacturaEditDto): Promise<TipoFacturaEntity>{
        const tipoFactura = await this.findOneBy({ idTipoFactura: id });
        if (!tipoFactura) {
            throw new Error('Tipo de Factura no encontrado');
        }
        if (tipoFacturaEditDto.nombre) {
            tipoFactura.tipoFactura = tipoFacturaEditDto.nombre;
        }
        return await this.save(tipoFactura);
    }

    async deleteTipoFactura(id: number): Promise<{message: string, status: number}>{
        const tipoFactura = await this.findOneBy({ idTipoFactura: id });
        if (!tipoFactura) {
            return { message: 'Tipo de Factura no encontrado', status: 404 };
        }
        await this.softDelete(id);
        return { message: 'Tipo de Factura eliminada correctamente', status: 200 };
    }
}