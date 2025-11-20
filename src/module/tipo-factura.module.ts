import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { TipoFacturaEntity } from 'src/entity/tipoFactura.entity';
import { TipoFacturaController } from 'src/controller/tipo-factura.controller';
import { TipoFacturaService } from 'src/service/tipo-factura.service';
import { TipoFacturaRepository } from 'src/repository/tipo-factura.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoFacturaEntity]), HttpModule],
  controllers: [TipoFacturaController],
  providers: [TipoFacturaService, TipoFacturaRepository],
  exports: [TipoFacturaService, TipoFacturaRepository],
})
export class TipoFacturaModule {}
