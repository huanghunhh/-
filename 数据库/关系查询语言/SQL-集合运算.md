# SQL - 集合运算

## 简介

| SQL 的集合运算 | 数学集合论 |
| -------------- | ---------- |
| $union$        | $\cup$     |
| $intersect$    | $\cap$     |
| $except$       | -          |

## 并运算

```mysql
(select course_id
from section
where semester = 'Fall' and year = 2009)
union
(select course_id
from section
where semester = 'Spring' and year = 2010);
/*
union 运算自动去除重复
union all 保留所有重复
*/
(select course_id
from section
where semester = 'Fall' and year = 2009)
union all
(select course_id
from section
where semester = 'Spring' and year = 2010);
```

## 交运算

```sql
(select course_id
from section
where semester = 'Fall' and year = 2009)
intersect
(select course_id
from section
where semester = 'Spring' and year = 2010);
/*
intersect 运算自动去除重复
intersect all 保留所有重复
*/
(select course_id
from section
where semester = 'Fall' and year = 2009)
intersect all
(select course_id
from section
where semester = 'Spring' and year = 2010);
```

MySQL 没有提供交运算

## 差运算

```sql
(select course_id
from section
where semester = 'Fall' and year = 2009)
except
(select course_id
from section
where semester = 'Spring' and year = 2010);
/*
except 运算自动去除重复
except all 保留所有重复
*/
(select course_id
from section
where semester = 'Fall' and year = 2009)
except all
(select course_id
from section
where semester = 'Spring' and year = 2010);
```

MySQL 没有提供差运算

