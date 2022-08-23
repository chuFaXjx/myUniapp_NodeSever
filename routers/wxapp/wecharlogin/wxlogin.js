const express = require("express");
const router = express.Router();
// 使用https模块向微信服务器发送网络请求
const https = require("https");

const { WX_APPID, WX_APPSECRET } = require('../../../config/config')

// 处理微信登录
router.get("/wxlogin", (request, result) => {
  // 获取前端传过来的code值
  const { code } = request.query;
  console.log(code);
  // 微信小程序APPID
  const appid = WX_APPID;
  // 微信小程序秘钥
  const secret = WX_APPSECRET;
  // 使用https模块发送get网络请求
  https
    .get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        // 接收数据完毕
        res.on("end", () => {
          // console.log("@@@：", JSON.parse(data));
          /* 
            openid：微信用户的唯一标识
            session_key：
          */
          const { openid, session_key } = JSON.parse(data);
          console.log(openid, session_key);
          let Data = {};
          Data.openid = openid;
          Data.session_key = session_key
          // 生成token，返回给前端
          result.send({
            code: 0,
            msg: "wx登录成功",
            data: Data,
          });

        });
      }
    )
    .on("error", (err) => {
      console.log("请求失败了: ", err.message);
    });
});

module.exports = router;

