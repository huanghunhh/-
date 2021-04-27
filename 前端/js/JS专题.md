# JS 专题

[冴羽的博客](https://github.com/mqyqingfeng/Blog)

## 作用域

作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域 (lexical scoping)，也就是静态作用域。

因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了，决定了变量查找的顺序，这个顺序是从函数内部开始，然后到函数定义的外层。

而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

```js
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar(); // 1

// 词法作用域
// 执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。

// 动态作用域
// 执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。

// 我有一点想不通，在读作者 执行上下文的文章，感觉执行上下文是在函数调用时准备的，作用域规定了如何查找变量。可是查找的变量是通过执行上下文中的变量对象和作用域链查找的，这是动态作用域的原理啊，为什么 JS 又是静态作用域了。
// 动态作用域和静态作用域，决定的是作用域链的顺序
```

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```



## 执行上下文

[详解 JS 执行上下文 (执行环境)](https://blog.csdn.net/weixin_44989478/article/details/109066482)

[js 中的执行上下文](https://blog.csdn.net/Merciwen/article/details/73350240)

[说说 JS 的执行上下文](https://blog.csdn.net/qqchenyufei/article/details/82795713)

[前端进阶系列 (七): 什么是执行上下文？什么是调用栈？](https://blog.csdn.net/weixin_33916256/article/details/88730659)

- JS 中代码的运行环境

  每当控制器转到可执行代码的时候，就会进入一个执行上下文（Execution Context 简称 EC），执行上下文可以理解为当前代码的执行环境，它会形成一个作用域

  + 全局环境

    默认的代码运行环境，一旦代码被载入，引擎最先进入的就是这个环境

  + 函数环境

    当执行一个函数时，运行函数体中的代码

  + Eval 的代码

    在 Eval 函数内运行的代码

  在一个 JS 程序中，必定会产生多个执行上下文，JS 引擎会以堆栈（执行上下文栈 Execution Context Stack 简称ECS）的方式来处理它们，栈底永远都是全局上下文，而栈顶就是当前正在执行的上下文

  当代码在执行过程中，遇到以上三种情况，都会生成一个执行上下文，放入栈中，而处于栈顶的上下文执行完毕后，就会自动出栈

- 过程举例

  ![image-20210327232825362](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/image-20210327232825362.png)

  ![image-20210327233026534](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/image-20210327233026534.png)

- 上下文的创建过程（在 JS 引擎内部）

  + 建立阶段

    发生在调用一个函数时，但是在执行函数体内的具体代码前

    * 建立变量对象（Variable Object 简称VO）（arguments 对象、参数、函数、变量）
    * 建立作用域链（ScopeChain）（保存着此 EC 中的 VO 与其他 EC 中的 VO 的关联关系-能否访问到）
    * 确定 this 的值

  + 代码执行阶段

    * 变量赋值，函数引用，执行其他代码

  可以把执行上下文看作一个对象，其包含以下三个属性

  ```js
  executionContextObj = {
  	variableObject: {
  		// 函数中的 arguments 对象，参数，函数声明以及内部的变量
  	},
  	scopeChain: {
  		// variableObject 以及所有父执行上下文中的 variableObject
      // 保存着此 EC 中的 VO 与其他 EC 中的 VO 的关联关系-能否访问到
      // 当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级 (词法层面上的父级) 执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
      // 此时执行上下文中没有的 VO 能顺着作用域链来寻找
  	},
  	this: {
  		
  	}
  }
  // 执行上下文对象（executionContextObj）是在函数被调用时，但是在函数体被真正执行以前创建的
  ```

- 详细的创建过程

  1. 找到当前上下文中的调用函数的代码
	
  2. 在执行被调用的函数体中的代码以前，开始创建执行上下文
	
  3. 进入第一阶段-建立阶段

     + 建立 variableObject 对象
  
       建立 arguments 对象，检查当前上下文中的参数，建立该对象下的属性以及属性值
  
       检查当前上下文中的函数声明：每找到一个函数声明，就在 variableObject 下面用函数名建立一个属性，属性值就是指向该函数在内存中的地址的一个引用。如果上述函数名已经存在于 variableObject  下，那么对应的属性值就会被新的引用所覆盖
  
       检查当前上下文中的变量声明：每找到一个变量的声明，就在 variableObject  下，用变量名建立一个属性，属性值为 undefined。如果该变量名已经存在于 variableObject  属性中，直接跳过（防止指向函数的属性的值被变量属性覆盖为 undefined），原属性值不会被修改
  
       注意：在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
  
     + 初始化作用域链
  
     + 确定上下文中 this 的指向对象
  
  4. 进入第二阶段-代码执行阶段
  
     执行函数体中的代码，一行一行地运行代码，给 variableObject  中的变量属性赋值
  
   ```js
  // 代码
  function foo(i) {
    var a = 'hello'
    var b = function privateB() {
  
    }
    function c() {
  
    }
  }
  foo(22)
  
  // 建立阶段
  fooExecutionContext = {
    variableObject: {
      arguments: {
        0: 22,
        length: 1
      },
      i: 22,
      c: pointer to function c(),
      a: undefined,
      b: undefined
    },
    scopeChain: {},
    this: {}
  }
  // 在建立阶段，除了 arguments，函数的声明，以及参数被赋予了具体的属性值，其它的变量属性默认的都是 undefined。
  // 只有在代码执行阶段，变量属性才会被赋予具体的值。
   ```
  
  建立示例见[JavaScript 深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
  
- 局部变量作用域提升

  ```js
  // 在函数中声明的变量以及函数，其作用域提升到函数顶部，换句话说，就是一进入函数体，就可以访问到其中声明的变量以及函数
  (function() {
    console.log(typeof foo) // function
    console.log(typeof bar) // undefined
  
    var foo = 'hello'
    var bar = function() {
      return 'world'
    }
    function foo() {
      return 'hello'
    }
  }())
  
  ```

  + 可以在声明 foo 变量前就能访问到 foo

    在上下文的建立阶段，先是处理 arguments, 参数，接着是函数的声明，最后是变量的声明。那么，发现 foo 函数的声明后，就会在 variableObject 下面建立一个 foo 属性，其值是一个指向函数的引用。当处理变量声明的时候，发现有 var foo 的声明，但是 variableObject 已经具有了 foo 属性，所以直接跳过。当进入代码执行阶段的时候，就可以通过访问到 foo 属性了，因为它已经就存在，并且是一个函数引用。

  + bar 是 undefined

    bar 是变量的声明，在建立阶段的时候，被赋予的默认的值为 undefined。由于它只要在代码执行阶段才会被赋予具体的值，所以，当调用 typeof (bar) 的时候输出的值为 undefined。

- 作用域链与闭包

  ```js
  var fn = null
  function foo() {
    var a = 2
    function innerFoo() {
      console.log(a)
    }
    fn = innerFoo // 将 innerFoo 的引用，赋值给全局变量中的 Fn
  }
  
  function bar() {
    fn() // 此处保留了 innerFoo 的引用
  }
  
  foo()
  bar() // 2
  // 在上面的例子中，foo () 执行完毕之后，按照常理，其执行环境生命周期会结束，所占内存被垃圾收集器释放。但是通过 fn = innerFoo，函数 innerFoo 的引用被保留了下来，复制给了全局变量 fn。这个行为，导致了 foo 的变量对象，也被保留了下来。于是，函数 fn 在函数 bar 内部执行时，依然可以访问这个被保留下来的变量对象。所以此刻仍然能够访问到变量 a 的值。
  
  // 这样，我们就可以称 foo 为闭包。
  ```

- this 的指向
  + this 的指向，是在函数被调用的时候确定的。也就是执行上下文被创建时确定的。一个函数由于调用方式的不同，this 指向了不一样的对象，在函数执行过程中，this 一旦被确定，就不可更改了。
  + 在一个函数上下文中，this 由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的 this 指向该对象。如果函数独立调用，那么该函数内部的 this，则指向 undefined。但是在非严格模式中，当 this 指向 undefined 时，它会被自动指向全局对象。
  + 可以使用 call，apply 显式指定 this。
+ setTimeout，setInterval 的回调函数中，this 指向 window。
  + 即，哪个对象调用的方法（object.method ()），this 就指向谁；独立调用时，指向 window（严格模式下指向 undefined）；通过 call，apply，bind 可以显示指定 this。
  
- 案例

  ```js
  // 变量提升
  var foo = function () {
    console.log('foo1')
  }
  foo() // foo1
  
  var foo = function () {
    console.log('foo2')
  }
  foo() // foo2
  
  // 函数提升
  function foo() {
    console.log('foo1')
  }
  foo() // foo2
  
  function foo() {
    console.log('foo2')
  }
  foo() // foo2
  
  // 执行上下文栈，入出栈过程
  // 压入全局执行上下文
  ECStack = [
      globalContext
  ];
  // 代码
  function fun3() {
      console.log('fun3')
  }
  
  function fun2() {
      fun3();
  }
  
  function fun1() {
      fun2();
  }
  
  fun1();
  // 伪代码
  
  // fun1()
  ECStack.push(<fun1> functionContext);
  
  // fun1中调用了fun2，还要创建fun2的执行上下文
  ECStack.push(<fun2> functionContext);
  
  // fun2还调用了fun3！
  ECStack.push(<fun3> functionContext);
  
  // fun3执行完毕
  ECStack.pop();
  
  // fun2执行完毕
  ECStack.pop();
  
  // fun1执行完毕
  ECStack.pop();
  
  // javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
  ```

- 总结

  + 单线程
  + 同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待
  + 全局上下文只有唯一的一个，它在浏览器关闭时出栈
  + 函数的执行上下文的个数没有限制
  + 每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此

## JS 引擎

[execution-context](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#execution-context)

[浅谈 javascript 解析引擎解析过程](https://blog.csdn.net/lq15310444798/article/details/77574320)

[JavaScript 引擎运行原理解析](https://blog.csdn.net/a419419/article/details/82906049)

- 简介

  JS （解析）引擎是一个程序，是浏览器引擎的一部分，每个浏览器的 JS 引擎都不一样（因为每个浏览器编写 JS 解析引擎的语言以及解析原理都不相同）。标准的JS 引擎会按照 ES 文档来实现。虽然每个浏览器的 JS 引擎不同，但 JS 的语言性质决定了 JS 关键的渲染原理仍是动态执行 JS 字符串的，只是词法分析、语法分析、变量赋值、字符串拼接的实现方式有所不同

  JS 引擎是干嘛的？——就是根据 ES 定义的语言标准来动态执行 JS 字符串，虽然很多浏览器不全是按照标准来的，解释机制也不尽相同，但动态解析 JS 的过程还是分成了两个阶段：语法检查阶段（包括词法分析和语法分析）和运行阶段（包括预解析和运行阶段）

  在 JS 解析过程中，如果遇到错误，则直接跳出当前代码块，直接执行下一个 script 代码段，所以在同一个 script 内的代码段有错误就不会执行下去，但是不会影响下一个 script 内的代码段

- 词法分析

  JS 解释器把 JS 代码（字符串）的字符流按照 ES 标准转换为记号流

  ```js
  // JS 代码
  a = (b - c)
  // 转换为记号流
  NAME "a"
  EQUALS
  OPEN_PARENTHESIS
  NAME "b"
  MINUS
  NAME "c"
  CLOSE_PARENTHESIS
  SEMICOLON
  ```

- 语法分析

  JS 语法分析器在经过词法分析后，将记号流按照 ES 标准把词法分析所产生的记号生成语法树。

  通俗地说，就是把从程序中收集的信息存储到数据结构中，每取一个词法记号，就送入语法分析器进行分析

  进行语法检查

  当语法检查正确无误后，就可以进入运行阶段了

- 预编译

  预解析从语法检查阶段复制过来的信息：内部变量表（varDecls 保存的是用var进行显式声明的局部变量）、内嵌函数表（funDecls 在预解析阶段，发现有函数定义时，除了记录函数的声明外，还会创建一个原型链对象prototype）、其他信息

  + 创建执行上下文。

    JS 引擎将语法检查正确后，生成的语法树复制到当前执行上下文中

    执行上下文包括：变量对象（VO，由var declaration变量声明、function declaration函数声明、arguments 参数 构成，变量对象以单例形式存在）、作用域链（Scope Chain，VO + all parent scopes 变量对象以及所有父级作用域）、this（进入上下文阶段就确定了，一旦进入执行代码阶段，this 值就不会变了）

  + 属性填充。

    JS 引擎会对语法树当中的变量声明、函数声明以及函数的形参进行属性填充

    对 变量对象/活动对象（VO/AO）的一些属性填充数值，函数声明的提升优先级高于变量声明提升

    函数的形参：执行上下文的变量对象的一个属性，其属性名就是形参的名字，其值就是实参的值；对于没有传递的参数，其值为 undefined。

    函数声明：执行上下文的变量对象的一个属性，属性名和值都是函数对象创建出来的；如果变量对象已经包含了相同名字的属性，则会替换它的值。

    变量声明：执行上下文的变量对象的一个属性，其属性名即为变量名，其值为 undefined；如果变量名和已经声明的函数名或者函数的参数名相同，则不会影响已经存在的函数声明的属性。

    变量对象 / 活动对象（VO/AO）填充的顺序也是按照以上顺序：函数的形参 -> 函数声明 -> 变量声明；

    在变量对象 / 活动对象（VO/AO）中权重高低也按照：函数的形参 -> 函数声明 -> 变量声明顺序来。

    ```js
    var a = 1
    function b(a) { 
      alert(a)
    }
    var b
    alert(b) // function b(a) { alert(a); }
    b() // 形参 - undefined
    ```

- 执行代码

  经过预解析阶段创建执行上下文之后，就进入执行代码阶段，VO/AO 就会重新赋予真实的值，预解析阶段赋予的 undefined 值会被覆盖。

  此阶段才是程序真正进入执行阶段，JS引擎会一行一行的读取并运行代码。此时那些变量都会重新赋值。

  假如变量是定义在函数内的，而函数从头到尾都没被激活（调用）的话，则变量值永远都是 undefined 值。

  进入了执行代码阶段，在 预解析阶段所创建的任何东西可能都会改变，不仅仅是 VO/AO，this 和作用域链也会因为某些语句而改变，后面会讲到。

- scope 属性

  在 JS 中，只有函数能规定作用域，全局执行上下文中的 scope 是全局上下文中的属性，也是最外层的作用域链

  函数的属性 [[scope]] 是在预解析时就已经存在的，它包含了所有上层变量对象，并一直保存在函数中，就算函数永远都没被激活（调用），[[scope]] 也都还是存在于函数对象上

  ```js
  // 创建执行上下文的 Scope 属性和进入执行上下文的过程：
  Scope = AO + [[Scope]] // 预解析时的 Scope 属性
  Scope = [AO].concat([[Scope]]) // 执行阶段将 AO添加到作用域链的最前端
  ```

  执行上下文中的 [AO] 是函数的活动对象，而 [[Scope]] 则是该函数属性作用域。当前函数的 AO 永远是在最前面的，保存在堆栈上，而每当函数激活的时候，这些 AO 都会压栈到该堆栈上，查询变量是先从栈顶开始查找，也就是说作用域链的栈顶永远是当前正在执行的代码所在环境的 VO/AO（当函数调用结束后，则会从栈顶移除）。

  通俗点讲就是：JS解释器通过作用域链将不同执行位置上的变量对象串连成列表，并借助这个列表帮助 JS 解释器检索变量的值。作用域链相当于一个索引表，并通过编号来存储它们的嵌套关系。当 JS 解释器检索变量的值，会按着这个索引编号进行快速查找，直到找到全局对象为止，如果没有找到值，则传递一个特殊的 undefined 值。

  是不是又想到了一条 JS 高效准则：为什么说在该函数内定义的变量，减少函数嵌套能提高 JS 的效率？因为函数定义的变量，此变量永远在栈顶，这样子查询变量的时间变短了。

- 作用域链

  作用域链感觉就是一个 VO 链表，当访问一个变量时，先在链表的第一个 VO 上查找，如果没有找到则继续在第二个 VO 上查找，直到搜索结束，也就是搜索到全局执行环境的 VO 中。这也就形成了作用域链的概念。

  函数的作用域是在函数创建即预解析阶段就已经就已经定义了，而在代码执行阶段则是将函数的作用域添加到作用域链上。

  在介绍 “预解析” 阶段时，我们有提到当创建函数时，同时也会创建原型链对象（prototype）函数天生的。原型链对象在作用域链中没有找到变量对时，那么就会通过原型链来查找。

  作用域是在 “预解析” 时就已经决定的，所以作用域被叫做静态作用域，而在执行阶段的则被叫做动态作用域，因为在执行阶段会改变作用域链中填充的值。

- 代码执行改变作用域链

  创建了函数就有一个闭包，而变量是在函数的执行上下文保存起来的静态作用域链上查询的，而当前函数内创建的的变量会在函数结束后就被销毁。而闭包就能函数结束之后还能让这些变量一直保存在作用域链上。
  
  理论角度：所有函数都是闭包。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量。
  应用角度：当在代码中引用了自由变量，即使创建它的上下文已经销毁，此变量还能访问。
  
  ECMAScript 标准中，同一个上下文创建的闭包（理论上的闭包）是共用一个作用域的，也就是说闭包中对其中变量修改会影响到其他闭包对其变量的读取。
  
  所谓创建额外的闭包就是创建函数，不管是匿名函数、函数表达式、函数声明（除了构造函数），只要能创建作用域链就行，与函数类型无关，然而创建额外的函数不是唯一的方法。

## JS 垃圾回收机制

[js 垃圾回收机制个人总结](https://blog.csdn.net/weixin_45295262/article/details/109011987)

[前端面试：谈谈 JS 垃圾回收机制](https://segmentfault.com/a/1190000018605776)

[V8 之旅： 垃圾回收器](http://newhtml.net/v8-garbage-collection/)

- 简介

  JS 中的内存管理是自动执行的，而且是不可见的。我们创建基本类型、对象、函数…… 所有这些都需要内存。

- 垃圾

  一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。
  全局变量变量一定不是垃圾，因为随时会用到。

  ![image-20210328212004848](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/image-20210328212004848.png)

- 垃圾回收算法

  基本的垃圾回收算法为**标记-清除**，定期执行垃圾回收

  回收基本步骤

  + 标记空间中[可达]值

    V8 采用的是可达性（reachability）算法来判断堆中的对象应不应该被回收

    可达性算法思路：从根节点（Root）出发，遍历所有的对象；可以遍历到的对象，是可达的（reachable）；没有被遍历到的对象，是不可达的（unreachable）。

    根结点：全局变量 window，位于每个 iframe 中；文档 DOM 树；存放在栈上的变量（根结点不可能被回收）

  + 回收不可达的值占用的内存

    在所有的标记完成之后，统一清理内存中所有不可达的对象

  + 做内存整理

    在频繁回收对象后，内存中就会存在大量不连续空间，专业名词叫「内存碎片」。当内存中出现了大量的内存碎片，如果需要分配较大的连续内存时，就有可能出现内存不足的情况。所以最后一步是整理内存碎片。(但这步其实是可选的，因为有的垃圾回收器不会产生内存碎片，比如接下来我们要介绍的副垃圾回收器。)

- 什么时候进行垃圾回收

  浏览器进行垃圾回收的时候，会暂停 JS 脚本，等垃圾回收完毕再继续执行。对于普通应用这样没什么问题，但对于 JS 游戏、动画对连贯性要求比较高的应用，如果暂停时间很长就会造成页面卡顿。这就是我们接下来谈的关于垃圾回收的问题：什么时候进行垃圾回收，可以避免长时间暂停。

- 垃圾回收机制的优化

  + 分代收集

    * 浏览器将数据分为两种，一种是临时对象，一种是长久对象

    * 临时对象

      大部分对象在内存中存活的时间很短，这类对象很快就变得不可访问了，应该快点回收。比如函数内部声明的变量，或者块级作用域中的变量，当函数或者代码块执行结束时，作用域中定义的变量就会被销毁

    * 长久对象

      生命周期很长的对象，这类对象可以慢点回收。比如全局的  window、 DOM、 Web API

    * 这两种对象对应不同的回收策略，所以，V8 把堆分为新生代和老生代两个区域，新生代中存放临时对象，老生代中存放持久对象，并且让副垃圾回收器，主垃圾回收器，分别负责新生代、老生代的垃圾回收

    * 主垃圾回收器

      负责老生代的垃圾回收。特点：对象占用空间大，对象存活时间长。使用**标记-清除**算法执行垃圾回收，对标记为不可达的进行回收，这会产生大量不连续的内存碎片，需要进行内存整理

    * 副垃圾回收器

      负责新生代的垃圾回收，通常只支持1~8M的容量。新生代被分为两个区域——对象区域和空闲区域，新加入的对象都被放入对象区域，等对象区域快满的时候，会执行一次垃圾清理，然后将存活的对象复制到空闲区域，并将它们有序的排列一遍，这样就不需要进行碎片整理了，因为空闲区域此时是有序的，复制完成后，对象区域和空闲区域进行对调，将空闲区域中存活的对象放入对象区域

    * 总结

      将堆分为新生代和老生代，新生代多回收，不需要内存整理，老生代少回收，需要内存整理。

  + 增量收集

    如果脚本中有许多对象，引擎一次性遍历整个对象，会造成一个长时间暂停。所以引擎将垃圾收集工作分成更小的块，每次处理一部分，多次处理。这样就解决了长时间停顿的问题。

  + 闲时收集

    垃圾收集器只会在 CPU 空闲时尝试运行，以减少可能对代码执行的影响。

- 浏览器中不同类型变量的内存都是何时释放

  + 引用类型

    在没有引用之后，通过 v8 自动回收

  + 值类型

    如果处于闭包的情况下，要等闭包没有引用才会被 V8 回收

    非闭包的情况下，等待 V8 的新生代切换的时候回收。

## 浏览器渲染

[深入浅出浏览器渲染原理（荐）](https://github.com/ljianshu/Blog/issues/51)

[浏览器渲染原理及流程](https://blog.csdn.net/sxzxiaofeng168/article/details/100145111)

[浏览器渲染页面的原理及流程](https://blog.csdn.net/u013960979/article/details/112218841)

[浏览器渲染页面过程（荐）](https://blog.csdn.net/lilele0227/article/details/85866986)

[浏览器的工作原理：新式网络浏览器幕后揭秘（官网）](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/#Introduction)

- url src href

  [url、src、href 定义以及使用区别](https://blog.csdn.net/walliamliu/article/details/51108089)

  + url

    统一资源定位符，对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

  + src

    source，仅仅嵌入当前资源到当前文档元素定义的位置

    ```html
    <script src="script.js"></script>
    ```

    当解析到上述代码后，在浏览器下载，编译，执行这个文件之前页面的加载和处理会被暂停。这个过程与把 js 文件放到 `<script>` 标签里类似。这也是建议把 JS 文件放到底部加载的原因。当然，img 标签与此类似。浏览器暂停加载直到提取和加载图像。

  + href

    Hypertext Reference 超文本引用，指定网络资源的位置，从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系。

    ```html
    <link href="style.css" rel="stylesheet" />
    ```

    当解析到上述代码后，浏览器明白当前资源是一个样式表，会并行下载该文档，页面解析不会暂停（由于浏览器需要样式规则去画或者渲染页面，渲染过程可能会被暂停）。这与把 css 文件内容写在 `<style>` 标签里不相同，因此建议使用 link 标签而不是 @import 来把样式表导入到 html 文档里。

- 简略渲染过程1

  + 根据 HTML 文件构建 DOM（文档对象模型 Document Object Model） 树和 CSSOM 树

    构建 DOM 树期间，如果遇到 JS，阻塞 DOM 树及 CSSOM 树的构建，优先加载 JS 文件，加载完毕，再继续构建 DOM 树及 CSSOM 树

  + 构建渲染树（Render tree）

  + 布局渲染树

  + 绘制渲染树

  + 页面的重绘与重排

    页面渲染完成后，若 JS 操作了 DOM 结点，根据 JS 对 DOM 操作动作的大小，浏览器对页面进行重绘或是重排

- 简略渲染过程2

  ![image-20210329095123497](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329100706.png)

  浏览器收到 http 响应，即一堆 HTML 格式的字符串后，会进行解析

  1. 浏览器会解析三个东西

	  + HTML/SVG/XHTML

      ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329100625.gif)

	     HTML 字符串描述了一个页面的结构，浏览器会把 HTML 结构字符串解析转换成 DOM 树形结构

    + CSS

	    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329100631.png)

       解析 CSS 会产生 CSS 规则树，和 DOM 结构比较像

    + JS 脚本

      ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329100824.gif)

       等到 JS 脚本文件加载后，通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree

  2. 解析完成后，浏览器引擎会通过 DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree

     + Rendering Tree 渲染树并不等同于 DOM 树，渲染树只会包括需要显示的结点和这些结点的样式信息
  
     + CSS 的 Rule Tree 主要是为了实现匹配并把 CSS Rule 附加上 Rendering Tree 上的每个 Element（也就是每个 Frame）
  
     + 然后计算每个 Frame 的位置，这又叫 layout 和 reflow 过程
  
  3. 最后通过调用操作系统 Native GUI 的 API 绘制

- 构建 DOM

  宏观上，将 HTML 文件转换为 DOM 树可以分为几个步骤：

  字节数据 => 字符串 => Token（标记） => Node => DOM

  + 浏览器从磁盘或网络中读取 HTML 的原始字节（0/1字节数据），并根据文件的指定编码（例如 UTF-8）将它们转换成字符串（也就是我们写的代码）

  + 将字符串转换成 Token，例如 `<html>`、`<body>` 等，Token 会标识出当前 Token 是**开始标签**或是**结束标签**，亦或是**文本信息**。

    Token 标识起始标签和结束标签等标识是为了维护节点与节点之间的关系

    例如，"title" Token 的起始标签和结束标签之间的节点，肯定属于 "head" 的子节点

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329122740.png)

    上图中，"Hello" Token 位于 "title" 开始标签和 "title" 结束标签之间，表明 "Hello" Token 是 "title" Token 的子节点

  + 生成节点对象并构建 DOM

    在构建 DOM 的过程中，不是等所有 Token 都转换完成再去生成节点对象的，而是一边生成 Token，一边消耗 Token 来生成节点对象

    即，每个 Token 被生成后，会立刻消耗这个 Token 创建出节点对象

    注：带结束标签标识的 Token 不会创建节点对象

    ```html
    <html>
    <head>
        <title>Web page parsing</title>
    </head>
    <body>
        <div>
            <h1>Web page parsing</h1>
            <p>This is an example Web page.</p>
        </div>
    </body>
    </html>
    ```

    上面的 HTML 会被解析成这样：

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329123448.png)

- 构建 CSSOM

  + DOM 会捕获页面的内容，但浏览器还需要知道页面如何展示，所以需要构建 CSSOM

  + 构建 CSSOM 的过程与构建 DOM 的过程非常相似，当浏览器接收到一段 CSS后，浏览器首先要做的就是识别出 Token，然后构建节点并生成 CSSOM

    字节数据 => 字符串 => Token => Node => CSSOM

  + 在这个过程中，浏览器会确定每个节点的样式到底是什么，且这个过程很消耗资源，因为样式可以自行设置给某个节点，也可以通过继承获得，在这个过程中，浏览器需要递归 CSSOM 树，然后确定具体的元素到底是什么样式

  + CSS 匹配 HTML 元素是一个相当复杂和耗费性能的事情，所以，DOM 树要小，CSS 尽量用 id 和 class，千万不要过渡层叠下去

- 构建渲染树

  + 当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329133010.png)

  + 这一过程，并不是简单的将两者合并就行，渲染树只会包括需要显示的节点和这些节点的样式信息，如果某个节点是 `display: none` 的，那么就不会在渲染树中显示

  + 浏览器如果在渲染过程中遇到 JS 文件

    渲染过程中，如果遇到 `<script>` 就停止渲染，执行 JS 代码

    因为浏览器有 GUI 渲染线程和 JS 引擎线程，为了防止渲染出现不可预期的结果，这两个线程是互斥的关系。JS 的加载，解析与执行会阻塞 DOM 的构建，也就是说，在构建 DOM 时，HTML 解析器如果遇到了 JS，那么它会暂停构建 DOM，将控制器移交给 JS 引擎，等 JS 引擎运行完毕，浏览器再从中断的地方恢复 DOM 创建

    也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性（下文会介绍这两者的区别）。

  + JS 文件不只是阻塞 DOM 的构建，也会导致 CSSOM 去阻塞 DOM 的构建

    原本 DOM 和 CSSOM 的构建是互不影响的，但引入 JS 后，CSSOM 也开始阻塞 DOM 的构建了，只有当 CSSOM 构建完毕后，DOM 构建才会恢复

    因为 JS 不只是可以改 DOM，还可以更改样式，也就是它可以更改 CSSOM。因为不完整的 CSSOM 是无法使用的，如果 JS 想访问 CSSOM 并更改它，那么在执行 JS 时，必须要能拿到完整的 CSSOM。这就导致如果浏览器尚未完成 CSSOM 的下载和构建，而我们想在此时运行脚本，那么浏览器会延迟脚本的执行和 DOM 构建，直至其完成 CSSOM 的下载和构建。

    即，浏览器会先下载和构建 CSSOM，然后再执行 JS，最后再继续构建 DOM

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329134050.png)

- 布局与绘制

  当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为 “自动重排”。

  布局流程的输出是一个 “盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸，所有相对测量值都将转换为屏幕上的绝对像素。

  布局完成后，浏览器会立即发出 “Paint Setup” 和 “Paint” 事件，将渲染树转换成屏幕上的像素。

  + 渲染的流程（下图黄色的四个步骤）：

    1. 计算 CSS 样式
    2. 构建 Render Tree
    3. Layout（定位坐标和大小）
    4. 正式开画

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329174155.png)

    注意：上图流程中有很多连接线，这表示了 Javascript 动态修改了 DOM 属性或是 CSS 属性会导致重新 Layout，但有些改变不会重新 Layout，就是上图中那些指到天上的箭头，比如修改后的 CSS rule 没有被匹配到元素。

  + 重绘 Repaint

    当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。

  + 回流 Reflow

    当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）

  + 性能影响

    我们知道，当网页生成的时候，至少会渲染一次。在用户访问的过程中，还会不断重新渲染。重新渲染会重复回流 + 重绘或者只有重绘。
    **回流必定会发生重绘，重绘不一定会引发回流**。重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。

  + 常见引起回流属性和方法

    任何会改变元素几何信息 (元素的位置和尺寸大小) 的操作，都会触发回流，

    - 添加或者删除可见的 DOM 元素；
    - 元素尺寸改变 —— 边距、填充、边框、宽度和高度
    - 内容变化，比如用户在 input 框中输入文字
    - 浏览器窗口尺寸改变 ——resize 事件发生时
    - 计算 offsetWidth 和 offsetHeight 属性
    - 设置 style 属性的值

  + 常见引起重绘属性和方法

    ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329174709.png)

  + 如何减少回流、重绘

    - 使用 transform 替代 top
    - 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
    - 不要把节点的属性值放在一个循环里当成循环里的变量。
    - 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
    - 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
    - CSS 选择符从右往左匹配查找，避免节点层级过多
    - 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。

- script 中的 async 和 defer 属性

  ![image-20210329173840401](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329173841.png)

  ```html
  <script src="script.js"></script>
  <!-- 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。 -->
  
  <script async src="script.js"></script> (异步下载)
  <!-- async 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行 —— 无论此刻是 HTML 解析阶段还是 DOMContentLoaded 触发之后。需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。 -->
  
  <script defer src="script.js"></script>
  <!-- defer 属性表示延迟执行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，然后触发 DOMContentLoaded 事件。 -->
  ```

  defer 与相比普通 script，有两点区别：**载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后。在加载多个 JS 脚本的时候，async 是无顺序的加载，而 defer 是有顺序的加载。**

- 为什么操作 DOM 慢

  把 DOM 和 JavaScript 各自想象成一个岛屿，它们之间用收费桥梁连接。——《高性能 JavaScript》

  JS 是很快的，在 JS 中修改 DOM 对象也是很快的。在 JS 的世界里，一切是简单的、迅速的。但 DOM 操作并非 JS 一个人的独舞，而是两个模块之间的协作。

  因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们用 JS 去操作 DOM 时，本质上是 JS 引擎和渲染引擎之间进行了 “跨界交流”。这个 “跨界交流” 的实现并不简单，它依赖了桥接接口作为 “桥梁”（如下图）。

  ![](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/js/20210329173936.png)

  过 “桥” 要收费 —— 这个开销本身就是不可忽略的。我们每操作一次 DOM（不管是为了修改还是仅仅为了访问其值），都要过一次 “桥”。过 “桥” 的次数一多，就会产生比较明显的性能问题。因此 “减少 DOM 操作” 的建议，并非空穴来风。

- 性能优化

  + JS 优化：
  
    `<script>`标签加上 defer 属性 和 async 属性 用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。

    * defer 属性： 用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
  	* async 属性： HTML5 新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。
  
  + CSS 优化： `<link>` 标签的 rel 属性 中的属性值设置为 preload 能够让你在你的 HTML 页面中可以指明哪些资源是在页面加载完成后即刻需要的，最优的配置加载顺序，提高渲染性能

## 浏览器缓存机制

[彻底吃透浏览器的缓存机制！（荐）](https://blog.csdn.net/csdnnews/article/details/89324384)

[深入理解浏览器的缓存机制（同上）](https://github.com/ljianshu/Blog/issues/23)

## 防抖

- 简介

  防抖就是指当用户触发某个操作时，如果在指定的时间内再次触发该操作，那么就清除前面触发的操作，直到用户操作之后并且在指定的时间内不再操作我们再处理用户的请求

  你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐！

- 常见场景

  用户在输入框输入内容，我们根据用户输入内容去查数据。——当用户输入文字时，监听 input 事件，那么用户每输入一个字符都会触发查询，这样就会发起很多个请求

- 代码

  ```js
  /*
  目录结构
  |-根目录
	|-防抖.html
  	|-debounce.js
*/
  ```
  
  ```html
  <!-- 防抖.html -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>防抖</title>
    <style>
      #container {
        width: 100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        background-color: #444;
        font-size: 30px
      }
    </style>
  </head>
  <body>
    <div id="container">1</div>
    <button id="button">取消防抖</button>
    <script src="debounce.js"></script>
  </body>
