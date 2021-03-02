# webpack-vue

## 简介

- 简介

  ![image-20210206214656255](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206214700.png)

- 安装

  ![image-20210206214920196](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206214921.png)

## 使用

- 初步使用

  ![image-20210206220012994](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206220014.png)

  ![image-20210206220520386](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206220521.png)

  ![image-20210206221824093](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206221825.png)

## loader 加载器

- 简介

  ![image-20210206223741768](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206223743.png)

### css 文件

![image-20210206224102620](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206224103.png)

### less 文件

![image-20210206224249674](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206224251.png)

### 图片文件

![image-20210206225610119](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206225611.png)

我对 publicPath 这个参数没啥了解，它除了在 output 中有，在别的 loader 中 options 也能配置，还是将 output 中的 publicPath 设置成 './'，别的出了问题在单独设置吧

### ES6 语法

![image-20210206225705480](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206225706.png)

## plugin 插件

- 简介

  ![image-20210207132001319](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207132003.png)

### BannerPlugin 添加版权

- BannerPlugin 添加版权

  ![image-20210207132238459](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207132239.png)

### HtmlWebpackPlugin 打包html文件

- HtmlWebpackPlugin 打包html文件

  ![image-20210207132643189](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207132644.png)

### uglifyjs-webpack-plugin 压缩js

- 简介

  ![image-20210207132758787](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207132759.png)

  好像在 webpack5 中，将 mode 设置为 production 运行环境，js 代码会被自动压缩

### webpack-dev-server 搭建本地服务器

- 简介

  ![image-20210207133041700](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207133101.png)

## 配置文件的整理

![image-20210207134647257](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207134649.png)