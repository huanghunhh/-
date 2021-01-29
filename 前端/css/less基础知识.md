# less 基础

## less 基础_pink老师

- 简介

  ![image-20210120211844599](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002802.png)

  less 是 一种css预处理器，是css扩展语言

  在css语法上，为css加入程序式语言的特性，如：引入变量、混入、运算以及函数等功能

  简化了css的编写，降低了css的维护成本

  [less中文网](http://lesscss.cn/)

- less 使用

  ```less
  // less 变量
  @变量名: 值;
  // less 选择器嵌套
  #header {
    .logo { // 编译后，两选择器间有空格
      width: 300px;
    }
  }
  #header {
    &:hover { // 编译后，两选择器间无空格
      width: 500px;
    }
  }
  // less 运算
  @baseFont: 50px;
  html {
    font-size: @baseFont * 2;
    // 一个单位，结果以该单位为准
  }
  img {
    width: 82rem / @baseFont;
    // 两个单位，结果以第一个单位为准
  }
  ```

  ![image-20210120214825720](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002820.png)

  ![image-20210120215349211](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002834.png)

  ![image-20210120220612345](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002847.png)

## less 基础_尚硅谷

- 简介

  尚硅谷前端 less 教程_达姆老师（讲的一般般）

   [less中文网](http://lesscss.cn/)

  css 的预处理器：Less、Sass、stylus

### less 编译

![image-20210125122200530](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125124526.png)

使用考拉 [Koala官网](http://koala-app.com/)

![image-20210125124105372](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125124535.png)

VSCode 有 Easy LESS 插件，保存一下 less 文件，自动生成更新对应的 css 文件

### less 注释

- /**/ 预编译成 css 文件，该类注释会被保留

- // 预编译成 css 文件，该类注释不会被保留

  ![image-20210125130012967](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125130014.png)

  ![image-20210125125336719](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125125337.png)

### less 变量

![image-20210125130030668](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125130031.png)

![image-20210125130907076](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125130909.png)

### less 嵌套

![image-20210125131346076](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125131353.png)

### less 混合

![image-20210125132603214](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125132604.png)

混合：将一系列属性从一个规则集引入到另一个规则集的方式

普通混合、不带输出的混合

![image-20210125133033003](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125133034.png)

带参数的混合、参数有默认值的混合、命名参数

![image-20210125135924734](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125135925.png)

匹配模式

![image-20210125144653774](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125144655.png)

封装 less 文件

![image-20210125145738886](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125145740.png)

想自动更改三角形的方向 - 匹配模式

![image-20210125152355524](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125152400.png)

[less 中混合和嵌套详解](https://blog.csdn.net/lhrdlp/article/details/105076653)

arguments 参数

![image-20210125152835174](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125152836.png)

### less 计算

### 复习

复习了 flex、媒体查询、规范（HTML CSS JS）

![image-20210125160726412](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160853.png)

![image-20210125160731039](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160907.png)

![image-20210125160735700](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160912.png)

![image-20210125160827309](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160916.png)

![image-20210125160838731](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160926.png)

![image-20210125160844535](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160934.png)

![image-20210125160848620](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125160942.png)

### less 继承（一脸懵逼）

![image-20210125175211945](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125175213.png)

这样你还多用了一个无用的 .center

应该是上面有标签用了，下面的标签也要用，就继承过来吧

### less 避免编译

![image-20210125175004359](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/less/20210125175217.png)

[less 继承语法](https://blog.csdn.net/weixin_43245095/article/details/89163192)