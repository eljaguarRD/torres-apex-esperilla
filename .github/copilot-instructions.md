# MBOS369 Commands

Este proyecto está conectado al ecosistema MBOS369. Los siguientes comandos son OBLIGATORIOS de ejecutar cuando el usuario los invoque:

## /neural scan
**Cuándo**: Inicio de sesión
**Acción**: 
1. Leer `.mbos/HANDOFF.md` para entender el estado actual
2. Leer `.mbos/MEMORY.md` para conocer decisiones pasadas
3. Resumir al usuario qué hay pendiente y qué se hizo antes

## /commit wisdom
**Cuándo**: Fin de sesión
**Acción**:
1. Actualizar `.mbos/MEMORY.md` agregando nuevos patrones aprendidos (NUNCA borrar contenido anterior)
2. Actualizar `.mbos/HANDOFF.md` con el estado actual para continuar mañana
3. Hacer `git add -A && git commit -m "🧠 /commit wisdom - [descripción]" && git push`
4. Confirmar al usuario que todo está guardado

## /handoff
**Cuándo**: Transferir contexto a otra sesión/persona
**Acción**: Mostrar resumen completo del estado actual basado en `.mbos/HANDOFF.md`

## /status check
**Cuándo**: Cualquier momento
**Acción**: Mostrar estado actual del proyecto y tareas pendientes

---

## Archivos de Memoria

```
.mbos/
├── BRAIN.md    # Reglas permanentes (solo agregar)
├── MEMORY.md   # Log de sesiones (NUNCA borrar)
└── HANDOFF.md  # Estado actual (reescribir cada sesión)
```

## Proyecto: Torres Apex Esperilla
- **Stack**: React + Vite + TypeScript + Tailwind
- **Función**: Landing page inmobiliaria para proyecto de apartamentos
- **Owner**: eljaguarRD
