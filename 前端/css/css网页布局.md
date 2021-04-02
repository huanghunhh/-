# CSS 网页布局

- 简介

  网页布局的本质就是**盒子**
  
  网页布局的过程：
  
  1. 准备好相关的网页元素，网页元素基本都是盒子 Box
  2. 利用 CSS 设置好盒子样式，然后摆放到相应的位置
  3. 往盒子里面装内容
  
  网页布局的核心本质就是：利用 CSS 摆盒子
  
  三种传统的布局方式（盒子如何进行排列顺序）
  
  1. 普通流/标准流
  
     标签按照规定好的默认方式排列
  
  2. 浮动
  
  3. 定位

## 盒子模型

- 简介

  盒子模型就是把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器

  CSS 盒子模型本质上就是一个盒子，封装周围的 HTML 元素，包括：边框、外边距、内边距和实际内容

  ![image-20210116172832222](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116172845.png)

### 边框 border

- 简介

  border 可以设置元素的边框，边框有三部分组成：边框宽度（粗细）、边框样式、边框颜色

- 代码

  ```css
  div {
    width: 100px;
    height: 100px;
    position: absolute;
    /* 要使用border属性，必须设置 width 或 height 或 position: absolute */
    border: border-width border-style border-color;
    border: 1px solid red;
  }
  /*
  border-style:
  solid-实线边框
  dotted-点线
  dashed-虚线
  none-无边框
  hidden-隐藏边框
  double-双线边框（两条单线与其间隔的和等于border-width的值）
  groove-根据border-color的值画3D凹槽
  ridge-根据border-color的值画菱形边框
  inset-根据border-color的值画3D凹边
  outset-根据border-color的值画3D凸边
  */
  /* 四条边框分开写 */
  div {
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    border-left: 1px solid red;
    border-right: 1px solid red;
  }
  ```

  ![image-20210116173908768](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116173910.png)

- 表格边框

  ```css
  table, 
  td {
    border: 1px solid red;
    border-collapse: collapse; 
    /* border-collapse 控制浏览器绘制表格边框的方式，collapse-相邻边框合并在一起 */
  }
  ```

- 边框对盒子大小的影响

  边框会额外增加盒子的实际大小，两种解决方案

  + 测量盒子大小的时候，不量边框
  + 如果测量的时候包含了边框，则需要width/height减去边框宽度

  就是题目要求了盒子（以边框为外边界）大小，然后应该是 边框border+内边距padding+宽高width/height 的和

### 内边距 padding

- 简介

  padding 属性用于设置内边距，即边框与内容之间的距离

- 代码

  ```css
  div {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    
    padding: 5px; /* 上下左右-5px */
    padding: 5px 10px; /* 上下-5px，左右-10px */
    padding: 5px 10px 20px; /* 上-5px 左右-10px 下-20px */
    padding: 5px 10px 20px 30px; /* 上-5px 右-10px 下-20px 左-30px 顺时针 */
  /*
  1个值-上下左右
  2个值-上下 左右
  3个值-上 左右 下
  4个值-上 右 下 左  
  */
  }
  ```

- 内边距对盒子大小的影响

  如果盒子已经有了宽度和高度，此时再指定内边框，会撑大盒子

  题目要求了盒子（以边框为外边界）大小，然后应该是 边框border+内边距padding+宽高width/height 的和

  如果盒子本身没有指定width/height属性，则此时padding不会撑开盒子大小

  （指定高度，设定内边距，则宽度会继承父元素的）

### 外边距 margin

- 简介

  margin 属性用于设置外边距，即控制盒子和盒子之间的距离

- 代码

  ```css
  /* 同padding */
  div {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    
    margin: 5px; /* 上下左右-5px */
    margin: 5px 10px; /* 上下-5px，左右-10px */
    margin: 5px 10px 20px; /* 上-5px 左右-10px 下-20px */
    margin: 5px 10px 20px 30px; /* 上-5px 右-10px 下-20px 左-30px 顺时针 */
  /*
  1个值-上下左右
  2个值-上下 左右
  3个值-上 左右 下
  4个值-上 右 下 左  
  */
  }
  ```

