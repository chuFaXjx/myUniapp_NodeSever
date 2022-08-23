const express = require('express');
const app = express();

app.use(express.json()); // 告诉express能够解析 application/json类型的请求参数
app.use(express.urlencoded({extended: false}));// 告诉express能够解析 表单类型的请求参数 application/x-www-form-urlencoded

// 登录功能注册路由
const loginRouter = require("./routers/adminsys/登录功能/login")
app.use(loginRouter.router)
// 注册功能路由注册
const registerRouter = require('./routers/adminsys/登录功能/register');
app.use(registerRouter.router)

//编辑角色密码和账号的注册路由
const eidtUserRouter = require('./routers/adminsys/登录功能/editusers');
app.use(eidtUserRouter.router); 

//删除角色账号和密码的注册路由
const delUserRouter = require('./routers/adminsys/登录功能/deleteusers') 
app.use(delUserRouter.router);


// 注册微信小程序登录接口的路由
const wxApp = require('./routers/wxapp/wecharlogin/wxlogin')
app.use(wxApp);


app.listen(3000, () => {
	console.log("http://localhost:3000");
});