</html>
  ```
  
  ```js
  // debounce.js
  let count = 1
  let container = document.getElementById('container')
  
  function getUserAction(e) {
    container.innerHTML = count++
    console.log(this)
    console.log(e)
  }
  
  // 两种方式，getUserAction 中 this 的指向不同，前者指向 div 标签，后者指向 window
  // getUserAction 中 event 事件对象也不同，前者指向 MouseEvent 对象，后者为 undefined
  // container.onmousemove = getUserAction
  // 防抖
  // container.onmousemove = debounce(getUserAction, 1000)
  // 需求1
  // container.onmousemove = debounce(getUserAction, 1000, true)
  
  // 需求2
  // 能够取消的防抖函数
  let setUserAction = debounce(getUserAction, 1000, true)
  container.onmousemove = setUserAction
  document.getElementById('button').addEventListener('click', () => {
    setUserAction.cancel()
  })
  
  // 防抖：对某次操作，如果在指定时间内再次触发该操作，那么就清除前面的操作，直到用户操作之后且在指定时间内不再操作，我们再处理用户的请求
  // function debounce(func, wait) {
  //   let timer
  //   return function () {
  //     clearTimeout(timer)
  //     // timer = setTimeout(func, wait) // this 指向 和 event 对象有误
  //     timer = setTimeout(() => {
  //       func.apply(this, arguments)
  //     }, wait)
  //   }
  // }
  
  // 需求1：不希望非要等到事件停止触发后才执行，希望立即执行函数，然后停止触发 n 妙后，才可以重新触发执行
  // function debounce(func, wait, immediate) {
  //   let timer
  //   return function () {
  //     if (timer) {
  //       clearTimeout(timer)
  //     }
  //     if (immediate) {
  //       // 如果已经执行过，就不再执行
  //       let callNow = !timer
  //       timer = setTimeout(() => {
  //         timer = null
  //       }, wait)
  //       if (callNow) {
  //         func.apply(this, arguments)
  //       }
  //     } else {
  //       timer = setTimeout(() => {
  //         func.apply(this, arguments)
  //       }, wait)
  //     }
  //   }
  // }
  
  // 需求2：希望能取消防抖
  function debounce(func, wait, immediate) {
    let timer
    let debounced = function () {
      if (timer) {
        clearTimeout(timer)
      }
      if (immediate) {
        // 如果已经执行过，就不再执行
        let callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, wait)
        if (callNow) {
          func.apply(this, arguments)
        }
      } else {
        timer = setTimeout(() => {
          func.apply(this, arguments)
        }, wait)
      }
    }
  
    debounced.cancel = function () {
      clearTimeout(timer)
      timer = null
    }

    return debounced
  }
  
  ```

## 节流

- 简介

  如果你持续触发事件，每隔一段时间，只执行一次事件。

  根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
  我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

  关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。

### 时间戳

- 简介

  使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳 (最一开始值设为 0)，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

- 代码

    ```js
  /*
  目录结构
  |-根目录
  	|-防抖节流.html
   	|-throttle.js
  */
  ```

    ```html
  <!-- 防抖节流.html -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>防抖节流</title>
    <style>
      #container {
        width: 100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        background-color: #444;
        font-size: 30px
      }
    </style>
  </head>
  <body>
    <div id="container">1</div>
    <!-- <button id="button">取消防抖</button> -->
    <!-- <script src="debounce.js"></script> -->
    <script src="throttle.js"></script>
  </body>
  </html>
    ```

  ```js
  // throttle.js
  let count = 1
  let container = document.getElementById('container')
  
  function getUserAction(e) {
    container.innerHTML = count++
    console.log(this)
    console.log(e)
  }
  
  // container.onmousemove = getUserAction
  container.onmousemove = throttle(getUserAction, 1000)
  
  // 节流 - 时间戳
  // 事件会立即执行
  // 事件停止触发后，不会再执行一次
  function throttle(func, wait) {
    let previous = 0
    return function () {
      let now = new Date()
      if (now - previous > wait) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  ```

  

### 定时器

```js
// throttle.js
let count = 1
let container = document.getElementById('container')

function getUserAction(e) {
  container.innerHTML = count++
  console.log(this)
  console.log(e)
}

// container.onmousemove = getUserAction
container.onmousemove = throttle(getUserAction, 1000)

// 节流 - 时间戳
// 事件会立即执行
// 事件停止触发后，不会再执行一次
// function throttle(func, wait) {
//   let previous = 0
//   return function () {
//     let now = new Date()
//     if (now - previous > wait) {
//       func.apply(this, arguments)
//       previous = now
//     }
//   }
// }

// 节流 - 定时器
// 事件不会立刻执行，wait 后才执行第一次，之后每 wait 执行一次
// 事件停止触发后，仍然会再执行一次
function throttle(func, wait) {
  let timer
  return function () {
    let now = new Date()
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        func.apply(this, arguments)
      }, wait)
    }
  }
}

