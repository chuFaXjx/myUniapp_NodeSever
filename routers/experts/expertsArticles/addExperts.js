const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.post("/addExperts",(req,res)=>{
    // 获取添加参数
    console.log("body",req.body);
    const {articalHtml}=req.body;
    const data=[articalHtml];
    console.log("data",data);

    if (articalHtml=='') {
        res.send({
            code:404,
            msg:"添加失败，文章不能为空！",
            data:'',
        })
        return;
    }else{
        const addExperts='insert into experts (articalHtml) values (?);'
        // const add=connection.execute(addExperts,[title,content]);
        // console.log("add",add);
        connection.query(addExperts,data,(request, result)=>{
            res.send({
                code:0,
                msg:"文章添加成功",
                data:data[0],
            })
        })
    }
})

module.exports.router=router;