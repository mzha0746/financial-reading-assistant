# Windows 快速启动指南

## 步骤 1: 解压项目文件

将下载的 `hci-fin-demo.tar.gz` 解压到你的目标文件夹：
```
C:\Users\21426\Desktop\HCI_FIN\
```

如果你的Windows没有解压.tar.gz的工具，可以使用：
- 7-Zip (推荐): https://www.7-zip.org/
- WinRAR: https://www.winrar.com/

## 步骤 2: 安装Node.js（如果还没安装）

1. 访问 https://nodejs.org/
2. 下载并安装 LTS 版本（推荐 v18 或更高）
3. 安装完成后，打开 PowerShell 验证：
```powershell
node --version
npm --version
```

## 步骤 3: 进入项目目录

在 PowerShell 中：
```powershell
cd C:\Users\21426\Desktop\HCI_FIN\hci-fin-demo
```

## 步骤 4: 安装依赖

```powershell
npm install
```

这会下载所有必需的包（React, Vite, Tailwind CSS等）。
第一次安装可能需要 2-5 分钟。

## 步骤 5: 启动开发服务器

```powershell
npm run dev
```

你应该会看到类似这样的输出：
```
  VITE v5.2.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## 步骤 6: 在浏览器中打开

浏览器会自动打开，如果没有，手动访问：
```
http://localhost:3000
```

## 常见问题排查

### 问题 1: "npm: 无法将'npm'项识别为 cmdlet"
**解决方案**: Node.js 没有正确安装或没有添加到PATH。重新安装Node.js并确保勾选"Add to PATH"选项。

### 问题 2: 端口3000已被占用
**解决方案**: 编辑 `vite.config.js`，将端口改为其他值：
```javascript
server: {
  port: 3001,  // 改为其他端口
  open: true
}
```

### 问题 3: 依赖安装失败
**解决方案**: 尝试清除npm缓存：
```powershell
npm cache clean --force
npm install
```

### 问题 4: 页面空白或报错
**解决方案**: 
1. 检查浏览器控制台（F12）是否有错误
2. 确保所有文件都正确解压
3. 重新安装依赖：
```powershell
rm -r node_modules
npm install
```

## 项目结构预览

解压后应该有这样的结构：
```
hci-fin-demo/
├── src/
│   ├── components/       # React组件
│   ├── data/            # Mock数据
│   ├── App.jsx          # 主应用
│   ├── main.jsx         # 入口文件
│   └── index.css        # 样式
├── index.html
├── package.json         # 项目配置
├── vite.config.js       # Vite配置
├── tailwind.config.js   # Tailwind配置
└── README.md            # 详细文档
```

## 下一步开发

项目启动后，你可以：

1. **修改Mock数据**: 编辑 `src/data/mockData.js` 添加更多术语或改变文档内容
2. **调整样式**: 编辑 `src/index.css` 或使用Tailwind类
3. **添加新功能**: 在 `src/components/` 中创建新组件
4. **集成后端**: 准备好后可以添加API调用

## 热重载

Vite支持热重载，修改代码后浏览器会自动刷新，无需手动重启服务器。

## 停止服务器

在PowerShell中按 `Ctrl + C` 即可停止开发服务器。

## 构建生产版本

准备部署时：
```powershell
npm run build
```

生产文件会输出到 `dist/` 目录，可以部署到任何静态网站托管服务。

## 需要帮助？

查看详细文档：`README.md`
或检查浏览器控制台（F12）的错误信息。
