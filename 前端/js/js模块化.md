# js 模块化 modular

## 模块化发展史

- 简介

  模块化：将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起

  模块针对的是 js 文件

  最早开发，所有的代码都是放在一个 js 文件中（代码量小）

  现在代码量大了，如果还放在一个 js 文件中，就不太行

  耦合度高了 - 关联性太强了，不易维护；功能点不明确，不易查找

  容易污染全局环境

  现在的做法：将一个 js 文件，拆分成多个 js 文件（根据功能去拆分）——定义的功能函数中，数据是私有的，功能点明确，还可以复用

  -数据私有-需要向外暴露一些接口（方法、API）

- 模块化的进化史

  ![image-20210125195156843](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125195158.png)

- 为什么要模块化

  ![image-20210125195247354](C:\Users\tzygl\AppData\Roaming\Typora\typora-user-images\image-20210125195247354.png)

- 模块化的好处

  ![image-20210125195400924](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125195402.png)

- 页面引入加载 script

  ![image-20210125195757810](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125195759.png)

- 规范

  希望模块化带来好处，但不希望模块化的问题，故引入模块化规范

### 全局 function 模式

全局函数模式：将不同的功能封装成不同的全局函数

问题: Global被污染了, 很容易引起命名冲突

- 全局 function 模式

  ![image-20210125214238456](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125214310.png)

### namespace 模式

namespace模式：简单对象封装

作用: 减少了全局变量

问题: 不安全(数据不是私有的, 外部可以直接修改)

- namespace 模式

  ![image-20210125220525384](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125220526.png)

### IIFE 模式

IIFE模式：匿名函数自调用（闭包）

IIFE : immediately-invoked function expression(立即调用函数表达式)

作用: 数据是私有的, 外部只能通过暴露的方法操作

问题: 如果当前这个模块依赖另一个模块怎么办? - IIFE 模式增强

- IIFE 模式

  ![image-20210125225035683](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125225037.png)

### IIFE 模式增强

- IIFE 模式增强

  IIFE 模式增强：引入依赖
  
  这就是现代模块实现的基石
  
  ![image-20210125230536450](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210125230537.png)

## commonjs

- 简介

  模块化规范：

  CommonJS(node基于此) 

  AMD 

  CMD（了解，阿里自己人写的，最后卖给国外了） 

  ES6

