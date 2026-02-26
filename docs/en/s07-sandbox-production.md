# s07: Sandbox Production

> Wrap a function and you are in production.

## Problem

Local demos are fine, but production needs scalability, persistence, and remote browser infrastructure.

## Solution

Use the `@sandbox` decorator to run your code on Browser-Use Cloud.

```
@sandbox -> cloud browser -> scalable execution
```

## How It Works

1. Wrap your async task.

```python
from browser_use import Browser, sandbox, ChatBrowserUse
from browser_use.agent.service import Agent
import asyncio

@sandbox()
async def my_task(browser: Browser):
    agent = Agent(task="Find the top HN post", browser=browser, llm=ChatBrowserUse())
    await agent.run()

asyncio.run(my_task())
```

2. Use authenticated profiles if needed.

```python
@sandbox(cloud_profile_id='your-profile-id')
async def authenticated_task(browser: Browser):
    ...
```

3. Use proxies by country code.

```python
@sandbox(cloud_proxy_country_code='us')
async def stealth_task(browser: Browser):
    ...
```

## Core Code

From `~/projects/browser-use/AGENTS.md` (embedded docs):

```python
@sandbox()
async def my_task(browser: Browser):
    agent = Agent(task="Find the top HN post", browser=browser, llm=ChatBrowserUse())
    await agent.run()
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Deployment | Local | `@sandbox` |
| Browser management | Manual | Cloud managed |
| Scalability | Low | High |

## Design Principle

Production should be a wrapper, not a rewrite. The decorator keeps code structure identical.

## Try It

```sh
sed -n '1,120p' ~/projects/browser-use/AGENTS.md
```

