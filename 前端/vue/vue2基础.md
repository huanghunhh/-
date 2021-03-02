# vue2 基础

## 简介

- 简介

  ![image-20210203204504938](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210203204506.png)

  ![image-20210203205916284](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210203205918.png)

  命令式编程 

  声明式编码

### 引入

- 引入

  + CDN 网址引入

    ```html
    <!-- 开发环境版本 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 生产环境版本 --->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
    ```

  + 下载引入

    [vue2开发环境版本下载地址](https://cn.vuejs.org/js/vue.js)

    [vue2生产环境版本下载地址](https://cn.vuejs.org/js/vue.min.js)

  + NPM 安装引入

### Vue 中的 MVVM 

- Vue 中的 MVVM

  ![image-20210203210435632](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210203210437.png)

## ES6 语法

- 增强

  ![image-20210204123831592](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204123832.png)

### 数组

- 数组

  filter map reduce

  ![image-20210204224630028](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204224631.png)

### 箭头函数

- 箭头函数

  ![image-20210208134206824](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208134208.png)

  箭头函数的 this

  ![image-20210208134347381](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210208134348.png)

### Promise

P305 暂略

### axios

P362 暂略

## options 选项

### el

![image-20210204095739296](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204095740.png)

决定之后 Vue 实例会管理哪个 DOM

### data

Vue 实例对应的数据对象

### methods

定义属于 Vue 的方法，可以在其他地方调用，也可以在指令中使用

### computed 计算属性

- 简介

![image-20210204121941212](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204121942.png)

- 三种方法比较

  ![image-20210204122448727](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204122450.png)

  ![image-20210204123500737](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204123502.png)

- 复杂操作

  ![image-20210204122635574](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204122637.png)

- getter 与 setter

  ![image-20210204123238749](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204123240.png)

### filters 过滤器

### components 组件

## vue 语法

### mustache 

![image-20210204100435480](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204100436.png)

```html
<body>
  <div id="app">
    <h1>hello {{name}}</h1>
    <h2>{{firstName}} {{lastName}}</h2>
    <h3>{{counter * 2}}</h3>
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        name: 'vue',
        firstName: 'coder',
        lastName: 'why',
        counter: 100
      }
    })
  </script>
</body>
```

### v-text

![image-20210204101741748](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204101743.png)

```html
<body>
  <div id="app">
    <h1>hello {{name}}</h1>
    <h1 v-text="name">hello</h1>    
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        name: 'vue',
      }
    })
  </script>
</body>
```



### v-once

![image-20210204100912143](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204100913.png)

```html
<body>
  <div id="app">
    <h1>hello {{name}}</h1>
    <h1 v-once>hello {{name}}</h1>
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        name: 'vue',
      }
    })
  </script>
</body>
```

### v-html

![image-20210204101136771](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204101138.png)

```html
<body>
  <div id="app">
    <div>{{htmlString}}</div>
    <div v-html=htmlString></div>
    <div v-html="htmlString"></div>    
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        htmlString: '<h4>v-html</h4>',
      }
    })
  </script>
</body>
```

### v-pre

![image-20210204102030627](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204102031.png)

```html
<body>
  <div id="app">
    <h1>hello {{name}}</h1>
    <h1 v-pre>hello {{name}}</h1>    
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        name: 'vue',
      }
    })
  </script>
</body>
```

### v-cloak

![image-20210204102229239](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204102230.png)

### v-bind

- 基本用法

![image-20210204102820866](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204102821.png)

```html
<body>
  <div id="app">
    <a v-bind:href="url">百度一下</a>
    <a :href="url">百度一下</a>
  </div>
  
  <script src="./vue.js"></script>
  <script>
    let app = new Vue({
      // 创建 Vue 实例时，传入了一个 options 对象
      el: '#app',
      data: {
        url: 'http://www.baidu.com'
      }
    })
  </script>
</body>
```

- 对象语法

  ![image-20210204104632029](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204104633.png)

  ![image-20210204121707684](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204121710.png)

- 数组语法

  ![image-20210204105208270](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204105209.png)

- 结合 methods 或 computed

- 点击谁，谁变红

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
      .red {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <ul>
        <!-- v-for 展示数据 -->
        <!-- v-on 监听点击事件，来修改 isRed 的值 -->
        <!-- v-bind 根据 isRed 的值，给 class 动态添加属性值 -->
        <li v-for="(n, i) in names" 
          :class="{red: i==isRed}" 
          @click="setClass(i)">
        {{i}} - {{n}}</li>
      </ul>
    </div>
    <script src="./vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          names: ['vue', 'js', 'c', 'python'],
          isRed: -1,
        },
        methods: {
          setClass(i) {
            this.isRed = i
          }
        }
      })
    </script>
  </body>
  </html>
  ```

- 绑定 style

  ![image-20210204121637205](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204121639.png)

### v-on

- 基本用法

  ![image-20210204124132002](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204124133.png)

- 参数问题

  ![image-20210204124911056](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204124912.png)

- v-on 修饰符

  ![image-20210204125619735](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204125621.png)

### v-if

![image-20210204135000997](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204135002.png)

### key（DOM 复用）

![image-20210204135503366](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204135504.png)

### v-show

![image-20210204135923026](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204135924.png)

### v-for

渲染一组数据

遍历数组
item in Array - 值
(item, index) in Array - 值 下标

遍历对象
value in Obj - 值
(value, key) in Obj - 值 键
(value, key, index) in Obj - 值 键 下标

![image-20210204163937175](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204163938.png)

- 与 key 属性

  ![image-20210204164835541](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204164836.png)

### 数组操作

![image-20210204165734605](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204165736.png)

### 购物车案例

![image-20210204224054316](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204224057.png)

采用方法

或 过滤器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Document</title>
  <style>
    table,
    th,
    td {
      font-weight: 400;
      border: 1px solid #e9e9e9;
      border-collapse: collapse;
      border-spacing: 0;
      text-align: center;
    }
    table {
      min-width: 500px;
    }
    th {
      background-color: #f7f7f7;
      color: #5c6b77;
      font-weight: 600;
    }
    th,
    td {
      padding: 10px;
    }
    button {
      background-color: #fff;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 2px 6px;
      outline: none;
    }
    .remove {
      background-color: rgb(237, 237, 237);
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <div id="app">
    <div v-if="books.length !== 0">
      <table>
        <thead>
          <tr>
            <th v-for="item in booksHead">{{item}}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in books">
            <td>{{index+1}}</td>
            <td>《{{item.name}}》</td>
            <td>{{item.date}}</td>
            <!-- 使用 methods 方法 -->
            <!-- <td>{{showPrice(item.price)}}</td> -->
            <!-- 使用 filters 过滤器 -->
            <td>{{item.price | showPrice}}</td>
            <td>
              <button @click="sub(index)" :disabled="item.count <= 1">-</button>
              {{item.count}}
              <button @click="add(index)">+</button>
            </td>
            <td><button class="remove" @click="remove(index)">移除</button></td>
          </tr>
        </tbody>
      </table>
      <!-- <p>总价：{{showTotalPrice}}</p> -->
      <p>总价：{{showTotalPrice | showPrice}}</p>
    </div>
    <div v-else>暂无信息</div>
  </div>
  <script src="./vue.js"></script>
  <script>
    let booksHead = ['', '书籍名称', '出版日期', '价格', '购买数量']
    let books = [
      {
        name: '算法导论',
        date: '2006-9',
        price: 85,
        count: 1,
      },
      {
        name: 'UNIX 编程艺术',
        date: '2006-2',
        price: 59,
        count: 1,
      },
      {
        name: '编程珠玑',
        date: '2008-10',
        price: 39,
        count: 1,
      },
      {
        name: '代码大全',
        date: '2006-3',
        price: 128,
        count: 1,
      },
    ]
    const app = new Vue({      
      el: '#app',
      data: {
        booksHead,
        books,
      },
      computed: {
        showTotalPrice() {
          let price = 0
          for (const item of this.books) {
            price += item.price * item.count
          }
          return price
          // return this.showPrice(price)
        }
      },
      methods: {
        // showPrice(price) {
        //   return '￥' + price.toFixed(2)
        // },
        sub(index) {
          this.books[index].count--
        },
        add(index) {
          this.books[index].count++
        },
        remove(index) {
          this.books.splice(index, 1)
        }
      },
      filters: {
        showPrice(price) {
          return '￥' + price.toFixed(2)
        },
      }
    })
  </script>
</body>
</html>
```

