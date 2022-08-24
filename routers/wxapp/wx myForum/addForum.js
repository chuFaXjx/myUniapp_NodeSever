const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 添加论坛功能
router.post('/addforum', (req, res) => {
    const { name, introduction, imgUrl } = req.body
    const data = [name,introduction,imgUrl]
       
    
    if (name == "") {
        res.send({
            code: 404,
            msg: '添加失败',
            data: {},
        })
    } else {
        const addMysql = 'insert into my_forum (name, introduction,imgUrl) values (?, ?, ?);'
        connection.query(addMysql, data, (request, result) => {
            res.send({
                code: 0,
                msg: '添加数据成功',
                data: {}
            })
        })
    }
    
})
module.exports.router = router;
