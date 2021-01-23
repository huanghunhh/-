# CSS 高级技巧

## 精灵图

- 简介

  ![image-20210117201514142](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117201515.png)

  为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术

- 精灵图的使用

  ![image-20210117201802544](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117201804.png)

  精灵图就是把多个小背景图片整合到一张大图片中，通过移动背景图片的位置，就能展示不同的小图片

  添加背景图片后，图片左上角在盒子中，即显示的是图片的左上角，图片需要向上、向左移动-都是负值-需要精确测量
  
  ![image-20210117205628818](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117205630.png)
  
  ```css
  .box {
    width: 27px;
    height: 25px;
    margin: 100px auto;
    background: url(images/sprites.png) no-repeat -155px -106px;
  }
  ```

- 缺点

  精灵图是图片，比较大，会失真，且更换复杂

  所以，某些小图标可以通过字体图标来制作

## 字体图标

- 简介

  ![image-20210117210744195](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117210745.png)

- 优点

  ![image-20210117214700566](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117214702.png)

- 使用

  ![image-20210117214726481](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117214728.png)

  + 下载

    ![image-20210117214825904](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117214828.png)

    [icomoon字库](http://icomoon.io)

    [阿里iconfont字库](http://www.iconfont.cn/)

    以 icomoon字库 下载为例

    ![image-20210117215455300](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117215456.png)
  
    下载得到类似文件
  
  + 引入
  
    字体文件格式说明
  
    ![image-20210117215635023](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117215636.png)
  
    字体声明
  
    ![image-20210117215656739](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117215659.png)
  
    ![image-20210117215743166](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117215744.png)
  
    把 css 文件中的内容复制过来就好
  
    字体引入
  
    ![image-20210117220213458](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117220215.png)
  
    字体图标的引入步骤：
  
    fonts文件夹放在页面根目录下
  
    在CSS中全局声明字体
  
    复制图标，写入HTML代码中
  
    给标签定义字体
  
  + 追加
  
    ![image-20210117220539077](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117220540.png)
  
  阿里iconfont字库 的下载使用有一定的差别
  
  但下载的 html 文件中有使用说明
  
  ![image-20210117220916426](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117220918.png)

## CSS 三角

### CSS 等腰三角

- 简介

  ![image-20210117221012859](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117221014.png)

- 代码

  ```css
  div {
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    
    border: 50px solid transparent;
    border-left-color: red;
  }
  /*
  除边框外，其余属性设置为0
  若四条边框设置不同颜色，则可看出来是四个三角
  则，设置三个为透明，只给其中一个设置颜色，最后就可得到想要的了
  */
  ```

### CSS 直角三角

- 简介

  ![image-20210118121347182](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118121349.png)

- 原理

  ![image-20210118121430923](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118121432.png)

  设置下边框、左边框为0，上边框透明，就能看到直角三角形的效果了

- 代码

  ```css
  .box {
    width: 0;
    height: 0;
    border-width: 22px 8px 0 0;
    border-style: solid;
    border-color: transparent red transparent transparent;
  }
  /*
  说明：
  上边框的高度 - 三角形的高
  右边框的高度 - 三角形的宽
  */
  ```

## 用户界面样式

- 简介

  ![image-20210117233701453](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210117233702.png)

  更改一些用户操作样式，以便提高更好的用户体验

  如：更改用户的鼠标样式、表单轮廓、防止表单域拖拽

### 鼠标样式 cursor

- 代码

  ```css
  /* 调整鼠标样式 */
  li {
    cursor: pointer;
  }
  /*
  属性值：
  default - 小白箭头（默认）
  pointer - 小手
  move - 移动
  text - 文本
  not-allowed - 禁止
  */
  ```
```
  
  ![image-20210118093217021](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118093218.png)
  
  ![image-20210118093944840](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118093946.png)

### 取消表单轮廓

- 代码

  ```css
  input,
  textarea {
    outline: none;
  }
  /*
  取消表单轮廓
  */
```

  ![image-20210118094150742](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118094152.png)

### 防止拖拽文本域 resize

- 代码

  ```css
  textarea {
    resize: none;
  }
  /*
  防止拖拽文本域 - 不需要重置
  */
  ```

  ![image-20210118094110464](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118094111.png)

## vertical-align 属性

- 简介

  ![image-20210118101008224](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118101009.png)

  实现行内块元素（图片、表单）和文字垂直居中对齐

  vertical-align 用于设置元素的垂直对齐方式，但只针对行内元素或行内块元素有效

- 代码

  ```css
  img {
    vertical-align: baseline;
  }
  /*
  属性值：
  baseline - 元素放置在父元素的基线上（默认）
  top - 把元素的顶端与行中最高元素的顶端对齐
  middle - 把此元素放置在父元素的中部
  bottom - 把元素的顶端与行中最低的元素的顶端对齐
  */
  ```

  ![image-20210118101822985](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118101824.png)

  ![image-20210118101915539](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118101916.png)

- 示例

  ![image-20210118102244071](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118102246.png)

- 图片底部默认空白缝隙问题

  ![image-20210118102349305](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118102350.png)

  解决方法

  将默认的基线对齐，修改为底线对齐或中线对齐，或转换为块级元素

  ```css
  /* 解决图片底部默认空白缝隙问题 */
  img {
    vertical-align: bottom;
    vertical-align: middle;
    display: block;
  }
  ```
  
  
  
  ![image-20210118102439088](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118102440.png)

## 溢出文本

### 单行文本溢出

- 代码

  ```css
  div {
    width: 150px;
    white-space: nowrap; /* 强制一行显示文本 */
    overflow: hidden; /* 超出的部分隐藏 */
    text-overflow: ellipsis; /* 文字用省略号替代超出的部分 */
  }
  ```

  ![image-20210118102639177](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118102640.png)

  ![image-20210118102835421](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118102836.png)

### 多行文本溢出

- 代码

  ```css
  div {
    width: 150px;
    height: 65px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -wekit-box-orient: vertical;
  }
  ```

  ![image-20210118103242269](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118103243.png)

  ![image-20210118103227783](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118103229.png)

## 布局技巧

### margin 负值

- 细线边框

  + 示例

    ![image-20210118104636813](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118104638.png)

    ![image-20210118104157718](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118104159.png)

  + 代码

    ```css
    ul li {
      float: left;
    list-style: none;
      width: 150px;
      height: 200px;
      border: 1px solid red;

      margin-left: -1px;
    }
    ```

    ![image-20210118104415694](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118104416.png)

- 鼠标放上去变色

  + 示例

    ![image-20210118104744386](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118104745.png)

    ![image-20210118104815630](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118104817.png)

  + 代码

    ```css
    /* 若父盒子没有定位，则鼠标经过时添加相对定位即可 */
    ul li:hover {  
      position: relative;
      border: 1px solid blue;
    }
    /* 若父盒子有定位，则设置鼠标经过时层级提高 */
    ul li {
      position: relative; /* 自己本身就有相对定位 */
    }
    ul li:hover {
      z-index: 1;
      border: 1px solid blue;
    }
    ```

    

### 文字围绕浮动元素

- 简介

  ![image-20210118105314908](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118105317.png)

### 行内块的巧妙运用

- 简介

  ![image-20210118114932449](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118114936.png)

  页码的制作

  ![image-20210118121224791](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118121226.png)

  ![image-20210118121219842](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118121221.png)

## CSS3 过渡 transition

- 简介

  ![image-20210118160829603](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118160830.png)

  过渡transition-当元素从一种样式变换为另一种样式时，为元素添加效果

  过渡动画-从一个状态渐渐的过渡到另外一个状态

  过渡口诀：谁做过渡给谁加

  ![image-20210118161448470](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118161450.png)

  ![image-20210118161556919](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118161601.png)

- 代码

  ```css
  div {
    width: 200px;
    height: 100px;
    background: red;
    /*
    transition: 要过渡的属性 花费时间 运动曲线 何时开始;
    过渡口诀：谁做过渡给谁加
    如果要过渡的属性有多个，需要利用逗号进行分隔，或者写all
    */
    transition: width .5s;
  }
  div:hover {
    width: 400px;
  }
  /*
  transition 的属性值：
  属性 - 要变化的css属性，all表示全部属性
  花费时间 - 必须写单位(s)
  运动曲线 - 
  	linear - 线性过渡
  	ease - 平滑过渡
  	ease-in - 由慢到快
  	ease-out - 由快到慢
  	ease-in-out - 由慢到快再到慢
  何时开始 - 必须写单位(s)，默认0s
  */
  ```

  

## CSS3 其他特性

- 简介

  ![image-20210118160001467](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118160002.png)

### filter 滤镜属性

- 简介

  ![image-20210118160027177](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118160048.png)

  ![image-20210118160335247](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118160336.png)

- 代码

  ```css
  img {
    filter: blur(15px);
  }
  img:hover {
    filter: blur(0px);
  }
  /*
  filter: 函数();
  blur函数 - 模糊处理，数值越大越模糊
  */
  ```

### calc 计算盒子宽度 

- 简介

  ![image-20210118160545409](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118160546.png)

- 代码

  ```css
  .father {
    width: 300px;
    height: 200px;
  }
  .son {
    width: calc(100% - 30px);
    height: 30px;
  }
  ```

  

## CSS 初始化

- 简介

  ![image-20210118122056835](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118122058.png)

- 初始化

  ![image-20210118122158469](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118122159.png)

  ![image-20210118122238916](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210118122240.png)

- 代码

  ```css
  /* 把我们所有标签的内外边距清零 */
  * {
      margin: 0;
      padding: 0
  }
  /* em 和 i 斜体的文字不倾斜 */
  em,
  i {
      font-style: normal
  }
  /* 去掉li 的小圆点 */
  li {
      list-style: none
  }
  
  img {
      /* border 0 照顾低版本浏览器,如果 图片外面包含了链接会有边框的问题 */
      border: 0;
      /* 取消图片底侧有空白缝隙的问题 */
      vertical-align: middle
  }
  
  button {
      /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
      cursor: pointer
  }
  
  a {
      color: #666;
      text-decoration: none
  }
  
  a:hover {
      color: #c81623
  }
  
  button,
  input {
      /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
      font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
  }
  
  body {
      /* CSS3 抗锯齿形 让文字显示的更加清晰 */
      -webkit-font-smoothing: antialiased;
      background-color: #fff;
      font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
      color: #666
  }
  
  .hide,
  .none {
      display: none
  }
  /* 清除浮动 */
  .clearfix:after {
      visibility: hidden;
      clear: both;
      display: block;
      content: ".";
      height: 0
  }
  
  .clearfix {
      *zoom: 1
  }
  ```

  