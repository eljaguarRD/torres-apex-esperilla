---
name: vps-deployment
description: Server deployment expert. SSH commands, systemctl service management, GitHub Actions CI/CD, log diagnosis, rollback procedures, and health checks.
---

# VPS Deployment Expert

> Load this skill when working with: VPS deployments, SSH, systemctl, CI/CD, server logs, or any production server management.

---

## Deployment Commands (Quick Reference)

### Standard Deploy Flow
```bash
# 1. Push to GitHub (local)
git add -A && git commit -m "feat: description" && git push

# 2. Deploy to VPS (SSH)
ssh root@168.231.72.15 "cd /root/flow-bot && git pull && systemctl restart flow-bot"

# 3. Verify service status
ssh root@168.231.72.15 "systemctl status flow-bot"

# 4. Check logs for errors
ssh root@168.231.72.15 "journalctl -u flow-bot -n 50 --no-pager"
```

---

## Service Management

```bash
# Check status
systemctl status flow-bot

# Restart service
systemctl restart flow-bot

# View recent logs
journalctl -u flow-bot -n 100 --no-pager

# Follow logs in real-time
journalctl -u flow-bot -f

# View logs since specific time
journalctl -u flow-bot --since "2026-02-11 08:00" --no-pager

# Check if service is enabled on boot
systemctl is-enabled flow-bot
```

---

## Log Diagnosis Patterns

### Error Categorization
| Log Pattern | Likely Cause | Fix |
|---|---|---|
| `ModuleNotFoundError` | Missing dependency | `pip install -r requirements.txt` |
| `Attribute 'app' not found` | Import path wrong or env issue | Check `main.py` entry point, verify PYTHONPATH |
| `Connection refused` | Service not running or port blocked | `systemctl status`, check firewall |
| `ECONNREFUSED` (Node.js) | Target service unreachable | Verify target host/port, check DNS |
| `PermissionError` | File permissions | `chown -R root:root /root/flow-bot` |
| `Address already in use` | Port conflict | `lsof -i :PORT`, kill conflicting process |

### Quick Debug Script
```bash
#!/bin/bash
echo "=== Service Status ==="
systemctl status flow-bot --no-pager

echo "=== Last 20 Log Lines ==="
journalctl -u flow-bot -n 20 --no-pager

echo "=== Disk Space ==="
df -h /

echo "=== Memory ==="
free -h

echo "=== Port Check ==="
ss -tlnp | grep -E '(8000|3000|5000)'
```

---

## Rollback Procedure

```bash
# 1. Identify last working commit
git log --oneline -10

# 2. Revert to specific commit
git revert HEAD  # Revert last commit (creates new commit)
# OR
git reset --hard <commit-hash>  # Hard reset (loses changes)

# 3. Restart service
systemctl restart flow-bot

# 4. Verify
journalctl -u flow-bot -n 20 --no-pager
```

---

## GitHub Actions CI/CD Template

```yaml
name: Deploy to VPS
on:
  push:
    branches: [main]
    paths:
      - 'flow-bot/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: root
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /root/flow-bot
            git pull origin main
            pip install -r requirements.txt
            systemctl restart flow-bot
            sleep 3
            systemctl is-active flow-bot
```

---

## Firewall Rules (Hostinger Cloud Firewall)

```
Required open ports:
- 22 (SSH) — restrict to your IP if possible
- 80 (HTTP) — for web services
- 443 (HTTPS) — for secure web services
- 8000 (FastAPI) — if direct access needed

NEVER expose:
- Database ports (5432 PostgreSQL)
- Redis ports (6379)
- Admin panels without auth
```

---

## Pre-Deploy Checklist

- [ ] Code committed and pushed to GitHub
- [ ] No syntax errors (`python -m py_compile main.py`)
- [ ] Environment variables set on VPS (.env file)
- [ ] Dependencies up to date (requirements.txt / package.json)
- [ ] Service file correct (`/etc/systemd/system/flow-bot.service`)
- [ ] Rollback plan ready (know last working commit)
- [ ] Log monitoring active during deploy
