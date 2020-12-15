# SQL - 嵌套子查询

## 简介

子查询是嵌套在另一个查询中的 ***select-from-where*** 表达式

子查询嵌套在 ***where*** 子句中，通常用于对集合的成员资格、集合的比较以及集合的基数进行检查

## 集合成员资格

- 连接词 ***in***

- 连接词 ***not in***

- 查询示例

  ```mysql
  -- 查询在2009年秋季和2010年春季学期同时开课的所有课程
  -- 交集
  -- 使用 in 连接词
  -- 子查询-2010年春季开课的所有课程
  select course_id
  from section
  where semester = 'Spring' and year = 2010;
  
  -- 从子查询形成的课程集合中找出那些在2009年秋季开课的课程
  select distinct course_id
  from section
  where semester = 'Fall' and year = 2009 and
  course_id in (
    select course_id
    from section
    where semester = 'Spring' and year = 2010
  );
  
  -- 查询所有在2009年秋季学期开课，但不在2010年春季学期开课的课程
  select distinct course_id
  from section
  where semester = 'Fall' and year = 2009 and
  course_id not in (
    select course_id
    from section
    where semester = 'Spring' and year = 2010
  );
  
  -- in 和 not in 用于枚举集合
  select distinct name
  from instructor
  where name not in ('Mozart', 'Einstein');
  
  -- 测试任意关系的成员资格
  select count(distinct ID)
  from takes
  where (course_id, sec_id, semester, year) in (
  	select course_id, sec_id, semester, year
    from teaches
    where teaches.ID = 10101
  );
  ```

## 集合的比较

### some

至少比某一个要大 ***> some***

- 查询示例

  ```mysql
  # 找出所有教师的姓名，他们的工资至少比Biology系某一个教师的工资要高
  select distinct T.name
  from instructor as T, instructor as S
  where T.salary > S.salary and S.dept_name = 'Biology';
  
  -- 至少比某一个要大 > some
  select name
  from instructor
  where salary > some(
  	select salary
    from instructor
    where dept_name = 'Biology'
  );
  ```

- 组合

  ***< some***

  ***<= some***

  ***>= some***

  ***= some***  等价于 ***in***

  ***!= some*** 并不等价于 ***not in***

### all

- 查询示例

  ```mysql
  select name
  from instructor
  where salary > all(
  	select salary
    from instructor
    where dept_name = 'Biology'
  );
  
  # 找出平均工资最高的系
  select dept_name
  from instructor
  group by dept_name
  having avg(salary) >= all(
  	select avg(salary)
    from instructor
    group by dept_name
  );
  ```

- 组合

  ***< all***

  ***<= all***

  ***>= all***

  ***= all***  并不等价于 ***in***

  ***!= all*** 等价于 ***not in***

### exists

***exists*** 结构在作为参数的子查询非空时返回 ***true*** 值

进行 **空关系测试**

- 查询示例

  ```mysql
  select course_id
  from section as S
  where semester = 'Fall' and year = 2009 and
  exists (
  	select *
    from section as T
    where semester = 'Spring' and year = 2010 and S.course_id = T.course_id
  );
  -- 来自外存查询的一个相关名称（S）可以用在 where 子句的子查询中
  -- 使用了来自外层查询相关名称的子查询被称作相关子查询
  ```

- 相关子查询

  使用了来自外层查询相关名称的子查询被称作 **相关子查询**

- 作用域规则

  在包含了子查询的查询中，在相关名称上可以应用 **作用域规则**

  即，在一个子查询中只能使用此子查询本身定义的，或者在包含此子查询的任何查询中定义的相关名称

  若一个相关名称既在子查询中定义，又在包含该子查询的查询中定义，则子查询中的定义有效

  ——类似于编程语言中通用的变量作用域规则

### not exists

测试子查询结果集中是否不存在元组

关系 A 包含关系 B：***not exists*** （***B except A***）

==不是很懂==

- 查询示例

  ```mysql
  -- 查询选修了Biology系开设的所有课程的学生
  select S.ID, S.name
  from student as S
  where not exists (
    -- 找出Biology系开设的所有课程集合
  	(select course_id
    from course
     where dept_name = 'Biology')
    except
    -- 找出S.ID选修的所有课程
    (select T.course_id
    from takes as T
    where S.ID = T.ID)
  );
  ```

### exists 与 in

in 引导的子句只能返回一个字段

exists 引导的子句是允许返回多个字段的

exists：先执行外表，然后与内表去匹配。适合于外表小，内表大。

in：先执行内表，然后与外表去匹配。适合于外表大，内表小。

### unique

测试在一个子查询的结果中是否存在重复元组

如果作为参数的子查询结果中没有重复元组，***unique*** 结构将返回 ***true*** 值

***unique*** 结构返回 ***false*** 值的情况：当且仅当在关系中存在着两个元组 $t_1$ 和 $t_2$，且 $t_1 = t_2$

由于在 $t_1$ 或 $t_2$ 的某个域为空时，判断 $t_1 = t_2$ 为假，此时 ***unique*** 测试就有可能为真

- 查询示例

  ```mysql
  # 查询所有在 2009 年最多开设一次的课程
  select T.course_id
  from course as T
  where unique(
  	select R.course_id
    from section as R
    where T.course_id = R.course_id and R.year = 2009
  );
  -- 等价于
  select T.course_id
  from course as T
  where 1 >= (
  	select count(R.course_id)
    from section as R
    where T.course_id = R.course_id and R.year = 2009
  );
  ```

### not unique

```mysql
# 查询所有在 2009 年最少开设两次的课程
select T.course_id
from course as T
where not unique (
	select R.course_id
  from section as R
  where T.course_id = R.course_id and R.year = 2009
);
```

## from子句中的子查询



