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
        console.log(username,password);
    } else {
        const data = [username, md5(password)];
        const statement = `insert into user_name (username, password) values (?, ?);`;
        connection.query(statement, data, () => {
            console.log(111);
            res.send((JSON.stringify(
                {
                    code: 200,
                    massage: "添加成功",
                    data: {}
                }
            )))
        })
    }
})
module.exports.router = router;
