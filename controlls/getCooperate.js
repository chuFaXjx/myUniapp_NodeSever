const { APP_PORT } = require('../config')
const {
    getCooperateList
} = require("../service/getCooperlist");
class userController {
  async handlecooperate(req, res) {
    const result = await getCooperateList();
    res.send({
      code: 0,
      msg: "资讯信息获取成功",
      data: result
    });
  }
}

module.exports = new userController()