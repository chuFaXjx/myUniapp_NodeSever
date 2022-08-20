const Login = require('../../db/db');
const express = require('express');
const router = express.Router();
const connection = require('../../db/db');
const jwt = require('jsonwebtoken')
const secretKey = 'abcdefg ^_^'
let Token = ''
// 登录功能
router.post('/edituser', (req, res) => {
    const  id  = req.body.id;
    const  username  = req.body.username;
    const  password = req.body.password;
    if(id==''){
        res.send(JSON.stringify(
            {
                status:404,
                message:'传入参数有误',
                data:{}
            }
        ))
    }else{
        const selectMysql = 'select * from user_name where id=?  ;'
        connection.query(selectMysql, id,(request, result) => {
        console.log(result);
        if(result.length>0){
            const eidtMysql = 'update user_name set username=?,password=? where id=?;'
            const data = [username,password,id]
            console.log(data);
            connection.query(eidtMysql,data,(r,s)=>{
                res.send(JSON.stringify(
                    {
                        status: 0,
                        massage: "修改成功",
                        code: '200',
                        data: {
                            username: username,
                        },
                    }
                ));
            
            })
            // if (result[0].username === username && result[0].password === password) {
            
            // }
            } else {
                res.send(JSON.stringify(
                    {
                        status: 1,
                        massage: '数据库查找不到该数据',
                        code: '403',
                    }
                ))
            }
           
        })
    }
    
})
module.exports.router = router;
