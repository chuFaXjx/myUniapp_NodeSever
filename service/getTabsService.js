const connections = require("../db/db")
class tabsService{
async getTablist2(id,tab){
    const statement = "insert into `tabs` (id,tab) values (?,?)"
    connections.query(statement, (id,tab), function (err, results, fields) {
        if (err) {

        } else {
            res.status(200).send({
                msg: '添加成功'
            })
        }
    })
}
}
module.exports=new tabsService()