const { getgridlist } = require('../service/getgrid')
class appController {
    async handleGrid(req, res) {
        const result =await getgridlist();
        res.send({
            code: 0,
            msg: "网格数据获取成功",
            data: result
        });
    }
}
module.exports = new appController()