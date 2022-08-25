const express=require('express')
const router=express.Router()
const multer=require('multer')
// const upload = multer({ dest: 'uploads/' })
const {verifyToken}=require('../../../middleware/companymiddleware')
const upload = require("../../../util/upload");
const {handleAddAvatart}=require('../../../controlls/getBanner')
const {handlegetAvatart}=require('../../../controlls/getBanner')
// router.get("/user", verifyToken, handleGetUserInfoById)
// 轮播图
router.post('/doctorbanner', upload.single('avatar'),handleAddAvatart)
router.get('/getdoctorbanner',handlegetAvatart)
module.exports=router