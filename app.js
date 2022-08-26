const express = require("express");
const app = express();

const path = require("path");
const router = require("./routers/index");

app.use(express.json()); // 告诉express能够解析 application/json类型的请求参数
app.use(express.urlencoded({ extended: false })); // 告诉express能够解析 表单类型的请求参数 application/x-www-form-urlencoded
// 处理静态资源
app.use(express.static(path.join(__dirname, "uploads")));
// 登录功能注册路由
const loginRouter = require("./routers/adminsys/登录功能/login");
app.use(loginRouter.router);
// 注册功能路由注册
const registerRouter = require("./routers/adminsys/登录功能/register");
app.use(registerRouter.router);

//编辑角色密码和账号的注册路由
const eidtUserRouter = require("./routers/adminsys/登录功能/editusers");
app.use(eidtUserRouter.router);

//删除角色账号和密码的注册路由
const delUserRouter = require("./routers/adminsys/登录功能/deleteusers");
app.use(delUserRouter.router);

// 注册微信小程序登录接口的路由
const wxApp = require("./routers/wxapp/wecharlogin/wxlogin");
app.use(wxApp);

// 注册微信小程序获取我的论坛路由
const wxGetMy_Forum = require("./routers/wxapp/wx myForum/getForum");
app.use(wxGetMy_Forum.router);
// 注册微信小程序添加我的论坛路由
const wxAddMy_Fourm = require("./routers/wxapp/wx myForum/addForum");
app.use(wxAddMy_Fourm.router);

// 注册健康处方的路由
const wxGetHealth_PrescriptionAll = require("./routers/wxapp/wx_Healthprescription/getprescription");
app.use(wxGetHealth_PrescriptionAll.router);
// 注册添加我的健康处方路由
const wxAdd_MyHealth_prescription = require("./routers/wxapp/wx_Healthprescription/add my_prescription");
app.use(wxAdd_MyHealth_prescription.router);
// 注册删除我的健康处方路由
const wxDel_MyHealth_presscription = require("./routers/wxapp/wx_Healthprescription/del my_prescription");
app.use(wxDel_MyHealth_presscription.router);
//注册个人中心/新增地址路由
const AddAdress = require("./routers/roleCenter/addAdress");
app.use(AddAdress.router);
// 注册兑换积分的路由
const wxupload_Exchange = require("./routers/wxapp/wx_exchange/wx_exchange");
app.use(wxupload_Exchange.router);

// 注册添加基础资料的路由
const wxbasic_Information = require("./routers/wxapp/wx_Basic_Information/wx_Basic_Information");
app.use(wxbasic_Information.router);
// 注册编辑基础资料的路由
const wx_EditBasic_information = require("./routers/wxapp/wx_Basic_Information/wx_editBasic_Information");
app.use(wx_EditBasic_information.router);
// 注册获取编辑资料的路由
const wx_getBasic_Information = require("./routers/wxapp/wx_Basic_Information/wx_getBasic_Information");
app.use(wx_getBasic_Information.router);
// 注册获取所有疾病的路由
const wx_getbBasic_disease = require("./routers/wxapp/wx_uploadHealthArchives/wx_chose_disease");
app.use(wx_getbBasic_disease.router);

// 注册上传健康档案的路由
const wx_uploadHealthArchives = require("./routers/wxapp/wx_uploadHealthArchives/wx_uploadHealthArchives");
app.use(wx_uploadHealthArchives.router);
// 注册获取健康档案一条数据的路由
const wx_getHealthAchives = require("./routers/wxapp/wx_uploadHealthArchives/wx_getHealthArchivesOne");
app.use(wx_getHealthAchives.router);

//注册修改健康档案的一条数据的路由
const wx_editHealthAchives = require("./routers/wxapp/wx_uploadHealthArchives/wx_editHealthArchives");
app.use(wx_editHealthAchives.router);

//注册删除健康档案的一条数据的路由
const wx_delHealthAchives = require("./routers/wxapp/wx_uploadHealthArchives/wx_delHealthArchives");
app.use(wx_delHealthAchives.router);
// 注册获取一条名片的路由
const wx_getBusiness_card = require("./routers/wxapp/wx_business_card/wx_get_business_card_one");
app.use(wx_getBusiness_card.router);
// 注册编辑名片的路由
const wx_Business_card = require("./routers/wxapp/wx_business_card/wx_business_card");
app.use(wx_Business_card.router);
// app.use(require('./routers/shouye/简介轮播图/doctorbanner'))
app.use(router);
// const a = require('./routers/shouye/简介轮播图/doctorbanner')
app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// APP_PORT

// app.listen(3309, () => {
// 	console.log(`服务器启动成功：http://192.168.0.132:3309`);
// });
