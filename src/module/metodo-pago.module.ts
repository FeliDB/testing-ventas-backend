import { Module } from '@nestjs/common';
import { MetodoPagoService } from 'src/service/metodo-pago.service';
import { MetodoPagoRepository } from 'src/repository/metodo-pago.repository';
import { MetodoPagoController } from 'src/controller/metodo-pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoEntity } from 'src/entity/metodoPago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPagoEntity])],
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService, MetodoPagoRepository],
  exports: [MetodoPagoService],
})
export class MetodoPagoModule {}
