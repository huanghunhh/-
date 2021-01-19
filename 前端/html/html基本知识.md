# html

## 笔记整理说明

- 视频来源

  黑马程序员 pink老师

- 现存位置

 [视频位置](J:\前端\黑马程序员\黑马程序员_pink老师\)

## html 简介

### 网页

![image-20210118215320370](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118215321.png)

 ### html

![image-20210118215821566](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118215822.png)

### 网页的形成

![image-20210118215841577](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118215858.png)

 ![image-20210118215855061](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118215856.png)

网站-网页集合

网页-网站中的一页，HTML格式的文件，元素-图片、链接、文字、声音、视频-HTML语言编写HTML格式文件

HTML-超文本标记语言-标记标签

### 浏览器

![image-20210118215953176](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118215954.png)

![image-20210118220030750](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118220031.png)

### web 标准

![image-20210118221527239](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118221528.png)

![image-20210118221542952](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118221543.png)

![image-20210118221628062](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118221629.png)

- web 标准

  + 结构

    身体

    html

  + 表现

    外观装饰

    css

  + 行为

    动作

    js

### html 语法

![image-20210118222020084](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222021.png)

双标签

单标签

![image-20210118222042257](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222043.png)

包含关系

并列关系

### html 基本结构

![image-20210118222132409](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222133.png)

![image-20210118222423325](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222424.png)

```html
<!DOCTYPE html>
<!-- 文档类型声明标签，告诉浏览器使用哪种HTML版本来显示网页 -->
<html lang="en">
<!-- 定义当前文档显示的语言，en-英语，zh-CN-中文 -->
<head>
    <meta charset="UTF-8">
  	<!-- 通过charset属性规定HTML文档应该使用的字符编码 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5新增语义化标签</title>
    <style>
        header, nav {
            height: 120px;
            background-color: pink;
            border-radius: 15px;
            width: 800px;
            margin: 15px auto;
        }
        section {
            width: 500px;
            height: 300px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <header>头部标签</header>
    <nav>导航栏标签</nav>
    <section>某个区域</section>
</body>
</html>
```

![image-20210118223923091](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118223924.png)

### 软件推荐

![image-20210118222537782](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222538.png)

![image-20210118222552773](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222553.png)

![image-20210118222610734](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222611.png)

![image-20210118222713127](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118222714.png)

### 标签语义

![image-20210118225132184](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118225133.png)

标签语义-标签的含义

根据标签的语义，在合适的地方给一个最为合理的标签，可以让页面结构更清晰

## 标题标签 h

- 简介

  为了使网页更具有语义化，经常会在页面中使用标题标签

  html 提供了6个等级的网页标题，即 <h1>~<h6>

- 特点

  加了标题的文字会变得加粗，字号也会依次变大

  一个标题独占一行

- 代码

  ```html
  <h1>标题一共六级选</h1>
  <h2>文字加粗一行显</h2>
  <h3>由大到小依次减</h3>
  <h4>从重到轻随之变</h4>
  <h5>语法规范书写后</h5>
  <h6>具体效果刷新见</h6>
  ```

  ![image-20210118225710888](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118225712.png)

## 段落标签 p 和换行标签 br

- 段落标签简介

  ![image-20210119093747837](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119093756.png)

  把 HTML 文档分割为若干段落

- 段落标签特点

  文本在一个段落中会根据浏览器窗口的大小自动换行

  段落和段落之间保有空隙

- 换行标签简介

  ![image-20210119094200532](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119094201.png)

- 换行标签特点

  \<br /\> 是个单标签
  
  \<br /\> 只是简单地开始新的一行，跟段落不一样，段落之间会插入一些垂直的间距
  
