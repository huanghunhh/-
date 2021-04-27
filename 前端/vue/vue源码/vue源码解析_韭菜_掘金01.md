# Vue 源码解析

[来，送你一本免费的 Vue 源码解析！](https://juejin.cn/post/6844903986886098951)

[深入剖析 Vue 源码](https://book.penblog.cn/)

## 丰富的选项合并策略

### 大致结构

从选项配置入手，是从零开始学习源码最容易的思路

但为了分析的完整性，有必要了解一下 `vue` 在脚本引入之后分别做了什么

```js
/**
 * Vue 构造器
 * 遵从 UMD 规范
 * Vue 本质是一个构造器，且保证了只能通过 new 实例的形式去调用，而不能直接通过函数的形式使用
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory())

  // if (typeof exports === 'object' && typeof module !== undefined) {
  //   // 检查 CommonJS 是否可用
  //   module.exports = factory(require('jquery'))
  // } else if (typeof define === 'function' && define.amd) {
  //   // 检查 AMD 是否可用
  //    // 如果环境中有define函数，并且define函数具备amd属性，则可以判断当前环境满足AMD规范
  //   define('toggler', ['jquery', factory])
  // } else {
  //   // 两种都不能用，把模块添加到 JS 的全局命名空间中
  //   global.toggler = factory(global, factory)
  // }
})(this, function () {
  'use strict'

  // Vue 构造函数
  function Vue(options) {
    // 保证无法直接通过 Vue() 去调用，只能通过 new 的方式去创建实例
    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options)
  }
  return Vue
})


/**
 * 定义原型属性方法
 * 定义 Vue 原型上的 init 方法（内部方法） initMixin
 * 定义原型上跟数据相关的属性方法 stateMixin
 * 定义原型上跟事件相关的属性方法 eventsMixin
 * 定义原型上跟生命周期相关的方法 lifecycleMixin
 * 定义渲染相关的函数 renderMixin
 */
// 定义 Vue 原型上的 init 方法（内部方法）
function initMixin(Vue) {
  // 定义了内部在实例化 Vue 时会执行的初始化代码，是一个内部使用的方法
  Vue.prototype._init = function (options) {

  }
}

// 定义原型上跟数据相关的属性方法
function stateMixin(Vue) {
  // 例如代理数据的访问
  // 可以在实例上通过 this.$data 和 this.$props 访问到 data props 的值
  // 也定义了使用频率较高的 this.$set this.$delete
  let dataDef = {}
  dataDef.get = function () {
    return this._data
  }

  let propsDef = {}
  propsDef.get = function () {
    return this._props
  }

  {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this)
    }
    propsDef.set = function () {
      warn("$props is readonly.", this)
    }
  }

  // 代理了 _data _props 的访问
  Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)

  // $set $del
  Vue.prototype.$set = set
  Vue.prototype.$delete = del

  // $watch
  Vue.prototype.$watch = function (expOrFn, cb, options) {

  }
}

// 定义原型上跟事件相关的属性方法
function eventsMixin(Vue) {
  // vm.$on vm.$once vm.$off vm.$emit
  // 自定义事件监听 $on
  Vue.prototype.$on = function (event, fn) {
    
  }
  // 自定义事件监听，只触发一次 $once
  Vue.prototype.$once = function (event, fn) {
    
  }
  // 自定义事件解绑 $off
  Vue.prototype.$off = function (event, fn) {
    
  }
  // 自定义事件通知 $emit
  Vue.prototype.$emit = function (event, fn) {
    
  }
}

// 定义原型上跟生命周期相关的方法
function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    
  }
  Vue.prototype.$forceUpdate = function () {

  }
  Vue.prototype.$destroy = function () {

  }
}

// 定义渲染相关的函数
function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {

  }

  // _render 函数，后面是重点
  Vue.prototype._render = function () {

  }
}


/**
 * 定义静态属性方法 - 全局 api 方法
 * 为源码里的 config 配置做一层代理，可以通过 Vue.config 拿到默认的配置，并且可以修改它的属性值，具体哪些可以配置修改，可以先参照官方文档。
 * 定义内部使用的工具方法，例如警告提示，对象合并等。
 * 定义 set,delet,nextTick 方法，本质上原型上也有这些方法的定义。
 * 对 Vue.components,Vue.directive,Vue.filter 的定义，这些是默认的资源选项，后续会重点分析。
 * 定义 Vue.use() 方法
 */
function initGlobalAPI(Vue) {
  // config
  let configDef = {}
  configDef.get = function () {
    return config
  }

  {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.')
    }
  }

  // 通过 Vue.config 拿到配置信息
  Object.defineProperty(Vue, 'config', configDef)

  // options 里的 __base 属性存储 Vue 构造器
  Vue.options._base = Vue
  extend(Vue.options.components, builtInComponents)


  // 工具类不作为公共暴露的 API 使用
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive,
  }

  // Vue.set = Vue.prototype.$set
  Vue.set = set
  // Vue.delete = Vue.prototype.$delete
  Vue.delete = del
  // Vue.nextTick = Vue.prototype.$nextTick
  Vue.nextTick = nextTick

  // explicit observable API
  Vue.observable = function (obj) {
    observe(obj)
    return obj
  }

  // Vue.components Vue.directive Vue.filter
  initAssetRegisters(Vue)

  // Vue.use()
  initUse(Vue)
  // Vue.mixin()
  initMixin(Vue)
  // 定义 extend 扩展子类构造器的方法
  // Vue.extend()
  initExtend(Vue)
}

```

### 构造器的默认选项

```js
/**
 * 实例化 Vue 时，会将选项对象传递给构造器进行初始化
 * 这个选项对象描述了我们想要的行为
 * 以 data 定义实例中的响应式数据
 * 以 computed 描述实例中的计算属性
 * 以 components 来进行组件注册
 * 甚至是定义各个阶段执行的生命周期钩子等
 * 
 * Vue 内部本身也会自带一些默认选项，这些选项和用户自定义的选项在后续一起参与到 Vue 实例的初始化中
 * 
 */

/**
 * 在 initGlobalAPI 方法中有几行默认选项的定义。
 * Vue 内部的默认选项会保留在静态的 options 属性上，
 * 从源码看 Vue 自身有四个默认配置选项，分别是 component，directive， filter 以及返回自身构造器的_base。
 */
let ASSET_TYPES = [
  'component', // 需要注册的组件选项，Vue 提供了 keepAlive transition transitionGroup
  'directive', // 需要注册的指令，Vue 提供了 v-model v-show 内置指令
  'filter', // 需要注册的过滤器，没有默认值
]

// 原型上创建了一个指向为空对象的 options 属性
Vue.options = Object.create(null)
ASSET_TYPES.forEach(type => {
  Vue.options[type + 's'] = Object.create(null)
})
Vue.options._base = Vue

// Vue 内置组件
let builtInComponents = {
  KeepAlive: KeepAlive,
}

let platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup,
}

// Vue 内置指令
let platformDirectives = {
  model: directive,
  show: show,
}

// extend 方法实现了对象的合并，如果属性相同，则用新的属性值覆盖旧值
function extend(to, _from) {
  for (const key in _from) {
    if (Object.hasOwnProperty.call(_from, key)) {
      to[key] = _from[key];      
    }
  }
  return to
}

extend(Vue.options.components, builtInComponents)
extend(Vue.options.components, platformComponents) // 扩展内置组件
extend(Vue.options.directives, platformDirectives) // 扩展内置指令

// 结，作为构造器，vue 默认的资源选项配置如下：
Vue.options = {
  components: {
    KeepAlive: {},
    Transition: {},
    TransitionGroup: {},
  },
  directives: {
    model: {
      inserted() {},
      componentUpdated() {},
    },
    show: {
      bind() {},
      update() {},
      unbind() {},
    },
  },
  filters: {},
  _base
}
```

### 选项校验

实例化 Vue 时，其核心操作便是执行 _init 方法进行初始化

初始化操作会经过选项合并配置，初始化生命周期，初始化事件中心，乃至构建数据响应式系统等

关键的第一步就是对选项的合并，合并后的选项会挂载到实例的 `$options` 属性中，可以在实例中通过 `this.$options` 访问最终的选项

```js
// 定义 Vue 原型上的 init 方法（内部方法）
function initMixin(Vue) {
  // 定义了内部在实例化 Vue 时会执行的初始化代码，是一个内部使用的方法
  Vue.prototype._init = function (options) {
    let vm = this
    // a uid
    // 记录实例化多少个 vue 对象
    vm._uid = uid$3++

    // 选项合并，将合并后的选项赋值给实例的 $options 属性
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor), // 返回 Vue 构造函数自身的配置项
      options || {}, 
      vm)
  }
}

// 通过 mergeOptions 函数，将用户自身传递的 options 选项和 Vue 构造函数自身的选项配置合并
function mergeOptions(parent, child, vm) {
  {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  // props inject directives 的检验和规范化
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // 针对 extends 扩展的子类构造器
  if (!child._base) {
    // extends
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    // mixins
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < 1; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  let options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField(key) {
    // 拿到各个选择指定的选项配置，如果没有则用默认的配置
    let strat = strats[key] || defaultStrat
    // 执行各自的合并策略二
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

// components 规范校验
// 比如组件名不能用 html 保留的标签 (如：img,p), 也不能包含非法的字符等。这些都会在 validateComponentName 函数做校验
function checkComponents(options) {
  // 遍历 components 对象，对每个属性值校验
  for (const key in options.components) {
    validateComponentName(key)
  }
}

function validateComponentName(name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    // 正则判断检测是否为非法的标签，例如数字开头
    warn(`Invalid component name: "${name}". Component names should conform to valid custom element name in html5 specification.`)
  }
  // 不能使用 Vue 自定义的组件名，如 slot component，不能使用 html 的保留标签，如 h1 svg 等
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(`Do not use built-in or reserved HTML elements as component id: ${name}`)
  }
}

// props 规范检验
/*
props 选项的书写形式有两种
1. 数组形式 
{
  props: ['a', 'b', 'c']
}
2. 带校验规则的对象形式 
{
  props: {
    a: {
      type: 'String', 
      default: 'prop校验'
    }
  }
}
这两种形式最终都会转换成对象的形式
*/
function normalizeProps(options, vm) {
  let props = options.props
  if (!props) {
    return
  }
  let res = {}
  let i, val, name
  if (Array.isArray(props)) {
    // 数组形式的校验
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'String') {
        name = camelize(val)
        // 默认将数组形式的 props 转换为对象形式
        res[name] = {
          type: null
        }
      } else {
        // 规则：保证是字符串
        warn(`props must be strings when using array syntax.`)
      }
    }
  } else if (isPlainObject(props)) {
    // 对象形式的校验
    for (let key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val) ? val : {type: val}
    }
  } else {
    // 非数组，非对象，则判定 props 选项传递非法
    warn(`Invalid value for option "props": expected an Array or an Object, but got "${toRawType(props)}.${vm}`)
  }
  options.props = res   
}

// 函数缓存 camelize 
/*
将每次执行函数后的值进行缓存，当再次执行的时候直接调用缓存的数据而不是重复执行函数，以此提高前端性能，这是典型的用空间换时间的优化，也是经典的偏函数应用。
*/
function cached(fn) {
  let cache = Object.create(null) // 创建空对象作为缓存对象
  return (function cachedFn(str) {
    let hit = cache[str]
    return hit || (cache[str] = fn(str)) // 每次执行时，缓存对象有值则不需要执行函数方法，没有则执行并缓存起来
  })
}

let camelizeRE = /-(\w)/g

// 缓存会保存每次进行驼峰转换的结果
let camelize = cached(function (str) {
  // 将诸如 'a-b' 的写法统一处理成驼峰写法 'aB'
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : ''
  })
})

// inject 规范校验
/*
provide/inject 这对组合在我们日常开发中可能使用得比较少，当我们需要在父组件中提供数据或者方法给后代组件使用时可以用到 provide/inject, 注意关键是后代，而不单纯指子代，这是有别于 props 的使用场景。官方把它被称为依赖注入，依赖注入使得组件后代都能访问到父代注入的数据 / 方法，且后代不需要知道数据的来源。重要的一点，依赖提供的数据是非响应式的。
*/
/*
基本使用
// 父组件
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}
// 后代组件
var Child = {
  // 数组写法
  inject: ['foo'],
  // 对象写法
  inject: {
    foo: {
      from: 'foo',
      default: 'bardefault'
    }
  }
}
*/
function normalizeInject(options, vm) {
  let inject = options.inject;
  if (!inject) { 
    return 
  }
  let normalized = options.inject = {};
  //数组的形式
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      // from: 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)
      normalized[inject[i]] = {from: inject[i]};
    }
  } else if (isPlainObject(inject)) {
    // 对象的处理
    for (let key in inject) {
      let val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    // 非法规则
    warn(`Invalid value for option "inject": expected an Array or an Object, but got ${toRawType(inject)}.${vm}`);
  }
}

// directive 规范校验
/*
指令选项的用法：Vue 允许我们自定义指令，并且它提供了五个钩子函数 bind, inserted, update, componentUpdated, unbind, 具体的用法可以参考[官方 - 自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)文档，而除了可以以对象的形式去定义钩子函数外，官方还提供了一种函数的简写，例如：
{
  directives: {
    'color-swatch': function(el, binding) {
        el.style.backgroundColor = binding.value
    }
  }
}
函数的写法会在 bind,update 钩子中触发相同的行为，并且不关心其他钩子。这个行为就是定义的函数。因此在对 directives 进行规范化时，针对函数的写法会将行为赋予 bind,update 钩子。
*/
function normalizeDirectives(options) {
  let dirs = options.directives
  if (dirs) {
    for (let key in dirs) {
      let def = dirs[key]
      // 函数简写同样会转换成对象的形式
      if (typeof def === 'function') {
        dirs[key] = {bind: def, update: def}
      }
    }
  }
}
```

### 子类构造器

按照前面的知识，`Vue` 内部提供了四个默认选项，关键的三个是 `components,directives,filter`。那么当我们传递一个选项配置到 `Vue` 进行初始化，所需要合并的选项好像也仅仅是那关键的三个默认选项而已，那么源码中大篇幅做的选项合并策略又是针对什么场景呢？答案就是这个子类构造器。

**`Vue` 提供了一个 `Vue.extend` 的静态方法，它是基于基础的 `Vue` 构造器创建一个 “子类”，而这个子类所传递的选项配置会和父类的选项配置进行合并。这是选项合并场景的由来。**

```js
/**
 * 创建了一个 Child 的子类，它继承于父类 Parent, 最终将子类挂载到#app 元素上。最终获取的 data 便是选项合并后的结果。
 */

