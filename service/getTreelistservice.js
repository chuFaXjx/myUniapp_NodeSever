const connections = require("../data/db")
class getTreelistservice {
    async addTabs(tablist) {
        // 增加tab数据的sql语句
        const statement = "insert into `treetabs` (tablist) values (?)"
        const dbRes = await connections.execute(statement, [tablist])
        console.log('执行结果：', dbRes);
    }
}
module.exports = new getTreelistservice()