# react_尚硅谷天禹

## React 入门

### 简介

- 简介

  React 全家桶——React基础、React-router（路由）、PubSub（消息管理）、Redux（集中式状态管理）、Ant-Design（UI 组件库）

  React 只关注界面（视图）

  如果是原来要展示学生信息——请求、处理、操作DOM（React处理）

  用 DOM 的 API 在操作 UI

  模块化——拆分 JS 文件

  组件化——一拆到底的感觉，拆分 HTML CSS JS 即其他文件

  声明式编码（声明即可）/命令式编码（一步一步做）

  React Native —— 通过 JS 编写安卓（Java）、IOS（oc、swift） 应用

  虚拟 DOM + diffing——减少与真实 DOM 的交互

  进行虚拟 DOM 的比较——有差别的才渲染，没变的直接用

  ![image-20210411201051982](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411201534.png)

  ![image-20210411201239424](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411201543.png)

  ![image-20210411201426843](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411201550.png)

  ![image-20210411201431322](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411201557.png)

### Hello React

- 简介

  babel —— ES6 转 ES5，JS 模块化

  还能进行 JSX（在 JS 上添加了一下新语法） 转 JS

  react.development ——react 核心库

  react-dom.development——react 扩展库，操作 DOM

  找不到图标（浏览器第一次自动发送）

   正在使用浏览器里面的 babel 翻译器，请确定脚本没有运行在生产环境下（开发的时候一定不会这样写，现去进行 babel 翻译，一定不在真实开发中使用，代码多了就会出现白屏）

  开发者调试工具

  ![image-20210411210038975](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411210042.png)

- 为什么非要用 jsx

  React 官方为什么要出 jsx 语法

  使用 jsx 创建虚拟 DOM（简单的创建虚拟 DOM）（小括号括起来，可以换行了）（babel 将其翻译成 js 的写法）（语法糖，简写）

  使用 js 创建虚拟 DOM

  ![image-20210411211350886](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210411211352.png)

### 虚拟 DOM

- 虚拟 DOM

  虚拟 DOM 就是一个一般对象

  ![image-20210412173358384](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412173400.png)

  虚拟 DOM

    1. 本质就是 Object 类型的对象（一般对象）

    2. 虚拟 DOM 比较 “轻”，真实 DOM 比较 “重”，因为虚拟 DOM 是 React 内部在使用，无需真实 DOM 上那么多的属性

    3. 虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上

### jsx 语法

- 简介

  全称 JavaScript XML，是 react 定义的一种类似于 XML 的 JS 扩展语法：JS + XML

  XML：很早之前的存储和传输数据的格式——现在大部分用 JSON（js 里面有内置的方法处理 JSON ）

  ![image-20210412174421563](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412174422.png)

- 规则

  ```js
  /*
  jsx 语法规则
  1. 定义虚拟 DOM 时，不要写引号
  2. 标签中混入 JS 表达式时，要使用 {}
  3. 样式的类名指定不要用 class,要用 className（class 是 ES6 的类定义的关键字）
  4. 内联样式，要用 style={{key: value}} 的形式去写
      外层的 {} 表示是 JS 表达式，内层的表示是一个对象
      white 要用引号引起来，因为是个字符串，不是变量
      fontSize 要用小驼峰的形式
  5. 虚拟 DOM 只有一个根标签
  6. 标签必须闭合（或者自闭合）
  7. 标签首字母：
      1) 小写字母开头，则将标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，则报错
      2) 大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错
  */
  ```

  

  ![image-20210412193153155](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412193155.png)

- 练习

  ```js
  /*
  {} 只能写 js 表达式
  一定要注意区分 【js 语句（代码）】与【js 表达式】
    1. 表达式：一个表达式会产生一个值（在左侧定义一个变量，能接到值就是），可以放在任何一个需要值的地方表达式
      例：
        1) a
        2) a + b
        3) fun(1) 函数调用表达式
        4) arr.map() 数组的 map 方法
        5) function test() {}
    2. 语句（代码）
      例：
        1) if () {}
        2) for () {}
        3) switch() {case: xxx}
  */
  ```

  ![image-20210412195845742](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412195847.png)

  ![image-20210412200028718](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412200030.png)

### 模块化概念

- 模块

  理解：向外提供特定功能的 js 程序，一般就是一个 js 文件，模块就是指 js 模块

  引入原因：随着业务逻辑的增加，代码越来越多且复杂

  作用：复用 js，简化 js 的编写，提高 js 的运行效率

- 组件

  理解：用来实现局部功能效果的代码和资源的集合（html/css/js/image 等等）（一拆到底）

  引入原因：一个界面的功能更复杂

  作用：复用编码，简化项目编码，提高运行效率

- 模块化

  当应用的 js 都以模块来编写，这个应用就是一个模块化的应用

- 组件化

  当应用是以多组件的方式实现，这个应用就是一个组件化的应用

## React 面向组件编程

### React Developer Tool

选择提供方是 Facebook 的

开发者的模式，没有打包上线打包，部署到服务器上，上线了

多少组件，每个组件中拥有什么属性

记录网站的性能，加载时间等

![image-20210412205700056](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210412205702.png)

