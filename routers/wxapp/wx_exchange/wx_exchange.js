const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 积分兑换
router.post('/uploadExchange', (req, res) => {
    const { realName, phone, wxUser, alipayUser, points, description } = req.body
    const data = [realName, phone, wxUser, alipayUser, points, description]
    if (realName === "" || phone === "" || wxUser === "" || alipayUser=="" || points == "") {
        res.send({
            code: 404,
            msg: '上传失败',
            data: {},
        })
    } else {
        // console.log(data);
        const addMysql = 'insert into exchange (realName, phone,wxUser,alipayUser,points,description) values (?, ?, ?,?,?,?);'
        connection.query(addMysql, data, (request, result) => {
            res.send({
                code: 0,
                msg: '上传数据成功',
                data: {}
            })
        })
    }

})
module.exports.router = router;