- commonjs

  ![image-20210126105858823](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126105900.png)

  每个 js 文件都是一个模块

  服务器端：模块的加载是运行时同步加载的（会阻塞等待）

  浏览器端：发送请求，如果 Server 要处理多个请求，浏览器端只能等待（会404），require语法 - 浏览器引擎不认识 - 模块需要提取编译打包处理

  模块的暴露与引入

  在浏览器端实现，需要打包工具 Browserify

  [browserify官网](http://browserify.org/)

  ![image-20210126105814147](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126105816.png)

[uniq在npm上面的发布](https://www.npmjs.com/package/uniq)

### commonjs-node

![image-20210126112525687](C:\Users\tzygl\AppData\Roaming\Typora\typora-user-images\image-20210126112525687.png)

![image-20210126112530446](C:\Users\tzygl\AppData\Roaming\Typora\typora-user-images\image-20210126112530446.png)

![image-20210126112954919](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126112956.png)

![image-20210126114037921](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126114042.png)

![image-20210126114705841](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126114707.png)

### commonjs-浏览器-Browserify

![image-20210126114936883](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126114938.png)

![image-20210126122432980](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126122434.png)

![image-20210126124101323](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126124102.png)

![image-20210126124807290](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126124808.png)

## AMD

- 简介

  ![image-20210126125710215](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126125711.png)

  AMD 专门用于浏览器端，模块加载是异步的

  commonjs 先出的针对服务器端的规范，然后出了针对浏览器的规范 AMD，然后 commonjs 后续才出的针对浏览器端的规范

  这一块的讲解没听懂 - 定义有依赖的模块 - 传入模块数组，函数里面的形参与模块数组一一对应-注入进来，这种方式叫显式声明依赖注入

  引入：require或requirejs

  AMD 依赖 requirejs ，可以认为两者等同

  [requirejs](https://requirejs.org/)
  
  [Javascript 模块化编程（三）：require.js 的用法](https://ruanyifeng.com/blog/2012/11/require_js.html)

### NoAMD

![image-20210126132917631](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126132918.png)

### AMD-RequireJS

![image-20210126133846092](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126133847.png)

![image-20210126133852662](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126133853.png)

![image-20210126153222840](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126153224.png)

必须映射一个路径

![image-20210126140321471](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126140322.png)

![image-20210126141654614](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126141656.png)

![image-20210126141950469](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126141951.png)

### AMD-第三方模块

![image-20210126154119323](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126154121.png)

![image-20210126155048920](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126155050.png)

## CMD

- 简介

  ![image-20210126155621383](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126155622.png)

  AMD + CommonJS

  在浏览器中实现，需要依赖 Sea.js

  官网已经没了，直接用下载好的文件吧

### seajs

![image-20210126160701685](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126160703.png)

![image-20210126163510711](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126163512.png)

## ES6

- 简介

  ![image-20210126200445568](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126200447.png)

  ES6 的语法，还有浏览器不支持 - 需要编译打包处理 - Babe

  ES5 中的 require ，浏览器可能也不支持 - Browserify

  [Babel官网](https://www.babeljs.cn/)

### ES6-Babel-Browserify

![image-20210126201403064](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126201404.png)

![image-20210126213756344](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126213757.png)

rc - run control 运行时控制文件

![image-20210126223656494](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126223657.png)

![image-20210126223813412](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126223815.png)

![image-20210126224034103](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126224035.png)

![image-20210126224926431](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126224927.png)

默认暴露

![image-20210126225847134](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126225848.png)

下载jquery

![image-20210126230505071](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126230506.png)

![image-20210126231326483](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/js模块化/20210126231327.png)

## 扩展阅读

[前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)

[CommonJS，AMD，CMD区别](http://zccst.iteye.com/blog/2215317)

[AMD和CMD 的区别](http://www.zhihu.com/question/20351507/answer/14859415)

[Javascript模块化编程](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

## 老师课件

### JS模块化

* 模块化的理解

* 什么是模块?

  * 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
  * 块的内部数据/实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

* 一个模块的组成

  * 数据--->内部的属性
  * 操作数据的行为--->内部的函数

* 模块化

  * 编码时是按照模块一个一个编码的, 整个项目就是一个模块化的项目

* 模块化的进化过程

  * 全局function模式 : 

    * 编码: 全局变量/函数
    * 问题: 污染全局命名空间, 容易引起命名冲突/数据不安全

  * namespace模式 : 

    * 编码: 将数据/行为封装到对象中
    * 解决: 命名冲突(减少了全局变量)
    * 问题: 数据不安全(外部可以直接修改模块内部的数据)

  * IIFE模式/增强

    * IIFE : 立即调用函数表达式--->匿名函数自调用

    * 编码: 将数据和行为封装到一个函数内部, 通过给window添加属性来向外暴露接口

    * 引入依赖: 通过函数形参来引入依赖模块

      ```
      (function(window, module2){
        var data = 'atguigu.com'
        function foo() {
           module2.xxx()
           console.log('foo()'+data)
        }
        function bar() {
           console.log('bar()'+data)
        }
        
        window.module = {foo}
      })(window, module2)
      ```

* 模块化规范

  * CommonJS

    * Node.js : 服务器端

    * Browserify : 浏览器端    也称为js的打包工具

    * 基本语法:

      * 定义暴露模块 : exports

        ```
        exports.xxx = value
        module.exports = value
        ```

        引入模块 : require

        ```
        var module = require('模块名/模块相对路径')
        ```

    * 引入模块发生在什么时候?

      * Node : 运行时, 动态同步引入
      * Browserify : 在运行前对模块进行编译/转译/打包的处理(已经将依赖的模块包含进来了), 
            运行的是打包生成的js, 运行时不存在需要再从远程引入依赖模块

  * AMD : 浏览器端

    * require.js

    * 基本语法

      * 定义暴露模块: define([依赖模块名], function(){return 模块对象})

      * 引入模块: require(['模块1', '模块2', '模块3'], function(m1, m2){//使用模块对象})

      * 配置: 

        ```
        require.config({
          //基本路径
          baseUrl : 'js/',
          //标识名称与路径的映射
          paths : {
            '模块1' : 'modules/模块1',
            '模块2' : 'modules/模块2',
            'angular' : 'libs/angular',
            'angular-messages' : 'libs/angular-messages'
          },
          //非AMD的模块
          shim : {
            'angular' : {
                exports : 'angular'
            },
            'angular-messages' : {
                exports : 'angular-messages',
                deps : ['angular']
            }
          }
        })
        ```

  * CMD : 浏览器端

    * sea.js

    * 基本语法

      * 定义暴露模块: 

        ```
        define(function(require, module, exports){
          通过require引入依赖模块
          通过module/exports来暴露模块
          exports.xxx = value
        })
        ```

      * 使用模块seajs.use(['模块1', '模块2'])

  * ES6

    * ES6内置了模块化的实现

    * 基本语法

      * 定义暴露模块 : export

        * 暴露一个对象: 

          ```
          export default 对象
          ```

        * 暴露多个: 

          ```
          export var xxx = value1
          export let yyy = value2
          
          var xxx = value1
          let yyy = value2
          export {xxx, yyy}
          ```

      * 引入使用模块 : import

        * default模块:

          ```
          import xxx  from '模块路径/模块名'
          ```

        * 其它模块

          ```
          import {xxx, yyy} from '模块路径/模块名'
          import * as module1 from '模块路径/模块名'
          ```

    * 问题: 所有浏览器还不能直接识别ES6模块化的语法  

    * 解决:

      * 使用Babel将ES6--->ES5(使用了CommonJS) ----浏览器还不能直接支行
      * 使用Browserify--->打包处理----浏览器可以运行

### 模块化进化史教程

1. 全局function模式

  * module1.js

    ```
    //数据
    let data = 'atguigu.com'
    
    //操作数据的函数
    function foo() {
      console.log(`foo() ${data}`)
    }
    function bar() {
      console.log(`bar() ${data}`)
    }
    ```

  * module2.js

    ```
    let data2 = 'other data'
    
    function foo() {  //与另一个模块中的函数冲突了
      console.log(`foo() ${data2}`)
    }
    ```

  * test1.html

    ```
    <script type="text/javascript" src="module1.js"></script>
    <script type="text/javascript" src="module2.js"></script>
    <script type="text/javascript">
    
      let data = "修改后的数据"
      foo()
      bar()
    </script>
    ```

   * 说明:

     * 全局函数模式: 将不同的功能封装成不同的全局函数
     * 问题: Global被污染了, 很容易引起命名冲突

2. namespace模式

  * module1.js

    ```
    let myModule = {
      data: 'atguigu.com',
      foo() {
        console.log(`foo() ${this.data}`)
      },
      bar() {
        console.log(`bar() ${this.data}`)
      }
    }
    ```

  * module2.js

    ```
    let myModule2 = {
      data: 'atguigu.com2222',
      foo() {
        console.log(`foo() ${this.data}`)
      },
      bar() {
        console.log(`bar() ${this.data}`)
      }
    }
    ```

  * test2.html

    ```
    <script type="text/javascript" src="module2.js"></script>
    <script type="text/javascript" src="module22.js"></script>
    <script type="text/javascript">
      myModule.foo()
      myModule.bar()
    
      myModule2.foo()
      myModule2.bar()
    
      myModule.data = 'other data' //能直接修改模块内部的数据
      myModule.foo()
    
    </script>
    ```

  * 说明

    * namespace模式: 简单对象封装
    * 作用: 减少了全局变量
    * 问题: 不安全

3. IIFE模式

  * module3.js

    ```
    (function (window) {
      //数据
      let data = 'atguigu.com'
    
      //操作数据的函数
      function foo() { //用于暴露有函数
        console.log(`foo() ${data}`)
      }
    
      function bar() {//用于暴露有函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
      }
    
      function otherFun() { //内部私有的函数
        console.log('otherFun()')
      }
    
      //暴露行为
      window.myModule = {foo, bar}
    })(window)
    ```

  * test3.html

    ```
    <script type="text/javascript" src="module3.js"></script>
    <script type="text/javascript">
      myModule.foo()
      myModule.bar()
      //myModule.otherFun()  //myModule.otherFun is not a function
      console.log(myModule.data) //undefined 不能访问模块内部数据
      myModule.data = 'xxxx' //不是修改的模块内部的data
      myModule.foo() //没有改变
    
    </script>
    ```

  * 说明:

    * IIFE模式: 匿名函数自调用(闭包)
    * IIFE : immediately-invoked function expression(立即调用函数表达式)
    * 作用: 数据是私有的, 外部只能通过暴露的方法操作
    * 问题: 如果当前这个模块依赖另一个模块怎么办?

4. IIFE模式增强

  * 引入jquery到项目中

  * module4.js

    ```
    (function (window, $) {
      //数据
      let data = 'atguigu.com'
    
      //操作数据的函数
      function foo() { //用于暴露有函数
        console.log(`foo() ${data}`)
        $('body').css('background', 'red')
      }
    
      function bar() {//用于暴露有函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
      }
    
      function otherFun() { //内部私有的函数
        console.log('otherFun()')
      }
    
      //暴露行为
      window.myModule = {foo, bar}
    })(window, jQuery)
    ```

  * test4.html

    ```
    <script type="text/javascript" src="jquery-1.10.1.js"></script>
    <script type="text/javascript" src="module4.js"></script>
    <script type="text/javascript">
      myModule.foo()
    </script>
    ```

  * 说明

    * IIFE模式增强 : 引入依赖
    * 这就是现代模块实现的基石

5. 页面加载多个js的问题

  * 页面:

    ```
    <script type="text/javascript" src="module1.js"></script>
    <script type="text/javascript" src="module2.js"></script>
    <script type="text/javascript" src="module3.js"></script>
    <script type="text/javascript" src="module4.js"></script>
    ```

  * 说明

    * 一个页面需要引入多个js文件
    * 问题:
      * 请求过多
      * 依赖模糊
      * 难以维护
    * 这些问题可以通过现代模块化编码和项目构建来解决

### CommonJS-Node.js模块化教程

1. 下载安装node.js
2. 创建项目结构

  ```
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-app.js
  |-package.json
    {
      "name": "commonJS-node",
      "version": "1.0.0"
    }
  ```

3. 下载第三方模块

  * npm install uniq --save

4. 模块化编码

  * module1.js

    ```
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```

  * module2.js

    ```
    module.exports = function () {
      console.log('module2()')
    }
    ```

  * module3.js

    ```
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```

  * app.js 

    ```
    /**
      1. 定义暴露模块:
        module.exports = value;
        exports.xxx = value;
      2. 引入模块:
        var module = require(模块名或模块路径);
     */
    "use strict";
    //引用模块
    let module1 = require('./modules/module1')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')
    
    let uniq = require('uniq')
    let fs = require('fs')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([1, 3, 1, 4, 3]))
    
    fs.readFile('app.js', function (error, data) {
      console.log(data.toString())
    })
    ```

5. 通过node运行app.js

  * 命令: node app.js
  * 工具: 右键-->运行

### CommonJS-Browserify模块化使用教程

1. 创建项目结构

  ```
  |-js
    |-dist //打包生成文件的目录
    |-src //源码所在的目录
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js //应用主源文件
  |-index.html
  |-package.json
    {
      "name": "browserify-test",
      "version": "1.0.0"
    }
  ```

2. 下载browserify

  * 全局: npm install browserify -g
  * 局部: npm install browserify --save-dev

3. 定义模块代码

  * module1.js

    ```
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```

  * module2.js

    ```
    module.exports = function () {
      console.log('module2()')
    }
    ```

  * module3.js

    ```
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```

  * app.js (应用的主js)

    ```
    //引用模块
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    let uniq = require('uniq')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([1, 3, 1, 4, 3]))
    ```

* 打包处理js:

  * browserify js/src/app.js -o js/dist/bundle.js

* 页面使用引入:

  ```
  <script type="text/javascript" src="js/dist/bundle.js"></script> 
  ```

### AMD-require.js使用教程

1. 下载require.js, 并引入

  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将require.js导入项目: js/libs/require.js 

2. 创建项目结构

  ```
  |-js
    |-libs
      |-require.js
    |-modules
      |-alerter.js
      |-dataService.js
    |-main.js
  |-index.html
  ```

3. 定义require.js的模块代码

  * dataService.js

    ```
    define(function () {
      let msg = 'atguigu.com'
    
      function getMsg() {
        return msg.toUpperCase()
      }
    
      return {getMsg}
    })
    ```

  * alerter.js

    ```
    define(['dataService', 'jquery'], function (dataService, $) {
      let name = 'Tom2'
    
      function showMsg() {
        $('body').css('background', 'gray')
        alert(dataService.getMsg() + ', ' + name)
      }
    
      return {showMsg}
    })
    ```

4. 应用主(入口)js: main.js

   ```js
   (function () {
     //配置
     require.config({
       //基本路径
       baseUrl: "js/",
       //模块标识名与模块路径映射
       paths: {
         "alerter": "modules/alerter",
         "dataService": "modules/dataService",
       }
     })
     //引入使用模块
     require( ['alerter'], function(alerter) {
       alerter.showMsg()
     })
   })()
   ```

5. 页面使用模块:

   ```html
   <script data-main="js/main" src="js/libs/require.js"></script>
   ```

6. 使用第三方基于require.js的框架(jquery)

  * 将jquery的库文件导入到项目: 

    * js/libs/jquery-1.10.1.js

  * 在main.js中配置jquery路径

    ```
      paths: {
                'jquery': 'libs/jquery-1.10.1'
            }
    ```

  * 在alerter.js中使用jquery

    ```
    define(['dataService', 'jquery'], function (dataService, $) {
        var name = 'xfzhang'
        function showMsg() {
            $('body').css({background : 'red'})
            alert(name + ' '+dataService.getMsg())
        }
        return {showMsg}
    })
    ```

7. 使用第三方不基于require.js的框架(angular/angular-messages)

  * 将angular.js和angular-messages.js导入项目

    * js/libs/angular.js
    * js/libs/angular-messages.js

  * 在main.js中配置

    ```
    (function () {
      require.config({
        //基本路径
        baseUrl: "js/",
        //模块标识名与模块路径映射
        paths: {
          //第三方库
          'jquery' : 'libs/jquery-1.10.1',
          'angular' : 'libs/angular',
          'angular-messages' : 'libs/angular-messages',
          //自定义模块
          "alerter": "modules/alerter",
          "dataService": "modules/dataService"
        },
        /*
         配置不兼容AMD的模块
         exports : 指定导出的模块名
         deps  : 指定所有依赖的模块的数组
         */
        shim: {
          'angular' : {
            exports : 'angular'
          },
          'angular-messages' : {
            exports : 'angular-messages',
            deps : ['angular']
          }
        }
      })
      //引入使用模块
      require( ['alerter', 'angular', 'angular-messages'], function(alerter, angular) {
        alerter.showMsg()
        angular.module('myApp', ['ngMessages'])
        angular.bootstrap(document,["myApp"])
      })
    })()
    ```

  * 页面:

    ```
    <form name="myForm">
      用户名: <input type="text" name="username" ng-model="username" ng-required="true">
      <div style="color: red;" ng-show="myForm.username.$dirty&&myForm.username.$invalid">用户名是必须的</div>
    </form>
    ```

### sea.js简单使用教程

1. 下载sea.js, 并引入

  * 官网: http://seajs.org/
  * github : https://github.com/seajs/seajs
  * 将sea.js导入项目: js/libs/sea.js 

2. 创建项目结构

  ```
  |-js
    |-libs
      |-sea.js
    |-modules
      |-module1.js
      |-module2.js
      |-module3.js
      |-module4.js
      |-main.js
  |-index.html
  ```

3. 定义sea.js的模块代码

  * module1.js

    ```
    define(function (require, exports, module) {
      //内部变量数据
      var data = 'atguigu.com'
      //内部函数
      function show() {
        console.log('module1 show() ' + data)
      }
    
      //向外暴露
      exports.show = show
    })
    ```

  * module2.js

    ```
    define(function (require, exports, module) {
      module.exports = {
        msg: 'I Will Back'
      }
    })
    ```

  * module3.js

    ```
    define(function (require, exports, module) {
      const API_KEY = 'abc123'
      exports.API_KEY = API_KEY
    })
    ```

  * module4.js

    ```
    define(function (require, exports, module) {
      //引入依赖模块(同步)
      var module2 = require('./module2')
    
      function show() {
        console.log('module4 show() ' + module2.msg)
      }
    
      exports.show = show
      //引入依赖模块(异步)
      require.async('./module3', function (m3) {
        console.log('异步引入依赖模块3  ' + m3.API_KEY)
      })
    })
    ```

  * main.js : 主(入口)模块

    ```
    define(function (require) {
      var m1 = require('./module1')
      var m4 = require('./module4')
      m1.show()
      m4.show()
    })
    ```

4. index.html:

  ```
  <!--
  使用seajs:
    1. 引入sea.js库
    2. 如何定义导出模块 :
      define()
      exports
      module.exports
    3. 如何依赖模块:
      require()
    4. 如何使用模块:
      seajs.use()
  -->
  <script type="text/javascript" src="js/libs/sea.js"></script>
  <script type="text/javascript">
    seajs.use('./js/modules/main')
  </script>
  ```


​       

### ES6-Babel-Browserify使用教程

1. 定义package.json文件

  ```
  {
    "name" : "es6-babel-browserify",
    "version" : "1.0.0"
  }
  ```

2. 安装babel-cli, babel-preset-es2015和browserify

  * npm install babel-cli browserify -g
    * npm install babel-preset-es2015 --save-dev 

3. 定义.babelrc文件

   ```
   {
    "presets": ["es2015"]
    }
   ```

4. 编码

  * js/src/module1.js

    ```
    export function foo() {
      console.log('module1 foo()');
    }
    export let bar = function () {
      console.log('module1 bar()');
    }
    export const DATA_ARR = [1, 3, 5, 1]
    ```

  * js/src/module2.js

    ```
    let data = 'module2 data'
    
    function fun1() {
      console.log('module2 fun1() ' + data);
    }
    
    function fun2() {
      console.log('module2 fun2() ' + data);
    }
    
    export {fun1, fun2}
    ```

  * js/src/module3.js

    ```
    export default {
      name: 'Tom',
      setName: function (name) {
        this.name = name
      }
    }
    ```

  * js/src/app.js

    ```
    import {foo, bar} from './module1'
    import {DATA_ARR} from './module1'
    import {fun1, fun2} from './module2'
    import person from './module3'
    
    import $ from 'jquery'
    
    $('body').css('background', 'red')
    
    foo()
    bar()
    console.log(DATA_ARR);
    fun1()
    fun2()
    
    person.setName('JACK')
    console.log(person.name);
    ```

5. 编译

  * 使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib
  * 使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js

6. 页面中引入测试

  ```
  <script type="text/javascript" src="js/lib/bundle.js"></script>
  ```

7. 引入第三方模块(jQuery)
   1). 下载jQuery模块: 

      - npm install jquery@1 --save

   2). 在app.js中引入并使用

   ```
   import $ from 'jquery'
   $('body').css('background', 'red')
   ```