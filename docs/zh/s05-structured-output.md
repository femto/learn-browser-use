# s05: Structured Output (结构化输出)

> 字符串易碎，结构化更可靠。

## 问题

自由文本很难被稳定解析。你需要一个结构化契约来保证输出格式。

## 解决方案

- 使用 Pydantic 模型定义输出结构。
- 将模型传给 `output_model_schema`。
- 通过 `history.final_result()` 获取结构化 JSON。

```
Pydantic Model -> Agent(output_model_schema=...) -> history.final_result()
```

## 工作原理

1. 定义 Pydantic 模型。

```python
from pydantic import BaseModel

class Post(BaseModel):
    post_title: str
    post_url: str
    num_comments: int
    hours_since_post: int

class Posts(BaseModel):
    posts: list[Post]
```

2. 将模型传给 Agent。

```python
agent = Agent(task=task, llm=model, output_model_schema=Posts)
```

3. 解析最终结果。

```python
result = history.final_result()
parsed = Posts.model_validate_json(result)
```

## 核心代码

来自 `~/projects/browser-use/examples/features/custom_output.py`:

```python
from pydantic import BaseModel
from browser_use import Agent, ChatOpenAI

class Post(BaseModel):
    post_title: str
    post_url: str
    num_comments: int
    hours_since_post: int

class Posts(BaseModel):
    posts: list[Post]

agent = Agent(task=task, llm=ChatOpenAI(model='gpt-4.1-mini'), output_model_schema=Posts)

history = await agent.run()
result = history.final_result()
parsed: Posts = Posts.model_validate_json(result)
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 输出格式 | 自由文本 | Pydantic 结构 |
| 可解析性 | 低 | 高 |
| 可靠性 | 低 | 高 |

## 设计原理

先定义结构，再让模型填充结构。这样比“事后解析文本”更稳定。

## 试一试

```sh
sed -n '1,200p' ~/projects/browser-use/examples/features/custom_output.py
```

