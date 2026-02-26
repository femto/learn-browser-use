# s11: Remote Browser + Profiles (云浏览器与配置)

> 本地能跑只是开始，云浏览器才是规模化。

## 问题

本地浏览器限制了部署规模、性能与反爬能力。你需要远程浏览器与可复用的登录状态。

## 解决方案

- `Browser(use_cloud=True)` 直接启用 Browser-Use Cloud。
- `cloud_profile_id` 绑定持久化登录态。
- `cloud_proxy_country_code` 控制代理地区。

```
Browser(use_cloud=True) -> cloud session -> profile / proxy
```

## 工作原理

1. 使用云浏览器。

```python
browser = Browser(use_cloud=True)
```

2. 绑定云端 profile。

```python
browser = Browser(cloud_profile_id='your-profile-id')
```

3. 指定代理国家。

```python
browser = Browser(cloud_proxy_country_code='us')
```

4. 需要 API Key。

```bash
export BROWSER_USE_API_KEY=your_key
```

## CLI Profile 管理

从 `browser-use` CLI 管理 profiles：

```bash
browser-use -b remote profile list
browser-use -b remote profile get <id>
browser-use -b remote profile create
browser-use -b remote profile delete <id>
```

## 核心代码

来自 `~/projects/browser-use/docs/customize/browser/remote.mdx`:

```python
browser = Browser(
    use_cloud=True,
)

browser = Browser(
    cloud_profile_id='your-profile-id',
    cloud_proxy_country_code='us',
    cloud_timeout=30,
)
```

来自 `~/projects/browser-use/browser_use/skill_cli/commands/profile.py`:

```
Usage: browser-use [-b real|remote] profile <command>
```

## 变更内容

| 组件 | 之前 | 之后 |
|------|------|------|
| 浏览器 | 本地 | 云端 |
| 登录态 | 手动 | profile 复用 |
| 反爬能力 | 低 | 代理 + 云端 |

## 设计原理

用云浏览器把“性能、稳定性、登录态”变成配置，而不是工程难题。

## 试一试

```sh
sed -n '1,160p' ~/projects/browser-use/docs/customize/browser/remote.mdx
sed -n '1,140p' ~/projects/browser-use/browser_use/skill_cli/commands/profile.py
```

