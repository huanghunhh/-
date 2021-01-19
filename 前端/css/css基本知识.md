# CSS 基本知识

## 笔记整理说明

- 视频来源

  黑马程序员 pink老师

- 现存位置

  [视频位置](J:\前端\黑马程序员\黑马程序员_pink老师\)

## CSS 简介

### CSS 介绍

- 作用

  美化网页，布局页面

- 名称

  + 层叠样式表 Cascading Style Sheets
  + CSS 样式表
  + 级联样式表

- 用法

  + 设置 `HTML` 页面中的文本内容（字体、大小、对齐方式）
  + 图片的外形（宽高、边框样式、边距）
  + 版面的布局和外观显示样式 

- HTML CSS 分离

  + HTML 专注做结构呈现
  + CSS 做样式

- CSS 规则

  由两个主要部分构造

  + 选择器

    指定 CSS 样式的 HTML 标签

  + 一条或多条声明

    ```css
    p {
        color: red;
    }
    ```

    

- CSS 代码风格

  + 样式格式书写

    * 紧凑格式

    * 展开格式 `√`

      ```css
      h3 {
          color: pink;
      }
      ```

  + 样式大小写风格

    * 全部使用小写字母

  + 样式空格风格

    * 属性值前面，冒号后面，保留一个空格
    * 选择器（标签）和大括号中间保留空格

### CSS 类型与引入

- 简介

  CSS的三类样式表

  行内样式表/行内式

  内部样式表/嵌入式

  外部样式表/链接式

- 内部样式表/嵌入式

  控制当前整个页面中的元素样式设置

  结构与样式部分分离

  ```css
  <style>
  div {
    color: red;
  }
  </style>
  /* 一般放在head标签中 */
  ```

- 行内样式表/行内式

  在元素标签内部的style属性中设定CSS样式，适合于修改简单样式

  ```css
  <p style="color: red; font-size: 20px">想你了</p>
  ```

- 外部样式表/链接式

  样式单独写到 CSS 文件中，通过 link 把 CSS 文件引入到 HTML 页面中

  ```css
  /* css文件*/
  p {
    color: red;
  }
  ```

  ```css
  <link rel="stylesheet" href="css文件路径">
  /*
  link-单标签
  rel-定义当前文档与被链接文档之间的关系，stylesheet表示被链接的文档是一个样式表文件
  href-定义所链接外部样式表文件的url
  */
  ```

- 结

  ![image-20210115214616331](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115214618.png)

## CSS 元素显示模式

- 简介

  网页的标签具有不同的特点

  元素的显示模式就是元素（标签）以什么方式进行显示

  HTML 元素一般分为块元素和行内元素两种类型-行内块元素综合这两种元素的特点

### 块元素

- 简介

  常见的块元素有

  ```css
  <h1>~<h6> <p> <ul> <ol> <li>
  <div> 典型的块元素
  ```
  
- 特点

  独占一行

  高度、宽度、外边距、内边距等属性可以设置

  宽度默认是容器的100%

  是一个容器、盒子，可以放行内或块级元素

- 注意

  文字类的块元素内不能使用块级元素

  ```css
  <p> <h1> 等都是文字类块级标签，里面不能放其他块元素
  ```
  
  ![image-20210116114707351](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116114708.png)

### 行内元素

- 简介

  又称内联元素

  常见的行内元素有

  ```css
  <a> <strong> <b> <em> <i> <del> <s> <ins> <u>
  <span> 典型的行内元素
  ```

- 特点

  一行可以显示多个

  高、宽直接设置是无效的-背景颜色可以设置

  默认宽度是它本身内容的宽度

  行内元素只能容纳文本或其他行内元素

- 注意

  链接里面不能再放链接了

  \<a\>标签链接里面可以放块级元素，但给\<a\>转换一下块级模式最安全

### 行内块元素

- 简介

  在行内元素中有几个特殊的标签

  ```css
  <img/> <input/> <td>
  ```

  同时具有块元素和行内元素的特点-称为行内块元素