let Parent = Vue.extend({
  data() {
    test: '父类',
    test1: '父类1',
  }
})

let Child = Parent.extend({
  data() {
    test: '子类',
    test2: '子类1'
  }
})

let vm = new Child().$mount('#app')
console.log(vm.$data)
/*
打印结果
{
  test: '子类',
  test1: '父类1',
  test2: '子类1',
}
*/

// Vue.extend 的实现思路很清晰，创建了一个 Sub 的类，这个类的原型指向了父类，并且子类的 options 会和父类的 options 进行合并，mergeOptions 的其他细节接下来会重点分析。
Vue.extend = function (extendOptions) {
  extendOptions = extendOptions || {}
  let Super = this
  let name = extendOptions.name || Super.options.name
  if (name) {
    validateComponentName(name) // 校验子类的名称是否符合规范
  }

  // 创建子类构造器
  let Sub = function VueComponent(options) {
    this._init(options)
  }
  Sub.prototype = Object.create(Super.prototype) // 子类继承于父类
  Super.prototype.constructor = Sub
  Sub.cid = cid++

  // 子类和父类构造器的配置选项进行合并
  Sub.options = mergeOptions(Super.options, extendOptions)

  return Sub // 返回子类构造函数
}


```

### 合并策略

我们可以用丰富的选项去定义实例的行为，大致可以分为以下几类：

1. 用 `data,props,computed` 等选项定义实例数据
2. 用 `mounted, created, destoryed` 等定义生命周期函数
3. 用 `components` 注册组件
4. 用 `methods` 选项定义实例方法

当然还有诸如 `watch,inject,directives,filter` 等选项，总而言之，`Vue` 提供的配置项是丰富的。除此之外，我们也可以使用没有默认配置策略的选项，典型的例子是状态管理 `Vuex` 和配套路由 `vue-router` 的引入：

```js
new Vue({
  store, // vuex
  router// vue-router
})
```

不管是插件也好，还是用户自定义的选项，他们的合并策略会遵循思路的第二点：**子配置存在则取子配置，不存在则取父配置，即用子去覆盖父。。**它的描述在 `defaultStrat` 中。

```js
/**
 * 合并策略之所以是难点，其中一个是合并选项类型繁多，合并规则随着选项的不同也呈现差异。概括起来思路主要是以下两点：
 * Vue 针对每个规定的选项都有定义好的合并策略，例如 data,component,mounted 等。如果合并的子父配置都具有相同的选项，则只需要按照规定好的策略进行选项合并即可。
由于 Vue 传递的选项是开放式的，所有也存在传递的选项没有自定义选项的情况，这时候由于选项不存在默认的合并策略，所以处理的原则是有子类配置选项则默认使用子类配置选项，没有则选择父类配置选项。
 */

// 1.3选项校验.js 中的代码
// 通过 mergeOptions 函数，将用户自身传递的 options 选项和 Vue 构造函数自身的选项配置合并
function mergeOptions(parent, child, vm) {
  /* 规范检验
  {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  // props inject directives 的检验和规范化
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // 针对 extends 扩展的子类构造器
  if (!child._base) {
    // extends
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    // mixins
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < 1; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }
  */

  let options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  /*
  两个 for 循环规定了合并的顺序，以自定义选项策略优先，如果没有才会使用默认策略。而 strats 下每个 key 对应的便是每个特殊选项的合并策略
  */

  function mergeField(key) {
    // 拿到各个选择指定的选项配置，如果没有则用默认的配置
    // strats 策略
    let strat = strats[key] || defaultStrat
    // 执行各自的合并策略二
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

// 不管是插件也好，还是用户自定义的选项，他们的合并策略会遵循思路的第二点：子配置存在则取子配置，不存在则取父配置，即用子去覆盖父。。它的描述在 defaultStrat 中。
// 用户自定义选项策略
let defaultStrat = function (parentVal, childVal) {
  // 子不存在则用父，子存在则用子配置
  return childVal === undefined
    ? parentVal
    : childVal
}

/**
 * 接下来会进入某些具体的合并策略的分析，大致分为五类：
 * 1. 常规选项合并
 * 2. 自带资源选项合并
 * 3. 生命周期钩子合并
 * 4. watch 选项合并
 * 5. props,methods, inject, computed 类似选项合并
 */

// 常规选项合并
/*
el 的合并
el 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标，因此它只在创建 Vue 实例才存在，在子类或者子组件中无法定义 el 选项，因此 el 的合并策略是在保证选项只存在于根的 Vue 实例的情形下使用默认策略进行合并。
*/
strats.el = function (parent, child, vm, key) {
  if (!vm) {
    // 只允许 vue 实例才拥有 el 属性，其他子类构造器不允许有 el 属性
    warn(`option "${key}" can only be used during instance creation with the 'new' keyword.`)
  }
  // 默认策略
  return defaultStart(parent, child)
}

/*
data 合并
常规选项的重点部分是在于 data 的合并，读完这部分源码，可能可以解开你心中的一个疑惑，为什么 data 在 vue 创建实例时传递的是一个对象，而在组件内部定义时只能传递一个函数。
*/
strats.data = function (parentVal, childVal, vm) {
  // vm 代表是否为 Vue 创建的实例，否则是子父类的关系
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(`The "data" option should be a function that returns a per-instance value in component definitions.${vm}`)
      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }
  return mergeDataOrFn(parentVal, childVal, vm) // vue 实例需要传递 vm 作为函数的第三个参数
}

// data 策略最终调用的 mergeDataOrFn 方法，区别在于当前 vm 是否是实例，或者是单纯的子父类的关系。
// 如果是子父类的关系，需要对 data 选项进行规范校验，保证它的类型是一个函数而不是对象。
function mergeDataOrFn(parentVal, childVal, vm) {  
  if (!vm) { // 子父类
    if (!childVal) { // 子类不存在 data 选项，则合并结果为父类 data 选项
      return parentVal
    }
    if (!parentVal) { // 父类不存在 data 选项，则合并结果为子类 data 选项
      return childVal
    }

    return function mergeDataFn() { // data 选项在父类和子类同时存在的情况下，返回的是一个函数
      // 子类实例和父类实例，分别将子类和父类实例中 data 函数执行后返回的对象传递给 mergeData 函数做数据合并
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )

    }
  } else { // Vue 实例
    // vue 构造函数实例对象
    return function mergedInstanceDataFn() {
      let instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal
      let defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal

      if (instanceData) {
        // 当实例中传递 data 选项时，将实例的 data 对象和 vm 构造函数上的 data 属性选项合并
        return mergeData(instanceData, defaultData)
      } else {
        // 当实例中不传递 data 时，默认返回 vm 构造函数上的 data 属性选项
        return defaultData
      }
    }

  }
}
/*
从源码的实现看，data 的合并不是简单的将两个数据对象进行合并，而是直接返回一个 mergedDataFn 或者 mergedInstanceDataFn 函数，而真正合并的时机是在后续初始化数据响应式系统的环节进行的，初始化数据响应式系统的第一步就是拿到合并后的数据，也就是执行 mergeData 逻辑。 (关于响应式系统的构建请移步后面的章节)
*/


function mergeData(to, from) {
  if (!from) {
    return to
  }

  let key, toVal, fromVal
  // Reflect.ownKeys 可以拿到 Symbol 属性
  let keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from)

  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    toVal = to[key]
    fromVal = from[key]
    if (!hasOwn(to, key)) {
      // 子数据父没有，则将新增的数据加入响应式系统中
      set(to, key, fromVal)
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      // 处理深层对象，当合并的数据为多层嵌套对象时，需要递归调用 mergeData 进行比较合并
      mergeData(toVal, fromVal)
    }
  }
  return to
}
/*
mergeData 方法的两个参数是父 data 选项和子 data 选项的结果，也就是两个 data 对象，从源码上看数据合并的原则是，将父类的数据整合到子类的数据选项中， 如若父类数据和子类数据冲突时，保留子类数据。如果对象有深层嵌套，则需要递归调用 mergeData 进行数据合并。
*/

/*
最后回过头来思考一个问题，为什么 Vue 组件的 data 是一个函数，而不是一个对象呢？ 我觉得可以这样解释：组件设计的目的是为了复用，每次通过函数创建相当于在一个独立的内存空间中生成一个 data 的副本，这样每个组件之间的数据不会互相影响。
*/


// 自带资源选项合并
/**
 * 1.2构造器的默认选项
 * 在 initGlobalAPI 方法中有几行默认选项的定义。
 * Vue 内部的默认选项会保留在静态的 options 属性上，
 * 从源码看 Vue 自身有四个默认配置选项，分别是 component，directive， filter 以及返回自身构造器的_base。
 */
 let ASSET_TYPES = [
  'component', // 需要注册的组件选项，Vue 提供了 keepAlive transition transitionGroup
  'directive', // 需要注册的指令，Vue 提供了 v-model v-show 内置指令
  'filter', // 需要注册的过滤器，没有默认值
]

// 定义资源合并的策略
ASSET_TYPES.forEach(type => {
  strats[type + 's'] = mergeAssets // 定义默认策略
})

// 资源选项自定义合并策略
// 合并逻辑：首先会创建一个原型指向父类资源选项的空对象，再将子类选项赋值给空对象。
function mergeAssets(parentVal, childVal, vm, key) {
  let res = Object.create(parentVal || null) // 创建一个空对象，其原型指向父类的资源选项
  if (childVal) {
    assertObjectType(key, childVal, vm) // components filters directives 选项必须为对象
    return extend(res, childVal) // 子选项赋值给空对象
  } else {
    return res
  }
}

/*
// 合并后的结果
let vm = new Vue({
  components: {
    componentA: {}
  },
  directives: {
    'v-boom': {}
  }
})

console.log(vm.$options.components)
// 根实例的选项和资源默认选项合并后的结果

{
  components: {
    componentA: {},
    __proto__: {
      KeepAlive: {},
      Transition: {},
      TransitionGroup: {},
    }
  },
  directives: {
    'v-boom': {},
    __proto__: {
      'v-show': {},
      'v-model': {}
    }
  }
}
简单总结一下，对于 directives、filters 以及 components 等资源选项，父类选项将以原型链的形式被处理。子类必须通过原型链才能查找并使用内置组件和内置指令。
*/

// 生命周期钩子函数的合并
/*
在学习 Vue 时，有一个重要的思想，生命周期。它是我们使用 Vue 高效开发组件的基础，我们可以在组件实例的不同阶段去定义需要执行的函数，让组件的功能更加丰富。在介绍生命周期钩子函数的选项合并前，我们有必要复习以下官方的生命周期图。
子父组件的生命周期钩子函数是遵循什么样的规则合并。
*/
let LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
]

LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook; // 对生命周期钩子选项的合并都执行 mergeHook 策略
})

/*
mergeHook 是生命周期钩子合并的策略，简单的对代码进行总结，钩子函数的合并原则是：

如果子类和父类都拥有相同钩子选项，则将子类选项和父类选项合并。
如果父类不存在钩子选项，子类存在时，则以数组形式返回子类钩子选项。
当子类不存在钩子选项时，则以父类选项返回。
子父合并时，是将子类选项放在数组的末尾，这样在执行钩子时，永远是父类选项优先于子类选项执行。
*/
// 生命周期钩子选项合并策略
function mergeHook(parentVal, childVal) {
  let res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal
  return res ? dedupeHooks(res) : res
}
// 防止多个组件实例钩子选项相互影响
function dedupeHooks(hooks) {
  let res = []
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i])
    }
  }
  return res
}

/*
// 合并例子
let Parent = Vue.extend({
  mounted() {
    console.log('parent')
  }
})
let Child = Parent.extend({
  mounted() {
    console.log('child')
  }
})
let vm = new Child().$mount('#app')

// 输出结果：
parent
child
//简单总结一下：对于生命周期钩子选项，子类和父类相同的选项将合并成数组，这样在执行子类钩子函数时，父类钩子选项也会执行，并且父会优先于子执行。
*/

// watch 选项合并
/*
在使用 Vue 进行开发时，我们有时需要自定义侦听器来响应数据的变化，当需要在数据变化时执行异步或者开销较大的操作时，watch 往往是高效的。对于 watch 选项的合并处理，它类似于生命周期钩子，只要父选项有相同的观测字段，则和子的选项合并为数组，在监测字段改变时同时执行父类选项的监听代码。处理方式和生命钩子选项的区别在于，生命周期钩子选项必须是函数，而 watch 选项最终在合并的数组中可以是包含选项的对象，也可以是对应的回调函数，或者方法名。
*/
strats.watch = function (parentVal, childVal, vm, key) {
  // 火狐浏览器在 Object 的原型上拥有 watch 方法，这里对这一现象做了兼容
  // let nativeWatch = ({}).watch
  if (parentVal === nativeWatch) {
    parentVal = undefined
  }
  if (childVal === nativeWatch) {
    childVal = undefined
  }

  // 没有子，则默认用父选项
  if (!childVal) {
    return Object.create(parentVal || null)
  }

  {
    // 保证 watch 选项是一个对象
    assertObjectType(key, childVal, vm)
  }

  // 没有父则直接用子选项
  if (!parentVal) {
    return childVal
  }

  let ret = {}
  extend(ret, parentVal)
  for (let key in childVal) {
    let parent = ret[key]
    let child = childVal[key]
    // 父的选项先转换成数组
    if (parent && !Array.isArray(parent)) {
      paretn = [parent]
    }

    ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]
  }
  return ret
}

/*
// 合并例子
let Parent = Vue.extend({
  watch: {
    'test': function () {
      console.log('parent change')
    }
  }
})

let Child = Parent.extend({
  watch: {
    'test': {
      handler: function () {
        console.log('child change')
      }
    }
  },
  data() {
    return {
      test: 1
    }
  }
})


let vm = new Child().$mount('#app')
vm.test = 2
// 输出结果
parent change
child change
简单总结一下：对于 watch 选项的合并，最终和父类选项合并成数组，并且数组的选项成员，可以是回调函数，选项对象，或者函数名。
*/

