---
name: weekly-hackathon-ppt
description: 基于本仓库 ai-ppt/index.html 模板生成或更新周周黑客松活动 PPT（HTML 投屏稿）；用于根据执行手册/活动信息替换占位符、调整流程、更新图片二维码并导出 PDF。
---

# 周周黑客松活动 PPT

## 概览

基于 `ai-ppt/index.html` 复制出本场活动的专属 HTML 幻灯片，并填充活动信息，最后预览和导出 PDF。

## 工作流

### 1. 收集活动信息

收集本场活动的关键资料：
- 活动名称/主题
- 日期/时间
- 场地地址 + 交通指引
- WiFi 名称/密码 + 卫生间位置
- 活动时间轴（如与默认不同）
- 重要链接与二维码（活动群/报名/提交/投票/公众号）
- 下期活动预告

### 2. 创建活动文件

保留模板不动，复制生成新文件：
- `cp ai-ppt/index.html ai-ppt/<event-slug>.html`
- 文件名使用日期或短的 kebab-case（如 `2024-08-17`）。

### 3. 更新内容与素材

替换占位符并调整流程：
- 搜索形如 `[WIFI名称]` 的占位符并替换为真实信息。
- 如需调整时间轴，按实际流程修改时间与顺序。
- 新图片放在 `ai-ppt/assets/media/`，并更新 `<img src="...">` 路径。
- 保持 HTML 结构与 Tailwind class 不变。

### 4. 用 AI 批量替换（推荐）

使用现成提示词提升效率：
- 完整版提示词见 `ai-ppt/prompt.md`。
- 简版提示词见 `ai-ppt/README.md`。
- 提供执行手册/活动信息并要求只替换占位符。

### 5. 提示用户如何使用该 PPT

- 方法 1： 本地浏览器打开新创建的 HTML 文件，但修改文件记得刷新网页
- 方法 2：将 HTML 所在文件夹打包为 zip，上传到 https://drop.01mvp.cn 或者 https://app.netlify.com/drop 可以得到一个临时网址，用于分享或投影。

### 6. 预览与导出

交付前务必预览：
- 在 `ai-ppt/` 下运行 `python -m http.server 8000`。
- 打开 `http://localhost:8000/<event-slug>.html` 检查关键页面。
- 导出 PDF：加 `?print-pdf` 或点击打印按钮，再 `Ctrl/Cmd + P` 并勾选背景图形。

## 输出检查清单

- 活动 HTML 存在于 `ai-ppt/`，命名清晰。
- 链接/二维码/图片路径可正常访问。
- 时间轴与场地信息一致且无占位符残留。
