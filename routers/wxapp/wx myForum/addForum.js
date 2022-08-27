const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 添加论坛功能
router.post('/addforum', (req, res) => {
    let { name, introduction, imgUrl } = req.body
    const ImgFile = `http://localhost:3000/${imgUrl}`
    const data = [name,introduction,ImgFile]
    
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
