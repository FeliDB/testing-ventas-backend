import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { VentaController } from '../controller/venta.controller';
import { VentaService } from '../service/venta.service';

// Mock del servicio para evitar dependencias de base de datos
const mockVentaService = {
  getVentaService: jest.fn().mockResolvedValue([]),
  getVentaPaginadaService: jest.fn().mockResolvedValue({ data: [], total: 0 }),
  getVentaByIdService: jest.fn().mockResolvedValue({}),
};

describe('Ventas Stress Test - Simplified', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [VentaController],
      providers: [
        {
          provide: VentaService,
          useValue: mockVentaService,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /venta - Prueba de Resistencia y Memoria', () => {
    it('debería manejar múltiples consultas de ventas sin degradación', async () => {
      const iterations = 200;
      const batchSize = 20;
      const batches = Math.ceil(iterations / batchSize);
      
      let totalSuccessful = 0;
      let totalFailed = 0;
      const batchTimes: number[] = [];

      for (let batch = 0; batch < batches; batch++) {
        const batchStartTime = Date.now();
        const promises: Promise<any>[] = [];

        // Crear lote de solicitudes concurrentes
        for (let i = 0; i < batchSize && (batch * batchSize + i) < iterations; i++) {
          const promise = request(app.getHttpServer())
            .get('/venta')
            .expect((res) => {
              expect(res.status).toBeLessThan(500);
            });
          promises.push(promise);
        }

        const results = await Promise.allSettled(promises);
        const batchEndTime = Date.now();
        
        const successful = results.filter(result => result.status === 'fulfilled').length;
        const failed = results.filter(result => result.status === 'rejected').length;
        
        totalSuccessful += successful;
        totalFailed += failed;
        batchTimes.push(batchEndTime - batchStartTime);

        // Pequeña pausa entre lotes para simular uso real
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const avgBatchTime = batchTimes.reduce((a, b) => a + b, 0) / batchTimes.length;
      const successRate = (totalSuccessful / iterations) * 100;

      console.log(`Prueba de Resistencia de Ventas - Estadísticas:`);
      console.log(`- Total de solicitudes: ${iterations}`);
      console.log(`- Solicitudes exitosas: ${totalSuccessful}`);
      console.log(`- Solicitudes fallidas: ${totalFailed}`);
      console.log(`- Tasa de éxito: ${successRate.toFixed(2)}%`);
      console.log(`- Tiempo promedio por lote: ${avgBatchTime.toFixed(2)}ms`);

      // Al menos 95% de éxito esperado
      expect(successRate).toBeGreaterThanOrEqual(95);
      // Tiempo promedio por lote no debe exceder 3 segundos
      expect(avgBatchTime).toBeLessThan(3000);
    }, 60000);

    it('debería manejar consultas paginadas bajo carga sostenida', async () => {
      const duration = 15000; // 15 segundos de prueba
      const requestInterval = 50; // Una solicitud cada 50ms
      const startTime = Date.now();
      
      let requestCount = 0;
      let successCount = 0;
      let errorCount = 0;
      const responseTimes: number[] = [];

      while (Date.now() - startTime < duration) {
        const requestStartTime = Date.now();
        const page = Math.floor(requestCount / 10) + 1;
        
        try {
          await request(app.getHttpServer())
            .get('/venta/paginada')
            .query({ page, limit: 10 })
            .expect((res) => {
              expect(res.status).toBeLessThan(500);
            });
          
          successCount++;
          const responseTime = Date.now() - requestStartTime;
          responseTimes.push(responseTime);
        } catch (error) {
          errorCount++;
        }
        
        requestCount++;
        
        // Esperar antes de la siguiente solicitud
        await new Promise(resolve => setTimeout(resolve, requestInterval));
      }

      const actualDuration = Date.now() - startTime;
      const requestsPerSecond = (requestCount / actualDuration) * 1000;
      const avgResponseTime = responseTimes.length > 0 
        ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length 
        : 0;
      const successRate = (successCount / requestCount) * 100;

      console.log(`Prueba de Carga Sostenida de Ventas - Estadísticas:`);
      console.log(`- Duración real: ${actualDuration}ms`);
      console.log(`- Total de solicitudes: ${requestCount}`);
      console.log(`- Solicitudes exitosas: ${successCount}`);
      console.log(`- Errores: ${errorCount}`);
      console.log(`- Solicitudes por segundo: ${requestsPerSecond.toFixed(2)}`);
      console.log(`- Tiempo promedio de respuesta: ${avgResponseTime.toFixed(2)}ms`);
      console.log(`- Tasa de éxito: ${successRate.toFixed(2)}%`);

      // Verificaciones de rendimiento
      expect(successRate).toBeGreaterThanOrEqual(90);
      expect(avgResponseTime).toBeLessThan(1000);
      expect(requestsPerSecond).toBeGreaterThan(5); // Al menos 5 req/s
    }, 20000);
  });

  describe('Prueba de Picos de Tráfico', () => {
    it('debería recuperarse después de picos de tráfico intenso', async () => {
      // Fase 1: Tráfico normal
      console.log('Iniciando fase de tráfico normal...');
      const normalRequests = 10;
      let normalSuccessful = 0;

      for (let i = 0; i < normalRequests; i++) {
        try {
          await request(app.getHttpServer())
            .get('/venta')
            .expect((res) => expect(res.status).toBeLessThan(500));
          normalSuccessful++;
        } catch (error) {
          // Ignorar errores en esta fase
        }
      }

      // Fase 2: Pico de tráfico
      console.log('Iniciando pico de tráfico...');
      const peakRequests = 150;
      const peakPromises: Promise<any>[] = [];

      for (let i = 0; i < peakRequests; i++) {
        const promise = request(app.getHttpServer())
          .get('/venta')
          .timeout(5000);
        peakPromises.push(promise);
      }

      const peakResults = await Promise.allSettled(peakPromises);
      const peakSuccessful = peakResults.filter(result => result.status === 'fulfilled').length;

      // Fase 3: Recuperación
      console.log('Verificando recuperación...');
      await new Promise(resolve => setTimeout(resolve, 2000)); // Pausa para recuperación

      const recoveryRequests = 10;
      let recoverySuccessful = 0;

      for (let i = 0; i < recoveryRequests; i++) {
        try {
          await request(app.getHttpServer())
            .get('/venta')
            .expect((res) => expect(res.status).toBeLessThan(500));
          recoverySuccessful++;
        } catch (error) {
          // Ignorar errores en esta fase
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      const normalRate = (normalSuccessful / normalRequests) * 100;
      const peakRate = (peakSuccessful / peakRequests) * 100;
      const recoveryRate = (recoverySuccessful / recoveryRequests) * 100;

      console.log(`Prueba de Picos de Tráfico - Estadísticas:`);
      console.log(`- Tasa normal: ${normalRate.toFixed(2)}%`);
      console.log(`- Tasa en pico: ${peakRate.toFixed(2)}%`);
      console.log(`- Tasa de recuperación: ${recoveryRate.toFixed(2)}%`);

      // El sistema debe recuperarse bien después del pico
      expect(recoveryRate).toBeGreaterThanOrEqual(80);
      // Durante el pico, al menos 50% debe funcionar
      expect(peakRate).toBeGreaterThanOrEqual(50);
    }, 30000);
  });
});