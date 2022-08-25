const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
// 编辑基本资料功能
router.post('/editBasicInformation', (req, res) => {
    const { id } = req.body
    const realName  =req.body.realName;
    const sex  =req.body.sex;
    const phone  =req.body.phone;
    const birth  =req.body.birth;
    const address  =req.body.address;
    if (id==="") {
        res.send(JSON.stringify({
            code: 404,
            msg: '缺少重要参数',
            data: {},
        }))
    } else {
        const selectMysql = 'select * from basic_information where id=?  ;'
        connection.query(selectMysql,id,(request,result)=>{
            console.log(result);
            if(result.length > 0){
                const editMysql = "update basic_information set realName=?,sex=?,phone=?,birth=?,address=? where id=?;"
                const data = [realName,sex,phone,birth,address,id]
                connection.query(editMysql,data,()=>{
                    res.send(JSON.stringify({
                        code:200,
                        msg:"修改成功",
                        data:{}
                    }))
                })
            }else{
                res.send(JSON.stringify({
                    code: 404,
                    msg: '查找不到该数据，修改失败',
                    data: {},
                }))
            }
        })
    }

})
module.exports.router = router;
