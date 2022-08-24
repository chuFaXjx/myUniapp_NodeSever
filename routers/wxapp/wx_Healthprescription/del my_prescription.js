const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康处方所有数据
router.delete('/delprescriptionons', (req, res) => {
        const {id} = req.query;
        if(id ==''){
            res.send({
                code:403,
                msg:'缺少重要参数',
            })
        }else{
            const selectMysql = 'select * from health_prescription where id=?;'
            const data = [id];
            connection.query(selectMysql,data,(request, result) => {
                console.log(result);
            if(result.length>0){
                const delMysql = 'delete from my_health_prescription where id = ?;'
                connection.query(delMysql,data,()=>{
                    res.send({
                        code:0,
                        msg:"删除数据成功",
                        data:{},
                    })
                })
            }
            else{
                res.send({
                    code:405,
                    msg:"删除数据失败",
                    data:{}
                })
            }
            })
        }
       
})
module.exports.router = router;
