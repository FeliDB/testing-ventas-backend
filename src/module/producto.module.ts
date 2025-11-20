import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ProductoEntity } from 'src/entity/producto.entity';
import { MarcaEntity } from 'src/entity/marca.entity';
import { ProveedorEntity } from 'src/entity/proveedor.entity';
import { LineaEntity } from 'src/entity/linea.entity';
import { ProveedorProducto } from 'src/entity/ProductoProveedor.entity';
import { ProductosController } from 'src/controller/producto.controller';
import { ProductoService } from 'src/service/producto.service';
import { ProductoRepository } from 'src/repository/producto.repository';
import { RemoteAuthGuard } from 'src/guards/remote-auth.guard';
import { UserRoleGuard } from 'src/guards/user-role.guard';


@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity, MarcaEntity, ProveedorEntity, LineaEntity, ProveedorProducto]), HttpModule],
  controllers: [ProductosController],
  providers: [ProductoService, ProductoRepository, RemoteAuthGuard, UserRoleGuard],
  exports: [ProductoService, ProductoRepository],
})
export class ProductoModule {} 