以后下载插件就用[扩展迷](https://www.extfans.com/)

[使用 react-devtools 后出现 Uncaught TypeError: Cannot read property ‘forEach‘ of undefined 的解决方法](https://blog.csdn.net/Leo_xian/article/details/112899961)

版本问题，下载最新版本的

[React Developer Tools安装使用](

### 函数式组件

- 简介

  组件：

  函数式组件——用函数定义出来的组件

  类式组件——用类定义出来的组件

  react 的属性

  react 的版本

  babel 翻译 jsx 后，开启了 js 的严格模式

- 函数式组件

  ![image-20210413000232056](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413000233.png)

  ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413000240.png)
  
  ```js
  // 1. 创建函数式组件
  function Demo() { // 首字母大写
    console.log(this) // 此处的 this 是 undefined，因为 babel 编译后开启了严格模式
    return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2> // 必须有返回值
  }
  // 2. 渲染组件到页面
  ReactDOM.render(<Demo />, document.getElementById('test')) // 封闭的组件标签
  /*
  执行了 ReactDOM.render 后，发生了什么？
    1. React 解析组件标签，找到了 Demo 组件
    2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中
  */
  ```
  
  

### 类

- 基本知识

  {} 实例对象，Person 表明该实例对象是由 Person 这个类生成的

  ![image-20210413171235399](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413171237.png)

- 继承

  ![image-20210413173044431](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413173045.png)

  ```js
  /*
  总结：
  1. 类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写
  2. 如果 A 类继承了 B 类，且 A 类中写了构造器，那么 A 类构造器中的 super 必须要调用
  3. 类中所定义的方法，都是放在了类的原型对象上，供实例去使用
  */
  ```

### 类式组件

组件的三大属性：props refs state

context - 扩展知识点

![image-20210413193230052](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413193231.png)

```js
// 1. 创建类式组件
class MyComponent extends React.Component {
  render() {
    // render 是放到哪里的？——MyComponent 类的原型对象上，供实例使用
    // 实例呢？——new MyComponent()——一定是存在的
    // render 中的 this 是谁？——MyComponent 的实例对象、MyComponent 组件实例对象
    console.log(this);
    return (
      <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
    )
  }
}
// 2. 渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById('test'))
/*
执行了 ReactDOM.render 后，发生了什么？
  1. React 解析组件标签，找到了 MyComponent 组件
  2. 发现组件是使用类定义的，随后 new 出来该类的实例，并通过该实例调用到原型上的 render 方法
  3. 将 render 返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中
*/
```

### state

- 简介

  复杂组件——有状态的（state）

  简单组件——无状态的（state）

  state-组件实例对象（类式组件才有实例对象）上的

- 初始化 state

  ![image-20210413203424025](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413203425.png)

  ```jsx
  // 1. 创建类式组件
  class Weather extends React.Component {
    constructor(props) {
      super(props)
      this.state = { // 初始化状态
        // isHot: true,
        isHot: false,
      }
    }
  
    render() {
      console.log(this)
      // 读取状态做展示
      const {isHot} = this.state
      return (
        <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      )
    }
  }
  // 2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('test'))
  ```

- 事件绑定

  React 重写了 on方法 如 onclick-onClick onblur-onBlur

  执行了代码 onClick={demo()}——函数调用表达式，把 demo 函数的返回值交给 onClick 作为回调

  只是指定好了函数，之后它帮你调

  ![image-20210413205349547](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210413205350.png)

- 类中方法的 this

  study 方法，特殊的属性

  函数直接调用——类在局部开启了严格模式，不指向 window，而指向 undefined

  ![image-20210414000631254](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414000958.png)

  ![image-20210414120653916](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414120705.png)

  ```jsx
  // 1. 创建类式组件
  class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = { // 初始化状态
      // isHot: true,
      isHot: false,
    }
    // 解决 demo 中 this 指向问题
    // 调用 bind，生成新的函数，并修改 this 的指向
    this.demo = this.demo.bind(this)
  }
  
  demo() {
    // demo 放在哪里？——Weather 的原型对象上，供实例使用
    // 通过 Weather 实例调用 demo，demo 中的 this 就是 Weather 实例
    // demo 是作为 onClick 的回调，所以不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以 demo 中的 this 为 undefined
    const {isHot} = this.state
    console.log(isHot)
    isHot = !isHot
    // alert('title 被点击了')
  }
  
  render() {
    console.log(this)
    // 读取状态做展示
    const {isHot} = this.state
    // demo 不是通过 Weather类实例 调用的，其 demo 中的 this 不是指向 Weather类实例
    return (
      <h1 id="title" onClick={this.demo}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
    )
  }
}
  // 2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('test'))
  ```

- setState

  从编码角度，this.state.isHot 被更改了，但 React 不认可

  类实例对象，类的原型对象，React.Component 的原型对象-setState

  ![image-20210414132213488](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414132214.png)

  ![image-20210414122223055](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414122224.png)

  ```jsx
  // 1. 创建类式组件
  class Weather extends React.Component {
    // 构造器调用几次？——1 次
    constructor(props) {
      super(props)
      this.state = { // 初始化状态
        // isHot: true,
        isHot: false,
      }
      // 解决 demo 中 this 指向问题
      // 调用 bind，生成新的函数，并修改 this 的指向
      this.demo = this.demo.bind(this)
    }
    
    // demo 调用几次？—— 点几次，调用几次
    demo() {
      // demo 放在哪里？——Weather 的原型对象上，供实例使用
      // 通过 Weather 实例调用 demo，demo 中的 this 就是 Weather 实例
      // demo 是作为 onClick 的回调，所以不是通过实例调用的，是直接调用
      // 类中的方法默认开启了局部的严格模式，所以 demo 中的 this 为 undefined
  
      // 获取原来的 isHot 值
      const {isHot} = this.state
      console.log(isHot)
      // 状态必须通过 setState 来更新
      // 且更新是一种合并，不是替换
      this.setState({
        isHot: !isHot
      })
      // 状态(state)不可直接更改
      // this.state.isHot = !isHot // 错误写法
    }
  
    // render 调用几次？—— 1+n 次（1 次初始化，n 次状态更新）
    render() {
      // 读取状态做展示
      const {isHot} = this.state
      // demo 不是通过 Weather类实例 调用的，其 demo 中的 this 不是指向 Weather类实例
      return (
        <h1 id="title" onClick={this.demo}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      )
    }
  }
  // 2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('test'))
  ```

- state 简写

  ![image-20210414134251567](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414134252.png)

  ```jsx
  // 1. 创建类式组件
  class Weather extends React.Component {
    // 初始化状态
    state = { 
      // isHot: true,
      isHot: false,
    }
    // 自定义方法
    // 赋值语句（类实例对象的方法） + 箭头函数（this 指向类实例对象）
    demo = () => {
      // console.log(this)
      const {isHot} = this.state
      console.log(isHot)
      this.setState({
        isHot: !isHot
      })
    }
  
    render() {
      const {isHot} = this.state
      return (
        <h1 id="title" onClick={this.demo}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      )
    }
  }
  // 2. 渲染组件到页面
  ReactDOM.render(<Weather />, document.getElementById('test'))
  ```

  或者参考 React 官网的井字棋案例

  ![image-20210414135915463](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414135916.png)

  定义在类原型对象上，但调用时，通过箭头函数的方式来调用，让jumpTo 内部的 this 去外层的类实例对象上找

- state 总结

  状态机：组件里面维护着状态，状态里面存储着数据，在更新状态里面的数据时，组件就会被重新渲染

  组件中的方法，只会作为回调去使用

  ![image-20210414135700926](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414135702.png)

### props

- 基本使用

  ![image-20210414151547121](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414151548.png)

- 批量传递

  批量传递标签属性，批量传递 props

  展开运算符

  字面量的形式，复制一个对象

  标签属性的传递

  ![image-20210414153559722](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414153601.png)

  ```jsx
  // 创建组件
  class Person extends React.Component {
    render() {
      const {name, sex, age} = this.props
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age}</li>
        </ul>
      )
    }
  }
  // 渲染组件到页面    
  // ReactDOM.render(<Person />, document.getElementById('test'))
  ReactDOM.render(<Person name='tom' age="18" sex='女'/>, document.getElementById('test'))
  const p = {
    name: '老刘',
    age: 18,
    sex: '女'
  }
  // React 给的语法糖
  ReactDOM.render(<Person {...p}/>, document.getElementById('test'))
  ```

- props 标签属性类型的限制

  ![image-20210414191549930](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414191551.png)

- props 简化形式

  ![image-20210414195337702](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414195339.png)

  ```jsx
  // 创建组件
  class Person extends React.Component {
    // 给类本身添加 propTypes defaultProps 属性
    // 对标签属性进行类型、必要性的限制
    static propTypes = {
      name: PropTypes.string.isRequired, // 限制 name 必传，且为字符串
      sex: PropTypes.string, // 限制 sex 为字符串
      age: PropTypes.number, // 限制 age 为数值
      fun: PropTypes.func, // 限制 fun 为函数
    }
    
    // 指定默认标签属性值
    static defaultProps = {
      sex: '未知', // sex 默认值为未知
      age: 18, // age 默认值为 18
    }
  
    render() {
      const {name, sex, age} = this.props
      // prop 是只读的
      // name = 'name' // 报错 - 因为 props 是只读的
      return (
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{sex}</li>
          <li>年龄：{age + 1}</li>
        </ul>
      )
    }
  }
  
  // 渲染组件到页面
  // 写成 Number 类型的 19 —— JS 里面才有 Number 类型一说
  // {} —— 表明是 JS 语法
  ReactDOM.render(<Person name='tom' age={19} sex='女'/>, document.getElementById('test'))
  const p = {
    name: '老刘',
    // age: 18,
    // sex: '女'
  }
  // React 给的语法糖
  ReactDOM.render(<Person {...p}/>, document.getElementById('test'))
  ```

- props 与构造器

  ![image-20210414224022917](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414224024.png)

  构造器一般不写

  如果要在构造器中通过 this 访问 props，则要传递给 super

- 函数式组件使用 props

  函数没有实例，故无法使用 state ref，但函数能接收参数，能使用 props

  ```jsx
  // 创建组件
  function Person(props) {
    const {name, sex, age} = props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    )
  }
  // 对 props 的限制只能这样写
  // 对标签属性进行类型、必要性的限制
  Person.propTypes = {
    name: PropTypes.string.isRequired, // 限制 name 必传，且为字符串
    sex: PropTypes.string, // 限制 sex 为字符串
    age: PropTypes.number, // 限制 age 为数值
    fun: PropTypes.func, // 限制 fun 为函数
  }
  // 指定默认标签属性值
  Person.defaultProps = {
    sex: '未知', // sex 默认值为未知
    age: 18, // age 默认值为 18
  }
  
  // 渲染组件到页面
  ReactDOM.render(<Person name='tom' age={19}/>, document.getElementById('test'))
  ```

- 总结

  ![image-20210414230040798](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210414230047.png)

### ref

- 字符串形式的 ref

  ![image-20210415171102304](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210415171302.png)

  React 不推荐，之后还可能会被废弃

  ```jsx
  // 创建组件
  class Demo extends React.Component {
    // 此处的 ref 是字符串形式的
    // 展示左侧输入框的数据
    showData = () => {
      const {input1} = this.refs
      console.log(input1.value)
    }
    // 展示又侧输入框的数据
    showData2 = () => {
      const {input2} = this.refs
      console.log(input2.value)
    }
    render() {
      return (
        <div>
          {/*
          <input id="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
          */}
          <input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
          <button onClick={this.showData}>点我提示左侧数据</button>&nbsp;
          <input onBlur={this.showData2} ref="input2" type="text" placeholder="失去焦点提示数据"/>
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Demo />, document.getElementById('test'))
  ```

  

- 回调形式的 ref

  回调函数：自己定义的函数，自己没有调用，函数最终执行了（被别人调用了）

  ![image-20210415183827136](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210415183842.png)

  ![image-20210415183832818](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210415183843.png)

  ```jsx
  // 创建组件
  class Demo extends React.Component {
    // 此处的 ref 是字符串形式的
    // 展示左侧输入框的数据
    showData = () => {
      const {input1} = this
      console.log(input1.value)
    }
    // 展示又侧输入框的数据
    showData2 = () => {
      const {input2} = this
      console.log(input2.value)
    }
    render() {
      return (
        <div>
          {/*
          <input id="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
          */}
          <input ref={currentNode => this.input1 = currentNode} type="text" placeholder="点击按钮提示数据"/>&nbsp;
          <button onClick={this.showData}>点我提示左侧数据</button>&nbsp;
          <input onBlur={this.showData2} ref={c => this.input2 = c} type="text" placeholder="失去焦点提示数据"/>
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Demo />, document.getElementById('test'))
  ```

  

- 回调形式的ref的调用次数

  ![image-20210415195848054](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210415195849.png)

  内联函数形式的 ref 回调函数，会先清空旧的 ref 且设置为新的，就会先传入 null，再传入 DOM 元素，但这影响不大，一般还是这样写

  ```jsx
  // 创建组件
  class Demo extends React.Component {
    state = {
      isHot: true
    }
    changeWeather = () => {
      const {isHot} = this.state
      this.setState({
        isHot: !isHot
      })
    }
    showData = () => {
      const {input} = this
      console.log(input.value)
    }
    saveInput = (c) => {
      this.input = c; 
      console.log('@', c)
    }
    render() {        
      const {isHot} = this.state
      return (
        <div>
          <h2>今天天气{isHot ? '炎热' : '凉爽'}</h2>
          {/*<input ref={c => {this.input = c; console.log('@', c)}} type="text" placeholder="点击按钮提示数据"/><br />*/}
          <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据"/><br />
          <button onClick={this.showData}>点击提示数据</button>
          <button onClick={this.changeWeather}>点击切换天气</button>
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Demo />, document.getElementById('test'))
  ```

  

- createRef

  ![image-20210415231900620](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210415231942.png)

  ```jsx
  // 创建组件
  class Demo extends React.Component {
    // React.createRef 调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点
    // 该容器是 “专人专用” 的 —— 后放入的覆盖先放入的
    myRef = React.createRef()
    myRef2 = React.createRef()
    showData = () => {
      console.log(this.myRef)
      console.log(this.myRef.current.value)
    }
    showData2 = () => {
      // console.log(this.myRef2)
      console.log(this.myRef2.current.value)
    }
    render() {
      return (
        <div>
          <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/><br />
          <button onClick={this.showData}>点击提示数据</button>
          <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/><br />
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Demo a='1'/>, document.getElementById('test'))
  ```

### 事件处理

- event.target

  不要过度使用 ref，可以通过 event.target 得到发生事件的 DOM 元素对象
  
  当发生事件的 DOM 元素和要操作的 DOM 元素是同一个时，ref 就可以省略，使用 event.target      
  
  ```jsx
  // 创建组件
  class Demo extends React.Component {
    /*
      1. 通过 onXxxx 属性指定事件处理函数（注意大小写）
        a. React 中使用的是自定义（合成）事件，而不是使用的原生 DOM 事件
          为了更好的兼容性，React 对原生的 DOM 事件进行了二次封装
        b. React 中的事件是通过事件委托方式处理的（委托给组件最外层的元素）
          加给了最外层的 div 标签（为了高效-事件冒泡）
      2. 通过 event.target 得到发生事件的 DOM 元素对象
        发生事件的事件源
        不要过度的使用 ref
    */
    // 创建 ref 容器
    myRef = React.createRef()
    myRef2 = React.createRef()
  
    showData = () => {
      console.log(this.myRef)
      console.log(this.myRef.current.value)
    }
    // 发生事件的 DOM 元素和要操作的 DOM 元素是同一个 —— ref 可以省略
    // 使用 event.target
    // showData2 = () => {
    //   // console.log(this.myRef2)
    //   console.log(this.myRef2.current.value)
    // }
    showData2 = (event) => {
      console.log(event)
      console.log(event.target)
      console.log(event.target.value)
    }
  
    render() {
      return (
        <div>
          <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/><br />
          <button onClick={this.showData}>点击提示数据</button>
          <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/><br />
        </div>
      )
    }
}
  // 渲染组件到页面
  ReactDOM.render(<Demo a='1'/>, document.getElementById('test'))
  ```

- 非受控组件

  get 请求 query 参数

  ajax 最大的优势——页面无刷新获取数据（用户体验）

  点击确定后，写个 ajax ，将数据发送给后台，页面无跳转

  ![image-20210416155245732](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416155257.png)

  这就是非受控组件，表单中输入类 DOM 的值，其值是现用现取的

- 受控组件

  ![image-20210416160200930](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416160205.png)

  这就是受控组件，表单中输入类 DOM 的值，其值是随着输入就维护到 state 状态中，需要用的时候，直接从状态中取出即可（Vue 的双向数据绑定，React 没有实现——用 onChange）

  建议使用 受控组件，可以避免使用 ref

### 高阶函数—函数柯里化

saveFormData 就是高阶函数

![image-20210416165104243](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416165106.png)

![image-20210416165302772](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416165303.png)

```jsx
/*
高阶函数：如果一个函数符合下面两个规范中的任何一个，那该函数就是高阶函数
  1. 若 A 函数，接收的参数是一个函数，那么 A 就可以称为高阶函数
  2. 若 A 函数，调用的返回值依然是一个函数，那么 A 就可以称为高阶函数
  常见的高阶函数：Promise（参数-执行器函数）、setTimeout、arr.map()

函数的柯里化：通过函数调用，继续返回函数的方式，实现多次接收参数，最后统一处理的函数编码形式
  
*/
// 创建组件
class Login extends React.Component {
  // 初始化状态
  state = {
    uname: '', // 用户名
    password: '', // 密码
  }

  // 保存表单数据到状态中
  saveFormData = (dataType) => {
    // 真正的 onChange 的回调（有个 event 参数）
    return (event) => {
      console.log(dataType, event.target.value)
      this.setState({
        // 读变量
        [dataType]: event.target.value
      })
    }
  }

  // 表单提交的回调
  handleSubmit = (event) => {
    event.preventDefault() // 阻止表单提交
    const {uname, password} = this.state
    alert(`用户名：${uname}\n密码：${password}`)
  }
  
  render() {
    // 必须把一个函数交给 onChange 作为回调
    return (
      <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveFormData('uname')} type="text" name="uname" />
        密码：<input onChange={this.saveFormData('password')} type="password" name="password" />
        <button>登录</button>
      </form>
    )
  }
}
// 渲染组件到页面
ReactDOM.render(<Login />, document.getElementById('test'))
```

- 不使用函数柯里化的写法

  ![image-20210416170103916](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416170105.png)

  官网井字棋案例的写法

### 生命周期

#### 旧生命周期

- 引入

  ![image-20210416222155179](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416222201.png)

  componentDidMount 组件挂载完毕后

  componentWillUnmount 组件将被卸载时

  ```jsx
  // 创建组件
  class Life extends React.Component {
    state = {
      opacity: 0.5
    }
    go = () => {
      // 清除定时器
      // clearInterval(this.timer)
      // 卸载 unmount
      // 卸载组件，在某个节点上
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    // 组件一挂载完毕，就调用（React 帮助调用），只调用一次
    // 和 render 类似，React 借助 Lift 类的实例对象 . 调用的
    // 组件挂载完毕
    componentDidMount() {
      console.log('render')
      this.timer = setInterval(() => { // 组件卸载了，定时器需要关闭了
        // 获取原状态          
        let {opacity} = this.state
        // 减小 0.1
        opacity -= 0.1
        if (opacity <= 0) {
          opacity = 1
        }
        // 设置新透明度
        this.setState({
          opacity,
        })
      }, 200)
    }
    // 组件将被卸载
    componentWillUnmount() {
      // 清除定时器
      clearInterval(this.timer)
    }
    // 调用时机：初始化渲染、状态更新后
    render() {
      const {opacity} = this.state
      return (
        <div>
          <h2 style={{opacity: opacity}}>学得会！！！</h2>
          <button onClick={this.go}>冲冲冲</button>
        </div>
      )
    }
  }
  // 渲染组件到页面
  // 挂载 mount
  ReactDOM.render(<Life />, document.getElementById('test'))
  ```

  ![image-20210416222837806](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416222839.png)

  React 的生命周期——在关键的时间点，调用一些特殊的函数，我们可以在函数里面完成些特殊的事情

  生命周期回调函数——生命周期钩子函数——生命周期函数——生命周期钩子

- 生命周期函数

  ![image-20210416224916758](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/computerNetworks/multipleAccess/20210417210053.png)

  ![react生命周期(旧)](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417194753.png)

- 组件挂载流程

  ![image-20210416224515464](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210416224517.png)
  
  ![image-20210417183109223](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417183139.png)

- setState

  正常更新

  shouldComponentUpdate  不写此钩子，默认返回 true，流程继续，如果返回 false，流程到此结束

  ![image-20210417184347159](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417184348.png)

  ![image-20210417184446490](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417194754.png)

- forceUpdate

  强制更新（不通过更改 state 中的数据，来实现更新）

  就是少了一个环节（绕过阀门 shouldComponentUpdate）

  ![image-20210417185156910](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417194755.png)

  ```jsx
  // 创建组件
  class Count extends React.Component {
    // 构造器
    constructor(props) {
      console.log('Count---constructor')
      super(props)
      // 初始化状态
      this.state = {
        count: 0
      }
  
    }
    // +1 按钮的回调
    add = () => {
      // 获取原状态
      const {count} = this.state
      // 更新状态
      this.setState({
        count: count+1
      })
    }
    // 卸载组件按钮的回调
    death = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    // 强制更新按钮的回调
    force = () => {
      this.forceUpdate()
    }
  
  
    // 组件将要挂载
    componentWillMount() {
      console.log('Count---componentWillMount')
    }
    // 组件挂载完毕
    componentDidMount() {
      console.log('Count---componentDidMount')
    }
    // 组件将要卸载
    componentWillUnmount() {
      console.log('Count---componentWillUnmount')
    }
    // 组件是否能够更新
    // 控制组件更新的 “阀门”
    shouldComponentUpdate() {
      console.log('Count---shouldComponentUpdate')
      // 返回值必须为 布尔值
      // true  - 阀门开启
      // false - 阀门关闭
      return true
    }
    // 组件将要更新
    componentWillUpdate() {
      console.log('Count---componentWillUpdate')
    }
    // 组件更新完毕
    componentDidUpdate() {
      console.log('Count---componentDidUpdate')
    }
    render() {
      console.log('Count---render')
      const {count} = this.state
      return (
        <div>
          <h2>当前求和为：{count}</h2>
          <button onClick={this.add}>点击+1</button>
          <button onClick={this.death}>卸载组件</button>
          <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Count />, document.getElementById('test'))
  ```

- 父组件 render

  ![image-20210417194527023](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417194756.png)

  ![image-20210417194410528](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210417194757.png)

  ```jsx
  // 创建组件
  // A 组件 —— 父组件
  class A extends React.Component {
    state = {
      carName: '奔驰'
    }
    changeCar = () => {
      this.setState({
        carName: '奥拓'
      })
    }
    render() {
      return (
        <div>
          <div>我是A组件</div>
          <button onClick={this.changeCar}>换车</button>
          <B carName={this.state.carName}/>
        </div>
      )
    }
  }
  // B 组件 —— 子组件
  class B extends React.Component {
    // 组件将要接收新的 props
    componentWillReceiveProps(props) {
      console.log('B---componentWillReceiveProps', props)
    }
    // 组件是否能够更新
    // 控制组件更新的 “阀门”
    shouldComponentUpdate() {
      console.log('B---shouldComponentUpdate')
      // 返回值必须为 布尔值
      // true  - 阀门开启
      // false - 阀门关闭
      return true
    }
    // 组件将要更新
    componentWillUpdate() {
      console.log('B---componentWillUpdate')
    }
    // 组件更新完毕
    componentDidUpdate() {
      console.log('B---componentDidUpdate')
    }
    render() {
      console.log('B---render')
      return (
        <div>我是B组件，接收到的车是：{this.props.carName}</div>          
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<A />, document.getElementById('test'))
  ```

- 旧生命周期总结

  ```js
  /*
  旧生命周期总结：
  1. 初始化阶段：由 ReactDOM.render() 触发——初次渲染
    1) constructor()
    2) componentWillMount()
    3) render()
    4) componentDidMount() ===> 常用
      （做些初始化的事，例如：开启定时器、发送网络请求、订阅消息）
  2. 更新阶段：由组件内部 this.setState() 或父组件重新 render 触发
  	0) componentWillReceiveProps() // 父组件重新 render 触发
    1) shouldComponentUpdate() // setState() 正常制更新
    2) componentWillUpdate() // forceUpdate() 强制更新
    3) render() ===> 必须用
    4) componentDidUpdate()
  3. 卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
    1) componentWillUnmount() ===> 常用
      （做些收尾的事，例如：清除定时器、取消订阅消息
  */
  ```

#### 新旧生命周期对比

- 新旧生命周期对比

  引入不同版本的文件

  ![image-20210417202720307](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161212.png)

  ![image-20210417202750173](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161218.png)

  ![image-20210417204408302](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161224.png)

  Will 三个钩子，希望加上 UNSAFE_（除三个常用的）

  更改的原因如下：

  ![image-20210417210048356](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161230.png)

  挂载时：

  ​	componentWillMount->getDerivedStateFromProps

  更新时：

  ​	componentWillRecei->getDerivedStateFromProps

  ​	componentWillUpdate->无

  ​	无->getSnapshotBeforeUpdate

  区别：

  ​	即将废弃三个钩子 componentWillMount componentWillReceiveProps componentWillUpdate

  ​	提出两个钩子（可用的地方极其罕见）getDerivedStateFromProps getSnapshotBeforeUpdate

  ![image-20210417220509066](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161243.png)

#### 新生命周期

- getDerivedStateFromProps

  Derived 派生的

  返回状态对象（对象的键，原来的初始状态中也有），则无法更改该键对应的状态了

  ![image-20210417223312205](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161248.png)

  传入 props，返回（派生的）状态对象，则状态由其控制

  使用场景：state 的值在任何时候都取决于 props（包括更新）

  但不一定要用，且用了会导致代码冗余

  ![image-20210417223418293](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161255.png)

- getSnapshotBeforeUpdate

  Snapshot 快照

  快照值：任何值都可以作为快照值

  重提 componentDidUpdate

  preprops 先前的 props

  prestate 先前的 state

  ![image-20210417234311155](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161301.png)
  
  ```jsx
  // 创建组件
  class Count extends React.Component {
    // 构造器
    constructor(props) {
      console.log('Count---constructor')
      super(props)
      // 初始化状态
      this.state = {
        count: 0
      }
  
    }
    // +1 按钮的回调
    add = () => {
      // 获取原状态
      const {count} = this.state
      // 更新状态
      this.setState({
        count: count+1
      })
    }
    // 卸载组件按钮的回调
    death = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    // 强制更新按钮的回调
    force = () => {
      this.forceUpdate()
    }
  
  
    // 若 state 的值在任何时候都取决于 props，那么可以使用 getDerivedStateFromProps
    // 不一定要用，但用了会导致代码冗余
    static getDerivedStateFromProps(props, state) {
      console.log('Count---getDerivedStateFromProps', props, state)
      // return props
      return null
    }
    // 组件更新完毕前，来个快照
    getSnapshotBeforeUpdate() {
      console.log('Count---getSnapshotBeforeUpdate')
      // return null
      return 'tzy'
    }
  
    // 组件挂载完毕
    componentDidMount() {
      console.log('Count---componentDidMount')
    }
    // 组件将要卸载
    componentWillUnmount() {
      console.log('Count---componentWillUnmount')
    }
    // 组件是否能够更新
    // 控制组件更新的 “阀门”
    shouldComponentUpdate() {
      console.log('Count---shouldComponentUpdate')
      // 返回值必须为 布尔值
      // true  - 阀门开启
      // false - 阀门关闭
      return true
    }
    // 组件更新完毕
    componentDidUpdate(preProps, preState, snapshotValue) {
      console.log('Count---componentDidUpdate', preProps, preState, snapshotValue)
    }
    render() {
      console.log('Count---render')
      const {count} = this.state
      return (
        <div>
          <h2>当前求和为：{count}</h2>
          <button onClick={this.add}>点击+1</button>
          <button onClick={this.death}>卸载组件</button>
          <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<Count count="199"/>, document.getElementById('test'))
  ```
  
  使用场景
  
  ![image-20210418102009367](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161311.png)
  
  ```jsx
  // 创建组件
  class NewsList extends React.Component {
    state = {
      newsArr: []
    }
  
    componentDidMount() {
      setInterval(() => {
        // 获取原状态
        const {newsArr} = this.state
        // 模拟一条新闻
        const news = '新闻 ' + (newsArr.length + 1)
        // 更新状态
        this.setState({
          newsArr: [news, ...newsArr]
        })
      }, 1000)
    }
  
    getSnapshotBeforeUpdate() {
      return this.refs.list.scrollHeight
    }
    componentDidUpdate(preProps, preState, height) {
      this.refs.list.scrollTop += this.refs.list.scrollHeight - height
    }
    render() {
      return (
        <div className="list" ref="list">
          {
            this.state.newsArr.map((n, index) => {
              return <div className="news" key={index}>{n}</div>
            })
          }
        </div>
      )
    }
  }
  // 渲染组件到页面
  ReactDOM.render(<NewsList />, document.getElementById('test'))
  ```

- 总结

  ```jsx
  /*
  新生命周期总结
  1. 初始化阶段：由 ReactDOM.render() 触发——初次渲染
    1) constructor()
    2) getDerivedStateFromProps
    3) render()
    4) componentDidMount() ===> 常用
      （做些初始化的事，例如：开启定时器、发送网络请求、订阅消息）
  2. 更新阶段：由组件内部 this.setState() 或父组件重新 render 触发
    1) getDerivedStateFromProps
    2) shouldComponentUpdate()
    3) render() ===> 必须用
    4) getSnapshotBeforeUpdate
    5) componentDidUpdate
  3. 卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
    1) componentWillUnmount() ===> 常用
      （做些收尾的事，例如：清除定时器、取消订阅消息
  */
  ```

### DOM 的 diffing 算法

- 验证diffing 算法是存在的

  对比的最小粒度是——标签（对比多层）

  时间更新，input 标签未更新

  ![image-20210418110604293](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161318.png)

- key 的作用

  根据新数据生成新的虚拟DOM，之后将新虚拟DOM与旧虚拟DOM进行diff比较

  使用 index 作为 key 可能会引发的问题——对数据进行逆序添加、逆序删除等破坏顺序的操作（虚拟DOM无法复用，效率低）；结构中包含输入类DOM（会产生错误的DOM更新）

  ![image-20210418113726443](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161323.png)

  ![image-20210418113806475](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161329.png)

## react应用（基于 react 脚手架）

### 初应用

- 脚手架

  让程序员能够快速方便的编写基于某种技术的应用

  react 脚手架是借助于 webpack

  ![image-20210418123834607](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161334.png)

  

  创建一个基于 react 脚手架的模板项目——创建 react 脚手架

  项目的整体技术架构（核心）：react+webpack+es6+eslint

  工程化：全自动的构建工具（能自动进行语法检查、代码压缩，语法转换、兼容性处理）

- 初始化项目

  ![image-20210418140511653](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418161338.png)

  ```shell
  # 初始化 React 脚手架项目
  npm i -g create-react-app # 全局安装 create-react-app
  create-react-app hello-react # 切到相应目录，通过 create-react-app 创建项目
  cd hello-react # 进入项目
  npm start # 运行项目
  ```

  ![image-20210418163714090](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418163715.png)

- 文件目录-public

  整个项目，只有一个 html 页面

  SPA single page app 单页面应用

  %PUBLIC_URL% React 脚手架中的一个关键词的写法，代表 public 文件夹的路径

  应用加壳：写完 html 后，套个安卓的壳，就能生成个 .apk 应用（简单应用）

  manifest.json 应用加壳的配置文件（默认配置根本不够）

  ![image-20210418165649796](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418165651.png)

  ```html
  <!-- public/index.html -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <!-- %PUBLIC_URL% React 脚手架中的一个关键词的写法，代表 public 文件夹的路径 -->
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- 开启理想视口，用于做移动端网页的适配 -->
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- 用于配置浏览器页签 + 地址栏的颜色（仅支持安卓手机浏览器，兼容性不太好） -->
      <meta name="theme-color" content="#000000" />
      描述网站信息
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <!-- 用于指定网页添加到手机主屏幕后的图标（仅支持苹果手机） -->
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <!-- 应用加壳时的配置文件 -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>React App</title>
    </head>
    <body>
      <!-- 如果浏览器不支持 js 的运行，则展示标签中的内容 -->
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <!-- 容器 -->
      <div id="root"></div>
    </body>
  </html>
  
  ```

- 文件目录-src

  只往 root 结点中放一个组件——就是 App 组件

  index.js 中 React.StrictMode 会帮助检查 App 组件中不合理的地方（如：ref="count"）

  ![image-20210418171011298](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418171013.png)

- 流程说明

  ![image-20210418171456107](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418171457.png)

- 简单的 hello 组件

  组件暴露

  ![image-20210419123156704](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141331.png)

  区分组件与普通 js 文件：组件文件名首字母大小，或后缀使用 jsx

  ![image-20210419125730126](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141332.png)

  ![image-20210419125734955](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141333.png)

  ![image-20210419125925648](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141334.png)

- 总结文件

  ![image-20210419135144949](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141335.png)

  组件通过 文件名首字母大写，jsx 后缀 与普通的 js 文件相区分

### 样式的模块化

![image-20210419134343843](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141336.png)

### react 插件

代码片段

rcc-react class component

rfc-react function component

![image-20210419135911890](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141337.png)

### 组件化编码流程 TodoList 案例

- 步骤

  功能界面的组件化编码流程（通用）

  ![image-20210419141119304](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210419141338.png)

- TodoList 案例

  ![image-20210419215632233](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421092921.png)

- 页面迁移

  确保页面完善

  ![image-20210419214641015](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210419214641015.png)

- 组件拆分

  ![image-20210419215620653](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210419215620653.png)

	![image-20210419215625207](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210419215625207.png)

- css 文件拆分

  ![image-20210419220151717](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210419220151717.png)

- 动态初始化列表

  ![image-20210419222455794](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210419222455794.png)

- 添加 todo

  添加唯一标识 UUID

  一个库 uuid（有点大），另一个比较小的 nanoid

  ![image-20210420001434133](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420001434133.png)

- 鼠标移入效果

  ![image-20210420083903031](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420083903031.png)

- 勾选/取消勾选 todo

  状态在哪里，修改状态的方法就得在哪

  ![image-20210420090325224](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420090325224.png)

- 对 props 进行限制

  ![image-20210420091421964](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420091421964.png)

- 删除一个 todo

  ![image-20210420093413688](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420093413688.png)

- 实现底部功能

  defaultChecked 只在第一次起作用

  checked 要配合 onChange 使用

  初步完成

  ![image-20210420125618189](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420125618189.png)

  Item 组件导致的 bug

  ![image-20210420125624643](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420125624643.png)

  全选/全不选

  ![image-20210420125629459](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420125629459.png)

  清除所有已经完成的任务

  ![image-20210420130305477](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420130305477.png)

- 总结

  ![image-20210420130824101](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420130824101.png)

## react ajax

### React 脚手架配置代理

- 简介

  ![image-20210420161848449](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420161848449.png)

- 服务器

  用 node + express 搭建的服务器

  server1.js 

  ![image-20210420163216396](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420163216396.png)

- App.js

  跨域了 - 同源请求的限制（能发送，数据回不来）

  ![image-20210420163911564](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420163911564.png)

  ajax 引擎，允许跨域请求发送出去，但响应回来时，被拦截

  代理-中间人：和发送方同源，但中间人没有 ajax引擎，转发请求，同源策略不限制它

  在 React 中开启代理

  3000 没有的，才转发给 5000

- 配置一种代理

  ![image-20210420165624151](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420165624151.png)

  ![image-20210420165840775](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420165840775.png)

  上述设置代理的方式，只能配置一个代理

  如果 3000 下没有，则通过代理转发请求

- 配置多种代理

  ![image-20210420171746331](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420171746331.png)

  ![image-20210420172215029](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420172215029.png)

  上面的字段写错的，写的 changeDrigin，应该是 changeOrigin（然后就相当于设置的 changeOrigin: false）

  如果不想走代理，请求路径中不写 api1 就行

  字段说明

  ![image-20210420190939578](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420190939578.png)

- 代理配置总结

  ![image-20210420191246696](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420191246696.png)

### github 案例

- 页面拆分

  成型的第三方样式库，最好放在 public 中

  head_portrait

  ![image-20210420200655776](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420200655776.png)

  ![image-20210420201410601](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420201410601.png)

  ![image-20210420201415808](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420201415808.png)

- 解构赋值

  ![image-20210420203038336](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420203038336.png)

- 后端数据

  ![image-20210420222943617](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420222943617.png)

  ![image-20210420222950587](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420222950587.png)

  ![image-20210420230245248](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E7%BC%96%E7%A0%81/image-20210420230245248.png)

- 展示数据

  是否是完整的结果：false-不完整（结果太多）

  total_count：总共的数据量

  avatar_url：用户头像地址 avatar-神灵、不是具体的人，但是人的化身

  login：用户名

  html_url：个人主页

  ![image-20210421162002102](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421175013.png)

  

- 其他效果

  List 组件，除展示用户列表外，还有展示初次渲染的欢迎词，搜索过程中的 loading，以及出错的错误信息

  ![image-20210421164807664](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421175014.png)

  ![image-20210421164944509](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421175015.png)

### 兄弟组件间的通信

- 消息订阅-发布机制

  有很多库实现了该机制，我们选用 pubsub-js

  subscribe(订阅的消息名, 回调函数)

  如果有人发布了消息，订阅者就收到了，底层就会调用回调函数，回调函数传了两个参数，一个是消息名，一个是发布者发布的数据

  在接收数据的组件里去订阅消息

  订阅者订阅消息，都会有一个返回值，可以通过该值取消订阅

  publish(发布的消息名，携带的数据)

  发布者

  ![image-20210421172940039](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421175016.png)

  ![image-20210421174946782](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421175017.png)

### fetch 发送请求

```js
const xhr = new XMLHttpRequest()
jQuery 发送网络请求 - API 比 xhr 好用，但会形成回调地狱
axios Promise 风格的，没有回调地狱
前端中，jQuery axios 都是对 xhr 的封装（第三方）

window 上内置的 fetch 不用 xhr
不是第三方库，Promise 风格的，
用的不多，也不这么好用
```

[fetch 在 github 上的官方文档](https://github.github.io/fetch/)

[传统 Ajax 已死，Fetch 永生](https://segmentfault.com/a/1190000003810652)

联系上服务器和服务器能不能响应是两码事

![image-20210421202025469](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421230057.png)

response.json()

返回的 Promise 对象，不是处于 pending 状态，是指，如果成功，则返回成功的数据，状态为成功，如果失败，则返回失败原因，状态为失败

![image-20210421212556976](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421230058.png)

优化版本

![image-20210421223925049](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421230059.png)

fetch 使用的不多，因为有些老版本的浏览器不支持 fetch

fetch 还没有时，ajax 请求只有 XHR（现在更改了）

![image-20210421224114928](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421230100.png)

- 总结

  ![image-20210421225935265](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210421230101.png)

## React 路由

### SPA

- 多页面

  多个页面之间进行切换，靠多个页面实现页面的跳转
  
  ![image-20210421232208896](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134117.png)
  
- SPA

  单页 Web 应用，SPA，single page web application

  整个应用只有一个完整的页面

  点击页面中的链接**不会刷新页面**，只会做**页面的局部更新**（靠组件实现页面的局部更新）

  数据都需要通过 ajax 请求获取，并在前端异步展现

### 路由理解

- 理解

  单页面，怎么展示不同组件的内容？

  点击导航区-不会引起页面的跳转（路由链接）-路由中，监测路径变化，然后展示不同组件（一个路由就是一种映射关系 key: value，每个路径对应一个组件，path: component）

  有的路由方案中，value 为一个 function

  ![image-20210422100639298](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134118.png)

- 路由分类

  + 后端路由

    value 是一个 function，用来处理客户端提交的请求

    注册路由：router.get(path, function(req, res))

    工作过程：当 node 接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据

    ![image-20210422100631198](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134119.png)

  + 前端路由

    浏览器端路由，value 是一个 component，用于展示页面内容

    注册路由：<Route path="/test" component={Test}>

    工作过程：当浏览器的 path 变为 /test 时，当前路由组件就会变为 Test 组件

    工作原理：history 历史记录

    BOM(window-BOM document-DOM) 上有个 history（但原生的不太好用）

    一般借助 history.js 库

    往浏览器的历史记录中，推进去一条数据 path

    禁止 a 标签跳转

    就监测到了，之后匹配组件就行

    ![image-20210422102244835](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134120.png)

    历史记录是一个栈的结构

    push 入栈

    replace 替换栈顶元素

    history 有两种工作模式，一是 H5 推出的 history，一是 hash 值（锚点，锚点跳转不会引起页面的刷新，但能留下历史记录）——多个#，不太好看，但兼容性好

    ![image-20210422104149237](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134121.png)

### react-router-dom

- 简介

  react-router 有三种：针对 web 网页的，针对原生的 native，任何地方的 any，我们学习 react-router-dom（前端） 针对 web 网页的

  路由 Route - 路由器上的插口

  路由器 Router - 管理路由的

- react-router-dom

  react 的一个插件库，专门用来实现一个 SPA 应用，基于 react 的项目基本都会用的此库

  ![image-20210422110624482](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134122.png)

  使用路由的套路：导航区，展示区

  点击导航区里的导航，引起 history 里的路径变化，被前端路由器监测到，然后展示相应组件

  Link 标签内，to 属性直接写 /home 不带小数点的，一般用小写，因为可能不识别大写

  Router 分为 BrowserRouter、HashRouter

  实现点击路由链接，路径的切换

  ![image-20210422124453069](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134123.png)

  两个 BrowserRouter 之间没有进行信息沟通

  ![image-20210422125857355](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422134124.png)

- 总结

  ![image-20210422134231217](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203147.png)

- HashRouter

  \# 后面的是 hash 值（锚点值），都不会作为资源发送给服务器的，都是看作前台资源的

  ![image-20210422144255842](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203148.png)

### 路由组件与一般组件

- 简介

  路由组件：靠路由进行匹配，匹配上了，就展示（按照标准，应该放在 pages 文件夹下）

  最大的区别：路由组件会收到路由器传递的一些参数，一般组件未传就收不到

  ![image-20210422150131199](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203149.png)

  ![image-20210422150139970](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203150.png)

### NavLink

- NavLink

  ![image-20210422194152692](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203151.png)

- 封装 NavLink

  把标签名作为标签体写出，而不是标签属性

  怎么接收标签体内容？——标签体内容是一个特殊的标签属性

  ![image-20210422201804741](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203152.png)

  ![image-20210422201846923](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203153.png)

### switch

- switch

  Home Test 路由组件的内容都展示了，证明有继续向下匹配，如果路由组件特别多，就存在一个效率问题

  匹配上一个就不再向下匹配——switch

  ![image-20210422203056684](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203154.png)

  ![image-20210422203115918](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422203155.png)

### 样式丢失问题

- 样式丢失问题

  新需求：在所有路径前面加上 /atguigu 前缀

  localhost:3000 脚手架内置的服务器（webpack 的 devServer），React 脚手架还通过 webpack 配置，将 public 配置为 3000 服务器的根路径

  如果请求的资源不存在，就会把 public/index.html 给你

  + 样式丢失现象

    ![image-20210422205114055](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422210116.png)

  + 资源请求路径

    ![image-20210422205408805](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210422210117.png)

  + 问题原因分析

    ![image-20210422210407122](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001838.png)

  + 解决办法

    什么时候样式会丢失？——为多级路由时，点击路由组件后，刷新，bootstrap 样式就会丢

    丢失原因就是：认为多级路径中的 atguigu 也是 3000 中的一个路径

    ./ 相对路径

    / 根目录下的（一般用此方法）

    %PUBLIC_URL% 固定为 public 下的文件

    看到 #，后面的全部不带给后端，然后相对路径就是相对 3000 的了

    ![image-20210422211722996](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001839.png)

    ![image-20210422211739403](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001840.png)

    %PUBLIC_URL% 仅适用于 React 项目

### 路由的模糊匹配与严格匹配

- 路由的模糊匹配与严格匹配

  yarn 和 npm 包管理器，不要混着用，如果用两种包管理器混着下东西，容易造成包的丢失

  ![image-20210422213421895](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001841.png)

  模糊匹配

  /home/a/b 要跳转到

  home a b

  /home 给出来的

  home 从头开始看，顺序不能乱

  严格匹配

  要一模一样

  严格匹配能不开就不开

  ![image-20210423000729060](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001842.png)

  ![image-20210423000756955](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001843.png)

### Redirect 重定向

- Redirect 重定向

  ![image-20210423001601536](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001844.png)

  ![image-20210423001615992](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423001845.png)

### 嵌套路由

- 嵌套路由

  二级路由
  
  ![image-20210423163941654](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423172400.png)
  
  路由的匹配：都是从最开始注册到最后注册，这个流程走下去的
  
  ![image-20210423170544081](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423172401.png)
  
  ![image-20210423170816778](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423172402.png)
  
  ![image-20210423172347503](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210423172403.png)
  
  ![image-20210423233015701](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210427152432.png)

### 向路由组件传递参数

- 传递 params 参数

  ![image-20210424005335378](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210427152433.png)