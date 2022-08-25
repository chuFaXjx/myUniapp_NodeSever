const express=require('express')
const router=express.Router()
const {handlecooperate}=require('../../../controlls/getCooperate')
router.get('/getCooperatelist',handlecooperate)
module.exports=router