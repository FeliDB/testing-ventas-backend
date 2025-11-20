import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { ClienteEntity } from './entity/cliente.entity';
import { ProductoEntity } from './entity/producto.entity';
import { VentaEntity } from './entity/venta.entity';
import { DetalleVentaEntity } from './entity/detalleVenta.entity';
import { FacturaEntity } from './entity/factura.entity';
import { TipoFacturaEntity } from './entity/tipoFactura.entity';
import { MarcaEntity } from './entity/marca.entity';
import { ProveedorEntity } from './entity/proveedor.entity';
import { MetodoPagoEntity } from './entity/metodoPago.entity';
import { MetodoPagoModule } from './module/metodo-pago.module';
import { TipoFacturaModule } from './module/tipo-factura.module';
import { MarcasModule } from './module/marcas.module';
import { ClienteModule } from './module/cliente.module';
import { ProveedorModule } from './module/proveedor.module';
import { LineaEntity } from './entity/linea.entity';
import { LineasModule } from './module/linea.module';
import { VentasModule } from './module/venta.module';
import { ProductoModule } from './module/producto.module';
import { SearchModule } from './module/search.module';
import { FacturaModule } from './module/factura.module';
import { DetalleVentaModule } from './module/detalleVenta.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE || 'mysql') as any,
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT || '3306', 10),
      username: 'root',
      password: process.env.MYSQL_ROOT_PASS || '',
      database: process.env.MYSQL_DATABASE || 'test',
      entities: [ClienteEntity, ProductoEntity, VentaEntity, DetalleVentaEntity, FacturaEntity, TipoFacturaEntity, MarcaEntity, ProveedorEntity, MetodoPagoEntity, LineaEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),  
    MetodoPagoModule, TipoFacturaModule, MarcasModule, ClienteModule, ProveedorModule, LineasModule, VentasModule, ProductoModule, SearchModule, FacturaModule, DetalleVentaModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}


