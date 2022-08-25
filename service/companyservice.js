// const db = require('../db/db');
const connections = require('../data/db')
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
        const statement = "insert into company_name (companyname) values (?)"
        const dbRes = await connections.execute(statement, [companyname])
        console.log('执行结果：', dbRes);
    }
    //获取公司集团名称
    async getcompanyList() {
        const statement = "select * from company_name"
        const dbRes = await connections.execute(statement)
        console.log('查询结果', dbRes);
        return dbRes[0]
    }
}

module.exports = new appservice()