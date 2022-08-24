const express=require('express')
const router=express.Router()
// 注册获取医生集团接口
router.use(require('./shouye/医生集团/getCompany'))
// 注册添加医生集团信息的接口
router.use(require('./shouye/医生集团/addCompany'))
module.exports=router