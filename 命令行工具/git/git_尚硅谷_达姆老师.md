# git

## 版本控制

### 版本控制介绍

- 简介

  版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统

- 集中式的版本控制

  svn

  存储版本差异，需要的存储空间较小，但版本回滚太慢

  基本被淘汰了

- 分布式的版本控制

  git

  存储的是项目的完整快照，存储了索引，回滚快，通过压缩算法，增加的存储空间也不多

  去中心化，不需要中心服务器

  存储在本地

  也可以推送到远端仓库github

- 分支

  分支切换

### 软件安装

- 推荐软件

  Git

- 下载地址

  [Git官网_win版本](https://git-scm.com/download/win)

- 安装说明

  ![image-20210111120131968](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111120133.png)

  ![image-20210111120139366](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111120144.png)

  git 采用的是 Linux命令

  ![image-20210111121900459](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111121901.png)

### git 初始化

#### git 命令

```shell
# git 初始化命令
git init # git 初始化

# 查看版本
git --version

# 配置别名命令
git config --global alias.brall "log --oneline --decorate --graph --all"
git config --global alias.st status
git config --global alias.cot checkout
```
#### linux命令

```shell
# linux 命令
clear # 清屏
echo [text] # 向控制台输出信息
echo [text] > [.txt] # 向文件中输出信息
ll # 展示当前目录下的子文件和子目录
find # 展示当前目录下的子孙文件和子孙目录
find -type f # 展示当前目录下的子孙文件
rm [.txt] # 删除文件
mv [old.txt] [new.txt] # 文件重命名
cat [.txt] # 查看文件内容
vim [.txt] # 编辑文件（通过vim-又是一个大课）
```

![image-20210111122507103](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111122508.png)

#### 配置命令

```shell
# git 配置命令
git config # 当前项目的git目录中的配置文件 .git/config
git config --system # 系统配置 /etc/gitconfig文件
git config --global # 用户配置 ~/.gitconfig文件
git config --list # 查看已有的配置信息
git config --global --unset user.email # 删除配置信息（邮箱）

# 进行配置
# 配置用户信息
git config --global user.name "[name]" # 配置个人的用户名称
git config --global user.email [email] # 配置邮箱

```
![image-20210111121937595](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111121938.png)

## 三个对象

- 简介

  git 的核心部分是一个简单的键值对数据库

  可以向该数据库插入任意类型的内容，会返回一个键值，通过该键值可以在任意时刻再次检索该内容

  Git对象 
  
  树对象 
  
  提交对象

### git 对象

- 命令操作

  ```shell
  # hash-object命令
  echo "test" | git hash-object -w --stdin
  # -w 指示hash-object命令存储数据对象；若不指定此选项。则该命令仅返回对应的键值
  # --stdin 指示该命令从标准输入读取内容；若不指定此选项，则需要在命令尾部给出待存储文件的路径
  git hash-object -w [文件路径] # 存文件
  git hash-object [文件路径] # 返回对应文件的键值（输出一个长度为40字符的校验和，这是一个 SHA-1 哈希值）
  
  # 查看命令
  git cat-file -p [hash值] # 查看hash值对应的文件的内容
  git cat-file -t [hash值] # 查看hash值对应的文件的类型
  ```

  不加 -w，仅返回对应的键值，不会存储进git数据库中

  ![image-20210112222623367](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210112222624.png)

  加了-w，存储输出的内容

  ![image-20210112230609011](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210112230610.png)

  存储文件

  ![image-20210112230851250](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210112230852.png)

  git 存储内容的方式：一个文件对应一条内容，校验和的前两个字符用于命名子目录，余下38个字符用作文件名

- git 对象解释

  每个文件的每次改动（手动执行git hash-object -w [文件]）就对应一个hash值，一个hash值就对应一个git对象

  git对象不能代表该项目的快照，只用作存储文件

  因为：文件对应的哈希值难记，文件名没有被保存

  git对象的操作都是在对本地数据库进行操作，即在工作区进行操作，不涉及暂存区

  ——树对象

### 树对象

- 简介

  树对象 - 允许将多个文件组织到一起

  所有内容均以树对象和数据对象（git对象）的形式存储

  树对象 - 对应UNIX中的目录项

  数据对象 - 大致上对应文件内容

  一个树对象包含了一条或多条记录 - 每条记录含有一个指向git对象或者子树对象的哈希指针以及相应的 模式、类型、文件名信息

  ![image-20210112232800287](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210112232801.png)

- 命令操作

  ```shell
  # 生成树对象 命令
  git update-index --add --cacheinfo [文件模式] [hash值] [文件名称]
  # 文件模式表明文件的类型 
  # 100644-普通文件 100755-可执行文件 120000-符号链接
  # --add 为文件的首个版本创建一个暂存区
  # --cacheinfo 为位于git数据库中的文件在暂存区创建首个版本
  git write-tree # 生成树对象
  
  # 暂存区命令
  git ls-files -s # 查看暂存区内容
  find .git/objects/ -type f # 查看git数据库中的内容
  git read-tree --prefix=bak [hash值] # 将树对象读入暂存区
  ```

  ![image-20210113202608022](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113202630.png)

  较为复杂的例子

  ![image-20210113203657552](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113203659.png)

  ![image-20210113204137093](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113204139.png)

  ![image-20210113204358259](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113204359.png)

  ![image-20210113204433487](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113204435.png)

  现在文件的大概逻辑（hash值不对应）

  ![image-20210113204459529](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113204500.png)

  ![image-20210113204525615](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113204527.png)

  树对象能勉强代表版本了，但相关信息我们不知道，需要提交对象来保存需要的基本信息

### 提交对象

- 命令操作

  ```shell
  # 提交对象命令
  git commit-tree [hash值] # 根据树对象的hash值创建一个提交对象
  git commit-tree [hash值] -p [hash值] # 不是第一次对暂存区做快照，此时有父对象，根据树对象的hash值创建提交对象的同时，指定该提交的父提交对象
  git cat-file -p [hash值] # 查看提交对象
  ```
  
  ![image-20210113205520221](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113205521.png)

- 总结

  代表一个项目版本的是 - 一个提交对象 项目的版本+版本信息

  直接访问提交对象

  树-一个项目版本的快照

  提交对象-对树进行了封装

  -提交对象是链式的，可以串版本

  git存储的是每个版本的快照，而不是增量

  -本机上的.git目录下的object 就存储了项目的所有历史记录

  -想回滚 - 对应的版本的哈希值，直接跳转就行

   

  底层命令

  -知道概念就行

  -git对象（文件的快照） 树对象（项目的快照） 提交对象（项目的版本）

  -命令不需要记忆

## 高层命令

### 工作流程

- 高层命令

  ```shell
  # 高层命令
  git add [./文件] # 将工作目录里面的内容，生成git对象（所有有改动的文件都生成一个对应的git对象），放入版本库中，再从版本库中拿出，放到暂存区中-git进行管理了（此时没有提交，没有生成树对象）
  git commit -a -m [描述信息] # 生成树对象和提交对象
  # -a 在暂存区存储的文件，可以通过-a选项省略git add 命令
  # -m [描述信息] 通过-m选项，不进入注释编辑界面，就在此处提交描述信息
  
  git status # 查看文档的状态
  
  git diff # 查看文件内容，关注当前做的哪些更新还没有暂存
  git diff --cached # 查看文件内容，关注当前哪些更新已经暂存起来准备好下次提交了
  git diff --staged # 同上
  # (白色)-未变 (+绿色)-增加 (-红色)-删除
  
  git rm [.txt] # 从工作目录中删除文件并存储到暂存区
  git mv [.txt] # 重命名文件并存储到暂存区
  ```

- 工作流程

  ```shell
  # 1 创建工作目录，进行创作修改
  # 2 git add . 生成所有文件的git对象，放入版本库，放入暂存区
  		git hash-object -w [文件路径]
  		git update-index --add --cacheinfo [文件模式] [hash值] [文件名称]
  # 3 git commit -m [描述信息] 生成树对象和提交对象
  		git write-tree
  		git commit-tree
	```

- 文件状态

  ![image-20210113211551127](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113211552.png)

  + 工作目录下的文件

    已跟踪

    未跟踪 untracked files（红色）

  + 已跟踪的文件

    已提交

    已修改 

    modified（红色）

    deleted （红色）

    已暂存 绿色

  ![image-20210113211744590](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113211745.png)

### 日志相关

- 命令操作

  ```shell
  # 日志相关命令
  git log # 查看详细的日志信息
  git log --pretty=oneline # 一行简略显示日志信息
  git log --oneline # 一行简略显示日志信息（hash值只显示前七位）
  
  git log --oneline --decorate --graph --all # 查看项目分叉历史
  git brall # 上面命令的别名
  
  git reflog # 查找操作日志，能看到被删除的内容
  ```

- 高层命令结

  ![image-20210113214012945](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210113214014.png)

## git 分支

### 分支基操

- 简介

  ![image-20210114090822812](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114090824.png)

  分支：将工作从开发主线上分离开，以免影响开发主线

  git 的分支模型高效轻量

  分支就是一个活动的指针，不是固定的

  master 是默认的主分支

  HEAD 永远指向最新的提交对象

  进行的文件修改操作，对应 HEAD，当有新的提交对象时，HEAD 向前走，带着 HEAD 指向的分支向前走

  分支的本质就是一个提交对象，相当于给提交对象起个名字

  HEAD 是一个指针，默认指向master分支

  切换分支就是让 HEAD 指向不同的分支，每次有新的提交时，HEAD 都会带着当前指向的分支一起向前移动

- 命令操作

  ```shell
  # 分支命令
  git branch # 显示分支列表
  git branch [分支名] # 在当前的提交对象上创建分支
  git checkout [分支名] # 切换分支
  git checkout -b [分支名] # 新建分支并切换过去
  
  git log --oneline --decorate --graph --all # 查看项目分叉历史
  git brall # 上面命令的别名
  
  git branch -d [分支名] # 删除合并分支
  git branch -D [分支名] # 强制删除分支
  git branch -v # 查看所有分支的最后一次提交
  git branch [分支名] [hash值] # 新建一个分支并且使分支指向对应的提交对象
  ```

- 注意

  切换到位于时间序列前的分支，位于时间序列后的分支的内容就看不见了
  
  git brall 查看所有分支

- 分支实战

  略

  ![image-20210114105022906](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114105024.png)

### 分支合并

- 命令操作

  ```shell
  # 分支合并命令
  git merge [分支名] # 将分支合并到当前分支上
  git branch -d [分支名] # 删除合并后的分支
  ```

- 快进合并

  相当于串行，不会产生冲突

  ![image-20210114124217779](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114124230.png)

- 典型合并

  相当于并行，可能产生冲突

  需要人为的修改一下冲突文件

  ![image-20210114124635212](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114124642.png)

  ![image-20210114124829772](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114124831.png)

  ![image-20210114124857443](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114124858.png)

### 分支守则

- 简介

  主分支是不能动的

  接手项目后，从分支创建自己的分支-长期分支

  然后再创建各个分支，开始完成各功能-特性分支

- 分支结

  分支的本质就是提交对象

  HEAD-指向提交对象的指针，当前操作的分支，会带着分支一起移动

  .git/refs 目录中保存了分支及其对应的提交对象

### 切换分支

- 简介

  在切换时，一定要保证当前分支是干净的

  允许切换分支：分支上所有的内容处于 已提交状态

  ​    分支上的内容是初始化创建，处于未跟踪状态（避免）

  ​    分支上的内容是初始化创建，第一次处于已暂存状态（避免）

  不允许切分支：分支上所有的内容处于 已修改状态 或 第二次以后的已暂存状态

   

  在分支上的工作做到一半时，如果有切换分支的需求，我们应该将现有的工作存储起来

## git 存储

- 简介

  存储-混乱状态（做了一部分工作），想切换到另外的分支，但不想为此时做的工作做一个提交，只想保存

  使用栈存储

- 命令操作

  ```shell
  # 栈操作命令
  git stash list # 查看栈中的存储
  git stash # 将未完成的修改保存到一个栈上，之后可以在任何时候重新应用这些改动-一般不要在栈中保存太多
  git stash apply # 应用栈顶元素
  git stash drop [栈元素存储名] # 删除在栈中的指定存储
  # 上面两条命令相当于下面一条
  git stash pop # 应用栈顶元素，并立即从栈中删除
  
  ```

- 示例

  ![image-20210114130352930](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114130354.png)

  通过git brall 可以看见对栈进行了操作

## git 后悔药

- 简介

  ![image-20210114230332795](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114230354.png)

  ![image-20210114232537584](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210114232538.png)

- 命令操作

  ```shell
  # git后悔药命令
  # 重置工作区
  git cot -- [文件名] # 重置工作目录
  git restore [文件名] # 新版本的重置工作目录
  
  # 重置暂存区
  git reset HEAD [文件名] # 保存到暂存区后，撤回
  git restore --staged [文件名] # 新版本的从暂存区中撤回
  
  git commit --amend # 注释写错了，重新提交
  
  # git 2.23 新发布的两个新命令
  git switch
  git restore
  ```

- reset 三部曲

  ```shell
  # reset三部曲命令
  # 第一部 soft
  git reset --soft HEAD~ # 回退HEAD指向的分支对应的文件内容
  git reset --soft [hash值] # 用hash值对应的内容重置HEAD内容
  git commit --amend # 就是利用上述命令
  # 只动HEAD，暂存区和工作目录不变
  # HEAD中的内容回退了，带着分支一起移动
  
  # 第二部 mixed
  git reset [--mixed] HEAD~ # 暂存区内容也被回退
  # HEAD动，带着分支一起移动，暂存区也会被修改
  
  git reset --mixed HEAD [文件名]
  git reset [文件名] # 上面命令的简写
  # 此命令会跳过对工作目录的修改，只动暂存区，撤销暂存区的操作
  
  #第三部 hard
  git reset --hard HEAD~ # 工作目录、暂存区、HEAD都改变了
  # 和checkout比较像
  
  ```

- hard 和 checkout 的区别

  ```shell
  git checkout [hash值]
  git reset --hard [hash值]
  1. checkout 只动HEAD
  --hard 动HEAD且带着分支一起走
  2. checkout对工作目录是安全的
  --hard会强制覆盖工作目录
  
  ```

- 深入理解

  （有点绕，可能有错）

  路径reset

  所有的路径reset都有省略第一步，第一步是重置HEAD内容，-HEAD本质是指向一个分支，分支的本质是一个提交对象，提交对象-指向一个树对象，树对象-指向多个git对象，一个git对象代表一个文件，HEAD可以代表一系列文件的状态，不可能因为一个文件重置HEAD

  git reset [--mixed] commithash filename 用commithash中的filename的内容重置暂存区

   

  checkout的深入理解

  git checkout branchname 和git reset --hard commithash很像

  共同点

  都需要重置HEAD 暂存区 工作目录

  区别

  checkout对工作目录是安全的，reset --hard 是强制覆盖

  checkout动HEAD时，不会带着分支走，而是切换分支

  reset --hard 是带着分支走

   

  checkout 路径

  git checkout commithash filename 重置暂存区 重置工作目录

  git checkout -- filename 重置工作目录

  - 这些有点绕，所以出了新的命令？switch 和 restore

## tag 标签

- 简介

  git可以给某个提交打上标签，以示重要，一般使用这个功能来发布结点（v1.0等）

- 命令操作

  ```shell
  # tag 标签命令
  git tag # 列出所有标签
  git tag -l "[标签号]" # 列出指定标签号之后的版本
  git tag [标签号] # 打标签
  git show [标签号] # 查看特定标签
  git tag -d [标签号] # 删除标签
  git tag [标签号] [hash值] # 给指定提交对象打tag
  
  git checkout [标签名] # 切换到标签上 - 头部分离，没有相应分支
  git checkout -b [分支名] # 和上面的命令一起-切换到标签并创建分支
  ```

- 标签类型

  + 轻量标签

    不会改变的分支，特定提交的引用

  + 附注标签

## 三个区

- 简介

  工作区 本地代码，自己敲代码 - 沙箱环境 - git不会帮你管理，自己玩

  暂存区 暂时放一下、一系列操作、到一定地步了，提交到版本库

  版本库 保存版本
  
  ![git版本库](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210111123134.png)

### 工作区

### 暂存区

### 版本库

## 团队协作

### 远程仓库

- 简介

  以 github 为例，只创建空仓库，本地仓库创建完了推过来就行

  获得 github 仓库对应 url

  - 没啥体会呀，要之后有经验了再回头看

- 命令操作

  ```shell
  # 远程仓库命令
  git remote add <shortname> <url> # 根据仓库的url添加一个新的远程git仓库，并定义仓库名shortname
  git remote -v # 显示远程仓库使用的git别名与其对应的url
  git remotr show <remote-name> # 查看某个远程仓库的更多信息
  git remote rename pb paul # 重命名
  git remote rm <remote-name> # 移除一个远程仓库
  
  git clone <url> # 将url对应的仓库克隆到本地
  git push <仓库名> [<分支名>] # 将分支对应的内容推送到指定的仓库中
  git config --list # 可以查看配置的仓库信息
  
  # 本地分支master、远程分支、远程跟踪分支taobao/master
  git fetch <仓库名> # 从远程分支中获取数据，到远程跟踪分支中
  git merge <远程跟踪分支> # 将远程跟踪分支合并到当前分支
  ```

  ![image-20210115125335966](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210115125337.png)

### 本地分支、远程分支、远程跟踪分支

- 简介

  推送完，就有远程跟踪分支了

  ![image-20210115125754579](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210115125755.png)

  远程跟踪分支 (remote)/(branch)

  只有在克隆时，本地分支 master 和远程跟踪分支 别名/master 有同步关系

  本地非主分支 devFornws 与远程跟踪分支 origin/devFornws 没有同步关系

- 命令操作

  ```shell
  # 本地分支master、远程分支、远程跟踪分支taobao/master
  git branch -u <远程跟踪分支> # 将当前分支与远程跟踪分支绑定，建立一一对应关系
  git branch -vv # 查看远程分支
  
  git checkout --track <远程跟踪分支> # 
  
  git pull # 建立对应关系后，可以直接拉取
  
  git push origin --delete serverfix # 删除远程分支
  git remote prune origin --dry-run # 列出仍在远程跟踪但是远程已被删除的无用分支
  git remote prune origin # 清除上面命令列出来的远程跟踪
  ```

- git 远程协议时会产生冲突

  进行相应修改

### 远程协作

- 简介

  ![image-20210115144747815](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210115144749.png)

### github 介绍

- pull request

- fork

- issues

- .gitignore 忽视文件

  ![image-20210115145031820](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/git/20210115145033.png)

  [网站上给出的忽视文件](https://github.com/github/gitignore)

