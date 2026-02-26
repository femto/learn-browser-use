# s03: Tools + Actions (动作集合)

> Tools 是动词表，决定 Agent 能做什么。

## 问题

LLM 只能输出计划，无法直接操作网页。你需要一套“可调用动作”来把计划变成执行。

## 解决方案

使用默认 Tools Registry，它内置了浏览器操作的核心动作。

```
LLM -> Action -> Tools -> Browser
```

## 工作原理

1. `Tools()` 默认注册一组动作。

```python
from browser_use import Tools

tools = Tools()
```

2. Agent 通过工具执行动作。

```python
agent = Agent(task="...", llm=llm, tools=tools)
```

3. 可以排除不需要的动作。

```python
tools = Tools(exclude_actions=['search', 'wait'])
```

## 核心动作

默认工具覆盖这些类别：

| 类别 | 动作示例 |
|------|----------|
| 导航 | `search`, `navigate`, `go_back`, `wait` |
| 交互 | `click`, `input`, `scroll`, `send_keys`, `select_dropdown` |
| 提取 | `extract` |
| 视觉 | `screenshot` |
| 文件 | `read_file`, `write_file`, `replace_file` |
| 任务结束 | `done` |

## 核心代码

来自 `~/projects/browser-use/browser_use/tools/service.py`:

```python
class Tools(Generic[Context]):
    def __init__(self, exclude_actions: list[str] | None = None, ...):
        self.registry = Registry[Context](exclude_actions if exclude_actions is not None else [])
        ...
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 动作集合 | (无) | 默认 Tools |
| 可控能力 | 低 | 可排除动作 |
| 扩展性 | 低 | 可自定义 |

## 设计原理

动词表决定智能体能力边界。把动作抽象成工具，才能让 LLM 可靠地产生可执行计划。

## 试一试

```sh
sed -n '320,520p' ~/projects/browser-use/browser_use/tools/service.py
```

