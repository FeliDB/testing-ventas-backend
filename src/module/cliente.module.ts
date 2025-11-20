import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ClienteEntity } from 'src/entity/cliente.entity';
import { ClienteController } from 'src/controller/cliente.controller';
import { ClienteService } from 'src/service/cliente.service';
import { ClienteRepository } from 'src/repository/cliente.repository';
import { FacturaModule } from './factura.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity]), HttpModule, FacturaModule],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
  exports: [ClienteService, ClienteRepository],
})
export class ClienteModule {}