```

### 时间戳 + 定时器

```js
// throttle.js
let count = 1
let container = document.getElementById('container')

function getUserAction(e) {
  container.innerHTML = count++
  console.log(this)
  console.log(e)
}

// container.onmousemove = getUserAction
// container.onmousemove = throttle(getUserAction, 1000)
// container.onmousemove = throttle(getUserAction, 1000, { leading: false, trailing: false})
/*
leading：false 和 trailing: false 不能同时设置。
如果同时设置的话，比如当你将鼠标移出的时候，因为 trailing 设置为 false，停止触发的时候不会设置定时器，所以只要再过了设置的时间，再移入的话，就会立刻执行，就违反了 leading: false，bug 就出来了，所以，这个 throttle 只有三种用法：
*/
container.onmousemove = throttle(getUserAction, 1000, { leading: true, trailing: true})

// 节流 - 时间戳
// 事件会立即执行
// 事件停止触发后，不会再执行一次
// function throttle(func, wait) {
//   let previous = 0
//   return function () {
//     let now = new Date()
//     if (now - previous > wait) {
//       func.apply(this, arguments)
//       previous = now
//     }
//   }
// }

// 节流 - 定时器
// 事件不会立刻执行，wait 后才执行第一次，之后每 wait 执行一次
// 事件停止触发后，仍然会再执行一次
// function throttle(func, wait) {
//   let timer
//   return function () {
//     let now = new Date()
//     if (!timer) {
//       timer = setTimeout(() => {
//         timer = null
//         func.apply(this, arguments)
//       }, wait)
//     }
//   }
// }

