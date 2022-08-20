const jwt = require('jsonwebtoken');
const secretKey = 'abcdefg ^_^'
function TokenVal(token,req,res){
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          console.log("token校验出错了：", err);
        }
        if (decoded.username) {
          console.log("解析后的token信息：", decoded);
        }
      });
};
module.exports = TokenVal