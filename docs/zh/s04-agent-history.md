# s04: Agent History (运行历史)

> 结果不是一句话，历史才是事实。

## 问题

单次输出无法还原执行路径。你需要完整历史来做调试、审计和结构化结果提取。

## 解决方案

`Agent.run()` 返回 `AgentHistoryList`，保存每一步动作与结果。

```
Agent.run() -> AgentHistoryList -> urls / errors / final_result
```

## 工作原理

1. `run()` 返回历史对象。

```python
history = await agent.run()
```

2. 历史包含常用查询方法。

```python
history.urls()
history.errors()
history.final_result()
```

3. 可以检查是否完成和是否成功。

```python
history.is_done()
history.is_successful()
```

## 核心代码

来自 `~/projects/browser-use/browser_use/agent/service.py`:

```python
async def run(self, max_steps: int = 500, ... ) -> AgentHistoryList:
    """Execute the task with maximum number of steps"""
```

## 常用方法

| 方法 | 作用 |
|------|------|
| `urls()` | 访问过的 URL 列表 |
| `errors()` | 错误列表 |
| `action_names()` | 执行动作名称 |
| `final_result()` | 最终结果 |
| `is_done()` | 是否完成 |
| `is_successful()` | 是否成功 |

## 设计原理

历史对象是 Agent 的“真实输出”。字符串结果只是其中一个视角。

## 试一试

```sh
sed -n '2460,2505p' ~/projects/browser-use/browser_use/agent/service.py
```

