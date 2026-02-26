# s06: Custom Tools (自定义工具)

> 动作本质上是函数，扩展就是注册新函数。

## 问题

默认动作无法覆盖所有业务逻辑，例如上传文件、调用内部 API、与人协作。

## 解决方案

使用 `Tools` 注册自定义动作，并返回 `ActionResult` 让 Agent 理解结果。

```
@tools.action -> ActionResult -> Agent decision
```

## 工作原理

1. 创建工具集合。

```python
from browser_use import Tools

tools = Tools()
```

2. 用装饰器注册动作。

```python
@tools.action('Ask human for help')
async def ask_human(question: str) -> str:
    return input(f"{question} > ")
```

3. 需要浏览器上下文时，参数名必须是 `browser_session`。

```python
from browser_use.browser import BrowserSession

@tools.action('Upload file')
async def upload_file(index: int, path: str, browser_session: BrowserSession):
    ...
```

## 核心代码

来自 `~/projects/browser-use/examples/custom-functions/file_upload.py`:

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

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 动作扩展 | 不可扩展 | 任意自定义 |
| 上下文注入 | (无) | `browser_session` |
| 结果表达 | 字符串 | `ActionResult` |

## 设计原理

把动作定义成函数，并使用结构化结果反馈，能让 Agent 可靠地理解外部能力。

## 试一试

```sh
sed -n '1,160p' ~/projects/browser-use/examples/custom-functions/file_upload.py
```

