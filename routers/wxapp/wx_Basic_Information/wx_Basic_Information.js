const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 添加基本资料功能
router.post('/addBasicInformation',  (req, res) => {
    const { realName, sex, phone, birth, address } = req.body
    const data = [realName, sex, phone, birth, address]
    if (realName === "" || sex === "" || phone === "" || birth=="" || address == "") {
        res.send(JSON.stringify({
            code: 404,
            msg: '保存失败',
            data: {},
        }))
    } else {
        // console.log(data);
        const addMysql = 'insert into basic_information (realName, sex,phone,birth,address) values (?, ?, ?,?,?);'
        connection.query(addMysql, data, (request, result) => {
            res.send(JSON.stringify({
                code: 0,
                msg: '基本资料保存成功',
                data: {}
            }))
        })
    }

})
module.exports.router = router;
