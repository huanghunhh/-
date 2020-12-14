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

  **笛卡尔积**：两个表的笛卡尔积的关系模式中，相同的属性名前加上关系名作为前缀，表示该属性来自哪个关系；对于那些只出现在单个模式中的属性，通常去掉关系名前缀

- **where** 子句

  作用在 **from** 子句中关系的属性上的谓词

  选出那些在 **from** 子句的结果关系中满足特定谓词的元组

  ```mysql
  select name
  from instructor
  where salary > 70000 and dept_name = 'Comp. Sci.';
  /*
  where 子句中可以使用逻辑连接词 and、or 和 not
  也包含比较运算符 < <= > >= = !=
  */
  -- 比较运算符 between ... and ...
  select name
  from instructor
  where salary between 90000 and 100000
  ```

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

- 查询步骤
  1. 为 **from** 子句中列出的关系产生笛卡尔积
  2. 在步骤1的结果上应用 **where** 子句中指定的谓词
  3. 对于步骤2结果中的每个元组，输出 **select** 子句中指定的属性（或表达式的结果）

## 其他字段

### \* 的含义

  星号 "*" 可以用在 **select** 子句中表示“所有的属性”

  ```mysql
  select *
  from instructor;
  ```

### **order by** 子句

  实现对关系中元组显示次序的控制

  ```mysql
  select *
  from instructor
  order by salary desc, name asc;
  ```

  **order by** 子句默认使用升序

  说明排序顺序：**desc** 降序；**asc** 升序

### **null** 与 **unknown**

  + 判断是否为 **null**

    **is null**
  
    **is not null**
  
  + **unknown** 的定义
  
    $1<null$ 和 $not(1<null)$ 均没有意义

    SQL 将涉及空值的任何比较运算的结果视为 **unknown**

    故现在有三个逻辑词：**true**、 **unknown**、 **false**
  
  + 判断是否为 **unknown**
  
    **is unknown**
  
    **is not unknown**
  
  + 涉及 **unknown** 的运算
    |          运算          |     结果      |
    | :--------------------: | :-----------: |
    | *true **and** unknown* | ***unknown*** |
    | *false **and** unknown* | ***false*** |
    |*unknown **and** unknown*| ***unknown*** |
    | *true **or** unknown* | ***true*** |
    | *false **or** unknown* | ***unknown*** |
    |*unknown **or** unknown*| ***unknown*** |
    |***not*** *unknown*| ***unknown*** |
  
    运算总结，按**true**、 **unknown**、 **false**顺序排，and连接词，结果取靠后的，or连接词，结果取靠前的
    
    在谓词运算中，***null = null*** 的结果是 ***unknown***
    

  在 ***select*** 查询语句中，认为 如果元组在所有属性上的取值相等，那么就当作相同元组，即使某些值为空
  + 查询示例
  
    ```mysql
    -- 找出 instructor 关系中 salary 为空值的所有教师
    select name
    from instructor
    where salary is null;
    ```

### group by

- 分组聚集

  希望将聚集函数作用到一组元组集上

  在 **group by** 子句中，所有属性上取值相同的元组将被分在一个组中

- 查询示例

  ```mysql
  # 查找每个系的平均工资
  select dept_name, avg(salary) as avg_salary
  from instructor
  group by dept_name;
  # 查找每个系在2010年春季学期各教师讲授的课程数
  select dept_name, count(distinct ID) as instr_count
  from instructor natural join teaches
  where semester = 'Spring' and year = 2010
  group by dept_name;
  ```

- 注意

  出现在 ***select*** 语句中但没有被聚集的属性只能是出现在 ***group by*** 子句中的那些属性

  任何没有出现在 ***group by*** 子句中的属性如果出现在 ***select*** 子句中的话，它只能出现在聚集函数内部，否则这样的查询就是错误的

  ```mysql
  -- 错误示例
  -- ID 没有出现在 group by 子句中，但出现在了 select 子句中，且没有被聚集
  -- 在一个特定分组中的每位教师都有一个不同的 ID，但每个分组只输出一个元组，则无法确定选择哪个 ID 值作为输出——SQL不允许出现这样的情况
  select dept_name, ID, avg(salary)
  from instructor
  group by dept_name;
  ```

### having 子句

筛选条件不针对单个元组，而是针对 ***group by*** 子句构成的分组

***having*** 子句中的谓词在形成分组后才起作用

- 查询示例

  ```mysql
  select dept_name, avg(salary) as avg_salary
  from instructor
  group by dept_name
  having avg(salary) > 42000;
  ```

- 注意

  与 ***select*** 子句的情况类似，任何出现在 ***having*** 子句中，但没有被聚集的属性必须出现在 ***group by*** 子句中，否则查询就被当成是错误的。

### 查询步骤说明

- 查询步骤

  1. 最先根据 ***from*** 子句来计算出一个关系
  2. 若出现 ***where*** 子句，***where*** 子句中的谓词将应用到 ***from*** 子句的结果关系上
  3. 若出现 ***group by*** 子句，满足 ***where*** 谓词的元组通过 ***group by*** 子句形成分组。若没有 ***group by*** 子句，满足 ***where*** 谓词的整个元组集被当作一个分组
  4. 若出现 ***having*** 子句，它将应用到每个分组上，不满足 ***having*** 子句谓词的分组将被抛弃
  5. ***select*** 子句利用剩下的分组产生出查询结果中的元组，即在每个分组上应用聚集函数来得到单个结果元组

- 查询示例

  ```mysql
  # 对于在2009年讲授的每个课程段，若该课程段有至少2名学生选课，查询出选修该课程段的所有学生的总学分的平均值
  select course_id, semester, year, sec_id, avg(tot_cred)
  from takes natural join student
  where year = 2009
  group by course_id, semester, year, sec_id
  having count(ID) >= 2;
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