// props methods inject computed 合并
/*
源码的设计将 props.methods,inject,computed 归结为一类，他们的配置策略一致，简单概括就是，如果父类不存在选项，则返回子类选项，子类父类都存在时，用子类选项去覆盖父类选项。
*/
// 其他选项合并策略
strats.props = strats.methods = strats.inject = strats.computed 
= function (parentVal, childVal, vm, key) {
  if (childVal && 'development' !== 'production') {
    assertObjectType(key, childVal, vm)
  }
  if (!parentVal) { // 父类不存在该选项，则返回子类的选项
    return childVal
  }
  let ret = Object.create(null)
  extend(ret, parentVal)
  if (childVal) { // 子类选项会覆盖父类选项的值
    extend(ret, childVal)
  }
  return ret
}

```

### 小结

至此，五类选项合并的策略分析到此结束，回顾一下这一章节的内容，这一节是 `Vue` 源码分析的起手式，所以我们从 `Vue` 的引入出发，先大致了解了 `Vue` 在代码引入阶段做的操作，主要是对静态属性方法和原型上属性方法的定义和声明，这里并不需要精确了解到每个方法的功能和实现细节，当然我也相信你已经在实战中或多或少接触过这些方法的使用。接下来到文章的重点，`new Vue` 是我们正确使用 `Vue` 进行开发的关键，而实例化阶段会对调用`_init` 方法进行初始化，选项合并是初始化的第一步。选项合并会对系统内部定义的选项和子父类的选项进行合并。而 `Vue` 有相当丰富的选项合并策略，不管是内部的选项还是用户自定义的选项，他们都遵循内部约定好的合并策略。有了丰富的选项和严格的合并策略，`Vue` 在指导开发上才显得更加完备。下一节会分析一个重要的概念，数据代理，它也是响应式系统的基础。

## 基础的数据代理检测

### 数据代理的含义

- 简单回顾一下这个系列的前两节，前两节花了大量的篇幅介绍了 `Vue` 的选项合并，选项合并是 `Vue` 实例初始化的开始，`Vue` 为开发者提供了丰富的选项配置，而每个选项都严格规定了合并的策略。然而这只是初始化中的第一步，这一节我们将对另一个重点的概念深入的分析，他就是**数据代理**，我们知道 `Vue` 大量利用了代理的思想，而除了响应式系统外，还有哪些场景也需要进行数据代理呢？这是我们这节分析的重点。

- 数据代理的另一个说法是数据劫持，当我们在访问或者修改对象的某个属性时，数据劫持可以拦截这个行为并进行额外的操作或者修改返回的结果。而我们知道 `Vue` 响应式系统的核心就是数据代理，代理使得数据在访问时进行依赖收集，在修改更新时对依赖进行更新，这是响应式系统的核心思路。而这一切离不开 `Vue` 对数据做了拦截代理。然而响应式并不是本节讨论的重点，这一节我们将看看数据代理在其他场景下的应用。在分析之前，我们需要掌握两种实现数据代理的方法： `Object.defineProperty` 和 `Proxy`。

#### Object.defineProperty

[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

[Object.defineProperty 总结](https://juejin.cn/post/6898983027440320526)

- 属性本身具有一些特性，比如属性只读，不可修改，属性不想被枚举，属性不想被删除等

- Object.defineProperty 就是用来对属性值的行为进行描述

- `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

- 在 JS 中，属性由一个字符串类型的`名字(name)` 和一个 `属性描述符(property descriptor)` 对象构成

- 语法

  ```js
  Object.defineProperty(obj, prop, descriptor)
  /*
  直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
  obj - 要定义属性的对象
  prop - 要定义或修改的属性的名称或 Symbol
  descriptor - 要定义或修改的属性描述符，是个对象
  返回值 - 被传递给函数的对象
  */
  descriptor = {
    configurable: false, // true - 该对象可被删除
    enumerable: false, // true- 该对象可被枚举
    value: undefined, // 属性的值
    writable: false, // true - 该对象可被修改
    get() { 
      // 属性的 getter 函数，当访问该属性时，会调用此函数，该函数的返回值会被用作属性的值，默认为 undefined
      // 执行时不传入任何参数，但是会传入 this 对象
      return x
    },
    set(x) { 
      // 属性的 setter 函数，当属性值被修改时，会调用此函数，默认为 undefined。
      // 该方法接受一个参数，也就是被赋予的新值，会传入赋值时的 this 对象
      x = x
    }
      
  }
  ```

- `Object.defineProperty()` 可以用来精确添加或修改对象的属性，只需要在 `descriptor` 对象中将属性特性描述清楚，`descriptor` 的属性描述符有两种形式，一种是数据描述符，另一种是存取描述符

- 数据描述符

  拥有四个属性配置

  + configurable
  + enumerable
  + value
  + writable

- 存取描述符

  + configurable
  + enumerable
  + get
  + set

- 注：**数据描述符的 `value，writable` 和 存取描述符中的 `get, set` 属性不能同时存在，否则会抛出异常。**

- 有了 `Object.defineProperty` 方法，我们可以方便的利用存取描述符中的 `getter/setter` 来进行数据的监听，这也是响应式构建的雏形。`getter` 方法可以让我们在访问数据时做额外的操作处理，`setter` 方法使得我们可以在数据更新时修改返回的结果。

  ```js
  /*
  有了 Object.defineProperty 方法，我们可以方便的利用存取描述符中的 getter/setter 来进行数据的监听，这也是响应式构建的雏形。getter 方法可以让我们在访问数据时做额外的操作处理，setter 方法使得我们可以在数据更新时修改返回的结果。看看下面的例子，由于设置了数据代理，当我们访问对象 o 的 a 属性时，会触发 getter 执行钩子函数，当修改 a 属性的值时，会触发 setter 钩子函数去修改返回的结果。
  */
  let o = {}
  let value
  Object.defineProperty(o, 'a', {
    get() {
      console.log('获取值')
      return value
    },
    set(v) {
      console.log('设置值')
      value = 'qqq'
    }
  })
  
  o.a = 'sss'
  // 设置值
  console.log(o.a)
  // 获取值
  // 'qqq'
  
  /*
  前面说到 Object.defineProperty 的 get 和 set 方法是对对象进行监测并响应变化，那么数组类型是否也可以监测呢，参照监听属性的思路，我们用数组的下标作为属性，数组的元素作为拦截对象，看看 Object.defineProperty 是否可以对数组的数据进行监控拦截。
  */
  let arr = [1, 2, 3]
  arr.forEach((item, index) => {
    Object.defineProperty(arr, index, {
      get() {
        console.log('数组被 getter 拦截')
        return item
      },
      set(value) {
        console.log('数组被 setter 拦截')
        return item = value
      }
    })
  })
  
  arr[1] = 4
  // 数组被 setter 拦截
  console.log('---')
  console.log(arr)
  // 数组被 getter 拦截 [1, 4, 3]
  console.log('***')
  arr.push(4) // 无输出
  console.log('***')
  console.log(arr)
  // 数组被 getter 拦截 [1, 4, 3, 4]
  
  /*
  显然，已知长度的数组是可以通过索引属性来设置属性的访问器属性的。但是数组的添加确无法进行拦截，这个也很好理解，不管是通过 arr.push() 还是 arr[10] = 10 添加的数据，数组所添加的索引值并没有预先加入数据拦截中，所以自然无法进行拦截处理。这个也是使用 Object.defineProperty 进行数据代理的弊端。为了解决这个问题，Vue 在响应式系统中对数组的方法进行了重写，间接的解决了这个问题，详细细节可以参考后续的响应式系统分析。
  
  另外如果需要拦截的对象属性嵌套多层，如果没有递归去调用 Object.defineProperty 进行拦截，深层次的数据也依然无法监测。
  
  ——向数组中添加值，无法进行拦截-对应的索引值没有预先加入数据拦截中
  */
  
  ```

#### Proxy

