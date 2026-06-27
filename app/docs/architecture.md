# 上海水下曲棍球国际锦标赛 — 技术规格

## 组件清单

### shadcn/ui 组件

- `input` — 联系表单输入
- `textarea` — 联系表单文本域

### 自定义组件

| 组件名                   | 来源       | 用途            |
| --------------------- | -------- | ------------- |
| Navbar                | Custom   | 毛玻璃导航栏        |
| HeroSection           | Custom   | 全屏视差首屏        |
| LatestHighlights      | Custom   | Bento 网格精选卡片     |
| TournamentDetails     | Custom   | 赛事概览非对称网格     |
| CompetitionGuidelines | Custom   | 手风琴折叠面板（自建）   |
| OrganizersSection     | Custom   | 主办方展示+Logo 跑马灯 |
| Footer                | Custom   | 页脚            |

## 动画实现表

| 动画        | 库/技术                | 实现方式                                   | 复杂度    |
| --------- | ------------------- | -------------------------------------- | ------ |
| 平滑滚动      | lenis               | 全局 Lenis 实例                            | Low    |
| Hero 视差   | CSS                 | background + transform                   | Low    |
| 卡片悬停缩放    | CSS                 | scale + transition                      | Low    |
| 导航链接下划线   | CSS                 | ::after + transition                   | Low    |
| 折叠面板展开    | CSS                 | max-height transition + rotate icon     | Low    |
| Logo 跑马灯  | CSS                 | translateX infinite animation          | Low    |
| 数字入场动画    | CSS                 | @keyframes fadeInUp + animation-delay  | Low    |
| 按钮悬停光效    | CSS                 | background gradient + transition       | Low    |

## 状态与逻辑

- **Lenis 全局初始化**: 在 App 根组件中初始化 Lenis，提供全局平滑滚动。
- **折叠面板状态**: CompetitionGuidelines 使用 React `useState` 管理展开项 ID。
- **筛选逻辑**: LatestHighlights 使用 React `useState` 管理分类筛选状态。

## 其他关键决策

- **路由**: 使用 React Router v6 + `BrowserRouter` 实现多页面（Home、Registration & Contact、Teams、Venue、Visit Shanghai、Highlight Detail）。
- **Lenis 全局初始化**: 在 App 根组件中初始化 Lenis，提供全局平滑滚动。
- **资源管理策略**: 
  - 所有图片统一放在 `public/images/`，通过绝对路径引用（如 `/images/hero-bg.jpg`）
  - 主办方 Logo 放在 `public/images/logos/` 子目录
  - PDF 等下载资源放在 `public/assets/`
  - 构建后，`public/` 目录下的资源原样复制到 `dist/`
- **部署**: 支持 Vercel 部署，通过 `vercel.json` 配置 SPA 路由回退。

