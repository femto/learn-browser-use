# s12: CLI Advanced (高级 CLI 流程)

> CLI 不只是调试工具，还可以成为稳定的工作流入口。

## 问题

开发中需要安装、诊断、模板生成和多模式浏览器支持。基础命令不足以覆盖完整流程。

## 解决方案

使用 CLI 的安装、诊断、模板与多模式能力：

```
install -> setup -> doctor -> init -> run
```

## 工作原理

1. 一键安装与诊断。

```bash
curl -fsSL https://browser-use.com/cli/install.sh | bash
browser-use doctor
```

2. 交互式或非交互式配置。

```bash
browser-use setup
browser-use setup --mode local|remote|full
```

3. 生成模板脚本。

```bash
browser-use init --template basic
browser-use init --output my_agent.py
```

4. 选择浏览器模式。

```bash
browser-use --browser real open https://gmail.com
browser-use --browser remote open https://example.com
```

## 核心信息

来自 `~/projects/browser-use/browser_use/skill_cli/README.md`:

```bash
browser-use doctor
browser-use setup --mode local|remote|full
browser-use init --template basic
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 安装方式 | 手工 | 一键脚本 |
| 诊断能力 | 低 | `doctor` |
| 模板生成 | (无) | `init` |
| 浏览器模式 | 单一 | 本地/真实/云端 |

## 设计原理

把复杂步骤收敛到 CLI，让工程流程可复用、可脚本化。

## 试一试

```sh
sed -n '1,120p' ~/projects/browser-use/browser_use/skill_cli/README.md
```

