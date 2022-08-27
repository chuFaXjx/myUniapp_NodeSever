const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const {verifyToken}  = require('../../../util/token')

// 获取角色列表
router.get('/api/getuser',verifyToken,(req, res) => {
        const selectMysql = 'select * from user_name;'
        connection.query(selectMysql,(request, result) => {
        console.log(result);
        res.send({
            code:200,
            msg:'获取数据成功',
            data:result,
        })
        })
})

router.get('/api/getuserone', verifyToken,(req, res) => {
    const selectMysql = 'select * from user_name where id = ?;'
    const {id} = req.query
    connection.query(selectMysql,id,(request, result) => {
    console.log(result);
    res.send({
        code:200,
        msg:'获取数据成功',
        data:result,
    })
    })
})

module.exports.router = router;
