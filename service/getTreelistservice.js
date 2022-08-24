class getTreelistservice{
async addTabs(id,tablist){
// 增加tab数据的sql语句
const statement = "insert into `tabs` (id,tablist) values (?,?)"
connections.query(statement, (id,tablist), function (err, results, fields) {
    if (err) {
    } else {
        res.status(200).send({
            msg: '添加成功'
        })
    }
})
}
}
module.exports=new getTreelistservice()