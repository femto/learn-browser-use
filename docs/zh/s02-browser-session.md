# s02: Browser Session (浏览器会话)

> 浏览器不是一次性工具，而是有状态的会话。

## 问题

Agent 需要保持页面、Cookie、标签页和下载状态。如果没有会话容器，任务无法跨步骤继续。

## 解决方案

- `Browser` 是 `BrowserSession` 的别名。
- 你可以选择本地浏览器、远程 CDP、或云浏览器。

```
Agent -> Browser (session) -> Tabs / Cookies / State
```

## 工作原理

1. `Browser` 实际上就是 `BrowserSession` 的别名。

```python
from browser_use import Browser  # Alias for BrowserSession
```

2. 本地浏览器默认启动。

```python
browser = Browser(headless=False)
```

3. 云浏览器只需要 `use_cloud=True`。

```python
browser = Browser(use_cloud=True)
```

4. 也可以使用已有浏览器的 CDP URL。

```python
browser = Browser(cdp_url="http://localhost:9222")
```

## 核心代码

来自 `~/projects/browser-use/README.md`:

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

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 浏览器状态 | (无) | `Browser` 会话 |
| 运行方式 | 本地固定 | 本地 / CDP / 云 |
| 复用能力 | 低 | 会话可持续 |

## 设计原理

把浏览器封装成会话对象，才能保证多步骤任务的可重复性与稳定性。

## 试一试

```sh
sed -n '1,160p' ~/projects/browser-use/README.md
sed -n '1,160p' ~/projects/browser-use/browser_use/__init__.py
```

