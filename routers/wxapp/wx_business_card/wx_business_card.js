const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 编辑资料和新增资料功能
router.post('/BusinessCard', (req, res) => {
    const { id, realName, phone, company, position, other, description } = req.body
    if (id == "") {
        res.send(JSON.stringify({
            code: 403,
            msg: "缺少重要参数",
            data: {}
        }))
    } else {
        const selectMysql = 'select * from business_card where id = ?;'
        connection.query(selectMysql, id, (request, result) => {
            console.log(result);
            if (result[0].realName == "" || result[0].phone == "" || result[0].company == "" || result[0].position == "") {
                const data = [realName, phone, company, position, other, description]
                const addMysql = 'insert into business_card (realName, phone,company,position,other,description) values (?, ?, ?,?, ?, ?)';
                connection.query(addMysql, data, () => {
                    res.send(JSON.stringify({
                        code: 200,
                        msg: "添加成功",
                        data: {},
                    }))
                })
            } else {
                const eidtMysql = 'update business_card set realName=?,phone=?,company=?,position=?,other=?,description=? where id=?;'
                const data = [realName, phone, company, position, other, description, id];
                connection.query(eidtMysql, data, () => {
                    res.send(JSON.stringify({
                        code: 200,
                        msg: "修改成功",
                        data: {},
                    }))
                })
            }
        })
    }

})
module.exports.router = router;