[ES6 入门_Proxy](https://es6.ruanyifeng.com/#docs/proxy)

[ES6 入门_Reflect](https://es6.ruanyifeng.com/#docs/reflect)

- `es6` 引入了 `Proxy` 的概念，它是真正在语言层面对数据拦截的定义。和 `Object.defineProperty` 一样，`Proxy` 可以修改某些操作的默认行为，但是不同的是，**`Proxy` 针对目标对象会创建一个新的实例对象，并将目标对象代理到新的实例对象上，**。 本质的区别是后者会创建一个新的对象对原对象做代理，外界对原对象的访问，都必须先通过这层代理进行拦截处理。而拦截的结果是**我们只要通过操作新的实例对象就能间接的操作真正的目标对象了**。

- 代码

  ```js
  /*
  为了解决像数组这类无法进行数据拦截，以及深层次的嵌套问题，es6 引入了 Proxy 的概念，它是真正在语言层面对数据拦截的定义。和 Object.defineProperty 一样，Proxy 可以修改某些操作的默认行为，但是不同的是，Proxy 针对目标对象会创建一个新的实例对象，并将目标对象代理到新的实例对象上，。 本质的区别是后者会创建一个新的对象对原对象做代理，外界对原对象的访问，都必须先通过这层代理进行拦截处理。而拦截的结果是我们只要通过操作新的实例对象就能间接的操作真正的目标对象了。针对 Proxy，下面是基础的写法:
  */
  let obj = {}
  let nObj = new Proxy(obj, {
    get(target, key, receiver) { 
      // 拦截对象属性的读取
      // 三个参数 目标对象 属性名 proxy 实例本身（操作行为所针对的对象）（可选）
      console.log('获取值')
      return Reflect.get(target, key, receiver)
      // Reflect.get(target, name, receiver)
      // Reflect.get 方法查找并返回 target 对象的 name 属性，如果没有该属性，则返回 undefined。
      // 如果 name 属性部署了读取函数（getter），则读取函数的 this 绑定 receiver。
    },
    set(target, key, value, receiver) { 
      // 拦截对象属性的设置
      // 四个参数 目标对象 属性名 属性值 proxy 实例本身（可选）
      console.log('设置值')
      return Reflect.set(target, key, value, receiver)
      // Reflect.set(target, name, value, receiver)
      // Reflect.set 方法设置 target 对象的 name 属性等于 value。
      // 如果 name 属性设置了赋值函数，则赋值函数的 this 绑定 receiver。
    }
  })
  
  nObj.a = '代理'
  console.log(obj)
  // 结果
  // 设置值
  // { a: '代理' }
  
  /*
  上面的 get,set 是 Proxy 支持的拦截方法，而 Proxy 支持的拦截操作有 13 种之多，具体可以参照 ES6-Proxy 文档，前面提到，Object.defineProperty 的 getter 和 setter 方法并不适合监听拦截数组的变化，那么新引入的 Proxy 又能否做到呢？我们看下面的例子。
  */
  let arr = [1, 2, 3]
  let pObj = new Proxy(arr, {
    get(target, key, receiver) {
      console.log('获取数组元素' + key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, receiver) {
      console.log('设置数组')
      return Reflect.set(target, key, receiver)
    }
  })
  
  pObj[1] = 4
  // 设置数组
  console.log('---')
  pObj.push(4)
  // 获取数组元素push
  // 获取数组元素length
  // 设置数组
  // 设置数组
  console.log('---')
  pObj[10] = 10
  // 设置数组
  console.log('---')
  pObj.splice(1, 1)
  // 获取数组元素splice
  // 获取数组元素length
  // 获取数组元素constructor
  // 获取数组元素1
  // 获取数组元素2
  // 设置数组
  // 获取数组元素3
  // 设置数组
  // 获取数组元素10
  // 设置数组
  // 设置数组
  console.log('---')
  /*
  显然 Proxy 完美的解决了数组的监听检测问题，针对数组添加数据，删除数据的不同方法，代理都能很好的拦截处理。另外 Proxy 也很好的解决了深层次嵌套对象的问题，具体读者可以自行举例分析。
  */
  ```

### initProxy

- 数据拦截的思想除了为构建响应式系统准备，它也可以为**数据进行筛选过滤**，我们接着往下看初始化的代码，在合并选项后，`vue` 接下来会为 `vm` 实例设置一层代理，这层代理可以为 **vue 在模板渲染时进行一层数据筛选**，这个过程究竟怎么发生的，我们看代码的实现。

- 代码

  ```js
  /*
  数据拦截的思想除了为构建响应式系统准备，它也可以为数据进行筛选过滤，我们接着往下看初始化的代码，在合并选项后，vue 接下来会为 vm 实例设置一层代理，这层代理可以为 vue 在模板渲染时进行一层数据筛选，这个过程究竟怎么发生的，我们看代码的实现。
  */
  
  // 1.3选项校验.js
  
  // 定义 Vue 原型上的 init 方法（内部方法）
  function initMixin(Vue) {
    // 定义了内部在实例化 Vue 时会执行的初始化代码，是一个内部使用的方法
    Vue.prototype._init = function (options) {
      let vm = this
      // a uid
      // 记录实例化多少个 vue 对象
      vm._uid = uid$3++
  
      // 选项合并，将合并后的选项赋值给实例的 $options 属性
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor), // 返回 Vue 构造函数自身的配置项
        options || {}, 
        vm)
      
      // 2.2initProxy.js
      {
        // 对 vm 实例进行一层代理
        initProxy(vm)
      }
    }
  }
  
  // initProxy 代理函数
  let initProxy = function initProxy(vm) {
    // 判断浏览器是否支持原生的 proxy
    let hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy)
  
    if (hasProxy) {
      // 当浏览器支持 Proxy 时，vm._renderProxy 会代理 vm 实例，并且代理过程也会随着参数的不同呈现不同的效果
      let options = vm.$options
      let handlers = options.render && options.render._withStripped ? getHandler : hasHandler
  
      // 代理 vm 实例到 vm 属性 _renderProxy
      vm._renderProxy = new Proxy(vm, handlers)
    } else {
      // 当浏览器不支持 Proxy 时，直接将 vm 赋值给 vm._renderProxy。
      vm._renderProxy = vm
    }
  }
  
  // 2.2.1触发代理
  /*
  读到这里，我相信大家会有很多的疑惑。 
  1. 这层代理的访问时机是什么，也就是说什么场景会触发这层代理 
  2. 参数 options.render._withStripped 代表着什么，getHandler 和 hasHandler 又有什么不同。 
  3. 如何理解为模板数据的访问进行数据筛选过滤。到底有什么数据需要过滤。 
  4. 只有在支持原生 proxy 环境下才会建立这层代理，那么在旧的浏览器，非法的数据又将如何展示。
  */
  /*
  源码中 vm._renderProxy 的使用出现在 Vue 实例的_render 方法中，Vue.prototype._render 是将渲染函数转换成 Virtual DOM 的方法，这部分是关于实例的挂载和模板引擎的解析，笔者并不会在这一章节中深入分析，我们只需要先有一个认知，Vue 内部在 js 和真实 DOM 节点中设立了一个中间层，这个中间层就是 Virtual DOM，遵循 js -> virtual DOM -> 真实dom 的转换过程，而 Vue.prototype._render 是前半段的转换，当我们调用 render 函数时，代理的 vm._renderProxy 对象便会访问到。
  */
  Vue.prototype._render = function () {
    // ... 省略一些代码
  
    // 调用 vm._renderProxy
    vnode = render.call(vm._renderProxy, vm.$createElement)
  }
  
  /*
  那么代理的处理函数又是什么？我们回过头看看代理选项 handlers 的实现。 
  handers 函数会根据 options.render._withStripped 的不同执行不同的代理函数，当使用类似 webpack 这样的打包工具时，通常会使用 vue-loader 插件进行模板的编译，这个时候 options.render 是存在的，并且_withStripped 的属性也会设置为 true (关于编译版本和运行时版本的区别可以参考后面章节)，所以此时代理的选项是 hasHandler, 在其他场景下，代理的选项是 getHandler。getHandler,hasHandler 的逻辑相似，我们只分析使用 vue-loader 场景下 hasHandler 的逻辑。另外的逻辑，读者可以自行分析。
  */
  let hasHandler = {
    // key in obj 或 with 作用域时，会触发 has 的钩子
    has: function has(target, key) {
      // ... 省略一些代码
    }
  }
  
  /*
  hasHandler 函数定义了 has 的钩子，前面介绍过，proxy 的钩子有 13 个之多，而 has 是其中一个，它用来拦截 propKey in proxy 的操作，返回一个布尔值。而除了拦截 in 操作符外，has 钩子同样可以用来拦截 with 语句下的作用对象。例如:
  */
  let obj = {
    a: 1
  }
  let nObj = new Proxy(obj, {
    has(target, key) {
      console.log(target) // { a: 1 }
      console.log(key) // a
      return true
    }
  })
  
  with(nObj) {
    a = 2
  }
  
  /*
  那么这两个has 钩子的触发条件是否跟_render 过程有直接的关系呢？答案是肯定的。
  vnode = render.call(vm._renderProxy, vm.$createElement); 的主体是 render 函数，而这个 render 函数就是包装成 with 的执行语句，在执行 with 语句的过程中，该作用域下变量的访问都会触发 has 钩子，这也是模板渲染时之所有会触发代理拦截的原因。我们通过代码来观察 render 函数的原形。
  */
  let vm = new Vue({
    el: '#app'
  })
  console.log(vm.$options.render)
  /*
  输出 - 模板渲染使用 with 语句
  ƒ anonymous() {
    with(this){return _c('div',{attrs:{"id":"app"}},[_v(_s(message))])}
  }
  */
  
  
  // 2.2.2数据过滤
  /*
  我们已经大致知道了 Proxy 代理的访问时机，那么设置这层代理的作用又在哪里呢？首先思考一个问题，我们通过 data 选项去设置实例数据，那么这些数据可以随着个人的习惯任意命名吗？显然不是的，如果你使用 js 的关键字 (像 Object,Array,NaN) 去命名，这是不被允许的。另一方面，Vue 源码内部使用了以 $,_作为开头的内部变量，所以以 $,_开头的变量名也是不被允许的，这就构成了数据过滤监测的前提。接下来我们具体看 hasHandler 的细节实现。
  */
  let hasHandler = {
    // key in obj 或 with 作用域时，会触发 has 的钩子
    has: function has(target, key) {
      let has = key in target
      // isAllowed 用来判断模板上出现的变量是否合法
      // _和$开头的变量不允许出现在定义的数据中，因为他是vue内部保留属性的开头。
      let isAllowed = allowedGlobals(key) || (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data))
  
      // 1. warnReservedPrefix: 警告不能以$ _开头的变量
      // 2. warnNonPresent: 警告模板出现的变量在vue实例中未定义
      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key)
        } else {
          warnNonPresent(target, key)
        }
      }
      return has || !isAllowed
    }
  }
  
  // 模板中允许出现的非 vue 实例定义的变量
  let allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  )
  /*
  首先 allowedGlobals 定义了 javascript 保留的关键字，这些关键字是不允许作为用户变量存在的。(typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data) 的逻辑对以 $,_开头，或者是否是 data 中未定义的变量做判断过滤。这里对未定义变量的场景多解释几句，前面说到，代理的对象 vm.renderProxy 是在执行_render 函数中访问的，而在使用了 template 模板的情况下，render 函数是对模板的解析结果，换言之，之所以会触发数据代理拦截是因为模板中使用了变量，例如 <div>{{message}}}</div>。而如果我们在模板中使用了未定义的变量，这个过程就被 proxy 拦截，并定义为不合法的变量使用。
  */
  
  // 我们可以看看两个报错信息的源代码 (是不是很熟悉):
  // 模板使用未定义的变量
  let warnNonPresent = function (target, key) {
    warn(
    "Property or method \"" + key + "\" is not defined on the instance but " +
    'referenced during render. Make sure that this property is reactive, ' +
    'either in the data option, or for class-based components, by ' +
    'initializing the property. ' +
    'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
    target
    );
  };
  
  // 使用$,_开头的变量
  let warnReservedPrefix = function (target, key) {
    warn(
    "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
    'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
    'prevent conflicts with Vue internals' +
    'See: https://vuejs.org/v2/api/#data',
    target
    );
  };
  
  /*
  分析到这里，前面的疑惑只剩下最后一个问题。只有在浏览器支持 proxy 的情况下，才会执行 initProxy 设置代理，那么在不支持的情况下，数据过滤就失效了，此时非法的数据定义还能正常运行吗？我们先对比下面两个结论。
  支持 proxy 浏览器的结果：[Vue warn]
  不支持 proxy 浏览器的结果：ReferenceError: _test is not defined
  
  显然，在没有经过代理的情况下，使用_开头的变量依旧会 报错，但是它变成了 js 语言层面的错误，表示该变量没有被声明。但是这个报错无法在 Vue 这一层知道错误的详细信息，而这就是能使用 Proxy 的好处。接着我们会思考，既然已经在 data 选项中定义了_test 变量，为什么访问时还是找不到变量的定义呢？
  原来在初始化数据阶段，Vue 已经为数据进行了一层筛选的代理。具体看 initData 对数据的代理，其他实现细节不在本节讨论范围内。
  */
  function initData(vm) {
    vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
    if (!isReserved(key)) {
      // 数据代理，用户可直接通过 vm 实例返回 data 数据
      proxy(vm, '_data', key)
    }
  }
  
  function isReserved(str) {
    let c = (str + '').charCodeAt(0)
    // 首字符是 $ 或 _ 的字符串
    return c === 0x24 || c === 0x5F
  }
  /*
  vm._data 可以拿到最终 data 选项合并的结果，isReserved 会过滤以 $,_开头的变量，proxy 会为实例数据的访问做代理，当我们访问 this.message 时，实际上访问的是 this._data.message, 而有了 isReserved 的筛选，即使 this._data._test 存在，我们依旧无法在访问 this._test 时拿到_test 变量。这就解释了为什么会有变量没有被声明的语法错误，而 proxy 的实现，又是基于上述提到的 Object.defineProperty 来实现的。
  */
  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      // 当访问 this[key] 时，会代理访问 this._data[key] 的值
      return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
  }
  /*
  这一节内容，详细的介绍了数据代理在 Vue 的实现思路和另一个应用场景，数据代理是一种设计模式，也是一种编程思想，Object.defineProperty 和 Proxy 都可以实现数据代理，但是他们各有优劣，前者兼容性较好，但是却无法对数组或者嵌套的对象进行代理监测，而 Proxy 基本可以解决所有的问题，但是对兼容性要求很高。Vue 中的响应式系统是以 Object.defineProperty 实现的，但是这并不代表没有 Proxy 的应用。initProxy 就是其中的例子，这层代理会在模板渲染时对一些非法或者没有定义的变量进行筛选判断，和没有数据代理相比，非法的数据定义错误会提前到应用层捕获，这也有利于开发者对错误的排查。
  */
  
  ```

  ![image-20210321212651310](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/image-20210321212651310.png)

## 实例挂载流程和模板编译

- 前面几节我们从 `new Vue` 创建实例开始，介绍了创建实例时执行初始化流程中的重要两步，配置选项的资源合并，以及响应式系统的核心思想，数据代理。在合并章节，我们对 `Vue` 丰富的选项合并策略有了基本的认知，在数据代理章节我们又对代理拦截的意义和使用场景有了深入的认识。按照 `Vue` 源码的设计思路，初始化过程还会进行很多操作，例如组件之间创建关联，初始化事件中心，初始化数据并建立响应式系统等，并最终将模板和数据渲染成为 `dom` 节点。如果直接按流程的先后顺序分析每个步骤的实现细节，会有很多概念很难理解。因此在这一章节，我们先重点分析一个概念，**实例的挂载渲染流程。**

### Runtime Only / Runtime + Compiler

- `vue` 基于源码构建的两个版本，一个是 `runtime only`(一个只包含运行时的版本)，另一个是 `runtime + compiler`(一个同时包含编译器和运行时的版本)。而两个版本的区别仅在于后者包含了一个编译器。

- 什么是编译器，百度百科这样解释道：简单讲，编译器就是将 “一种语言（通常为高级语言）” 翻译为 “另一种语言（通常为低级语言）” 的程序。一个现代编译器的主要工作流程：源代码 (source code) → 预处理器 (preprocessor) → 编译器 (compiler) → 目标代码 (object code) → 链接器 (Linker) → 可执行程序 (executables)。

- 通俗点讲，编译器是一个提供了将**源代码**转化为**目标代码**的工具。从 `Vue` 的角度出发，内置的编译器实现了将 `template` 模板转换编译为可执行 `javascript` 脚本的功能。

- Runtime + Compiler

  一个完整的 `Vue` 版本是包含编译器的，我们可以使用 `template` 进行模板编写。编译器会自动将模板字符串编译成渲染函数的代码，源码中就是 `render` 函数。 如果你需要在客户端编译模板 (比如传入一个字符串给 `template` 选项，或挂载到一个元素上并以其 `DOM` 内部的 HTML 作为模板)，就需要一个包含编译器的版本。

  ```js
  // 需要编译器的版本
  new Vue({
    template: '<div>{{ hi }}</div>'
  })
  ```

- Runtime Only

  只包含运行时的代码拥有创建 `Vue` 实例、渲染并处理 `Virtual DOM` 等功能，基本上就是除去编译器外的完整代码。`Runtime Only` 的适用场景有两种： 

  1.我们在选项中通过手写 `render` 函数去定义渲染过程，这个时候并不需要包含编译器的版本便可完整执行。

  ```js
  // 不需要编译器
  new Vue({
    render (h) {
      return h('div', this.hi)
    }
  })
  ```

  2.借助 `vue-loader` 这样的编译工具进行编译，当我们利用 `webpack` 进行 `Vue` 的工程化开发时，常常会利用 `vue-loader` 对`.vue` 进行编译，尽管我们也是利用 `template` 模板标签去书写代码，但是此时的 `Vue` 已经不需要利用编译器去负责模板的编译工作了，这个过程交给了插件去实现。

  很明显，编译过程对性能会造成一定的损耗，并且由于加入了编译的流程代码，`Vue` 代码的总体积也更加庞大 (运行时版本相比完整版体积要小大约 30%)。因此在实际开发中，我们需要借助像 `webpack` 的 `vue-loader` 这类工具进行编译，将 `Vue` 对模板的编译阶段合并到 `webpack` 的构建流程中，这样不仅减少了生产环境代码的体积，也大大提高了运行时的性能，一举两得。

### 实例挂载

有了上面的基础，我们回头看初始化`_init` 的代码，在代码中我们观察到 `initProxy` 后有一系列的函数调用，这些函数包括了创建组件关联，初始化事件处理，定义渲染函数，构建数据响应式系统等，最后还有一段代码，在 `el` 存在的情况下，实例会调用 `$mount` 进行实例挂载。

```js
// 3.2实例挂载的基本思路

// 2.2initProxy.js
// 定义 Vue 原型上的 init 方法（内部方法）
function initMixin(Vue) {
  // 定义了内部在实例化 Vue 时会执行的初始化代码，是一个内部使用的方法
  Vue.prototype._init = function (options) {
    let vm = this
    // a uid
    // 记录实例化多少个 vue 对象
    vm._uid = uid$3++

    // 选项合并，将合并后的选项赋值给实例的 $options 属性
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor), // 返回 Vue 构造函数自身的配置项
      options || {}, 
      vm)
    
    // 2.2initProxy.js
    {
      // 对 vm 实例进行一层代理
      initProxy(vm)
    }

    vm._self = vm
    initLifecycle(vm)

    // 初始化事件处理
    initEvents(vm)
    // 定义渲染函数
    initRender(vm)
    // 构建响应式系统
    initState(vm)
    // ... 省略一些代码

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```

以手写 `template` 模板为例，理清楚什么是挂载。**我们会在选项中传递 `template` 为属性的模板字符串，如`<div></div>`，最终这个模板字符串通过中间过程将其转成真实的 `DOM` 节点，并挂载到选项中 `el` 代表的根节点上完成视图渲染。这个中间过程就是接下来要分析的挂载流程。**

`Vue` 挂载的流程是比较复杂的，接下来我将通过**流程图，代码分析**两种方式为大家展示挂载的真实过程。

- 流程图

  ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/3.1.png)

  如果用一句话概括挂载的过程，可以描述为 **确认挂载节点，编译模板为 `render` 函数，渲染函数转换 `Virtual DOM`, 创建真实节点。**

- 代码分析

  ```js
  // 3.2.2代码分析
  /*
  我们用语言描述挂载流程的基本思路。
  
  确定挂载的 DOM 元素，这个 DOM 需要保证不能为 html，body 这类根节点。
  我们知道渲染有两种方式，一种是通过 template 模板字符串，另一种是手写 render 函数，前面提到 template 模板需要运行时进行编译，而后一个可以直接用 render 选项作为渲染函数。因此挂载阶段会有两条分支，template 模板会先经过模板的解析，最终编译成 render 渲染函数参与实例挂载，而手写 render 函数可以绕过编译阶段，直接调用挂载的 $mount 方法。
  针对 template 而言，它会利用 Vue 内部的编译器进行模板的编译，字符串模板会转换为抽象的语法树，即 AST 树，并最终转化为一个类似 function(){with(){}} 的渲染函数，这是我们后面讨论的重点。
  无论是 template 模板还是手写 render 函数，最终都将进入 mountComponent 过程，这个阶段会实例化一个渲染 watcher, 具体 watcher 的内容，另外放章节讨论。我们先知道一个结论，渲染 watcher 的回调函数有两个执行时机，一个是在初始化时执行，另一个是当 vm 实例检测到数据发生变化时会再次执行回调函数。
  回调函数是执行 updateComponent 的过程，这个方法有两个阶段，一个是 vm._render, 另一个是 vm._update。 vm._render 会执行前面生成的 render 渲染函数，并生成一个 Virtual Dom tree, 而 vm._update 会将这个 Virtual Dom tree 转化为真实的 DOM 节点。
  3.3 模板编译
  */
  // 内部真正实现挂载的方法
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined
    // 调用 mountComponent 方法挂载
    return mountComponent(this, el, hydrating)
  }
  
  // 缓存了原型上的 $mount 方法
  let mount = Vue.prototype.$mount
  
  // 重新定义 $mount，为包含编译器和不包含编译器的版本提供不同封装，最终调用的是缓存原型上的 $mount 方法
  Vue.prototype.$mount = function (el, hydrating) {
    // 获取挂载元素
    el = el && query(el)
    // 挂载元素不能为根结点
    if (el === document.body || el === document.documentElement) {
      warn(`Do not mount Vue to <html> or <body> - mount to normal elements instead.`)
      return this
    }
  
    let options = this.$options
    // 需要编译 or 不需要编译
    // render 选项不存在，代表的是 template 模板的形式，此时需要进行模板的编译过程
    if (!options.render) {
      // ... 使用内部编译器编译模板
    }
    // 无论是 template 模板还是手写 render 函数，最终调用缓存的 $mount 方法
    return mount.call(this, el, hydrating)
  }
  
  // mountComponent 方法思路
  function mountComponent(vm, el, hydrating) {
    // 定义 updateComponent 方法，在 watch 回调时调用
    updateComponent = function () {
      // render 函数渲染成虚拟 DOM，虚拟 DOM 渲染成真实的 DOM
      vm._update(vm._render(), hydrating)
    }
    // 实例化渲染 watcher
    new Watcher(vm, updateComponent, noop, {})
  }
  ```

### 模板编译

#### template 的处理

```js
/*
通过文章前半段的学习，我们对 Vue 的挂载流程有了一个初略的认识。这里有两个大的流程需要我们详细去理解，一个是 template 模板的编译，另一个是 updateComponent 的实现细节。updateComponent 的过程，我们放到下一章节重点分析，而这一节剩余的内容我们将会围绕模板编译的设计思路展开。

(编译器的实现细节是异常复杂的，要在短篇幅内将整个编译的过程掌握是不切实际的，并且从大方向上也不需要完全理清编译的流程。因此针对模板，文章分析只是浅尝即止，更多的细节读者可以自行分析)
*/
// template 的三种写法
// 1 字符串模板
const vm = new Vue({
  el: '#app',
  template: '<div>模板字符串</div>'
})
// 2 选择符匹配元素的 innerHTML 模板
/*
<div id="app">
  <div>test1</div>
  <script type="x-template" id="test">
    <p>test</p>
  </script>
</div>
注意：其中 X-Template 模板的方式一般用于模板特别大的 demo 或极小型的应用，官方不建议在其他情形下使用，因为这会将模板和组件的其它定义分离开。
*/
const vm = new Vue({
  el: '#app',
  template: '#test'
})
// 3 dom 元素匹配元素的 innerHTML 模板
/*
<div id="app">
  <div>test1</div>
  <span id="test">
    <div class="test2">test2</div>
  </span>
</div>
*/
const vm = new Vue({
  el: '#app',
  template: document.querySelector('#test')
})

//模板编译的前提需要对 template 模板字符串的合法性进行检测，三种写法对应代码的三个不同分支。
// 3.2实例挂载.js
Vue.prototype.$mount = function () {
  // ... 省略一些代码  
  // render 选项不存在，代表的是 template 模板的形式，此时需要进行模板的编译过程
  if (!options.render) {
    let template = options.template
    if (template) { // 针对字符串模板和选择符匹配模板  
      if (typeof template === 'string') {
        // 选择符匹配模板，以 '#' 为前缀的选择器
        if (template.charAt(0) === '#') {
          // 获取匹配元素的 innerHTML
          template = idToTemplate(template)
          if (!template) {
            warn(`Template element not found or is empty: ${options.template}`, this)
          }
        }
      }
    } else if (template.nodeType) { // 针对 dom 元素匹配
      // 获取匹配元素的 innerHTML
      template = template.innerHTML
    } else { // 其他类型则判定为非法传入
      warn(`invalid template option: ${template}`, this)
      return this
    }
  } else if (el) {
    // 如果没有传入 template 模板，则默认以 el 元素所属的根结点作为基础模板
    template = getOuterHTML(el)
  }
}

// 判断 el 元素是否存在
function query(el) {
  if (typeof el === 'string') {
    let selected = document.querySelector(el)
    if (!selected) {
      warn(`Cannot find element: ${el}`)
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

let idToTemplate = cached(function (id) {
  let el = query(id)
  return el && el.innerHTML
})

```

#### 编译流程

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/3.2.png)

