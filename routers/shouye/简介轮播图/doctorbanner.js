const express=require('express')
const router=express.Router()
const multer=require('multer')

const {verifyToken}=require('../../../middleware/companymiddleware')
const uploadutils = require("../../../util/upload");
const {handleUploadAvatart,handleGetUserInfoById}=require('../../../controlls/getBanner')
router.get("/user", verifyToken, handleGetUserInfoById)
      .post('/doctorbanner',verifyToken, uploadutils.single('avatar'),handleUploadAvatart)
module.exports=router