- 代码

  ```html
  <p>
    张爱玲说 <br />
    張愛玲は言った
    我要你知道 在这个世界上总有一个人是等着你的，
    この世界のどこかで あなたを待っている人がいる
    不管在什么时候 不管在什么地方 
    どんな時でも どこにいても
    反正你知道 总有这么个人
    そういう人が居ることを あなたに知っておきたい
    所以 我在等  
    だから 私は待っている
    等哪天突如其来的心动了 就满眼全是她了
    ときめきが来た日 彼女しか思えなくなる日を
    学生时代对
    学生時代は
    一个人的好感 源于长相干净清爽 性格清冷温柔 成绩名列前茅
    爽やかな顔立ちや優しい性格 優秀な成績で人に好感を持つ
    但这类女孩子似乎总是那么的容易让人望而却步
    でも そういうタイプの子はまるで高嶺の花
    即便是偶尔的和她说说话 也都会让人回想好久
    たまに喋りかけらたことすら 思い出となる
    那种感觉 应该是喜欢的
    そういう感覚は好きとも言えるが
    但是 又没那么强烈
    そんなに強くはなかった
    因此 很多人选择了单方面的暗恋
    だから片思いを選んだ人が多かった
    让彼此的交集止于毕业
    その繋がりを卒業まで保つことにした
    我时常会想 得到回应的心动
    ときめきが報われる
    应该是爱情里最美好的开端了
    それが最高の恋の始まりと思う
    第一次喜欢一个人 目光总会不自觉地锁在她身上
    初めて人を好きになって 目が思わずその人に向け
    喜欢关注她的一举一动
    全ての行動が気になってきた
    第一次鼓起勇气告白 心都会砰砰直跳
    初めて勇気を絞り出し告白する時 ドキドキが止まらなくなって
    内心的那种强烈的表达欲会让你一吐为快
    湧いて来る感情で全てを言わせたくなる
    第一次确定关系后 我们都会傻笑好久
    初めて関係を確認したあと 笑いが止まらなくなり
    平日里的那些故作矜持也都不复存在
    普段でわざと取った矜持も消えてなくなる
    两个人始于好感 始于腼腆 始于羞涩
    好感から 初々しさから 恥じらいから始まり
    就连牵手拥抱 也都是那样的小心翼翼
    手をつなぐこと 抱擁することすら 細心の注意をはらっている
    日渐熟络了之后 我喜欢你那明目张胆的偏爱
    日々がすぎて 相手から愛され
    似乎我就是你眼里的那抹光 熠熠生辉
    相手の目の中の光となって 輝いている
  </p>
  ```

## 文本格式化标签 strong em del ins

- 简介

  ![image-20210119122837419](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119122838.png)

- 代码

  ```html
  <strong>加粗</strong>
  <em>倾斜</em>
  <del>删除线</del> <!-- delete -->
  <ins>下划线</ins>
  ```

## 无语义标签 div span

- 简介

  ![image-20210119124941428](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119124942.png)

  div - division，分割，分区，用来布局，大盒子

  span - 跨度、跨距，用来布局，小盒子

## 图像标签 img

- 简介

  ![image-20210119125115028](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119125116.png)

  img 标签用于定义 HTML 页面中的图像

- 代码

  ```html
  <img src="图像url" />
  <!-- 
  img 标签 - 用于定义 HTML 页面中的图像
  单标签
  属性 - 属性值 - 说明：
  src - 图片路径 - 指定图像文件的路径的文件名
  alt - 文本 - 替换文本，图像不能正常显示时，显示该文字
  title - 文本 - 提示文本，鼠标放到图像上，显示该文字
  width - 像素 - 设置图像的宽度（一般通过css设置）
  height - 像素 - 设置图像的高度（一般通过css设置）
  宽高只设置一个属性，会等比缩放
  border - 像素 - 设置图像的边框粗细（一般通过css设置）
  -->
  ```

## 路径

![image-20210119131148643](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119131149.png)

![image-20210119131240271](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119131241.png)

![image-20210119131355328](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119131356.png)

## 链接标签 a

- 简介

  ![image-20210119131420622](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119131421.png)

  a - anchor 锚

- 代码

  ```html
  <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
  <!--
  a 标签
  属性 - 作用
  href - 指定链接目标的url地址，当为标签应用href属性时，就具有了超链接的功能
  target - 指定链接页面的打开方式，
  _self-默认值，当前页面打开
  _blank-在新窗口打开
  -->
  ```

- 链接分类

  ![image-20210119144240498](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119144249.png)

  + 外部链接

  + 内部链接

  + 空链接

  + 下载链接

  + 网页元素链接

  + 锚点链接 

    ```html
    <a href="#名字"></a>
    <h3 id="名字"></h3>
    ```

    ![image-20210119150114225](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119150115.png)

## 注释标签和特殊字符

![image-20210119150159937](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119150201.png)

![image-20210119150207814](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119150208.png)

```html
&nbsp; 空格
&lt; 小于号
&gt; 大于号
```

## 表格标签

