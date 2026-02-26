# s07: Sandbox Production (生产化)

> 把函数包一层，就能上生产。

## 问题

本地跑通后，如何快速迁移到生产环境并支持扩展？

## 解决方案

使用 `@sandbox` 装饰器。它会在 Browser-Use Cloud 环境中运行你的代码，并自动处理浏览器、持久化和扩展。

```
@sandbox -> cloud browser -> scalable execution
```

## 工作原理

1. 在函数上加 `@sandbox()`。

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

2. 需要认证时使用 `cloud_profile_id`。

```python
@sandbox(cloud_profile_id='your-profile-id')
async def authenticated_task(browser: Browser):
    ...
```

3. 需要代理时使用 `cloud_proxy_country_code`。

```python
@sandbox(cloud_proxy_country_code='us')
async def stealth_task(browser: Browser):
    ...
```

## 核心代码

来自 `~/projects/browser-use/AGENTS.md` (内置文档片段):

```python
@sandbox()
async def my_task(browser: Browser):
    agent = Agent(task="Find the top HN post", browser=browser, llm=ChatBrowserUse())
    await agent.run()
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 部署方式 | 本地运行 | `@sandbox` 生产运行 |
| 浏览器管理 | 手动 | 自动托管 |
| 扩展能力 | 低 | 可扩展 |

## 设计原理

把“生产化”变成一个装饰器，降低迁移成本并保持代码结构一致。

## 试一试

```sh
sed -n '1,120p' ~/projects/browser-use/AGENTS.md
```

