#O2O系统接口文档
[toc]


## 版本

|版本|更新内容|制作人|发布时间|
|---|---|---|---|
|V1.0|增加5.6兑换券列表查询接口| leichang | 2016-01-25|
|V1.0|修改6.1可以查询全部商家列表，7.1已消费兑换券列表查询接口，6.3添加商品接口| linwen | 2016-01-26|
|V1.0|7.1已消费兑换券列表查询接口修改start_date,end_date,goods_id| linwen | 2016-02-02|
|V2.0|增加8.1，8.2,8.3,8.4,8.5,8.6接口| leichang | 2016-11-04|


## 1.系统管理


### 1.1	商品服务项目列表查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerServices

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**
无

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/sellerServices


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": [
    {
      "id": 1,
      "name": "本地服务"
    },
    ...
  ]
}
```
**返回字段说明**
			   
| 返回值字段  |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| id|   Integer  | 主键ID  | 
| name| string |    名称   | 


返回码说明

>1 操作成功   
>22006 参数异常

### 1.2 查询服务项目下所有品类
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerServices/{seller_service_id}/sellerCategorys

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| status| true |  Integer| 1-在用 |

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/sellerServices/1/sellerCategorys?status=1
**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": [
    {
      "id": 1,
      "name": "家政",
      "seller_service_id": 1,
      "status": 1,
      "created_at": "2015-11-19 20:24:09",
      "created_by": 1
    },
    ...
  ]
} 
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| id|   Integer  |  服务项目id  | 
| name| string |   名称   | 
| seller_service_id| Integer|   所属服务项目id    | 
| status| Integer|  状态 1-在用 2-失效     | 
| created_at|   string  | 创建时间 | 
| created_by|   Long  |创建人  |

返回码说明

>1 操作成功   
>22006 参数异常



### 1.3	品类列表查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| name|false |  string| 名称 |

**请求实例**
>1.  http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys?name=外卖


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": [
    {
      "id": 1,
      "name": "外卖",
      "seller_service_id": 1,
      "status": 1,
      "created_at": "2015-11-19 20:24:09",
      "created_by": 1
    },
    ...
  ]
}  
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| id|   Integer  |   品类id | 
| name| string |  名称    | 
| seller_service_id| Integer|   所属服务项目id    | 
| status| Integer|  状态 1-在用 2-失效  | 
| created_at|   string  | 创建时间 | 
| created_by|   Long  |创建人  |
返回码说明

>1 操作成功   
>22006 参数异常

### 1.4	品类新增
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| seller_service_id| true|  Integer| 所属服务项目id |
| name| true|  string|  名称|
**请求实例**
>1. curl -X POST -H "Content-Type: application/x-www-form-urlencoded"  -d "name=家政" -d "seller_service_id=1" -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys


**返回结果**
``` JSON
{code:1,msg:"....","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 操作成功   
>22006 参数异常

### 1.5	品类修改
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys

**支持格式**
>json

**HTTP请求方式**
>PUT

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| id| true|  Integer|品类id  |
| seller_service_id| true|  Integer| 所属服务项目id |
| name| true|  string| 名称 |

**请求实例**
>1. curl -X PUT -H "Content-Type: application/x-www-form-urlencoded"  -d "id=1" -d "name=家政" -d "seller_service_id=1" -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys


**返回结果**
``` JSON
{code:1,msg:"....","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 操作成功   
>22006 参数异常

### 1.6	品类删除
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys/{seller_category_id}/status

**支持格式**
>json

**HTTP请求方式**
>PUT

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| status|true|  Integer| 2 （2-删除） |

**请求实例**
>1.  http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys/1/status
>2. curl -X PUT -H "Content-Type: application/x-www-form-urlencoded"  -d "status=2" -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/sellerCategorys/1/status


**返回结果**
``` JSON
{code:1,msg:"....","data":null}
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 操作成功   
>22006 参数异常

## 2.商家管理

### 2.1 商家列表查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellers

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| name| false|  string| 商家名称 |
| province_id| false|  Integer| 省份ID |
| city_id| false|  Integer| 城市ID |
| district_id| false|  Integer| 区县ID |
| status| false|  Integer| 状态 1-在用 2-作废 |
| page| false|  Integer| 页数 默认 1|
| rows| false|  Integer| 每页显示条数 默认 10 传-1 不分页|

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/sellers?name=果真生活&province_id=13&city_id=116&district_id=1041&status=1&page=1&rows=10


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "total": 1,
    "rows": [
      {
        "id": 1,
        "name": "福建数字生活1",
        "category_id": 1,
        "category_name": "生活服务",
        "service_type": 1,
        "contact_name": "林总",
        "contact_mobile": "13888888888",
        "alternate_phone": null,
        "province_id": 13,
        "province_name": "福建省",
        "city_id": 116,
        "city_name": "福州",
        "district_id": 1041,
        "district_name": "鼓楼区",
        "address": "软件园B区23栋401",
        "operation_time": "09:00-22:00",
        "status": 1,
        "business_license_pic": "http://o2otest.gzshapp.net/image/20151119194002.jpg",
        "created_at": "2015-11-16 20:16:40",
        "created_by": 1
      },
      ...
    ]
  }
}
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| id|   Integer|    商家 id | 
| name| string |   商家名称    | 
| category_id| Integer |  商家品类ID  | 
| category_name| string |  商家品类名称   | 
| service_type| Integer |  商家服务类型   | 
| contact_name| string |  联系人 | 
| contact_mobile| string |  联系电话  | 
| alternate_phone| string |  备用电话  | 
| province_id| Integer |  省份ID | 
| province_name| string |  省份名称   | 
| city_id| Integer |  城市ID  | 
| city_name| string |  城市名称   | 
| district_id| Integer |  区县ID   | 
| district_name| string |  区县名称  | 
| address| string |  地址  | 
| operation_time| string |  营业时间   | 
| status| Integer |  状态 1-在用 2-失效  | 
| business_license_pic| string |  图片url   | 
| created_at| string |  创建时间   | 
| created_by| Long|  创建人  | 
返回码说明
>1 操作成功   
>22006 参数异常


