import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFacturaDto } from 'src/dto/create-factura.dto';
import { FacturaRepository } from 'src/repository/factura.repository';

@Injectable()
export class FacturaService {
    constructor(private readonly facturaRepository: FacturaRepository) {}

    async getFacturas(): Promise<any[]> {
        return await this.facturaRepository.getFacturas();
    }

    async getFacturaPorId(idVenta: number): Promise<any | null> {
        return await this.facturaRepository.getFacturaByVentaId(idVenta);
    }

    async crearFactura(createFacturaDto: CreateFacturaDto){
        try {
            // return await this.facturaRepository.createFactura(Numb, createFacturaDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al crear la factura.');
        }
    }
}
