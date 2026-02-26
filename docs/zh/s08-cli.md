# s08: CLI (命令行)

> 脚本变命令，调试更快。

## 问题

开发中经常需要快速手动操作网页。写完整 Agent 太重，缺少一个轻量入口。

## 解决方案

使用 `browser-use` CLI，浏览器会保持常驻，命令间可复用状态。

```
CLI command -> persistent browser -> fast iteration
```

## 工作原理

1. 打开网页。

```bash
browser-use open https://example.com
```

2. 查看可点击元素。

```bash
browser-use state
```

3. 点击与输入。

```bash
browser-use click 5
browser-use type "Hello"
```

4. 截图与关闭。

```bash
browser-use screenshot page.png
browser-use close
```

## 核心代码

命令列表来自 `~/projects/browser-use/browser_use/skill_cli/README.md`:

```bash
browser-use open https://example.com
browser-use state
browser-use click 5
browser-use type "Hello"
browser-use screenshot page.png
browser-use close
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 调试方式 | 写脚本 | 直接 CLI |
| 浏览器状态 | 短暂 | 持久 |
| 反馈速度 | 慢 | 快 |

## 设计原理

CLI 保留浏览器状态，使“试错”变成一组快速命令。

## 试一试

```sh
sed -n '1,200p' ~/projects/browser-use/browser_use/skill_cli/README.md
```