### 2.2 商家新增
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellers

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| name| true| string |   商家名称    | 
| category_id|true|  Integer |  商家品类ID  | 
| category_name|true|  string |  商家品类名称   | 
| service_type|true|  Integer |  商家服务类型   | 
| contact_name|true|  string |  联系人 | 
| contact_mobile|true|  string |  联系电话  | 
| alternate_phone|false|  string |  备用电话  | 
| province_id|true|  Integer |  省份ID | 
| province_name|true|  string |  省份名称   | 
| city_id|true|  Integer |  城市ID  | 
| city_name|true|  string |  城市名称   | 
| district_id|true|  Integer |  区县ID   | 
| district_name| true| string |  区县名称  | 
| address|true|  string |  地址  | 
| operation_time| true| string |  营业时间   | 
| image_file|true| file |  图片类型文件   | 

**请求实例**
>1. curl  -F "name=guozheng33" -F "province_id=13" -F "province_name=福建省" -F "city_id=116" -F "city_name=福州市" -F "district_id=1024" -F "district_name=鼓楼区" -F "category_id=1" -F "category_name=上门服务" -F "service_type=1" -F "contact_name=张三" -F "contact_mobile=0591-84523214" -F "alternate_phone=18645120012" -F "address=软件园B区23栋401" -F "operation_time=周一至周五 09:00-18:00" -F "image_file=@image.jpg"  http://o2otest.gzshapp.net/api/v1/o2o/sellers

**返回结果**
``` JSON
{code:1,msg:"操作成功","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 
返回码说明

>1 操作成功   
>22006 参数异常   
>22007 图片上传异常    

### 2.3 商家修改
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellers/{seller_id}

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| name| true| string |   商家名称    | 
| category_id|true|  Integer |  商家品类ID  | 
| category_name|true|  string |  商家品类名称   | 
| service_type|true|  Integer |  商家服务类型   | 
| contact_name|true|  string |  联系人 | 
| contact_mobile|true|  string |  联系电话  | 
| alternate_phone|false|  string |  备用电话  | 
| province_id|true|  Integer |  省份ID | 
| province_name|true|  string |  省份名称   | 
| city_id|true|  Integer |  城市ID  | 
| city_name|true|  string |  城市名称   | 
| district_id|true|  Integer |  区县ID   | 
| district_name| true| string |  区县名称  | 
| address|true|  string |  地址  | 
| operation_time| true| string |  营业时间   | 
| image_file|false| file |  图片类型文件   | 

**请求实例**
>1.  curl  -F "name=gzlife111" -F "province_id=13" -F "province_name=福建省" -F "city_id=116" -F "city_name=福州市" -F "district_id=1041" -F "district_name=鼓楼区" -F "category_id=1" -F "category_name=上门服务" -F "service_type=1" -F "contact_name=张三" -F "contact_mobile=0591-84523214" -F "alternate_phone=18645120012" -F "address=软件园B区23栋401" -F "operation_time=周一至周五 09:00-18:00" -f "image_file=@image.png" -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/sellers/1

**返回结果**
``` JSON
{code:1,msg:"操作成功","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 
返回码说明

>1 操作成功   
>22006 参数异常   
>22007 图片上传异常    

### 2.4 商家ID查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/sellers/{seller_id}

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| seller_id| true| Integer |   商家ID    | 


**请求实例**
>1.  http://o2otest.gzshapp.net/api/v1/o2o/sellers/1

**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "id": 1,
    "name": "数字生活",
    "category_id": 2,
    "category_name": "上门服务",
    "service_type": 1,
    "contact_name": "林总",
    "contact_mobile": "13888880000",
    "alternate_phone": "13888880000",
    "province_id": 13,
    "province_name": "福建省",
    "city_id": 116,
    "city_name": "福州1",
    "district_id": 1042,
    "district_name": "台江区",
    "address": "软件园B区23栋40221",
    "operation_time": "10:00-21:00",
    "status": 2,
    "business_license_pic": "",
    "created_at": "2015-11-16 00:00:00",
    "created_by": 1,
    "total_goods": 0
  }
}
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| id|   Integer|    商家 id | 
| name| string |   商家名称    | 
| category_id| Integer |  商家品类ID  | 
| category_name| string |  商家品类名称   | 
| service_type| Integer |  商家服务类型   | 
| contact_name| string |  联系人 | 
| contact_mobile| string |  联系电话  | 
| alternate_phone| string |  备用电话  | 
| province_id| Integer |  省份ID | 
| province_name| string |  省份名称   | 
| city_id| Integer |  城市ID  | 
| city_name| string |  城市名称   | 
| district_id| Integer |  区县ID   | 
| district_name| string |  区县名称  | 
| address| string |  地址  | 
| operation_time| string |  营业时间   | 
| status| Integer |  状态 1-在用 2-失效  | 
| business_license_pic| string |  图片url   | 
| created_at| string |  创建时间   | 
| created_by| Long|  创建人  | 
| total_goods| integer|  上架商品数  大于0代表有商品上架,等于0代表无，有商品上架，商家部分信息不可修改 | 

