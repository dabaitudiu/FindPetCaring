# FindPetCaring

## Next Deadline: March 10

### Usage:
```shell
1. generate data first:
$psql>\i pet_infos_50_mix.sql

$ cd app
$ node bin/www
search localhost:3000/pet
```

### Route description:
- /pet_database: Full information of Service provider
- /pet: Search Engine with specific constraints

- Optimize table UI
- Construction of Whole webpage's front end.
- Sub class of dogs,cats,etc.
- Owner name add Hyperlink in the result list.
- Price range: now we restrict the users must input two bound. We want to allow the user: (1) leave both blank (2) leave one blank.
- Date: we want to make a calendar.
- Every time after searching: "There are x results found."

1. Find all owners who are at least specialized in keeping '{}'. {} - pet name

2. Show top K results

3. Let customers define the variable 'resources' by choosing and combining variables from:
   [num(house_type), num(pet)_types, length(available_time), expense, etc.],
   Find owner that has best 'resources'

4. Define 'Pet Clubs':
    a. If the pet owners have same pet_type offerings.
    b. If they are in the same area
   Show all 'Pet Clubs'
   
5. 每个owner都应该有一个'Ratings List', rank by avg(Ratings), list all pet owners 
   that have ratings than avg(ratings)

6. 加admin page， 在UI上就实现增减操作

7. 在返回的Table上 每个column实现click就排序的操作

8. Debug Info 记得关闭

9. 自动弹框加入会员

10. 做成响应式，只包括手机和电脑

11. 标签做成可叉示例

12. 参考deliveroo： Pet Owners near NUS, 然后做成图片选项卡

13. Deliveroo Food种类做的不好，因为种类太多，看着费劲还记不住，两个思路：1. 大类，再细分小类 2. 添加一个即使搜索框

14. 主页：下载我们的app！
