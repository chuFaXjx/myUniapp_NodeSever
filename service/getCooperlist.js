const connections = require("../data/db")
class newMsgService{
    async getCooperateList() {
        const statement = "select * from cooperdesc";
        const dbRes = await connections.execute(statement);
        console.log('获取结果:', dbRes[0])
        return dbRes[0]
      }
}
module.exports=new newMsgService()