- 特点

  行内元素特点-一行可以显示多个、默认宽度就是它本身内容的宽度

  块元素特点-高度、行高、外边距、内边距都是可以设置的

- 结

  ![image-20210116115301505](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116115303.png)

### 显示模式转换

- 简介

  让一个模式的元素转换为另一个模式

- 代码

  ```css
  display: block; /* 转换为块元素 */
  display: inline; /* 转换为行内元素 */
  display: inline-block; /* 转换为行内块元素 */
  
  a {
    display: inline-block;
    width: 300px;
    height: 30px;
  }
  ```

## CSS 属性

### font 字体属性

- 简介

  CSS Fonts（字体）属性用于定义**字体系列、大小、粗细、和文字样式**（如斜体）

- 字体系列

  ```css
  p {
    font-family: Arial, "Microsoft Yahei", "微软雅黑";
  }
  ```

  用英文写-兼容性会更好

  如果一个字体由多个单词组成，用引号引起来

  多个字体-前面的字体没有，会用后面的字体，都没有就会用浏览器的默认字体

- 字体大小

  ```css
  p {
    font-size: 20px;
  }
  ```

  px 像素单位

- 字体粗细

  ```css
  p {
    font-weight: bold;
  }
  ```

  属性值：normal(默认)-400 bold-700

- 字体样式

  ```css
  p {
    font-style: normal;
  }
  ```

  normal-默认值，标准

  italic-斜体

- 字体属性简写

  ```css
  选择器 {
    font: font-style font-weight font-size/line-height font-family;
  }
  /* 
  顺序不能乱，属性间以空格隔开，不需要设置的属性可以省略，
  但 font-size font-family 不能省略，不然font属性不起作用 
  */
  p {
    font: italic 700 16px/26px 'Microsoft yahei';
  }
  ```

#### font 字体属性总结

```css
p {
  font: font-style font-weight font-size/line-height font-family;
  font: italic 700 16px 'Microsoft yahei';
}
```

![image-20210115210707849](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115210708.png)

### text 文本属性

- 简介

  CSS Text（文本）属性可定义**文本的外观、比如文本的颜色、对齐文本、文本缩进、行间距**等

- 文本颜色

  ```css
  p {
    color: red;
  }
  ```

  属性值：

  + 预定义的颜色值（单词）

    red、green、blue

  + 十六进制（常用）

    #FF0000

  + RGB 代码

    rgb(255, 0, 0)

    rgb(100%, 0%, 0%)

    rgba(255, 0, 0, .5) 透明度

- 文本对齐

  ```css
  p {
    text-align: center;
  }
  ```

  属性值

  left-左对齐（默认）

  right-右对齐

  center-居中对齐

- 文本装饰

  ```css
  p {
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ```

  给文本添加下划线、删除线、上划线

  属性值

  none-没有装饰线（默认）

  underline-下划线（a链接自带）

  overline-上划线

  line-through-删除线

- 文本缩进

  ```css
  p {
    text-indent: 10px;
    text-indent: -10px;
    text-indent: 2em;
  }
  ```

  text-indent：指定文本的第一行的缩进，通常是将段落的首行缩进

  属性值可以为负值

  em 是个相对单位，就是当前元素（font-size）1个文字的大小，如果当前元素没有设置大小，则会按照父元素的 1 个文字大小

- 行间距

  ```css
  p {
    line-height: 26px;
  }
  ```

  line-height属性用于设置行间的距离，可以控制文字行与行之间的距离

  行高不跟单位-表示当前文字的行高为文字大小的倍数

  ![image-20210115212443650](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115212445.png)

- 单行文字垂直居中

  ![image-20210116115928463](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116115929.png)

#### text 文本属性总结

![image-20210115212610158](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115212611.png)

### background 背景属性

- 简介

  通过 CSS 的背景属性，可以设置**背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定**等

