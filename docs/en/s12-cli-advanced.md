# s12: CLI Advanced

> The CLI is not just for debugging. It is a full workflow.

## Problem

You need installation, diagnostics, templates, and multi-mode browser control without writing new scripts each time.

## Solution

Use CLI workflows for install, setup, doctor, and templates:

```
install -> setup -> doctor -> init -> run
```

## How It Works

1. Install and diagnose.

```bash
curl -fsSL https://browser-use.com/cli/install.sh | bash
browser-use doctor
```

2. Interactive or non-interactive setup.

```bash
browser-use setup
browser-use setup --mode local|remote|full
```

3. Generate templates.

```bash
browser-use init --template basic
browser-use init --output my_agent.py
```

4. Choose browser mode.

```bash
browser-use --browser real open https://gmail.com
browser-use --browser remote open https://example.com
```

## Core Info

From `~/projects/browser-use/browser_use/skill_cli/README.md`:

```bash
browser-use doctor
browser-use setup --mode local|remote|full
browser-use init --template basic
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Installation | Manual | One-line install |
| Diagnostics | None | `doctor` |
| Templates | (none) | `init` |
| Browser modes | Single | local/real/remote |

## Design Principle

Make the CLI a complete workflow so setup and iteration stay fast.

## Try It

```sh
sed -n '1,120p' ~/projects/browser-use/browser_use/skill_cli/README.md
```

