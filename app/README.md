# 上海水下曲棍球国际锦标赛

2026 上海水下曲棍球国际锦标赛官方网站 - 现代化的 React 单页应用。

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 7.2.4
- **样式**: Tailwind CSS 3.4.19 + shadcn/ui（按需添加，当前仅 `input`、`textarea`）
- **路由**: React Router v7（`react-router-dom`，BrowserRouter 模式）
- **动画**: Lenis 平滑滚动 + 纯 CSS 动画

## 快速开始

```bash
# 安装依赖（本项目统一使用 pnpm）
pnpm install

# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 项目结构

```
src/
├── components/         # UI 组件
│   ├── ui/            # shadcn/ui 组件（按需添加，当前仅 input、textarea）
│   ├── Footer.tsx     # 页脚组件
│   └── Navbar.tsx     # 导航栏组件
├── sections/          # 页面区块
│   ├── HeroSection.tsx
│   ├── LatestHighlights.tsx
│   ├── TournamentDetails.tsx
│   ├── CompetitionGuidelines.tsx
│   └── OrganizersSection.tsx
├── pages/             # 页面组件
├── hooks/             # 自定义 Hooks
├── lib/               # 工具函数
├── data/              # 数据文件
├── App.tsx            # 根组件
├── index.css          # 全局样式
└── main.tsx           # 入口文件
```

## 架构要点

- **路由**: `BrowserRouter` + React Router v7，页面清单如下（见 `src/App.tsx`）：

  | 路径 | 页面组件 | 说明 |
  | --- | --- | --- |
  | `/` | `Home` | 首页 |
  | `/registration` | `RegistrationContact` | 注册与联系 |
  | `/teams` | `Teams` | 参赛队伍 |
  | `/venue` | `Venue` | 场馆信息 |
  | `/visit-shanghai` | `VisitShanghai` | 上海旅游 |
  | `/highlight/:id` | `HighlightDetail` | 精选详情 |

- **平滑滚动**: Lenis 在 `App.tsx` 根组件中全局初始化（`useEffect` + `requestAnimationFrame`），卸载时销毁。
- **交互状态**: `LatestHighlights` 用 `useState` 管理分类筛选；`CompetitionGuidelines` 用 `useState` 管理折叠面板展开项（自建手风琴，未用 Radix）。
- **动画实现**: 全部为 CSS（keyframes / transition / marquee），未使用 Framer Motion 或 Three.js。
- **资源管理**: 图片统一放 `public/images/`（主办方 Logo 在 `public/images/logos/`），PDF 等下载资源放 `public/assets/`，构建时原样复制到 `dist/`。

## 部署

通过 Vercel 部署：

- `vercel.json` 配置 SPA 路由重写（`/(.*) → /index.html`），支持 BrowserRouter 刷新
- `vite.config.ts` 的 `base: '/'` 适配根域部署

## shadcn/ui 组件

按需添加（`npx shadcn@latest add <component>`），避免引入未使用的依赖。当前仅有：

- `input` — 联系表单输入
- `textarea` — 联系表单文本域

## ESLint 配置扩展

对于生产应用，建议启用类型感知的 lint 规则：

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // tseslint.configs.strictTypeChecked,
      // tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

也可以安装 React 特定的 lint 插件：

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 文档

- [变更日志](./docs/changelog.md) - 版本变更记录

> 维护约定：改动依赖、路由、部署配置或项目结构时，同步更新本 README 与 changelog；图片、文案等内容类变更以 git log 为准。