```js
// 3.3.3逻辑解析
// 即便有流程图，编译逻辑理解起来依然比较晦涩，接下来，结合代码分析每个环节的执行过程。
Vue.prototype.$mount = function () {
  // ... 省略一些代码

  if (!options.render) {
    let template = options.template
    if (template) {
      let ref = compileToFunctions(template, {
        outputSourceRange: 'development' !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      let render = ref.render
    }
  }
}

/*
compileToFunctions 有三个参数，一个是 template 模板，另一个是编译的配置信息，并且这个方法是对外暴露的编译方法，用户可以自定义配置信息进行模板的编译。最后一个参数是 Vue 实例。
将compileToFunction方法暴露给Vue作为静态方法存在
Vue.compile = compileToFunctions;

在 Vue 的官方文档中，Vue.compile 只允许传递一个 template 模板参数，这是否意味着用户无法决定某些编译的行为？显然不是的，我们看回代码，有两个选项配置可以提供给用户，用户只需要在实例化 Vue 时传递选项改变配置，他们分别是：

1.delimiters： 该选项可以改变纯文本插入分隔符，当不传递值时，Vue 默认的分隔符为 {{}}。如果我们想使用其他模板，可以通过 delimiters 修改。

2.comments ： 当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。

注意，由于这两个选项是在完整版的编译流程读取的配置，所以在运行时版本配置这两个选项是无效的
*/

/*
接着我们一步步寻找 compileToFunctions 的根源。
首先我们需要有一个认知，不同平台对 Vue 的编译过程是不一样的，也就是说基础的编译方法会随着平台的不同有区别，编译阶段的配置选项也因为平台的不同呈现差异。但是设计者又不希望在相同平台下编译不同模板时，每次都要传入相同的配置选项。这才有了源码中较为复杂的编译实现。
*/
let createCompiler = createCompilerCreator(function baseCompile(template, options) {
  // 把模板解析成抽象的语法树
  let ast = parse(template.trim(), options)
  // 配置中有代码优化选项则会对 AST 语法树进行优化
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  let code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
let ref = createCompiler(baseOptions)
let compile = ref.compile
let compileToFunctions = ref.compileToFunctions
/*
这部分代码是在 Vue 引入阶段定义的，createCompilerCreator 在传递了一个 baseCompile 函数作为参数后，返回了一个编译器的生成器，也就是 createCompiler, 有了这个生成器，当将编译配置选项 baseOptions 传入后，这个编译器生成器便生成了一个指定环境指定配置下的编译器，而其中编译执行函数就是返回对象的 compileToFunctions。

这里的 baseCompile 是真正执行编译功能的地方，也就是前面说到的特定平台的编译方法。它在源码初始化时就已经作为参数的形式保存在内存变量中。我们先看看 baseCompile 的大致流程。

baseCompile 函数的参数有两个，一个是后续传入的 template 模板，另一个是编译需要的配置参数。函数实现的功能如下几个：

1. 把模板解析成抽象的语法树，简称 AST，代码中对应 parse 部分。
2. 可选：优化 AST 语法树，执行 optimize 方法。
3. 根据不同平台将 AST 语法树转换成渲染函数，对应的 generate 函数
*/

// 接下来具体看看 createCompilerCreator 的实现：
function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {
    // 内部定义 compile 方法
    function compile(template, options) {
      // ... 省略一些代码
    }

    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}
/*
createCompilerCreator 函数只有一个作用，利用偏函数的思想将 baseCompile 这一基础的编译方法缓存，并返回一个编程器生成器，当执行 var ref$1 = createCompiler(baseOptions); 时，createCompiler 会将内部定义的 compile 和 compileToFunctions 返回。
*/

// 我们继续关注 compileToFunctions 的由来，它是 createCompileToFunctionFn 函数以 compile 为参数返回的方法，接着看 createCompileToFunctionFn 的实现逻辑。
function createCompileToFunctionFn(compile) {
  let cache = Object.create(null)

  return function compileToFunctions(template, options, vm) {
    options = extend({}, options)

    // ... 省略一些代码

    // 缓存的作用：避免重复编译同一个模板造成性能的浪费
    if (cache[key]) {
      return cahce[key]
    }

    // 执行编译方法
    let compiled = compile(template, options)
    // ... 省略一些代码
    // turn code into functions
    let res = {}
    let fnGenErrors = []
    // 编译出的函数体字符串作为参数传递给 createFunction，返回最终的 render 函数
    res.render = createFunction(compile.render, fnGenErrors)
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    })

    function createFunction(code, errors) {
      try {
        return new Function(code)
      } catch (err) {
        errors.push({ err: err, code: code })
        return noop
      }
    }
    // ... 省略一些代码
    return (cache[key] = res)
  }
}
/*
createCompileToFunctionFn 利用了闭包的概念，将编译过的模板进行缓存，cache 会将之前编译过的结果保留下来，利用缓存可以避免重复编译引起的浪费性能。createCompileToFunctionFn 最终会将 compileToFunctions 方法返回。
*/

/*
接下来，我们分析一下 compileToFunctions 的实现逻辑。在判断不使用缓存的编译结果后，compileToFunctions 会执行 compile 方法，这个方法是前面分析 createCompiler 时，返回的内部 compile 方法，所以我们需要先看看 compile 的实现。
*/
function createCompiler(baseOptions) {
  function compile(template, options) {
    let finalOptions = Object.create(baseOptions)
    let errors = []
    let tips = []
    let warn = function (msg, range, tip) {
      (tip ? tips : errors).push(msg)
    }

    // 选项合并
    if (options) {
      // ... 省略一些代码
      // 会将用户传递的配置和系统自带的编译配置进行合并
    }

    finalOptions.warn = warn
    // 将剔除空格后的模板以及合并选项后的配置作为参数传递给 baseCompile 方法
    let compiled = baseCompile(template.trim(), finalOptions)
    {
      detectErrors(compile.ast, warn)
    }
    compiled.errors = errors
    compiled.tips = tips
    return compiled
  }
  return {
    compile,
    compileToFunctions: createCompileToFunctionFn(compile)
  }
}
/*
我们看到 compile 真正执行的方法，是一开始在创建编译器生成器时，传入的基础编译方法 baseCompile，baseCompile 真正执行的时候，会将用户传递的编译配置和系统自带的编译配置选项合并，这也是开头提到编译器设计思想的精髓。

执行完 compile 会返回一个对象，ast 顾名思义是模板解析成的抽象语法树，render 是最终生成的 with 语句，staticRenderFns 是以数组形式存在的静态 render。
{
  ast: ast,
  render: code.render,
  staticRenderFns: code.staticRenderFns
}

而 createCompileToFunctionFn 最终会返回另外两个包装过的属性 render, staticRenderFns，他们的核心是将 with 语句封装成执行函数。
*/

/*
至此，Vue 中关于编译器的设计思路也基本梳理清楚了，一开始看代码的时候，总觉得编译逻辑的设计特别的绕，分析完代码后发现，这正是作者思路巧妙的地方。Vue 在不同平台上有不同的编译过程，而每个编译过程的 baseOptions 选项会有所不同，同时也提供了一些选项供用户去配置，整个设计思想深刻的应用了偏函数的设计思想，而偏函数又是闭包的应用。作者利用偏函数将不同平台的编译方式进行缓存，同时剥离出编译相关的选项合并，这些方式都是值得我们日常学习的。

编译的核心是 parse,generate 过程，这两个过程笔者并没有分析，原因是抽象语法树的解析分支较多，需要结合实际的代码场景才更好理解。这两部分的代码会在后面介绍到具体逻辑功能章节时再次提及。
*/

```

