# CSS 2D、3D转换

## transform 2D转换属性

- 简介

  ![image-20210119172928255](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/html/20210119172929.png)

### 设置中心点 transform-origin

- 简介

  ![image-20210119180310547](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180311.png)

  ![image-20210119180336622](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180337.png)

### 2D移动 translate

- 简介

  改变元素在页面中的位置，类似定位

- 代码

  ```css
  div {
    transform: translate(x, y);
    transform: translateX(m);
    transform: translateY(n);
  }
  ```

- 注意

	![image-20210119173529541](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119173543.png)

	![image-20210119173625103](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119173626.png)

- 图片上浮效果

![image-20210119173654832](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119173655.png)

- 让盒子水平垂直居中

  ![image-20210119173847634](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119173849.png)

  ```css
  p {
    width: 200px;
    height: 200px;
    
    /* 通用，不论宽高 */
    /* 移动屏幕的一半 */
    position: absolute;
    top: 50%;
    left: 50%;
    /* 移动自身的一半 */
    transform: translate(-50%, -50%);
  }
  /*
  translate里面的参数使用百分比，移动的距离就是与盒子自身的宽度进行比较的
  这里50% 就是 100px，因为宽高是200px
  translate 对行内元素无效
  */
  ```

### 2D旋转 rotate

- 简介

  ![image-20210119174743121](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119174744.png)

  单位是°

  默认旋转的中心点是元素的中心点

  正值-顺时针，负值-逆时针

- 代码

  ```css
  img {
    transform: rotate(45deg);
  }
  /* 沿图片中心顺时针旋转45° */
  ```

- 示例

  ![image-20210119180459912](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180501.png)

### 2D缩放 scale

- 简介

  ![image-20210119180523773](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180524.png)

  放大倍数，无单位

  若只写一个参数，默认两个参数都是该值

  scale 缩放的优势：不会影响其他的盒子，且可以设置缩放的中心点（设置方式同上）

- 示例

  ![image-20210119180819872](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180821.png)

### 2D转换综合

```css
div {
  transform: translate() rotate() scale();
}
/*
移动、旋转、缩放
前面的会影响后面的属性，需要考虑先后顺序
*/
```

![image-20210119180928062](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119180929.png)

![image-20210119181001330](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119181002.png)

## animation 动画属性

- 简介

  ![image-20210119181146272](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119181147.png)

- 动画的使用

  ![image-20210119181418610](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119181419.png)

  ```css
  /* 定义动画 0%=from 100%-to */
  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(1000px, 0);
    }
    50% {
      transform: translate(1000px, 500px);
    }
    75% {
      transform: translate(0, 500px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  
  /* 使用动画 */
  div {
    width: 100px;
    height: 100px;
    background-color: red;
    
    animation-name: move;
    animation-duration: 2s;
    animation-function: ease;
    animation-delay: 0.5s;
    animation-iteration-count: 2;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态
  }
  div:hover {
    animation-play-state: paused;
  }
  /*
  动画常用属性
  @keyframes - 规定动画
  animation-name - 调用的动画名称
  animation-duration - 规定动画完成一个周期所花费的时间
  animation-function - 规定动画的速度曲线
  	ease-默认
  animation-delay - 规定动画的开始时间
  animation-iteration-count - 规定动画被播放的次数
  	默认是1，infinite-无限
  animation-direction - 规定动画是否在下一周期逆向播放
  	默认是normal，alternate-逆播放
  animation-fill-mode - 规定动画结束后的状态
  	forwards-保持，backwards-回到起始
  animation 所有上述动画属性的简写
  animation-play-state - 规定动画是否正在运行或暂停
  	running-运行，默认，paused-暂停
  */
  ```

  ![image-20210119182040231](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119182041.png)

  ![image-20210119182847242](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119182848.png)

  ![image-20210119182935015](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119182936.png)

  ![image-20210119183022288](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183023.png)

  ```css
  @keyframes w {
    0% {
      width: 0;
    }
    100% {
      width: 200px;
    }
  }
  div {
    overflow: hidden;
    font-size: 20px;
    width: 0;
    height: 30px;
    background-color: red;
    
    white-space: nowrap;
    animation: w 4s steps(10) forwards;
  }
  ```

- 示例

  ![image-20210119183410188](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183411.png)

## 3D转换

- 简介

  ![image-20210119183514518](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183516.png)

  ![image-20210119183528562](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183529.png)

### 透视

- 简介

  ![image-20210119184403044](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119184404.png)

  视距越近，成像越大；视距越远，成像越小

  ![image-20210119184446398](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119184447.png)
- 代码

  ```css
  body {
    perspective: 500px;
    /*
    透视写到被观察元素的父盒子上
    视距越小，成像越大；视距越大，成像越小
    */
  }
  div {
    transform: translate3d(400px, 100px, 100px);
  }
  /*
  屏幕固定
  perspective - 眼睛的位置
  translateZ - 物体的位置
  -成像为眼睛看到的物体在屏幕上的像
  */
  ```

  

### 3D移动 translate3d

- 简介

  ![image-20210119183556606](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183557.png)

- 代码

  ![image-20210119183648138](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119183649.png)

  ```css
  div {
    transform: translateX(100px) translateY(100px) translateZ(100px);
    transform: translate3d(100px, 100px, 100px);
  }
  ```

- translateZ

  ![image-20210119184553530](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119184554.png)

### 3D旋转 rotate3d

- 简介

  ![image-20210119202147746](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202150.png)

  ![image-20210119202312227](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202313.png)

  ![image-20210119202328511](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202329.png)

- 代码

  ```css
  img {
    transform: rotateX(180deg); /* 沿X轴旋转180° */
    transform: rotateY(180deg); /* 沿Y轴旋转180° */
    transform: rotateZ(180deg); /* 沿Z轴旋转180° */
    transform: rotate3d(1, 1, 0, 180deg); /* 沿向量(1, 1, 0)旋转180° */
  }
  ```

### 3D呈现 transform-style

- 简介

  ![image-20210119202644855](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202646.png)

  3D呈现 transform-style

  控制子元素是否开启三维立体环境

  属性值 flat-不开启3D立体空间，默认的 preserve-3d-子元素开启立体空间

  代码是写给父级的，但影响的是子元素

- 代码

  ```css
  .father {
    /* 让子元素保持 3d 立体空间环境 */
    transform-style: preserve-3d;
  }
  ```

### 示例

#### 两面翻转的盒子

![image-20210119202853003](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202854.png)

![image-20210119202926037](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119202927.png)

![image-20210119203101628](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119203102.png)

#### 3D导航栏

![image-20210119203243986](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119203245.png)

![image-20210119203400122](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119203401.png)

#### 旋转木马

![image-20210119211055547](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119211056.png)

![image-20210119211241421](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119211242.png)

## 浏览器私有前缀

![image-20210119211843186](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210119211844.png)