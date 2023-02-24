const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      builderOptions: {
        "appId": "com.may.app",
        "productName": "vue-electron-project",//项目名，也是生成的安装文件名，即aDemo.exe
        "win": {
            "icon": "./public/img/Keep.ico"//这里注意配好图标路径
        }
        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  },
})

