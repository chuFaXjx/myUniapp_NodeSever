const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康处方所有数据
router.get('/getBasicInformation', (req, res) => {
        const {id} = req.query
        if(id===""){
            res.send(JSON.parse({
                code:404,
                msg:"缺少重要参数",
                data:{}
            }))
        }else{
            const selectMysql = 'select * from basic_information where id=?;'
            connection.query(selectMysql,id,(request, result) => {
            console.log(result);
            res.send({
                code:0,
                msg:'获取数据成功',
                data:result,
            })
            })
        }
       
})
module.exports.router = router;
