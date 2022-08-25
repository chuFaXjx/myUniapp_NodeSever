const express=require('express')
const router=express.Router()
const upload = require("../../../util/upload");
const {handlegetteambanner}=require('../../../controlls/getTeamBanner')
router.get('/getteambanner',handlegetteambanner)
module.exports=router