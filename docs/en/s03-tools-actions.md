# s03: Tools + Actions

> Tools are the verbs. They define what the agent can do.

## Problem

An LLM can plan, but it cannot click, type, or scroll by itself. You need a set of executable actions.

## Solution

Use the default Tools registry with built-in browser actions.

```
LLM -> Action -> Tools -> Browser
```

## How It Works

1. Initialize tools.

```python
from browser_use import Tools

tools = Tools()
```

2. Attach tools to the agent.

```python
agent = Agent(task="...", llm=llm, tools=tools)
```

3. Exclude actions you do not want.

```python
tools = Tools(exclude_actions=['search', 'wait'])
```

## Core Actions

The default toolset covers:

| Category | Examples |
|----------|----------|
| Navigation | `search`, `navigate`, `go_back`, `wait` |
| Interaction | `click`, `input`, `scroll`, `send_keys`, `select_dropdown` |
| Extraction | `extract` |
| Vision | `screenshot` |
| Files | `read_file`, `write_file`, `replace_file` |
| Completion | `done` |

## Core Code

From `~/projects/browser-use/browser_use/tools/service.py`:

```python
class Tools(Generic[Context]):
    def __init__(self, exclude_actions: list[str] | None = None, ...):
        self.registry = Registry[Context](exclude_actions if exclude_actions is not None else [])
        ...
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Action set | (none) | Default Tools |
| Control | Low | Exclude actions |
| Extensibility | Low | Custom tools |

## Design Principle

The verb list defines the agent's capability boundary. Tools make LLM plans executable.

## Try It

```sh
sed -n '320,520p' ~/projects/browser-use/browser_use/tools/service.py
```

