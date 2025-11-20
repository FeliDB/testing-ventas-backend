import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorController } from 'src/controller/proveedor.controller';
import { ProveedorEntity } from 'src/entity/proveedor.entity';
import { ProveedorService } from 'src/service/proveedor.service';
import { ProveedorRepository } from 'src/repository/proveedor.repository';
import { RemoteAuthGuard } from 'src/guards/remote-auth.guard';
import { UserRoleGuard } from 'src/guards/user-role.guard';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([ProveedorEntity]), HttpModule],
  controllers: [ProveedorController],
  providers: [ProveedorService, ProveedorRepository,RemoteAuthGuard, UserRoleGuard ],
  exports: [ProveedorService],
})
export class ProveedorModule {}
