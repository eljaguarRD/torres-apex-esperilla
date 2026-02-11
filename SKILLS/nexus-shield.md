# SKILL: Nexus-Shield (Architectural Integrity)

## Description
This skill is the "Guardian" of Nexus CRM. Its sole purpose is to prevent regressions, file corruption, and accidental deletions.

## Core Rules
1. **No Refactor without Backup**: Before changing critical files (`main.py`, `database.py`), copy them to `.tmp/backups/`.
2. **Layer Consistency**: Ensure that business logic stays in `execution/` and never leaks into `directives/`.
3. **Dependency Audit**: Every new script must be checked for circular imports.
4. **Verification First**: Never mark a task as done without running the `execution/integrity_check.py` script.

## Audit Protocol
When called, the agent must:
1. Scan the project root for missing core files.
2. Check `MEMORY.md` to see if a current issue was already fixed in the past (to avoid loops).
3. Validate that UI changes follow the [Nexus-UI](file:///c:/Users/howar/Desktop/Antigravity%20Template/SKILLS/nexus-ui.md) standard.
