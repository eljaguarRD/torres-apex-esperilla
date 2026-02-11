---
name: n8n-workflow-architect
description: Automation flow designer for n8n. Webhook patterns, error handling, WhatsApp/YCloud integration, lead pipelines, and testing strategies.
---

# n8n Workflow Architect

> Load this skill when working with: n8n workflows, webhooks, automation flows, WhatsApp integration, or any API orchestration.

---

## Workflow Architecture Patterns

### Pattern 1: Webhook → Process → Notify
```
[Webhook] → [Validate Input] → [Process Data] → [Store in DB] → [Send Notification]
                  ↓ (invalid)
            [Log Error] → [Alert Admin]
```

### Pattern 2: Email → Parse → CRM → Bot
```
[Email Trigger] → [Extract Fields] → [Match Project] → [Create Lead in Supabase]
                                                              ↓
                                                    [Trigger Laura AI via WhatsApp]
```

---

## Error Handling (MANDATORY)

```
Every workflow MUST have:
1. Try/Catch around critical nodes
2. Error output → Logging node
3. Retry logic for API calls (3 attempts, exponential backoff)
4. Dead-letter queue for permanently failed items
5. Admin notification on repeated failures
```

### Retry Configuration
```json
{
  "retryOnFail": true,
  "maxTries": 3,
  "waitBetweenTries": 5000,
  "continueOnFail": false
}
```

---

## WhatsApp / YCloud Integration

### Send Message via YCloud API
```
Node: HTTP Request
Method: POST
URL: https://api.ycloud.com/v2/whatsapp/messages
Headers:
  X-API-Key: {{$env.YCLOUD_API_KEY}}
  Content-Type: application/json
Body:
{
  "from": "{{$env.WHATSAPP_FROM}}",
  "to": "{{$json.phone}}",
  "type": "template",
  "template": {
    "name": "bienvenida_laura",
    "language": { "code": "es" },
    "components": [
      {
        "type": "body",
        "parameters": [
          { "type": "text", "text": "{{$json.name}}" }
        ]
      }
    ]
  }
}
```

### Common YCloud Errors
| Error | Cause | Fix |
|---|---|---|
| `Authorization failed` | Missing X-API-Key header | Check credential node, ensure header is `X-API-Key` not `Authorization: Bearer` |
| `Rate limit exceeded` | Too many messages/second | Add 1s delay between sends |
| `Invalid phone number` | Wrong format | Ensure E.164 format: +1XXXXXXXXXX |
| `Template not found` | Template name mismatch | Verify exact template name in YCloud dashboard |

---

## Testing Workflows Safely

```
1. ALWAYS use a test webhook URL during development
2. Use "Execute Workflow" button (not production triggers)
3. Create test data nodes with sample payloads
4. Check execution logs after each test run
5. Only activate production trigger after full test pass
```

### Test Data Template
```json
{
  "test": true,
  "name": "Test User",
  "phone": "+18091234567",
  "email": "test@example.com",
  "project_slug": "torres-apex",
  "source": "manual"
}
```

---

## Credential Management

```
RULES:
- Never hardcode API keys in workflow nodes
- Use n8n credential store for all secrets
- Separate credentials per environment (test vs production)
- Rotate keys periodically
- Credential names convention: [Service]_[Environment]
  e.g., YCloud_Production, Supabase_Test
```

---

## Monitoring Checklist

- [ ] All workflows have error handling branches
- [ ] Admin receives email/WhatsApp on workflow failure
- [ ] Execution history retention set (keep 30 days)
- [ ] No sensitive data in workflow logs
- [ ] Webhook URLs are unique per workflow (no reuse)
