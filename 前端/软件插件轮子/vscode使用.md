# vscode 使用

## 快捷键

![image-20210421211353467](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210427152504.png)

## 创建用户代码片段

[官方：emmet在github上的代码](https://github.com/emmetio/emmet)

[官方：emmet在VSCode上的说明文档](https://code.visualstudio.com/docs/editor/emmet)

[官方：emmet的官方文档](https://docs.emmet.io/)

- 默认的用户代码片段（Snippets）

  ![image-20210123110304145](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123110306.png)

  上述定义的全局用户代码片段，就定义在此处

  ![image-20210123112848467](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123112850.png)

  ![image-20210125201928496](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210125201930.png)

  在 javascript.json 的用户代码片段中 定义 log

  ![image-20210125202001105](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210125202002.png)

  但 VSCode 中好像在 JavaScript 语言基础功能中定义了 log，不知道

- 自定义Snippets

  [vscode snippets 配置快速代码模板](https://blog.csdn.net/qq_31331027/article/details/84635553)

  [VSCode 设置 Snippets 代码块](https://blog.csdn.net/ArtinCode/article/details/102961785)
  
  [vscode 设置代码模板，变量值 —— 自动生成文件名、作者、创建日期等信息](https://blog.csdn.net/weixin_44901175/article/details/107617912)
  
  ![image-20210123122040809](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123122042.png)
  
  在 VSCode 中好像定义了各种 Snippets 片段，但没有 html、css的，还是应该在 emmet 中
  
- Emmet语法

  + VScode 内置了 Emmet 语法，想修改默认的 Emmet 模板（以前可以，但好像现在不行了）

    ![image-20210123111834628](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123111835.png)

    [修改 VS Code (即 emmet 语法) 自动生成的 HTML 模板](https://www.jianshu.com/p/4effad66eccc)

    [修改 VSCode 中感叹号回车自动生成的 HTML 模板](https://blog.csdn.net/qq_42123832/article/details/107492506)

  + 但可以自定义emmet的snipptes
  
    [VSCode 中 Emmet 修改默认 html 或 css 模板 snippets](https://blog.csdn.net/weixin_42655717/article/details/112533401) - 可行
  
    [VS Code 中自定义 Emmet 代码片段](https://blog.csdn.net/zjthorse/article/details/83048869)

    定义 emmet 的 snippets

    ![image-20210123132426822](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123132429.png)

    覆盖默认的 snippets
  
    ![image-20210123133423933](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123133425.png)
    
    定义完后，使用 emmet 语法，可能需要加载一会，如：`!+Tab` 可能是产生默认的代码，等几秒后，`!+Tab` 就是产生新定义的代码了

## 关闭 vscode 烦人的提示框

[关闭 vscode 烦人的提示框](https://blog.csdn.net/liuyuemozhu/article/details/101056556)

![image-20210123112453285](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210123112454.png)

这个在编写 ts 代码时，就是显示鼠标悬停提示信息的，控制的开关吧

## 文件夹折叠问题

[vscode 下级文件夹与上级文件夹并列，文件夹折叠问题解决](https://blog.csdn.net/weixin_42162265/article/details/106207676)

![image-20210127141157508](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/软件插件轮子/all/20210127141221.png)

## 多行操作

```js
ALT + 左键 // 选择多个编辑位点
ALT + Shift // 竖列选择

// 选择多个编辑位点后
←/→ // 光标移动一个字符
CTRL + ←/→ // 光标移动一个单词
SHIFT + ←/→ // 光标选择一个字符
CTRL + SHIFT + ←/→ // 光标选择一个单词
```

## 终端问题

- 终端一片空白

  ![image-20210418160300239](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210418161053.png)
  
  [打开 vs code 终端，下面一片空白 无法输入命令【轻松解决】](https://blog.csdn.net/xw_009/article/details/106079306)	
  
  [解决 VSCode 终端空白无法输入的问题](https://blog.csdn.net/Burning_Wzl_/article/details/103703628)

- 修改默认终端

  ![image-20210418161001202](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210418161054.png)

  终端说明

  ![image-20210418163714090](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E5%89%8D%E7%AB%AF/react/20210418163715.png)
  
  除了 cmd 还有 powershell（好像有高亮）
  
  [修改 vscode 默认的终端](https://blog.csdn.net/u013517122/article/details/82776607)
  
  [vscode 设置终端](https://blog.csdn.net/weixin_42369292/article/details/87093216)

## git 管理

![image-20210418173308002](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210418173503.png)

[Visual Studio Code 使用 Git 进行版本控制](https://www.jianshu.com/p/9093e703c4b1)

## js 文件中敲 jsx 代码，提示标签

![image-20210419122032467](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210427152505.png)

## react 中的代码片段

![image-20210419135929277](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E8%BD%AF%E4%BB%B6%E6%8F%92%E4%BB%B6%E8%BD%AE%E5%AD%90/all/20210427152506.png)