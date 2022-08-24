const express = require('express');
const Login = require('../../../db/db');
const router = express.Router();
const connection = require('../../../db/db');
const md5 = require('../../../util/md5');
// 注册功能
router.post('/api/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username == '' || password == '') {
        res.send(JSON.stringify(
            {
                status: 404,
                message: '注册的账户或者密码不能为空',
                data: {}
            }
        ))
    } else {
        const selectMysql = `select * from user_name WHERE username=?;`
        connection.query(selectMysql, username, (request, result) => {
            console.log("result", result);
            if (result.length > 0) {
                res.send(JSON.stringify(
                    {
                        status: -1,
                        massage: "用户已存在",
                        code: '404',
                    }
                ))
            } else {
                const statement = `insert into user_name (username, password) values (?, ?);`;
                const result = connection.execute(statement, [
                    username,
                    md5(password),
                ]);
                res.send((JSON.stringify(
                    {
                        code: 200,
                        massage: "添加成功",
                        data: {}
                    }
                )))
            }
    
        })
    }
})
module.exports.router = router;
