# 2JS 基础语法

## JS 数据类型

### 简单数据类型

- Number
- String
- Boolean
- Null
- Undefined

### 复杂数据类型

通过 new 关键字创建的对象

- Object
- Array
- Date

### ES 6

- Symbol

## JS 数组

[JS 数组（Array）应用大全！！！](https://blog.csdn.net/T_SmileEyes/article/details/81104270)

[JS 几种数组遍历方式总结](https://blog.csdn.net/function__/article/details/79555301)

[JS 数组 Array 的全部方法汇总](https://blog.csdn.net/kongjunchao159/article/details/64914914)

### 增删改查（CRUD create read update delete）

### 增删

#### push

```js
// a.push(x)
// 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度，原数组发生改变。 
let a = [0]
let len = a.push(1, 'cs')
console.log(len) // 3
console.log(a) // [0, 1, "cs"]
```



#### pop

```js
// a.pop()
// 数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项，原数组发生改变。
// 如果原数组为空，则返回 undefined
let a = [0, 1, 'cs']
let res = a.pop()
console.log(res) // cs
console.log(a) // [0, 1]

let a = []
let res = a.pop()
console.log(res) // undefined
console.log(a) // []
```



#### shift

```js
// a.shift()
// 删除原数组第一项，并返回删除元素的值；
// 如果数组为空，则返回 undefined 。 
let a = [0, 1, 'cs']
let res = a.shift()
console.log(res) // 0
console.log(a) // [1, "cs"]

let a = []
let res = a.shift()
console.log(res) // undefined
console.log(a) // []
```

#### unshift

```js
// a.unshift(x)
// 将参数添加到原数组开头，并返回数组的长度 。
let a = [0, 1, 'cs']
let len = a.unshift(2, 'test')
console.log(len) // 5
console.log(a) // [2, "test", 0, 1, "cs"]
```

### 分离 连接 切开 拼接 合并

#### split

split 分离

```js
// str.split('分隔符')
// 字符串转数组，返回一个新的数组
// 传入参数作为分隔符
let str = '01cs'
let a = str.split("1")
console.log(a) // ["0", "cs"]
let b = str.split("")
console.log(b) // ["0", "1", "c", "s"]
```

#### toString

```js
// 将数组转换为字符串，用逗号,连接
let a = [0, 1, "cs", 2, "test"]
let str = a.toString()
console.log(a) // [0, 1, "cs", 2, "test"]
console.log(str) // 0,1,cs,2,test
```



#### join

join 连接

```js
// a.join('分隔符')
// join (separator): 将数组的元素组起一个字符串，以 separator 为分隔符，省略的话则用默认用 ' 逗号 ' 为分隔符，该方法只接收一个参数：即分隔符。
let a = [0, 1, "cs", 2, "test"]
let b = a.join()
console.log(b) // 0,1,cs,2,test
let c = a.join('-')
console.log(c) // 0-1-cs-2-test
```

#### slice

slice 切开

```js
// a.slice(起始下标, 结束下标)
// 返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice () 方法可以接受一或两个参数，即要返回项的起始和结束位置。
// 在只有一个参数的情况下， slice () 方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项 —— 但不包括结束位置的项。
// 当参数出现负数时，将负数加上原数组长度的值来替换该位置的数即可。
let a = [0, 1, 'cs']
let b = a.slice(1)
console.log(b) // [1, "cs"]
let c = a.slice(1, 2)
console.log(c) // [1]
let d = a.slice(0, -2)
console.log(d) // [0]
```

#### splice

splice 拼接

```js
// a.splice(起始下标, 要删除的元素数量, 向数组中添加的元素)
// splice(index,howmany,item1,.....,itemX)
// 参数 1 index: 必需。整数，规定添加 / 删除项目的位置，使用负数可从数组结尾处规定位置。
// 参数 2 howmany: 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// 参数 3 item: 可选。向数组添加的新项目。

// 删除
let a = [0, 1, "cs", 2, "test"]
a.splice(1, 2)
console.log(a) // [0, 2, "test"]

// 插入
let a = [0, 1, "cs", 2, "test"]
a.splice(1, 0, '插入', 'hi')
console.log(a) // [0, "插入", "hi", 1, "cs", 2, "test"]

// 替换
let a = [0, 1, "cs", 2, "test"]
a.splice(1, 2, '替换', 'h')
console.log(a) // [0, "替换", "h", 2, "test"]

```

#### concat

concat 合并

```js
// a.concat(x)
// 将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat () 方法传递参数的情况下，它只是复制当前数组并返回副本。
let a = [0, 1, 'cs']
let b = a.concat(2, 'test')
console.log(a) // [0, 1, "cs"]
console.log(b) // [0, 1, "cs", 2, "test"]
```

### 查找

#### indexOf

```js
// a.indexOf(要查找的元素, 查找的起点)
// 接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。 
// 返回要查找的项在数组中的位置，或者在没找到的情况下返回 - 1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
let a = [0, 1, "cs", 2, "test"]
console.log(a.indexOf('cs')) // 2
console.log(a.indexOf('cs', 3)) // -1
// 从下标 3 处开始向后查找
```

#### lastIndexOf

```js
// a.lastIndexOf(要查找的元素, 查找的起点)
// 接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
// 返回要查找的项在数组中的位置，或者在没找到的情况下返回 - 1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
let a = [0, 1, "cs", 2, "test"]
console.log(a.lastIndexOf('cs', 2)) // 2
console.log(a.lastIndexOf('cs', 1)) // -1
// 从下标 1 处开始向前查找
```

#### findIndex

```js
// 用回调函数遍历数组，直到回调函数返回true，则返回相应的索引，如果一直没有，则返回-1
let a = [0, 1, "cs", 2, "test"]
let res = a.findIndex((item) => {
  return typeof item === 'string'
})
console.log(res) // 2
```



### 排序反转

#### sort

```js
// a.sort(cmp)
// 按升序排列数组项 ---- 即最小的值位于最前面，最大的值排在最后面 (比较的是 ASCII 码表的值)
// 返回排序后的数组，原数组随之改变
let a = [2, "test", 0, 1, "cs", 10]
a.sort()
console.log(a) // [0, 1, 10, 2, "cs", "test"]
// 在排序时，sort() 方法会调用每个数组项的 toString () 转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort () 方法比较的也是字符串
// sort () 方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。
// 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数

function cmp(a, b) {
  if (typeof a === 'number' && typeof b === 'string') {
    return -1
  } else if (typeof a === 'string' && typeof b === 'number') {
    return 1
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  } else {
    return a > b ? 1 : -1
  }
}
let a = [2, 0, 'z', 'cs', 1, 10, "test"]
let b = a.sort(cmp)
console.log(b) // [0, 1, 2, 10, "cs", "test", "z"]
console.log(a) // [0, 1, 2, 10, "cs", "test", "z"]
```

#### reverse

```js
// a.reverse()
// 反转数组项的顺序
// 返回 reverse 之后的新数组，原数组随之改变
let a = [0, 1, 'cs']
let b = a.reverse()
console.log(b) // ["cs", 1, 0]
console.log(a) // ["cs", 1, 0]
```

### 遍历

#### forEach

```js
// a.forEach((item, index, items) => {})
// forEach ()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是 function 类型，默认有传参
/* 参数 1：遍历的数组内容 item
 * 参数 2：对应的数组索引 index
 * 参数 3：数组本身 items
 */
let a = ["cs", 2, "test"]
a.forEach((item, index, a) => {
  console.log(item, index, a)
});
// cs   0 ["cs", 2, "test"]
// 2    1 ["cs", 2, "test"]
// test 2 ["cs", 2, "test"]
```

#### fill

```js
// fill(val, start, end)方法用于填充数组，
// 第一个参数为值，第二个参数为开始位置索引，第三个参数为结束位置索引
let a = [0, 1, "cs", 2, "test"]
a.fill('fill', 1, 4)
console.log(a) // [0, "fill", "fill", "fill", "test"]
```



#### every

```js
// a.every((item) => {return bool})
// 判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。
let a = [0, 1, "cs"]
let res = a.every((item) => {
  return typeof item === 'number'
})
console.log(res) // false

let a = [0, 1]
let res = a.every((item) => {
  return typeof item === 'number'
})
console.log(res) // true
```

#### some

```js
// a.some((item) => {return bool})
// 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true
let a = [0, 1, "cs"]
let res = a.some((item) => {
  return typeof item === 'number'
})
console.log(res) // true

let a = ['cs', 'test']
let res = a.some((item) => {
  return typeof item === 'number'
})
console.log(res) // false
```

#### filter

```js
// a.filter((item) => {return bool})
// “过滤” 功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
let a = [0, 1, "cs", 2, "test"]
let b = a.filter(item => {
  return typeof item === 'number'
})
console.log(b) // [0, 1, 2]
```

#### map

```js
// a.map((item) => {return x})
// 指 “映射”，对数组中的每一项运行给定函数，每次函数调用返回的结果组成新的数组。
let a = [0, 1]
let b = a.map(item => {
  return item + 10
})
console.log(b) // [10, 11]
```

#### reduce

```js
// a.reduce((pre, cur, index, items) => {return x}, init)
// 从数组的第一项开始，逐个遍历到最后，然后构建一个最终返回的值
// 接收两个参数：一个在每一项上调用的函数，和（可选的）作为归并基础的初始值。
// 函数参数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
let price = [5, 10, 15]
let a = [1, 2, 10]
let res = a.reduce((pre, cur, index, items) => {
  console.log(pre, cur, index, items)
  return pre + cur * price[index]
}, 100)
console.log(res) // 275
// 100 1 0 [1, 2, 10]
// 105 2 1 [1, 2, 10]
// 125 10 2 [1, 2, 10]
```

#### reduceRight

```js
// a.reduceRight((pre, cur, index, items) => {return x}, init)
// 从数组的最后一项开始，向前遍历到第一项
let price = [5, 10, 15]
let a = [1, 2, 10]
let res = a.reduceRight((pre, cur, index, items) => {
  console.log(pre, cur, index, items)
  return pre + cur * price[index]
}, 100)
console.log(res) // 275
// 100 10 2 [1, 2, 10]
// 250 2 1 [1, 2, 10]
// 270 1 0 [1, 2, 10]

// 反转字符串
let str = Array.prototype.reduceRight.call('12345', (pre, cur) => {
  return pre + cur
})
console.log(str) // 54321
```

## 原型链

### 创建对象

- 对象字面量

- new Object()

- 自定义构造函数 - 在 ES6 之前，对象不是基于类创建的，而是使用构造函数来定义对象

  ```js
  // 对象字面量
  let obj1 = {}
  
  // new Object()
  let obj2 = new Object()
  
  // 自定义构造函数
  function Star(uname, age) {
    this.uname = uname
    this.age = age
    this.sing = function () {
      console.log('sing')
    }
  }
  var ldh = new Star('ldh', 18)
  var zxy = new Star('zxy', 19)
  ```

### 构造函数

- 特殊函数，用来初始化对象，即为对象成员变量赋初始值
- 把对象中一些公共的属性和方法抽取出来，然后封装进这个函数中
- 要与 new 一起使用才有意义

### 静态成员和实例成员

- 静态成员

  在构造函数本身上添加的成员，只能由构造函数本身来访问

- 实例成员

  在构造函数内部创建的对象成员，只能由实例化的对象来访问

  就是在构造函数内部通过 this 添加的成员

### 原型对象

- 简介

  + 构造函数方法很好用，但存在浪费内存的问题（本来相同的方法或属性，每次创建一个对象，就要多占用一块内存）
+ 构造函数通过原型对象，来实现数据共享

- 原型对象
  + 把那些不变的方法，直接定义在原型对象上，实现共享

- prototype 
  + 每个构造函数都有一个 prototype 属性，指向另一个对象（原型对象）
  + 原型对象，其所有属性和方法，都会被构造函数通过 prototype 属性所指向

```js
Star.prototype.sing = function () {
  console.log('prototype sing')
}
// Star.prototype 就是一个对象
```

### 对象原型 \_\_proto\_\_

- 对象都会有一个属性 \_\_proto\_\_ 指向原型对象，之所以实例化对象能使用构造函数 prototype 原型对象的属性和方法，就是因为其有 \_\_proto\_\_ 的存在
- 实例化对象的 \_\_proto\_\_ 和 构造函数的 prototype 都指向原型对象

### constructor

- 对象原型\_\_proto\_\_ 和 构造函数的 \_\_prototype\_\_（就是原型对象） 里面都有一个 constructor 属性，指向构造函数本身

- constructor 用于记录该对象引用于哪个构造函数

- 很多情况下，需要手动利用 constructor 属性指回原来的构造函数

  ```js
  // 重新赋值，覆盖了原型对象（原型对象中，原有的 constructor 被覆盖），需要利用 constructor 指回原来的构造函数
  Star.prototype = {
    constructor: Star,
    sing: function () {
      console.log('sing')
    }
  }
  ```

### 构造函数，实例对象，原型对象

![image-20210315170548648](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/image-20210315170548648.png)

### 原型链

![image-20210315171237927](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/image-20210315171237927.png)

### JS 成员查找机制

- 当访问一个对象的属性时，首先查找这个对象自身有没有该属性
- 如果没有就查找它的原型（也就是 \_\_proto\_\_ 指向的 prototype 原型对象）
- 如果还没有就查找原型对象的原型（Object 的原型对象）
- 以此类推一直找到 Object 为止（null）

### 扩展内置对象

- 可以通过原型对象，对原来的内置对象进行扩展自定义的方法

  ```js
  Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
      sum += this[i]
    }
    return sum;
  }
  let arr = [1, 2, 3]
  console.log(arr.sum()) // 6
  ```

## JS 继承

[再说说__proto__和 prototype 以及 js 的继承](https://blog.csdn.net/weixin_33753845/article/details/93709774)

[js 如何实现一个继承？手写一个 js 继承](https://blog.csdn.net/qq_40028324/article/details/103391437)

[JS 中继承的几种方式](https://blog.csdn.net/Liu_yunzhao/article/details/90116723)

### 原型链继承

```js
//1.
Son.prototype = Father.prototype
/**
 * 弊端：Son.prototype.constructor 指向Father,需要手动更改为Son ；
 Son的实例化对象只能继承Father原型中的方法，无法继承Father本身的属性。
 给 Son 单独添加原型方法时，Father 中的原型方法也会一起更改
 */
 
//2.
Son.prototype = new Father()
/**
 * 弊端：Son.prototype.constructor 指向Father,需要手动更改为Son；
 Son的实例化对象共享Father自身的引用类型属性。
 */
 
// 举个例子
function Father () { 
  this.name = "smd"; 
  this.arr = [1, 2, 3] 
}
 
function Son () { }
 
Son.prototype = new Father()
 
var s1 = new Son(), s2 = new Son();
 
s1.arr.push(4);
 
console.log(s1.arr) //--------> [1,2,3,4]
 
console.log(s2.arr) //--------->[1,2,3,4]
// Son的实例化对象s1,s2继承了Father的属性arr,但是s1,s2是同时指向这一属性的。
```



### 构造继承

```js

function Father () {
  this.name = "smd";
  this.age = 26
};
 
function Son () {
  Father.call(this)
  // Father.apply(this) 
}
 
// 弊端：Son只能继承Father自身的属性，而无法继承Father原型中的方法。
```



### 组合继承

#### call

- 调用 call 函数，可以调用函数，并修改函数运行时的 this 指向

  ```js
  fun.call(thisArg, arg1, arg2)
  thisArg 当前调用函数 this 的指向对象
  arg1, arg2 传递的其他参数
  
  function fn(x, y) {
    console.log(this)
    console.log(x + y)
  }
  
  let obj = {
    name: 'obj',
  }
  
  fn(1, 2) // Window 3
  fn.call(obj, 2, 3) // obj 5
  ```

#### 组合继承


- ES6 之前没有提供 extends 继承，可以通过构造函数+原型对象模拟实现继承，被称为组合继承

- 核心原理：通过 call() 把父类型的 this 指向子类型的 this，这样就能实现子类型继承父类型的属性

- 通过构造函数继承父类型的属性，通过原型对象继承父类型的方法

  ```js
  // 借用父构造函数实现继承
  // 父构造函数
  function Father(uname, age) {
    this.uname = uname
    this.age = age
    // 父原型
    Father.prototype.money = function () {
      console.log(100)
    }
  }
  
  // 子构造函数
  function Son(uname, age, score) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age)
    // Son.prototype = Father.prototype
    // 直接让两个原型对象相等，改变 Son 的原型对象后，Father 的原型对象也会改变
    // 父类要 new 一个
    Son.prototype = new Father()
  
    // 子类专门的属性
    this.score = score
    // 子类专门的方法
    Son.prototype.exam = function () {
      console.log('exam')
    }
    // 修改子类原型对象中的 constructor 的指向
    Son.prototype.constructor = Son
  }
  
  let son = new Son('son', 18, 98)
  console.log(son)
  ```

### 原型继承

```js
function createObj (o) {
  function F () { }
  F.prototype = o;
  return new F()
}
 
var obj = { name: "smd", age: 26, sayHi: function () { } }
 
var newObj = createObj(obj);
// newObj继承了obj的属性和方法，但是同样出现了共享父类中引用类型属性的问题
```



### 经典继承

```js
function create (obj) {
  if (Object.create) {
    return Object.create(obj)
  } else {
    function F () { } F.prototype = o; return new F()
  }
}
 
// 存在兼容问题，需要做浏览器的能力检查
```



### 寄生式继承

```js
function createObj (o) {
  function F () { }
  F.prototype = o;
  return new F()
}
 
function createObj2 (o) {
  var obj = createObj(o);
  obj.sayHi = function () { }
  return obj
}
 
var obj = { name: "smd", age: 26, sayHi: function () { } }
 
var newObj = createObj2(obj)
 
// newObj继承了obj的属性和方法，但是同样出现了共享父类中引用类型属性的问题。
```



### 寄生组合式继承

```js

function inheritPrototype (Child, Father) {
  var prototype = object(Father.prototype);//创建对象
  prototype.constructor = Child;//增强对象
  Child.prototype = prototype;//指定对象 
}

function Father (name) {
  this.name = name;
  this.arr = [1, 2, 3, 4];
}

Father.prototype.sayName = function () {
  console.log("父类原型" + this.name);
}

function Child (name, age) {
  Father.call(this, name);
  this.age = age;
}
inheritPrototype(Child, Father)
Child.prototype.sayAge = function () {
  console.log(this.age);
}

var child1 = new Child(), child2 = new Child();

child1.arr.push(5) // [1,2,3,4,5]


child2.arr // [1,2,3,4].

// 优点：可以多重继承 解决两次调用 解决实例共享引用类型的问题 原型链保持不变
```



## JS 类

### 类

```js
class Star {
  constructor(uname, age) {
    this.uname = uname
    this.age = age
  }
  sing(song) {
    console.log(this.uname + " sing "+ song)
  }
}

let ldh = new Star('ldh', 18)
ldh.sing('冰雨')
```

### 继承

```js
class Father {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  sum() {
    console.log(this.x + this.y)
  }
}

class Son extends Father {
  constructor(x, y) {
    super(x, y)
  }
}

let son = new Son(1, 2)
son.sum() // 3
```

## JS 闭包

[深入理解 JS 闭包](https://blog.csdn.net/cauchy6317/article/details/81167572)

[JavaScript 之闭包，给自己的 Js 一场重生（系列七）](https://blog.csdn.net/jbj6568839z/article/details/106940646)

- 简介

  模块化进化史

  全局 function 模式（将不同的功能封装成不同的全局函数） - namespace 模式（简单对象封装）-IIFE 模式（匿名函数自调用-匿名闭包函数）-IIFE 模式增强（引入依赖）-模块化（commonjs ES6 CMD AMD）

- 闭包
  - 闭包就是能够读取其他函数内部变量的函数，在本质上是函数内部和函数外部链接的桥梁 -1可以在函数的外部访问到函数内部的局部变量。 
    2让这些变量始终保存在内存中，不会随着函数的结束而自动销毁。
  - 一个闭包是一个可以自己拥有独立的环境与变量的的表达式（通常是函数，因为 ES6 有了块级作用域的概念）
  - 函数内的所有内部函数都共享一个父作用域，因此创建的闭包是共用的。
  - 利用闭包隔离作用域的特性可以解决共享作用域的问题

- 那我可以理解成，ES6 前，只有函数作用域，没有块级作用域的概念，为了解决这个问题，出现了闭包吗？- let 的出现



我对闭包的理解：

1. 一个闭包是一个可以自己拥有独立的环境与变量的的表达式，利用闭包隔离作用域的特性可以解决共享作用域的问题

   ```js
   var elements=document.getElementsByTagName('li');
       var length=elements.length;
       for(var i=0;i<length;i++){
           elements[i].onclick=function(num){
           return function() {
                   alert(num);
           };
       }(i);
   }
   ```

   

2. 闭包就是能够读取其他函数内部变量的函数，在本质上是函数内部和函数外部链接的桥梁

   + 可以在函数的外部访问到函数内部的局部变量。 
   + 让这些变量始终保存在内存中，不会随着函数的结束而自动销毁。

   ```js
   function foo(params) {
       let a = '余光';
   
       function bar() {
           console.log(a);
       }
       return bar;
   }
   
   let res = foo();
   res(); // 余光
   ```

   