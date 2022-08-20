const Login = require('../../db/db');
const express = require('express');
const router = express.Router();
const connection = require('../../db/db');
const jwt = require('jsonwebtoken')
const secretKey = 'abcdefg ^_^'
let Token = ''
// 登录功能
router.post('/api/login', (req, res) => {
    const  username  = req.body.username;
    const  password = req.body.password;
    if(username==''||password==''){
        res.send(JSON.stringify(
            {
                status:404,
                message:'账户或者密码不能为空',
                data:{}
            }
        ))
    }else{
        const selectMysql = 'select * from user_name where username = ? and password = ?  ;'
        const data =[username,password]
        console.log("data",data);
        connection.query(selectMysql, data,(request, result) => {
        console.log(result);
        if(result.length>0){
            if (result[0].username === username && result[0].password === password) {
                res.send(JSON.stringify(
                    {
                        status: 0,
                        massage: "登入成功",
                        code: '200',
                        data: {
                            username: username,
                        },
                        token: jwt.sign({ username: req.body.username}, secretKey, { expiresIn: '24h' }),
                    }
                ));
            }
            } else {
                res.send(JSON.stringify(
                    {
                        status: 1,
                        massage: '账号或密码错误',
                        code: '404',
                    }
                ))
            }
           
        })
    }
    
})
module.exports.router = router;
