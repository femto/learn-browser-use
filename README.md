# Learn Browser-Use -- 从 0 到 1 理解网页智能体

[English](./docs/en/README.md) | [中文](./docs/zh/README.md)

```
                 THE BROWSER AGENT LOOP
                 =======================

   task -> Agent -> LLM -> action plan -> Tools -> Browser -> DOM -> state
            ^                                                    |
            |--------------------- history / memory ------------|

   Agent.run() repeats until it decides to stop.
   The loop is the product.
```

**12 个渐进小节，从最小 Agent 到生产观测与规模化。**
**每节只加一个机制，每节一个口号。**

> **s01** *"task is the program"* — 一句任务就是完整程序
>
> **s02** *"browser is a session"* — Browser 会话是状态容器
>
> **s03** *"tools are the verbs"* — 默认动作集合决定能力边界
>
> **s04** *"history is the truth"* — 运行结果都在 AgentHistoryList
>
> **s05** *"structure beats strings"* — Pydantic 输出更可靠
>
> **s06** *"actions are functions"* — 自定义工具扩展能力
>
> **s07** *"deploy by wrapping"* — `@sandbox` 直接生产化
>
> **s08** *"scripts become commands"* — CLI 变成可重复操作
>
> **s09** *"telemetry is optional"* — 匿名遥测与可控退出
>
> **s10** *"trace everything"* — OpenLIT 观测全链路
>
> **s11** *"cloud is the default"* — 远程浏览器与 profiles
>
> **s12** *"cli is a workflow"* — CLI 进入全流程

---

## Learning Path (中文)

| Session | Topic | Motto |
|---------|-------|-------|
| [s01](./docs/zh/s01-agent-quickstart.md) | Agent Quickstart | *task is the program* |
| [s02](./docs/zh/s02-browser-session.md) | Browser Session | *browser is a session* |
| [s03](./docs/zh/s03-tools-actions.md) | Tools + Actions | *tools are the verbs* |
| [s04](./docs/zh/s04-agent-history.md) | Agent History | *history is the truth* |
| [s05](./docs/zh/s05-structured-output.md) | Structured Output | *structure beats strings* |
| [s06](./docs/zh/s06-custom-tools.md) | Custom Tools | *actions are functions* |
| [s07](./docs/zh/s07-sandbox-production.md) | Sandbox Production | *deploy by wrapping* |
| [s08](./docs/zh/s08-cli.md) | CLI | *scripts become commands* |
| [s09](./docs/zh/s09-telemetry.md) | Telemetry | *telemetry is optional* |
| [s10](./docs/zh/s10-observability.md) | Observability | *trace everything* |
| [s11](./docs/zh/s11-remote-browser-profiles.md) | Remote Browser + Profiles | *cloud is the default* |
| [s12](./docs/zh/s12-cli-advanced.md) | CLI Advanced | *cli is a workflow* |

## Learning Path (English)

| Session | Topic | Motto |
|---------|-------|-------|
| [s01](./docs/en/s01-agent-quickstart.md) | Agent Quickstart | *task is the program* |
| [s02](./docs/en/s02-browser-session.md) | Browser Session | *browser is a session* |
| [s03](./docs/en/s03-tools-actions.md) | Tools + Actions | *tools are the verbs* |
| [s04](./docs/en/s04-agent-history.md) | Agent History | *history is the truth* |
| [s05](./docs/en/s05-structured-output.md) | Structured Output | *structure beats strings* |
| [s06](./docs/en/s06-custom-tools.md) | Custom Tools | *actions are functions* |
| [s07](./docs/en/s07-sandbox-production.md) | Sandbox Production | *deploy by wrapping* |
| [s08](./docs/en/s08-cli.md) | CLI | *scripts become commands* |
| [s09](./docs/en/s09-telemetry.md) | Telemetry | *telemetry is optional* |
| [s10](./docs/en/s10-observability.md) | Observability | *trace everything* |
| [s11](./docs/en/s11-remote-browser-profiles.md) | Remote Browser + Profiles | *cloud is the default* |
| [s12](./docs/en/s12-cli-advanced.md) | CLI Advanced | *cli is a workflow* |

---

## Scope

本项目是 Browser-Use 的学习型教程，基于 `~/projects/browser-use` 源码与示例整理。
强调心智模型、关键路径、可验证入口。
不是官方文档替代品。

## Quick Start (只读)

```sh
cd ~/projects/browser-use

# 最小 Agent 示例
sed -n '1,120p' examples/simple.py

# 自定义输出示例
sed -n '1,200p' examples/features/custom_output.py
```

## Web (Static)

Open the static page:

```sh
open ~/projects/learn-browser-use/web/index.html
```