- 背景颜色

  ```css
  p {
    background-colod: 颜色值;
  }
  /* 颜色值：transparent(透明，默认)、color */
  ```

- 背景图片

  ```css
  div {
    background-image: none|url(file_url);
  }
  div {
    background-image: url(./pic.jpg);
  }
  /* 
  none-无（默认） 
  url-使用绝对或相对地址指定背景图像
  */
  ```

  背景图片和背景颜色可以同时设置，只是背景图片会盖住背景颜色

- 背景平铺

  ```css
  div {
    background-repeat: repeat|no-repeat|repeat-x|repeat-y;
  }
  /*
  repeat-背景图像在纵向和横向上平铺(默认)
  no-repeat-背景图像不平铺
  repeat-x-背景图像在横向上平铺
  repeat-y-背景图像在纵向上平铺
  */
  ```

- 背景位置

  ```css
  div {
    background-position: x y;
  }
  /*
  x y 坐标，可以使用方位名词或者精确单位
  方位名词：top|center|bottom | left|center|right
  通过单词可以识别是在指定x 还是 y ,故不要求单词顺序
  如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐
  div {
    background-position: center top;
    background-position: top right;
    background-position: top;
  }
  
  精确单位：百分数|由浮点数字和单位标识符组成的长度值
  与 x y 相对应
  只指定一个数值-该数值一定是 x 坐标，另一个默认垂直居中
  div {
    background-position: 20px 50px;
  }
  
  两者混合
  与 x y 相对应
  div {
    background-position: center 50px;
    background-position: 50px center;
  }
  */
  ```

- 背景固定

  一般用于制作视差滚动的效果

  ```css
  div {
    background-attachment: scroll|fixed;
  }
  /*
  scroll-背景图像是随对象内容滚动
  fixed-背景图像固定
  */
  ```

- 背景属性简写

  ```css
  div {
    background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;
    background: transparent url(./pic.jpg) no-repeat fixed center top;
  }
  /* 未要求书写顺序，但一般约定这样写 */
  ```

#### background 背景属性总结

```css
div {
  background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;
  background: transparent url(./pic.jpg) no-repeat fixed center top;
}
```

![image-20210116122455919](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116122457.png)

### 元素的显示与隐藏

- 简介

  控制元素在页面中隐藏或者显示

#### display 属性

- 简介

  多种用法，可以设置元素的显示模式，控制元素应该如何显示

  ![image-20210117185714961](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117185716.png)

- 显示/隐藏

  ```css
  div {
    display: none;
  }
  /*
  属性值：
  none - 隐藏元素，且不保留原来的位置
  block - 显示元素，转换为块级元素
  */
  ```

- 显示模式

  ```css
  div {
    display: inline-block;
  }
  /*
  属性值：
  block - 转换为块级元素
  inline - 转换为行内元素
  inline-block - 转换为行内块元素
  */
  ```

- 布局

  ```css
  div {
    display: flex;
  }
  /*
  属性值：
  flex - 将元素作为弹性伸缩显示
  */
  ```

#### visibility 属性

- 简介

  指定元素应该可见还是隐藏

  ![image-20210117190331887](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117190332.png)

- 显示/隐藏

  ```css
  div {
    visibility: hidden;
  }
  /*
  属性值：
  hidden - 隐藏，但保留原来的位置
  visible - 显示
  collapse - 隐藏表格的行或列
  */
  ```

  display: none;  - 隐藏元素，且不保留原来的位置  

  visibility: hidden;  - 隐藏，但保留原来的位置

#### overflow 属性

- 简介

  overflow 属性指定了如果内容溢出一个元素的框时，会怎么显示溢出内容

  当有定位的盒子，慎用 overflow: hidden; ，因为它会隐藏多余部分

  ![image-20210117191021256](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117191023.png)

