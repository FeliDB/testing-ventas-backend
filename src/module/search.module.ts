import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from 'src/controller/search.controller';
import { SearchService } from 'src/service/search.service';
import { SearchRepository } from 'src/repository/search.repository';
import { ProductoEntity } from 'src/entity/producto.entity';
import { FacturaEntity } from 'src/entity/factura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity, FacturaEntity])],
  controllers: [SearchController],
  providers: [SearchService, SearchRepository],
  exports: [SearchService, SearchRepository],
})
export class SearchModule {}