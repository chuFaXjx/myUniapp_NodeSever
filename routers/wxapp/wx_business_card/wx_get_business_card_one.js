const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取名片一条数据
router.get('/getBusinessCard', (req, res) => {
    const {id} = req.query
    if(id===""){
        res.send(JSON.stringify({
            code:403,
            msg:"缺少重要参数",
            data:{}
        }))
    }else{
        const selectMysql = 'select * from business_card where id = ?;'
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
