const { getTablist2 } = require('../service/getTabsService')
class getTablist {
  async handleTabCheck(req, res) {
    const { tab } = req.body
    console.log('@@@',tab);
    try {
      await getTablist2(tab)
      res.send({
        code: 0,
        msg: "请求tab栏成功",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new getTablist()