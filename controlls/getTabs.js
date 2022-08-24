const {getTablist2} =require('../service/getTabsService')
class getTablist{
async handleTabCheck(req,res){
    const { id } = req.userInfo;
 const tab_res=await getTablist2(id)
 
    res.send({
        code: 0,
        msg: "请求tab栏成功",
        data: tab_res,
      });
}
}
module.exports=new getTablist()