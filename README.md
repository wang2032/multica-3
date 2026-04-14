# 待办事项 (Todo App)

一个基于 React + TypeScript 的轻量级待办管理应用，使用 Vite 构建。

## 技术栈

- **前端框架**: React 19
- **开发语言**: TypeScript
- **构建工具**: Vite 8
- **样式**: CSS (CSS Modules)

## 项目结构

```
src/
├── pages/                    # 页面入口
│   ├── TodoPage.tsx         # 待办页面
│   └── TodoPage.css
├── components/               # 通用组件（暂无）
├── features/
│   └── todos/
│       ├── components/       # 待办相关组件
│       │   ├── AddTodo.tsx   # 新增任务表单
│       │   ├── TodoList.tsx  # 任务列表
│       │   └── TodoItem.tsx  # 任务项
│       └── hooks/
│           └── useTodos.ts   # 待办状态管理 Hook
├── services/                 # 数据处理层
│   └── todoService.ts        # 待办服务（localStorage 持久化）
├── types/                    # TypeScript 类型定义
│   └── todo.ts
└── utils/                    # 工具函数（暂无）
```

## 功能特性

- 待办列表展示（显示标题、状态、创建时间）
- 新增待办任务
- 切换任务状态（待办 <-> 已完成）
- 数据本地持久化（localStorage）

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用说明

1. **添加任务**: 在页面顶部的输入框中输入任务标题，点击"添加"按钮或按回车键
2. **完成任务**: 点击任务左侧的复选框，将其标记为已完成
3. **恢复任务**: 再次点击已完成的复选框，可将其恢复为待办状态

## 后续扩展

项目架构支持以下扩展：

- 删除任务功能
- 任务详情页
- 任务筛选（全部/待办/已完成）
- 任务搜索
- 后端 API 集成

## 代码规范

- 使用 `type` 关键字进行类型导入
- 组件使用函数式组件 + Hooks
- 样式文件与组件文件同名后缀 `.css`