# SKILL: Nexus-Audit-Bot

## Description
A specialized layer for self-correction and continuous auditing.

## Audit Workflow
1. **Pre-Change Scan**: Check `execution/integrity_check.py`.
2. **Impact Analysis**: List all files that import the file being modified.
3. **Metrics Validation**: Ensure the change doesn't break the data collection hooks.
4. **Post-Change Verification**: Re-run all tests.

## Metrics Tracking
- **Uptime**: System availability.
- **Lead Speed**: How fast a lead is processed by Laura AI.
- **Consistency Index**: Percentage of UI components following the design system.