// 需求1：鼠标移入后能立刻执行，停止触发的时候还能再执行
// function throttle(func, wait) {
//   let timer, previous = 0
//   let later = function () {
//     previous = new Date()
//     timer = null
//     func.apply(this, arguments)
//   }
//   let throttled = function () {
//     let now = new Date()
//     // 下次触发 func 的剩余时间
//     let remaining = wait - (now - previous)
//     // 如果没有剩余时间，或者修改了系统时间
//     if (remaining <= 0 || remaining > wait) {
//       if (timer) {
//         clearTimeout(timer)
//         timer = null
//       }
//       previous = now
//       func.apply(this, arguments)
//     } else if (!timer) {
//       timer = setTimeout(later, remaining)
//     }
//   }

//   return throttled
// }

// 优化：希望无头有尾，或者有头无尾
// 设置 options 参数，根据传入的值判断想要哪种效果
// leading：false-禁用第一次执行
// trailing：false-禁用停止触发的回调
function throttle(func, wait, options) {
  let timer, previous = 0
  let context, args
  if (!options) {
    options = {}
  }
  let later = function () {
    previous = options.leading === false ? 0 : new Date()
    timer = null
    func.apply(context, args)
    if (!timer) {
      context = args = null
    }

  }
  let throttled = function () {
    let now = new Date()
    if (!previous && options.leading === false) {
      previous = now
    }
    // 下次触发 func 的剩余时间
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    // 如果没有剩余时间，或者修改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      func.apply(context, args)
      if (!timer) {
        context = args = null
      }
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(later, remaining)
    }
  }

  // 取消节流
  throttled.cancel = function () {
    clearTimeout(timer)
    previous = 0
    timer = null
  }

  return throttled
}

