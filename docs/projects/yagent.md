# yagent

项目介绍：
> 这是一个名为 YAgent 的 AI 聊天助手应用，版本 1.0.9，是一个基于 Vue 3 + Vite + Ant Design Vue 的现代化前端项目，同时支持 Electron 桌面应用打包。

## 技术栈

* 框架: Vue 3 `(Composition API + <script setup> 语法)`
* 构建工具: Vite 5.0
* UI 组件库: Ant Design Vue 4.1.1
* 路由: Vue Router 4.2.5
* 图标: Lucide Vue Next
* 流程图: Vue Flow (用于工作流功能)
* 桌面应用: Electron 28.1.0
* 代码高亮: Prism.js
* Markdown: Marked

## 项目架构目录

```
src/
├── modules/          # 业务模块（模块化架构）
│   ├── auth/        # 认证模块
│   ├── chat/        # 聊天模块  
│   └── workflow/    # 工作流模块
├── core/            # 核心功能
│   ├── api/         # API 接口层
│   ├── hooks/       # 通用 hooks
│   ├── plugins/     # 插件配置
│   ├── utils/       # 工具函数
│   └── constants/   # 常量定义
├── components/      # 通用组件
├── views/           # 页面组件
├── router/          # 路由配置
└── styles/          # 样式文件
```

##  业务功能

* 用户认证: SSO 单点登录系统
* AI 对话: 多种 AI 助手（对话、运维百晓生、运维助手、故障检测）
* 工作流: 可视化流程编辑器
* 权限管理: 基于角色的权限控制
* 实时通信: WebSocket 和 SSE 连接

## 开发环境维度
* 多环境配置: 支持 dev/test/prod 三套环境
* 代理配置: 已配置 SSO 和权限 API 代理
* 路径别名: 完善的路径别名配置（@、@core、@modules 等）
* Electron 支持: 可打包为桌面应用

## 代码规范维度
* 使用 Vue 3 Composition API
* 采用模块化架构设计
* TypeScript 支持（部分文件）
* 统一的 API 接口管理