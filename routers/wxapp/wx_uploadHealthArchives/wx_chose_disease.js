const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取疾病中所有数据
router.get('/getdiseaseAll', (req, res) => {
        const selectMysql = 'select * from disease_basic;'
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
