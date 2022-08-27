const Login = require('../../../db/db');
const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const {verifyToken}  = require('../../../util/token')
// 删除功能
router.delete('/api/deluser', verifyToken,(req, res) => {
    const selectMysql = 'select * from user_name where id = ? ;'
    const id = req.query.id;
    if(id==''){
        res.send({
            status:-1,
            message:'缺少重要参数',
            data:{},
        })
    }else{
        connection.query(selectMysql,id, (request,result)=>{
            // console.log(result);
            if(result==0){
                res.send({
                    status:-1,
                    message:'查询不到该数据',
                    data:{}
                })
            }else{
                const delMysql = 'delete from user_name where id = ?;'
                connection.query(delMysql,id,(re,rs)=>{
                    if(id){
                        res.send({
                            code:200,
                            status:1,
                            message:"删除成功",
                            data:{}
                        })
                    }else{
                        res.send({
                            code:404,
                            status:-1,
                            message:'删除失败',
                            data:{}
                        })
                    }
                })
            }
        });
    }

})
module.exports.router = router;
