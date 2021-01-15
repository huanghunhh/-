# git 命令

## 命令列举

```shell
# git 初始化命令
git init # git 初始化

# 查看版本
git --version


# 配置别名命令
git config --global alias.brall "log --oneline --decorate --graph --all"
git config --global alias.st status
git config --global alias.cot checkout


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


# 日志相关命令
git log # 查看详细的日志信息
git log --pretty=oneline # 一行简略显示日志信息
git log --oneline # 一行简略显示日志信息（hash值只显示前七位）

git log --oneline --decorate --graph --all # 查看项目分叉历史
git brall # 上面命令的别名

git reflog # 查找操作日志，能看到被删除的内容


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

# 分支合并命令
git merge [分支名] # 将分支合并到当前分支上
git branch -d [分支名] # 删除合并后的分支
git branch --merged # 查看合并到当前分支的分支 ，一旦出现在这个列表中，就应该删除
git branch --no-merged # 查看没有合并到当前分支的分支列表，一旦出现在这个列表中，就应该观察一下是否需要合并




# 栈操作命令
git stash list # 查看栈中的存储
git stash # 将未完成的修改保存到一个栈上，之后可以在任何时候重新应用这些改动-一般不要在栈中保存太多
git stash apply # 应用栈顶元素
git stash drop [栈元素存储名] # 删除在栈中的指定存储
# 上面两条命令相当于下面一条
git stash pop # 应用栈顶元素，并立即从栈中删除


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
git reset [--mixed] [hash值] # 用hash值对应的内容重置HEAD内容，并重置暂存区

git reset --mixed HEAD [文件名]
git reset [文件名] # 上面命令的简写
# 此命令会跳过对工作目录的修改，只动暂存区，撤销暂存区的操作

#第三部 hard
git reset --hard HEAD~ # 工作目录、暂存区、HEAD都改变了
# 和checkout比较像
git reset --hard [hash值] # 用hash值对应的内容重置HEAD内容 重置暂存区 重置工作目录



# tag 标签命令
git tag # 列出所有标签
git tag -l "[标签号]" # 列出指定标签号之后的版本
git tag [标签号] # 打标签
git show [标签号] # 查看特定标签
git tag -d [标签号] # 删除标签
git tag [标签号] [hash值] # 给指定提交对象打tag

git checkout [标签名] # 切换到标签上 - 头部分离，没有相应分支
git checkout -b [分支名] # 和上面的命令一起-切换到标签并创建分支


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



# 本地分支master、远程分支、远程跟踪分支taobao/master
git branch -u <远程跟踪分支> # 将当前分支与远程跟踪分支绑定，建立一一对应关系
git branch -vv # 查看远程分支

git checkout --track <远程跟踪分支> # 

git pull # 建立对应关系后，可以直接拉取

git push origin --delete serverfix # 删除远程分支
git remote prune origin --dry-run # 列出仍在远程跟踪但是远程已被删除的无用分支
git remote prune origin # 清除上面命令列出来的远程跟踪

# 分支命令
git branch # 查看所有本地分支
git branch -a # 查看所有本地分支和远程分支
git branch -r # 查看所有远程分支


# 底层命令
# hash-object命令
echo "test" | git hash-object -w --stdin
# -w 指示hash-object命令存储数据对象；若不指定此选项。则该命令仅返回对应的键值
# --stdin 指示该命令从标准输入读取内容；若不指定此选项，则需要在命令尾部给出待存储文件的路径
git hash-object -w [文件路径] # 存文件，生成一个key-value键值对，hash值对应压缩后的文件，并存储到git/object版本库中
git hash-object [文件路径] # 返回对应文件的键值（输出一个长度为40字符的校验和，这是一个 SHA-1 哈希值）


# 查看命令
git cat-file -p [hash值] # 查看hash值对应的文件的内容-根据键值拉取数据 -p 指示该命令自动判断内容的类型，并为我们显示格式友好的内容，返回对应文件的内容
git cat-file -t [hash值] # 查看hash值对应的文件的类型


# 生成树对象 命令
git update-index --add --cacheinfo [文件模式] [hash值] [文件名称]
# 向暂存区中存储内容，让git对象对应文件名
# 文件模式表明文件的类型 
# 100644-普通文件 100755-可执行文件 120000-符号链接
# --add 为文件的首个版本创建一个暂存区
# --cacheinfo 为位于git数据库中的文件在暂存区创建首个版本
git write-tree # 生成树对象

# 暂存区命令
git ls-files -s # 查看暂存区内容
find .git/objects/ -type f # 查看git数据库中的内容
git read-tree --prefix=bak [hash值] # 将树对象读入暂存区


# 提交对象命令
git commit-tree [hash值] # 根据树对象的hash值创建一个提交对象
git commit-tree [hash值] -p [hash值] # 不是第一次对暂存区做快照，此时有父对象，根据树对象的hash值创建提交对象的同时，指定该提交的父提交对象
git cat-file -p [hash值] # 查看提交对象


# linux 命令
clear # 清屏
echo [text] # 向控制台输出信息
echo [text] > [.txt] # 向文件中输出信息
ll [目录] # 展示当前目录下的子文件和子目录
find [目录] # 展示当前目录下的子孙文件和子孙目录
find [目录] -type f # 展示当前目录下的子孙文件-查看git如何存储数据
rm [.txt] # 删除文件
mv [old.txt] [new.txt] # 文件重命名
cat [.txt] # 查看文件内容
vim [.txt] # 编辑文件（通过vim-又是一个大课）

# linux 中的复制粘贴
右键，选择命令
选中（相当于复制），然后右键命令-粘贴

```

## 命令组合拳

```shell
# 对一个文件进行简单的版本控制
(echo "test" | git hash-object -w --stdin)
echo "test" > test.txt # 向文件中输入内容
git hash-object -w test.txt # 存储文件并返回对应的hash值
find .git/object -type f # 查看目录下的文件
git cat-file -p [hash值] # 查看hash值对应的文件内容
git cat-file -t [hash值] # 查看hash值对应的文件类型
```