- 代码

  ```css
  div {
    overflow: hidden;
  }
  /*
  属性值：
  visible - 显示溢出内容（默认）
  hidden - 隐藏溢出内容，且不显示滚动条
  scroll - 隐藏溢出内容，但溢出内容以卷动滚动条的方式显示（始终显示滚动条）
  auto - 内容没有溢出时，不显示滚动条，内容溢出时，显示滚动条
  */
  ```

  ![image-20210117191539750](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117191541.png)


## CSS 选择器

- 作用
  根据不同需求把不同的标签选择出来
- 分类
  + 基础选择器
    * 标签选择器
    * 类选择器
    * id 选择器
    * 通配符选择器
  + 复合选择器
    * 后代选择器
    * 子选择器
    * 并集选择器
    * 伪类选择器

### 标签选择器

- 简介

  用 HTML 标签名称作为选择器，为页面中某一类标签指定统一的 CSS 样式

- 作用

  把某一类标签全部选择出来

- 优点
  
  能快速为页面中同类型的标签统一设置样式
  
- 缺点

  不能设计差异化样式，只能选择全部的当前标签

- 代码

  ```css
  标签名 {
    属性1: 属性值1;
    属性n: 属性值n;
  }
  p {
      color: red;
  }
  ```

### 类选择器

- 简介

  选择拥有不同class类属性的标签

  或，定义好样式，标签通过其类名来调用该样式

- 作用

  差异化选择不同的标签

  单独选一个或者某几个标签

- 注意
  + 标识 - 英文点号`.` 后面紧跟类名
  + 词组 - 使用中横线`-`来为选择器命名
  + 命名规范
  
- 类选择器口诀

  样式点定义、结构类调用、一个或多个、开发最常用

- 代码

  ```html
  <body>
      <div class="box-red">红色</div>
      <div class="box-green">绿色</div>    
  </body>
  ```

  ```css
  .类名 {
    属性1: 属性值1;
    属性n: 属性值n;
  }
  .box-red {
      background-color: red;
  }
	.box-green {
      background-color: green;
  }
  ```

- 多类名

  可以给标签指定多个类名，从而达到更多的选择目的

  多类名中间必须用空格分开

  可以把一些标签元素相同的样式（共同部分）放到一个类里面，这些标签都可以调用这个公共的类，然后再调用自己独有的类（如果相同部分不是很有独立性，也可以分别写在各个类中，毕竟单独写个相同的类，如果要分开也麻烦）

### id 选择器

- 简介

  为标有特定 id 的 HTML 元素指定特定的样式

  一般 id 都是唯一的

- 口诀

  样式#定义，结构id调用，只能调用一次，别人切勿使用

- 代码

  ```css
  #id名 {
    属性1: 属性值1;
    属性n: 属性值n;
  }
  #nav {
    color: red;
  }
  ```

- 与类选择器

  id 选择器仅使用一次，一般用于页面唯一的元素上，经常与JS搭配使用

  类选择器多对多，在修改样式中使用的最多

### 通配符选择器

- 简介

  使用 `*` 定义，表示选取页面中所有元素标签

  会遍历并命中文档中所有的元素，性能太差，不建议使用

  不需要手动调用，自动就给所有的元素使用该样式

- 代码

  ```css
  * {
    属性1: 属性值1;
    属性n: 属性值n;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ```

- 结

  ![image-20210115204659697](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115204701.png)

### 后代选择器

- 简介

  又称包含选择器，可以选择父元素里面的子元素

  把外层标签写在前面，内层标签写在后面，中间用空格分隔，当标签发生嵌套时，内层标签就成为外层标签的后代

- 代码

  ```css
  元素1 元素2 {
    样式声明
  }
  /* 选择元素1里面的所有元素2（后代元素） */ 
  ol li {
    color: red;
  }
  .nav li a {
  color: black;
  }
  ```

### 子选择器

- 简介

  只能选择作为某元素的最近一级子元素，就行选择亲儿子元素

- 代码

  ```css
  父元素 亲儿子元素 {
    样式声明
  }
  div > p {
    color: red;
  }
  ```
  
  选择亲儿子，最终选择的是亲儿子元素

