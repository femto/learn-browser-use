# s01: Agent Quickstart

> The task is the program. The agent runs the loop.

## Problem

How do you run Browser-Use with the smallest possible script? Without a clear entry point, you end up juggling model selection, browser config, and async plumbing.

## Solution

Use the minimal trio:

1. `Agent` for the control loop.
1. `ChatBrowserUse` as the recommended model.
1. `task` string as the only input.

```
Task -> Agent -> LLM -> Actions -> Browser -> State -> Agent
```

## How It Works

1. Load environment variables.

```python
from dotenv import load_dotenv
load_dotenv()
```

2. Initialize an Agent with a task.

```python
from browser_use import Agent, ChatBrowserUse

agent = Agent(task="Find the number of stars of the browser-use repo", llm=ChatBrowserUse())
```

3. Run the agent.

```python
await agent.run()
```

## Core Code

From `~/projects/browser-use/examples/simple.py`:

```python
from dotenv import load_dotenv
from browser_use import Agent, ChatBrowserUse

load_dotenv()

agent = Agent(
    task="Find the number of stars of the following repos: browser-use, playwright, stagehand, react, nextjs",
    llm=ChatBrowserUse(model='bu-2-0'),
)
agent.run_sync()
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Task input | (none) | `task` string |
| Model | (none) | `ChatBrowserUse()` |
| Execution | (none) | `Agent.run()` |

## Design Principle

The task is the program. The agent loops until it decides it is done.

## Try It

```sh
sed -n '1,120p' ~/projects/browser-use/examples/simple.py
```

