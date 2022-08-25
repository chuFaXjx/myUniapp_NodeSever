const express=require('express')
const router=express.Router()
const {handlegetzixunlist}=require('../../../controlls/getZixunMsg')
router.get('/getzixunlist',handlegetzixunlist)
module.exports=router