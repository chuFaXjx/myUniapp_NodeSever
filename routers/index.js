const express=require('express')
const router=express.Router()
// 注册获取医生集团接口
router.use(require('./shouye/医生集团/getCompany'))
// 注册添加医生集团信息的接口
router.use(require('./shouye/医生集团/addCompany'))
router.use(require('./shouye/简介轮播图/doctorbanner'))
router.use(require('./shouye/康友会/kangyou'))
router.use(require('./shouye/公益健康/gongyi'))
router.use(require('./shouye/teambanner/getteambanner'))
router.use(require('./shouye/网格数据/grids'))
router.use(require('./shouye/zixun/zixun'))
router.use(require('./shouye/cooperate/cooperate'))
module.exports=router