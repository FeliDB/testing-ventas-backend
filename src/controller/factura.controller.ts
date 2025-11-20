import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { create } from 'domain';
import { CreateFacturaDto } from 'src/dto/create-factura.dto';
import { FacturaService } from 'src/service/factura.service';

@Controller('factura')
export class FacturaController {
    constructor(private readonly facturaService: FacturaService){}

    @Get()
    async getFacturas(): Promise<any[]> {
        return await this.facturaService.getFacturas();
    }

    @Get(':idVenta')
    async getFacturasPorId(@Param('idVenta') idVenta: number): Promise<any[]> {
        return await this.facturaService.getFacturaPorId(idVenta);
    }

    @Post('crear-factura')
    async crearFactura(@Body() createFacturaDTO: CreateFacturaDto) {
        return await this.facturaService.crearFactura(createFacturaDTO);
    }

}