### v-model

- v-model 基本使用

  表单绑定——实现了双向绑定的是表单的 value 属性 和 data 对象中的数据

  ![image-20210205130942826](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205130944.png)

- v-model 与 单选框

  ![image-20210205132034350](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205132036.png)

  v-model = "sex" 也能实现单选的效果（name属性可以省略）

- v-model 与 多选框

  ![image-20210205132649701](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205132651.png)

- v-model 与 下拉列表
  ![image-20210205132949428](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205132950.png)

- 动态绑定表单的 value 属性

  ![image-20210205141749602](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205141750.png)

- v-model 修饰符

  ![image-20210205221232244](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205221234.png)

## 组件

- 简介

  ![image-20210205221608447](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210205221610.png)

### 注册组件

- 注册组件

  ![image-20210206103025998](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206103029.png)

- 全局组件和局部组件

  ![image-20210206103203756](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206103206.png)

  ```html
  <script>
    const cpnC = Vue.extend({ // 创建组件
      template: `
        <div>
          <div>组件化</div>
          <div>可以多次复用</div>
          <div>不信你就试试</div>
        </div>
      `
    })
    // Vue.component('my-cpn', cpnC) // 注册全局组件
    const app = new Vue({
      el: '#app',
      data: {
        name: 'tzy'
      },
      components: { // 注册局部组件
        'my-cpn': cpnC
      }
    })
  </script>
  
  ```