返回码说明

>1 操作成功    
>22006 参数异常    
>22007 图片上传异常    

## 3.公用接口
### 3.1 获取省份列表
**URL**

> http://o2otest.gzshapp.net/api/v1/o2o/provinces


**支持格式**

>json

**HTTP请求方式**

>GET

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
| status|   true |  Integer  |  1 值必须为1 |

**请求实例**

> 1. http://o2otest.gzshapp.net/api/v1/o2o/provinces?status=1

**返回结果**

``` json
{
"code":"1",
"msg":"查询成功",
"data":[
        {"id":1,"name":"北京"},
        {"id":2,"name":"天津"},
        ...
        ]
}
```

**返回字段说明**

| **返回值字段**      |     **字段类型** |   **字段说明**   |
| :-------- | :--------| :------  |
| id   |   Integer | 省份ID  |
| name |   String |  名称  |

### 3.2 获取城市列表
**URL**

> http://o2otest.gzshapp.net/api/v1/o2o/provinces/{province_id}/citys

**支持格式**

>json

**HTTP请求方式**

>GET

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
| status|   true |  Integer  |  1 值必须为1 |

**请求实例**

> 1. http://o2otest.gzshapp.net/api/v1/o2o/provinces/{province_id}/citys?status=1

**返回结果**

``` json
{
"code":"1",
"msg":"查询成功",
"data":[
        {"id":1,"name":"北京","province_id":1,"province_name":"北京"},
        {"id":2,"name":"天津","province_id":2,"province_name":"天津"},
        ...
        ]
}
```

**返回字段说明**

| **返回值字段**      |     **字段类型** |   **字段说明**   |
| :-------- | :--------| :------  |
| id   |   Integer |  城市ID  |
| name |   String |  名称  |
| province_id|   Integer |  省ID  |
| province_name|   String |  省名称  |

### 3.3 获取县区列表

**URL**

> http://o2otest.gzshapp.net/api/v1/o2o/citys/{city_id}/districts

**支持格式**

>json

**HTTP请求方式**

>GET

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
| status|   true |  Integer  |  1 值必须为1 |

**请求实例**
> 1. http://o2otest.gzshapp.net/api/v1/o2o/citys/{city_id}/districts?status=1

**返回结果**

``` json
{
"code":"1",
"msg":"查询成功",
"data":[
        {
        "id":1,
        "name":"4合院"，
        "province_id":1,
        "province_name":"北京"，
        "city_id":1,
        "city_name":"北京"
        },
        ...
        ]
}
```

**返回字段说明**

| **返回值字段**      |     **字段类型** |   **字段说明**   |
| :-------- | :--------| :------  |
| id   |   Integer |  返回码  |
| name |   String |  名称  |
| province_id|   Integer |  省ID  |
| province_name|   String |  省名称  |
| city_id|   Integer |  城市ID  |
| city_name|   String|  城市名  |



## 4.	商家账号


### 4.1	O2O系统登录接口
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/login

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| user_name| true|  string| 用户名 |
| password| true| string |密码|
| remember_me| true| int|1.记住7天,0为一个会话 |


**请求实例**
>1. curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=oadmin2015" -d "password=oadmin2015" -d "remember_me=0" -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/login  



**返回结果**
``` JSON
{code:1,msg:"....","data":null}    
```
**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 登入成功    
>22002 参数异常    
>22004 账号不存在    
>22007 账号类型错误  或 账号权限错误  或 密码错误  或 此账号已锁定  


### 4.2   O2O登录用户获取

**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/userinfo

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**
>无


**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/userinfo 
>1. curl -X GET -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/userinfo  

**返回结果**
```JSON
{
"code":1,
"msg":"",
"data":{
	"username":"oadmin2015",
	"realname":"噢噢",
	"role":2,
	"user_id":10018
	}
}
```

**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| username| string|   用户名| 
| realname| string|   用户真实姓名| 
| role| int|   用户角色|
| user_id| long|   用户Id| 


### 4.3	商家系统登录接口
**URL**
>http://o2otest.gzshapp.net/api/v1/seller/login

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| user_name| true|  string| 用户名 |
| password| true| string |密码|
| remember_me| true| int|1为记住7天,0为一个会话 |


**请求实例**
>1. curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=test111" -d "password=test111" -d "remember_me=0" -D cookies.txt http://o2otest.gzshapp.net/api/v1/seller/login


**返回结果**

``` JSON
{code:1,msg:"....","data":null}    
```


**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 登入成功    
>22002 参数异常    
>22004 账号不存在    
>22007 账号类型错误  或 账号权限错误  或 密码错误  或 此账号已锁定  



