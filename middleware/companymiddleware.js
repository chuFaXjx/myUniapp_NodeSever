// 处理用户请求到响应的过程中的逻辑判断
const jwt = require("jsonwebtoken");
const { getInfobycompany } = require('../service/companyservice')
const { TOKEN_SECRETKEY } = require("../config");
const verifyGetCompanyname = async(req, res, next) => {
    //从数据库查询是否有公司集团信息
    try {
        const dbRes=await getInfobycompany(compamyname)
        if (dbRes.length !== 0) {
            res.send({
                code: 0,
                msg: '公司集团存在'
            })
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: -1,
            msg: '服务器发生错误'
        })
    }
    next()
}
// 增加数据中间件
const verifyAdd = async (req, res, next) => {
    // 1、获取到前端传过来的数据
    // 2、判断数据是否存在
    // 3、判断该公司集团是否存在
    const {compamyname } = req.body;
  console.log(compamyname);
    if (!compamyname) {
      res.status(401).json({
        code: -1,
        msg: "公司集团名称不能为空",
      });
      return;
    }
  
    const dbRes = await getInfobycompany(compamyname);
    if (dbRes.length === 0) {
      res.status(401).json({
        code: -1,
        msg: "公司集团名称不存在，请添加",
      });
  
      return;
    }
    next();
  };
  // 校验Token
const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send({ 
      code: -1,
      msg: "Token不存在",
    });

    return;
  }

  const token = authorization.replace("Bearer ", "");
  try {
    // 解析Token
    const decoded = jwt.verify(token, TOKEN_SECRETKEY);
    req.userInfo = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      code: -1,
      msg: "无效的token",
    });
    return;
  }
};
module.exports = {
    verifyGetCompanyname,
    verifyAdd,
    verifyToken
}