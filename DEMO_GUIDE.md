# 📸 项目演示说明

## 界面预览

### 主界面布局

```
╔═══════════════════════════════════════════════════════════════════════╗
║  🎯 Mixed-Initiative Financial Reading Assistant                     ║
║  AI-Powered 10-K Analysis with Uncertainty Quantification            ║
╠════════════════════════════════╦══════════════════════════════════════╣
║                                ║                                      ║
║  📄 DOCUMENT PANEL             ║  🤖 AI ASSISTANT PANEL               ║
║                                ║                                      ║
║  Tesla Inc. - Form 10-K        ║  [AI Avatar] AI Assistant            ║
║  Annual Report (2023)          ║  Ask questions or explore terms      ║
║  ────────────────────          ║                                      ║
║                                ║  ┌─────────────────────────────┐    ║
║  Click highlighted terms for   ║  │ Welcome! I'm your AI        │    ║
║  AI-powered explanations       ║  │ financial reading           │    ║
║                                ║  │ assistant...                │    ║
║  Confidence Levels:            ║  └─────────────────────────────┘    ║
║  🟢 High (>90%)                ║                                      ║
║  🟡 Medium (70-90%)            ║  💡 Suggested Questions:             ║
║  🔴 Low (<70%)                 ║  ┌─────────────┬─────────────┐      ║
║  ────────────────────          ║  │ Is Tesla's  │ How does    │      ║
║                                ║  │ financial   │ Tesla       │      ║
║  Item 1. Business Overview     ║  │ health      │ compare to  │      ║
║                                ║  │ strong?     │ competitors?│      ║
║  Tesla, Inc. was incorporated  ║  └─────────────┴─────────────┘      ║
║  in Delaware on July 1, 2003.  ║  ┌─────────────┬─────────────┐      ║
║  We design, develop,           ║  │ What are    │ Explain the │      ║
║  manufacture...                ║  │ the key     │ revenue     │      ║
║                                ║  │ risks?      │ trends      │      ║
║  Our total revenue was         ║  └─────────────┴─────────────┘      ║
║  $96.77B, representing 18.8%   ║                                      ║
║  increase. Our EBITDA was      ║  ┌──────────────────────────┐       ║
║          ═══════               ║  │ Ask about the report...   │       ║
║  $15.3B, with EBITDA margin    ║  └──────────────────────────┘       ║
║  of 15.8%.                     ║  [Send]                              ║
║    ↑                           ║                                      ║
║  Green underline = High        ║                                      ║
║  confidence term               ║                                      ║
║                                ║                                      ║
║  Our current ratio stood at    ║                                      ║
║         ════════════           ║                                      ║
║  1.73, and debt-to-equity      ║                                      ║
║       ══════════════           ║                                      ║
║  ratio was 0.17...             ║                                      ║
║                                ║                                      ║
╠════════════════════════════════╩══════════════════════════════════════╣
║  Research Demo • HCI Study • Tesla Inc. 10-K (Mock Data)             ║
╚═══════════════════════════════════════════════════════════════════════╝
```

## 点击术语后的弹窗

```
╔═══════════════════════════════════════════════════════════╗
║  EBITDA                                              [X]   ║
║  Earnings Before Interest, Taxes, Depreciation, and       ║
║  Amortization                                             ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  📖 Explanation                                           ║
║  ─────────────────────────────────────────────────────    ║
║  EBITDA is a measure of a company's operating             ║
║  performance. It shows how much profit a company          ║
║  makes before accounting for interest payments,           ║
║  taxes, depreciation, and amortization. For Tesla's       ║
║  $15.3B EBITDA, this means...                            ║
║                                                           ║
║  📊 Industry Context                                      ║
║  ─────────────────────────────────────────────────────    ║
║  ┌─────────────────────────────────────────────────┐     ║
║  │ Tesla's EBITDA margin of 15.8% is above the     │     ║
║  │ automotive industry average of 12-14%,          │     ║
║  │ indicating strong operational efficiency.       │     ║
║  └─────────────────────────────────────────────────┘     ║
║                                                           ║
║  📄 Confidence Assessment                                 ║
║  ─────────────────────────────────────────────────────    ║
║  ┌─────────────────────────────────────────────────┐     ║
║  │ ✓ High Confidence                         92%   │     ║
║  │                                                  │     ║
║  │ EBITDA is a standardized accounting metric      │     ║
║  │ with clear regulatory definitions. The          │     ║
║  │ calculation is directly derived from audited    │     ║
║  │ financial statements.                           │     ║
║  │                                                  │     ║
║  │ ████████████████████████████████░░░░░░  92%     │     ║
║  └─────────────────────────────────────────────────┘     ║
║                                                           ║
║  Sources from Document                                    ║
║  ─────────────────────────────────────────────────────    ║
║  ┌─────────────────────────────────────────────────┐     ║
║  │ "Total revenue was $96.77 billion"              │     ║
║  │ 📍 Section 1, Paragraph 3                       │     ║
║  └─────────────────────────────────────────────────┘     ║
║  ┌─────────────────────────────────────────────────┐     ║
║  │ "EBITDA for the same period was $15.3 billion"  │     ║
║  │ 📍 Section 1, Paragraph 3                       │     ║
║  └─────────────────────────────────────────────────┘     ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║              [Close]                                      ║
╚═══════════════════════════════════════════════════════════╝
```

## 颜色方案

### 主题色
- **主色调**: 蓝色 (#2563eb) 到靛蓝 (#4f46e5) 渐变
- **背景**: 灰白色 (#f9fafb)
- **边框**: 浅灰 (#e5e7eb)

### 置信度颜色
```
高置信度 (>90%):
  背景: rgba(16, 185, 129, 0.2)  // 浅绿色
  边框: #10b981                   // 绿色
  图标: ✓ (绿色对勾)

中置信度 (70-90%):
  背景: rgba(245, 158, 11, 0.2)  // 浅黄色
  边框: #f59e0b                   // 黄色
  图标: ⚠ (黄色警告)

低置信度 (<70%):
  背景: rgba(239, 68, 68, 0.2)   // 浅红色
  边框: #ef4444                   // 红色
  图标: ⚠ (红色警告)
```

## 交互动效

### 1. 术语高亮悬停效果
```
初始状态:
  - 彩色下划线
  - 淡色背景

悬停时:
  - 轻微上移 (translateY(-1px))
  - 添加阴影
  - 底部显示提示框
```

### 2. 弹窗动画
```
打开:
  - 从中心缩放进入
  - 背景渐变变暗

关闭:
  - 淡出消失
```

### 3. 置信度进度条
```
初始: 0%
动画: 平滑填充到目标百分比
持续: 300ms
缓动: ease-out
```

## 响应式特性

虽然当前版本针对桌面优化，布局考虑了：
- 最小宽度: 1280px
- 推荐分辨率: 1920x1080
- 双面板各占50%
- 可滚动内容区域

## 可访问性特性

- ✅ 键盘导航支持
- ✅ 语义化HTML结构  
- ✅ 清晰的颜色对比
- ✅ 可读的字体大小
- ✅ 屏幕阅读器友好

## 浏览器兼容性

测试通过:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

## 性能优化

- React.StrictMode 开发模式检查
- 组件按需渲染
- 事件处理优化
- CSS动画使用transform（GPU加速）