### 4.4   商家登录用户获取

**URL**
>http://o2otest.gzshapp.net/api/v1/seller/userinfo

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

>无


**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/seller/userinfo 
>1. curl -X GET -b cookies.txt http://o2otest.gzshapp.net/api/v1/seller/userinfo

**返回结果**
```JSON
{
"code":1,
"msg":"",
"data":{
	"username":"test111",
	"realname":null,
	"role":1,
	"user_id":10028
	}
}
```

**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| username| string|   用户名| 
| realname| string|   用户真实姓名| 
| role| int|   用户角色|
| user_id| long|   用户Id|


### 4.5	添加商家用户接口
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/seller/account

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**


| 参数      |     必选 |   类型及范围   |说明| 
|  :------ | :------ | :------ | :------ | 
| user_name| true|  string| 用户名 | 
| password| true| string |密码| 
| seller_id| true| int|商家Id | 
| seller_name| true| string|商家名称 | 


**请求实例**
>1. curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=test4" -d "password=test4" -d "seller_id=9" -d "seller_name=guozheng33" -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/seller/account


**返回结果**

``` JSON
{"code":1,"msg":"....","data":null}    
```


**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   | 
| :-------- | :--------| :------ | 
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 添加成功    
>22002 参数异常    
>22003 该商家已添加账号    
>22006 此账号已存在   
>22007 添加失败  



### 4.6	修改商家用户接口
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/seller/account/{id}


**支持格式**
>json

**HTTP请求方式**
>PUT

**请求参数**


| 参数      |     必选 |   类型及范围   |说明| 
|  :------ | :------ | :------ | :------ | 
| user_name| true|  string| 用户名 | 
| password| true| string |密码| 
| seller_id| true| int|商家Id | 
| seller_name| true| String|商家名称 | 
| id| true| string|商家账号Id | 


**请求实例**
>1. curl -X PUT -H "Content-Type: application/x-www-form-urlencoded" -d "user_name=test44444" -d "password=test44444" -d "seller_id=10" -d "seller_name=福建数字生活1" -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/seller/account/10034


**返回结果**

``` JSON
{code:1,msg:"....","data":null}    
```


**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   | 
| :-------- | :--------| :------ | 
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 

返回码说明

>1 添加成功  
>22002 参数异常 
>22003 该商家已添加账号  
>22006 该用户名已存在  
>22007 修改失败  



### 4.7	商家名称分页查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/seller/account
**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**


| 参数      |     必选 |   类型及范围   |说明| 
|  :------ | :------ | :------ | :------ | 
| page| false|  Integer| 页数(默认为1)| 
| rows| false| Integer|每页条数(默认为10，传-1时不分页)| 
| seller_id| true| int|商家Id(为0时查询全部) | 


**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/seller/account?seller_id=0
>2. curl -X GET -d "seller_id=0" -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/seller/account


**返回结果**

``` JSON
{
  "code": 1,
  "msg": "查询成功",
  "data": {
    "total": 1,
    "rows": [
      {
        "id": "10028",
        "role": 1,
        "status": 1,
        "user_name": "test111",
        "seller_id": 6,
        "seller_name": "guozheng",
        "created_by": "10028",
        "created_at": "2015-11-19 20:26:47"
      }
    ]
  }
}    
```


**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   | 
| :-------- | :--------| :------ | 
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| total| int|   总条数| 
| id| string|   商家账号Id| 
| role| int|1 - 管理员； 2 - 普通员工| 
| status| int|1 - 开启权限、2- 关闭权限| 
| user_name| string| 用户名| 
| seller_id| int|商家Id| 
| seller_name| string|商家名称| 
| created_by| string|创建者Id| 
| created_at| string|创建时间| 




### 4.8	商家帐号Id查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/seller/account/{id}

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**
>无


**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/seller/account/10033
>2. curl -X GET -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/seller/account/10033


**返回结果**

``` JSON
{
  "code": 1,
  "msg": "查询成功",
  "data": {
    "id": "10033",
    "role": 1,
    "status": 1,
    "user_name": "test444",
    "seller_id": 8,
    "seller_name": "guozheng11",
    "created_by": "10018",
    "created_at": "2015-11-20 11:46:03"
  }
}   
```


**返回字段说明**
			
        
| 返回值字段   |     字段类型 |   字段说明   | 
| :-------- | :--------| :------ | 
| code|   int  |   返回码 | 
| msg| string |   说明    | 
| id| string|   商家账号Id|
| role| int|1 - 管理员； 2 - 普通员工| 
| status| int|1 - 开启权限、2- 关闭权限| 
| user_name| string| 用户名| 
| seller_id| int|商家Id| 
| seller_name| string|商家名称| 
| created_by| string|创建者Id| 
| created_at| string|创建时间| 


## 5. O2O客服

### 5.1 订单列表查看

**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/orders

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| order_no | false |  String | 订单号 |
| seller_id | false |  Integer | 商家id |
| mobile | false |  String | 手机号 |
| time_begin | false |  String | 起始时间（限定订单创建时间） |
| time_end | false |  String | 截至时间（限定订单创建时间） |
| status | false |  Integer | 订单状态 1-未付款；2-已付款；3-已完成；4-退款；5-交易结束 |
| page | false |  Integer | 页号 |
| rows | false |  Integer | 每页显示行数 |

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/orders?order_no={order_no}&seller_id={seller_id}&mobile={mobile};
>2. curl -G -d "order_no={order_no}" -d "seller_id={seller_id}"  http://o2otest.gzshapp.net/api/v1/o2o/orders