这一节的内容有两大块，首先详细的介绍了实例在挂载阶段的完整流程，当我们传入选项进行实例化时，最终的目的是将选项渲染成页面真实的可视节点。这个选项有两种形式，一个是以 `template` 模板字符串传入，另一个是手写 `render` 函数形式传入，不论哪种，最终会以 `render` 函数的形式参与挂载，`render` 是一个用函数封装好的 `with` 语句。渲染真实节点前需要将 `render` 函数解析成虚拟 `DOM`, 虚拟 `DOM` 是 `js` 和真实 `DOM` 之间的桥梁。最终的`_update` 过程让将虚拟 `DOM` 渲染成真实节点。第二个大块主要介绍了作者在编译器设计时巧妙的实现思路。过程大量运用了偏函数的概念，将编译过程进行缓存并且将选项合并从编译过程中剥离。这些设计理念、思想都是值得我们开发者学习和借鉴的。

==没咋懂，之后回头再看==

## 完整渲染流程

继上一节内容，我们将 `Vue` 复杂的挂载流程通过图解流程，代码分析的方式简单梳理了一遍，最后也讲到了模板编译的大致流程。然而在挂载的核心处，我们并没有分析模板编译后渲染函数是如何转换为可视化 `DOM` 节点的。因此这一章节，我们将重新回到 `Vue` 实例挂载的最后一个环节：渲染 `DOM` 节点。在渲染真实 `DOM` 的过程中，`Vue` 引进了虚拟 `DOM` 的概念，这是 `Vue` 架构设计中另一个重要的理念。虚拟 `DOM` 作为 `JS` 对象和真实 `DOM` 中间的一个缓冲层，对 `JS` 频繁操作 `DOM` 的引起的性能问题有很好的缓解作用。

### 虚拟 DOM（Virtual DOM）

#### 浏览器的渲染流程

当浏览器接收到一个 `Html` 文件时，`JS` 引擎和浏览器的渲染引擎便开始工作了。从渲染引擎的角度，它首先会将 `html` 文件解析成一个 `DOM` 树，与此同时，浏览器将识别并加载 `CSS` 样式，并和 `DOM` 树一起合并为一个渲染树。有了渲染树后，渲染引擎将计算所有元素的位置信息，最后通过绘制，在屏幕上打印最终的内容。`JS` 引擎和渲染引擎虽然是两个独立的线程，但是 JS 引擎却可以触发渲染引擎工作，当我们通过脚本去修改元素位置或外观时，`JS` 引擎会利用 `DOM` 相关的 `API` 方法去操作 `DOM` 对象，此时渲染引擎变开始工作，渲染引擎会触发回流或者重绘。下面是回流重绘的两个概念：

- 回流： 当我们对 `DOM` 的修改引发了元素尺寸的变化时，浏览器需要重新计算元素的大小和位置，最后将重新计算的结果绘制出来，这个过程称为回流。
- 重绘： 当我们对 `DOM` 的修改只单纯改变元素的颜色时，浏览器此时并不需要重新计算元素的大小和位置，而只要重新绘制新样式。这个过程称为重绘。

**很显然回流比重绘更加耗费性能**。

通过了解浏览器基本的渲染机制，我们很容易联想到当不断的通过 `JS` 修改 `DOM` 时，不经意间会触发到渲染引擎的回流或者重绘，这个性能开销是非常巨大的。因此为了降低开销，我们需要做的是尽可能减少 `DOM` 操作。有什么方法可以做到呢？

#### 缓冲层-虚拟 DOM

虚拟 `DOM` 是为了解决频繁操作 `DOM` 引发性能问题的产物。虚拟 `DOM`(下面称为 `Virtual DOM`) 是将页面的状态抽象为 `JS` 对象的形式，本质上是 `JS` 和真实 `DOM` 的中间层，当我们想用 `JS` 脚本大批量进行 `DOM` 操作时，会优先作用于 `Virtual DOM` 这个 `JS` 对象，最后通过对比将要改动的部分通知并更新到真实的 `DOM`。尽管最终还是操作真实的 `DOM`，但 `Virtual DOM` 可以将多个改动合并成一个批量的操作，从而减少 `DOM` 重排的次数，进而缩短了生成渲染树和绘制所花的时间。

我们看一个真实的 `DOM` 包含了什么：

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E9%9D%A2%E8%AF%95/4.1.png)

浏览器将一个真实 `DOM` 设计得很复杂，不仅包含了自身的属性描述，大小位置等定义，也囊括了 `DOM` 拥有的浏览器事件等。正因为如此复杂的结构，我们频繁去操作 `DOM` 或多或少会带来浏览器的性能问题。而作为数据和真实 `DOM` 之间的一层缓冲，`Virtual DOM` 只是用来映射到真实 `DOM` 的渲染，因此不需要包含操作 `DOM` 的方法，它只要在对象中重点关注几个属性即可。

```js
// 真实DOM
<div id="real"><span>dom</span></div>

// 真实DOM对应的JS对象
{
    tag: 'div',
    data: {
        id: 'real'
    },
    children: [{
        tag: 'span',
        children: 'dom'
    }]
}
```

### Vnode

`Vue` 在渲染机制的优化上，同样引进了 `virtual dom` 的概念，它是用 `Vnode` 这个构造函数去描述一个 `DOM` 节点。

```js
/*
Vue 在渲染机制的优化上，同样引进了 virtual dom 的概念，它是用 Vnode 这个构造函数去描述一个 DOM 节点。
*/
// 4.2.1 Vnode 构造函数
let VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag // 标签
  this.data = data // 数据
  this.children = children // 子结点
  this.text = text
  // .. 省略一些代码
}
/*
Vnode 定义的属性差不多有 20 几个，显然用 Vnode 对象要比真实 DOM 对象描述的内容要简单得多，它只用来单纯描述节点的关键属性，例如标签名，数据，子节点等。并没有保留跟浏览器相关的 DOM 方法。除此之外，Vnode 也会有其他的属性用来扩展 Vue 的灵活性。

源码中也定义了创建 Vnode 的相关方法。
*/

// 4.2.2 创建 Vnode 注释结点
let createEmptyVNode = function (text) {
  if (text === void 0) {
    text = ''
  }

  let node = new VNode()
  node.text = text
  node.isComment = true // 标记注释结点
  return node
}

// 4.2.3 创建 Vnode 文本结点
function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// 4.2.4 克隆 Vnode
// cloneVnode 对 Vnode 的克隆只是一层浅拷贝，它不会对子节点进行深度克隆。
function cloneVNode(vnode) {
  let cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )

  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}

```

### 虚拟 DOM 的创建

先简单回顾一下挂载的流程，挂载的过程是调用 `Vue` 实例上 `$mount` 方法，而 `$mount` 的核心是 `mountComponent` 函数。如果我们传递的是 `template` 模板，模板会先经过编译器的解析，并最终根据不同平台生成对应代码，此时对应的就是将 `with` 语句封装好的 `render` 函数；如果传递的是 `render` 函数，则跳过模板编译过程，直接进入下一个阶段。下一阶段是拿到 `render` 函数，调用 `vm._render()` 方法将 `render` 函数转化为 `Virtual DOM`，并最终通过 `vm._update()` 方法将 `Virtual DOM` 渲染为真实的 `DOM` 节点。

```js
/*
先简单回顾一下挂载的流程，挂载的过程是调用 Vue 实例上 $mount 方法，而 $mount 的核心是 mountComponent 函数。如果我们传递的是 template 模板，模板会先经过编译器的解析，并最终根据不同平台生成对应代码，此时对应的就是将 with 语句封装好的 render 函数；如果传递的是 render 函数，则跳过模板编译过程，直接进入下一个阶段。下一阶段是拿到 render 函数，调用 vm._render() 方法将 render 函数转化为 Virtual DOM，并最终通过 vm._update() 方法将 Virtual DOM 渲染为真实的 DOM 节点。
*/
// 3.3 模板编译.js
Vue.prototype.$mount = function (el, hydrating) {
  // ... 省略一些代码
  return mountComponent(this, el)
}

function mountComponent() {
  // ... 省略一些代码
  updateComponent = function () {
    vm._update(vm._render(), hydrating)
  }
}

/*
我们先看看 vm._render() 方法是如何将 render 函数转化为 Virtual DOM 的。

回顾一下第一章节内容，文章介绍了 Vue 在代码引入时会定义很多属性和方法，其中有一个 renderMixin 过程，我们之前只提到了它会定义跟渲染有关的函数，实际上它只定义了两个重要的方法，_render 函数就是其中一个。
*/
// 1.1Vue大致结构.js
renderMixin(); // 引入Vue时，执行renderMixin方法，该方法定义了Vue原型上的几个方法，其中一个便是 _render函数
function renderMixin() {
  Vue.prototype._render = function () {
    let ref = vm.$options
    let render = ref.render
    // ... 省略一些代码
    try {
      // 2.2initProxy.js
      vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (e) {
      // ... 省略一些代码
    }
    // ... 省略一些代码
    return vnode
  }
}

/*
抛开其他代码，_render 函数的核心是 render.call(vm._renderProxy, vm.$createElement) 部分，vm._renderProxy 在数据代理分析过，本质上是为了做数据过滤检测，它也绑定了 render 函数执行时的 this 指向。vm.$createElement 方法会作为 render 函数的参数传入。回忆一下，在手写 render 函数时，我们会利用 render 函数的第一个参数 createElement 进行渲染函数的编写，这里的 createElement 参数就是定义好的 $createElement 方法。

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement('div', {}, this.message)
  },
  data() {
    return {
      message: 'dom'
    }
  }
})
*/

/*
初始化_init 时，有一个 initRender 函数，它就是用来定义渲染函数方法的，其中就有 vm.$createElement 方法的定义，除了 $createElement，_c 方法的定义也类似。其中 vm._c 是 template 内部编译成 render 函数时调用的方法，vm.$createElement 是手写 render 函数时调用的方法。两者的唯一区别仅仅是最后一个参数的不同。通过模板生成的 render 方法可以保证子节点都是 Vnode，而手写的 render 需要一些检验和转换。
*/
function initRender(vm) {
  vm._c = function (a, b, c, d) {
    // template 内部编译成 render 函数时调用的方法
    return createElement(vm, a, b, c, d, false)
  }
  vm.$createElement = function (a, b, c, d) {
    // 手写 render 函数时调用的方法
    // 手写的 render 需要一些检验和转换
    return createElement(vm, a, b, c, d, true)
  }
}

/*
createElement 方法实际上是对 _createElement 方法的封装，在调用_createElement 前，它会先对传入的参数进行处理，毕竟手写的 render 函数参数规格不统一。举一个简单的例子。
// 没有data
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement('div', this.message)
    },
    data() {
        return {
            message: 'dom'
        }
    }
})
// 有data
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement('div', {}, this.message)
    },
    data() {
        return {
            message: 'dom'
        }
    }
})

这里如果第二个参数是变量或者数组，则默认是没有传递 data, 因为 data 一般是对象形式存在。
*/
function createElement(
  context, // vm 实例
  tag, // 标签
  data, // 结点相关数据，属性
  children, // 子结点
  normalizationType,
  alwaysNormalize // 区分内部编译生成的 render 还是手写 render
) {
  // 对传入的参数做处理，如果没有 data，则将第三个参数作为第四个参数使用，往上类推
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }
  // 根据是 alwaysNormalize 区分是内部编译使用，还是用户手写 render 使用
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE
  }
  // 真正生成 Vnode 的方法
  return _createElement(context, tag, data, children, normalizationType)
}

// 4.3.1 数据规范检测
/*
Vue 既然暴露给用户用 render 函数去手写渲染模板，就需要考虑用户操作带来的不确定性，因此_createElement 在创建 Vnode 前会先数据的规范性进行检测，将不合法的数据类型错误提前暴露给用户。接下来将列举几个在实际场景中容易犯的错误，也方便我们理解源码中对这类错误的处理。
*/
/*
错误 1 用 Vue data 属性中响应式对象做 data 属性

new Vue({
  el: '#app',
  render: function (createElement, context) {
    return createElement('div', this.observeData, this.show)
  },
  data() {
    return {
      show: 'dom',
      observeData: {
        attr: {
          id: 'test'
        }
      }
    }
  }
})
*/

/*
错误 2 当特殊属性 key 的值为非字符串，非数字类型时

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement('div', { key: this.lists }, this.lists.map(l => {
      return createElement('span', l.name)
    }))
  },
  data() {
    return {
      lists: [{
        name: '111'
      }, {
        name: '222'
      }]
    }
  }
})
*/
// 这些规范都会在创建 Vnode 节点之前发现并报错
// 这些规范性检测保证了后续 Virtual DOM tree 的完整生成。
function _createElement(context, tag, data, children, normalizationType) {
  // 1 数据对象不能是定义在 Vue data 属性中的响应式数据
  if (isDef(data) && isDef(data.__ob__)) {
    warn(`Avoid using observed data object as vnode data: ${JSON.stringify(data)} \nAlways create fresh vnode data objects in each render!${context}`)
    return createEmptyVNode() // 返回注释结点
  }
  if (isDef(data) && isDef(data.is)) {
    tag = data.is
  }

  if (!tag) {
    // 防止动态组件：is 属性设置为 false 时，需要做特殊处理
    return createEmptyVNode()
  }

  // 2 key 值只能为 string、number 这些原始数据类型
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    warn(`Avoid using non-primitive value as key, use string/number value instead.${context}`)
  }
  // ... 省略一些代码
}

// 4.3.2 子节点 children 规范化
/*
Virtual DOM tree 是由每个 Vnode 以树状形式拼成的虚拟 DOM 树，我们在转换真实节点时需要的就是这样一个完整的 Virtual DOM tree，因此我们需要保证每一个子节点都是 Vnode 类型，这里分两种场景分析。

模板编译 render 函数，理论上 template 模板通过编译生成的 render 函数都是 Vnode 类型，但是有一个例外，函数式组件返回的是一个数组 (这个特殊例子，可以看函数式组件的文章分析), 这个时候 Vue 的处理是将整个 children 拍平成一维数组。
用户定义 render 函数，这个时候又分为两种情况，一个是当 chidren 为文本节点时，这时候通过前面介绍的 createTextVNode 创建一个文本节点的 VNode; 另一种相对复杂，当 children 中有 v-for 的时候会出现嵌套数组，这时候的处理逻辑是，遍历 children，对每个节点进行判断，如果依旧是数组，则继续递归调用，直到类型为基础类型时，调用 createTextVnode 方法转化为 Vnode。这样经过递归，children 也变成了一个类型为 Vnode 的数组。
*/
function _createElement() {
  // ... 省略一些代码
  if (normalizationType === ALWAYS_NORMALIZE) {
    // 用户定义 render 函数
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    // 模板编译生成的 render 函数
    children = simpleNormalizeChildren(children)
  }
}

// 处理编译生成的 render 函数
function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    // 子节点为数组时，进行拍平操作，压成一维数组
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 处理用户定义的 render 函数
function normalizeChildren(chidren) {
  // 递归调用，直到子节点是基础类型，则调用创建文本节点 Vnode
  return isPrimitive(chidren) 
    ? [createTextVNode(chidren)] 
    : Array.isArray(chidren)
      ? normalizeArrayChildren(chidren)
      : undefined
}

// 判断是否为基础类型
function isPrimitive(value) {
  return (typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean')
}

// 4.3.4 实际场景
/*
在数据检测和组件规范化后，接下来通过 new VNode() 便可以生成一棵完整的 VNode 树，注意在_render 过程中会遇到子组件，这个时候会优先去做子组件的初始化，这部分放到组件环节专门分析。我们用一个实际的例子，结束 render 函数到 Virtual DOM 的分析。
*/
/*
template 模板形式
const vm = new Vue({
  el: '#app',
  template: '<div><span>virtual dom</span></div>'
})

模板编译生成 render 函数
(function () {
  with(this) {
    return _c('div', [_c('span', [_v('virual dom')])])
  }
})

Virtual DOM tree 的结果（省略版）
{
  tag: 'div',
  children: [{
    tag: 'span',
    children: [{
      tag: undefined, 
      text: 'virtual dom'
    }]
  }]
}
*/
```

