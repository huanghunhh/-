# html5 新特性

## 语义化标签

- 简介

  常用于布局的 div 标签，对于搜索引擎来说，是没有语义的

  ![image-20210118132316249](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118132336.png)

  ![image-20210118132532011](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118132533.png)

  主要是针对搜索引擎，可以使用多次，需要转换为块级元素

  移动端常用这些标签

- 代码

  ```html
  <body>
    <header>头部标签</header>
    <nav>导航栏标签</nav>
    <section>文档的某个区域</section>
    <footer>尾部标签</footer>
  </body>
  ```

## 多媒体标签

- 简介

  ![image-20210118132831910](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118132833.png)

- 视频标签

  ```html
  <body>
    <video controls="controls" width="300">
    	<source src="move.mp4" type="video/mp4">
    </video>
  </body>
  
  属性设置
  autoplay-视频就绪自动播放，谷歌浏览器把自动播放禁用了-需要添加muted属性
  muted-静音播放
  controls-显示播放控件
  loop-循环播放
  poster-等待视频加载时，会显示的图片
  
  播放控件在不同浏览器中是不一样的
  一般不在这里写control属性
  -通过JS来设置播放控件
  
  ```

  ![image-20210118133103432](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133104.png)

  ![image-20210118133112870](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133113.png)

  ![image-20210118133138941](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133140.png)

- 音频

  ```html
  <body>
    <audio controls="controls">
    	<source src="happy.mp3" type="audio/mp3">
    </audio>
  </body>
  
  属性
  autoplay-自动播放
  controls-显示播放控件
  loop-循环播放
  src-音频的URL
  
  ```

  ![image-20210118133318526](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133319.png)

  ![image-20210118133328183](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133329.png)

  ![image-20210118133337152](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133338.png)

- 结

  ![image-20210118133448584](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210118133450.png)

## 新增 input 表单

### 新增 input 类型

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

### 新增 input 属性

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