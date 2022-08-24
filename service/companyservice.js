// const db = require('../db/db');
const connections = require('../db/db')
class appservice {
    // 查询数据库数据
    //    async getInfobycompany(companyname){
    //         const statement="select * from company_name where companyname=?" 
    //         const dbRes=await connections.execute(statement,companyname)
    //         console.log('查询结果',dbRes[0]);
    //         return dbRes[0]
    //     }
    // 添加数据
    async addcompanyData(companyname) {
        // sql语句,添加数据到数据库
        // console.log('@@@@@@', companyname);
        const statement = "insert into `company_name` (companyname) values (?)"
        connections.query(statement, companyname, function (err, results, fields) {
            if (err) {

            } else {
                res.status(200).send({
                    msg: '添加成功'
                })
            }
        })
        
    }
}

module.exports = new appservice()