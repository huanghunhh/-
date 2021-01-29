# TS 基础

## 引入

### 简介

- 简介

  尚硅谷_李立超老师

  JS 灵活不咋会报错

  测试可能不会出问题，但发布后运行时，用户会遇到问题

  JS 易学易用 ，但会埋下安全隐患

  且，JS 维护也比较难

  JS 开发挺快的，但维护会要命

  JS 中变量是没有类型的，想存储啥就能存储啥 - 动态类型（只有值有类型）

  JS 函数的参数也没有类型 - 有错误，但不会报错，然后之后再使用，出错了才报错，然后就，不知道错在哪（报错提示让人一脸懵逼）

  但，JS 在前端无法代替，又想解决这些问题 - 曲线救国 - TS

- TS

  TS 是 JS 的延伸，对 JS 进行了扩展（最重要的是引入了类型的概念，变成了静态语言）

  ![image-20210127131727101](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127131728.png)

### TS 开发环境

- TS 解析器

  使用 nodejs 写的 

  ![image-20210127140353489](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127140355.png)

## TS 语法

### 类型声明

声明和赋值分开

同时进行声明和赋值

函数参数的类型定义，定义函数的返回值的类型

![image-20210127143019370](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127143029.png)

![image-20210127153538604](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127153540.png)

![image-20210127154055394](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127154056.png)

### 各种类型

![image-20210127172910869](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127172912.png)

any unknown void never 类型断言

![image-20210127162324887](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127162326.png)

对象

![image-20210127164541138](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127164542.png)

函数

![image-20210127165301365](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127165302.png)

数组

![image-20210127171130205](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127171131.png)

元组

![image-20210127171535432](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127171536.png)

枚举

![image-20210127172313856](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127172315.png)

& 类型别名

![image-20210127172820592](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127172822.png)

## TS 编译

### 命令

- tsc 文件 -w

  仅针对单个文件

  ![image-20210127203053836](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127203055.png)

  ![image-20210127204953296](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127204954.png)

- tsc

  能对目录下的所有 ts 文件，进行监视编译

  需要配置文件

  ![image-20210127204012287](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127204015.png)

### 配置 tsconfig.json 文件

- 常规配置

  ![image-20210127205120136](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127205121.png)

  indluce exclude extends files

  ![image-20210127205215272](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127205216.png)

  compilerOptions 编译器的选项

  ![image-20210127220105572](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127220106.png)

  ![image-20210127230118895](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127230120.png)

- 语法检查相关

  ![image-20210127232134646](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210127232135.png)

### 文件代码

