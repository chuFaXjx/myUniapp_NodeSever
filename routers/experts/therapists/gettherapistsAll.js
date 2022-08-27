const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取疗法专栏数据全部数据
router.get('/gettherapistsAll', (req, res) => {
    const selectMysqltherapists = 'select * from therapists;'
    connection.query(selectMysqltherapists,(request, result) => {
    console.log(result);
    res.json({
        code:0,
        msg:'获取数据成功',
        data:result,
    })
    })
})
module.exports.router = router;