const connections = require("../data/db");
class getdetaoil{
// 查询网格数据
async getgridlist() {
    const statement = "select * from grids";
    const dbRes = await connections.execute(statement);
    console.log('获取网格结果：', dbRes)
    return dbRes[0]
  }
}
module.exports=new getdetaoil()