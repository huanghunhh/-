# SQL 聚集函数

## 简介

聚集函数是以值的一个集合（集或多重集）为输入，返回单个值的函数

## avg 平均值

- 查询示例

  ```mysql
  -- 保留重复元组计算平均值
  select avg(salary) as avg_salary
  from instructor
  where dept_name = 'Comp. Sci. ';
  ```


## min 最小值

## max 最大值

## sum 总和

## count 计数

- 查询示例

  ```mysql
  -- 删除重复元组计数
  select count(distinct ID)
  from teaches
  where semester = 'Spring' and year = 2010;
  ```

## 对于空值和布尔值的聚集查询

SQL标准并不认为总和本身为 ***null***，而是认为 ***sum*** 运算符应该忽略输入中的 ***null*** 值

- 聚集函数处理空值的原则

  + 除 ***count(\*)*** 外，所有的聚集函数都忽略食人鱼集合中的空值
  + 空集的 ***count*** 运算值为0
  + 其他所有聚集运算在输入为空集的情况下返回一个空值

- 布尔数据类型

  1999年引入了布尔数据类型

  可以取 ***true false unknown*** 三个值

  有两个聚集函数 ***some every*** ，可以用来处理布尔值的集合

  

