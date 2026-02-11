---
description: Git operations (push, pull, status, log) and VPS SSH commands. Use when you need to run git or ssh commands.
---

# 🛡️ SAGRADO — Git & VPS Operations Workflow

> **THIS FILE IS SACRED. NEVER DELETE. NEVER OVERWRITE. ONLY APPEND.**

## ⚠️ CRITICAL: Terminal Workaround

The `run_command` tool on Windows **does not properly inject commands** into cmd.exe. Commands appear to hang.

**THE FIX:** Open a blank shell, then send commands via `send_command_input`.

## Step 1: Open a persistent shell

```
run_command("cmd /k", Cwd="<project_dir>", SafeToAutoRun=true, WaitMsBeforeAsync=2000)
```
// turbo

Save the returned `CommandId` — you'll reuse it for ALL subsequent commands.

## Step 2: Send commands via send_command_input

```
send_command_input(CommandId=<id>, Input="git status\n", SafeToAutoRun=true, WaitMs=5000)
```
// turbo

## Common Operations

### Git Status
```
send_command_input(CommandId=<id>, Input="git status\n", WaitMs=5000)
```
// turbo

### Git Add + Commit + Push
```
send_command_input(CommandId=<id>, Input="git add -A && git commit -m \"<message>\" && git push\n", WaitMs=15000)
```

### Git Pull
```
send_command_input(CommandId=<id>, Input="git pull origin <branch>\n", WaitMs=10000)
```
// turbo

### Git Log
```
send_command_input(CommandId=<id>, Input="git log --oneline -5\n", WaitMs=5000)
```
// turbo

### Change Directory
```
send_command_input(CommandId=<id>, Input="cd <path>\n", WaitMs=2000)
```
// turbo

### SSH to VPS
```
send_command_input(CommandId=<id>, Input="ssh -o StrictHostKeyChecking=no -o BatchMode=yes root@168.231.72.15 \"<command>\"\n", WaitMs=10000)
```

### VPS: Deploy flow-bot
```
send_command_input(CommandId=<id>, Input="ssh -o StrictHostKeyChecking=no -o BatchMode=yes root@168.231.72.15 \"cd /root/flow-bot && git fetch origin && git reset --hard origin/main && systemctl restart flow-bot\"\n", WaitMs=30000)
```

### VPS: Check service status
```
send_command_input(CommandId=<id>, Input="ssh -o StrictHostKeyChecking=no -o BatchMode=yes root@168.231.72.15 \"systemctl status flow-bot --no-pager | head -10\"\n", WaitMs=10000)
```
// turbo

### VPS: View recent logs
```
send_command_input(CommandId=<id>, Input="ssh -o StrictHostKeyChecking=no -o BatchMode=yes root@168.231.72.15 \"journalctl -u flow-bot -n 30 --no-pager\"\n", WaitMs=10000)
```
// turbo

## Repo Reference

| Project | Local Path | Branch | Owner/Repo |
|---|---|---|---|
| flow-bot | c:\Users\howar\Desktop\flow-bot | main | lunacodeabit/flow-bot |
| nexusrd | c:\Users\howar\Desktop\nexusrd | master | lunacodeabit/nexusrd |
| torres-apex | c:\Users\howar\Desktop\APPS\LANDING PAGES\torres-apex-esperilla | main | eljaguarRD/torres-apex-esperilla |
| bonitabeach | c:\Users\howar\Desktop\APPS\LANDING PAGES\bonitabeach | main | lunacodeabit/bonitabeach |
| master-brain | c:\Users\howar\Desktop\master-brain | main | lunacodeabit/master-brain |
| antigravity-template | c:\Users\howar\Desktop\Antigravity Template | main | lunacodeabit/antigravity-template |

## VPS Reference

| Host | IP | User | Service |
|---|---|---|---|
| Hostinger VPS | 168.231.72.15 | root | flow-bot |