- 简介

  ![image-20210119150417666](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119150419.png)

- 代码

  ```html
  <table>
    <caption>课程表</caption>
    <thead>
      <tr>
      <th colspan="2">星期一</th>
      </tr>
      <tr>
      <th>科目</th>
      <th>教师</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td rowspan="4">上午</td>
      <td>第一节</td>
      <td></td>
      </tr>
      <tr>
      <td>第二节</td>
    <td></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
      <td colspan="12">自制课程表，如有疑问，请联系xxx</td>
      </tr>        
    </tfoot>
  </table>
  <!--
  table - 定义表格的标签
  caption - 表格标题
  thead - 表格头部区域
  tbody - 表格主体区域
  tfoot - 表格脚部区域
  
  tr - 定义表格中的行
  th - 表格表头中的单元格，里面的文本内容加粗居中显示
  td - 定义表格中的单元格
  -->
  <!--
  表格中的属性，一般通过css来设置
  align - left、center、right - 规定表格相对周围元素的对齐方式
  border - 1 或 "" - 规定表格单元是否拥有边框，默认为""，表示没有边框
  cellpadding - 像素 - 规定单元边沿与其内容之间的空白，默认为1像素
  cellspacing - 像素 - 规定单元格之间的空白，默认2像素
  width - 像素或百分比 - 规定表格的宽度
  -->
  ```
  
  ![image-20210119152338899](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119152340.png)

- 合并单元格

  ![image-20210119151508671](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119151509.png)

  ​	![image-20210119151801482](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119151802.png)

  ![image-20210119152305505](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119152306.png)

