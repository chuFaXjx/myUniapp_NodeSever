const { APP_PORT } = require('../data/config')
const {
  addAvatarData,
  getBannerData
} = require("../service/getBannermsg");
class userController {
  handleAddAvatart(req, res) {
    console.log(req.file);
    const { filename } = req.file;
    const avatar = `http://localhost:${APP_PORT}/${filename}`;
    addAvatarData(avatar);
    res.send({
      code: 0,
      msg: "轮播图像添加成功",
    });
  }
  async handlegetAvatart(req, res) {
    const result = await getBannerData();
    console.log(result);
    res.send({
      code: 0,
      msg: "轮播图像获取成功",
      data: result
    });
  }
}

module.exports = new userController()
