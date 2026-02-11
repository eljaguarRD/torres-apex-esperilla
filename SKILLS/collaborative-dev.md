---
name: Collaborative Development Protocol
description: Método estructurado IA-Humano para desarrollo con mínimos errores y máxima eficiencia.
---

# 🤝 SKILL: Collaborative Development Protocol

> Método de trabajo estructurado entre Agente IA y Humano para desarrollo de software con mínimos errores y máxima eficiencia.

---

## 🚨 REGLAS INAMOVIBLES

### 1. NO AUTO-DEPLOY A PRODUCCIÓN
El Agente **NUNCA** debe marcar `SafeToAutoRun: true` para:
- `git push`
- `ssh` hacia cualquier servidor
- `systemctl restart`
- Cualquier comando que afecte producción

**El Humano SIEMPRE debe ver el comando propuesto y dar "Continue".**

### 2. SI NO ENTIENDES, NO APRUEBES
> **Si no entiendes el cambio que el Agente propone, NO LO APRUEBES.**

Pregunta hasta que entiendas. Es mejor perder 2 minutos explicando que 2 horas debuggeando.

### 3. 🔴 ALTO = PAUSA OBLIGATORIA
Cuando el Agente marca un cambio como `🔴 ALTO`:
- **Detente y lee el diff completo.**
- **Pregunta qué podría salir mal.**
- **Ten el rollback listo antes de aprobar.**
- **Considera probar con un lead de test primero.**

---

## 📋 División de Responsabilidades

| Área | 🤖 Agente IA | 👤 Humano |
|------|-------------|-----------|
| **Investigación** | Lee codebase, busca patrones, entiende arquitectura | Da contexto de negocio, historia, "eso ya lo probamos" |
| **Planificación** | Propone solución, explica tradeoffs, muestra diagramas | Aprueba dirección, prioriza features, define "qué importa" |
| **Implementación** | Escribe código, edita archivos, crea componentes | Provee credenciales, accesos, variables de entorno |
| **Verificación Pre-Deploy** | `python -m py_compile`, linting, busca errores de sintaxis | - |
| **Deploy** | Git commit + push + SSH restart (CON APROBACIÓN) | Confirma "Continue" en cada paso de producción |
| **Testing Producción** | - | Pruebas con datos reales, reporta si algo falla |
| **Corrección** | Diagnostica error, propone fix, implementa | Describe síntoma ("dice X en vez de Y") |
| **Documentación** | Actualiza MEMORY, HANDOFF, EVOLUTION-LOG | Valida que el resumen sea correcto |

---

## 🔄 Flujo de Trabajo

```
1. HUMANO → Describe problema o feature
2. AGENTE → Investiga codebase (grep, read, list)
3. AGENTE → Propone solución con Blast Radius
4. HUMANO → Aprueba o corrige dirección
5. AGENTE → Implementa + Verifica Sintaxis + Propone Deploy
6. HUMANO → Aprueba Deploy (Continue)
7. HUMANO → Prueba en producción
8. SI ERROR → HUMANO reporta síntoma → AGENTE corrige → LOOP
9. AGENTE → Documenta aprendizaje (MEMORY, HANDOFF)
```

---

## 🎯 Blast Radius (Anotación Obligatoria)

Antes de implementar, el Agente DEBE anotar:

```markdown
### Cambio Propuesto
- **Archivos:** main.py, brain.py
- **Blast Radius:** 🔴 ALTO | 🟠 MEDIO | 🟢 BAJO
- **Rollback:** git checkout HEAD~1 -- main.py brain.py
- **Last Known Good:** commit abc123 (verificado funcionando)
```

| Nivel | Significado | Acción Humana |
|-------|-------------|---------------|
| 🟢 BAJO | Typo, comentario, formato | Aprobar sin stress |
| 🟠 MEDIO | Lógica secundaria, UI | Leer diff brevemente |
| 🔴 ALTO | Core logic, envío de mensajes, DB | **PAUSA. Leer todo. Tener rollback listo.** |

---

## 🛡️ Responsabilidades de Calidad del Agente

### 1. Nunca deploy sin verificar sintaxis
```bash
python -m py_compile archivo.py
# o para TypeScript
npx tsc --noEmit
```

### 2. Buscar TODAS las ocurrencias antes de fix
```bash
# Un bug en un lugar probablemente existe en otros
grep_search → encontrar todos los lugares afectados
```

### 3. Commits descriptivos
```bash
# BIEN:
git commit -m "fix: template order {{1}}=name, {{2}}=project

- Fixed in main.py (3 locations)
- Blast Radius: MEDIO"
```

### 4. Respetar código SAGRADO
Buscar `# 🛡️ SAGRADO` antes de modificar cualquier archivo. Si existe, pedir permiso explícito.

### 5. Explicar antes de implementar
Nunca cambiar sin que el humano entienda qué se va a hacer.

### 6. Documentar inmediatamente
- EVOLUTION-LOG para lecciones
- HANDOFF para estado actual
- MEMORY para historial cronológico

---

## 🎯 Responsabilidades del Humano

### 1. Testing en producción real
El agente NO puede ver WhatsApp, emails, notificaciones. Tú eres los "ojos" del sistema.

### 2. Reportar síntomas específicos
```
❌ MAL: "No funciona"
✅ BIEN: "Dice 'de nuestro Howard Luna' en vez del proyecto"
```

### 3. Contexto histórico
"Eso ya lo probamos en enero y causó spam"

### 4. Decisiones de negocio
Qué features importan más, qué clientes priorizar.

### 5. Correcciones de dirección
"El orden debe ser nombre, proyecto, agente"

---

## 🔧 Mapeo de Herramientas

| Concepto | Antigravity Tool |
|----------|------------------|
| Buscar en código | `grep_search` |
| Leer archivo | `view_file` |
| Editar archivo | `replace_file_content` |
| Crear archivo | `write_to_file` |
| Ejecutar comando | `run_command` |
| Listar directorio | `list_dir` |

---

## 📁 Metadata

- **Creado:** 2026-02-04
- **Versión:** 1.0
- **Aplicable a:** Cualquier workspace con Antigravity Template