```

## call、apply、bind

[JavaScript 进阶教程 (4)- 函数内 this 指向解惑 call ()，apply ()，bind () 的区别](https://blog.csdn.net/qq_23853743/article/details/108435874)

> call ()、apply ()、bind () 这三个方法都是是用来改变 this 的指向的。

### call、apply

- 简介

  call() 方法调用一个函数，其具有一个指定的 this 值和分别地提供的参数 (参数的列表)。
  apply() 方法调用一个函数，其具有一个指定的 this 值，以及作为一个数组（或类似数组的对象）提供的参数。

  注意：call() 和 apply() 方法类似，只有一个区别，就是 call() 方法接受的是若干个参数的列表，而 apply() 方法接受的是一个包含多个参数的数组。

  call () 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

- 语法

  ```js
  // call
  // 语法
  fun.call(thisArg[, arg1[, arg2[, ...]]])
  // 参数
  thisArg - 在 fun 函数运行时指定的 this 值，如果指定了 null 或者 undefined 则内部 this 指向 window
  arg1, arg2, ... - 指定的参数列表
  
  
  // apply
  // 语法
  fun.apply(thisArg, [argsArray])
  ```

- 示例

  ```js
  // call apply
  function f1(x, y) {
    console.log('结果：', (x + y), this)
    return '666'
  }
  f1(10, 20) // 调用函数
  // 30 Window
  
  let o = {}
  
  // 此时的 f1 实际上是当成对象来使用的,对象可以调用方法
  // apply 和 call 方法可以改变 this 的指向
  // 但如果没有传入参数,或者是传入的是 null,那么调用该方法的函数对象中的 this 就是默认的 window
  f1.apply(o, [10, 20])
  // 30 {}
  f1.call(null, 100, 200)
  // 300 Window
  
  //// apply 和 call 都可以让函数或者方法来调用,传入参数和函数自己调用的写法不一样,但是效果是一样的
  let res1 = f1.apply(null, [10, 20])
  // 30 Window
  let res2 = f1.call(null, 100, 200)
  // 300 Window
  console.log(res1, res2)
  // 666 666
  
  ```

- 模拟实现

  ```js
  // call 实现
  // call () 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
  // let foo = {
  //   value: 1
  // }
  
  // function bar() {
  //   console.log(this.value)
  // }
  
  // bar.call(foo) // 1
  /*
  两个现象
  1 call 改变了 this 的指向，指向到 foo
  2 bar 函数执行了
  */
  
  // 模拟实现第一步
  // 试想当调用 call 的时候，把 foo 对象改造成如下：
  // let foo = {
  //   value: 1,
  //   bar() {
  //     console.log(this.value)
  //   }
  // }
  
  // foo.bar() // 1
  
  /*
  模拟实现步骤
  1 将函数设置为对象的属性 
  foo.fn = bar
  2 执行该函数 
  foo.fn()
  3 删除该函数 
  delete foo.fn
  */
  
  // Function.prototype.myCall = function(context) {
  //   // 首先要获取调用 call 的函数，用 this 可以获取
  //   console.dir(context) // foo 对象
  //   console.dir(this) // bar 函数
  
  //   context.fn = this
  //   context.fn()
  //   delete context.fn
  // }
  
  // // 测试
  // let foo = {
  //   value: 1
  // }
  
  // function bar() {
  //   console.log(this.value)
  // }
  
  // bar.myCall(foo) // 1
  
  
  // 模拟实现第二步
  // call 还能给定参数执行函数
  // let foo = {
  //   value: 1
  // };
  
  // function bar(name, age) {
  //   console.log(name)
  //   console.log(age)
  //   console.log(this.value);
  // }
  
  // bar.call(foo, 'kevin', 18);
  // kevin
  // 18
  // 1
  
  // 可以从 arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组中
  // 以上个例子为例，此时的arguments为：
  // arguments = {
  //      0: foo,
  //      1: 'kevin',
  //      2: 18,
  //      length: 3
  // }
  // 因为arguments是类数组对象，所以可以用for循环
  // let args = [];
  // for(let i = 1, len = arguments.length; i < len; i++) {
  //     args.push('arguments[' + i + ']');
  // }
  
  // 执行后 args为 ["arguments[1]", "arguments[2]"]
  
  // 接着要把这个参数数组放到要执行的函数的参数里面去。
  // 用 eval 方法拼成一个函数，类似于这样：
  // eval('context.fn(' + args +')')
  // 这里 args 会自动调用 Array.toString () 这个方法。
  // eval () 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。
  // 如果参数是一个表达式，eval () 函数将执行表达式。如果参数是 Javascript 语句，eval () 将执行 Javascript 语句。
  
  // 代码实现
  // Function.prototype.myCall = function (context) {
  //   console.log(context) // { value: 1 }
  //   console.log(arguments) // [Arguments] { '0': { value: 1 }, '1': 'kevin', '2': 18 }
  //   context.fn = this
  //   let args = []
  //   for (let i = 1, len = arguments.length; i < len; i++) {
  //     args.push(`arguments[${i}]`)
  //   }
  //   console.log(args) // [ 'arguments[1]', 'arguments[2]' ]
  //   console.log(`context.fn(${args})`) // context.fn(arguments[1],arguments[2])
  //   eval(`context.fn(${args})`)
  //   delete context.fn
  // }
  
  // 测试一下
  // let foo = {
  //   value: 1
  // }
  
  // function bar(name, age) {
  //   console.log(name)
  //   console.log(age)
  //   console.log(this.value);
  // }
  
  // bar.myCall(foo, 'kevin', 18);
  // kevin
  // 18
  // 1
  
  // 模拟实现第三步
  // 优化：
  // 1 this 参数可以传 null，当为 null 的时候，视为指向 window
  // 2 函数是可以有返回值的！
  
  // 代码实现
  Function.prototype.myCall = function (context) {
    context = context || window
    console.log(context)
    context.fn = this
  
    let args = []
    for (let i = 1, len = arguments.length; i < len; i++) {
      args.push(`arguments[${i}]`)
    }
    let result = eval(`context.fn(${args})`)
    delete context.fn
    return result
  }
  
  // 测试一下
  // let value = 2 // value 不是加在 window 上的
  var value = 2
  
  let obj = {
    value: 1
  }
  
  function bar(name, age) {
    console.log('this.value', this.value);
    return {
      value: this.value,
      name: name,
      age: age
    }
  }
  
  bar.myCall(null); // let 定义-undefined var 定义-2
  
  console.log(bar.myCall(obj, 'kevin', 18));
  // 1
  // Object {
  //    value: 1,
  //    name: 'kevin',
  //    age: 18
  // }
  
  ```

  ```js
  // apply 实现
  Function.prototype.myApply = function (context, arr) {
    context = context || window
    context.fn = this
    let res
    if (!arr) {
      res = context.fn()
    } else {
      let args = []
      for (let i = 0, len = arr.length; i < len; i++) {
        args.push(`arr[${i}]`)
      }
      res = eval(`context.fn(${args})`)
    }
    delete context.fn
    return res
  }
  
  const obj = {
    value: 2
  }
  
  function bar(name, age) {
    console.log(this.value)
    return {
      name, age
    }
  }
  
  // let res = bar.apply(obj, ['tzy', 18])
  // let res = bar.myApply(obj, ['tzy', 18])
  let res = bar.myApply(obj)
  console.log(res)
  ```

  

### bind

- 简介

  bind () 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的 call 属性）。当目标函数被调用时 this 值绑定到 bind () 的第一个参数，该参数不能被重写。绑定函数被调用时，bind () 也可以接受预设的参数提供给原函数。一个绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
  bind 方法是复制的意思，本质是复制一个新函数，参数可以在复制的时候传进去，也可以在复制之后调用的时候传入进去。apply 和 call 是调用的时候改变 this 指向，bind 方法，是复制一份的时候，改变了 this 的指向。

- 语法

  ```js
  // 语法
  fun.bind(thisArg[, arg1[, arg2[, ...]]])
  // 参数
  thisArg - 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用 new 操作符调用绑定函数时，该参数无效。
  arg1, arg2, ... - 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
  // 返回值
  返回由指定的 this 值和初始化参数改造的原函数的拷贝。
  ```

- 示例

  ```js
  
  // bind
  function Person(name) {
    this.name = name
  }
  
  Person.prototype.play = function () {
    console.log(this, '===>', this.name)
    console.log(arguments)
  }
  
  function Student(name) {
    this.name = name
  }
  
  let per = new Person('人')
  let stu = new Student('学生')
  
  // 复制一个新的 play 方法
  // bind 不会调用
  /*
  bind 支持传递参数，它的传参方式比较特殊，一共有两个位置可以传递
  在 bind 的同时，以参数列表的形式进行传递
  在调用的时候，以参数列表的形式进行传递 
  两者合并：bind 的时候传递的参数和调用的时候传递的参数会合并到一起，传递到函数内部。
  */
  let ff = per.play.bind(stu, '1')
  ff(2)
  // Student { name: '学生' } ===> 学生
  // [Arguments] { '0': '1', '1': 2 }
  
  ```

- 模拟实现

  [JavaScript 中 instanceof 详解](https://blog.csdn.net/sun10367/article/details/88770817)

  ```js
  // bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
  // 由此我们可以首先得出 bind 函数的两个特点：
  // 1 返回一个函数
  // 2 可以传入参数
  
  // 第一个特点
  // let foo = {
  //   value: 1
  // }
  // function bar() {
  //   console.log(this.value)
  // }
  // // 返回了一个函数
  // var bindFoo = bar.bind(foo)
  // bindFoo(); // 1
  
  // 特点 1 模拟实现 - 返回一个函数
  // Function.prototype.myBind = function (context) {
  //   let self = this
  //   return function () {
  //     return self.apply(context) // 绑定函数可能有返回值
  //   }
  // }
  
  // 测试一下
  // let foo = {
  //   value: 1
  // }
  // function bar() {
  //   return this.value
  // }
  // var bindFoo = bar.bind(foo)
  // console.log(bindFoo()) // 1
  
  
  // 特点 2 模拟实现 - 可以传入参数
  // let foo = {
  //   value: 1
  // }
  // function bar(name, age) {
  //   console.log(this.value)
  //   console.log(name)
  //   console.log(age)
  // }
  // var bindFoo = bar.bind(foo, 'daisy')
  // bindFoo('18')
  // 1
  // daisy
  // 18
  /*
  函数需要传 name 和 age 两个参数，可以在 bind 的时候，只传一个 name，在执行返回的函数的时候，再传另一个参数 age!
  用 arguments 进行处理
  */
  
  // 代码实现
  // Function.prototype.myBind = function (context) {
  //   console.log(arguments) // { '0': { value: 1 }, '1': 'daisy' }
  //   let self = this
  //   let args = Array.prototype.slice.call(arguments, 1)
  //   // let args = [...arguments].slice(1)
  
  //   return function () {
  //     console.log(arguments) // { '0': '18' }
  //     let bindArgs = Array.prototype.slice.call(arguments)
  //     // let bindArgs = [...arguments]
  //     return self.apply(context, args.concat(bindArgs))
  //   }
  // }
  
  // 测试一下
  // let foo = {
  //   value: 1
  // }
  
  // function bar(name, age) {
  //   console.log(this.value)
  //   console.log(name)
  //   console.log(age)
  // }
  
  // var bindFoo = bar.myBind(foo, 'daisy')
  // bindFoo('18')
  
  
  // bind 的另一个特点
  // 一个绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
  // 也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。举个例子：
  
  // var value = 2
  // let foo = {
  //   value: 1
  // }
  // function bar(name, age) {
  //   this.habit = 'shopping'
  //   console.log(this.value)
  //   console.log(name)
  //   console.log(age)
  // }
  
  // bar.prototype.friend = 'kevin'
  
  // // let bindFoo = bar.bind(foo, 'daisy')
  // let bindFoo = bar.myBind(foo, 'daisy')
  
  // let obj = new bindFoo('18')
  // // undefined // 尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj
  // // daisy
  // // 18
  // console.log(obj.habit)
  // console.log(obj.friend)
  // // shopping
  // // kevin
  
  
  // 模拟实现
  Function.prototype.myBind = function (context) {
    let self = this
    let args = Array.prototype.slice.call(arguments, 1)
  
    let fBound = function () {
      let bindArgs = Array.prototype.slice.call(arguments)
      console.log(this instanceof fBound) // true
      console.log(this) // bar {}
      console.log(fBound) // Function: fBound
      // instanceof 判断一个构造函数的 prototype 属性所指向的对象是否在另一个被检测对象的原型链上
      return self.apply(this instanceof fBound 
        ? this // this 指向调用者
        : context, args.concat(bindArgs)) // this 指向传入的对象
    }
  
    fBound.prototype = this.prototype
    return fBound
  }
  
  // 测试一下
  var value = 2
  let foo = {
    value: 1
  }
  function bar(name, age) {
    this.habit = 'shopping'
    console.log(this.value)
    console.log(name)
    console.log(age)
  }
  
  bar.prototype.friend = 'kevin'
  
  let bindFoo = bar.myBind(foo, 'daisy')
  
  let obj = new bindFoo('18')
  // undefined
  // daisy
  // 18
  console.log(obj.habit)
  console.log(obj.friend)
  // shopping
  // kevin
  
  ```

## Promise

[【黑叔说】之《前端一分钟》(三)](https://blog.csdn.net/weixin_46837985/article/details/106642257)

```js
/*
自定义Promise函数模块
-用最基本的ES5 IIFE
*/
(function (window){
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  /*
  Promise构造函数
  excutor: 执行器函数（同步执行）
  */
  function Promise(excutor) {
    // 将当前promise对象保存起来
    const self = this;
    self.status = 'PENDING'; // 给promise对象指定status属性，初始值为PENDING
    self.data = undefined; // 给promise对象指定一个用于存储结果数据的属性
    self.callbacks = []; // 每个元素的结构：{onResolved(){}, onRejected(){}}

    function resolve(value) {
      // 如果当前状态不是PENDING，直接结束
      if (self.status !== 'PENDING') {
        return;
      }
      // 将状态改为resolved
      self.status = RESOLVED;
      // 保存value数据
      self.data = value;
      // 如果有待执行的callback回调函数，立即异步执行回调函数onResolved
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入异步队列中执行所有成功的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          });
        });
      }
    }
    function reject(reason) {
      // 如果当前状态不是PENDING，直接结束
      if (self.status !== 'PENDING') {
        return;
      }
      // 将状态改为rejected
      self.status = 'rejected';
      // 保存reason数据
      self.data = reason;
      // 如果有待执行的callback回调函数，立即异步执行回调函数onRejected
      if (self.callbacks.length > 0) {
        setTimeout(() => { // 放入异步队列中执行所有失败的回调
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason) // 调用下面Promise.prototype.then中的onRejected
          });
        });
      }
    }
    // 立即同步执行excutor
    try {
      excutor(resolve, reject)
    } catch (error) { // 如果执行器抛出异常，promise对象变为Rejected状态
      reject(error)
    }
  }
  /*
  Promise原型对象的then()
  指定成功和失败的回调函数
  返回一个新的promise对象
  返回promise的结果由onResolved/onRejected执行结果决定
  */
  // Promise.prototype.then = function(onResolved, onRejected) {
  //   // 指定默认的失败的回调（实现错误/异常传透的关键步骤）
  //   onRejected = typeof onRejected==='function' ? onRejected : reason => {throw reason} // 向后传递失败的reason

  //   // 也判断一下onResolved
  //   onResolved = typeof onResolved==='function' ? onResolved : value => value // 向后传递成功的value

  //   const self = this;    
    
  //   // 返回一个新的Promise对象
  //   return new Promise((resolve, reject) => {

  //     /*
  //     调用指定的回调函数处理，根据执行结果改变return的promise的状态
  //     */
  //     function handle(callback) {
  //       /*
  //       1 如果抛出异常，return的Promise就会失败，reason就是error
  //       2 如果回调函数执行返回非Promise，return的Promise就会成功，value就是返回的值
  //       3 如果回调函数执行返回Promise，return的Promise就是这个Promise的结果
  //       */          
  //       try {
  //         const result = callback(self.data)
  //         if(result instanceof Promise) {
  //           // 3 如果回调函数执行返回Promise，return的Promise就是这个Promise的结果
  //           // result.then(
  //           //   value => resolve(value), // 当result成功时，让return的Promise也成功
  //           //   reason => reject(reason) // 当result失败时，让return的Promise也失败
  //           // )
  //           result.then(resolve, reject)
  //         } else {
  //           // 2 如果回调函数执行返回非Promise，return的Promise就会成功，value就是返回的值
  //           resolve(result)
  //         }
  //       } catch(error) {
  //         // 1 如果抛出异常，return的Promise就会失败，reason就是error
  //         reject(error)
  //       }
  //     }

  //     if (self.status === 'PENDING') {
  //       // 当前状态还是PENDING状态，将回调函数保存起来
  //       self.callbacks.push({
  //         onResolved(value) { // 执行并改变return的Promise的状态
  //           handle(onResolved)
  //         },
  //         onRejected(reason) {
  //           handle(onRejected)
  //         }
  //       })
  //     } else if (self.status === RESOLVED) {
  //       // 当前是RESOLVED状态，异步执行onResolved并改变return的Promise的状态
  //       setTimeout(() => {
  //         handle(onResolved)          
  //       });
  //     } else { // 'rejected'
  //      // 当前是REJECTED状态，异步执行onRejected并改变return的Promise的状态
  //       setTimeout(() => {
  //         handle(onRejected)          
  //       });
  //     }
  //   })
  // }
  
  // 指定成功和失败的回调函数-可能调用，可能保存-看当前Promise的状态
  Promise.prototype.then = function(onResolved, onRejected) {
    const self = this

    // 指定回调函数的默认值-必须是函数
    onResolved = typeof onResolved==='function' ? onResolved : value => value
    onRejected = typeof onRejected==='function' ? onRejected : reason => {throw reason}

    // 返回一个新的Promise
    return new Promise((resolve, reject) => {
      /*
      执行指定的回调函数
      根据执行的结果改变return的Promise的状态/数据
      */
      function handle(callback) {
        /*
        返回promise的结果由onResolved/onRejected执行结果决定
        1 如果抛出异常，return的Promise就会失败，reason就是error
        2 如果回调函数执行返回非Promise，return的Promise就会成功，value就是返回的值
        3 如果回调函数执行返回Promise，return的Promise就是这个Promise的结果
        */
        try {
          const result = callback(self.data)
          if(result instanceof Promise) {
            // result.then(
            //   value => resolve(value),
            //   reason => reject(reason)
            // )
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch(error) {
          reject(error)
        }
      }

      if(self.status === RESOLVED) {
        // 当前Promise的状态是resolved
        // 立即异步执行成功的回调函数
        setTimeout(() => {
          handle(onResolved)
        });

      } else if(self.status === REJECTED) {
        // 当前Promise的状态是rejected
        // 立即异步执行失败的回调函数
        setTimeout(() => {
          handle(onRejected)
        });
      } else {
        // 当前Promise的状态是pending
        // 将成功和失败的回调函数保存callbacks容器中缓存起来
        self.callbacks.push({ // 存起来-且之后需要执行
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          }
        })
      } 
    })
  }

  /*
  Promise原型对象的catch()
  指定失败的回调函数
  返回一个新的promise对象
  */
  Promise.prototype.catch = function(onRejected) {
    // then处理了onResolved不为函数的情况-继续把value向下传
    return this.then(undefined, onRejected)
  }
  /*
  Promise函数对象的方法resolve
  返回一个指定结果的成功的promise
  */
  Promise.resolve = function(value) {
    // 返回一个成功/失败的Promise
    return new Promise((resolve, reject) => {
      if(value instanceof Promise) {
        // value 是Promise
        // 使用value的结果作为Promise的结果
        value.then(resolve, reject)
      } else {
        // value 不是Promise
        // Promise变为成功，数据是value
        resolve(value)
      }
    })
  }
  /*
  Promise函数对象的方法reject
  返回一个指定reason的失败的promise
  */
  Promise.reject = function(reason) {
    // 返回一个失败的Promise
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  /*
  Promise函数对象的方法all
  返回一个promise，只有当所有promise都成功时才成功，只要有一个失败的就失败
  */
  Promise.all = function(promises) {
    const values = new Array(promises.length) // 保存所有成功value的数组-长度固定
    // 用来保存成功的Promise的数量
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {

      // 遍历promises获取每个Promise的结果
      promises.forEach((p, index) => {
        // p.then(
        // 将p包装成Promise-p可能不是Promise
        Promise.resolve(p).then(
          value => {
            resolvedCount++; // 成功的数量+1
            // p成功，将成功的value保存到values中-顺序
            values[index] = value
            // 如果全部成功了，将return的Promise改变成功
            // 手动计数
            if(resolvedCount === promises.length) {
              resolve(values)
            }
          },
          reason => {
            // 一个失败，return的Promise就失败
            reject(reason)
          }
        )
      })
    })
  }
  /*
  Promise函数对象的方法race
  返回一个promise，其结果由第一个完成的promise决定
  */
  Promise.race = function(promises) {
    // 返回一个Promise
    return new Promise((resolve, reject) => {
      // 遍历promises获取每个Promise的结果
      promises.forEach((p, index) => {
        // p.then(
        // 将p包装成Promise-p可能不是Promise
        Promise.resolve(p).then(
          value => {
            // 一旦有成功的Promise，将return的Promise变为成功
            resolve(value)
          },
          reason => {
            // 一旦有失败的Promise，将return的Promise变为失败
            reject(reason)
          }
        )
      })
    })
  }

  /*
  返回一个Promise对象，在指定的时间后才确定结果
  */
  Promise.resolveDelay = function(value, time) {
    // 返回一个成功/失败的Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(value instanceof Promise) {
          // value 是Promise
          // 使用value的结果作为Promise的结果
          value.then(resolve, reject)
        } else {
          // value 不是Promise
          // Promise变为成功，数据是value
          resolve(value)
        }
      }, time);
    })
  }
  /*
  返回一个Promise对象，在指定的时间后才失败
  */
  Promise.rejectDelay = function(reason, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 返回一个失败的Promise
        reject(reason)
      }, time);     
    })    
  }

  // 向外暴露Promise函数
  window.Promise = Promise;
})(window)

```