- 父子组件

  ![image-20210206143519532](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206143522.png)

  ![image-20210206143855](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206143855.png)

	![image-20210206144755208](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206144758.png)

### 组件抽离

![image-20210206145352827](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206145354.png)

![image-20210206145532528](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206145533.png)

### 组件中的数据

![image-20210206150650242](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206150652.png)

### 组件间的通信

![image-20210206155840474](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206155841.png)

- props 父 -> 子

  ![image-20210206161030410](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206161031.png)

  ![image-20210206165223880](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206165225.png)

  ![image-20210206165237631](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206165239.png)

- 事件 子 -> 父

  ![image-20210206165604505](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206165605.png)

  ![image-20210206170516096](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206170517.png)

- 组件间的访问

  ![image-20210206182541102](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206182544.png)

  ![image-20210206183140821](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206183142.png)

  ![image-20210206183810803](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206183812.png)

  ![image-20210206183820299](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206183822.png)

### 插槽 slot

- 插槽

  ![image-20210206184750674](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206184752.png)

- 具名插槽

  ![image-20210206185952321](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206185953.png)

- 编译作用域

  ![image-20210206190249591](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206190250.png)

- 作用域插槽

  ![image-20210206191146636](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206191147.png)

  作用域插槽：父组件替换插槽的标签，但内容由子组件来提供

## 不同用法

### 最初用法

#### 基本用法

![image-20210203210715429](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210203210717.png)

#### 组件

![image-20210206105652361](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206105654.png)

#### 组件注册语法糖

![image-20210206144254470](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206144256.png)

#### 组件抽离

![image-20210206145532528](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210206145533.png)

#### 模块化(结合webpack)

将抽离出来的组件封装进 js 文件中

![image-20210207102754501](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207102756.png)

![image-20210207103829893](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207103831.png)

### vue2 模块化开发

#### 基本使用

- 简介

  使用 npm 安装 vue，以模块化的方式使用 vue

  ![image-20210207085948183](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207085949.png)

  ![image-20210207093551954](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207093554.png)

#### 组件化开发

##### el 与 template

- 简介

  ![image-20210207103123683](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207103125.png)

##### 组件化

- 简介

  ![image-20210207131842430](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207131843.png)

- 将代码封装到 index.js 中

  ![image-20210207103829893](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207103831.png)

- 将代码封装到 app.js 中

  ![image-20210207105331959](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207105333.png)

- 封装成 .vue 文件

  ![image-20210207124356005](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210207124357.png)

## 生命周期

![image-20210204095958489](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204100000.png)

![image-20210204100007954](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204100009.png)

![image-20210204100017424](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/vue/20210204100018.png)