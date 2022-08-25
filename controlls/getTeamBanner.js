const { APP_PORT } = require('../config')
const {
  getTeamservice
} = require("../service/getbannerImg");
class userController {
  async handlegetteambanner(req, res) {
    const result = await getTeamservice();
    res.send({
      code: 0,
      msg: "轮播图像获取成功",
      data: result
    });
  }
}

module.exports = new userController()
