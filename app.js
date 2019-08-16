//使用express构建web服务器
const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
const index=require('./routers/index.js');
const login=require('./routers/user.js');

const cors=require("cors");

//引入路由模块
var app=express();
var server=app.listen(3000);
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}))

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器来管理路由
app.use("/index",index);
app.use("/login",login);
