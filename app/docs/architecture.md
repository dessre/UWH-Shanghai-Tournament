# 上海水下曲棍球国际锦标赛 — 技术规格

## 组件清单

### shadcn/ui 组件

- `button` — CTA 按钮
- `accordion` — Competition Guidelines 折叠面板
- `badge` — 团队标签、分类标签
- `card` — 信息卡片
- `input` — 联系表单输入
- `textarea` — 联系表单文本域
- `separator` — 分隔线

### 自定义组件

| 组件名                   | 来源       | 用途            |
| --------------------- | -------- | ------------- |
| Navbar                | Custom   | 毛玻璃导航栏        |
| HeroSection           | Custom   | 全屏视频首屏        |
| LatestHighlights      | Three.js | R3F 散落视差记忆卡片  |
| TournamentDetails     | Custom   | 赛事概览非对称网格     |
| CompetitionGuidelines | Custom   | 手风琴折叠面板       |
| OrganizersMarquee     | Custom   | 无限滚动 Logo 跑马灯 |
| Footer                | Custom   | 页脚            |
| CustomCursor          | Custom   | 荧光青色定制光标      |

## 动画实现表

| 动画        | 库/技术                | 实现方式                                   | 复杂度    |
| --------- | ------------------- | -------------------------------------- | ------ |
| 平滑滚动      | lenis               | 全局 Lenis 实例                            | Low    |
| Hero 视频视差 | CSS                 | background-attachment + transform      | Low    |
| 散落视差记忆卡片  | three + R3F + lenis | Three.js 自定义 ShaderMaterial，驱动 uniform | High   |
| 自定义光标     | CSS/JS              | 固定定位 div，mix-blend-mode                | Low    |
| 导航链接下划线   | CSS                 | ::after + transition                   | Low    |
| 折叠面板展开    | CSS/Framer Motion   | height transition + rotate icon        | Medium |
| Logo 跑马灯  | CSS                 | translateX infinite animation          | Low    |
| 数字入场动画    | CSS                 | @keyframes fadeInUp + animation-delay  | Low    |
| 按钮悬停光效    | CSS                 | background gradient + transition       | Low    |

## 状态与逻辑

- **Lenis ↔ R3F 桥接**: Lenis 的 scroll progress 通过 React Context 传递给 R3F Canvas，驱动卡片 Shader 的 `u_scroll_progr` uniform。使用 `useLenis` hook 实时读取滚动位置。
- **鼠标坐标转换**: 将 DOM 鼠标事件坐标通过 raycasting 转换为 Three.js 世界坐标，驱动 `u_mouse_x` / `u_mouse_y` / `u_mouse_hover` uniforms。
- **Custom Cursor 状态管理**: 在 LatestHighlights 区域内隐藏默认光标，显示自定义光标。离开区域时恢复。

## 其他关键决策

- **React Context**: 创建 `ScrollContext` 在 Lenis 和 R3F 之间共享滚动进度值。
- **R3F Canvas 位置**: Canvas 必须是 `position: absolute` 且放在 `sticky` 容器内，与 ScrollFixedHtml 同级。
- **Shader 实现**: 使用 `<shaderMaterial>` 的 `uniforms` prop 绑定所有 uniform 变量，通过 `useFrame` 每帧更新时间 uniform。
- **路由**: 使用 React Router v6 实现多页面（Home、Registration & Contact、Teams、Venue、Visit Shanghai）。
- **Lenis 全局初始化**: 在 App 根组件中初始化 Lenis，提供全局平滑滚动。
- **资源管理策略**: 
  - 布局类图片（背景图、展示图等）放在 `public/images/`，通过绝对路径引用（如 `/images/hero-bg.jpg`）
  - 组件级 logo 放在 `src/images/`，通过 ES Module `import` 方式引入，Vite 会自动优化并添加哈希后缀
  - 构建后，`public/images/` 原样复制到 `dist/images/`，`src/images/` 中的图片编译到 `dist/assets/`（带哈希）

