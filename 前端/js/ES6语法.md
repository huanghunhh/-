# ES6 语法

- 简介

  ![image-20210213102139146](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213102140.png)

## 变量声明

### let

![image-20210213102630623](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213102631.png)

![image-20210213113334967](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213113337.png)

### const

![image-20210213113558973](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213113600.png)

### 变量的解构赋值

数组的解构

![image-20210213114803367](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213114805.png)

对象的解构

![image-20210213134826774](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213134828.png)

### 模板字符串

![image-20210213135021816](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213135023.png)

### 对象

![image-20210213141100366](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213141101.png)

## 函数

### 箭头函数

![image-20210213142244775](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213142246.png)

#### this

![image-20210213214434062](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213214435.png)

![image-20210213145608357](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213145609.png)

![image-20210213150233614](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213150234.png)

箭头函数适合与 this 无关的回调——定时器、数组方法回调

箭头函数不适合与 this 有关的回调——事件回调、对象的方法

#### 与普通函数的 this

[如何判断 this 指向问题以及普通函数和箭头函数的 this 区别](https://blog.csdn.net/qq_41968486/article/details/111468976)

[箭头函数与普通函数区别 - 箭头函数的 this 详解](https://mp.weixin.qq.com/s?__biz=Mzg2MjI0MzA4NQ==&mid=2247485488&idx=1&sn=722434a37dd7a15edc8bcaf2b6087257&chksm=ce0b9852f97c1144800a7f7af3deea4a48cab27f18513080ea23b8807f62f862705661133207&mpshare=1&scene=1&srcid=0708S2yX7QMXUsxr2izQkmSX&sharer_sharetime=1594187736765&sharer_shareid=f2322c65cd5cbf0253fed0c2559854ba&exportkey=AbYZlJIf85VZ%2b1FM79HOGQQ=&pass_ticket=ei3NbEZQXBNxNJDkcuzkuO8ULPiuazLaTGG/jy21HhvseC1nFz0ZbSbKS5BjoUN9&wx_header=0#rd)

箭头函数中的 this，在定义时决定，指向父执行上下文的 this，无则为 Window

普通函数中的 this，在调用时决定，谁调用指向谁；如果直接执行，则调用者为 Window

bind call apply 可以改变普通函数的 this 指向

[普通函数和箭头函数的 this](https://blog.csdn.net/xiaojinguniang/article/details/87018158)

普通对象（非函数）是没有执行上下文的

![image-20210213223350435](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213223351.png)

### 函数参数

#### 参数默认值

![image-20210213150455433](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213150457.png)

#### rest 参数

![image-20210213151028251](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213151229.png)

#### 扩展运算符

![image-20210213151522320](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213151600.png)

![image-20210213152017639](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213152018.png)

## Symbol

![image-20210213160424100](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213160425.png)

### Symbol 内置值

![image-20210213160855052](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213160856.png)

![image-20210213161142101](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213161143.png)

### 迭代器

![image-20210213183014505](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213183015.png)

Symbol.iterator

自定义遍历数据

![image-20210213210225991](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/js/20210213210227.png)

### 生成器

## Promise

## 集合 Set

## Map

## class

## 对象方法

## 正则扩展

## BigInt 类型