### 并集选择器

- 简介

  可以选择多组标签，同时为他们定义相同的样式，通常用于集体声明

  各选择器通过英文逗号(,)连接而成，逗号就相当于和的意思

- 代码

  ```css
  元素1,
  元素2 {
    样式声明
  }
  div,
  p {
    color: red;
  }
  ```

### 链接伪类选择器

- 伪类选择器

  伪类选择器用于向某些选择器添加特殊效果，比如给链接添加特殊效果，或选择第1个，第n个元素

  写法：冒号(:)+特定单词

  分类

  + 链接伪类
  + 结构伪类

- 链接伪类选择器

  a 链接

  ```css
  a:link /* 选择所有未被访问的链接 */
  a:visited /* 选择所有已被访问的链接 */
  a:hover /* 选择鼠标指针位于其上的链接 */
  a:active /* 选择活动链接（鼠标按下未弹起的链接） */
  /*
  需按照上述顺序声明链接伪类选择器
  */
  
  /* 开发常用 */
  a {
    color: #333;
    text-decoration: none;
  }
  a:hover {
    color: #369;
    text-decoration: underline;
  }
  ```

  input 表单元素

  ```css
  input:focus /* 选取获得焦点（光标）的表单元素 */
  
  input:focus {
    background-color: red;
  }
  ```

- 结

  ![image-20210116113805076](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116113901.png)

### 属性选择器

- 简介

  CSS3 新增的选择器有：属性选择器、结构伪类选择器、伪元素选择器

- 属性选择器

  ![image-20210118144153809](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118144154.png)

  根据元素的特定属性来选择元素，这样就可以不用借助于类或者id选择器

  权重为10

- 代码

  ```css
  input[value] { /* 选择具有value属性的input标签 */
    color: red;
  }
  input[type=text] { /* 选择属性type=text的input标签 */
    color: black;
  }
  div[class^=icon] { /* 选择具有class属性，且属性值以icon开头的input标签 */
    color: blue;
  }
  div[class$=data] { /* 选择具有class属性，且属性值以data结尾的input标签 */
    color: gray;
  }
  
  /* 
  其中
  input 是标签选择器
  [value] 是属性选择器
  input[value] 的权重则为11
  */
  ```

### 结构伪类选择器

- 简介

  ![image-20210118145031622](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118145032.png)

  结构伪类选择器是根据文档结构来选择元素，常用于根据父级选择里面的子元素

  :first-child 即是结构伪类选择器，权重为10

- 代码

  ```css
  /* 计算ul标签的所有子元素的个数，选择第一个子元素 */
  ul :first-child { 
    color: red;
  }
  /* 计算ul标签的所有子元素的个数，如果第一个子元素是li标签，则选择 */
  ul li:first-child { 
    color: red;
  }
  /* 计算ul标签的所有子元素的个数，如果最后一个子元素是li标签，则选择 */
  ul li:last-child { 
    color: red;
  }
  /* 计算ul标签的所有子元素的个数，如果第x个子元素是li标签，则选择 */
  ul li:nth-child(x) { 
    color: red;
  }
  /*
  x 可以是数字、关键字、公式
  数字 - 选择第 x 个子元素，从 1 开始
  关键字 - 如even为偶数，odd为奇数
  公式 - 以 n 为自变量，为自然数范围，从 1 开始
  常用公式
  n - 全部
  2n - 偶数
  2n+1 - 奇数
  5n - 5, 10, 15 ...
  n+5 - 包含第 5 个，及其之后的
  -n+5 - 前5个且包含第5个
  */
  /* 只计算指定子元素的个数，选择第一个 */
  ul :first-of-type { 
    color: red;
  }
  /* 只计算指定子元素的个数，选择第一个li标签 */
  ul li:first-of-type { 
    color: red;
  }
  /* 只计算指定子元素的个数，选择最后一个li标签 */
  ul li:last-of-type { 
    color: red;
  }
  /* 只计算指定子元素的个数，选择第x个li标签 */
  ul li:nth-of-type(x) { 
    color: red;
  }
  ```

