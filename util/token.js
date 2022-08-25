const jwt = require('jsonwebtoken');
const { TOKEN_SECRETKEY } = require("../config/config");
const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(authorization);
  if (!authorization) {
    res.status(401).send({
      code: -1,
      msg: "Token不存在",
    });
    return;
  }
  // console.log(req.userInfo);
  const token = authorization;
  try {
    // 解析Token
    const decoded = jwt.verify(token, TOKEN_SECRETKEY);
    // console.log(decoded);
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
module.exports = {verifyToken}
