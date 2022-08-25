const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 上传健康档案
router.post('/addHealthArchives', (req, res) => {
    const {type,description,imgUrl} = req.body;
    const avatarUrl = `http://localhost:3000/${imgUrl}`;
    const data = [type,description,avatarUrl];
    if(type===""){
        res.send(JSON.parse({
            code:403,
            msg:"缺少重要参数，添加失败",
            data:{}
        }))
    }else{
        const addMysql = 'insert into health_archives (type, description,imgUrl) values (?, ?, ?);' 
        connection.query(addMysql,data,(request,result)=>{
            res.send({
                code:200,
                msg:"添加成功",
                data:{}
            })
        })
    }
    
})
module.exports.router = router;