- 让块级盒子水平居中对齐

  ```css
  div {
    width: 300px;
    margin: 0 auto;
  }
  /*
  外边距可以让块级盒子水平居中，但必须满足两个条件
  盒子必须指定了宽度
  盒子左右的外边距都设置为auto
  */
  /*
  让行内元素或者行内块元素水平居中：
  给其父元素添加
  text-align: center;
  */
  /*
  让文字垂直居中
  设置
  height == line-height
  */
  ```

- margin 导致的外边距合并问题

  + 相邻块元素垂直外边距的合并

    ![image-20210116200341989](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116200343.png)

    上下相邻两个块元素——上面的有margin-bottom，下面的有margin-top，他们之间的垂直间距取两个值中的较大者，而不是两者之和
  
  + 嵌套块元素垂直外边距的塌陷
  
    ![image-20210116200407000](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116200408.png)
  
    两个嵌套的块元素，父元素有上外边距，子元素也有上外边距，此时父元素会塌陷较大的外边距值
  
    ```css
  .father {
      border: 1px solid transparent;
      padding: 1px;
  	  overflow: hidden;
  	}
    ```
  	
  	
  	
    问题展示：
  	
  	![image-20210116200829885](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116200831.png)
  	
    给父元素定义上边框-让他们分开，子元素就不会带着父元素向下跑了
    
    ![image-20210116200848496](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116200850.png)
    
    给父元素定义上内边距
    
    ![image-20210116201437954](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116201439.png)
    
    给父元素添加overflow:hidden
    
    ![image-20210116201524413](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116201525.png)

### 盒子模型

#### 三种盒模型