- 文件 tsconfig.json

  ```json
  {
    /* 此 json 文件可以写注释
     * tsconfig.json 是 ts 编译器的配置文件，ts 编译器可以根据它的信息来对代码进行编译 
     * include 用来指定哪些 ts 文件需要被编译 
     *  路径：**-任意目录 *-任意文件
     * exclude 不需要被编译的文件目录（一般不需要设置）
     *  有默认值：["node_modules", "bower_components", "jspm_packages"]
     * extends 定义被继承的配置文件
     * files 指定被编译文件的列表，只有需要编译的文件少时才会用到
    */
    "include": [
      "./src/**/*"
    ],
    // "exclude": [
    //   "./src/hello/**/*"
    // ]
  
    /*
    * compilerOptions 编译器的选项
    */
    "compilerOptions": {
      // target 用来指定 TS 被编译为的 ES 的版本，默认为 ES3
      // 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
      "target": "ES3",
  
      // module 指定要使用的模块化规范
      // 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015', 'ES2020' or 'ESNext'. Only 'AMD' and 'System' can be used in conjunction with --outFile.
      "module": "ES2015",
      
      // lib 用来指定项目中要使用的库 - 一般不改动
      // "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", "ES2015.Symbol.WellKnown", "ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object", "ES2017.SharedMemory", "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator", "ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", "ES2019", "ES2019.Array", "ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise", "ES2020.String", "ES2020.Symbol.WellKnown", "ESNext", "ESNext.Array", "ESNext.AsyncIterable", "ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", "ESNext.Symbol", "DOM", "DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts".
      // 默认的值：就是浏览器的运行环境
      // node的 - 就根据需要指定
      // "lib": ["xx"] // 这样是啥也不用，然后写代码时就没提示了 - 比如 document
      
      // outDir 用来指定编译后的文件所在的目录
      // 将源码和编译后的代码分离开
      "outDir": "./dist",
  
      // outFile 将代码合并为一个文件 - 使用不多（结合打包工具）
      // 设置 outFile 后，所有的全局作用域中的代码会直接合并到同一个文件中
      // 如果有模块化，则会报错（或模块化规范为 amd 或 system）
      "outFile": "./dist/app.js",
  
      // allowJs 是否对 js 文件进行编译，默认是 false 
      "allowJs": false,
      // checkJs 是否检查 js 代码是否符合 TS 语法规范，默认是 false
      "checkJs": false,
  
      // removeComments 是否移除注释，默认是 false
      "removeComments": false,
  
      // noEmit 不生成编译后的文件（就是检查一下语法，用的不多），默认是 false
      "noEmit": false,
  
      // noEmitOnError 当有错误时，不生成编译后的文件，默认是 false
      "noEmitOnError": false,
  
      // 语法检查相关    
      // strict 所有严格检查的总开关，默认是 false（全关闭）
      // true - 全打开
      "strict": false,
  
      // alwaysStrict 用来设置编译后的文件是否使用严格模式，默认是 false
      // js 中有模块代码时，默认进入严格模式
      "alwaysStrict": false,
  
      // noImplicitAny 不允许隐式 any 类型，默认是 false，
      // true 就会检查隐式的 any 类型
      "noImplicitAny": false,
  
      // noImplicitThis 不允许不明确类型的 this
      "noImplicitThis": false,
  
      // strictNullChecks 严格的检查空值
      "strictNullChecks": false
    }
  }
  
  ```

  

## 打包工具

![image-20210128150032992](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128150034.png)

### Webpack 结合 typescript

webpack - 核心包

webpack-cli - Webpack命令行工具

typescript - 核心包

ts-loader - 整合Webpack和ts

![image-20210128100728574](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128100730.png)

对 webpack ts 进行相关配置

![image-20210128101352158](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128101356.png)

webpack.config.js

```js
// 引入一个包
const path = require('path')

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件名
    filename: "bundle.js"
  },
  // 指定 Webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的 loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  }
}

```

tsconfig.json
```json
{
  "compilerOptions": {
    "module": "ES2015",
    "target": "ES2015",
    "strict": true
  }
}

```

package.json

```json
{
  "name": "10webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^8.0.14",
    "typescript": "^4.1.3",
    "webpack": "^5.18.0",
    "webpack-cli": "^4.4.0"
  }
}

```

### Webpack 插件

html-webpack-plugin 插件 - 由Webpack创建html文件，并引入相关资源

![image-20210128103422904](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128103424.png)

自定义生成 html 的相关配置

![image-20210128103651888](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128103653.png)

webpack-dev-server 插件 - 内置服务器，根据代码自动刷新浏览器

![image-20210128111407368](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128111408.png)

clean-webpack-plugin 插件 - 先删除生成目录中的文件，再生成新的编译文件

![image-20210128112647896](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128112649.png)

引用模块的配置

![image-20210128113818348](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128113819.png)

### 结合 babel

![image-20210128150124375](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128150125.png)

@babel/core - babel核心工具

@babel/preset-env - 预先设置的环境 - 预置了能够转换的浏览器环境

babel-loader - 把babel和 webpack做个结合的工具

core-js - js的模拟运行环境，让老版本的浏览器能够运行新技术

进行 babel 加载器的配置

