import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { MarcasController } from 'src/controller/marcas.controller';
import { MarcasService } from 'src/service/marcas.service';
import { MarcasRepository } from 'src/repository/marcas.repository';
import { MarcaEntity } from '../entity/marca.entity';



import { DetalleVentaEntity } from 'src/entity/detalleVenta.entity';
import { DetalleVentaService } from 'src/service/detalleVenta.service';
import { DetalleVentaController } from 'src/controller/detalleVenta.controller';
import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVentaEntity]), HttpModule],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService, DetalleVentaRepository],
  exports: [DetalleVentaService, DetalleVentaRepository],
})
export class DetalleVentaModule {}