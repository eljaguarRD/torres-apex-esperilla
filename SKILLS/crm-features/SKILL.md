---
name: crm-features
description: CRM development patterns. Kanban boards, lead management, chat interfaces, dashboards, and filter/search with URL state.
---

# CRM Features

> Load this skill when working with: NexusRD, Kanban boards, lead management, chat interfaces, dashboards, or CRM features.

---

## Kanban Board Pattern

```javascript
// Lead status columns
const KANBAN_COLUMNS = [
  { id: 'nuevo', label: 'Nuevo', color: '#6366f1' },
  { id: 'contactado', label: 'Contactado', color: '#f59e0b' },
  { id: 'interesado', label: 'Interesado', color: '#10b981' },
  { id: 'visitado', label: 'Visitado', color: '#8b5cf6' },
  { id: 'negociando', label: 'Negociando', color: '#ec4899' },
  { id: 'cerrado', label: 'Cerrado', color: '#22c55e' },
  { id: 'perdido', label: 'Perdido', color: '#ef4444' },
];
```

### Drag & Drop Status Update
```javascript
async function onDrop(leadId, newStatus) {
  // Optimistic UI update
  moveCardInBoard(leadId, newStatus);
  
  // Persist to database
  const { error } = await supabase
    .from('leads')
    .update({ status: newStatus, updated_at: new Date().toISOString() })
    .eq('id', leadId);
  
  if (error) {
    // Rollback on failure
    moveCardInBoard(leadId, previousStatus);
    showToast('Error al mover lead', 'error');
  }
}
```

---

## Chat Interface Patterns

### Key Rules
```
1. Only the message area scrolls, NOT the entire component
2. Auto-scroll to bottom on new messages
3. Show timestamps on every message
4. Show attempt counter for bot messages
5. Visual distinction: bot (left, dark) vs user (right, accent)
```

```css
/* Chat container — ONLY messages scroll */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  /* This is the ONLY scrollable area */
}

.chat-input {
  flex-shrink: 0; /* Never shrink */
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```

```javascript
// Auto-scroll to latest message
function scrollToBottom() {
  const container = document.querySelector('.chat-messages');
  container.scrollTop = container.scrollHeight;
}
```

---

## Dashboard Metric Cards

```html
<div class="metrics-grid">
  <div class="metric-card">
    <span class="metric-label">Leads Totales</span>
    <span class="metric-value" data-target="350">0</span>
    <span class="metric-change positive">+12% este mes</span>
  </div>
</div>
```

```css
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

---

## Filter/Search with URL State

```javascript
// Sync filters to URL (shareable, bookmarkable)
function updateURL(filters) {
  const params = new URLSearchParams();
  if (filters.status) params.set('status', filters.status);
  if (filters.project) params.set('project', filters.project);
  if (filters.search) params.set('q', filters.search);
  
  window.history.replaceState(null, '', `?${params.toString()}`);
}

// Read filters from URL on page load
function getFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  return {
    status: params.get('status') || '',
    project: params.get('project') || '',
    search: params.get('q') || ''
  };
}
```
