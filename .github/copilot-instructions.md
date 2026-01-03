# Copilot Instructions - Torres Apex Esperilla

## Descripción del Proyecto
Landing page de bienes raíces para promocionar apartamentos en La Esperilla, Santo Domingo. Es un sitio estático React/Vite con formulario de contacto conectado a Google Apps Script.

## Stack Tecnológico
- **Framework**: React 18 + TypeScript + Vite
- **Estilos**: Tailwind CSS con tema oscuro (`#0c1839` como color base)
- **Routing**: React Router DOM v6
- **Backend**: Google Apps Script (para formularios)

## Comandos de Desarrollo
```bash
npm install    # Instalar dependencias
npm run dev    # Servidor de desarrollo (Vite)
npm run build  # Build de producción
npm run preview # Preview del build
```

## Arquitectura y Estructura

### Punto de Entrada
- [index.tsx](../index.tsx) → monta `<App />` en el DOM
- [App.tsx](../App.tsx) → configura React Router con rutas `/` y `/thank-you`

### Componentes Principales (en `components/`)
| Componente | Propósito |
|------------|-----------|
| `Header.tsx` | Hero con título y descripción del proyecto |
| `LocationSection.tsx` | Galería de imágenes con `ImageCarousel` |
| `ApartmentTypesSection.tsx` | Grid de tipos de apartamentos (A-G) |
| `AmenitiesSection.tsx` | Lista de amenidades del edificio |
| `AvailabilityTable.tsx` | Tabla de unidades disponibles con precios |
| `ContactSection.tsx` + `ContactModal.tsx` | Formulario de contacto |
| `SideMenu.tsx` + `MenuButton.tsx` | Navegación móvil tipo drawer |

### Patrones de Datos
- Los tipos se definen en [types.ts](../types.ts): `ApartmentType`, `AvailabilityUnit`
- Los datos de apartamentos están hardcodeados en `ApartmentTypesSection.tsx` y `AvailabilityTable.tsx`
- Las imágenes usan URLs externas de `postimg.cc`

## Convenciones de Código

### Componentes React
```tsx
// Patrón estándar: React.FC con interface Props
interface ComponentNameProps {
  prop: Type;
  onAction: () => void;
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop, onAction }) => {
  // ...
};

export default ComponentName;
```

### Estilos con Tailwind
- **Color primario**: `#F97316` (naranja) para CTAs, títulos y acentos
- **Fondo base**: `#0c1839` (azul oscuro)
- **Fondos secundarios**: `bg-blue-900/50`, `bg-blue-900/30` con backdrop-blur
- **Bordes decorativos**: `border-[#F97316]/50`, `border-blue-700/50`
- **Tipografía**: `font-sans` (Inter) para cuerpo, `font-serif` (Playfair Display) para headings

### Modales
- Usan overlay con `bg-black/80 backdrop-blur-sm`
- Implementan cierre con tecla Escape via `useEffect`
- Bloquean scroll del body cuando están abiertos (manejado en `App.tsx`)

## Integraciones Externas

### Google Apps Script (Formulario de Contacto)
El formulario en `ContactModal.tsx` envía datos a:
```
SCRIPT_URL = 'https://script.google.com/macros/s/.../exec'
```
- Método: POST con `Content-Type: text/plain`
- Payload: `{ name, email, phone }`
- Redirige a `/thank-you.html` en éxito

## Notas Importantes
- El contenido está en español (mercado dominicano)
- Las imágenes están hosteadas externamente - no hay assets locales
- Existe `public/thank-you.html` como fallback estático además del componente React
- El proyecto fue generado originalmente con AI Studio (ver README)
