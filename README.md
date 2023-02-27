## 初始化
```
npm i
```

## 命令
```
// 打包
npm run electron:build
// 调试
npm run electron:serve
```

## 备注
### build出现下载错误提示时，在配置中添加镜像地址
```
// npm config edit
electron_mirror=https://npm.taobao.org/mirrors/electron/
electron-builder-binaries_mirror=https://npm.taobao.org/mirrors/electron-builder-binaries/


```
### 静态文件打包时会压缩，使用__static来拼接静态文件路径
