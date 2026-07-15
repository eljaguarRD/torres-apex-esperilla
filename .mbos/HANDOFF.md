# Handoff
Estado actual: Se completaron las siguientes tareas:
1. Remoción del plano en el modal de unidades (`ApartmentModal.tsx`).
2. Actualización de precios según la lista provista (`ApartmentTypesSection.tsx` y `AvailabilityTable.tsx`).
3. Refactorización del Lightbox modal de amenidades, moviendo su estado y renderizado a la raíz (`App.tsx`) para solucionar un conflicto de CSS con el contenedor que tiene `transform` y evitar que la imagen o el botón de cerrar desaparezcan al bloquear el scroll del body.
Pendiente: Esperar validación del usuario sobre el comportamiento del Lightbox.
