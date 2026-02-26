# s09: Telemetry (匿名遥测)

> 想把工具做得更好，就需要匿名数据，但必须可选择退出。

## 问题

开源项目需要了解真实使用情况以优化体验，但用户也需要清晰、可控的隐私选项。

## 解决方案

Browser-Use 收集匿名使用数据（PostHog）用于改进产品，并提供显式的关闭开关。

```
Telemetry on  -> anonymized usage data
Telemetry off -> ANONYMIZED_TELEMETRY=false
```

## 工作原理

1. 默认启用匿名遥测。
1. 用户可通过环境变量或代码关闭。

```bash
ANONYMIZED_TELEMETRY=false
```

```python
import os
os.environ["ANONYMIZED_TELEMETRY"] = "false"
```

## 核心信息

来自 `~/projects/browser-use/docs/development/monitoring/telemetry.mdx`:

- 遥测用于改进体验与排障速度
- 关闭方式明确
- 启用对性能没有影响

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 使用数据 | 不可见 | 匿名遥测 |
| 隐私控制 | (无) | 显式关闭开关 |
| 性能 | 未知 | 标明无影响 |

## 设计原理

匿名数据让系统变好；显式开关保证用户主权。

## 试一试

```sh
sed -n '1,120p' ~/projects/browser-use/docs/development/monitoring/telemetry.mdx
```

