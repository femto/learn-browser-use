# s11: Remote Browser + Profiles

> Local is a starting point. Cloud is how you scale.

## Problem

Local browsers limit performance and scale. You also need persistent login state for real workflows.

## Solution

- `Browser(use_cloud=True)` for cloud sessions.
- `cloud_profile_id` for persistent auth.
- `cloud_proxy_country_code` for geo routing.

```
Browser(use_cloud=True) -> cloud session -> profile / proxy
```

## How It Works

1. Use a cloud browser.

```python
browser = Browser(use_cloud=True)
```

2. Attach a cloud profile.

```python
browser = Browser(cloud_profile_id='your-profile-id')
```

3. Select a proxy country.

```python
browser = Browser(cloud_proxy_country_code='us')
```

4. Set the API key.

```bash
export BROWSER_USE_API_KEY=your_key
```

## CLI Profile Management

Manage profiles via CLI:

```bash
browser-use -b remote profile list
browser-use -b remote profile get <id>
browser-use -b remote profile create
browser-use -b remote profile delete <id>
```

## Core Code

From `~/projects/browser-use/docs/customize/browser/remote.mdx`:

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

From `~/projects/browser-use/browser_use/skill_cli/commands/profile.py`:

```
Usage: browser-use [-b real|remote] profile <command>
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Browser | Local | Cloud |
| Auth | Manual | Profile reuse |
| Anti-bot | Limited | Proxy + cloud |

## Design Principle

Move browser state and authentication into configuration so scaling is a switch, not a rewrite.

## Try It

```sh
sed -n '1,160p' ~/projects/browser-use/docs/customize/browser/remote.mdx
sed -n '1,140p' ~/projects/browser-use/browser_use/skill_cli/commands/profile.py
```

