# SQL数据定义

## 定义内容

- 定义一组关系
- 定义每个关系的信息
  + 每个关系的模式
  + 每个属性的取值类型
  + 完整性约束
  + 每个关系维护的索引集合
  + 每个关系的安全性和权限信息
  + 每个关系在磁盘上的物理存储结构

## 基本类型

|        类型        |              参数              |                含义                |
| :----------------: | :----------------------------: | :--------------------------------: |
|     $char(n)$      |            指定长度            | 固定长度的字符串（少的会增加空格） |
|    $varchar(n)$    |            最大长度            |          可变长度的字符串          |
|       $int$        |                                |              整数类型              |
|     $smallint$     |                                |             小整数类型             |
|   $numeric(p,d)$   | p 位数字，d 位数字在小数点右边 |               定点数               |
|       $real$       |                                |               浮点数               |
| $double precision$ |                                |            双精度浮点数            |
|     $float(n)$     |            精度为 n            |               浮点数               |

多用 varchar 而不是 char

## 基本模式定义

### create table  命令

- 命令格式

  ```mysql
  create table r (
  	A1 D1,
    A2 D2,
    <完整性约束1>,
    <完整性约束2>
  );
  /*
  r 关系名
  Ai 属性名
  Di 属性Ai的域，指定了属性Ai的类型以及可选的约束，用于限制所允许的Ai取值的集合
  */
  ```

- 示例

  ```mysql
  create table department(
  	dept_name varchar(20),
    building varchar(15),
    budget numeric(12, 2),
    primary key (dept_name)
  );
  ```

- 部分完整性约束

  + 主码

    ```mysql
    primary key (Aj1, Aj2)
    ```
  
  	属性 Aj1, Aj2 构成关系的主码
  
  	主码属性必须非空且唯一
  
  + 外码
  
    ```mysql
    foreign key (Ak1, Ak2) references s
    ```
  
    关系中任意元组在属性 (Ak1, Ak2) 上的取值必须对应于关系 s 中某元组在主码属性上的取值
  
  + 非空
  
    ```mysql
    not null
    ```
  
    在该属性上不允许空值

### drop table 命令

- 命令格式

  ```mysql
  drop table r;
  ```
  
  从数据库中删除关于 r 关系的所有信息

### alter table 命令

- 命令格式

  ```mysql
  alter table r add A D;
  /*
  r 现有关系的名字
  A 待添加属性的名字
  D 带添加属性的域
  */
  ```

  为已有关系 r 增加属性，关系 r 中所有的元组在新属性上的取值将被设为 null

  ```mysql
  alter table r drop A;
  /*
  r 现有关系的名字
  A 关系 r 的一个属性的名字
  */
  ```

  从关系中去掉属性 A

### delete 命令

- 命令格式

  ```mysql
  delete from r;
  ```

  从 r 关系中删除所有元组