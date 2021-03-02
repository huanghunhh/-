# vue-router

## 路由发展

- 简介

  ![image-20210208141617525](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208141618.png)

### 后端路由阶段

- 简介

  ![image-20210208142131846](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208142133.png)

  ![image-20210208142323025](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208142324.png)

### 前后端分离阶段

前后端分离-后端专注于数据，前端专注于交互和可视化

![image-20210208143037371](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208143038.png)

![image-20210208142858079](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208142859.png)

### 单页面富应用阶段

在前后端分离的基础上加了一层前端路由

SPA - simple page web application

![image-20210208143052877](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208143053.png)

![image-20210208143559271](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208143600.png)

### url 的控制

![image-20210208144856504](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208144857.png)

![image-20210208145509833](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208145510.png)

## vue-router

- 简介

  vue-router 基于路由和组件，路由用于设定访问路径，将路径和组件映射起来

  在 vue-router 的单页面应用中，页面的路径的改变就是组件的切换

  ![image-20210208200755808](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208200757.png)

### Vue CLI 安装 Router

- 利用 Vue CLI 安装 Router

  ![image-20210208234156254](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208234158.png)

  ![image-20210209115303185](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209115304.png)

  然后就能使用 vue-router 了，下面单独安装 Router

### 单独安装 Router

- 简介

  在利用 Vue CLI 创建项目时，不选择 Router 选项，之后自己配置 Router

  ![image-20210209111320579](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209111603.png)

  ![image-20210209111600287](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209111613.png)

- 我的使用

  ![image-20210209113909045](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209113910.png)

### 路由的默认值

- 简介

  ![image-20210209114946064](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209114947.png)

### HTML5 的 History 模式

![image-20210209115431993](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209115433.png)

### router-link

![image-20210209120806909](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209120809.png)

### 通过代码跳转路由

第二种跳转方式

```js
this.$router.push('/home')
this.$router.replace('/home')
```

![image-20210209125218098](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209125219.png)

### 动态路由

![image-20210209153023186](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209153024.png)

![image-20210209153637784](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209153639.png)

和参数传递有关联

### 路由懒加载

![image-20210209203100901](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209203103.png)

- 懒加载导致的问题

  ![image-20210210231236157](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210231238.png)

  链接跳转报模块加载失败错误，是由路由懒加载导致的

  [vue 路由懒加载和多层嵌套路由导致线上的项目有时出现加载 css,js 文件 Loading chunk xxx field 失败的情况](https://blog.csdn.net/weixin_42120767/article/details/111692868)

  [vue 路由懒加载的三种方式，以及遇到线上版本因为路由懒加载会偶发出现 Loading chunk xx failed 的解决办法](https://blog.csdn.net/weixin_41628411/article/details/106635909)

### 嵌套路由

![image-20210209203345014](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209203346.png)

![image-20210209212516590](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210209212524.png)

### 参数传递

- 简介

![image-20210210102548250](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210102550.png)

![image-20210210103008655](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210103010.png)

- 我的

  ![image-20210210113218493](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210113219.png)

  通过 js 代码传递参数同上，下面简单展示

  ![image-20210210114338204](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210114339.png)

### \$router 与 \$route

![image-20210210181804448](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210181807.png)

后面还去看源码了，有点迷糊

### 全局导航守卫

- 简介

  如何根据页面内容显示不同标题？

  在每个路由组件中添加相应代码

  ![image-20210210182349200](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210182350.png)

  每个路由组件都要写一次太麻烦了

- 全局导航守卫

  ![image-20210210182712159](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210182713.png)

  ![image-20210210185319919](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210185321.png)

  ![image-20210210184307794](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210184309.png)

  现在好像路由子组件也能直接通过 meta 取出 title 属性了

  ![image-20210210185231851](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210185233.png)

  导航守卫-用于监听路由的进入和离开

  提供了beforeEach 和 afterEach的钩子函数，在路由即将改变前和改变后触发

- 补充

  ![image-20210210185402881](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210185404.png)

  [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)

### keep-alive

![image-20210210191601697](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210191602.png)

但好像 /home/message 不能使用 keep-alive 来保留状态，因为有嵌套子路由的问题

```js
// Home.vue 文件
data() {
  return {
    path: '/home/news' // 默认子路径
  }
},
activated() { // 打开页面时调用路径
  this.$router.push(this.path)
},
beforeRouteLeave(to, from, next) { // 离开时记录路径
  this.path = this.$route.path
  next()
}
```

详细的过程

![image-20210210235302470](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210210235303.png)