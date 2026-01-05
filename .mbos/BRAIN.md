# 🧠 Torres Apex - BRAIN.md

> Reglas permanentes y patrones validados para este proyecto.

---

## Identidad del Proyecto
- **Tipo:** Landing page inmobiliaria
- **Stack:** React 18 + Vite + Tailwind CSS
- **Objetivo:** Capturar leads para Torres Apex en La Esperilla

---

## 🎨 Convenciones de Código

### Componentes
- Usar `React.FC` con interfaces para props
- Nombres en PascalCase
- Un componente por archivo

### Estilos (Tailwind)
- **Color Primario:** `#F97316` (Naranja)
- **Color Fondo:** `#0c1839` (Azul oscuro)
- **Efectos:** `backdrop-blur-sm`, `bg-blue-900/50`

### Idioma
- Todo el contenido visible: **Español**
- Comentarios de código: Inglés o Español (consistente)

---

## 📡 Integraciones

### Google Apps Script (Formularios)
- Endpoint en `ContactModal.tsx`
- Content-Type: `text/plain` (evita preflight CORS)
- Redirección post-éxito: `/thank-you`

---

## 🔗 Conexión MBOS369

### Master Brain Location
```
c:\Users\howar\OneDrive\Desktop\master-brain
```

### Sync Protocol
Este proyecto contribuye aprendizajes a:
- `EVOLUTION-LOG.md` → Patrones de landing pages
- `PENDING_SYNCS.md` → Notificaciones de cambios

### Archivos de Memoria
- `.mbos/BRAIN.md` → Este archivo (reglas permanentes)
- `.mbos/MEMORY.md` → Log cronológico de sesiones
- `.mbos/HANDOFF.md` → Estado actual para continuidad

---

## 📍 Archivos Clave
| Archivo | Propósito |
|---------|-----------|
| `App.tsx` | Layout principal, gestión de modales |
| `types.ts` | Interfaces globales |
| `ApartmentTypesSection.tsx` | Data de tipos de apartamentos |
| `AvailabilityTable.tsx` | Tabla de unidades y precios |
| `ContactModal.tsx` | Formulario → Google Apps Script |

---

_Última actualización: Auto-generado al conectar con MBOS369_
