// 处理公司集团添加的逻辑
// 引入添加到数据库的函数
const {addcompanyData} =require('../service/companyservice')

class appController {
     // 处理增加公司名称的业务逻辑
  async hangleAddname(req,res){
    //接收用户传过来的数据
    //  公司名称信息是否存在
    // 判断数据库中是否存在添加信息
    // 将公司名称信息添加到数据库
    try {
      console.log('@@',req.body);
        const {companyname} =req.body
       await addcompanyData(companyname)
    res.send({
        code:'0',
        msg:'公司集团添加成功',
    })
    } catch (error) {
        console.log(error);
    }
    }
    
}

module.exports=new appController()