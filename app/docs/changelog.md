# 变更日志

所有项目的重要变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

<br />

#### 指导原则

- 记住日志是写给*人*而非机器的。
- 每个版本都应该有独立的入口。
- 同类改动应该分组放置。
- 不同版本应分别设置链接。
- 新版本在前，旧版本在后。
- 应包括每个版本的发布日期。
- 注明是否遵守[语义化版本规范](https://semver.org/)。

#### 变动类型

- `Added` 新添加的功能。
- `Changed` 对现有功能的变更。
- `Deprecated` 已经不建议使用，即将移除的功能。
- `Removed` 已经移除的功能。
- `Fixed` 对 bug 的修复。
- `Security` 对安全性的改进。

## \[2.1.0] - 2026-11-02

### 改进 Changed

- 文档体系收敛：`architecture.md` 仍然有效的架构要点（Lenis 全局初始化、路由表、交互状态、资源管理策略、Vercel 部署）并入 `README.md` 后删除该文件
- 删除从未使用的 `roadmap.ref.md`
- 修正 `README.md` 与现状不符处：React Router v6 → v7、shadcn/ui 组件清单更正为仅 `input`/`textarea`（按需添加）、技术栈移除已不再使用的 Framer Motion 与 Three.js、包管理器统一为 pnpm、项目结构移除已删除的 `App.css`
- 补记 2026-06-28 之后未记录的变更（自 git 历史回溯）：
  - 2026-06-26 价格套餐更新（`39d3baf`）、联系方式区块更新（`98901ec`）
  - 2026-07-12 citywalk 与 venue early access 相关内容更新（`b53184c`）
  - 2026-10-12 酒店信息更新、新增酒店和晚宴图片（`9248605`、`b23b12a`）

### 删除 Removed

- 清理零引用依赖 47 个（src 与配置文件均无引用，构建验证通过）：
  - `@radix-ui/*` 全部 26 个（shadcn/ui 现有组件不依赖 Radix）
  - `three`、`@types/three`、`@react-three/fiber`、`@react-three/drei`（Three.js 版精选卡片已在历史版本移除）
  - `framer-motion`、`recharts`、`embla-carousel-react`、`react-day-picker`、`react-hook-form`、`@hookform/resolvers`、`zod`、`cmdk`、`date-fns`、`input-otp`、`next-themes`、`react-resizable-panels`、`sonner`、`vaul`、`class-variance-authority`
  - 显式声明冗余的 `react-router`（`react-router-dom` 的传递依赖，src 无直接引用）
  - devDependencies: `tw-animate-css`（未在任何配置或样式中引用）
- 在用依赖保留：`react`、`react-dom`、`react-router-dom`、`lenis`、`lucide-react`、`clsx`、`tailwind-merge`

<br />

***

<br />

## \[2.0.0] - 2026-06-28

### 新增 Added

- 同时有 `package-lock.json` 和 `pnpm-lock.yaml`，统一包管理文件，删除了 `package-lock.json`，仅保留 `pnpm-lock.yaml`
- 统一图片位置（src/images → public）
- 修改 `vercel.json` 配置文件，添加 SPA 路由重写规则以支持 BrowserRouter 部署
- 首页 `LatestHighlights` 卡片链接改用 React Router `<Link>` 组件

### 改进 Changed

- 路由模式由 `HashRouter` 切换为 `BrowserRouter`，优化 URL 结构与 SEO 表现
- Vite 配置 `base` 由 `./` 更新为 `/`，适配 BrowserRouter 与根域部署

### 删除 Removed

- 删除未使用的 `src/App.css` 默认样式文件
- 删除未使用的shadcn 组件

<br />

***

## \[1.0.0] - 2026-05-12

### 新增

- 项目初始化
- 配置 Vite + React + TypeScript
- 集成 Tailwind CSS 3.4.19
- 配置 shadcn/ui 组件库
- 创建基础页面结构
  - Home 首页
  - Registration & Contact 注册与联系
  - Teams 参赛队伍
  - Venue 场馆信息
  - Visit Shanghai 上海旅游

### 新增 Added

- 新增 LatestHighlights 组件 - Three.js 散落视差记忆卡片
- 新增 OrganizersMarquee 组件 - 无限滚动 Logo 跑马灯
- 新增 CustomCursor 组件 - 荧光青色定制光标
- 新增 ScrollContext - Lenis 与 R3F 之间的滚动进度共享

### 改进 Changed

- 更新 HeroSection 全屏视频首屏
- 更新 TournamentDetails 赛事概览非对称网格
- 更新 CompetitionGuidelines 手风琴折叠面板

