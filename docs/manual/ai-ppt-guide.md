---
title: AI PPT 制作指南
description: 基于 ai-ppt/index.html 生成周周黑客松活动 PPT
---

# 🤖 AI PPT 制作指南

**一句话目标**：基于 `ai-ppt/index.html` 快速生成可投屏、可导出 PDF 的活动 PPT。

## 适用场景
- 需要现场投屏或路演流程 PPT
- 需要快速更新场地信息、WiFi、流程、二维码

## 准备信息清单
- 活动名称/主题
- 日期/时间/地点/交通指引
- WiFi 名称/密码、卫生间位置、注意事项
- 当天流程时间轴（可直接用执行手册）
- 重要链接与二维码（群、报名、提交、投票、公众号）
- 下期活动预告

## 制作流程（推荐）

### 1) 复制模板
建议先保留原始模板，再为本次活动创建一份专属文件：
```bash
cp ai-ppt/index.html ai-ppt/2024-08-17.html
```

### 2) 用 AI 填充占位符
- 打开 `ai-ppt/2024-08-17.html`（Cursor/Claude/ChatGPT 均可）。
- 使用 `ai-ppt/prompt.md` 里的完整提示词，或参考 `ai-ppt/README.md` 的简版提示词。
- 要求 AI 只替换占位符（如 `[WIFI名称]`、`[卫生间位置指引]`），不要改动 HTML 结构与 Tailwind class。

### 3) 更新图片与二维码
- 将新图片放到 `ai-ppt/assets/media/`。
- 在 HTML 中替换对应 `<img src="...">` 路径。
- 若暂时没有图片，可保留占位符或用 `[TODO: ...]` 备注。

### 4) 本地预览
在 `ai-ppt/` 目录启动本地服务并查看效果：
```bash
python -m http.server 8000
```
浏览器打开：`http://localhost:8000/2024-08-17.html`。

### 5) 导出 PDF（可选）
- 点击 PPT 中的“进入打印模式”按钮，或 URL 加 `?print-pdf`。
- `Ctrl/Cmd + P` → 另存为 PDF → 勾选“背景图形”。

## 提示词要点（简版）
如果要自己写 prompt，可以参考以下结构：
```text
我有一个基于 Reveal.js 和 Tailwind CSS 的 Neo-Brutalism 风格 PPT。
请根据以下信息更新所有占位符，保持 HTML 结构和 class 不变。
如果信息缺失，请保留原占位符或用合理默认值。
```

需要更完整的提示词，请直接使用 `ai-ppt/prompt.md`。
