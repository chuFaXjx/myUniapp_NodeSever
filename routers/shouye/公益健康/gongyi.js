const express=require('express')
const router=express.Router()
const {gettreeTabs}=require('../../../controlls/getFitTabs')
router.post('/getfit',gettreeTabs)
module.exports=router