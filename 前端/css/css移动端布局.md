# CSS 移动端布局

## 移动端

- 简介

  ![image-20210120102020056](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120102110.png)

  ![image-20210120102205924](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120102207.png)

  ![image-20210120102236083](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120102237.png)

  ![image-20210120110725965](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120110727.png)

  ![image-20210120110949437](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120110950.png)

  ![image-20210120111006075](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120111009.png)

### 视口

- 布局视口

  ![image-20210120111138955](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120111142.png)

- 视觉视口

  ![image-20210120111212284](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120111213.png)

- 理想视口

  ![image-20210120111328192](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120111329.png)

  理想视口 - 设备有多宽，我们的布局视口就多宽
  
  ![image-20210120111358674](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120111359.png)

### meta 视口标签

- 简介

  ![image-20210120113048718](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120113050.png)

  ![image-20210120113114571](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120113116.png)

- 代码

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0, minimum-scale=1.0 user-scalable=no" >
  <!--
  content 内容
  属性 - 解释说明
  width - 设置viewport的宽度，可以设置为device-width特殊值
  initial-scale - 初始缩放比，>0
  maximum-scale - 最大缩放比，>0
  minimum-scale - 最小缩放比，>0
  user-scalable - 用户是否可以缩放，yes或no（1或0）
  -->
  ```

  ![image-20210120112150985](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120112152.png)

### 物理像素与物理像素比

- 简介

  ![image-20210120112320323](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120112321.png)

  ![image-20210120112325926](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120112328.png)

  ![image-20210120113443620](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120113444.png)

  物理像素 - 分辨率

  物理像素比 - 1px能显示的物理像素点的个数

### 二倍图

- 简介

  ![image-20210120113631434](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120113632.png)

  把更多的物理像素点压缩至一块屏幕里
  
  ![image-20210120113821171](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120113822.png)
  
  另一种解释：iphone8 的是 50\*50，但它压缩了，1代表了2，故需要100\*100的图片
  
  然后让图片也跟着压缩，成为50\*50就可以了

- 二倍精灵图

  ![image-20210120122828662](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120122831.png)

### 多倍图

![image-20210120114202196](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120114203.png)

### 多倍图切图

![image-20210120115124625](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120115125.png)

### 背景缩放

```css
div {
  background: url(pic.jpg) no-repeat;
  background-size: 500px 200px; /* 设置宽度 高度 */
  background-size: 500px; /* 设置宽度，并等比缩放 */
  background-size: 50%; /* 显示的百分比 */
  background-size: cover; /* 等比拉伸，直至完全覆盖盒子，可能会有部分背景图片显示不全 */
  background-size: contain; /* 等比拉伸，直至有一边覆盖盒子，可能有部分空白区域 */
}
```



![image-20210120114251941](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120114253.png)

![image-20210120114544210](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120114545.png)

![image-20210120115150278](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120115151.png)

### 移动端开发

![image-20210120115835283](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120115836.png)

![image-20210120115853367](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120115854.png)

![image-20210120115922072](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120115923.png)

![image-20210120120059470](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120120100.png)

[css初始化模板文件](https://necolas.github.io/normalize.css/)

```css
body {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
a {
  /* 移动端点击链接默认会有背景高亮 */
  -webkit-tap-highlight-color: transparent;
}
input {
  /* 按钮会有默认的外观效果 */
  -webkit-appearance: none;
}
a,
img {
  /* 禁用长按页面时弹出菜单 */
  -webkit-touch-callout: none;
}
```

![image-20210120120414047](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120120415.png)

## 流式布局

- 布局简介

  ![image-20210120120525172](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120120526.png)

- 流式布局

  ![image-20210120121725119](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120121726.png)

  流式布局，就是百分比布局：通过盒子的宽度设置成百分比，来根据屏幕的宽度进行伸缩，不受固定像素的限制，内容向两侧填充

- 示例

  ![image-20210120122937608](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120122938.png)

  ![image-20210120123106289](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120123107.png)

  ```html
  <body>
    <!-- 搜索区域 始 -->
    <div class="search-wrap">
      <div class="search-btn"></div>
      <div class="search">
        <div class="jd-icon"></div>
        <div class="sou"></div>
      </div>
      <div class="search-login">登陆</div>
    </div>
    <!-- 搜索区域 终 -->
  </body>
  ```

  ```css
  /* 搜索区域 始 */
  .search-wrap {
      /* 是使用固定定位-效果不一样 */
      /* position: relative; */
      position: fixed;
      /* 外边距合并问题 */
      overflow: hidden;
      height: 44px;
      /* 固定定位的盒子一定有宽度-然后再设置最大/小宽度 */
      width: 100%;
      min-width: 320px;
      max-width: 640px;
  }
  .search-wrap .search-btn {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 44px;
  }
  .search-wrap .search-btn::before {
      content: "";
      display: block;
      width: 20px;
      height: 18px;
      background: url(../images/s-btn.png) no-repeat;
      background-size: 20px 18px;
      margin: 14px 0 0 15px;
  }
  .search-wrap .search-login {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 44px;
      color: #fff;
      line-height: 44px;
  }
  .search-wrap .search {
      position: relative;
      background-color: #fff;
      height: 30px;
      margin: 7px 50px 0;
      border-radius: 15px;
  }
  .search-wrap .search .jd-icon {
      position: absolute;
      top: 8px;
      left: 13px;
      width: 20px;
      height: 15px;
      background: url(../images/jd.png) no-repeat;
      background-size: 20px 15px;
  }
  .search-wrap .search .jd-icon::after {
      position: absolute;
      top: 0;
      right: -8px;
      content: "";
      display: block;
      width: 1px;
      height: 15px;
      background-color: #ccc;
  }
  .search-wrap .search .sou {
      position: absolute;
      top: 8px;
      left: 50px;
      width: 18px;
      height: 15px;
      /* 将精灵图的图片缩放为原来的一半-测量坐标-修改background-size */
      background: url(../images/jd-sprites.png) no-repeat -81px 0;
      background-size: 200px auto;
  }
  /* 搜索区域 终 */
  ```

## flex 布局

- 简介

  ![image-20210120124706408](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120124707.png)

- 布局原理

  ![image-20210120130017606](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120130019.png)

  flex - 弹性布局，用来为盒状模型提供最大的灵活性

  又称 flex布局、弹性布局、弹性盒布局、伸缩布局、伸缩盒布局

  当我们为父盒子设为 flex布局后，子元素的 float、clear和vertical-align属性将失效

  父元素 - 采用flex布局的元素，称为flex容器，简称容器

  子元素 - 容器的所有子元素自动成为容器成员，称为flex项目，简称项目

  -通过给父盒子添加flex属性，来控制子盒子的位置和排列方式

### flex 布局父项

- 简介

  ![image-20210120130736731](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120130950.png)

  ```css
  .father {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: space-around;
  }
  /*
  flex布局父项常见属性：
  flex-direction - 设置主轴方向，剩下的就是侧轴，子元素跟着主轴来排列
    属性值：
    row 从左到右-默认
    row-reverse 从右到左
    column 从上到下
    column-reverse 从下到上
  
  justify-content 设置主轴上的子元素排列方式
  	属性值：
  	flex-start 从头部开始，如果主轴是x轴，则从左到右 默认值
    flex-end 从尾部开始排列
    center 在主轴居中对齐，如果主轴是x轴，则水平居中
    space-around 平分剩余空间
    space-between 先两边贴边，再平分剩余空间-重要
  
  flex-wrap 设置子元素是否换行
  	属性值：
    nowrap 不换行 默认值
    wrap 换行
  
  align-items 设置侧轴上的子元素排列方式（单行）
  	属性值：
  	flex-start 从上到下
    flex-end 从下到上
    center 垂直居中，挤在一起居中
    stretch 拉伸 默认
  
  align-content 设置侧轴上的子元素的排列方式（多行）
    属性值：
    flex-start 在侧轴的头部开始排列 默认
    flex-end 在侧轴的尾部开始排列
    center 在侧轴中间显示
    space-around 子项在侧轴平分剩余空间
    space-between 子项在侧轴先分布在两头，再平分剩余空间
    stretch 设置子项元素高度平分父元素高度
  
  flex-flow 复合属性，相当于同时设置了flex-direction和flex-wrap
  
  */
  
  .son {
    flex: 1;
  }
  /*
  flex布局子项常见属性：
  flex 子项目占的份数
  
  align-self 控制子项自己在侧轴的排列方式
  	允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性，默认值为auto
  
  order 定义子项的排列顺序（前后顺序）
  	数值越小，排列越靠前，默认为0
  */
  ```

#### flex-direction 

设置主轴方向

![image-20210120131037300](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120131038.png)

默认的主轴与侧轴

主轴-x轴 水平向右 横向排列

侧轴-y轴 垂直向下 纵向排列

![image-20210120131226633](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120131227.png)

#### justify-content

设置主轴上的子元素排列方式

![image-20210120131830688](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120131831.png)

![image-20210120132146983](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120132148.png)

#### flex-wrap 

设置子元素是否换行

![image-20210120132530206](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120132531.png)

#### align-items 

设置侧轴上的子元素排列方式（单行）

![image-20210120132822897](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120132824.png)

![image-20210120132930050](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120132931.png)

![image-20210120132855185](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120132856.png)

#### align-content

设置侧轴上的子元素的排列方式（多行）

![image-20210120133047827](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120133048.png)

![image-20210120133318210](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120133319.png)

- align-content 和 align-items的区别

![image-20210120133415768](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120133417.png)

#### flex-flow 复合属性

![image-20210120133540481](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120133541.png)

### flex 布局子项

- 简介

  ![image-20210120133646469](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120133649.png)

#### flex 属性

![image-20210120134052836](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134054.png)

![image-20210120134350121](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134351.png)

![image-20210120134428952](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134430.png)

#### align-self 

控制子项自己在侧轴的排列方式

![image-20210120134539022](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134540.png)

![image-20210120134653525](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134655.png)

#### order 

定义子项的排列顺序（前后顺序）

![image-20210120134711358](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134712.png)

![image-20210120134734074](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134735.png)

## 背景线性渐变

![image-20210120134921046](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134922.png)

![image-20210120134943227](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120134944.png)

## rem 布局

- 简介

  ![image-20210120141013541](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120141015.png)

  ![image-20210120141106880](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120141107.png)

  ![image-20210120141233270](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120141234.png)

  布局文字随屏幕大小变化

  让高度自适应

  让元素随屏幕自适应

### rem 基础

- em

  ![image-20210120141602953](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120141604.png)

  em 相对父元素字体大小

- rem

  ![image-20210120141724427](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120141725.png)

  rem 相对html元素的字体大小

  html元素唯一 - 使用rem则可自适应

  rem 的优点就是可以通过修改 html 里面的文字大小来改变页面中元素的大小，可以做整体控制

  ![image-20210120142150567](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120142151.png)

  -rem是基于html的字体大小，对不同的设备，只需要调整html的字体大小就能自适应——怎么改变html的字体大小？

### 媒体查询 @media

- 简介

  ![image-20210120152514660](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210120152516.png)

  @media 可以针对不同的媒体类型定义不同的样式、针对不同的屏幕尺寸设置不同的样式

- 代码

  ```css
  /* 在屏幕上，当屏幕最大宽度是500px（宽度不超过500px）时，设置成想要的样式 */
  @media screen and (max-width: 500px) {
    body {
      background-color: red;
    }
  }
  @media mediatype 关键字 (媒体特性) {
    /* 定义样式 */
  }
  /*
  @media 定义媒体查询
  
  mediatype - 定义媒体类型
  	属性值：
  	all - 用于所有设备
  	print - 用于打印机和打印预览
  	scree - 用于电脑屏幕、平板电脑、智能手机
  
  关键字 - 将媒体类型或多个媒体特性连接到一起，作为媒体查询的条件
  	属性值：
  	and - 且，可以将多个媒体特性连接到一起
  	not - 非，排除某个媒体类型（可以省略）
  	only - 仅，指定某个特定的媒体类型（可以省略）
  
  媒体特性 - 每种媒体类型都具有不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格
  	width - 定义输出设备中页面可见区域的宽度
  	min-width - 定义输出设备中页面最小可见区域的宽度
  	max-width - 定义输出设备中页面最大可见区域的宽度
  */
  ```

  ![image-20210120154723840](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002520.png)

- 示例

  ![image-20210120154629229](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002622.png)

- 根据页面宽度改变背景颜色

  ![image-20210120204125209](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002651.png)

  ```css
  /* 媒体查询一般按照从大到小或者从小到大的顺序来 */
  /* 习惯按照从小到大的顺序 */
  /* 小于 540px ，页面的背景颜色变为蓝色 */
  @media screen and (max-width: 539px) {
    body {
      background-color: blue;
    }
  }
  /* 540~970px ，页面的背景颜色变为绿色 */
  /* @media screen and (min-width: 540px) and (max-width: 969px) { */
  @media screen and (min-width: 540px) {
    body {
      background-color: green;
    }
  }
  /* 大于等于 970px ，页面的背景颜色变为红色 */
  @media screen and (min-width: 970px) {
    body {
      background-color: red;
    }
  }
  ```

#### 引入资源

```css
<link rel="stylesheet" href="css.css" media="screen and (min-width: 320px)">
```

![image-20210120210144494](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002717.png)

### 实现元素动态大小变化

- 简介

  ![image-20210120204339513](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002734.png)

  

- 示例

  ![image-20210120205006379](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002746.png)

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  /* 从小到大的顺序 */
  @media screen and (min-width: 320px) {
    html {
      font-size: 50px;
    }
  }
  @media screen and (min-width: 640px) {
    html {
      font-size: 100px;
    }
  }    
  .top {
    height: 1rem;
    font-size: .5rem;
    background-color: green;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
  ```

### less 基础

- 简介

  ![image-20210120211844599](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002802.png)

  less 是 一种css预处理器，是css扩展语言

  在css语法上，为css加入程序式语言的特性，如：引入变量、混入、运算以及函数等功能

  简化了css的编写，降低了css的维护成本

  [less中文网](http://lesscss.cn/)

- less 使用

  ```less
  // less 变量
  @变量名: 值;
  // less 选择器嵌套
  #header {
    .logo { // 编译后，两选择器间有空格
      width: 300px;
    }
  }
  #header {
    &:hover { // 编译后，两选择器间无空格
      width: 500px;
    }
  }
  // less 运算
  @baseFont: 50px;
  html {
    font-size: @baseFont * 2;
    // 一个单位，结果以该单位为准
  }
  img {
    width: 82rem / @baseFont;
    // 两个单位，结果以第一个单位为准
  }
  ```

  ![image-20210120214825720](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002820.png)

  ![image-20210120215349211](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002834.png)

  ![image-20210120220612345](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002847.png)
  

### rem 适配

- 简介

  rem 适配方案

  ![image-20210120230456508](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002907.png)

  less + 媒体查询 + rem

- 设计稿

  尺寸转换

  + 以750px为基准划分为15等份，每份50px，定义为html字体大小
  + 其他元素的大小，以rem为单位，则另外计算
  + 其他屏幕的html字体大小为：屏幕大小*50/750=屏幕大小/份数

  ![image-20210121001312650](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121002926.png)

### 苏宁首页案例

- 简介

  ![image-20210121085239666](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121085241.png)

  [苏宁首页](https://m.suning.com/)

#### less + 媒体查询 + rem 方案

![image-20210121112748205](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121112750.png)

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>Document</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
  <!-- 顶部搜索框 始 -->
  <div class="search-content">
    <a href="" class="classify"></a>
    <div class="search">
      <form action="">
        <input type="search" placeholder="厨卫保暖">
      </form>
    </div>
    <a href="" class="login">登录</a>
  </div>
  <!-- 顶部搜索框 终 -->

  <!-- banner 始 -->
  <div class="banner">
    <img src="upload/banner.gif" alt="">
  </div>
  <!-- banner 终 -->

  <!-- 广告区域 始 -->
  <div class="ad">
    <a href="#"><img src="upload/ad1.gif" alt=""></a>
    <a href="#"><img src="upload/ad2.gif" alt=""></a>
    <a href="#"><img src="upload/ad3.gif" alt=""></a>
  </div>
  <!-- 广告区域 终 -->

  <!-- nav 导航区域 始 -->
  <nav>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
    <a href="#">
      <img src="upload/nav1.png" alt="">
      <span>爆款手机</span>
    </a>
  </nav>
  <!-- nav 导航区域 终 -->
</body>
</html>
```

```less
// 全局的 common.less 文件
a {
  text-decoration: none;
}

// 设置常见的屏幕尺寸，修改里面的html文字大小
// pc端打开，就是这么大
// 其他小尺寸的进行自适应 - 一定要写到最上面
html {
  font-size: 50px;
}

// 定义划分的份数为 15
@no: 15;
// 320px
@media screen and (min-width: 320px) {
  html {
    font-size: 320px / @no;
  }
}
// 360px
@media screen and (min-width: 360px) {
  html {
    font-size: 360px / @no;
  }
}
// 375px iphone 678
@media screen and (min-width: 375px) {
  html {
    font-size: 375px / @no;
  }
}
// 384px
@media screen and (min-width: 384px) {
  html {
    font-size: 384px / @no;
  }
}
// 400px
@media screen and (min-width: 400px) {
  html {
    font-size: 400px / @no;
  }
}
// 414px
@media screen and (min-width: 414px) {
  html {
    font-size: 414px / @no;
  }
}
// 424px
@media screen and (min-width: 424px) {
  html {
    font-size: 424px / @no;
  }
}
// 480px
@media screen and (min-width: 480px) {
  html {
    font-size: 480px / @no;
  }
}
// 540px
@media screen and (min-width: 540px) {
  html {
    font-size: 540px / @no;
  }
}
// 720px
@media screen and (min-width: 720px) {
  html {
    font-size: 720px / @no;
  }
}
// 750px
@media screen and (min-width: 750px) {
  html {
    font-size: 750px / @no;
  }
}

```

```less
// 首页的样式less文件
// 导入 common.less 文件
// @import "./common.less";
@import "common";
// 750px屏幕下，每份的宽度 50px
@baseFont: 50px;

body {
  min-width: 320px;
  width: 15rem; // 15份都布满
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #F2F2F2;
}

// 顶部搜索框 始
.search-content {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
  // 搜索框原高度是 88px，除以 @baseFont，转换为 rem 单位
  height: 88rem / @baseFont;
  background-color: #FFC001;
  .classify {
    width: 44rem / @baseFont;
    height: 70rem / @baseFont;
    margin: 11rem / @baseFont 25rem / @baseFont 7rem / @baseFont 24rem / @baseFont;
    background: url(../images/classify.png) no-repeat;
    // 背景缩放
    background-size: 44rem / @baseFont 70rem / @baseFont;
  }
  .search {
    flex: 1;
    input {
      // 输入时，无外轮廓线
      outline: none;
      border: 0;
      width: 100%;
      height: 66rem / @baseFont;
      border-radius: 33rem / @baseFont;
      background-color: #FFF2CC;
      margin-top: 12rem / @baseFont;
      font-size: 25rem / @baseFont;
      padding-left: 55rem / @baseFont;
      color: #757575;
    }
  }
  .login {
    width: 75rem / @baseFont;
    height: 70rem / @baseFont;
    margin: 10rem / @baseFont;
    font-size: 25rem / @baseFont;
    text-align: center;
    line-height: 70rem / @baseFont;
    color: #fff;
  }
}
// 顶部搜索框 终

// banner 始
.banner {
  width: 750rem / @baseFont;
  height: 368rem / @baseFont;
  img {
    width: 100%;
    height: 100%;
  }
}
// banner 终

// 广告区域 始
.ad {
  display: flex;
  a {
    flex: 1;
    img {
      width: 100%;
    }
  }
}
// 广告区域 终

// nav 导航区域 始
nav {
  width: 750rem / @baseFont;
  a {
    float: left;
    width: 150rem / @baseFont;
    height: 140rem / @baseFont;
    text-align: center;
    img {
      display: block;
      width: 82rem / @baseFont;
      height: 82rem / @baseFont;
      margin: 10rem / @baseFont auto 0;
      padding: 0;
    }
    span {
      display: block;
      margin-top: 10rem / @baseFont;
      font-size: 25rem / @baseFont;
      color: #333;
    }
  }
}
// nav 导航区域 终
```

#### flexible.js

[flexible在github上的下载地址](https://github.com/amfe/lib-flexible)

![image-20210121151413605](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121151417.png)

![image-20210121152643440](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121152644.png)

新版的VScode的设置

![image-20210121153758854](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121153800.png)

```html
<!-- 苏宁首页，flexible 方案 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  <title>Document</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/index.css">
  <!-- 引入 flexible.js 文件 - 就是下载的 index.js -->
  <script src="js/flexible.js"></script>
</head>
<body>
  <div class="search-content">
    <a href="#" class="classify"></a>
    <div class="search">
      <form action="">
        <input type="search" value="苏宁易购">
      </form>
    </div>
    <a href="#" class="login">登录</a>
  </div>
</body>
</html>
```

```css
/* index.css 样式文件 */
body {
  min-width: 320px;
  /* 按照屏幕来划分的，需要限定最大宽度 */
  max-width: 750px;
  /* flexible.js 是将其划分成 10 等份 */
  width: 10rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  background: #F2F2F2;
}

a {
  text-decoration: none;
  font-size: .333333rem;
}

/* cssrem插件 - 将 px 转换为 rem  */
/* 默认的 html 文字大小 cssroot = 16px */
/* 通过设置修改Cssrem */

/* 通过flexible，页面敏感，有变化则跟着自适应变化 */

/* 如果屏幕超过750px，则按照 750px 设计稿来设计 */
@media screen and (min-width: 750px) {
  html {
    font-size: 75px !important;
  }
}

.search-content {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 1.173333rem;
  background-color: #FFC001;
}
.search-content .classify {
  width: .586667rem;
  height: .933333rem;
  background: url(../images/classify.png) no-repeat;
  background-size: .586667rem .933333rem;
  margin: .146667rem .333333rem .133333rem;
}
.search-content .search {
  flex: 1;
}
.search-content .search input {
  outline: none;
  border: 0;
  width: 100%;
  height: .88rem;
  font-size: .333333rem;
  background-color: #FFF2CC;
  margin-top: .133333rem;
  border-radius: .44rem;
  color: #757575;
  padding-left: .733333rem;
}
.search-content .login {
  width: 1rem;
  height: .933333rem;
  margin: .133333rem;
  color: #fff;
  text-align: center;
  line-height: .933333rem;
  font-size: .333333rem;
}

```

```js
// 网上下载的 flexible.js 文件
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))

```

## 响应式布局

### 响应式原理

- 简介

  页面布局随页面大小而发生了响应，进行了不同的布局模式

  不需要单独写移动端页面，响应不同的设备来发生变化（包括PC端、pad端、移动端）

  ![image-20210122164019304](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122164020.png)

  ![image-20210122164117000](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122164118.png)

- 原理

  ![image-20210122172332982](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122172334.png)

  布局容器

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .container {
        height: 150px;
        background-color: aliceblue;
        margin: 0 auto;
      }
      /* 1.超小屏幕下，小于 768px，布局容器的宽度为 100% */
      @media screen and (max-width: 767px) {
        .container {
          width: 100%;
        }
      }
      /* 2.小屏幕下，大于等于 768px，布局容器的宽度为 750px */
      @media screen and (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
      /* 3.中等屏幕下，大于等于 992px，布局容器的宽度为 970px */
      @media screen and (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
      /* 4.大屏幕下，大于等于 1200px，布局容器的宽度为 1170px */
      @media screen and (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
    </style>
  </head>
  <body>
    <!-- 响应式开发里面，首先需要一个布局容器 -->
    <div class="container"></div>
  </body>
  </html>
  ```

### 案例：响应式导航

![image-20210122174516385](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122174517.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
    }
    .container {
      width: 750px;
      margin: 0 auto;
      background-color: green;
    }
    /* 清除浮动-会导致 container 没有高度-就显示不了颜色 */
    .clearfix::before,
    .clearfix::after {
      content: "";
      display: table;
    }
    .clearfix::after {
      clear: both;
    }
    .clearfix { /* IE6、7专有，为了兼容性 */
      *zoom: 1;
    }
    .container ul li {
      float: left;
      width: 93.75px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    @media screen and (max-width: 767px) {
      .container {
        width: 100%;
      }
      .container ul li {
        width: 33.33%;
      }
    }
  </style>
</head>
<body>
  <div class="container clearfix">
    <ul>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
      <li>导航栏</li>
    </ul>
  </div>
</body>
</html>
```

### Bootstrap

- 简介

  Bootstrap 前端开发框架

  [推荐使用的Bootstrap网站](https://bootstrap.css88.com/)

  ![image-20210122180023002](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122180024.png)

#### 使用

![image-20210122191109297](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122191112.png)

![image-20210122193335844](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122193337.png)

#### 布局容器

预定义类 - 定义好了类名，根据类名给样式

container 

container-fluid 

![image-20210122194329489](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122194330.png)

#### 栅格系统

把页面内容划分成等宽的列 - 某个具有 container 类名的标签盒子

rem - 把整个屏幕划分成等宽的列 - body

再在 container 盒子中，放 row 盒子，布局行

再在行中分列，给列盒子分份数，共12份

![image-20210122201301305](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122201302.png)

- 份数影响布局

  ![image-20210122201516912](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122201518.png)

  ```html
  <style>
    /* 利用我们自己写的样式覆盖原先的样式 */
    /* [class^="col-lg"] {
    border: 1px solid #ccc;
    }
    .container .row:nth-child(1) {
    background-color: pink;
    } */
    .row>div {
      height: 50px;
      background-color: pink;
      /* 不能给margin值，因为其实现是利用width:33.33%实现的 */
      /* 给左右margin值，就会掉下来 */
      /* margin: 0 10px; */
    }
    .container div {
      border: 1px solid #ccc;
    }
  </style>
  <!-- 栅格系统 -->
  <!-- 如果 row 里面的孩子的份数和为12，则孩子能占满整个 container 的宽度 -->
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">1</div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">2</div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">3</div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">4</div>
    </div>
    <div class="row">
      <div class="col-lg-6">1</div>
      <div class="col-lg-2">2</div>
      <div class="col-lg-2">3</div>
      <div class="col-lg-2">4</div>
    </div>
    <!-- 如果 row 里面的孩子的份数和小于12，则占不满整个 container 的宽度，会有空白 -->
    <div class="row">
      <div class="col-lg-6">1</div>
      <div class="col-lg-2">2</div>
      <div class="col-lg-2">3</div>
      <div class="col-lg-1">4</div>
    </div>
    <!-- 如果 row 里面的孩子的份数和大于12，则 container 尽力装，多出的那一列会另起一行显示 -->
    <div class="row">
      <div class="col-lg-6">1</div>
      <div class="col-lg-2">2</div>
      <div class="col-lg-2">3</div>
      <div class="col-lg-3">4</div>
    </div>
  </div>
  ```

- 类名实现响应

	![image-20210122201754715](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122201756.png)

- 列嵌套

  ![image-20210122211602893](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122211604.png)

  ```html
  <!-- 列嵌套 -->
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="col-md-6">a</div>
        <div class="col-md-6">b</div>
      </div>
      <!-- 列嵌套最好加 1 个行 row，这样就可以取消父元素的 padding 值，
  而且高度自动和父级一样高 -->
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-6">c</div>
          <div class="col-md-6">d</div>
        </div>
      </div>
      <div class="col-md-4">3</div>
    </div>
  </div>
  ```

  

- 列偏移

  ![image-20210122213640872](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122213642.png)

  ```html
  <!-- 列偏移 -->
  <div class="container">
    <div class="row">
      <!-- 让两个盒子贴着左右-两个份数与偏移数之和为 12 -->
      <div class="col-md-4">左侧</div>
      <div class="col-md-4 col-md-offset-4">右侧</div>
    </div>
    <div class="row">
      <!-- 让一个盒子居中 -->
      <div class="col-md-8 col-md-offset-2">居中</div>
    </div>
  </div>
  ```

  

- 列排序

  ![image-20210122215727623](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122215729.png)

  ```html
  <!-- 列排序 -->
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-push-8">左侧</div>
      <div class="col-md-8 col-md-pull-4">右侧</div>
    </div>
  </div>
  ```

  

- 响应式工具

	显示与隐藏

	![image-20210122223507143](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122223508.png)
	
	```html
	<!-- 响应式工具 -->
	<div class="container">
	  <div class="row">
	    <div class="col-xs-3">
	      <span class="visible-lg">1显示</span>
	    </div>
	    <div class="col-xs-3">2</div>
	    <div class="col-xs-3 hidden-md hidden-xs">3隐藏</div>
	    <div class="col-xs-3">4</div>
	  </div>
	</div>
	```

#### 案例 - 阿里百秀

- 案例分析

  ![image-20210123134120738](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210123134208.png)

- 页面制作

  ![image-20210123170353533](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210123170355.png)

- 代码

  ```html
  <!-- index.html 首页 -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <title>Document</title>
    <!-- 引入 bootstrap 样式文件 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- 引入自己的首页样式文件 index.css -->
    <link rel="stylesheet" href="css/index.css">
  <body>
    <div class="container">
      <div class="row">
        <header class="col-md-2">
          <div class="logo">
            <a href="#">
              <!-- /* 超小 屏幕调整 */
              /* logo 里面的图片就隐藏起来 */
              /* 显示 阿里百秀四个字 */ -->
              <img src="images/logo.png" alt="" class="hidden-xs">
              <span class="visible-xs">阿里百秀</span>
            </a>
          </div>
          <div class="nav">
            <ul>
              <li><a href="#" class="glyphicon glyphicon-camera">生活馆</a></li>
              <li><a href="#" class="glyphicon glyphicon-picture">自然汇</a></li>
              <li><a href="#" class="glyphicon glyphicon-phone">科技湖</a></li>
              <li><a href="#" class="glyphicon glyphicon-gift">奇趣事</a></li>
              <li><a href="#" class="glyphicon glyphicon-glass">美食杰</a></li>
            </ul>
          </div>
        </header>
        <article class="col-md-7">
          <!-- 新闻区域 -->
          <!-- clearfix - Bootstrap 内置的清除浮动样式 -->
          <div class="news clearfix">
            <ul>
              <li>
                <a href="#">
                  <img src="upload/lg.png" alt="">
                  <p>阿里百秀</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/1.jpg" alt="">
                  <p>奇了，成都一小区护卫长得像马云，市民纷纷求合影</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/2.jpg" alt="">
                  <p>风景</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/3.jpg" alt="">
                  <p>吓人</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/4.jpg" alt="">
                  <p>指甲</p>
                </a>
              </li>
            </ul>
          </div>
          <!-- 发表区域 -->
          <div class="publish">
            <div class="row">
              <div class="col-sm-9">
                <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                <p class="text-muted hidden-xs">xxx 发布于 2015-11-23</p>
                <p>指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里知识吧！</p>
                <p class="text-muted">
                  阅读(2417) 评论(1) 赞(18)
                  <span class="hidden-xs">标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活</span>
                </p>
              </div>
              <div class="col-sm-3 pic hidden-xs">
                <img src="upload/4.jpg" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                <p class="text-muted hidden-xs">xxx 发布于 2015-11-23</p>
                <p>指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里知识吧！</p>
                <p class="text-muted">
                  阅读(2417) 评论(1) 赞(18)
                  <span class="hidden-xs">标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活</span>
                </p>
              </div>
              <div class="col-sm-3 pic hidden-xs">
                <img src="upload/4.jpg" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                <p class="text-muted hidden-xs">xxx 发布于 2015-11-23</p>
                <p>指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里知识吧！</p>
                <p class="text-muted">
                  阅读(2417) 评论(1) 赞(18)
                  <span class="hidden-xs">标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活</span>
                </p>
              </div>
              <div class="col-sm-3 pic hidden-xs">
                <img src="upload/4.jpg" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                <p class="text-muted hidden-xs">xxx 发布于 2015-11-23</p>
                <p>指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里知识吧！</p>
                <p class="text-muted">
                  阅读(2417) 评论(1) 赞(18)
                  <span class="hidden-xs">标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活</span>
                </p>
              </div>
              <div class="col-sm-3 pic hidden-xs">
                <img src="upload/4.jpg" alt="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                <p class="text-muted hidden-xs">xxx 发布于 2015-11-23</p>
                <p>指甲是经常容易被人们忽略的身体部位，事实上从指甲的健康状况可以看出一个人的身体健康状况，快来看看10个暗藏在指甲里知识吧！</p>
                <p class="text-muted">
                  阅读(2417) 评论(1) 赞(18)
                  <span class="hidden-xs">标签：健康/感染/指甲/疾病/皮肤/营养/趣味生活</span>
                </p>
              </div>
              <div class="col-sm-3 pic hidden-xs">
                <img src="upload/4.jpg" alt="">
              </div>
            </div>
            
          </div>
        </article>
        <aside class="col-md-3 hidden-xs hidden-sm">
          <a href="#" class="banner">
            <img src="upload/zgboke.jpg" alt="">
          </a>
          <a href="#" class="hot">
            <span class="btn btn-primary">热搜</span>
            <h4 class="text-primary">欢迎加入中国博客联盟</h4>
            <p class="text-muted">这里收录国内各个领域的优秀博客，是一个全人工编辑的开放式博客联盟交流和展示平台......</p>
          </a>
        </aside>
      </div>
    </div>
  </body>
  </html>
  ```

  ```css
  /* index.css 首页样式 */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: #666;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  body {
    background-color: #f5f5f5;
  }
  .container {
    background-color: #fff;
  }
  
  /* 修改 container 的最大宽度为 1280px-根据设计稿来定 */
  @media screen and (min-width: 1280px) {
    .container {
      width: 1280px;
    }
  }
  
  
  /* header 模块 始 */
  header {
    padding-left: 0 !important;
  }
  .logo {
    background-color: #439ad9;
  }
  .logo img {
    /* width: 100%; */
    /* 小 屏幕调整 */
    /* logo 图片不需要缩放 */
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  /* 超小 屏幕调整 */
  /* logo 里面的图片就隐藏起来 */
  /* 显示 阿里百秀四个字 */
  .logo span {
    display: block;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
  .nav {
    background-color: #eee;
    border-bottom: 1px solid #ccc;
  }
  
  /* 小及超小屏幕调整 */
  /* 让 nav 里面的 li 浮动起来，并且设置宽度为 20% */
  @media screen and (max-width: 991px) {
    .nav li {
      float: left;
      width: 20%;
    }
    article {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    .nav li a {
      font-size: 14px !important;
      padding-left: 10px !important;
    }
    /* new 中第一个 li 的宽度调整为 100%，其余 li 的宽度为 50% */
    .news ul li:nth-child(1) {
      width: 100% !important;
    }
    .news ul li {
      width: 50% !important;
    }
    .publish .row h3 {
      font-size: 18px;
    }
  
  }
  
  .nav li a {
    display: block;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    font-size: 16px;
  }
  .nav li a:hover {
    background-color: #fff;
    color: #333;
  }
  .nav li a::before {
    vertical-align: middle;
    padding-right: 5px;
  }
  /* header 模块 终 */
  
  /* article 模块 始 */
  /* 新闻区域 */
  .news ul li {
    float: left;
    width: 25%;
    height: 128px;
    padding-right: 10px;
    margin-bottom: 10px;
  }
  .news ul li:nth-child(1) {
    width: 50%;
    height: 266px;
  }
  .news ul li a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .news ul li a img {
    width: 100%;
    height: 100%;
  }
  .news ul li a p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 41px;
    padding: 5px 10px;
    margin: 0;
    background-color: rgba(0, 0, 0, .5);
    font-size: 12px;
    color: #fff;
  }
  .news ul li:nth-child(1) a p {
    line-height: 41px;
    font-size: 20px;
    padding: 0px 10px;
  }
  
  /* 发表区域 */
  .publish {
    border-top: 1px solid #ccc;
  }
  .publish .row {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .pic {
    margin-top: 10px;
  }
  .pic img {
    width: 100%;
  }
  /* article 模块 终 */
  
  /* aside 模块 始 */
  .banner img {
    width: 100%;
  }
  .hot {
    display: block;
    margin-top: 20px;
    padding: 0 20px 20px;
    border: 1px solid #ccc;
  }
  .hot span {
    border-radius: 0;
    margin-bottom: 20px;
  }
  .hot p {
    font-size: 12px;
  }
  /* aside 模块 终 */
  ```

## 移动端布局总结

- 总结

  ![image-20210123170837098](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210123170838.png)