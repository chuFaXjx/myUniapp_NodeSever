const express = require("express");
const router = express.Router();
const connection = require("../../db/db");
// 获取所有省份
router.get("/getSheng", (req, res) => {
  // const {region_id} = req.body
  const selectMysql = "SELECT * FROM sys_address WHERE region_level=1;";
  connection.query(selectMysql, (request, result) => {
    console.log(result);
    res.send({
      code: 0,
      msg: "获取数据成功",
      data: result,
    });
  });
});
// 获取指定省份下的市
router.get("/getShengShi", (req, res) => {
  const { id } = req.query;
  const selectMysql = "SELECT * FROM sys_address WHERE region_parent_id=?;";
  connection.query(selectMysql, id, (request, result) => {
    console.log(result);
    res.send({
      code: 0,
      msg: "获取数据成功",
      data: result,
    });
  });
});
// 获取指定省市下边的县
router.get("/getShengShiXian", (req, res) => {
  const { id } = req.query;
  const selectMysql = "SELECT * FROM sys_address WHERE region_parent_id=?;";
  connection.query(selectMysql, id, (request, result) => {
    console.log(result);
    res.send({
      code: 0,
      msg: "获取数据成功",
      data: result,
    });
  });
});

module.exports.router = router;
