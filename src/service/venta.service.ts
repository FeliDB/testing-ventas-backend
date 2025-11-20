import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { VentaRespository } from 'src/repository/venta.repository';
import { CreateVentaDto } from 'src/dto/create-venta.dto';
import { DetalleVentaRepository } from 'src/repository/detalleVenta.repository';
import { FacturaRepository } from 'src/repository/factura.repository';
import { DetalleVentaEntity } from 'src/entity/detalleVenta.entity';
import { FacturaEntity } from 'src/entity/factura.entity';
import { ClienteRepository } from 'src/repository/cliente.repository';
import { ProductoRepository } from 'src/repository/producto.repository';
import { DataSource } from 'typeorm';


@Injectable()
export class VentaService {

    constructor(
        private readonly ventaRespository: VentaRespository,
        private readonly detalleVentaRepository: DetalleVentaRepository,
        private readonly facturaRepository: FacturaRepository, 
        private readonly clienteRepository: ClienteRepository,
        private readonly productoRepository: ProductoRepository,
        private dataSource: DataSource
    ) {}

    async getVentaService(periodo?: string) {
        try {
            return await this.ventaRespository.getVentaRepository(periodo);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la venta.');
        }
    }

    async getVentaPaginadaService(page: number, limit: number, periodo?: string) {
        try {
            return await this.ventaRespository.getVentasPaginadas(page, limit, periodo);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error al obtener la venta paginada.');
        }
    }

    async getVentaByIdService(id: number){
        try {
            const detalleVenta = await this.ventaRespository.getVentaIDRespository(id);
            if (!detalleVenta) {
                throw new NotFoundException(`venta con ID ${id} no encontrada.`);
            }
            return detalleVenta;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener la venta con ID ${id}.`);
        }
    }

    async getFacturaByVentaIdService(idVenta: number) {
        try {
            const factura = await this.facturaRepository.getFacturaByVentaId(idVenta);
            if (!factura) {
                throw new NotFoundException(`Factura para la venta con ID ${idVenta} no encontrada.`);
            }
            return factura;
        } catch (error) {
            console.error(error);
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException(`Error al obtener la factura de la venta con ID ${idVenta}.`);
        }
    }

    async postVentaService(createVentaDto: CreateVentaDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction(); 

        try {

            const cliente = await this.clienteRepository.getClienteIDRespository(createVentaDto.idCliente);
            if (!cliente) {
                throw new NotFoundException(`Cliente con ID ${createVentaDto.idCliente} no encontrado.`);
            }

            const venta = await this.ventaRespository.postVentaRespository(createVentaDto);

            const detalleVenta = await this.detalleVentaRepository.postDetallesVentaRepository(venta.idVenta, createVentaDto.detalles);

            const factura = await this.facturaRepository.createFactura(venta.idVenta, createVentaDto.factura);

            await queryRunner.commitTransaction();
            return {venta, detalleVenta, factura};
        } catch (error) {
            console.error(error);
            await queryRunner.rollbackTransaction()
            // Si no usas transacción, aquí podrías tener datos inconsistentes.
            throw new InternalServerErrorException('Error al crear la venta.');
        } finally {
            await queryRunner.release()
        }
    }





}

    //put
    //delete
