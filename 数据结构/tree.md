# 树

## 二叉树（链式存储）

### 二叉树特点

n 个结点的二叉链表中，含有 n+1 个空链域

### 创建二叉树

### 遍历二叉树

#### 先序遍历 DLR

#### 中序遍历 LDR

#### 后序遍历 LRD

## 线索二叉树

### 基本概念

利用空链域存放指向其直接前驱或后继的指针

tag 0-孩子 1-前驱或后继

## 二叉排序树

### 删除结点 z

- 步骤

  1. z 是叶结点

     直接删除

  2. z 只有左子树或右子树

     让 z 的子树成为 z 父结点的子树

  3. z 有左右两棵子树

     令 z 的直接后继替代 z，然后从二叉排序树中删除这个直接后继
     
     （或直接前驱）

- 示例

  ![image-20210104085800294](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104085839.png)

### 插入结点

插入后面就行

### 查找效率

![image-20210104110112277](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104110113.png)

![image-20210104110203636](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104110205.png)

成功的情况：所有结点

失败的情况：所有空结点

## 平衡二叉树

### 插入结点

- 每次调整的对象都是**最小不平衡子树 **，即以插入路径上离插入结点最近的平衡因子的绝对值大于 1 的结点（结点A）作为根的子树

- 调整规律

- LL 右单旋转

  A 的左孩子的左子树上插入新结点

  ![image-20210104114652603](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104114654.png)

  （红笔处的标记应该是图(b)的）

  ![image-20210104114047170](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104114048.png)

- RR 左单旋转

  A 的右孩子的右子树上插入新结点

  ![image-20210104114607924](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104114609.png)

  （红笔处的标记应该是图(b)的）

  ![image-20210104113841438](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104113842.png)

- LR 先左后右双旋转

  A的左孩子的右子树上插入新结点

  ![image-20210104113030229](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104113031.png)

  ![image-20210104113910735](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104113912.png)

- RL 先右后左双旋转

  A的右孩子的左子树上插入新结点

  ![image-20210104112758591](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104112759.png)

  ![image-20210104113956875](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104113959.png)

- 插入示例

  ![image-20210104114320930](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104114322.png)

## 哈夫曼树

### 创建哈夫曼树

## 二叉树、树与森林

### 转换

树转换为二叉树：第一个子结点作为左孩子，其他子结点砍掉，作为左边子结点的右孩子

二叉树转换为森林：右孩子砍掉往上一层接，左孩子是子结点

### 遍历

- 树的遍历

  先根遍历 - 先序遍历

  后根遍历 - 中序遍历

- 森林的遍历

  先序遍历 - 先序遍历

  中序遍历 - 中序遍历

## 并查集

## B- 数

![image-20210104115144484](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104115146.png)

![image-20210104115322367](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/datastructure/all/20210104115323.png)