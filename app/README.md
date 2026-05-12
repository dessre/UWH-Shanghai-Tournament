# 上海水下曲棍球国际锦标赛

2026 上海水下曲棍球国际锦标赛官方网站 - 现代化的 React 单页应用。

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 7.2.4
- **样式**: Tailwind CSS 3.4.19 + shadcn/ui
- **路由**: React Router v6
- **动画**: Framer Motion + Lenis + Three.js (@react-three/fiber)

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── components/         # UI 组件
│   ├── ui/            # shadcn/ui 组件
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
├── App.css            # 应用样式
├── index.css          # 全局样式
└── main.tsx           # 入口文件
```

## 可用组件

shadcn/ui 组件 (40+):
- accordion, alert-dialog, alert, aspect-ratio, avatar, badge
- breadcrumb, button-group, button, calendar, card, carousel
- chart, checkbox, collapsible, command, context-menu, dialog
- drawer, dropdown-menu, empty, field, form, hover-card
- input-group, input-otp, input, item, kbd, label
- menubar, navigation-menu, pagination, popover, progress
- radio-group, resizable, scroll-area, select, separator
- sheet, sidebar, skeleton, slider, sonner, spinner
- switch, table, tabs, textarea, toggle-group, toggle, tooltip

### 使用示例

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
```

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

- [技术架构](./docs/architecture.md) - 详细技术设计和架构决策
- [变更日志](./docs/changelog.md) - 版本变更记录
- [项目路线图](./docs/roadmap.md) - 功能规划