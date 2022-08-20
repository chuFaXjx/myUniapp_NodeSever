const express = require('express');
const Login = require('../../db/db');
const router = express.Router();
const connection = require('../../db/db');
// 注册功能
router.post('/api/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log('username', username);
    // console.log('password', password);
    if (username == '' || password == '') {
        res.send(JSON.stringify(
            {
                status: 404,
                message: '注册的账户或者密码不能为空',
                data: {}
            }
        ))
    } else {
        // async function addUser(userInfo) {
        //     const statement = `insert into user (username, password) values (?, ?);`;
        //     const result = await connection.execute(statement, [
        //       userInfo.username,
        //       userInfo.password,
        //     ]);
        //     return result[0];
        //   }
        // }
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
                    password,
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
