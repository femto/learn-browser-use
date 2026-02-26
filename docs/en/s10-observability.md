# s10: Observability

> If you cannot see every step, you cannot optimize any step.

## Problem

Automation failures happen at specific points. Without tracing, debugging becomes guesswork.

## Solution

Browser-Use integrates with OpenLIT (OpenTelemetry-native) for end-to-end tracing with minimal code.

```
openlit.init() -> spans -> dashboard
```

## How It Works

1. Install OpenLIT.

```bash
uv pip install openlit browser-use
```

2. Initialize OpenLIT once.

```python
import openlit
openlit.init()
```

3. Run the agent and traces appear automatically.

```python
history = await agent.run()
```

## Core Code

From `~/projects/browser-use/docs/development/monitoring/openlit.mdx`:

```python
import openlit
openlit.init()
```

## What You Get

- Per-step latency breakdowns
- LLM request/response visibility
- Failure context with agent thoughts
- Cost and token usage per run

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Debugging | Guesswork | End-to-end traces |
| Cost visibility | None | Measured |
| Performance | Coarse | Fine-grained |

## Design Principle

Make observability a default capability. Debugging time drops when traces are built in.

## Try It

```sh
sed -n '1,120p' ~/projects/browser-use/docs/development/monitoring/openlit.mdx
```

