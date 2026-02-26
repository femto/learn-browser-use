# s09: Telemetry

> If you want the product to improve, you need anonymous data with an opt-out.

## Problem

The project needs real usage signals to fix bugs and prioritize improvements, but users need explicit control over privacy.

## Solution

Browser-Use collects anonymized usage data (PostHog) and provides a clear opt-out switch.

```
Telemetry on  -> anonymized usage data
Telemetry off -> ANONYMIZED_TELEMETRY=false
```

## How It Works

1. Telemetry is enabled by default.
1. Users can disable via env var or code.

```bash
ANONYMIZED_TELEMETRY=false
```

```python
import os
os.environ["ANONYMIZED_TELEMETRY"] = "false"
```

## Core Info

From `~/projects/browser-use/docs/development/monitoring/telemetry.mdx`:

- Telemetry helps improve the library and fix issues faster
- Opt-out is explicit
- Performance impact is zero

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Usage data | Invisible | Anonymized telemetry |
| Privacy control | (none) | Explicit opt-out |
| Performance | Unknown | Declared no impact |

## Design Principle

Anonymous data improves the system, explicit opt-out protects user control.

## Try It

```sh
sed -n '1,120p' ~/projects/browser-use/docs/development/monitoring/telemetry.mdx
```

