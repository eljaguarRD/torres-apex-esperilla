---
name: token-efficient-coding
description: 🛡️ SAGRADO — Zero-waste development protocol. Always active. Reduces token consumption by ~30% across all tasks by eliminating rewrite cycles and enforcing first-pass correctness.
always_active: true
---

# 🛡️ SAGRADO — Token-Efficient Coding Protocol

> **This skill is ALWAYS ACTIVE.** It governs how you approach EVERY coding task.
> Never disable. Never override. APPEND-ONLY modifications allowed.

---

## Core Philosophy

**"Correct on first write, verified before reporting."**

Token waste comes from rewrite cycles: write → error → rewrite → error → rewrite.
This protocol eliminates those cycles through mandatory pre-execution planning.

---

## The 5 Laws (Immutable)

### Law 1: GREP BEFORE YOU CODE
```
BEFORE writing any code:
1. Search for existing implementations (grep_search, find_by_name)
2. Check if a similar pattern exists in the codebase
3. Read the target file's structure FIRST (view_file_outline)
4. Only then start writing

NEVER assume a function, variable, or import doesn't exist.
NEVER create a duplicate of something that already exists.
```

### Law 2: PLAN THE FULL CHANGE BEFORE TOUCHING CODE
```
BEFORE editing:
1. Identify ALL files that need changes (not just the obvious one)
2. Determine the order of changes (dependencies first)
3. Anticipate side effects (imports, types, tests, configs)
4. State your plan in 1-2 sentences, then execute

NEVER start coding "to see what happens."
NEVER make speculative changes.
```

### Law 3: ONE CHANGE, ONE PURPOSE
```
Each edit should:
- Solve exactly ONE problem
- Be independently testable
- Not require "follow-up fixes"

NEVER mix refactoring with feature changes.
NEVER make "while I'm here" edits.
```

### Law 4: VERIFY BEFORE CLAIMING SUCCESS
```
AFTER every change:
1. Run the relevant verification (build, lint, test, or manual check)
2. Read the actual output — don't assume success
3. Only report "done" when you have PROOF it works

NEVER say "this should work" — prove it works.
NEVER skip verification to save time (it costs MORE tokens to fix later).
```

### Law 5: MINIMAL EFFECTIVE CONTEXT
```
When reading files:
- Use view_file_outline FIRST (cheap), then view specific sections
- Don't re-read files you've already seen in this session
- Use line ranges, not full file reads, when you know where to look
- Use grep_search for specific patterns instead of reading entire files

When writing code:
- Use replace_file_content for single edits (not multi_replace)
- Use multi_replace only for truly non-contiguous changes
- Never rewrite an entire file when changing 5 lines
```

---

## Anti-Patterns (FORBIDDEN)

| ❌ Anti-Pattern | ✅ Correct Approach |
|---|---|
| "Let me try a different approach" (3rd attempt) | Stop. Analyze WHY previous attempts failed. Ask user if needed. |
| Writing 200 lines then discovering a typo on line 3 | Plan structure first, validate key assumptions, then write. |
| Reading the same file 4 times in one session | Read once, reference from memory. |
| `view_file` on a 500-line file to find one function | `grep_search` or `view_file_outline` first. |
| Making 5 sequential edits to the same file | Batch into one `multi_replace_file_content` call. |
| "I'll also fix this unrelated thing" | Don't. Stay focused on the current task. |
| Creating a new utility function without checking if one exists | `grep_search` for similar patterns first. |

---

## Decision Tree: Before Any Code Change

```
START
  │
  ├─ Do I understand the FULL scope of this change?
  │   NO → Read more context. Don't guess.
  │   YES ↓
  │
  ├─ Have I searched for existing implementations?
  │   NO → grep_search / find_by_name first.
  │   YES ↓
  │
  ├─ Do I know ALL files affected?
  │   NO → Trace imports, types, configs. List them.
  │   YES ↓
  │
  ├─ Can I make this change in ONE edit operation?
  │   YES → replace_file_content (single target)
  │   NO → multi_replace_file_content (batch non-contiguous)
  │         ↓
  │
  ├─ EXECUTE the change
  │         ↓
  │
  └─ VERIFY: run build/test/check → read output → confirm success
      │
      FAIL → Analyze error. Fix precisely. Don't start over.
      PASS → Report with evidence. ✅
```

---

## Token-Saving Patterns

### Pattern 1: Smart File Discovery
```
# EXPENSIVE (❌): Read everything
view_file → view_file → view_file → view_file

# EFFICIENT (✅): Targeted discovery
view_file_outline → grep_search → view_file(specific lines only)
```

### Pattern 2: Batched Edits
```
# EXPENSIVE (❌): 4 separate tool calls
replace_file_content (edit 1)
replace_file_content (edit 2)
replace_file_content (edit 3)
replace_file_content (edit 4)

# EFFICIENT (✅): 1 tool call
multi_replace_file_content (all 4 edits in ReplacementChunks)
```

### Pattern 3: Parallel Independent Operations
```
# EXPENSIVE (❌): Sequential when not needed
view_file(A) → wait → view_file(B) → wait → view_file(C)

# EFFICIENT (✅): Parallel when independent
view_file(A) + view_file(B) + view_file(C) → all at once
```

### Pattern 4: Error Analysis Over Retry
```
# EXPENSIVE (❌): Blind retry
"That didn't work, let me try something else" × 3

# EFFICIENT (✅): Root cause analysis  
"Error on line 42: undefined variable 'x'. 
 Cause: imported from wrong module.
 Fix: change import path. One edit."
```

---

## Metrics to Track Internally

After each task, mentally score:
- **First-pass success rate:** Did the change work without rewrites? (Target: >80%)
- **File re-reads:** How many times did I read the same file? (Target: ≤1)
- **Edit operations:** How many edit calls vs. planned? (Target: ratio ≤1.2)
- **Verification:** Did I verify before claiming done? (Target: 100%)