**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "total": 5
    "rows" :[
      {
        "order_no": "20151124101856661163840",
        "mobile": "15959137921",
        "seller_name": "福建数字生活",
        "status": 2,
        "total_amount": 500,
        "pay_way": "支付宝",
        "created_at": "1448331498000"
      },
      {
        "order_no": "201208071458255191114",
        "mobile": "15594",
        "seller_name": "羽毛球馆",
        "status": 2,
        "total_amount": 156156,
        "pay_way": null,
        "created_at": "1448267077000"
      }...
    ]
  }
} 
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code |  int   |  返回代码  |
| msg | String |  返回说明 | 
| corder_no|  String   |  订单号  | 
| total_amount | Double |  总价（元）| 
| pay_way | String |  支付方式  | 
| created_at| String |  订单创建时间  | 
| mobile |string | 手机号 | 
| seller_name | String | 商户名称 |
| status | Integer | 订单状态 |

返回码说明

>1、 操作成功   

### 5.2 订单详情查看

**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/orders/details

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| order_no | false |  String | 订单号 |

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/orders/details?order_no={order_no};
>2. curl -G -d "order_no={order_no}" http://o2otest.gzshapp.net/api/v1/o2o/orders/details

**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "order_no": "10002",
    "goods": [
    {
        "goods_title": "hbhi",
        "num": 2,
        "amount": 20,
        "exchange_codes": [
          {
            "value": "100005",
            "used_at": "0",
            "status": 2,
          },
          {
            "value": "100006",
            "used_at": "0",
            "status": 1,
          }
        ]
      },
      {
        "goods_title": "jokjpoi",
        "num": 1,
        "amount": 20,
        "exchange_codes": [
          {
            "value": "100007",
            "used_at": "0",
            "status": 1,
          }
        ]
      }
    ]
  }
} 
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code |  int   |  返回代码  |
| msg | String |  返回说明 |
| order_no | String |  订单号  |
| goods_title| String | 商品名称 |
| num |Integer | 商品数目 | 
| amount | Double | 商品总价 |
| value | String | 兑换码 |
| used_at | String | 使用时间 |
| status | Integer | 订单状态 1-未使用;2-已使用;3-冻结;4-已退款 |

返回码说明

>1、 操作成功


### 5.3 兑换码验证
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/codes

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| seller_id | true |  Integer| 商家id |
| value | true |  String | 兑换码 |

**请求实例**
>1. http://o2otest.gzshapp.net/api/v1/o2o/codes?seller_id={seller_id}&value={value};
>2. curl -G -d "seller_id={seller_id}" -d "value={value}"  http://o2otest.gzshapp.net/api/v1/o2o/codes

**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
      "value": 10011457,
      "mobile": null,
      "goods_title": null,
      "unit_price": 0,
      "used_at": "1448267304000",
      "expired_at": "1448267504000"
  }
} 
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| value | String |  兑换码  | 
| mobile| String |  手机号  | 
| goods_title|string | 商品名称| 
| unit_price | Double | 单价 |
| used_at | String | 使用时间 |

返回码说明

>1: 操作成功     
>22006: 参数异常  
>22008: 兑换券或对应订单不存在  
>22009: 验证失败，已被使用  
>22011: 兑换券已过期  
>22012: 兑换券涉及退款  


### 5.4 提交退款申请
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/orders/{order_no}/refund

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| order_no | true |  String | 订单号,必须是数字 |
| reason | false|  String | 退款原因 |
> 该接口必须在登陆的情况下操作

**返回结果**
``` JSON
{code:1,msg:"操作成功","data":null} 
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  空对象 预留用  | 


返回码说明

>1: 操作成功    
>22006: 参数异常  
>22008: 订单不存在  
>22009: 订单中不存在该商品!  
>22010: 所有兑换券已经被使用，无法退款!  
>22011: 订单未付款!  
>23011: 该笔记录已退过款!  


### 5.5 执行补单
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/orders/{order_no}/repair

**支持格式**
>json

**HTTP请求方式**
>PUT

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| order_no | true |  String | 订单号,必须是数字 |
> 该接口必须在登陆的情况下操作

**请求实例**
> curl -X PUT -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/orders/55555555/repair


**返回结果**
``` JSON
{"code":1,"msg":"操作成功","data":null}
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  空对象 预留用  | 


返回码说明

>1: 操作成功     
>22005: 兑换券已经存在，无需补单!   
>22006: 参数异常   
>22008: 对应订单不存在   
>22009: 不存在相应的订单详情!   
>22011: 订单未付款!  





### 5.6 兑换券列表查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/coupons

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| begin_time | true |  String | 开始时间，格式yyyy-MM-dd |
| end_time | true |  String | 结束时间，格式yyyy-MM-dd |
| order_no | false |  String | 订单号 |
| coupon| false |  String | 兑换券值 |
| seller_name| false |  String | 商家名称 |
| status| false |  Integer| 状态:1-未使用,2-已使用,3-冻结,4-已退款 |
| page | false |  Integer | 页号 |
| rows | false |  Integer | 每页显示行数 |
> 该接口必须在登陆的情况下操作

