# SQL - 附加的基本运算

## 更名运算

- 语法

  ```mysql
  old-name as new-name
  # 或
  old-name new-name
  ```

  

- 在 **select** 子句中

  给算术表达式命名

  改变结果中的属性名字

  ```mysql
  select name as i_name, course_id
  from instructor, teaches
  where instructor.ID = teaches.ID;
  ```

  

- 在 **from** 子句中

  把一个长的关系名替换成短的

  ```mysql
  select T.name, S.course_id
  from instructor as T, teaches as S
  where T.ID = S.ID;
  ```

  需要比较同一个关系中的元组，需要把一个关系跟它自身进行笛卡尔积运算

  ```mysql
  select distinct T.name
  from instructor as T, instructor as S
  where T.salary > S.salary and S.dept_name = 'Biology';
  /*
  相关名称、表别名、相关变量、元组变量
  T 和 S 那样被用来重命名关系的标识符
  */
  ```

## 字符串运算

- 字符串

  使用一对单引号来标示字符串

  如果单引号是字符串的组成部分，那就用两个单引号字符来表示

- 大小写敏感问题

  SQL标准中，大小写敏感

  Mysql 和 SQL Server 中，不区分大小写

- 字符串函数

  | 字符串函数 |         作用          |
  | :--------: | :-------------------: |
  |    $||$    |         串联          |
  |            |       提取子串        |
  |            |    计算字符串长度     |
  |  $upper(s)$  |      大小写转换       |
  |  $lower(s)$  | 将字符串 s 转换为小写 |
  |  $trim(s)$  | 去掉字符串后面的空格  |
  | $link$ | 实现模式匹配 |
  | $\%$ | 匹配任意子串 |
  | $\_$ | 匹配任意一个字符 |

- 模式匹配例子

  | 字符     | 含义                          |
  | :------: | :---------------------------: |
  | $Intro\%$ | 匹配任何以“Intro”打头的字符串 |
  | $\%Comp\%$ | 匹配任何包含“Comp”子串的字符串 |
  | $\_\_\_$ | 匹配只含三个字符的字符串 |
  | $\_\_\_\%$ | 匹配至少含三个字符的字符串 |

- 查询的例子

  ```mysql
  # 找出所在建筑名称中包含子串‘Watson’的所有系名
  select dept_name
  from department
  where building link '%Watson%';
  ```

- SQL 定义转义字符

  ```mysql
  # 匹配所有以“ab%cd”开头的字符串
  like 'ab\%cd%' escape '\'
  # 匹配所有以“ab\cd”开头的字符串
  like 'ab\\cd%' escape '\'
  ```

  SQL 允许定义转义字符

