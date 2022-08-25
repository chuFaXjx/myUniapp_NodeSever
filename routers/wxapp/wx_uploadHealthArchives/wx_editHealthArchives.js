const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 上传健康档案
router.post('/eidtHealthArchives', (req, res) => {
    const { id, type, description, imgUrl } = req.body;
    const avatarUrl = `http://localhost:3000/${imgUrl}`;
    const data = [type, description, avatarUrl, id]
    if (type == '' || id == "") {
        res.send(JSON.stringify({
            code: 403,
            msg: "缺少重要参数",
            data: {}
        }))
    } else {
        const selectMysql = 'select * from health_archives where id = ?;'
        connection.query(selectMysql, id, (request, result) => {
            console.log(result);
            if (result.length > 0) {
                const editMysql = 'update health_archives set type=?,description=?,imgUrl=? where id=?;';
                connection.query(editMysql, data, () => {
                    res.send(JSON.stringify({
                        code: 200,
                        msg: "修改成功",
                        data: {}
                    }))
                })
            }else{
                res.send(JSON.stringify({
                    code:404,
                    msg:"数据库中查不到该数据",
                    data:{}
                }))
            }
        })

    }


})
module.exports.router = router;
