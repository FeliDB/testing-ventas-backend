import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../app.module';

describe('Productos Stress Test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /productos - Prueba de Carga Concurrente', () => {
    it('debería manejar 100 solicitudes concurrentes sin fallar', async () => {
      const concurrentRequests = 100;
      const promises: Promise<any>[] = [];

      // Crear 100 solicitudes concurrentes
      for (let i = 0; i < concurrentRequests; i++) {
        const promise = request(app.getHttpServer())
          .get('/productos')
          .query({ page: 1, limit: 10 })
          .expect((res) => {
            expect(res.status).toBeLessThan(500);
          });
        promises.push(promise);
      }

      const startTime = Date.now();
      const results = await Promise.allSettled(promises);
      const endTime = Date.now();
      const duration = endTime - startTime;

      // Verificar que todas las solicitudes se completaron
      const successful = results.filter(result => result.status === 'fulfilled').length;
      const failed = results.filter(result => result.status === 'rejected').length;

      console.log(`Prueba de Productos - Estadísticas:`);
      console.log(`- Solicitudes exitosas: ${successful}/${concurrentRequests}`);
      console.log(`- Solicitudes fallidas: ${failed}/${concurrentRequests}`);
      console.log(`- Tiempo total: ${duration}ms`);
      console.log(`- Promedio por solicitud: ${(duration / concurrentRequests).toFixed(2)}ms`);

      // Al menos 90% de las solicitudes deben ser exitosas
      expect(successful).toBeGreaterThanOrEqual(concurrentRequests * 0.9);
      // El tiempo promedio por solicitud no debe exceder 1 segundo
      expect(duration / concurrentRequests).toBeLessThan(1000);
    }, 30000);

    it('debería mantener rendimiento estable con solicitudes secuenciales', async () => {
      const sequentialRequests = 50;
      const responseTimes: number[] = [];

      for (let i = 0; i < sequentialRequests; i++) {
        const startTime = Date.now();
        
        await request(app.getHttpServer())
          .get('/productos')
          .query({ page: Math.floor(i / 10) + 1, limit: 10 })
          .expect((res) => {
            expect(res.status).toBeLessThan(500);
          });

        const endTime = Date.now();
        responseTimes.push(endTime - startTime);
      }

      const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
      const maxResponseTime = Math.max(...responseTimes);
      const minResponseTime = Math.min(...responseTimes);

      console.log(`Prueba Secuencial de Productos - Estadísticas:`);
      console.log(`- Tiempo promedio de respuesta: ${avgResponseTime.toFixed(2)}ms`);
      console.log(`- Tiempo máximo de respuesta: ${maxResponseTime}ms`);
      console.log(`- Tiempo mínimo de respuesta: ${minResponseTime}ms`);

      // El tiempo promedio no debe exceder 500ms
      expect(avgResponseTime).toBeLessThan(500);
      // El tiempo máximo no debe exceder 2 segundos
      expect(maxResponseTime).toBeLessThan(2000);
    }, 30000);
  });
});