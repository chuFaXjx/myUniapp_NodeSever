const express = require("express");
const router = express.Router();
// const connection = require("../../../db/db");

router.post("/addadress", (req, res) => {
  console.log(req.body);
  res.json({
    code: 0,
    msg: "请求成功",
    data: {
      sheng: "河南",
      city: "郑州",
      qu: "高新区", 
    },
  });
});

module.exports.router = router;
