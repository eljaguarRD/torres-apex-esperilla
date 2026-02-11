---
name: supabase-patterns
description: Supabase architecture expert. RLS policies, schema design for CRM/real estate, Edge Functions, real-time, auth flows, migrations, and query optimization.
---

# Supabase Patterns

> Load this skill when working with: database schemas, RLS policies, Edge Functions, auth, real-time subscriptions, or any Supabase backend task.

---

## Schema Design Patterns

### CRM / Real Estate Schema

```sql
-- Core tables for a real estate CRM (NexusRD pattern)
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  location TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual', 'whatsapp', 'web', 'email', 'referral')),
  status TEXT DEFAULT 'nuevo' CHECK (status IN ('nuevo', 'contactado', 'interesado', 'visitado', 'negociando', 'cerrado', 'perdido')),
  assigned_to UUID REFERENCES auth.users(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('call', 'whatsapp', 'email', 'visit', 'note')),
  content TEXT,
  direction TEXT CHECK (direction IN ('inbound', 'outbound')),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

---

## RLS Policy Patterns

### Pattern 1: User sees their own data
```sql
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Users see only leads assigned to them
CREATE POLICY "Users see own leads" ON public.leads
  FOR SELECT USING (assigned_to = auth.uid());

-- Users can insert leads (auto-assign)
CREATE POLICY "Users insert leads" ON public.leads
  FOR INSERT WITH CHECK (assigned_to = auth.uid());

-- Users can update their own leads
CREATE POLICY "Users update own leads" ON public.leads
  FOR UPDATE USING (assigned_to = auth.uid());
```

### Pattern 2: Admin sees everything
```sql
-- Admin role sees all data
CREATE POLICY "Admin full access" ON public.leads
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### Pattern 3: Public read, auth write
```sql
-- Anyone can read projects
CREATE POLICY "Public read projects" ON public.projects
  FOR SELECT USING (true);

-- Only authenticated users can modify
CREATE POLICY "Auth users modify" ON public.projects
  FOR ALL USING (auth.uid() IS NOT NULL);
```

### Pattern 4: Service role bypass (for Edge Functions)
```sql
-- Edge Functions using service_role key bypass RLS automatically
-- No policy needed — but ALWAYS validate in the function itself
```

---

## Edge Function Patterns

### Webhook Handler
```typescript
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

Deno.serve(async (req: Request) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const body = await req.json();
    
    // Process webhook payload
    const { data, error } = await supabase
      .from('leads')
      .insert({ name: body.name, phone: body.phone })
      .select()
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
```

---

## Migration Best Practices

```sql
-- ✅ SAFE: Add column with default (no table lock)
ALTER TABLE public.leads ADD COLUMN priority TEXT DEFAULT 'normal';

-- ✅ SAFE: Add index concurrently (no blocking)
CREATE INDEX CONCURRENTLY idx_leads_status ON public.leads(status);

-- ❌ UNSAFE: Rename column (breaks existing queries)
-- ALTER TABLE public.leads RENAME COLUMN phone TO phone_number;
-- Instead: add new column → migrate data → update app → drop old column

-- ✅ SAFE: Add constraint with NOT VALID + validate separately
ALTER TABLE public.leads ADD CONSTRAINT leads_email_check 
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$') NOT VALID;
ALTER TABLE public.leads VALIDATE CONSTRAINT leads_email_check;
```

---

## Real-Time Subscriptions

```typescript
// Listen for new leads in real-time (Kanban board)
const channel = supabase
  .channel('leads-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'leads' },
    (payload) => {
      if (payload.eventType === 'INSERT') addLeadToBoard(payload.new);
      if (payload.eventType === 'UPDATE') updateLeadOnBoard(payload.new);
      if (payload.eventType === 'DELETE') removeLeadFromBoard(payload.old);
    }
  )
  .subscribe();

// Cleanup
// channel.unsubscribe();
```

---

## Query Optimization

```sql
-- ✅ Use indexes for filtered queries
CREATE INDEX idx_leads_project_status ON public.leads(project_id, status);

-- ✅ Select only needed columns
SELECT id, name, status FROM leads WHERE project_id = $1;
-- NOT: SELECT * FROM leads WHERE project_id = $1;

-- ✅ Use pagination with cursor (not offset)
SELECT * FROM leads 
WHERE created_at < $cursor 
ORDER BY created_at DESC 
LIMIT 20;

-- ✅ Use count estimate for large tables
SELECT reltuples::bigint AS estimate 
FROM pg_class WHERE relname = 'leads';
```

---

## Security Checklist

- [ ] RLS enabled on ALL public tables
- [ ] Service role key NEVER exposed to client
- [ ] Anon key used only for public-safe operations
- [ ] Edge Functions validate input before processing
- [ ] No `SELECT *` in client queries (expose minimum data)
- [ ] Run `get_advisors(security)` after schema changes
- [ ] Sensitive columns excluded from API (use views)
