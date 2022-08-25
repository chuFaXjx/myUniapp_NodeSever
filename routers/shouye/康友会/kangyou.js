const express=require('express')
const router=express.Router()
const {handleTabCheck}=require('../../../controlls/getTabs')

router.post('/getTabs',handleTabCheck)
module.exports=router