import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from "src/entity/producto.entity";
import { FacturaEntity } from "src/entity/factura.entity";



@Injectable()
export class SearchRepository {

    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: Repository<ProductoEntity>,
        @InjectRepository(FacturaEntity)
        private facturaRepository: Repository<FacturaEntity>
    ) {}

    async getProductoXLineaXMarca(input: string): Promise<ProductoEntity[]>{
        try {
            console.log('Repository - Input:', input);
            const productos = await this.productoRepository.createQueryBuilder('producto')
                .leftJoinAndSelect('producto.marca', 'marca')
                .leftJoinAndSelect('producto.linea', 'linea')
                .where('(LOWER(producto.descripcion) LIKE LOWER(:input) OR LOWER(marca.descripcion) LIKE LOWER(:input) OR LOWER(linea.descripcion) LIKE LOWER(:input)', { input: `%${input}%` })
                .getMany();
            console.log('Repository - Productos encontrados:', productos.length);
            return productos;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getFacturaXFecha(fecha: string): Promise<FacturaEntity[]> {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .where('DATE(factura.fechaHora) = :fecha', { fecha })
                .getMany();
            return facturas;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getFacturaXTipo(tipo: string): Promise<FacturaEntity[]> {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.tipoFactura', 'tipoFactura')
                .where('tipoFactura.tipoFactura = :tipo', { tipo })
                .getMany();
            return facturas;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getFacturaXMetodoPago(metodoPago: string): Promise<FacturaEntity[]> {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.metodoPago', 'metodoPago')
                .where('metodoPago.metodoPago = :metodoPago', { metodoPago })
                .getMany();
            return facturas;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getFacturaXCliente(idCliente: number): Promise<FacturaEntity[]> {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.venta', 'venta')
                .leftJoinAndSelect('venta.cliente', 'cliente')
                .where('cliente.idCliente = :idCliente', { idCliente })
                .getMany();
            return facturas;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getFacturaXPrecio(rangoMin: number, rangoMax: number): Promise<FacturaEntity[]> {
        try {
            const facturas = await this.facturaRepository.createQueryBuilder('factura')
                .where('factura.total BETWEEN :rangoMin AND :rangoMax', { rangoMin, rangoMax })
                .getMany();
            return facturas;
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

    async getMetodosPagoDeFacturas(): Promise<{metodoPago: string, cantidad: number}[]> {
        try {
            const metodosPago = await this.facturaRepository.createQueryBuilder('factura')
                .leftJoinAndSelect('factura.metodoPago', 'metodoPago')
                .select('metodoPago.metodoPago', 'metodoPago')
                .addSelect('COUNT(*)', 'cantidad')
                .groupBy('metodoPago.metodoPago')
                .getRawMany();
            return metodosPago.map(item => ({
                metodoPago: item.metodoPago,
                cantidad: parseInt(item.cantidad)
            }));
        } catch (error) {
            console.error('Error en repository:', error);
            throw error;
        }
    }

}