### 虚拟 Vnode 映射成真实 DOM

```js
/*
回到 updateComponent 的最后一个过程，虚拟的 DOM 树在生成 virtual dom 后，会调用 Vue 原型上_update 方法，将虚拟 DOM 映射成为真实的 DOM。从源码上可以知道，_update 的调用时机有两个，一个是发生在初次渲染阶段，另一个发生数据更新阶段。
*/
// 3.2实例挂载.js
// 4.3虚拟DOM的创建.js
updateComponent = function () {
  // render 生成虚拟 DOM，update 渲染真实 DOM
  vm._update(vm._render(), hydrating)
}
// vm._update 方法的定义在 lifecycleMixin 中。
function lifecycleMixin() {
  Vue.prototype._update = function (vnode, hydrating) {
    let vm = this
    let prevEl = vm.$el
    let prevVnode = vm._vnode // prevVnode 为旧 vnode 节点
    // 通过是否有旧节点判断是初次渲染还是数据更新
    if (!prevVnode) {
      // 初次渲染
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false)
    } else {
      // 数据更新
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
  }
}
/*
_update 的核心是__patch__方法，如果是服务端渲染，由于没有 DOM，_patch 方法是一个空函数，在有 DOM 对象的浏览器环境下，__patch__是 patch 函数的引用。
// 浏览器端才有DOM，服务端没有dom，所以patch为一个空函数
Vue.prototype.__patch__ = inBrowser ? patch : noop;
而 patch 方法又是 createPatchFunction 方法的返回值，createPatchFunction 方法传递一个对象作为参数，对象拥有两个属性，nodeOps 和 modules，nodeOps 封装了一系列操作原生 DOM 对象的方法。而 modules 定义了模块的钩子函数。
*/
let patch = createPatchFunction({ nodeOps: nodeOps, modules: modules})

// 将操作 dom 对象的方法合集做冻结操作
let nodeOps = Object.freeze({
  createElement,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  setStyleScope,
})
// 定义了模块的钩子函数
let platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

let modules = platformModules.concat(baseModules)
/*
真正的 createPatchFunction 函数有一千多行代码，这里就不方便列举出来了，它的内部首先定义了一系列辅助的方法，而核心是通过调用 createElm 方法进行 dom 操作，创建节点，插入子节点，递归创建一个完整的 DOM 树并插入到 Body 中。并且在产生真实阶段阶段，会有 diff 算法来判断前后 Vnode 的差异，以求最小化改变真实阶段。后面会有一个章节的内容去讲解 diff 算法。createPatchFunction 的过程只需要先记住一些结论，函数内部会调用封装好的 DOM api，根据 Virtual DOM 的结果去生成真实的节点。其中如果遇到组件 Vnode 时，会递归调用子组件的挂载过程，这个过程我们也会放到后面章节去分析。
*/
```

这一节分析了 `mountComponent` 的两个核心方法，`render` 和 `update`, 在分析前重点介绍了存在于 `JS` 操作和 `DOM` 渲染的桥梁：`Virtual DOM`。`JS` 对 `DOM` 节点的批量操作会先直接反应到 `Virtual DOM` 这个描述对象上，最终的结果才会直接作用到真实节点上。可以说，`Virtual DOM` 很大程度提高了渲染的性能。文章重点介绍了 `render` 函数转换成 `Virtual DOM` 的过程，并大致描述了`_update` 函数的实现思路。其实这两个过程都牵扯到组件，所以这一节对很多环节都无法深入分析，下一节开始会进入组件的专题。我相信分析完组件后，读者会对整个渲染过程会有更深刻的理解和思考。

## 组件基础剖析

组件是 `Vue` 的一个重要核心，我们在进行项目工程化时，会将页面的结构组件化。组件化意味着独立和共享，而两个结论并不矛盾，独立的组件开发可以让开发者专注于某个功能项的开发和扩展，而组件的设计理念又使得功能项更加具有复用性，不同的页面可以进行组件功能的共享。对于开发者而言，编写 `Vue` 组件是掌握 `Vue` 开发的核心基础，`Vue` 官网也花了大量的篇幅介绍了组件的体系和各种使用方法。这一节内容，我们会深入 `Vue` 组件内部的源码，了解**组件注册的实现思路，并结合上一节介绍的实例挂载分析组件渲染挂载的基本流程，最后我们将分析组件和组件之间是如何建立联系的**。我相信，掌握这些底层的实现思路对于我们今后在解决 `vue` 组件相关问题上会有明显的帮助。

### 组件注册

熟悉 `Vue` 开发流程的都知道，`Vue` 组件在使用之前需要进行注册，而注册的方式有两种，全局注册和局部注册。在进入源码分析之前，我们先回忆一下两者的用法，以便后续掌握两者的差异。

```js
/*
熟悉 Vue 开发流程的都知道，Vue 组件在使用之前需要进行注册，而注册的方式有两种，全局注册和局部注册。在进入源码分析之前，我们先回忆一下两者的用法，以便后续掌握两者的差异。
*/

// 5.1.1 全局注册
Vue.component('my-test', {
  template: '<div>{{test}}</div>',
  data() {
    return {
      test: 123
    }
  }
})

const vm = new Vue({
  el: '#app',
  template: '<div id="app"><my-test/></div>'
})
// 其中组件的全局注册需要在全局实例化 Vue 前调用 , 注册之后可以用在任何新创建的 Vue 实例中调用。

// 5.1.2 局部注册
const myTest = {
  template: '<div>{{test}}</div>',
  data() {
    return {
      test: 123
    }
  }
}

const vm = new Vue({
  el: '#app',
  component: {
    myTest
  }
})
// 当只需要在某个局部用到某个组件时，可以使用局部注册的方式进行组件注册，此时局部注册的组件只能在注册该组件内部使用。


// 5.1.3 注册过程
// 在简单回顾组件的两种注册方式后，我们来看注册过程到底发生了什么，我们以全局组件注册为例。它通过 Vue.component(name, {...}) 进行组件注册，Vue.component 是在 Vue 源码引入阶段定义的静态方法。

// 初始化全局 api
initAssetRegisters(Vue)

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]

function initAssetRegisters(Vue) {
  // 定义 ASSET_TYPES 中每个属性的方法，其中包括 component
  ASSET_TYPES.forEach(function (type) {
    // type: component directive filter
    Vue[type] = function (id, definition) {
      if (!definition) {
        // 直接返回注册组件的构造函数
        return this.options[type + 's'][id]
      }

      // ... 省略一些代码

      if (type === 'component') {
        // 验证 component 组件名字是否合法
        validateComponentName(id)
      }

      if (type === 'component' && isPlainObject(definition)) {
        // 组件名称设置
        definition.name = definition.name || id
        // Vue.extend() 创建子组件，返回子类构造器
        definition = this.options._base.extend(definition)
      }

      // 为 Vue.options 上的 component 属性添加子类构造器
      this.options[type + 's'][id] = definition
      return definition
    }
  })
}

/*
Vue.components 有两个参数，一个是需要注册组件的组件名，另一个是组件选项，如果第二个参数没有传递，则会直接返回注册过的组件选项。否则意味着需要对该组件进行注册，注册过程先会对组件名的合法性进行检测，要求组件名不允许出现非法的标签，包括 Vue 内置的组件名，如 slot, component 等。
*/
function validateComponentName(name) {
  if (!new RegExp((`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`)).test(name)) {
    // 正则判断检测是否为非法的标签
    warn(`Invalid component name: "${name}". Component names should conform to valid custom element name in html5 specification.`)
  }

  // 不能使用 Vue 自身自定义的组件名，如 slot component 不能使用 html 的保留标签，如 h1 svg
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(`Do not use built-in or reserved HTML elements as component id: ${name}`)
  }
}
/*
在经过组件名的合法性检测后，会调用 extend 方法为组件创建一个子类构造器，此时的 this.options._base 代表的就是 Vue 构造器。extend 方法的定义在介绍选项合并章节有重点介绍过，它会基于父类去创建一个子类，此时的父类是 Vue，并且创建过程子类会继承父类的方法，并会和父类的选项进行合并，最终返回一个子类构造器。

代码处还有一个逻辑，Vue.component() 默认会把第一个参数作为组件名称，但是如果组件选项有 name 属性时，name 属性值会将组件名覆盖。

总结起来，全局注册组件就是 Vue 实例化前创建一个基于 Vue 的子类构造器，并将组件的信息加载到实例 options.components 对象中。

接下来自然而然会想到一个问题，局部注册和全局注册在实现上的区别体现在哪里？我们不急着分析局部组件的注册流程，先以全局注册的组件为基础，看看作为组件，它的挂载流程有什么不同。
*/

```

### 组件 Vnode 创建

上一节内容我们介绍了 `Vue` 如何将一个模板，通过 `render` 函数的转换，最终生成一个 `Vnode tree` 的，在不包含组件的情况下，`_render` 函数的最后一步是直接调用 `new Vnode` 去创建一个完整的 `Vnode tree`。然而有一大部分的分支我们并没有分析，那就是遇到组件占位符的场景。执行阶段如果遇到组件，处理过程要比想像中复杂得多，我们通过一张流程图展开分析。

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/5.1.png)

