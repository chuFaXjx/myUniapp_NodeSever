const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康档案中一条数据
router.get('/getHealthArchivesOne', (req, res) => {
    const {id} = req.query
    if(id===""){
        res.send(JSON.stringify({
            code:403,
            msg:"缺少重要参数",
            data:{}
        }))
    }else{
        const selectMysql = 'select * from health_archives where id = ?;'
        connection.query(selectMysql,id,(request, result) => {
        console.log(result);
        res.send(JSON.stringify({
            code:0,
            msg:'获取数据成功',
            data:result,
        }))
        })
    }
        
})
module.exports.router = router;