- 结

  ![image-20210118150700458](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118150702.png)

### 伪元素选择器

- 简介

  ![image-20210118150914296](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118150915.png)

  ![image-20210118150931254](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118150932.png)

  ![image-20210118151030662](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118151032.png)

  ![image-20210118151054077](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118151055.png)

- 代码

  ```css
  div::before {
    content: "前面";
  }
  div::after {
    content: '后面';
  }
  /*
  在文档树中是找不到的，故称为伪元素
  是行内元素
  必须要有content属性
  权重为1
  */
  ```

- 伪元素字体图标

  ```css
  @font-face {
  	/* 引入 */
  }
  
  div {
    position: relative;
    width: 200px;
    height: 35px;
    border: 1px solid red;
  }
  
  div::after {
    position: absolute;
    top: 10px;
    right: 10px;
    font-family: 'icomoon';
    /* content: ''; */
    content: '\e91e';
    color: red;
    font-size: 18px;
  }
  ```

  ![image-20210118154308489](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118154309.png)

- 伪元素做遮罩

  ```css
  .tudou {
    position: relative;
    width: 444px;
    height: 320px;
    background-color: pink;
    margin: 30px auto;
  }
  
  .tudou img {
    width: 100%;
    height: 100%;
  }
  
  .tudou::before {
    content: '';
    /* 隐藏遮罩层 */
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
  }
  
  /* 当我们鼠标经过了 土豆这个盒子，就让里面before遮罩层显示出来 */
  .tudou:hover::before {
    /* 而是显示元素 */
    display: block;
  }
  ```

- 伪元素清除浮动

  ```css
  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  ```
  
  


## CSS 三大特性

- 简介

  CSS 三大特性：层叠性、继承性、优先级

### 层叠性

- 简介

  相同选择器给设置相同的样式，此时一个样式就会**覆盖（层叠）**另一个冲突的样式

  层叠性就是解决样式冲突的问题

- 层叠性原则

  样式冲突，遵循的原则是**就近原则**，哪个样式离结构近，就执行哪个样式

  样式不冲突，就不会层叠

  ![image-20210116131422599](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116131424.png)

### 继承性

- 简介

  子标签会继承父标签的某些样式，如文本颜色和字号

  一般，text-、font-、line- 这些元素开头的，color属性可以继承

  某些样式不会继承

- 行高的继承

  ![image-20210116131735275](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116131736.png)

  行高不跟单位-表示当前文字的行高为文字大小的倍数

### 优先级

- 简介

  当同一个元素指定多个选择器后，就会有优先级的产生

  选择器不同，根据选择器权重执行（优先级不同）

  选择器优先级相同，则执行层叠性

- 选择器的权重

  ![image-20210116132019239](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116132020.png)

  ```css
  div {
    color: red !important;
  }
  ```

  ![image-20210116132154494](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116132156.png)

- 权重的叠加

  ![image-20210116132349442](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116132350.png)

  权重叠加，但不会进位

  相当于选择范围小的，选择精确些的，就用该样式

## Emmet 语法

- 简介

  使用缩写，来快速生成 HTML 结构语法、CSS 样式语法

  ![image-20210115215556857](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115215600.png)

- 利用 Emmet 语法快速生成 HTML 结构

  输入标签名后，按下 tab 生成标签

  \* 生成几个

  \> 父子级标签

  \+ 兄弟级标签

  . 带类名

  \# 带id名

  $ 自增符号

  {} 标签中生成内容

  ![image-20210115220058172](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115220104.png)

- 利用 Emmet 语法快速生成 css 样式

  ![image-20210115220304058](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115220305.png)

- 快速格式化代码

  Shift + Alt + f

  ![image-20210115220354161](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210115220355.png)

  不一定好用