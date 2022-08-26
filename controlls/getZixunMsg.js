const { APP_PORT } = require('../data/config')
const {
 getnewList
} = require("../service/getzixunmsglist");
class userController {
  async handlegetzixunlist(req, res) {
    const result = await getnewList();
    res.send({
      code: 0,
      msg: "资讯信息获取成功",
      data: result
    });
  }
}

module.exports = new userController()