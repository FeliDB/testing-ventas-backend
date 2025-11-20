import { DataSource, Repository } from "typeorm";
import { MetodoPagoEntity } from "../entity/metodoPago.entity";
import { CreateMetodoPagoDto } from "../dto/metodo-pago-create.dto";
import { Injectable } from "@nestjs/common";
import { MetodoPagoEditDto } from "src/dto/metodo-pago-edit.dto";

@Injectable()
export class MetodoPagoRepository extends Repository<MetodoPagoEntity>{
    constructor(private dataSource: DataSource){
        super(MetodoPagoEntity, dataSource.createEntityManager())
    }

    async getMetodosPago(): Promise<MetodoPagoEntity[]>{
        return await this.find();
    }

    async getMetodoPagoById(id: number): Promise<MetodoPagoEntity | null>{
        return await this.findOneBy({ idMetodoPago: id });
    }

    async createMetodoPago(createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPagoEntity>{
        const metodoPago = this.create({
            metodoPago: createMetodoPagoDto.nombre
        });
        return await this.save(metodoPago);
    }

    async editMetodoPago(id: number, metodoPagoEditDto: MetodoPagoEditDto): Promise<MetodoPagoEntity>{
        const metodoPago = await this.findOneBy({ idMetodoPago: id });
        if (!metodoPago) {
            throw new Error('Método de pago no encontrado');
        }
        if (metodoPagoEditDto.nombre) {
            metodoPago.metodoPago = metodoPagoEditDto.nombre;
        }
        return await this.save(metodoPago);
    }

    async deleteMetodoPago(id: number): Promise<{message: string, status: number}>{
        const metodoPago = await this.findOneBy({ idMetodoPago: id });
        if (!metodoPago) {
            return { message: 'Método de pago no encontrado', status: 404 };
        }
        await this.softDelete(id);
        return { message: 'Método de pago eliminado correctamente', status: 200 };
    }
}