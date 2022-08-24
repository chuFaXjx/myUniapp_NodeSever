const express=require('express')
const router=express.Router()
const multer=require('multer')
const {hangleAddname}=require('../../../controlls/companycontroll')
router.post('/addDoctcompany',hangleAddname)
module.exports=router
