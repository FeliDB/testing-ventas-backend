import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { LineaEntity } from 'src/entity/linea.entity';
import { LineasController } from 'src/controller/linea.controller';
import { LineaService } from 'src/service/linea.service';
import { LineaRepository } from 'src/repository/linea.repository';  


@Module({
  imports: [TypeOrmModule.forFeature([LineaEntity]), HttpModule],
  controllers: [LineasController],
  providers: [LineaService, LineaRepository],
  exports: [LineaService, LineaRepository],
})
export class LineasModule {}