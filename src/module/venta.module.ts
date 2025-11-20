import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { VentaEntity } from 'src/entity/venta.entity';
import { DetalleVentaEntity } from 'src/entity/detalleVenta.entity';
import { FacturaEntity } from 'src/entity/factura.entity';
import { VentaController } from 'src/controller/venta.controller';
import { VentaService } from 'src/service/venta.service';
import { VentaRespository } from 'src/repository/venta.repository';
import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';
import { FacturaRepository } from 'src/repository/factura.repository';
import { FacturaModule } from './factura.module';
import { ClienteModule } from './cliente.module';
import { ProductoModule} from './producto.module';


@Module({
  imports: [TypeOrmModule.forFeature([VentaEntity, DetalleVentaEntity, FacturaEntity]), HttpModule, FacturaModule, ClienteModule, ProductoModule],
  controllers: [VentaController],
  providers: [VentaService, VentaRespository, DetalleVentaRepository, FacturaRepository],
  exports: [VentaService, VentaRespository],
})
export class VentasModule {}