# CSS 黑马面面项目

- 项目简介

  ![image-20210121165417529](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121165419.png)

  ![黑马面面](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121165235.jpg)

## 切图

- 简介

  切图不需要前端人员去切，让UI美工去切

  切好后发送到蓝湖/摹客中

- UI 美工

  蓝湖 - 收费了

  [摹客官网](https://www.mockplus.cn/)

  协作平台

  ![image-20210121170612016](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121170613.png)

  步骤：

  1. 摹客官网地址： https://www.mockplus.cn/  注册一个账号
  2. 下载moke  ps插件 
  3. PS 安装/摹客/蓝湖插件
  3. 打开PS/摹客/蓝湖插件
  4. 上传（需要切图，需要先标注切图）
  5. 查看项目
  6. 邀请成员进入（分享按钮，链接地址）

  ![PS操作](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121172502.png)

  ![摹客网操作](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121172516.png)

## 适配方案

### flex + rem + flexible.js + less

- 前期准备

  ![image-20210121180523611](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210121180525.png)

  cssroot的设置，统一就行，以375或750为准都行

- 开始开发

## swiper 插件

- 简介

  [swiper 插件官网](https://www.swiper.com.cn/)

  ![image-20210122100406307](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122100441.png)

  ![image-20210122100701056](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122100702.png)

  ![image-20210122102613707](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122102615.png)

- 定制效果

  ![image-20210122104725981](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122104727.png)

- 制作内容

  就业指导模块

  ![image-20210122120223310](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122120224.png)

  充电学习模块

  ![image-20210122122152997](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122122154.png)

  ![image-20210122124319424](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122124321.png)

## 码云部署

- 推送

	![image-20210122132001078](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122132004.png)

- 部署静态网站

  ![image-20210122140702064](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/前端/css/20210122140703.png)
  
  [草料二维码官网](https://cli.im/)

## 所有代码

```html
<!-- 首页 html 代码 -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>黑马面面</title>
  <link rel="stylesheet" href="./css/normalize.css">
  <link rel="stylesheet" href="./css/swiper.min.css">
  <link rel="stylesheet" href="./css/index.css">
  
</head>
<body>
  <section class="wrap">
    <!-- 头部区域 始 -->
    <header class="header">黑马面面</header>
    <!-- 头部区域 终 -->

    <!-- 导航栏区域 始 -->
    <nav class="nav">
      <a href="#" class="item">
        <img src="./icons/icon1.png"></img>
        <span>HR面试</span>
      </a>
      <a href="#" class="item">
        <img src="./icons/icon2.png"></img>
        <span>笔试</span>
      </a>
      <a href="#" class="item">
        <img src="./icons/icon3.png"></img>
        <span>技术面试</span>
      </a>
      <a href="#" class="item">
        <img src="./icons/icon4.png"></img>
        <span>模拟面试</span>
      </a>
      <a href="#" class="item">
        <img src="./icons/icon5.png"></img>
        <span>面试技巧</span>
      </a>
      <a href="#" class="item">
        <img src="./icons/icon6.png"></img>
        <span>薪资查询</span>
      </a>
    </nav>
    <!-- 导航栏区域 终 -->

    <!-- go 区域 始 -->
    <section class="go">
      <img src="./images/go.png" alt="">
    </section>
    <!-- go 区域 终 -->
  </section>

  <!-- 就业指导模块 始 -->
  <section class="content">
    <!-- 头部区域 -->
    <div class="con-hd">
      <h4>
        <span class="icon"><img src="./icons/i2.png" alt=""></span>
        就业指导
      </h4>
      <a href="#" class="more">更多>></a>
    </div>
    <!-- 旋转木马轮播图区域 -->
    <div class="get_job_focus">
      <!-- Swiper -->
      <!-- 添加个类名，让后续的 js 代码能区分开不同的 swiper -->
      <div class="swiper-container get_job_fo">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#"><img src="./images/pic.png" alt=""></a>
            <p>老师教你应对面试技巧</p>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="./images/ldh.jpg" alt=""></a>
            <p>老师教你应对面试技巧</p>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="./images/3.jpg" alt=""></a>
            <p>老师教你应对面试技巧</p>
          </div>
        </div>
        <!-- 要调整箭头位置，但 swiper-container 有overflow:hidden，就要将其拿出去 -->
        <!-- 添加左右箭头效果 -->
        <!-- Add Arrows -->
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
        <!-- 下面的是分页器效果，不需要删除 -->
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <!-- 根据需求，调整箭头，需要放在此处 -->
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </section>
  <!-- 就业指导模块 终 -->


  <!-- 充电学习模块 始 -->
  <section class="content study_con">
    <!-- 头部区域 -->
    <div class="con-hd">
      <h4>
        <span class="icon"><img src="./icons/i1.png" alt=""></span>
        充电学习
      </h4>
      <a href="#" class="more">更多>></a>
    </div>
    <!-- 学习模块轮播图区域 -->
    <div class="study">
      <!-- 添加个类名，让后续的 js 代码能区分开不同的 swiper -->
      <div class="swiper-container study_fo">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#"><img src="./images/pic1.png" alt=""></a>
            <h5>说地道英语，告别中式英语</h5>
            <p>100 人学习</p>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="./images/pic2.png" alt=""></a>
            <h5>说地道英语，告别中式英语</h5>
            <p>100 人学习</p>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="./images/pic1.png" alt=""></a>
            <h5>说地道英语，告别中式英语</h5>
            <p>100 人学习</p>
          </div>
          <div class="swiper-slide">
            <a href="#"><img src="./images/pic2.png" alt=""></a>
            <h5>说地道英语，告别中式英语</h5>
            <p>100 人学习</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 充电学习模块 终 -->

  <!-- 底部模块 始 -->
  <footer class="footer">
    <a href="#" class="item">
      <img src="./icons/home.png" alt="">
      <p>首页</p>
    </a>
    <a href="#" class="item">
      <img src="./icons/ms.png" alt="">
      <p>模拟面试</p>
    </a>
    <a href="#" class="item">
      <img src="./icons/net.png" alt="">
      <p>技术面试</p>
    </a>
    <a href="#" class="item">
      <img src="./icons/user.png" alt="">
      <p>我的主页</p>
    </a>
  </footer>
  <!-- 底部模块 总 -->

  <!-- js 部分 -->
  <script src="./js/flexible.js"></script>
  <script src="./js/swiper.min.js"></script>
  <script>
    // 这个函数里面是 就业指导轮播图
    (function () {
      var swiper = new Swiper('.get_job_fo', {
        // 能够显示的个数
        // slidesPerView: 3,
        slidesPerView: 2,
        // 每个 slide 之间的距离
        spaceBetween: 30,
        // 活跃状态的 slide 的位置
        // true-矩阵 flase-居左
        centeredSlides: true,
        loop: true,
        // // 分页器效果 - 不需要删除
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // 添加左右箭头效果
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    })();
    // 两个函数都是对 swiper-container 的类标签进行修改 - 需要自行调整
    // 这个函数里面是 充电学习轮播图
    (function () {
      var swiper = new Swiper('.study_fo', {
      slidesPerView: 2.2,
      spaceBetween: 20,
    });
    })();
  </script>
</body>
</html>

```

```less
// index.less 首页样式
// 以iphone678为准，是 375px，划分为10等份，1rem=37.5
// 修改cssroot为37.5
body {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  background-color: #F2F4F7;
}
a {
  text-decoration: none;
  color: #707070;
}
// 约束：当屏幕大于 750px 时，html字体大小就不再变化了
@media screen and (min-width: 750px) {
  html {
    font-size: 37.5px !important;
  }
}

.wrap {
  background-color: #fff;
  padding-bottom: 1.146667rem;
}
// 头部区域 始
.header {
  height: 2.133333rem;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
  line-height: 2.133333rem;
  font-size: .933333rem;
  color: #1c1c1c;
}
// 头部区域 终

// 导航栏区域 始
.nav {
  display: flex;
  // 强制换行
  flex-wrap: wrap;
  padding: 1.2rem 0 1.6rem;

  .item {
    width: 33.33%;
    // 纵向显示
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 3.706667rem;
      height: 3.706667rem;
    }
    span {
      font-size: .666667rem;
      color: #707070;
    }
    // 选择前面三个
    &:nth-child(-n+3) {
      margin-bottom: 1.653333rem;
    }
  }
}
// 导航栏区域 终

// go 区域 始
.go {
  margin: 0 .266667rem 0 .48rem;
}
// go 区域 终


// 就业指导模块  始
// 头部区域 始
.content {
  padding: 1.066667rem .64rem;
  margin-top: .266667rem;
  background-color: #fff;
  .con-hd {
    display: flex;
    justify-content: space-between;
    height: 1.013333rem;
    line-height: 1.013333rem;
    margin-bottom: .906667rem;
    h4 {
      margin: 0;
      font-size: .746667rem;
      color: #333;
      .icon {
        display: inline-block;
        width: 1.013333rem;
        height: 1.013333rem;
        // 让后面的文字垂直居中
        vertical-align: middle;
      }
    }
    .more {
      font-size: .586667rem;
      color: #999;
    }
  }
}
// 头部区域 终

// 旋转木马轮播图区域 始
.get_job_focus {
  position: relative;
  .swiper-container {
    // 根据需求，把宽度约束住，为 540px
    width: 14.4rem;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    // 添加属性
    flex-direction: column;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    // 未选中的图片进行了缩放
    transform: scale(0.8);
    // 并设置其透明度
    opacity: .4;
    a {
      width: 9.013333rem;
      height: 10.026667rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      width: 9.013333rem;
      font-size: .666667rem;
      margin-top: .64rem;
      color: #333;
    }
  }
  // 活动的标签 - 就是中间那个
  .swiper-slide-active,
  .swiper-slide-duplicate-active{
    // 缩放 1，其余 缩放 0.8，故中间的图片要 大
    transform: scale(1);
    opacity: 1;
    // 提高层级
    z-index: 999;
  }
  .swiper-button-next,
  .swiper-button-prev {
    outline: none;
    &:after {
      color: #333;
      font-size: 1.066667rem;
    }
  }
}
// 旋转木马轮播图区域 终
// 就业指导模块 终


// 充电学习模块 始
.study_con {
  padding-bottom: 3.733333rem;
}
.study {
  .swiper-container {
    width: 100%;
    height: 100%;
    padding: .266667rem;
  }

  .swiper-slide {
    text-align: left;
    font-size: 18px;
    background: #fff;

    // 添加属性
    width: 7.733333rem;
    height: 9.066667rem;
    background-color: #fff;
    border-radius: .266667rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);

    h5 {
      font-size: .693333rem;
      margin: .533333rem 0;
      font-weight: 400;
      padding-left: .266667rem;
    }
    p {
      font-size: .693333rem;
      color: #FF4400;
      padding-left: .266667rem;
    }
    /* Center slide text vertically */
    // display: -webkit-box;
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: flex;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // -webkit-justify-content: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    // -webkit-align-items: center;
    // align-items: center;
  }
}
// 充电学习模块 终

// 底部模块 始
.footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  height: 2.933333rem;
  width: 100%;
  z-index: 999;
  padding: .533333rem;
  border-top: 1px solid #ccc;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 1.04rem;
      height: 1.093333rem;
    }
    p {
      font-size: .586667rem;
      color: #666;
      margin-top: .266667rem;
    }
  }
}
// 底部模块 终
```

