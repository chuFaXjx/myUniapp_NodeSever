const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 获取健康处方所有数据
router.post('/addMyprescription', (req, res) => {
    const id = req.body.id
    if(id==''){
        res.send({
            code:403,
            msg:"缺少重要参数",
            data:{}
        })
    }else{
    const data = [id];
    const selectMysql = 'select drugName,cycle,imgUrl,effect,price from health_prescription where id = ?;'
    connection.query(selectMysql,data,(request, result) => {
        // console.log(result);
        if(result.length>0){
            const addMysql = 'insert into my_health_prescription (drugName, cycle,imgUrl,effect,price) values (?, ?,?,?,?);'
            const addData = [result[0].drugName,result[0].cycle,result[0].imgUrl,result[0].effect,result[0].price]
            // console.log(addData);
            connection.query(addMysql,addData,(rq,rs)=>{
                console.log(rs);
                res.send({
                    code:200,
                    msg:"添加成功"
                })
            })
        }else{
            res.send({
            code: 405,
            msg: '查不到该数据',
            data: {},
        })
        }
        // res.send({
        //     code: 0,
        //     msg: '获取数据成功',
        //     data: {},
        // })
    })
    }
    
})
module.exports.router = router;
