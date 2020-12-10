# SQL 查询

## 单关系查询

- 示例

  ```mysql
  # 找出所有教师的名字
  select name
  from instructor;
  -- 结果是由属性名为 name 的单个属性构成的关系 
  /*
  SQL 允许在关系以及 SQL 表达式结果中出现重复
  不删除重复 all
  强行删除重复 distinct
  */
  select distinct name
  from instructor;
  ```

- **where** 子句

  选出那些在 **from** 子句的结果关系中满足特定谓词的元组

  ```mysql
  select name
  from instructor
  where salary > 70000 and dept_name = 'Comp. Sci.';
  /*
  where 子句中可以使用逻辑连接词 and、or 和 not
  也包含比较运算符 < <= > >= = !=
  */
  ```

## 多关系查询

从多个关系中获取信息

- 示例

  ```mysql
  select name, instructor, dept_name, building
  from instructor, department
  where instructor.dept_name = department.dept_name
  ```

## 命令剖析

- **select** 子句

  用于列出查询结果中所需的属性

- **from** 子句

  查询求值中需要访问的关系列表

  定义了一个在该子句中所列出关系上的笛卡尔积，最好通过下面的迭代过程来理解，此过程可为 **from** 子句的结果关系产生元组

  ```javascript
  for each 元组t1 in 关系r1
  	for each 元组t2 in 关系2
  		...
      for each 元组tm in 关系rm
  		把t1, t2, ..., tm 连接成单个元组 t
      把 t 加入结果关系中
  ```

  笛卡尔积：两个表的笛卡尔积的关系模式中，相同的属性名前加上关系名作为前缀，表示该属性来自哪个关系；对于那些只出现在单个模式中的属性，通常去掉关系名前缀

- **where** 子句

  作用在 **from** 子句中关系的属性上的谓词

- 示例

  ```mysql
  select A1, A2
  from r1, r2
  where P;
  /*
  Ai 一个属性
  ri 一个关系
  P 一个谓词
  运算顺序 from where select
  */
  ```

- 结
  1. 为 **from** 子句中列出的关系产生笛卡尔积
  2. 在步骤1的结果上应用 **where** 子句中指定的谓词
  3. 对于步骤2结果中的每个元组，输出 **select** 子句中指定的属性（或表达式的结果）