```js
/*
上一节内容我们介绍了 Vue 如何将一个模板，通过 render 函数的转换，最终生成一个 Vnode tree 的，在不包含组件的情况下，_render 函数的最后一步是直接调用 new Vnode 去创建一个完整的 Vnode tree。然而有一大部分的分支我们并没有分析，那就是遇到组件占位符的场景。执行阶段如果遇到组件，处理过程要比想像中复杂得多，我们通过一张流程图展开分析。
*/

// 5.2.2 具体流程分析
// 我们结合实际的例子对照着流程图分析一下这个过程：
// 场景
Vue.component('test', {
  template: '<span></span>'
})
var vm = new Vue({
  el: '#app',
  template: '<div><test></test></div>'
})
// 父 render 函数
function () {
  with(this) {
    return _c('div', [_c('test')], 1)
  }
}

/*
Vue 根实例初始化会执行 vm.$mount(vm.$options.el) 实例挂载的过程，按照之前的逻辑，完整流程会经历 render 函数生成 Vnode, 以及 Vnode 生成真实 DOM 的过程。
render 函数生成 Vnode 过程中，子会优先父执行生成 Vnode 过程，也就是_c('test') 函数会先被执行。'test' 会先判断是普通的 html 标签还是组件的占位符。
如果为一般标签，会执行 new Vnode 过程，这也是上一章节我们分析的过程；如果是组件的占位符，则会在判断组件已经被注册过的前提下进入 createComponent 创建子组件 Vnode 的过程。
createComponent 是创建组件 Vnode 的过程，创建过程会再次合并选项配置，并安装组件相关的内部钩子 (后面文章会再次提到内部钩子的作用)，最后通过 new Vnode() 生成以 vue-component 开头的 Virtual DOM
render 函数执行过程也是一个循环递归调用创建 Vnode 的过程，执行 3，4 步之后，完整的生成了一个包含各个子组件的 Vnode tree
*/

// _createElement 函数的实现之前章节分析过一部分，我们重点看看组件相关的操作。
// 内部执行将 render 函数转化为 Vnode 的函数
function _createElement(context, tag, data, children, normalizationType) {
  // ... 省略一些代码

  if (typeof tag === 'string') {
    if (config.isReservedTag(tag)) {
      // 子结点的标签为普通的 html 标签，直接创建 Vnode
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context)
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // 子结点标签为注册过的组件标签名，则子组件 Vnode 的创建过程
      // 创建子组件 Vnode
      vnode = createComponent(Ctor, data, context, children, tag)
    }
  }
}

/*
config.isReservedTag(tag) 用来判断标签是否为普通的 html 标签，如果是普通节点会直接创建 Vnode 节点，如果不是，则需要判断这个占位符组件是否已经注册到，我们可以通过 context.$options.components[组件名] 拿到注册后的组件选项。如何判断组件是否已经全局注册，看看 resolveAsset 的实现。
*/
// 需要明确组件是否已被注册
function resolveAsset(options, type, id, warnMissing) {
  // 标签为字符串
  if (typeof id !== 'string') {
    return
  }

  // 这里是 options.component
  var assets = options[type]
  // 这里的分支分别支持大小写，驼峰的命名规范
  if (hasOwn(assets, id)) {
    return assets[id]
  }
  
  // camelized 驼峰化
  var camelizedId = camelize(id)
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId]
  }

  // PascalCase 帕斯卡命名法 下划线
  // capitalize 以大写字母写
  var PascalCaseId = capitalize(camelizedId)
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId]
  }

  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
  if (warnMissing && !res) {
    warn(`Failed to resolve ${type.slice(0, -1)}: ${id} ${options}`)
  }

  // 最终返回子类的构造器
  return res
}

// 拿到注册过的子类构造器后，调用 createComponent 方法创建子组件 Vnode
// 创建子组件过程
function createComponent(
  Ctor, // 子类构造器
  data,
  context, // vm 实例
  children, // 子结点
  tag, // 子组件占位符
) {
  // ... 省略一些代码
  // Vue.options 里的 _base 属性存储 Vue 构造器
  var baseCtor = context.$options._base

  // 针对局部组件注册场景
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor)
  }
  data = data || {}
  // 构造器配置合并
  resolveConstructorOptions(Ctor)
  // 挂载组件钩子
  installComponentHooks(data)

  // return a placeholder vnode
  var name = Ctor.options.name || tag
  // 创建子组件 vnode 名称以 vue-component- 开头
  var vnode = new VNode((`vue-component-${Ctor.cid}${name ? ("-" + name) : ''}`), data, undefined, undefined, undefined, context, { Ctor, propsData, listeners, tag, children}, asyncFactory)

  return vnode
}
/*
这里将大部分的代码都拿掉了，只留下创建 Vnode 相关的代码，最终会通过 new Vue 实例化一个名称以 vue-component- 开头的 Vnode 节点。其中两个关键的步骤是配置合并和安装组件钩子函数，选项合并的内容可以查看这个系列的前两节，这里看看 installComponentHooks 安装组件钩子函数时做了哪些操作。
*/
// 组件内部自带钩子
var componentVNodeHooks = {
  init: function init(vnode, hydrating) {},
  prepatch: function prepatch(oldVnode, vnode) {},
  insert: function insert(vnode) {},
  destroy: function destroy(vnode) {}
}

var hooksToMerge = Object.keys(componentVNodeHooks)
// 将 componentVNodeHooks 钩子函数合并到组件 data.hook 中
function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {})
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i]
    var existing = hooks[key]
    var toMerge = componentVNodeHooks[key]
    // 如果钩子函数存在，则执行 mergeHook 方法合并
    if (existing !== toMerge && !(existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}
function mergeHook(f1, f2) {
  // 返回一个依次执行 f1 f2 的函数
  var merged = function (a, b) {
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}
// 组件默认自带的这几个钩子函数会在后续 patch 过程的不同阶段执行，这部分内容不在本节的讨论范围。

// 5.2.3 局部注册和全局注册的区别
/*
在说到全局注册和局部注册的用法时留下了一个问题，局部注册和全局注册两者的区别在哪里。其实局部注册的原理同样简单，我们使用局部注册组件时会通过在父组件选项配置中的 components 添加子组件的对象配置，这和全局注册后在 Vue 的 options.component 添加子组件构造器的结果很相似。区别在于：

1. 局部注册添加的对象配置是在某个组件下，而全局注册添加的子组件是在根实例下。

2. 局部注册添加的是一个子组件的配置对象，而全局注册添加的是一个子类构造器。

因此局部注册中缺少了一步构建子类构造器的过程，这个过程放在哪里进行呢？ 回到 createComponent 的源码，源码中根据选项是对象还是函数来区分局部和全局注册组件，如果选项的值是对象，则该组件是局部注册的组件，此时在创建子 Vnode 时会调用 父类的 extend 方法去创建一个子类构造器。
*/
function createComponent (...) {
  // ... 省略一些代码
  var baseCtor = context.$options._base

  // 针对局部组件注册场景
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor)
  }
}
```

### 组件 Vnode 渲染真实 DOM

根据前面的分析，不管是全局注册的组件还是局部注册的组件，组件并没有进行实例化，那么组件实例化的过程发生在哪个阶段呢？我们接着看 `Vnode tree` 渲染真实 `DOM` 的过程。

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/20210404150056.png)

```js
// 5.3.2 具体流程分析
/*
1.经过 vm._render() 生成完整的 Virtual Dom 树后，紧接着执行 Vnode 渲染真实 DOM 的过程，这个过程是 vm.update() 方法的执行，而其核心是 vm.__patch__。
2.vm.__patch__内部会通过 createElm 去创建真实的 DOM 元素，期间遇到子 Vnode 会递归调用 createElm 方法。
3.递归调用过程中，判断该节点类型是否为组件类型是通过 createComponent 方法判断的，该方法和渲染 Vnode 阶段的方法 createComponent 不同，他会调用子组件的 init 初始化钩子函数，并完成组件的 DOM 插入。
4.init 初始化钩子函数的核心是 new 实例化这个子组件并将子组件进行挂载，实例化子组件的过程又回到合并配置，初始化生命周期，初始化事件中心，初始化渲染的过程。实例挂载又会执行 $mount 过程。
5.完成所有子组件的实例化和节点挂载后，最后才回到根节点的挂载。
__patch__核心代码是通过 createElm 创建真实节点，当创建过程中遇到子 vnode 时，会调用 createChildren,createChildren 的目的是对子 vnode 递归调用 createElm 创建子组件节点。
*/
// 创建真实 dom
function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
  // ... 省略一些代码
  // 递归创建子组件真实节点，直到完成所有子组件的渲染才进行根节点的真实节点插入
  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return
  }

  // ... 省略一些代码
  var children = vnode.children
  // ... 省略一些代码
  createChildren(vnode, children, insertedVnodeQueue)
  // ... 省略一些代码
  insert(parentElm, vnode.elm, refElm)
}

function createChildren(vnode, children, insertedVnodeQueue) {
  for (var i = 0; i < children.length; i++) {
    // 遍历子节点，递归调用创建真实 dom 节点的方法 - createElm
    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
  }
}
/*
createComponent 方法会对子组件 Vnode 进行处理中，还记得在 Vnode 生成阶段为子 Vnode 安装了一系列的钩子函数吗，在这个步骤我们可以通过是否拥有这些定义好的钩子来判断是否是已经注册过的子组件，如果条件满足，则执行组件的 init 钩子。

init 钩子做的事情只有两个，实例化组件构造器，执行子组件的挂载流程。(keep-alive 分支看具体的文章分析)
*/
function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  var i = vnode.data
  // 是否有钩子函数可以作为判断是否为 组件的唯一条件
  if (isDef(i = i.hook) && isDef(i = i.init)) {
    // 执行 init 钩子函数
    i(vnode, false)
  }
  // ... 省略一些代码
}

var componentVNodeHooks = function () { // ? 原文有误
  // 忽略 keepAlive 过程
  // 实例化
  var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance)
  // 挂载
  child.$mount(hydratinig ? vnode.elm : undefined, hydratinig)
}

function createComponentInstanceForVnode(vnode, parent) {
  // ... 省略一些代码
  // 实例化 Vue 子组件实例
  return new vnode.componentOptions.Ctor(options)
}
/*
显然 Vnode 生成真实 DOM 的过程也是一个不断递归创建子节点的过程，patch 过程如果遇到子 Vnode, 会优先实例化子组件，并且执行子组件的挂载流程，而挂载流程又会回到_render,_update 的过程。在所有的子 Vnode 递归挂载后，最终才会真正挂载根节点。
*/

```

### 建立组件联系

日常开发中，我们可以通过 `vm.$parent` 拿到父实例，也可以在父实例中通过 `vm.$children` 拿到实例中的子组件。显然，`Vue` 在组件和组件之间建立了一层关联。接下来的内容，我们将探索如何建立组件之间的联系。

不管是父实例还是子实例，在初始化实例阶段有一个 `initLifecycle` 的过程。这个过程会**把当前实例添加到父实例的 `$children` 属性中，并设置自身的 `$parent` 属性指向父实例。**举一个具体的应用场景：

```html
<div id="app">
    <component-a></component-a>
</div>
Vue.component('component-a', {
    template: '<div>a</div>'
})
var vm = new Vue({ el: '#app'})
console.log(vm) // 将实例对象输出
```

由于 `vue` 实例向上没有父实例，所以 `vm.$parent` 为 `undefined`，`vm` 的 `$children` 属性指向子组件 `componentA` 的实例。

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/20210404215420.png)

子组件 `componentA` 的 `$parent` 属性指向它的父级 `vm` 实例，它的 `$children` 属性指向为空

![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/20210404215425.png)

```js
// 5.4 建立组件联系
/*
日常开发中，我们可以通过 vm.$parent 拿到父实例，也可以在父实例中通过 vm.$children 拿到实例中的子组件。显然，Vue 在组件和组件之间建立了一层关联。接下来的内容，我们将探索如何建立组件之间的联系。

不管是父实例还是子实例，在初始化实例阶段有一个 initLifecycle 的过程。这个过程会把当前实例添加到父实例的 $children 属性中，并设置自身的 $parent 属性指向父实例。举一个具体的应用场景：
*/
// 源码解析如下：
function initLifecycle(vm) {
  var options = vm.$options
  // 子组件注册时，会把父组件的实例挂载到自身选项的 parent 上
  var parent = options.parent
  // 如果是子组件，并且该组件不是抽象组件时，将该组件的实例添加到父组件的 $parent 属性上，如果父组件是抽象组件，则一直往上层寻找，直到该父级组件不是抽象组件，并将该组件的实例添加到父组件的 $parent 属性
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }

  // 将自身的 $parent 属性指向父实例
  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm

  vm.$children = []
  vm.$refs = {}

  vm._watcher = null
  vm._inactive = null
  vm._directInactive = false
  // 该实例是否挂载
  vm._isMounted = false
  // 该实例是否被销毁
  vm._isDestroyed = false
  // 该实例是否正在销毁
  vm._isBeingDestroyed = false
}
// 最后简单讲讲抽象组件，在 vue 中有很多内置的抽象组件，例如 <keep-alive></keep-alive>,<slot><slot> 等，这些抽象组件并不会出现在子父级的路径上，并且它们也不会参与 DOM 的渲染。

```

### 小结

这一小节，结合了实际的例子分析了组件注册流程到组件挂载渲染流程，`Vue` 中我们可以定义全局的组件，也可以定义局部的组件，全局组件需要进行全局注册，核心方法是 `Vue.component`, 他需要在根组件实例化前进行声明注册，原因是我们需要在实例化前拿到组件的配置信息并合并到 `options.components` 选项中。注册的本质是调用 `extend` 创建一个子类构造器，全局和局部的不同是局部创建子类构造器是发生在创建子组件 `Vnode` 阶段。而创建子 `Vnode` 阶段最关键的一步是定义了很多内部使用的钩子。有了一个完整的 `Vnode tree` 接下来会进入真正 `DOM` 的生成，在这个阶段如果遇到子组件 `Vnode` 会进行子构造器的实例化，并完成子组件的挂载。递归完成子组件的挂载后，最终才又回到根组件的挂载。 有了组件的基本知识，下一节我们重点分析一下组件的进阶用法。

## 组件高级用法

我们知道，组件是 `Vue` 体系的核心，熟练使用组件是掌握 `Vue` 进行开发的基础。上一节中，我们深入了解了 `Vue` 组件注册到使用渲染的完整流程。这一节我们会在上一节的基础上介绍组件的两个高级用法：异步组件和函数式组件。

### 异步组件

使用场景

`Vue` 作为单页面应用遇到最棘手的问题是首屏加载时间的问题，单页面应用会把页面脚本打包成一个文件，这个文件包含着所有业务和非业务的代码，而脚本文件过大也是造成首页渲染速度缓慢的原因。因此作为首屏性能优化的课题，最常用的处理方法是对文件的拆分和代码的分离。按需加载的概念也是在这个前提下引入的。我们往往会把一些非首屏的组件设计成异步组件，部分不影响初次视觉体验的组件也可以设计为异步组件。这个思想就是**按需加载**。通俗点理解，按需加载的思想让应用在需要使用某个组件时才去请求加载组件代码。我们借助 `webpack` 打包后的结果会更加直观。

![image-20210404220644507](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/vue/20210404220645.png)

`webpack` 遇到异步组件，会将其从主脚本中分离，减少脚本体积，加快首屏加载时间。当遇到场景需要使用该组件时，才会去加载组件脚本。

先跳过

## 零散知识点

### UMD

[详解 AMD、CommonJS 和 UMD 模块化规范](https://blog.csdn.net/weixin_40817115/article/details/81229337)

- UMD：Universal Module Definition（通用模块规范）是由社区想出来的一种整合了 CommonJS 和 AMD 两个模块定义规范的方法。

- 用一个工厂函数来统一不同的模块定义规范。

- 原则

  + 所有定义模块的方法需要单独传入依赖
  + 所有定义模块的方法都需要返回一个对象，供其他模块使用

- 例子

  ```js
  // 利用 UMD 定义一个 toggler 模块
  (function (global, factory) {
    if (typeof exports === 'object' && typeof module !== undefined) {
      // 检查 CommonJS 是否可用
      module.exports = factory(require('jquery'))
    } else if (typeof define === 'function' && define.amd) {
      // 检查 AMD 是否可用
      define('toggler', ['jquery', factory])
    } else {
      // 两种都不能用，把模块添加到 JS 的全局命名空间中
      global.toggler = factory(global, factory)
    }
  })(this, function ($) {
    function init() {
  
    }
    return {
      init: init
    }
  })
  ```



### forin

[Why use Object.prototype.hasOwnProperty.call(myObj, prop) instead of myObj.hasOwnProperty(prop)?](https://stackoverflow.com/questions/12017693/why-use-object-prototype-hasownproperty-callmyobj-prop-instead-of-myobj-hasow)

[Object.prototype.hasOwnProperty.call()](https://blog.csdn.net/sd19871122/article/details/103866120)

[js 中 for-in 的坑](https://blog.csdn.net/wangpenglonton/article/details/79095011)

[JS 中三种主要的遍历对象的方法：for in、Object.keys、Object.getOwnProperty](https://blog.csdn.net/tomy123456123456/article/details/81633548)

[JS 中的 forEach,for in,for of 和 for 的遍历优缺点及区别](https://blog.csdn.net/weixin_34128411/article/details/94279246)

```js
for (const key in _from) {
  if (Object.hasOwnProperty.call(_from, key)) {
    to[key] = _from[key];
  }
}
```

### 偏函数