![image-20210128131054999](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128131056.png)

配置说明

![image-20210128131116077](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128131117.png)

![image-20210128131125657](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128131126.png)

### 文件代码

- webpack.config.js

  ```js
  // 引入一个包
  const path = require('path')
  // 引入 html 插件
  const HTMLWebpackPlugin = require('html-webpack-plugin')
  // 引入 clean 插件
  const {CleanWebpackPlugin} = require('clean-webpack-plugin')
  
  // webpack 中的所有配置信息都应该写在 module.exports 中
  module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
      // 指定打包文件的目录
      path: path.resolve(__dirname, 'dist'),
      // 打包后文件的文件名
      filename: "bundle.js",
  
      // 告诉 webpack 不要使用箭头函数（为了兼容 ie 浏览器）
      environment: {
        arrowFunction: false
      }
    },
    // 指定 Webpack 打包时要使用的模块
    module: {
      // 指定要加载的规则
      rules: [
        {
          // 指定规则生效的文件
          test: /\.ts$/,
          // 要使用的 loader
          use: [ // 从后往前执行
            // 配置 babel
            {
              // 配置选项多，需要用对象
              // 指定加载器
              loader: 'babel-loader',
              // 设置 babel
              options: {
                // 设置预定义的环境
                presets: [
                  [
                    // 指定环境的插件
                    "@babel/preset-env",
                    // 配置信息
                    {
                      // 要兼容的目标浏览器
                      targets: {
                        "chrome": "58",
                        "ie": "11"
                      },
                      // 指定 core.js 的版本
                      "corejs": "3",
                      // 使用 corejs 的方式
                      // usage 按序加载
                      "useBuiltIns": "usage",
                    }
                  ]
                ]
              }
            },
            'ts-loader',
          ],
          // 要排除的文件
          exclude: /node_modules/
        }
      ]
    },
    // 配置 Webpack 插件
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        // title: "自定义title"
        template: "./src/index.html"
      }),
    ],
    // 用来设置引用模块
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
  
  ```

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "module": "ES2015",
      "target": "ES2015",
      "strict": true,
      "noEmitOnError": true
    }
  }
  
  ```

- package.json

  ```json
  {
    "name": "10webpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack",
      "start": "webpack serve --open chrome.exe"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@babel/core": "^7.12.10",
      "@babel/preset-env": "^7.12.11",
      "babel-loader": "^8.2.2",
      "clean-webpack-plugin": "^3.0.0",
      "core-js": "^3.8.3",
      "html-webpack-plugin": "^4.5.1",
      "ts-loader": "^8.0.14",
      "typescript": "^4.1.3",
      "webpack": "^5.18.0",
      "webpack-cli": "^4.4.0",
      "webpack-dev-server": "^3.11.2"
    }
  }
  
  ```

## 面向对象

- 对象简介

  ![image-20210128161217797](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128161219.png)

  程序实际上就是对我们现实中事物的一个抽象（抽象相对具体）

  一个实物，抽象到了程序里，就是一个对象

  JS 的面向对象

  属性 与 方法

- 类简介

  ![image-20210128163858544](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128163859.png)

  类实际上就是对象的模型

  TS 和 JS 的类差不多

### 类的定义

![image-20210128191735125](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128191736.png)

![image-20210128193613878](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128193615.png)

### 构造函数

![image-20210128195314252](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128195315.png)

### 类的继承

TS 会检查不同 TS 文件中的变量名是否重复 - 写个立即执行函数

OCP开闭原则 对扩展开放，对修改关闭

![image-20210128223720044](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128223721.png)

### 继承中的 super

父类也称超类

![image-20210128231512908](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128231514.png)

### 抽象类

![image-20210128232638713](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128232641.png)

### 接口

接口 与 抽象类 相似

抽象类专门用作别的类的继承，里面可以有非抽象的属性或方法 abstract extends

接口限制类必须实现，里面都是抽象的属性或方法 interface implements

接口是 TS 独有的语法，JS 中没有

![image-20210128234501666](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210128234502.png)

### 属性的封装

![image-20210129113454060](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129113455.png)

![image-20210129113502912](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129113504.png)###

### 泛型

![image-20210129115013396](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129115014.png)

## 项目练习

### less postcss

对 less 的处理

![image-20210129145120727](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129145122.png)

![image-20210129145356251](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129145357.png)

css 样式的兼容 postcss

![image-20210129150910192](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129150911.png)

### 项目开发

![image-20210129170523491](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129170524.png)

![image-20210129165831122](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129165958.png)

### 项目代码

#### 项目目录

![image-20210129215846012](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/TS基础/20210129215847.png)

#### 配置文件

- package.json

  ```json
  {
    "name": "22projectsnake",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack",
      "start": "webpack serve --open chrome.exe"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@babel/core": "^7.12.10",
      "@babel/preset-env": "^7.12.11",
      "babel-loader": "^8.2.2",
      "clean-webpack-plugin": "^3.0.0",
      "core-js": "^3.8.3",
      "css-loader": "^5.0.1",
      "html-webpack-plugin": "^4.5.1",
      "less": "^4.1.0",
      "less-loader": "^7.3.0",
      "postcss": "^8.2.4",
      "postcss-loader": "^4.2.0",
      "postcss-preset-env": "^6.7.0",
      "style-loader": "^2.0.0",
      "ts-loader": "^8.0.14",
      "typescript": "^4.1.3",
      "webpack": "^5.18.0",
      "webpack-cli": "^4.4.0",
      "webpack-dev-server": "^3.11.2"
    }
  }
  
  ```

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "module": "ES2015",
      "target": "ES2015",
      "strict": true,
      "noEmitOnError": true
    }
  }
  
  ```

