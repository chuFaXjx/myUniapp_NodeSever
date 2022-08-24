const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康处方所有数据
router.get('/getforum', (req, res) => {
        const selectMysql = 'select * from my_forum;'
        connection.query(selectMysql,(request, result) => {
        console.log(result);
        res.send({
            code:0,
            msg:'获取数据成功',
            data:result,
        })
        })
})
module.exports.router = router;
