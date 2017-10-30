# vue-router-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
## vue-router 初步使用
网上的例子

一个主界面的 index 上面有按钮  列表  导航的路由

界面里面分别有子路由

使用element-ui做界面
### note
```
    props:{
      msg:{
        default:'按钮'
      }
    },
    
    要写成这样  
    尽量不要写成 msg:'按钮'，否则在调用组件的时候不能 <uButton msg='确定'></uButton> 
```