**请求实例**
> curl -X GET -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/coupons


**返回结果**
``` JSON


    {
        "code": 1,
        "msg": "操作成功",
        "data":
        {
            "total": 128,
            "rows":
            [
	             {
	                "value": "509716645515",
	                "status": 2,
	                "mobile": "15959137921",
	                "used_at": "2015-11-25 20:01:23",
	                "expired_at": "2015-12-31",
	                "order_no": "20151124101856661163840",
	                "unit_price": "100.00",
	                "goods_title": "亏本大甩卖",
	                "seller_name": "福建数字生活"
	            },
	            {
	                "value": "771845811978",
	                "status": 2,
	                "mobile": "15959137921",
	                "used_at": "2016-01-19 18:51:44",
	                "expired_at": "2016-12-31",
	                "order_no": "20151123205902378188416",
	                "unit_price": "100.00",
	                "goods_title": "亏本大甩卖",
	                "seller_name": "福建数字生活"
	            },
             .....
            ]
        }
    }


```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 
| value| String|  兑换券编号 | 
| status| int   |  状态:1-未使用,2-已使用,3-冻结,4-已退款   | 
| used_at| String|  验证时间,格式：yyyy-MM-dd HH:mm:ss |
| expired_at| String|  有效截止时间,格式：yyyy-MM-dd | 
| order_no| String|  订单号  |
| unit_price| String|  单价(元) | 
| goods_title| String|  商品名称 |
| mobile| String|  用户手机号  | 
| seller_name| String|  商家名称  |

返回码说明

>1: 操作成功     
>22006: 参数异常   


## 6. O2O后台
### 6.1 查询商品

**URL**

> http://o2otest.gzshapp.net/api/v1/o2o/goods

**支持格式**

>json

**HTTP请求方式**

>GET

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
| seller_id|   true |  Integer | 商家ID，0为查询全部 |
| title|   true |  string| 商品标题,""为查询全部 |
| status|   true |  Integer | 1-上架 2-下架，不传值，或者传0 默认查询全部|
| page|   false |  Integer | 默认值为1 |
| rows|   false |  Integer | 默认值为10 （传-1为不分页） |

**请求实例**
> 1.http://localhost/api/v1/o2o/goods?seller_id=1&title=&status=0&page=1&rows=10

**返回结果**

``` json
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "total": 1,
    "rows": [
      {
        "id": 1,
        "seller_name": "dd",
        "origin_price": 1000,
        "price": 100,
        "title": "亏本大甩卖",
        "thumbnails": "",
        "details": "顶顶顶",
        "valid_date_begin": "2015-11-24 15:26:43",
        "valid_date_end": "2015-12-31 15:26:47",
        "created_at": "2015-11-24 15:26:54",
        "usage_rule": "sdsadasdsadsadsa"
      }
    ]
  }
}
```

**返回字段说明**

| **返回值字段**      |     **字段类型** |   **字段说明**   |
| :-------- | :--------| :------  |
| id   |   integer |  主键id|
| seller_name |   integer |  商家名称|
| origin_price |   integer|  原价|
| price|   double |  现价|
| title |   String |  标题|
| thumbnails|   String |  图片url|
| details|   String |  详情|
| valid_date_begin|   String |  有效日期开始|
| valid_date_end|   String |  有效日期结束|
| created_at|   String |  创建时间|
| usage_rule |   String |  使用规则|

返回码说明

>1 操作成功   
>22006 参数异常   

### 6.2 更改商品库存
**URL**
> http://o2otest.gzshapp.net/api/v1/o2o/goods/{goods_id}/goodsStock


**支持格式**

>json

**HTTP请求方式**

>PUT

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
| goods_id|   true|  integer | 商品ID |
| stock_num|   true |  integer | 库存量 |

**请求实例**
>1. curl -X PUT -H "Content-Type: application/x-www-form-urlencoded"  -d "stock_num=1000"  -D cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/goods/1/goodsStock

**返回结果**
``` JSON
{code:1,msg:"操作成功","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 
返回码说明

>1 操作成功   

  




### 6.3 添加商品
**URL**
> http://o2otest.gzshapp.net/api/v1/o2o/goods


**支持格式**

>json

**HTTP请求方式**

>POST

**请求参数**

| **参数**     |   **必选** |   **类型及范围**   |   **说明**   |
| :------  | :------- | :------  | :------  |
 |seller_name      |true|String | 商家名称               |
 |origin_price     |true|double | 商品原价               |
 |price     	   |true|double | 商品实价               |
 |title     	   |true|String | 商品名称               |
 |thumbmails	   |true|String | 缩略图                 |
 |details   	   |true|String | 详情                   |
 |valid_date_begin |true|String | 有效开始时间           |
 |valid_date_end   |true|String | 有效结束时间           |
 |usage_rule	   |true|String | 使用规则               |
 |status    	   |true|Integer    | 状态               |
 |seller_id 	   |true|Integer    | 商家编号           |
 |memo      	   |true|String | 图文说明               |
 |num      	   	   |true|Integer | 商品数量              |
 |file      	   |true|CommonsMultipartFile | 商品图标 |


**返回结果**
``` JSON
{code:1,msg:"操作成功","data":null}    
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|   Integer  |   返回码 | 
| msg| string |   说明    | 
| data| object|   null    | 
返回码说明

