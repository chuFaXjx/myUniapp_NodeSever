class getfitTabs{
async gettreeTabs(req,res){
   try {
    const {tablist}=req.body
    await addTabs(tablist)
   } catch (error) {
    console.log(error);
   }
 res.send({
    code:0,
    msg:'获取公益健康ta栏',
})
}
}
module.exports=new getfitTabs()