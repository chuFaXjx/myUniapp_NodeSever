const express = require("express");
const router = express.Router();
const connection = require("../../db/db");
// 添加地址
router.post("/addAdress", (req, res) => {
  const { name, phone, adress, moreAdress } = req.body;
  const data = [name, phone, adress, moreAdress];
  if (name === "" || phone === "" || adress === "" || moreAdress === "") {
    res.send(
      JSON.stringify({
        code: 404,
        msg: "新增失败",
        data: {},
      })
    );
  } else {
    const addMysql =
      "insert into addadress (name, phone, adress,moreAdress) values (?,?,?,?);";
    connection.query(addMysql, data, (request, result) => {
      res.send({
        code: 0,
        msg: "地址添加成功",
        data: {},
      });
    });
  }
});
//删除地址
router.delete("/delAdress", (req, res) => {
  const { id } = req.query;
  if (id == "") {
    res.send(
      JSON.stringify({
        code: 404,
        msg: "缺少参数",
        data: {},
      })
    );
  } else {
    const selectMysql = "select * from addadress where id=?;";
    const data = [id];
    connection.query(selectMysql, data, (request, result) => {
      console.log(result);
      if (result.length > 0) {
        const delMysql = "delete from addadress where id = ?;";
        connection.query(delMysql, data, () => {
          res.send({
            code: 0,
            msg: "删除成功",
            data: {},
          });
        });
      } else {
        res.send({
          code: 405,
          msg: "删除数据失败",
          data: {},
        });
      }
    });
  }
});
// 获取一条地址
router.get("/getoneAdress", (req, res) => {
  const { id } = req.query;
  const selectMysql = "select * from addadress where id=?;";
  connection.query(selectMysql, id, (request, result) => {
    if (result.length > 0) {
      res.send({
        code: 0,
        msg: "获取数据成功",
        data: result,
      });
    } else {
      res.send({
        code: -1,
        msg: "找不到该用户",
        data: result,
      });
    }
  });
});
// 获取所有地址
router.get("/getAdress", (req, res) => {
  const selectMysql = "select * from addadress;";
  connection.query(selectMysql, (request, result) => {
    console.log(result);
    res.send({
      code: 0,
      msg: "获取数据成功",
      data: result,
    });
  });
});
module.exports.router = router;
