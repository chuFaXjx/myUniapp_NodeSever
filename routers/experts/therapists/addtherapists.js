const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.post("/addtherapists",(req,res)=>{
    // 获取添加参数
    console.log("body",req.body);
    const {title}=req.body;
    const data=[title];
    console.log("data",data);

    if (title=='') {
        res.send({
            code:404,
            msg:"添加失败，文章不能为空！",
            data:'',
        })
        return;
    }else{
        const addtherapists='insert into therapists (title) values (?);'
        // const add=connection.execute(addtherapists,[title,content]);
        // console.log("add",add);
        connection.query(addtherapists,data,(request, result)=>{
            res.send({
                code:0,
                msg:"文章添加成功",
                data:data[0],
            })
        })
    }
})

module.exports.router=router;