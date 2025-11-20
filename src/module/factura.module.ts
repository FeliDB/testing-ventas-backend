import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaEntity } from 'src/entity/factura.entity';
import { TipoFacturaEntity } from 'src/entity/tipoFactura.entity';
import { MetodoPagoEntity } from 'src/entity/metodoPago.entity';
import { FacturaController } from 'src/controller/factura.controller';
import { FacturaService } from 'src/service/factura.service';
import { FacturaRepository } from 'src/repository/factura.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FacturaEntity, TipoFacturaEntity, MetodoPagoEntity])],
  controllers: [FacturaController],
  providers: [FacturaService, FacturaRepository],
  exports: [FacturaService, FacturaRepository]
})
export class FacturaModule {}