>1 操作成功   
>22007 添加失败   
>22002 参数异常   
>22004 商家不存在   







## 7. 商家后台

### 7.1 已消费兑换券列表查询
**URL**
>http://o2otest.gzshapp.net/api/v1/o2o/exchangecode/used

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| start_date | true |  String | 开始时间，格式yyyy-MM-dd |
| end_date | true |  String | 结束时间，格式yyyy-MM-dd |
| seller_id| true |  Integer | 商家Id,0为查询全部商家 |
| goods_id| true |  Integer | 商品Id,0为查询全部商品 |
| page | false |  Integer | 页号(默认为1) |
| rows | false |  Integer | 每页显示行数(默认为10，传0时不分页) |

**请求实例**
> curl -X GET -b cookies.txt http://o2otest.gzshapp.net/api/v1/o2o/exchangecode/used


**返回结果**
``` JSON


    {
        "code": 1,
        "msg": "操作成功",
        "data":
        {
            "total": 3,
            "rows":
            [
	             {
	                "value": "509716645515",
	                "status": 2,
	                "mobile": "15959137921",
	                "used_at": "2015-11-25 20:01:23",
	                "expired_at": "2015-12-31",
	                "order_no": "20151124101856661163840",
	                "unit_price": "100.00",
	                "goods_title": "亏本大甩卖",
	                "seller_name": "福建数字生活"
	            },
	            {
	                "value": "771845811978",
	                "status": 2,
	                "mobile": "15959137921",
	                "used_at": "2016-01-19 18:51:44",
	                "expired_at": "2016-12-31",
	                "order_no": "20151123205902378188416",
	                "unit_price": "100.00",
	                "goods_title": "亏本大甩卖",
	                "seller_name": "福建数字生活"
	            },
             .....
            ]
        }
    }


```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 
| value| String|  兑换券编号 | 
| status| int   |  状态:1-未使用,2-已使用,3-冻结,4-已退款   | 
| used_at| String|  验证时间,格式：yyyy-MM-dd HH:mm:ss |
| expired_at| String|  有效截止时间,格式：yyyy-MM-dd | 
| order_no| String|  订单号  |
| unit_price| String|  单价(元) | 
| goods_title| String|  商品名称 |
| mobile| String|  用户手机号  | 
| seller_name| String|  商家名称  |

返回码说明

>1: 操作成功






## 8. 社区头条管理

### 8.1 社区头条发布
**URL**
>http://localhost/api/v2/headline

**支持格式**
>json

**HTTP请求方式**
>POST

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| title | true |  String | 标题 |
| content | true |  String | 内容 |
| publish_type| true|  int| 发布类型1-全部；2-指定小区 |
| online_date| true |  String| 上线时间，格式yyyy-MM-dd |
| base_read| false|  Integer |基础阅读数，可为空|
| file| false |  CommonsMultipartFile | 文件类型，可为空 |
| offline_date| false |  String| 下线时间，格式yyyy-MM-dd，可为空 |
| community_ids| false |  CommunityIdsBean| 指定小区id集合 |
| little_content| true |  String| 内容简介 |



```
CommunityIdsBean
{
	"community_ids":[{
		"id":420760245661556736
	},{
		"id":421043710999089152
	}]
}

```

**请求实例**
> curl -X POST -b cookies.txt http://localhost/api/v2/headline


**返回结果**
``` JSON


    {
        "code": 1,
        "msg": "操作成功",
        "data":""
        
    }


```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 


返回码说明

>1: 操作成功   
>22006:参数异常|该标题已存在，请重新输入   |     文件上传失败，请检查文件类型    




### 8.2 查看社区头条
**URL**
>http://localhost//api/v2/headline/{headline_id}

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| headline_id| true |  long| 头条id|


**请求实例**
> curl -X GET-b cookies.txt http://localhost/api/v2/headline/561353096161329152?headline_id=561353096161329152


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "id": "561353096161329152",
    "title": null,
    "pic_url": "http://www.baidu.com",
    "content": null,
    "base_read": 0,
    "nature_read": 1,
    "online_date": "2016-11-03",
    "offline_date": "2017-11-11",
    "status": 1,
    "publish_date": "2016-11-03 01:32:09",
    "community_view": [
      {
        "id": "420760245661556736",
        "name": "丞相坊",
        "district_id": 17,
        "district_name": "和平区",
        "city_id": 2,
        "city_name": "天津市",
        "province_id": 2,
        "province_name": "天津"
      },
      {
        "id": "421043710999089152",
        "name": "明春小区",
        "district_id": 205,
        "district_name": "迎泽区",
        "city_id": 14,
        "city_name": "太原市",
        "province_id": 4,
        "province_name": "山西省"
      }
    ]
  }
}

