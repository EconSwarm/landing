# EconSwarm -- 群智能体金融引擎落地页

## 项目定位

EconSwarm 是一个基于 TradingAgents（GitHub 65K+ Stars）打造的通用群智能体金融分析框架。首页落地页通过多智能体协同的视觉语言，向用户传达"18 位专职 AI Agent 协同完成投研全流程"的核心价值。

## 项目架构

- **框架**: React + TanStack Router (SSR)
- **样式引擎**: Tailwind CSS v4 + PostCSS
- **设计系统**: TRAE Design Library（暗色优先，品牌绿 #32F08C）
- **构建工具**: Vite + Nitro（可部署 Cloudflare Workers）

## 核心设计语言

- **暗色主题**: 深色背景 #111213 / #1A1B1D
- **品牌色**: 绿色 (#32F08C) 作为主要高亮色
- **辅助色**: 蓝色 (#4A85FF) 作为次要强调色
- **字体**: SF Pro Text (UI) + JetBrains Mono (代码/数据)
- **网格背景**: 48px 间距的微网格线，营造科技感

## 设计系统对齐

已完全对齐 TRAE Design Library 的 token 规范：

- 颜色令牌: `--bg-base-*`, `--text-*`, `--border-*`, `--status-*`
- 间距系统: `--t-spacer-*`
- 圆角系统: `--t-radius-*`
- 组件模式: ds-btn, ds-card, ds-statcard, ds-tag
