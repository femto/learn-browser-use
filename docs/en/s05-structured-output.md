# s05: Structured Output

> Strings are fragile. Structure is durable.

## Problem

Free-form text is hard to parse consistently. You need a schema that the model must follow.

## Solution

- Define a Pydantic model.
- Pass it as `output_model_schema`.
- Parse `history.final_result()` into the model.

```
Pydantic Model -> Agent(output_model_schema=...) -> history.final_result()
```

## How It Works

1. Define a schema.

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

2. Attach to the Agent.

```python
agent = Agent(task=task, llm=model, output_model_schema=Posts)
```

3. Validate the result.

```python
result = history.final_result()
parsed = Posts.model_validate_json(result)
```

## Core Code

From `~/projects/browser-use/examples/features/custom_output.py`:

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

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Output format | Free text | Pydantic schema |
| Parsability | Low | High |
| Reliability | Low | High |

## Design Principle

Define the shape first, then let the model fill it. This beats parsing text after the fact.

## Try It

```sh
sed -n '1,200p' ~/projects/browser-use/examples/features/custom_output.py
```

