---
name: whatsapp-bot-patterns
description: Conversational AI patterns for Laura AI. Message routing, YCloud API, template builders, conversation state, and multi-language support.
---

# WhatsApp Bot Patterns

> Load this skill when working with: Laura AI, WhatsApp messaging, YCloud API, conversation flows, or bot template management.

---

## Core Architecture

```
Incoming Message (YCloud Webhook)
  → Parse sender + message type
  → Identify project (by phone number or form ID)
  → Check conversation state
  → Generate response (Laura AI)
  → Send via YCloud API
  → Update lead status in CRM
```

## Key Rules (from flow-bot BRAIN.md)

```
# 🛡️ SAGRADO Rules:
1. NEVER change template parameters manually — use build_laura_bienvenida_params()
2. Zero Guesswork: Map by Form ID or Project Slug, never guess
3. All responses must be human-certified before new templates go live
4. Log every interaction for CRM tracking
```

---

## Template Parameter Builder Pattern

```python
# 🛡️ SAGRADO — Always use builder functions for templates
def build_laura_bienvenida_params(lead_name: str, project_name: str) -> dict:
    """Build WhatsApp template parameters for bienvenida flow."""
    return {
        "template": {
            "name": "bienvenida_laura",
            "language": {"code": "es"},
            "components": [
                {
                    "type": "body",
                    "parameters": [
                        {"type": "text", "text": lead_name},
                        {"type": "text", "text": project_name}
                    ]
                }
            ]
        }
    }
```

---

## Conversation State Management

```python
# States: new → greeted → engaged → qualified → handed_off
CONVERSATION_STATES = {
    "new": "First contact, send bienvenida template",
    "greeted": "Waiting for response to bienvenida",
    "engaged": "Active conversation, Laura responding",
    "qualified": "Lead shows buying intent, escalate to human",
    "handed_off": "Human agent took over, bot paused"
}
```

---

## Status Update on Reply

```python
# When client replies, auto-update CRM status
async def handle_incoming_message(message):
    lead = await get_lead_by_phone(message.from_number)
    if lead and lead.status == "nuevo":
        await update_lead_status(lead.id, "contactado")
        # Also track interaction
        await create_interaction(
            lead_id=lead.id,
            type="whatsapp",
            direction="inbound",
            content=message.text
        )
```

---

## Common Pitfalls

| Pitfall | Solution |
|---|---|
| Re-sending to already-contacted leads | Check status before sending |
| Template parameter count mismatch | Always use builder functions |
| Processing old/duplicate webhooks | Track message IDs, skip duplicates |
| Rate limiting on bulk sends | Queue with 1s delay between messages |
| Bot responding to human agent's messages | Check `handed_off` state before auto-reply |
