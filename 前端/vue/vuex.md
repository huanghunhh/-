# Vuex

- 简介

  Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**，它采用**集中式存储**管理应用的所有组件的状态，即把需要多个组件共享的变量全部存储在一个对象里面，然后将这个对象放在顶层的 Vue 实例中，让其他组件可以使用

  ![image-20210211160451834](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210211160453.png)

## 状态管理

### 单界面的状态管理

![image-20210211162452195](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210211162453.png)

### 多界面状态管理

![image-20210211163211717](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210211163213.png)

### Vuex 状态管理

![image-20210212110802474](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212110803.png)

利用 Vue CLI 3 安装 Vuex

![image-20210211170825578](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210211170828.png)

单独安装 vuex

![image-20210212110312264](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212110344.png)

mutations 中的方法，也可以传参 state，然后就不需要通过 this.state 访问 state 了

## Vuex

### Devtools

![image-20210212111027525](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212111029.png)

### state

![image-20210212111152832](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212111154.png)

![image-20210212111522909](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212111524.png)

### getters

相当于计算属性

![image-20210212194300701](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212194302.png)

![image-20210212205518290](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212205519.png)

### mutations

![image-20210212211309438](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212211310.png)

字符串的事件类型：即 mutations 中的方法名称

#### mutations 响应规则

![image-20210212212127041](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212212129.png)

```js
Vue.set('针对的对象', '针对的变量', '设置的值')
Vue.delete('针对的对象', '针对的变量')
```

#### mutations 的类型常量

![image-20210212223540765](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212223542.png)

### actions

![image-20210212223942771](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212223944.png)

![image-20210212231020590](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212231022.png)

![image-20210212232757713](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210212232759.png)

### modules

![image-20210213000200240](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213000202.png)

### 文件抽离

![image-20210213000314738](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210213000316.png)