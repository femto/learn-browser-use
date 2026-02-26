# s06: Custom Tools

> Actions are just functions. Extension is registration.

## Problem

Default actions cannot cover every workflow, such as file uploads, internal APIs, or human-in-the-loop steps.

## Solution

Use `Tools` and register custom actions. Return `ActionResult` so the agent can reason about outcomes.

```
@tools.action -> ActionResult -> Agent decision
```

## How It Works

1. Create a tools registry.

```python
from browser_use import Tools

tools = Tools()
```

2. Register a new action.

```python
@tools.action('Ask human for help')
async def ask_human(question: str) -> str:
    return input(f"{question} > ")
```

3. When you need browser context, the parameter name must be `browser_session`.

```python
from browser_use.browser import BrowserSession

@tools.action('Upload file')
async def upload_file(index: int, path: str, browser_session: BrowserSession):
    ...
```

## Core Code

From `~/projects/browser-use/examples/custom-functions/file_upload.py`:

```python
from browser_use.agent.views import ActionResult
from browser_use.browser import BrowserSession

@tools.action('Upload file to interactive element with file path')
async def upload_file(index: int, path: str, browser_session: BrowserSession, available_file_paths: list[str]):
    if path not in available_file_paths:
        return ActionResult(error=f'File path {path} is not available')
    ...
    return ActionResult(extracted_content=msg, include_in_memory=True)
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Extensibility | Limited | Custom actions |
| Context injection | (none) | `browser_session` |
| Result format | String | `ActionResult` |

## Design Principle

Define actions as functions and return structured results so the agent can make reliable decisions.

## Try It

```sh
sed -n '1,160p' ~/projects/browser-use/examples/custom-functions/file_upload.py
```

