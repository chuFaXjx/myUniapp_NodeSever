const express=require('express')
const router=express.Router()
const upload = require("../../../util/upload");
const {handleGrid}=require('../../../controlls/gridlayout')
router.get('/gridlist',upload.single('gridimg'),handleGrid)
module.exports=router