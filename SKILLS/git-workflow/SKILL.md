---
name: git-workflow
description: Version control mastery. Branch strategy, commit conventions, MBOS369 wisdom commits, conflict resolution, and PR workflows.
---

# Git Workflow

> Load this skill when working with: git operations, branching, merging, conflict resolution, or CI/CD pipelines.

---

## Commit Message Convention

```
Format: <emoji> <type>: <description>

Types:
  🚀 feat:     New feature
  🐛 fix:      Bug fix
  🎨 style:    UI/styling changes
  ♻️  refactor: Code restructure (no behavior change)
  📝 docs:     Documentation
  🧪 test:     Tests
  🔧 chore:    Config, dependencies, tooling
  🧠 wisdom:   MBOS369 session closure (Commit Wisdom)
  🚑 hotfix:   Emergency production fix

Examples:
  🚀 feat: add parallax hero section to Bonita Beach
  🐛 fix: resolve YCloud auth header format
  🧠 wisdom: session learnings - RLS patterns and scroll perf
```

---

## Branch Strategy

```
main ─────────────────────────── (production, always deployable)
  ├── feat/hero-parallax ─────── (feature branch)
  ├── fix/ycloud-auth ─────────── (bug fix)
  └── hotfix/service-crash ────── (emergency, merge to main fast)
```

```bash
# Create feature branch
git checkout -b feat/description-here

# Work, commit, push
git add -A && git commit -m "🚀 feat: description" && git push -u origin feat/description-here

# Merge back (after review)
git checkout main && git pull && git merge feat/description-here && git push
```

---

## Quick Reference Commands

```bash
# Status
git status
git log --oneline -10

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git checkout -- .

# Stash changes temporarily
git stash && git stash pop

# Force pull (overwrite local)
git fetch --all && git reset --hard origin/main
```

---

## MBOS369 Wisdom Commit (Session Closure)

```bash
git add -A
git commit -m "🧠 Wisdom - [session summary]"
git push
```