- 示例

  ![image-20210119152703485](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119152705.png)

  合并单元格之后，下一行/列，当没有这一行/列，接着写就行

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      body {
        font-size: 16px;
        font-weight: normal;
      }
      table,
      th,
      td {
        font-weight: normal;
        border: 1px solid black;
        border-collapse: collapse;
      }
      th,
      td {
        /* width: 50px; */
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
      .unit {
        margin: 5px 0px 5px 2px;
      }
    </style>
  </head>
  <body>
    <div class="title">部直属企事业单位情况统计表</div>
    <div class="unit">填报单位（盖章）：</div>
    <table>
      <thead>
        <tr>
          <th rowspan="4">项目</th>
          <th colspan="6">事业单位</th>
          <th colspan="9">企业</th>
        </tr>
        <tr>
          <th rowspan="2">个数</th>
          <th rowspan="2">在岗职工人数</th>
          <th colspan="2">按经费来源分类</th>
          <th colspan="2">按规格来源分类</th>
          <th rowspan="2">个数</th>
          <th rowspan="2">在岗职工人数</th>
          <th colspan="3">按规模分类</th>
          <th colspan="2">按经营类型分类</th>
          <th rowspan="2">2003年资产总额（万元）</th>
          <th rowspan="2">2003年销售额总额（万元）</th>
        </tr>
        <tr>
          <th>财政补助单位</th>
          <th>经费自理单位</th>
          <th>司局级</th>
          <th>县处级</th>
          <th>大型</th>
          <th>中型</th>
          <th>小型</th>
          <th>直接服务水利</th>
          <th>其它</th>
        </tr>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
          <th>13</th>
          <th>14</th>
          <th>15</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>部直属单位直属企事业单位</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>省级部门直属企事业单位</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>说明</td>
          <td colspan="15">
            (1)本表统计部直属单位直属企事业单位、省级部门直属企事业单位情况。
            1、2、7、8、14、15栏填写年末数据。
          </td>
        </tr>
      </tfoot>
    </table>
  </body>
  </html>
  ```

## 列表标签

- 简介

  ![image-20210119152911012](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119152912.png)

### 无序列表 ul>li

![image-20210119153002281](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153003.png)

```html
<ul>
  <li>无序列表项1</li>
  <li>无序列表项2</li>
</ul>
<!--
无序列表-相互之间没有顺序，可以随意排列
自带样式属性，通过下列 css 设置去除
list-style: none;
-->
```

![image-20210119153232831](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153234.png)

### 有序列表 ol>li

![image-20210119153224824](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153226.png)

```html
<ol>
  <li>有序列表项1</li>
  <li>有序列表项2</li>
</ol>
```

![image-20210119153322502](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153323.png)

### 自定义列表 dl>dt+dd

![image-20210119153335694](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153337.png)

![image-20210119153349052](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153350.png)

```html
<dl>
  <dt>名词</dt>
  <dd>名词解释1</dd>
  <dd>名词解释2</dd>
</dl>
```

![image-20210119153404528](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153405.png)

![image-20210119153455070](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153456.png)

## 表单

- 简介

  ![image-20210119153528268](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153529.png)

  ![image-20210119153641736](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153642.png)

- 表单域

  ![image-20210119153802677](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153809.png)

- 表单控件（表单元素）

  ![image-20210119153841462](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119153842.png)

### input 表单元素

![image-20210119154019870](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119154021.png)

![image-20210119154024844](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119154025.png)

```html
<form>
  用户名：<input type="text"> <br />
  密码：<input type="password">
  性别：男<input type="radio"> 女<input type="radio">
  爱好：吃饭<input type="checkbox"> 睡觉<input type="checkbox"> 看电视<input type="checkbox">
</form>
<!--
属性 - 属性值 - 描述
name - 自定义 - 定义input元素的名称（主要是后台人员去使用）
value - 自定义 - 规定input元素的值（主要是后台人员去使用）
checked - checked - 此input元素首次加载时是否被选中（主要是针对单选按钮和复选框）
maxlength - 正整数 - 规定输入字段中的字符的最大长度
type - 设置input表单元素的不同形态 - 其属性值
  text - 单行的输入字段（默认宽度为20字符）
  password - 密码字段（字符被掩藏）
  radio - 单选按钮（要求有相同的name属性值）
  checkbox - 复选框（要求有相同的name属性值）
  reset - 重置按钮（清除表单中的所有数据）
  submit - 提交按钮（把表单数据发送到服务器）
  button - 点击按钮-一般通过JS启动脚本
  file - 文件上传（输入字段和浏览按钮）
  hidden - 定义隐藏的输入字段
  image - 图像形式的提交按钮
-->
```

![image-20210119154304082](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119154305.png)

![image-20210119155017130](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119155018.png)

![image-20210119155313190](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119155314.png)

### 新增 input 表单

#### 新增 input 类型

- 简介

  ![image-20210118133525113](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133526.png)

- 代码

  ```html
  <body>
    <form action="">
    	<ul>
        <li>邮箱：<input type="email" /></li>
        <li>网址：<input type="url" /></li>
        <li>日期：<input type="date" /></li>
        <li>时间：<input type="time" /></li>
        <li>数量：<input type="number" /></li>
        <li>手机号码：<input type="tel" /></li>
        <li>搜索：<input type="search" /></li>
        <li>颜色：<input type="color" /></li>
        <li><input type="submit" value="提交" /></li>
      </ul>
  	</form>
  </body>
  
  HTML5新增的input类型
  type的属性值
  email-邮箱
  url-URL类型
  date-日期
  time-时间
  month-月
  week-周
  number-数字
  tel-手机号码
  search-搜索框
  color-颜色选择表单
  
  ```

  ![image-20210118133647129](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133648.png)

#### 新增 input 属性

- 简介

  ![image-20210118133953445](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133954.png)

- 代码

  ```html
  <body>
    <form action="">
    	<input type="search" required="required" placeholder="默认" autofocus="autofocus" autocomplete="off" />
    	<input type="file" multiple="multiple" />
  	</form>
  </body>
  
  HTML5新增的表单属性
  required-表单内容不能为空
  placeholder-表单的提示信息，表单内存在值时将不显示
  autofocus-页面加载完成后自动聚焦到指定表单
  autocomplete-默认显示上次成功输入的内容-有name属性，同时成功提交过
  multiple-多选文件提交
  
  ```

  ![image-20210118135021568](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118135022.png)

### label 标签

![image-20210119155645134](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119155646.png)

```html
<label for="sex">男</label>
<input type="radio" name="sex" />
```

### select 表单元素

- 简介

  ![image-20210119155807352](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119155808.png)

  ![image-20210119155937501](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119155938.png)

- 代码

  ```html
  <select>
    <option>选项1</option>
    <option>选项2</option>
    <option selected="selected">默认选项</option>
  </select>
  ```

### textarea 文本域标签

- 简介

  ![image-20210119160141560](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119160142.png)

- 代码

  ```html
  <textarea rows="3" cols="20">文本内容</textarea>
  <!--
  一般通过 css 来改变大小？
  -->
  ```

  