const express=require('express')
const router=express.Router()
const {getCompanyName}=require('../../../controlls/companycontroll')
router.get('/doctcompany',getCompanyName)
module.exports=router