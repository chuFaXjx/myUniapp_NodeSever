const connections = require("../data/db")
class newMsgService{
    async getnewList() {
        const statement = "select * from newzixun";
        const dbRes = await connections.execute(statement);
        console.log('获取结果:', dbRes[0])
        return dbRes[0]
      }
}
module.exports=new newMsgService()