```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 
| id|  String|  头条id  | 
| title| String |  标题| 
| pic_url| String|  列表页图片url| 
| content| String|  内容详情| 
| base_read|  int   |  基础阅读数| 
| nature_read| int|  自然阅读数| 
| online_date| String|  上线日期| 
| offline_date| String|  下线日期| 
| status|  int   |  1-待上架，2-已上架，3-已下架| 
| publish_date| String |  发布日期| 
| community_view| Object | 发布的范围  | 
| community_view.id| String|  小区id| 
| community_view.name|  String|  小区名称 | 
| community_view.district_id| int|  区县id  | 
| community_view.district_name| String| 区县名称 | 
| community_view.city_id| int|  城市id | 
| community_view.city_name|  String|  城市名称  | 
| community_view.province_id| int| 省份id  | 
| community_view.province_name| String|  省份名称 | 


返回码说明

>1: 操作成功    
>22002:参数异常     
>22006:参数异常    





### 8.3 删除社区头条
**URL**
>http://localhost//api/v2/headline/{headline_id}

**支持格式**
>json

**HTTP请求方式**
>DELETE

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| headline_id| true |  long| 头条id|


**请求实例**
> 暂无


**返回结果**
``` JSON

    {
        "code": 1,
        "msg": "操作成功",
        "data":""
        
    }

```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 



返回码说明

>1: 操作成功    
>22002:参数异常     
>22006:参数异常    



### 8.4 下线社区头条
**URL**
>http://localhost//api/v2/headline/{headline_id}/status

**支持格式**
>json

**HTTP请求方式**
>PUT

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| headline_id| true |  long| 头条id|
| status| true |  int| 状态：3-下线|


**请求实例**
> 暂无


**返回结果**
``` JSON

    {
        "code": 1,
        "msg": "操作成功",
        "data":""
        
    }

```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 



返回码说明

>1: 操作成功    
>22002:参数异常     
>22006:参数异常    



### 8.5 查看社区头条列表
**URL**
>http://localhost//api/v2/headline

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| title| flase|  String|标题|
| begin_time| flase|  String| 开始时间|
| end_time| flase|  String| 结束时间|
| status| flase|  Integer| 状态：null或0-全部；1-待发布；2-已上线；3-已下线|
| page| flase|  int| 页数|
| rows| flase|  int| 行数|

**请求实例**
> curl -X GET-b cookies.txt http://localhost/api/v2/headline


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": {
    "total": 2,
    "rows": [
      {
        "id": "561618148386865152",
        "title": "服务端测试头条1",
        "pic_url": "http://uploadimg.gzshapp.net/o2o/headline/20161104092745.jpg",
        "content": "这是个头条",
        "base_read": 0,
        "nature_read": 0,
        "online_date": "2016-11-08",
        "offline_date": "2017-11-08",
        "status": 1,
        "publish_date": "2016-11-04 09:27:45",
        "community_view": null
      },
      {
        "id": "561616004824891392",
        "title": "服务端测试头条",
        "pic_url": "http://uploadimg.gzshapp.net/o2o/headline/20161104091914.jpg",
        "content": "这是个头条",
        "base_read": 0,
        "nature_read": 0,
        "online_date": "2016-11-08",
        "offline_date": "2017-11-08",
        "status": 1,
        "publish_date": "2016-11-04 09:19:14",
        "community_view": null
      },

    ]
  }
}
```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明  |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 
| id|  String|  头条id  | 
| title| String |  标题| 
| pic_url| String|  列表页图片url| 
| content| String|  内容详情| 
| base_read|  int   |  基础阅读数| 
| nature_read| int|  自然阅读数| 
| online_date| String|  上线日期| 
| offline_date| String|  下线日期| 
| status|  int   |  1-待上架，2-已上架，3-已下架| 
| publish_date| String |  发布日期| 
| community_view| Object | 发布的范围  | 



返回码说明

>1: 操作成功    
>22002:参数异常     
>22006:参数异常    




### 8.6 查看社区头条发布范围
**URL**
>http://localhost/api/v2/headline/community-range/{headline_id}

**支持格式**
>json

**HTTP请求方式**
>GET

**请求参数**

| 参数      |     必选 |   类型及范围   |说明|
|  :------ | :------ | :------ | :------ |
| headline_id| true |  long| 头条id|


**请求实例**
> curl -X GET-b cookies.txt http://localhost/api/v2/headline/community-range/561353096161329152


**返回结果**
``` JSON
{
  "code": 1,
  "msg": "操作成功",
  "data": [
    {
      "id": "420760245661556736",
      "name": "丞相坊",
      "district_id": 17,
      "district_name": "和平区",
      "city_id": 2,
      "city_name": "天津市",
      "province_id": 2,
      "province_name": "天津"
    },
    {
      "id": "421043710999089152",
      "name": "明春小区",
      "district_id": 205,
      "district_name": "迎泽区",
      "city_id": 14,
      "city_name": "太原市",
      "province_id": 4,
      "province_name": "山西省"
    }
  ]
}

```
**返回字段说明**
			   
| 返回值字段   |     字段类型 |   字段说明   |
| :-------- | :--------| :------ |
| code|  int   |  返回代码  | 
| msg | String |  返回说明  | 
| data | Object |  返回结果  | 
|  id| String|  小区id| 
|  name|  String|  小区名称 | 
|  district_id| int|  区县id  | 
|  district_name| String| 区县名称 | 
|  city_id| int|  城市id | 
|  city_name|  String|  城市名称  | 
|  province_id| int| 省份id  | 
|  province_name| String|  省份名称 | 


返回码说明

>1: 操作成功    
>22002:参数异常     
>22006:参数异常    















