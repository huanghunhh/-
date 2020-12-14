# SQL 的连接

## 自然连接

- 过程

  自然连接运算作用于两个关系，并产生一个关系作为结果

  + 连接特征

    将第一个关系的每个元组与第二个关系的所有元组都进行连接，只考虑那些在两个关系模式中都出现的属性上取值相同的元组对

  + 结果

    重复的属性只列出一次，

    列出属性的顺序为 

    1. 两个关系模式中的共同属性
    2. 只出现在第一个关系模式中的属性
    3. 只出现在第二个关系模式中的属性

- 与 **where** 中使用 **and** 的互通性

  ```mysql
  select name, course_id
  from instructor, teaches
  where instructor.ID = teaches.ID;
  -- 两个查询产生相同的结果
  select name, course_id
  from instructor natural join teaches;
  ```

- **from** 后的多表问题

  ```mysql
  from E1, E2, ..., En
  # 表 E1 E2 ... En 的笛卡尔积
  from E1 natural join E2 natural join ... En
  # 表 E1 E2 ... En 的自然连接
  from E1 natural join E2, E3
  # 表 E1 和 E2 的自然连接，再计算该结果和 E3 的笛卡尔积
  ```

- **join ... using** 语法

  ```mysql
  select name, title
  from (instructor natural join teaches) join course using (course_id)
  ```

  避免不必要的相等属性带来的危险，使用 **join ... using** 来指定需要哪些列相等

  ```mysql
  r1 join r2 using (A1, A2)
  /*
  需要给定一个属性名列表，其两个输入中都必须具有指定名称的属性
  含义
  当 t1.A1 = t2.A1 且 t1.A2 = t2.A2 时，
  来自 r1 的元组 t1 和来自 r2 的元组 t2 就能匹配，
  即使 r1 和 r2 都具有名为 A3 的属性，也不需要 t1.A3 = t2.A3 成立
  */
  ```

  