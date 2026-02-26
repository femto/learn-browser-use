# s02: Browser Session

> The browser is not a one-off tool. It is a stateful session.

## Problem

Agents need tabs, cookies, and persistent page state. Without a session container, tasks cannot progress across steps.

## Solution

- `Browser` is an alias for `BrowserSession`.
- You can use local, CDP-connected, or cloud browsers.

```
Agent -> Browser (session) -> Tabs / Cookies / State
```

## How It Works

1. `Browser` is a `BrowserSession` alias.

```python
from browser_use import Browser  # Alias for BrowserSession
```

2. Local browser is the default.

```python
browser = Browser(headless=False)
```

3. Cloud browser uses `use_cloud=True`.

```python
browser = Browser(use_cloud=True)
```

4. Existing browser via CDP URL.

```python
browser = Browser(cdp_url="http://localhost:9222")
```

## Core Code

From `~/projects/browser-use/README.md`:

```python
from browser_use import Agent, Browser, ChatBrowserUse
import asyncio

async def main():
    browser = Browser(
        # use_cloud=True,  # Use a stealth browser on Browser Use Cloud
    )

    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(),
        browser=browser,
    )
    await agent.run()

if __name__ == "__main__":
    asyncio.run(main())
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Browser state | (none) | `Browser` session |
| Execution mode | Local only | Local / CDP / Cloud |
| Reuse | Low | Session persists |

## Design Principle

Session objects preserve state so multi-step tasks remain stable.

## Try It

```sh
sed -n '1,160p' ~/projects/browser-use/README.md
sed -n '1,160p' ~/projects/browser-use/browser_use/__init__.py
```

