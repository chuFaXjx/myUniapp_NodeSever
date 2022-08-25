const connections = require("../data/db")
class tabsService{
 async getTablist2(tab){
    console.log(tab);
    const statement = "insert into `tabs` (tab) values (?)"
    const dbRes = await connections.execute(statement, [tab])
    console.log('执行结果：', dbRes);
}
}
module.exports=new tabsService()