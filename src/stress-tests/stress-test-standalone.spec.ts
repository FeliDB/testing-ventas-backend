import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Controller, Get, Query } from '@nestjs/common';
import request from 'supertest';

// Controlador mock simple para pruebas de estrés
@Controller('test-ventas')
class TestVentasController {
  @Get()
  getVentas(@Query('periodo') periodo?: string) {
    return { data: [], total: 0, periodo };
  }

  @Get('paginada')
  getVentasPaginadas(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    return { data: [], total: 0, page, limit };
  }
}

@Controller('test-productos')
class TestProductosController {
  @Get()
  getProductos(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    return { data: [], total: 0, page, limit };
  }
}

describe('Stress Tests - Standalone', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [TestVentasController, TestProductosController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Caso 1: Productos Stress Test', () => {
    it('debería manejar 100 solicitudes concurrentes sin fallar', async () => {
      const concurrentRequests = 100;
      const promises: Promise<any>[] = [];

      // Crear 100 solicitudes concurrentes
      for (let i = 0; i < concurrentRequests; i++) {
        const promise = request(app.getHttpServer())
          .get('/test-productos')
          .query({ page: 1, limit: 10 })
          .expect(200);
        promises.push(promise);
      }

      const startTime = Date.now();
      const results = await Promise.allSettled(promises);
      const endTime = Date.now();
      const duration = endTime - startTime;

      const successful = results.filter(result => result.status === 'fulfilled').length;
      const failed = results.filter(result => result.status === 'rejected').length;

      console.log(`\n=== CASO 1: PRODUCTOS STRESS TEST ===`);
      console.log(`Prueba de Carga Concurrente:`);
      console.log(`- Solicitudes exitosas: ${successful}/${concurrentRequests}`);
      console.log(`- Solicitudes fallidas: ${failed}/${concurrentRequests}`);
      console.log(`- Tiempo total: ${duration}ms`);
      console.log(`- Promedio por solicitud: ${(duration / concurrentRequests).toFixed(2)}ms`);

      expect(successful).toBeGreaterThanOrEqual(concurrentRequests * 0.9);
      expect(duration / concurrentRequests).toBeLessThan(1000);
    }, 30000);

    it('debería mantener rendimiento estable con solicitudes secuenciales', async () => {
      const sequentialRequests = 50;
      const responseTimes: number[] = [];

      for (let i = 0; i < sequentialRequests; i++) {
        const startTime = Date.now();
        
        await request(app.getHttpServer())
          .get('/test-productos')
          .query({ page: Math.floor(i / 10) + 1, limit: 10 })
          .expect(200);

        const endTime = Date.now();
        responseTimes.push(endTime - startTime);
      }

      const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
      const maxResponseTime = Math.max(...responseTimes);
      const minResponseTime = Math.min(...responseTimes);

      console.log(`Prueba Secuencial:`);
      console.log(`- Tiempo promedio: ${avgResponseTime.toFixed(2)}ms`);
      console.log(`- Tiempo máximo: ${maxResponseTime}ms`);
      console.log(`- Tiempo mínimo: ${minResponseTime}ms`);

      expect(avgResponseTime).toBeLessThan(500);
      expect(maxResponseTime).toBeLessThan(2000);
    }, 30000);
  });

  describe('Caso 2: Ventas Stress Test', () => {
    it('debería manejar múltiples consultas de ventas sin degradación', async () => {
      const iterations = 200;
      const batchSize = 20;
      const batches = Math.ceil(iterations / batchSize);
      
      let totalSuccessful = 0;
      let totalFailed = 0;
      const batchTimes: number[] = [];

      console.log(`\n=== CASO 2: VENTAS STRESS TEST ===`);
      console.log(`Iniciando prueba de resistencia...`);

      for (let batch = 0; batch < batches; batch++) {
        const batchStartTime = Date.now();
        const promises: Promise<any>[] = [];

        for (let i = 0; i < batchSize && (batch * batchSize + i) < iterations; i++) {
          const promise = request(app.getHttpServer())
            .get('/test-ventas')
            .expect(200);
          promises.push(promise);
        }

        const results = await Promise.allSettled(promises);
        const batchEndTime = Date.now();
        
        const successful = results.filter(result => result.status === 'fulfilled').length;
        const failed = results.filter(result => result.status === 'rejected').length;
        
        totalSuccessful += successful;
        totalFailed += failed;
        batchTimes.push(batchEndTime - batchStartTime);

        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const avgBatchTime = batchTimes.reduce((a, b) => a + b, 0) / batchTimes.length;
      const successRate = (totalSuccessful / iterations) * 100;

      console.log(`Prueba de Resistencia:`);
      console.log(`- Total de solicitudes: ${iterations}`);
      console.log(`- Solicitudes exitosas: ${totalSuccessful}`);
      console.log(`- Solicitudes fallidas: ${totalFailed}`);
      console.log(`- Tasa de éxito: ${successRate.toFixed(2)}%`);
      console.log(`- Tiempo promedio por lote: ${avgBatchTime.toFixed(2)}ms`);

      expect(successRate).toBeGreaterThanOrEqual(95);
      expect(avgBatchTime).toBeLessThan(3000);
    }, 60000);

    it('debería manejar consultas paginadas bajo carga sostenida', async () => {
      const duration = 15000;
      const requestInterval = 50;
      const startTime = Date.now();
      
      let requestCount = 0;
      let successCount = 0;
      let errorCount = 0;
      const responseTimes: number[] = [];

      console.log(`Iniciando prueba de carga sostenida...`);

      while (Date.now() - startTime < duration) {
        const requestStartTime = Date.now();
        const page = Math.floor(requestCount / 10) + 1;
        
        try {
          await request(app.getHttpServer())
            .get('/test-ventas/paginada')
            .query({ page, limit: 10 })
            .expect(200);
          
          successCount++;
          const responseTime = Date.now() - requestStartTime;
          responseTimes.push(responseTime);
        } catch (error) {
          errorCount++;
        }
        
        requestCount++;
        await new Promise(resolve => setTimeout(resolve, requestInterval));
      }

      const actualDuration = Date.now() - startTime;
      const requestsPerSecond = (requestCount / actualDuration) * 1000;
      const avgResponseTime = responseTimes.length > 0 
        ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length 
        : 0;
      const successRate = (successCount / requestCount) * 100;

      console.log(`Prueba de Carga Sostenida:`);
      console.log(`- Duración: ${actualDuration}ms`);
      console.log(`- Total solicitudes: ${requestCount}`);
      console.log(`- Exitosas: ${successCount}`);
      console.log(`- Errores: ${errorCount}`);
      console.log(`- Req/segundo: ${requestsPerSecond.toFixed(2)}`);
      console.log(`- Tiempo promedio: ${avgResponseTime.toFixed(2)}ms`);
      console.log(`- Tasa de éxito: ${successRate.toFixed(2)}%`);

      expect(successRate).toBeGreaterThanOrEqual(90);
      expect(avgResponseTime).toBeLessThan(1000);
      expect(requestsPerSecond).toBeGreaterThan(5);
    }, 20000);

    it('debería recuperarse después de picos de tráfico intenso', async () => {
      console.log(`Iniciando prueba de picos de tráfico...`);
      
      // Fase 1: Tráfico normal
      const normalRequests = 10;
      let normalSuccessful = 0;

      for (let i = 0; i < normalRequests; i++) {
        try {
          await request(app.getHttpServer())
            .get('/test-ventas')
            .expect(200);
          normalSuccessful++;
        } catch (error) {
          // Ignorar errores
        }
      }

      // Fase 2: Pico de tráfico
      const peakRequests = 150;
      const peakPromises: Promise<any>[] = [];

      for (let i = 0; i < peakRequests; i++) {
        const promise = request(app.getHttpServer())
          .get('/test-ventas')
          .timeout(5000);
        peakPromises.push(promise);
      }

      const peakResults = await Promise.allSettled(peakPromises);
      const peakSuccessful = peakResults.filter(result => result.status === 'fulfilled').length;

      // Fase 3: Recuperación
      await new Promise(resolve => setTimeout(resolve, 2000));

      const recoveryRequests = 10;
      let recoverySuccessful = 0;

      for (let i = 0; i < recoveryRequests; i++) {
        try {
          await request(app.getHttpServer())
            .get('/test-ventas')
            .expect(200);
          recoverySuccessful++;
        } catch (error) {
          // Ignorar errores
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const normalRate = (normalSuccessful / normalRequests) * 100;
      const peakRate = (peakSuccessful / peakRequests) * 100;
      const recoveryRate = (recoverySuccessful / recoveryRequests) * 100;

      console.log(`Prueba de Picos de Tráfico:`);
      console.log(`- Tasa normal: ${normalRate.toFixed(2)}%`);
      console.log(`- Tasa en pico: ${peakRate.toFixed(2)}%`);
      console.log(`- Tasa de recuperación: ${recoveryRate.toFixed(2)}%`);

      expect(recoveryRate).toBeGreaterThanOrEqual(80);
      expect(peakRate).toBeGreaterThanOrEqual(50);
    }, 30000);
  });
});