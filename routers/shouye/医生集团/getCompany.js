const express=require('express')
const router=express.Router()
router.get('/doctcompany',(req,res)=>{
    res.send({
        code:0,
        msg:'获取名称成功'
    })
})
module.exports=router