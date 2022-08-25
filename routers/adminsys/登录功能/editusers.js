const Login = require('../../../db/db');
const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const md5 = require('../../../util/md5');
const {verifyToken}  = require("../../../util/token")

router.post('/edituser',verifyToken,  (req, res) => {
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
       connection.query(selectMysql, id, (request, result) => {
        console.log(result);
        if(result.length>0){
            const eidtMysql = 'update user_name set username=?,password=? where id=?;'
            const data = [username,md5(password),id]
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
