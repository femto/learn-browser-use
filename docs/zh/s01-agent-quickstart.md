# s01: Agent Quickstart (最小 Agent)

> 一句任务就是程序。Agent 负责循环，Browser 负责世界。

## 问题

如何用最少代码跑通 Browser-Use？
如果没有清晰入口，你会在模型选择、浏览器配置和异步调用之间迷路。

## 解决方案

使用三件套：

1. `Agent` 负责流程控制。
1. `ChatBrowserUse` 作为默认模型。
1. `task` 字符串作为唯一输入。

```
Task -> Agent -> LLM -> Actions -> Browser -> State -> Agent
```

## 工作原理

1. 读取环境变量。

```python
from dotenv import load_dotenv
load_dotenv()
```

2. 以任务字符串初始化 Agent。

```python
from browser_use import Agent, ChatBrowserUse

agent = Agent(task="Find the number of stars of the browser-use repo", llm=ChatBrowserUse())
```

3. 运行 Agent。

```python
await agent.run()
```

## 核心代码

来自 `~/projects/browser-use/examples/simple.py`:

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

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 任务输入 | (无) | `task` 字符串 |
| 模型 | (无) | `ChatBrowserUse()` |
| 执行入口 | (无) | `Agent.run()` |

## 设计原理

任务描述即程序，Agent 负责循环执行直到完成。这样能把“浏览器操作”简化为一条文本目标。

## 试一试

```sh
sed -n '1,120p' ~/projects/browser-use/examples/simple.py
```

