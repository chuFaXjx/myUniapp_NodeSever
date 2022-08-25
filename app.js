const express = require('express');
const { APP_PORT}=require('./config')
const path = require("path");
const app = express();
const router=require('./routers/index')
app.use(express.json()); // 告诉express能够解析 application/json类型的请求参数
app.use(express.urlencoded({extended: false}));// 告诉express能够解析 表单类型的请求参数 application/x-www-form-urlencoded
// 处理静态资源
app.use(express.static(path.join(__dirname, "uploads")));
// 登录功能注册路由
const loginRouter = require("./routers/登录功能/login")
app.use(loginRouter.router)
// 注册功能路由注册
const registerRouter = require('./routers/登录功能/register');
app.use(registerRouter.router)
app.use(router)
//编辑角色密码和账号的注册路由
const eidtUserRouter = require('./routers/登录功能/editusers');
app.use(eidtUserRouter.router); 
// APP_PORT
app.listen(3309, () => {
	console.log(`服务器启动成功：http://192.168.0.132:3309`);
});