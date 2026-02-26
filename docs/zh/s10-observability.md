# s10: Observability (可观测性)

> 看见每一步，才能优化每一步。

## 问题

浏览器自动化的失败往往发生在某个具体步骤。没有可观测性，调试变成盲人摸象。

## 解决方案

Browser-Use 原生支持 OpenLIT（基于 OpenTelemetry），几乎零侵入地获得全链路 tracing。

```
openlit.init() -> spans -> dashboard
```

## 工作原理

1. 安装 OpenLIT。

```bash
uv pip install openlit browser-use
```

2. 初始化 OpenLIT。

```python
import openlit
openlit.init()
```

3. 运行 Agent，自动生成追踪。

```python
history = await agent.run()
```

## 核心代码

来自 `~/projects/browser-use/docs/development/monitoring/openlit.mdx`:

```python
import openlit
openlit.init()
```

## 能看到什么

- 每个步骤的执行耗时
- 每次 LLM 调用的输入/输出
- 失败步骤的具体上下文
- 代价与 token 使用情况

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 调试方式 | 事后猜测 | 端到端追踪 |
| 成本分析 | 不可见 | 可量化 |
| 性能优化 | 粗略 | 精细化 |

## 设计原理

自动化系统必须可观测；把 tracing 变成默认能力，调试成本才可控。

## 试一试

```sh
sed -n '1,120p' ~/projects/browser-use/docs/development/monitoring/openlit.mdx
```

