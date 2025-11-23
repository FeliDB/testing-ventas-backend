# Documentación de Casos de Prueba de Estrés

## Información General

**Proyecto**: Backend de Ventas (NestJS)  
**Framework de Pruebas**: Jest + Supertest  
**Tipo**: Pruebas de Estrés Automatizadas  
**Ubicación**: `src/stress-tests/`

---

## Caso de Prueba 1: Productos Stress Test

### Descripción
Evalúa el rendimiento del endpoint de productos bajo diferentes tipos de carga para identificar límites de capacidad y estabilidad del sistema.

### Archivo
`src/stress-tests/productos-stress.spec.ts`

### Escenarios de Prueba

#### 1.1 Carga Concurrente
- **Objetivo**: Verificar manejo de solicitudes simultáneas
- **Método**: 100 solicitudes concurrentes a `GET /productos`
- **Parámetros**: `page=1, limit=10`
- **Timeout**: 30 segundos

**Criterios de Aceptación**:
- ✅ Tasa de éxito ≥ 90%
- ✅ Tiempo promedio por solicitud < 1000ms
- ✅ Sin errores 5xx

#### 1.2 Carga Secuencial
- **Objetivo**: Medir estabilidad en solicitudes consecutivas
- **Método**: 50 solicitudes secuenciales con paginación
- **Parámetros**: Páginas variables (1-5), `limit=10`
- **Timeout**: 30 segundos

**Criterios de Aceptación**:
- ✅ Tiempo promedio de respuesta < 500ms
- ✅ Tiempo máximo de respuesta < 2000ms
- ✅ Rendimiento estable sin degradación

### Métricas Reportadas
- Solicitudes exitosas vs fallidas
- Tiempo total de ejecución
- Tiempo promedio por solicitud
- Tiempo mínimo/máximo de respuesta

---

## Caso de Prueba 2: Ventas Stress Test

### Descripción
Prueba la resistencia del sistema de ventas bajo cargas sostenidas y picos de tráfico, evaluando capacidad de recuperación.

### Archivo
`src/stress-tests/ventas-stress.spec.ts`

### Escenarios de Prueba

#### 2.1 Resistencia y Memoria
- **Objetivo**: Evaluar manejo de alta carga en lotes
- **Método**: 200 solicitudes en lotes de 20 a `GET /venta`
- **Pausa**: 100ms entre lotes
- **Timeout**: 60 segundos

**Criterios de Aceptación**:
- ✅ Tasa de éxito ≥ 95%
- ✅ Tiempo promedio por lote < 3000ms
- ✅ Sin degradación de memoria

#### 2.2 Carga Sostenida
- **Objetivo**: Verificar rendimiento bajo tráfico continuo
- **Método**: Solicitudes cada 50ms durante 15 segundos a `GET /venta/paginada`
- **Parámetros**: Paginación dinámica
- **Timeout**: 20 segundos

**Criterios de Aceptación**:
- ✅ Tasa de éxito ≥ 90%
- ✅ Tiempo promedio de respuesta < 1000ms
- ✅ Throughput ≥ 5 solicitudes/segundo

#### 2.3 Picos de Tráfico
- **Objetivo**: Evaluar recuperación después de picos intensos
- **Fases**:
  1. **Normal**: 10 solicitudes baseline
  2. **Pico**: 150 solicitudes simultáneas
  3. **Recuperación**: 10 solicitudes post-pico
- **Timeout**: 30 segundos

**Criterios de Aceptación**:
- ✅ Recuperación ≥ 80%
- ✅ Supervivencia en pico ≥ 50%
- ✅ Sistema funcional después del pico

### Métricas Reportadas
- Total de solicitudes procesadas
- Tasa de éxito por fase
- Solicitudes por segundo
- Tiempos de respuesta promedio/min/max
- Estadísticas de recuperación

---

## Comandos de Ejecución

```bash
# Todas las pruebas de estrés
npm run test:stress

# Solo pruebas de productos
npm run test:stress:productos

# Solo pruebas de ventas
npm run test:stress:ventas
```

---

## Configuración Técnica

### Parámetros Jest
- **Timeout global**: 60,000ms
- **Modo ejecución**: `runInBand` (secuencial)
- **Workers**: 1
- **Verbose**: true

### Dependencias
- `@nestjs/testing`
- `supertest`
- `jest`

---

## Interpretación de Resultados

### 🟢 Rendimiento Óptimo
- Tasa de éxito > 95%
- Tiempos de respuesta < 300ms
- Recuperación completa post-pico
- Throughput estable

### 🟡 Rendimiento Aceptable
- Tasa de éxito 85-95%
- Tiempos de respuesta 300-800ms
- Recuperación parcial
- Throughput variable

### 🔴 Rendimiento Deficiente
- Tasa de éxito < 85%
- Tiempos de respuesta > 1000ms
- Sin recuperación
- Throughput degradado

---

## Consideraciones de Ejecución

### Prerrequisitos
- Base de datos MySQL activa
- Servidor backend en funcionamiento
- Recursos del sistema disponibles

### Recomendaciones
- Ejecutar en entorno de pruebas aislado
- Monitorear uso de CPU y memoria
- Verificar logs del servidor durante ejecución
- Ejecutar fuera de horarios de producción

### Limitaciones
- Pruebas no incluyen autenticación
- No simula datos reales de gran volumen
- Limitado por recursos del hardware local