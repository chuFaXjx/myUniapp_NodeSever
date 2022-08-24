const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康处方所有数据
router.get('/getprescriptionAll', (req, res) => {
        const selectMysql = 'select * from health_prescription;'
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
