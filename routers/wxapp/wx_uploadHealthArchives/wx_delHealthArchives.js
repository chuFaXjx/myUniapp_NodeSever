const Login = require('../../../db/db');
const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 删除功能
router.delete('/delHealthArchives',(req, res) => {
    const selectMysql = 'select * from health_archives where id = ? ;'
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
                const delMysql = 'delete from health_archives where id = ?;'
                connection.query(delMysql,id,(re,rs)=>{
                    if(id){
                        res.send({
                            status:1,
                            message:"删除成功",
                            data:{}
                        })
                    }else{
                        res.send({
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