- webpack.config.js

  ```js
  const path = require('path')
  const HTMLWebpackPlugin = require('html-webpack-plugin')
  const {CleanWebpackPlugin} = require('clean-webpack-plugin')
  
  module.exports = {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
      // 兼容 ie 浏览器
      environment: {
        arrowFunction: false,
        const: false
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        "chrome": "58",
                        "ie": "11"
                      },
                      "corejs": "3",
                      "useBuiltIns": "usage"
                    }
                  ]
                ]
              }
            },
            'ts-loader'
          ],
          exclude: /node_modules/
        },
  
        // 设置 less 文件的处理
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            // 引入 postcss
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        browsers: 'last 2 versions'
                      }
                    ]
                  ]
                }
              }
            },
            'less-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/index.html"
      })
    ],
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
  
  ```

#### html 文件

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>贪食蛇-tzy</title>
  </head>
  <body>
    <!-- 创建游戏的主容器 -->
    <div id="main">
      <!-- 设置游戏的舞台 -->
      <div id="stage">
        <!-- 设置蛇 -->
        <div id="snake">
          <!-- snake 内部的 div，表示蛇的各部分 -->
          <div></div>
        </div>
  
        <!-- 设置食物 -->
        <div id="food">
          <!-- 添加 4 个 div，来设置食物的样式 -->
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  
      <!-- 设置游戏的积分牌 -->
      <div id="score-panel">
        <div>
          SCORE: <span id="score">0</span>
        </div>
        <div>
          LEVEL: <span id="level">1</span>
        </div>
      </div>
    </div>
  
    <!-- <div class="make">make by tzy</div> -->
    
  </body>
  </html>
  ```

#### less 文件

- index.less

  ```less
  // 设置变量
  @bg-color: #b7d4a8;
  
  // 清除默认样式
  * {
    margin: 0;
    padding: 0;
    // 改变盒子模型的计算方式
    box-sizing: border-box;
  }
  
  body {
    font: bold 20px "Courier";
    // 能实现禁止出现滚动条的效果
    overflow: hidden;
  }
  
  // 设置主窗口的样式
  #main {
    width: 360px;
    height: 420px;
    background-color: @bg-color;
    margin: 50px auto;
    border: 10px solid black;
    border-radius: 40px;
  
    // 开启弹性盒模型
    display: flex;
    // 设置主轴方向
    flex-flow: column;
    //设置侧轴的对齐方式
    align-items: center;
    // 设置主轴的对齐方式
    justify-content: space-around;
  
    // 游戏舞台
    #stage {
      width: 304px;
      height: 304px;
      border: 2px solid black;
      // 开启相对定位
      position: relative;
  
      // 设置蛇的样式
      #snake {
        &>div {
          width: 10px;
          height: 10px;
          background-color: #000;
          border: 1px solid @bg-color;
          // 开启绝对定位
          position: absolute;
        }
      }
  
      // 设置食物
      #food {
        // 开启绝对定位
        position: absolute;
        // 通过 JS 代码控制
        left: 0px;
        width: 10px;
        height: 10px;
  
        // 开启弹性盒
        display: flex;
        // 设置横轴为主轴，wrap 表示会自动换行
        flex-flow: row wrap;
        // 设置主轴和侧轴的空白空间分配到元素之间
        justify-content: space-between;
        align-content: space-between;
        &>div {
          width: 4px;
          height: 4px;
          background-color: #000;
  
          // 让四个 div 旋转 45°
          transform: rotate(45deg);
        }
  
      }
    }
  
    // 记分牌
    #score-panel {
      width: 300px;
      display: flex;
      // 设置主轴的对齐方式
      justify-content: space-between;
    }
  }
  ```

#### ts 文件

- index.ts

  ```ts
  // 引入样式
  import './style/index.less'
  // 引入类
  
  import GameControl from './models/GameControl'
  
  const gc = new GameControl()
  
  ```

- GameControl.ts

  ```ts
  // 引入其他的类
  import Snake from './Snake'
  import Food from './Food'
  import ScorePanel from './ScorePanel'
  
  // 游戏控制器，控制其他的所有类
  class GameControl {
    // 定义三个属性 蛇 食物 记分牌
    snake: Snake
    food: Food
    scorePanel: ScorePanel
  
    // 创建一个属性来存储蛇的移动方向（也就是按键方向）
    direction: string = ''
  
    // 创建一个属性用来记录游戏是否结束
    isLive = true
  
    constructor() {
      this.snake = new Snake()
      this.food = new Food()
      this.scorePanel = new ScorePanel(10, 4) // 最高等级 升级分数
  
      this.init()
    }
  
    // 游戏的初始化方法，调用后游戏即开始
    init() {
      // 绑定键盘按键按下的事件
      // document 调用了 keydownHandler ，那 keydownHandler 中的 this 就是 document
      // .bind(this) 把当前的 this 绑定上去，
      // 则 keydownHandler 中的 this 就不会管调用者了，而是当前的 this
      document.addEventListener('keydown', this.keydownHandler.bind(this))
  
      // 调用 run 方法，使蛇移动
      this.run()
    }
  
    // 创建一个键盘按下的响应函数
    /**
     * Chrome中
     * ArrowUp
     * ArrowDown
     * ArrowLeft
     * ArrowRight
     * IE中
     * Up
     * Down
     * Left
     * Right
     */
    keydownHandler(event: KeyboardEvent) {
      // 修改 direction 属性
      // 需要检查 event.key 的值是否合法（用户是否按了正确的按键）
      this.direction = event.key
    }
  
    // 创建一个控制蛇移动的方法
    run() {
      //  根据方向（this.direction）来使蛇的位置改变
      // 获取蛇现在的坐标
      let X = this.snake.X
      let Y = this.snake.Y 
  
      // 根据按键的方向，来修改 X 和 Y
      switch (this.direction) {
        case "ArrowUp":
        case "Up":
          // 向上 top -= 10
          // Y -= 10
          Y = this.snake.amendY(Y - 10)
          break
        case "ArrowDown":
        case "DOwn":
          // 向下 top += 10
          // Y += 10
          Y = this.snake.amendY(Y + 10)
          break
        case "ArrowLeft":
        case "Left":
          // 向左 left -= 10
          // X -= 10
          X = this.snake.amendX(X - 10)
          break
        case "ArrowRight":
        case "Right":
          // 向右 left += 10
          // X += 10
          X = this.snake.amendX(X + 10)
          break
      }
  
      
      // 检查蛇是否吃到食物，进行相应操作
      this.checkEat(X, Y)
  
      // 修改蛇的 X 和 Y
      try {
        this.snake.X = X
        this.snake.Y = Y
      } catch (e) {
        // 出现异常，游戏结束
        alert(e.message + '\nGAME OVER!')
        this.isLive = false
      }
  
  
      // 开启一个定时调用 - 每隔 300 就 run 一下
      // 根据 level 限定速度
      let speed = 300 - (this.scorePanel.level - 1) * 25
      // 活着才 run
      this.isLive && setTimeout(this.run.bind(this), speed)
    }
  
    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
      if (X === this.food.X && Y === this.food.Y) {      
        // 吃到食物后
        // 蛇增加一节
        this.snake.addBody()
        // 食物的位置要进行重置
        this.food.change()
        // 分数增加
        this.scorePanel.addScore()
      }
    }
  
  
  }
  
  export default GameControl
  
  ```

- Snake.ts

  ```ts
  // 定义蛇
  class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement
  
    constructor() {
      this.element = document.getElementById('snake')!
      // querySelector 返回的是别的类型
      // 做个类型断言
      this.head = document.querySelector('#snake > div') as HTMLElement
      // querySelectorAll 获取的是死的标签，无法改变
      this.bodies = this.element.getElementsByTagName('div')
    }
  
    // 获取蛇头的 X 坐标
    get X() {
      return this.head.offsetLeft
    }
  
    // 获取蛇头的 Y 坐标
    get Y() {
      return this.head.offsetTop
    }
  
    // 修正 X 的值 - 防止掉头
    amendX(X: number): number {   
      // 此时在修改 X 值，即蛇在左右移动
      // 不允许掉头
      if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === X) {
        // 如果要发生掉头，应该让蛇向反方向继续移动
        // 或者可以限制按键吧
        if (X > this.X) {
          // 新值 value 大于旧值 X，说明蛇在向右走
          // 此时应该让蛇继续向左走
          X = this.X - 10
        } else {
          X = this.X + 10
        }
      }
      return X
    }
    // 修正 Y 的值 - 防止掉头
    amendY(Y: number): number {   
      if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === Y) {
        // 如果发生了掉头，应该让蛇向反方向继续移动 —— 不行，会出现将要吃到食物时掉头，食物会存在一会的bug
        // 或者可以限制按键吧
        if (Y > this.Y) {
          // 新值 value 大于旧值 X，说明蛇在向下走
          // 此时应该让蛇继续向上走
          Y = this.Y - 10
        } else {
          Y = this.Y + 10
        }
      }
      return Y
    }
  
    // 设置蛇头的 X 坐标
    set X(value: number) { 
      // X 的值的合法范围 [0, 290]
      if (value < 0 || value > 290) {
        // 蛇撞墙了，就抛出一个异常
        throw new Error('蛇撞墙了！')
      }    
      // 如果新值和旧值相同，则直接返回，不再修改
      if (this.X === value) {
        return
      }
      // 移动身体
      this.moveBody()
      this.head.style.left = value + 'px'
      // 检查有没有撞到自己
      this.checkHeadBody()
    }
  
    // 设置蛇头的 Y 坐标
    set Y(value: number) { 
      // Y 的值的合法范围 [0, 290]
      if (value < 0 || value > 290) {
        // 蛇撞墙了
        throw new Error('蛇撞墙了！')
      }
      if (this.Y === value) {
        return
      }
      this.moveBody()
      this.head.style.top = value + 'px'
      // 检查有没有撞到自己
      this.checkHeadBody()
    }
  
    // 蛇增加身体的方法
    addBody() {
      // 向 element 里面添加 div
      this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
  
    // 添加一个蛇身体移动的方法
    moveBody() {
      // 将后面的身体设置为前面身体的位置
      // 第 2 节 = 第 1 节的位置
      // 蛇头位置不需要修改
      // 遍历获取所有的身体
      for (let i = this.bodies.length - 1; i > 0; i--) {
        // 获取前面身体的位置
        // Element 是 HTMLElement 的接口
        let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
        // 将值设置到当前身体上
        // 以 ( 开头，前面的需要加 ;
        (this.bodies[i] as HTMLElement).style.left = X + 'px';
        (this.bodies[i] as HTMLElement).style.top = Y + 'px'
      }
    }
  
    // 检查蛇头是否撞到身体的方法
    checkHeadBody() {
      // 获取所有身体，检查是否和蛇头的坐标发生重叠
      for (let i = 1; i < this.bodies.length; i++) {
        let bd = this.bodies[i] as HTMLElement
        if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
          // 蛇头撞到了身体
          throw new Error('从自己身体上压过去了')
        }
      }
    }
  }
  
  export default Snake
  
  ```

- Food.ts

  ```ts
  // 定义食物类 Food
  class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement
  
    constructor() {
      // 获取页面中的 food 元素，并将其赋值给 element
      // ! 表示没问题，不用担心
      this.element = document.getElementById('food')!
      // this.element = document.querySelector('#food')! // 会报错
      this.change()
    }
  
    // 定义一个获取食物 X 轴坐标的方法
    get X() {
      return this.element.offsetLeft
    }
  
    // 定义一个获取食物 Y 轴坐标的方法
    get Y() {
      return this.element.offsetTop
    }
  
    // 修改食物的位置
    change() {
      // 生成一个随机的位置
      // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
      // 食物的位置范围 [0, 290] 且为 10 的整数倍    
      // Math.floor(Math.random() * 30) * 10 // 向下取整
      let top = Math.round(Math.random() * 29) * 10 // 四舍五入
      let left = Math.round(Math.random() * 29) * 10 // 四舍五入
      this.element.style.left = left + 'px'
      this.element.style.top = top + 'px'
    }
  }
  
  // 测试代码
  // const food = new Food()
  // console.log(food.X, food.Y)
  // food.change()
  // console.log(food.X, food.Y)
  
  export default Food
  
  ```

- ScorePanel.ts

  ```ts
  // 定义表示记分牌的类
  class ScorePanel {
    // 记录分数和等级
    score = 0
    level = 1
    // 分数和等级所在的元素，在构造函数中进行初始化（在这里进行初始化也行）
    scoreEle: HTMLElement
    levelEle: HTMLElement
  
    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量表示多少分时升级
    upScore: number
  
    constructor(maxLevel: number = 10, upScore: number = 10) {
      this.scoreEle = document.getElementById('score')!
      this.levelEle = document.getElementById('level')!
      this.maxLevel = maxLevel
      this.upScore = upScore
    }
  
    // 设置一个加分的方法
    addScore() {
      // 分数自增
      this.score++
      this.scoreEle.innerHTML = this.score + '' // 拼串
      // 根据分数进行升级操作
      if (this.score % this.upScore === 0) {
        this.levelUp()
      }
    }
  
    // 提升等级的方法
    levelUp() {
      if (this.level < this.maxLevel) {
        this.levelEle.innerHTML = ++this.level + ''
      }
      
    }
  }
  
  export default ScorePanel
  
  ```

  