# Pruebas de Estrés - Backend de Ventas

Este directorio contiene pruebas de estrés automatizadas para el backend de ventas usando Jest.

## Casos de Prueba Implementados

### 1. Productos Stress Test (`productos-stress.spec.ts`)

**Objetivo**: Evaluar el rendimiento del endpoint de productos bajo diferentes cargas.

**Escenarios**:
- **Carga Concurrente**: 100 solicitudes simultáneas al endpoint `/productos`
- **Carga Secuencial**: 50 solicitudes consecutivas para medir estabilidad

**Métricas evaluadas**:
- Tasa de éxito (≥90% esperado)
- Tiempo promedio de respuesta (<500ms)
- Tiempo máximo de respuesta (<2s)

### 2. Ventas Stress Test (`ventas-stress.spec.ts`)

**Objetivo**: Probar la resistencia y recuperación del sistema de ventas.

**Escenarios**:
- **Resistencia y Memoria**: 200 solicitudes en lotes de 20
- **Carga Sostenida**: Solicitudes continuas durante 15 segundos
- **Picos de Tráfico**: Simulación de tráfico normal → pico → recuperación

**Métricas evaluadas**:
- Tasa de éxito (≥95% en resistencia, ≥90% en carga sostenida)
- Solicitudes por segundo (≥5 req/s)
- Capacidad de recuperación después de picos

## Comandos de Ejecución

```bash
# Ejecutar todas las pruebas de estrés
npm run test:stress

# Ejecutar solo pruebas de productos
npm run test:stress:productos

# Ejecutar solo pruebas de ventas
npm run test:stress:ventas
```

## Configuración

- **Timeout**: 60 segundos por prueba
- **Ejecución**: Secuencial (runInBand) para evitar interferencias
- **Workers**: 1 para control preciso de recursos

## Interpretación de Resultados

### Indicadores de Rendimiento Saludable:
- ✅ Tasa de éxito >90%
- ✅ Tiempo de respuesta promedio <500ms
- ✅ Recuperación exitosa después de picos
- ✅ Rendimiento estable en cargas sostenidas

### Señales de Alerta:
- ❌ Tasa de éxito <80%
- ❌ Tiempos de respuesta >1s consistentemente
- ❌ Degradación progresiva del rendimiento
- ❌ Falta de recuperación después de picos

## Notas Importantes

1. **Base de Datos**: Asegúrate de que la base de datos esté disponible antes de ejecutar las pruebas
2. **Recursos**: Las pruebas consumen recursos del sistema, ejecutar en entorno de pruebas
3. **Monitoreo**: Observa el uso de CPU y memoria durante la ejecución
4. **Configuración**: Ajusta los parámetros según las capacidades de tu hardware