# webpack 基础

[webpack官网](https://www.webpackjs.com/guides/getting-started/)

[webpack插件(github)](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)

- 简介

  尚硅谷_熊健 - 是第四版本的

  与最新版本有很大差别（听听概念即可，命令看上面的官网）

  ![image-20210131130743951](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131130812.png)
  
  ![image-20210131132155291](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131132156.png)
  
  webpack - 前端资源构建工具、静态模块打包工具
  
  浏览器无法识别 css预处理器(如：less)，js 的高级语法(如：模块化)
  
  不同的编译工具，分别维护就很麻烦 —— **构建工具**，包含整合各个小的编译工具
  
  引入不同的资源（依赖）—— **模块打包**工具，形成 chunk 块（代码块），资源整合后，输出成 bundle

## webpack 五个核心概念

### Entry

- 简介

  入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

### Output

- 简介

  输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

### Loader

- 简介

  Loader 让 webpack 能够去处理那些非 JavaScript 文件(webpack 自身只理解
  JavaScript)

  webpack 只能处理 js 和 json 文件，对于别的文件，如：css img 文件，就需要 Loader 将其“翻译”为 js 文件

### Plugins

- 简介

  Loader 只能对别的资源进行翻译

  插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

### Mode

- 简介

  开发模式 - 生产模式

  ![image-20210131132809089](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131132810.png)

## Webpack 命令

### 命令行简单编译

npm list 查看此目录下安装的包

npm list -g 查看全局安装的包

npm list -g --depth x 

​	查看全局安装的包，输出时只输出到第 x 层级

... | more 输出并浏览

![image-20210131151519867](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131151521.png)

- 安装

  npm i webpack webpack-cli -g

  npm i webpack webpack-cli -D

  webpack --mode=development

  webpack --mode=production

  -o <输出目录>

  ![image-20210131162328909](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131162331.png)

  改动

  ![image-20210131163314062](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131163315.png)

  ![image-20210131162950274](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131162951.png)

  ![image-20210131164319790](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131164321.png)
  
  结论：
  
  1. webpack 能处理 js/json 资源，但不能处理 css/img 等其他资源
  2. 生产环境和开发环境将 ES6 模块化编译成浏览器能识别的代码
  3. 生产环境比开发环境多了一个压缩 js 代码的步骤

![image-20210131173219849](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131173221.png)

### 开发环境编译不同文件

- 简介

  编译 js和json资源，可以通过命令行直接编译，但编译其他资源，需要借助 Loader和配置文件

#### 配置文件模板

- 初始配置文件

	![image-20210131174928981](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131174930.png)

#### 编译 css 文件

css-loader style-loader

- 编译 css 文件

	![image-20210131175329040](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131175330.png)

#### 编译 less 文件

less less-loader css-loader style-loader

- 编译 less 文件

  ![image-20210131180748982](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131180750.png)

#### 生成 html 文件

html-webpack-plugin



![image-20210131203923712](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131203925.png)

![image-20210131204718894](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131204720.png)

上述的有误，看下面的

![image-20210131211436534](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131211437.png)

![image-20210131211442915](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131211445.png)

![image-20210131212010209](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131212011.png)

因为找错，命令敲了多遍，然后真的全记住了



注意：

![image-20210202151029043](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202151030.png)

#### 编译图片资源

npm i file-loader url-loader -D

好像使用 url-loader 或 file-loader 都能编译成功？

![image-20210131235112564](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131235114.png)

![image-20210131234503981](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131235120.png)

![image-20210131235139023](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210131235143.png)

让 html 能够处理 图片问题

![image-20210201090646293](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201090650.png)

是处理图片，不仅仅是处理路径（是我局限了）

![image-20210201092818066](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201092819.png)

过程有点坎坷，配置文件见下：

![image-20210201093557091](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201093558.png)

#### 其他资源

如：字体图标，不需要做任何处理，直接输出就行

![image-20210201095941561](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201095942.png)

#### devServer

- 简介

  避免重复打包 - 自动打包，自动运行服务器

![image-20210201102644135](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201102645.png)

![image-20210201102654843](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201102656.png)

新命令是 webpack serve 那就不需要 npx了呀

#### 开发环境的配置（总）

再安装一下 clean-webpack-plugin

webpack-dev-server 在此项目中能实现自动编译效果，但在浏览器中无法看到，但在上一个子项目中尝试，却是可行的，一脸懵逼，先这样跳过吧

![image-20210201131738574](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201131740.png)

但在上一个简单子项目中尝试，是成功的

webpack.config.js 文件粘贴在下面，应该大体没错，可能是 webpack-dev-server 和谁冲突了吧

```js
/**
 * 开发环境的配置：能让代码运行即可
 * 运行项目指令
 *  webpack 会将打包结果输出出去
 *  webpack serve 只会在内存中编译打包，没有输出
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js', // 入口文件的输出文件名
    path: path.resolve(__dirname, 'build'), // 所有输出文件的路径
    publicPath: './', // 这个参数是干嘛的？输出文件中如果有路径，在路径以此打头？
  },
  module: {
    rules: [
      // loader 的配置
      {
        // 处理 less 资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', ]
      },
      {
        // 处理 css 资源
        test: /\.css/,
        use: ['style-loader', 'css-loader', ]
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader', // 对 file-loader 进行了优化，能进行压缩
        options: {
          limit: 1024 * 8,
          outputPath: 'img',
          name: '[name]-[hash:8].[ext]' // 输出文件目录下的输出名
        }
      },
      {
        // 处理 html 中 img 的图片路径问题
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(js|json|html|css|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[name]-[hash:8].[ext]'
        }
      }

    ]
  },
  plugins: [
    // plugins 的配置
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3020,
    open: true,
    hot: true,
  }

}

```

package.json 能够直接下载包

```json
{
  "name": "10all",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open chrome.exe"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^5.0.1",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.1",
    "less": "^4.1.1",
    "less-loader": "^7.3.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.19.0",
    "webpack-cli": "^4.4.0",
    "webpack-dev-server": "^3.11.2"
  }
}

```

—— 包的版本很重要，如果和老师的版本不一样，可能会出现莫名的错误（学习时，不知道学最新版本是好是坏）

### 生产环境编译不同文件

- 简介

  性能优化：

  css是整合在js中的——js体积就超大，会有闪屏现象

  代码压缩

  兼容性问题：样式前缀，js 语法

#### css 样式文件

##### 提取 css 文件

mini-css-extract-plugin 插件

![image-20210201141409632](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201141410.png)

注：

![image-20210202152206071](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202152207.png)

[mini-css-extract-plugin 插件快速入门](https://blog.csdn.net/weixin_34159110/article/details/91367334)

##### css 兼容性处理

使用 postcss-loader postcss-preset-env 

配置比较 绕

![image-20210201163423635](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201163424.png)

也可以配置在 package.json 中（遇到的问题是因为配置的写法问题）

[postcss-loader](https://github.com/webpack-contrib/postcss-loader/blob/master/README.md#config)

[PostCSS Preset Env](https://github.com/csstools/postcss-preset-env/blob/master/INSTALL.md#webpack)

[browserslist](https://github.com/browserslist/browserslist#readme)

![image-20210201165338838](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201165340.png)

![image-20210201165609256](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201165610.png)

~~不一定，可能起重要了，但production 要求的兼容性不需要这么好~~

起效了，下面的能说明了，但不清楚根据不同的兼容性要求会生成什么样的 css 代码

![image-20210202130422560](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202130424.png)

browserlist 的配置方法-结

![image-20210201172209107](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201172210.png)

##### css 的压缩

npm i -D optimize-css-assets-webpack-plugin

![image-20210201190614529](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201210343.png)

#### js 文件

##### 语法检查

![image-20210201205312711](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201210351.png)

![image-20210201205544572](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201210355.png)

![image-20210201224111454](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210201224113.png)

##### js 兼容性

js 兼容性处理：@babel/core babel-loader @babel/preset-env

基本 js 兼容性处理 @babel/preset-env

只能转换基本语法，如 Promise 不能转换

![image-20210202000555331](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202000556.png)

全部 js 兼容性处理 @babel/polyfill

问题：只需要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了

![image-20210202002059063](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202002100.png)

需要做兼容性处理的就做处理 - 按需加载 core-js

![image-20210202120143199](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202120144.png)

不知道为什么解析 corejs 的两个文件失败了

因为下载错包了（下成了corejs），这里重新下载 core-js 就能成功编译了

![image-20210202120552518](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202120553.png)

##### js 的压缩

![image-20210202123117833](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202123119.png)

#### html 文件

- html 标签，认识就是认识，不认识就是不认识，无法进行兼容性处理

##### html 的压缩

![image-20210202123445243](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202123446.png)

#### 生产环境的配置（总）

![image-20210202152206071](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202152207.png)

使用 clean-webpack-plugin

![image-20210202154839293](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202154840.png)

##### 配置文件

package.json

```json
{
  "name": "18all",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/polyfill": "^7.12.1",
    "@babel/preset-env": "^7.12.11",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "core-js": "^3.8.3",
    "css-loader": "^5.0.1",
    "eslint": "^7.19.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-import": "^2.22.1",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.1",
    "less": "^4.1.1",
    "less-loader": "^7.3.0",
    "mini-css-extract-plugin": "^1.3.5",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "postcss": "^8.2.4",
    "postcss-loader": "^4.2.0",
    "postcss-preset-env": "^6.7.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.19.0",
    "webpack-cli": "^4.4.0",
    "webpack-dev-server": "^3.11.2"
  },
  "browserslist": {
    "development": [
      "last 2 versions"
    ],
    "production": [
      "> 0.1%",
      "not dead"
    ]
  },
  "eslintConfig": {
    "extends": "airbnb-base"
  }
}

```



webpack.config.js

```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 定义 nodejs 环境变量：决定使用 browserslist 的哪个环境
process.env.NODE_ENV = 'production'

// 复用 loader
const CommonCssLoader = [
  // 'style-loader',
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../'
    }
  },
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env'
          ]
        ]
      }
    }
  },
]

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ...CommonCssLoader, // ... 运算符，展开数组中的内容
        ]
      },
      {
        test: /\.less$/,
        use: [
          ...CommonCssLoader,
          'less-loader',
        ]
      },
      /*
      正常来讲，一个文件只能被一个 loader 处理
      当一个文件要被多个 loader 处理时，要指定 loader 的执行顺序
      ——先执行 eslint 再执行 babel
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: '3',
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '6',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 8,
          outputPath: 'img',
          name: '[name]-[hash:8].[ext]',
          // esModule: false,
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|json|html|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    })
  ],
  mode: 'production'
}
```

## webpack 性能优化

- 开发环境性能优化
  + 优化打包构建速度
  + 优化代码调试
- 生产环境性能优化
  + 优化打包构建速度
  + 优化代码运行性能

### HMR

webpack-dev-server 之前的问题没有解决

把 08其他资源的 子项目复制过来，不使用 10开发环境基本配置 子项目

一个模块发生变化，只会重新打包这个模块，而不是打包所有模块，极大提升构建速度

![image-20210202184800787](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202184802.png)

### source-map

一种提供源代码到构建后代码的映射技术

![image-20210202202147003](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202202148.png)

![image-20210202202538841](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202202540.png)

### oneOf

防止文件被多个不相干的 loader 加载器检查

![image-20210202205911591](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/webpack/20210202205912.png)

### 缓存

下面的课程先鸽掉（有webpack基础就行）