# s04: Agent History

> The output is not a sentence. The history is the truth.

## Problem

A single final response does not explain how the agent got there. You need full history for debugging and audit.

## Solution

`Agent.run()` returns an `AgentHistoryList` with every step and result.

```
Agent.run() -> AgentHistoryList -> urls / errors / final_result
```

## How It Works

1. Run the agent and capture history.

```python
history = await agent.run()
```

2. Query useful views.

```python
history.urls()
history.errors()
history.final_result()
```

3. Inspect completion state.

```python
history.is_done()
history.is_successful()
```

## Core Code

From `~/projects/browser-use/browser_use/agent/service.py`:

```python
async def run(self, max_steps: int = 500, ... ) -> AgentHistoryList:
    """Execute the task with maximum number of steps"""
```

## Common Methods

| Method | Purpose |
|--------|---------|
| `urls()` | Visited URLs |
| `errors()` | Errors per step |
| `action_names()` | Executed actions |
| `final_result()` | Final output |
| `is_done()` | Completion flag |
| `is_successful()` | Success flag |

## Design Principle

The history object is the real output. A string result is only one projection.

## Try It

```sh
sed -n '2460,2505p' ~/projects/browser-use/browser_use/agent/service.py
```

