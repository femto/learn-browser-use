# s08: CLI

> Scripts become commands. Debugging gets fast.

## Problem

You often need quick manual browser actions during development. Writing a full agent is too heavy.

## Solution

Use the `browser-use` CLI. The browser stays alive between commands for fast iteration.

```
CLI command -> persistent browser -> fast iteration
```

## How It Works

1. Open a page.

```bash
browser-use open https://example.com
```

2. Inspect clickable elements.

```bash
browser-use state
```

3. Click and type.

```bash
browser-use click 5
browser-use type "Hello"
```

4. Screenshot and close.

```bash
browser-use screenshot page.png
browser-use close
```

## Core Code

Command examples from `~/projects/browser-use/browser_use/skill_cli/README.md`:

```bash
browser-use open https://example.com
browser-use state
browser-use click 5
browser-use type "Hello"
browser-use screenshot page.png
browser-use close
```

## What Changed

| Component | Before | After |
|-----------|--------|-------|
| Debug workflow | Write scripts | CLI commands |
| Browser state | Ephemeral | Persistent |
| Feedback loop | Slow | Fast |

## Design Principle

Keep a persistent browser alive so iteration cost is near-zero.

## Try It

```sh
sed -n '1,200p' ~/projects/browser-use/browser_use/skill_cli/README.md
```

