import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { MarcasController } from 'src/controller/marcas.controller';
import { MarcasService } from 'src/service/marcas.service';
import { MarcasRepository } from 'src/repository/marcas.repository';
import { MarcaEntity } from '../entity/marca.entity';


@Module({
  imports: [TypeOrmModule.forFeature([MarcaEntity]), HttpModule],
  controllers: [MarcasController],
  providers: [MarcasService, MarcasRepository],
  exports: [MarcasService, MarcasRepository],
})
export class MarcasModule {}