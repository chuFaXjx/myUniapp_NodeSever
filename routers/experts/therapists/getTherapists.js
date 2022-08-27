const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');


// 获取疗法专栏一条数据
router.get('/gettherapists', (req, res) => {
    const {id} = req.query;
    if (id=="") {
        res.send(JSON.stringify({
            code:403,
            msg:'缺少重要参数',
            data:{}
        }))
    } else {
        const selectMysqltherapists = 'select * from therapists where id=?;'
        connection.query(selectMysqltherapists,id,(request, result) => {
        res.send({
            code:0,
            msg:'获取数据成功',
            data:result,
        })
        })
    }
      
})
module.exports.router = router;