[三种盒模型详解](https://blog.csdn.net/weixin_44368963/article/details/108317468)

- 标准盒模型

  又称 w3c 盒模型

  width/height 不包含 border 和 padding

  元素的实际大小为width/height + border + padding

  ```css
  box-sizing: content-box; 
  /*
  content-box 盒子的默认计算方法
  盒子大小=width+padding+border
  */
  ```

- 怪异盒模型

  IE 盒模型

  width/height包含了 border 和 padding（padding 和border 侵占宽高）

  元素实际大小即为定义的width/height

  ```css
  box-sizing: border-box; 
  /*
  border-box 
  盒子大小=width，padding和border侵占width的大小
  盒子的大小，直接看 width height
  */
  ```

- 弹性盒模型

  flexbox

  ```css
  display: flex;
  ```

#### box-sizing

- 简介

  ![image-20210118154838977](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118154840.png)

- 代码

  ```css
  div {
    box-sizing: content-box;
    width: 200px;
    height: 200px;
    border: 20px solid red;
    padding: 15px;
    background: pink;
  }
  /*
  content-box 盒子的默认计算方法
  盒子大小=width+padding+border
  */
  p {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border: 20px solid red;
    padding: 15px;
    background: pink;
  }
  /*
  border-box 
  盒子大小=width，padding和border侵占width的大小
  */
  ```

  ![image-20210118155806780](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118155808.png)
  
  

### CSS3 新增属性

#### border-radius 圆角边框

- 简介

  在 CSS3 中，新增了**圆角边框**样式

  椭圆/圆与边框的交集形成圆角效果

- 代码

  ```css
  div {
    border-radius: length;
    border-radius: 10px; /* 四个角-10px */
    border-radius: 10px 20px 30px 40px; /* 左上-10px 右上-20px 右下-30px 左下-40px */
    border-radius: 10px 40px; /* 左上、右下-10px 右上、左下-40px */
    /* 也可以设置三个值 */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  ```

  ![image-20210116202338050](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116202339.png)

- 示例

  ![image-20210116202446100](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116202448.png)

  ![image-20210116202506428](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210116202508.png)

#### box-shadow 盒子阴影

- 简介

  盒子阴影不占用空间，不会影响其他盒子排列

- 代码

  ```css
  div:hover {
    box-shadow: h-shadow v-shadow blur spread color inset;
    box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);
  }
  /*
  h-shadow - 水平阴影的位置
  v-shadow - 垂直阴影的位置
  blur - 模糊距离
  spread - 阴影尺寸
  color - 阴影颜色
  inset 将外部阴影(outset)改为内部阴影(inset)
  */
  ```

#### text-shadow 文字阴影

- 代码

  ```css
  div {
    text-shadow: h-shadow v-shadow blur color;
    text-shadow: 5px 5px 6px rgba(0, 0, 0, .3);
  }
  /*
  h-shadow - 水平阴影的位置
  v-shadow - 垂直阴影的位置
  blur - 模糊距离
  color - 阴影颜色
  */
  ```

## float 浮动属性

- 简介

  为什么需要浮动：

  如何让多个块级盒子水平排列成一行？

   如何实现两个盒子的左右对齐

  浮动：

  可以改变元素标签默认的排列方式

  浮动最典型的应用：可以让多个块级元素一行内排列显示

  网页布局第一准则：**多个块级元素纵向排列找标准流、多个块级元素横向排列找浮动**

  父元素管上下、子元素管左右

- 代码

  ```css
  div {
    float: left; // 左浮
  }
  /*
  属性值：
  none - 不浮动（默认）
  left - 左浮
  right - 右浮
  */
  ```

  float 属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘

  即，浮动使盒子优先向同级元素的浮动框贴，没有浮动框时，向父元素块边缘贴

### 浮动特性

- 浮动特性
  1. 浮动元素会脱离标准流（脱标）
  2. 浮动的元素会一行内显示并且元素顶部对齐
  3. 浮动的元素会具有**行内块元素**的特性
  4. 浮动的盒子不再保留原先的位置
  5. 浮动只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）——因为，浮动最初就是为了做文字环绕效果，让文字会围绕浮动元素
  
  脱标：脱离标准流的控制，移动到指定位置，不再保留原先的位置（原先的位置被标准流占有）
  
  + 脱标
  
  ![image-20210117093839573](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117093902.png)
  
  + 一行显示
  
  ![image-20210117093942721](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117093944.png)
  
  + 行内块元素特性
  
  ![image-20210117094303710](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117094310.png)

### 浮动布局

- 浮动布局

  网页布局采取的策略：**先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置**，符号网页布局第一准则

  ![image-20210117094617747](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117094619.png)

- 布局练习

  网页布局第二准则：**先设置盒子大小，之后设置盒子位置**

  ![image-20210117095003117](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117095004.png)

  ```html
  <div class="top">top</div>
  <div class="banner">banner</div>
  <div class="box">
  	<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li class="last">4</li>
    </ul>
  </div>
  <div class="footer">footer</div>
  ```

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .top {
    height: 50px;
    background-color: gray;
  }
  .banner {
    width: 980px;
    height: 150px;
    background-color: gray;
    margin: 10px auto;
  }
  .box {
    width: 980px;
    height: 300px;
    margin: 0 auto;
    background-color: pink;
  }
  .box li {
    float: left;
    width: 237px;
    height: 300px;
    background-color: gray;
    margin-right: 10px;
  }
  .box .last {
    margin-right: 0;
  }
  .footer {
    height: 200px;
    background-color: gray;
    margin-top: 10px;
  }
  ```

- 浮动布局注意点

  1. 浮动和标准流的父盒子搭配

     先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置

  2. 一个元素浮动了，理论上其余的兄弟元素也要浮动

     浮动的盒子只会影响浮动盒子后面的标准流，不会影响前面的标准流

## clear 清除浮动属性

- 简介

  ![image-20210117100115298](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117100116.png)

  标准流不给父盒子高度，子盒子会自动撑开父盒子

  ![image-20210117100326617](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117100328.png)

  如果给子盒子添加浮动，父盒子高度变为0

  ![image-20210117100417819](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117100419.png)

  此时后面的标准流则会被浮动元素所覆盖

  ![image-20210117101056182](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117101058.png)

  此时需要清除浮动

  ![image-20210117101143446](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117101145.png)

- 清除浮动

  清除浮动的本质是清除浮动元素脱离标准流造成的影响

  如果父盒子本身有高度，则不需要清除浮动

  清除浮动后，父级就会根据浮动的子盒子自动检测高度，父级有了高度，就不会影响下面的标准流了。
  
  代码
  
  ```css
  div {
    clear: both;
  }
  /*
  属性值：
  left - 不允许左侧有浮动元素
right - 不允许右侧有浮动元素
  both - 同时清除左右两侧浮动的影响
*/
  ```
  
  清除浮动的策略是：**闭合浮动** - 只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子
  
  + 额外标签法
  
    不常用
  
    也称隔墙法
  
    在浮动元素末尾添加一个空的块级元素标签
  
    ```html
    <div style="clear: both"></div>
    <br/>
    ```
  
    通俗易懂，书写方便
  
    添加许多无意义的标签，结构化较差
  
  + overflow 属性
  
    ```css
    .father {
      overflow: hidden|auto|scroll;
    }
    ```
  
    给父盒子添加 overflow 属性，属性值可以设置为hidden|auto|scroll
  
    这是利用了overflow属性，后面会讲解
  
    会导致溢出部分无法显示的问题
  
  + :after 伪元素
  
    ```css
    .clearfix:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .clearfix { /* IE6、7专有，为了兼容性 */
      *zoom: 1;
    }
    /* clearfix 是约定的类名 */
    ```
  
    给父元素添加
  
  + 双伪元素
  
    ```css
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
    ```

- 清除浮动总结

  ![image-20210117111434929](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117111436.png)

## position 定位属性

- 简介

  浮动-让多个块级盒子一行没有缝隙地排列显示，经常用于横向排列盒子

  定位-让盒子自由地在某个盒子内移动位置，或者固定在屏幕中某个位置，并且可以压住其他盒子

- 定位组成

  定位 = 定位模式 + 边偏移

  定位模式 - 指定一个元素在文档中的定位方式

  边偏移 - 决定了元素的最终位置

- 定位模式

  ```css
  div {
    position: 定位模式;
  }
  /*
  定位模式属性值：
  static - 静态定位
  relative - 相对定位
  absolute - 绝对定位
  fixed - 固定定位
  */
  ```

- 边偏移

  ```css
  div {
    position: relative;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  /*
  边偏移属性
  top - 顶端偏移量，定义元素相对于其父元素上边线的距离
  bottom - 底部偏移量，定义元素相对于其父元素下边线的距离
  left - 左侧偏移量，定义元素相对于其父元素左边线的距离
  right - 右侧偏移量，定义元素相对于其父元素右边线的距离
  */
  ```

### 静态定位 static

- 简介

  元素的默认定位方式，同标准流

  没有边偏移

- 代码

  ```css
  div {
    position: static;
  }
  ```

  

### 相对定位 relative

- 简介

  相对定位是元素在移动位置时，相对它原来的位置

- 特点

  移动位置时，参照点是自己原来的位置

  不脱标，继续保留原来位置，且不占用现在的位置，后面的盒子仍然以标准流的方式对待它

- 代码

  ```css
  div {
    position: relative;
  }
  ```

### 绝对定位 absolute

- 简介

  绝对定位是元素在移动位置时，相对其祖先元素来说

- 特点

  脱标，不占用原先的位置

  边偏移相对有定位的祖先元素来说——祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置

  若没有祖先元素或祖先元素没有定位，则以浏览器为准定位

- 代码

  ```css
  div {
    position: absolute;
  }
  ```

- 子绝父相

  子级是绝对定位的话，父级要用相对定位

  + 子级绝对定位，不会占用位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子
  + 父盒子需要加定位，限制子盒子在父盒子内显示
  + 父盒子布局时，需要占有位置，因此父盒子只能是相对定位

  相对定位经常用来作为绝对定位的父级

- 绝对定位的盒子居中

  ```css
  .box {
    position: absolute;
    /* left和top走一半 */
    /* margin-left/top往回走自己的一半 */
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
    
    width: 200px;
    height: 200px;
  }
  ```

  

  ![image-20210117181559233](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117181600.png)

  ![image-20210117181722689](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117181724.png)

### 固定定位 fixed

- 简介

  固定定位是元素固定于浏览器可视区的位置

  主要使用场景：可以使得浏览器页面滚动时，元素的位置不改变

- 特点

  脱标，不再占有原先的位置

  以浏览器的可视窗口为参照点移动元素，跟父元素没有任何关系，不随滚动条滚动

- 代码

  ```css
  div {
    position: fixed;
  }
  ```

- 固定在版心右侧位置

  ![image-20210117175324267](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117175325.png)

  ![image-20210117175300172](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117175302.png)

### 粘性定位 sticky

- 简介

  粘性定位可以被认为是相对定位和固定定位的混合

  跟页面滚动搭配使用，兼容性较差，IE不支持

- 特点

  不脱标，占有原先的位置（相对定位）

  以浏览器的可视窗口为参照点移动元素（固定定位）

  必须添加top、left、right、bottom其中一个才有效

  某段区域滚动、某段区域固定

  -兼容性较差、网站上该效果是通过 JS 实现的

### 定位总结

![image-20210117175806191](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117175807.png)

两大特点：是否脱标，相对谁为基准点移动位置

- 定位的特殊特性

  1. 绝对定位和固定定位也和浮动类似

      + 行内元素添加绝对或固定定位，可以直接设置高度和宽度

        ![image-20210117182950550](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117182951.png)

      + 块级元素添加绝对或固定元素，如果不给宽度或高度，默认大小是内容的大小

        ![image-20210117183017023](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117183018.png)

  2. 脱标的盒子不会触发外边距塌陷

     浮动元素，绝对定位（固定定位）的元素都不会触发外边距合并的问题

  3. 绝对定位（固定定位）会完全压住盒子

     绝对定位（固定定位）会压住下面标准流所有的内容

     但，浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）——因为，浮动最初就是为了做文字环绕效果，让文字会围绕浮动元素

### 定位叠加 z-index

- 简介

  在使用定位布局时，可能会出现盒子重叠的情况，此时，可以使用 z-index 来控制盒子的前后次序（z轴）

- 代码

  ```css
  div {
    position: relative;
    z-index: 1;
  }
  /*
  数值可正可负，默认为auto
  数值越大，盒子越靠上
  如果数值相同，则按照书写顺序，后来居上
  数值后面不加单位
  只有定位的盒子才有 z-index 属性
  */
  ```

## 布局技巧

- 准则

  网页布局第一准则：**多个块级元素纵向排列找标准流、多个块级元素横向排列找浮动**

  网页布局采取的策略：**先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置**，符号网页布局第一准则

  网页布局第二准则：**先设置盒子大小，之后设置盒子位置**

- 三者配合

  + 标准流

    可以让盒子上下排列或者左右排列，**垂直的块级盒子显示就用标准流布局**

  + 浮动

    可以让多个块级元素一行显示或者左右对齐盒子，**多个块级盒子水平显示就用浮动布局**

  + 定位

    定位最大的特点就是有层叠的概念，可以让多个盒子前后叠压显示，**如果元素自由在某个盒子内移动就用定位布局**



## display 属性

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

## visibility 属性

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

## overflow 属性

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