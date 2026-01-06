# TORRES APEX - NEURAL BRAIN 🧠

## Reglas de Oro del Proyecto

1.  **Estética Inmobiliaria Premium**: Fondo azul profundo (`#0c1839`) con acentos naranja (`#F97316`). Uso de `backdrop-blur` y animaciones de pulso para elementos de fondo.
2.  **Simplicidad de Datos**: Los datos de apartamentos y disponibilidad están hardcodeados para máxima velocidad de carga (Zero Latency).
3.  **Flujo de Conversión**: El objetivo principal es el `ContactModal`. Cualquier interacción debe facilitar el acceso al formulario.

## Arquitectura Técnica

- **Frontend**: React 18 + Vite + Tailwind CSS.
- **Navegación**: `react-router-dom` para `/` y `/thank-you`.
- **Formularios**: Envío vía POST a Google Apps Script con `Content-Type: text/plain`.

## Protocolo de Escaneo

- Consultar siempre `MEMORY.md` para ver el estado de las unidades vendidas/disponibles antes de modificar la `AvailabilityTable.tsx`.
