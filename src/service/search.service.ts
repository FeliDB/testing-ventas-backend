import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SearchRepository } from 'src/repository/search.repository';




@Injectable()
export class SearchService {

    constructor(private readonly searchRepository: SearchRepository) {}

    async getProductoXLineaXMarca(input: string) {
        try {
            console.log('Service - Input:', input);
            const result = await this.searchRepository.getProductoXLineaXMarca(input);
            console.log('Service - Result:', result);
            return result;
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar productos');
        }
    }

    async getFacturaPorFecha(fecha: string) {
        try {
            return await this.searchRepository.getFacturaXFecha(fecha);
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar facturas por fecha');
        }
    }

    async getFacturaPorTipo(tipo: string) {
        try {
            return await this.searchRepository.getFacturaXTipo(tipo);
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar facturas por tipo');
        }
    }

    async getFacturaPorMetodoPago(metodoPago: string) {
        try {
            return await this.searchRepository.getFacturaXMetodoPago(metodoPago);
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar facturas por metodo de pago');
        }
        }

    async getFacturaPorCliente(idCliente: number) {
        try {
            return await this.searchRepository.getFacturaXCliente(idCliente);
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar facturas por cliente');
        }
        }

    async getFacturaPorPrecio(rangoMin: number, rangoMax: number) {
        try {
            return await this.searchRepository.getFacturaXPrecio(rangoMin, rangoMax);
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al buscar facturas por precio');
        }
    }

    async getMetodosPagoDeFacturas() {
        try {
            return await this.searchRepository.getMetodosPagoDeFacturas();
        } catch (error) {
            console.error('Error en service:', error);
            throw new InternalServerErrorException('Error al obtener métodos de pago');
        }
    }
}