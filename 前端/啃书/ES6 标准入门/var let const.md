# var let const

## let

### 作用域

```js
// 所声明的变量只在 let 命令所在的代码块内有效
{
  let a = 10
  var b = 1
}
console.log(b) // 1
console.log(a) // ReferenceError: a is not defined


var arr = []
for (var i = 0; i < 10; i++) {
  // var 声明的 i 在全局范围内都有效
  // 全局只有一个变量 i，每次循环 i 的值都会发生改变
  arr[i] = function () {
    console.log(i)
  }
}
arr[6]() // 10

var arr = []
for (let i = 0; i < 10; i++) {
  // let 声明的 i 仅在块级作用域内有效
  // 当前的 i 只在本轮循环有效，每次循环的 i 其实都是一个新的变量
  // JS 引擎内部会记住上一轮循环的值
  // 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
  arr[i] = function () {
    console.log(i)
  }
}
arr[6]() // 6

// 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
for (let i = 0; i < 10; i++) {
  let i = '正确'
  console.log(i) // 正确 * 10
}
```

### 变量提升

```js
// var 声明会发生变量提升
// 即脚本开始运行时，变量 a 便已经存在，但没有值
console.log(a) // undefined
var a = 2

// let 声明不会发生变量提升
console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b = 2
```

### 暂时性死区

```js
// 只要块级作用域内存在 let 命令，它所声明的变量就“绑定”这个区域，不再受外部的影响
var tmp = 123

if (true) {
  tmp = 'abc'
  let tmp // ReferenceError: Cannot access 'tmp' before initialization
}
// 存在全局变量 tmp，但块级作用域内 let 声明了一个局部变量 tmp，就导致 tmp 绑定这个块级作用域了

// 如果区域中存在 let const 命令，则这个区域对这些命令声明的变量从一开始就形成封闭作用域，只要在声明之前使用这些变量，就会报错
// 即，在 let const 命令声明变量之前，该变量都是不可用的，这在语法上称为“暂时性死区”（temporal dead zone，简称TDZ）
if (true) {
  // TDZ 开始
  tmp = 'abc' // ReferenceError: Cannot access 'tmp' before initialization
  console.log(tmp) // ReferenceError
  // TDZ 结束
  let tmp
  console.log(tmp) // undefined
  tmp = 123
  console.log(tmp) // 123
}

// 暂时性死区的本质是：只要进入当前作用域，所要使用的变量就已经存在（let const 声明过），但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

function bar(x = y, y = 2) { 
  return [x, y]
}
bar()
// ReferenceError: Cannot access 'y' before initialization
// 参数 x 的默认值等于另一个参数 y，而此时 y 还没有声明，属于“死区”

function bar(x = 2, y = x) { 
  return [x, y]
}
console.log(bar()) // [ 2, 2 ]
// 这样就不会报错了，因为此时 x 已经声明


let x = x // ReferenceError: Cannot access 'x' before initialization
// 使用 let 声明变量时，只要变量在还没有声明前使用，就会报错
// 在变量 x 的声明语句还没有执行完成前，就尝试获取 x 的值，导致出现“x 未定义”的错误

console.log(tmp) // undefined
var tmp = 123

var tmp = 123
console.log(tmp) // 123

tmp = 123
console.log(tmp) // 123

// 没有var关键字，变量的声明不会提前，没有”预编译”的过程
console.log(tmp) // ReferenceError: tmp is not defined
tmp = 123



```

[使用 var 和不使用 var 的区别 (全局变量 / 局部变量)](https://blog.csdn.net/czh500/article/details/80429133)

### 不允许重复声明

```js
function fn() {
  let a = 10
  var a = 10 // SyntaxError: Identifier 'a' has already been declared
}

function fun(arg) {
  let arg // SyntaxError: Identifier 'a' has already been declared
}


function fun(arg) {
  {
    let arg // 不报错
  }
}
```

## 块级作用域

```js
// 场景一
var tmp = 1
function fn() { // 函数作用域
  console.log(tmp) // var 定义的 tmp 变量提升（if 作用块无法阻止）
  if (false) {
    var tmp = 'ab'
  }
}
fn() // undefined

// 与 let 相比
var tmp = 1
function fn() {
  console.log(tmp)
  if (false) { 
    let tmp = 'ab'
  }
}
fn() // 1

// 场景二
var s = '123'
for (var i = 0; i < s.length; i++) {
  console.log(s[i])
}
console.log(i) // 3
// 循环结束后，循环变量 i 泄露成全局变量

```

let 实际上为 JS 新增了块级作用域

ES6 允许块级作用域的任意嵌套

外层作用域无法读取内层作用域的变量

内层作用域可以定义外层作用域的同名变量

```js
// 外层作用域无法读取内层作用域的变量
{
  {
    let a = '12'
  }
  console.log(a) // ReferenceError: a is not defined
}

// 内层作用域可以定义外层作用域的同名变量
{
  {
    let a = '12'
    {
      let a = 1
    }
  }
}

// 立即执行匿名函数(IIFE) 就没必要了
(function () {
  var tmp = 1
})()

{
  let tmp = 2
}
```

### 块级作用域与函数声明