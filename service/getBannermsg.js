const connections = require("../data/db");

class userService {
  //  getUserInfoById(id) {
  //   const statement = "select id from banner where id = ?";
  //   const dbRes =  connections.execute(statement, [id]);
  //   return dbRes[0];
  // }
  async addAvatarData(avatar) {
    const statement = "insert into banner (avatar) values (?)"
    const dbRes = await connections.execute(statement, [avatar])
    console.log('执行结果：', dbRes)
}
// 查询轮播图数据
 async getBannerData() {
    const statement = "select * from banner";
    const dbRes = await connections.execute(statement);
    console.log('获取结果:', dbRes[0])
    return dbRes[0]
  }

  //  uploadAvatarByUserId(id, avatarUrl) {
  //   const statement = "update banner set avatar = ? where id = ?;";
  //   const dbRes =  connections.execute(statement, [avatarUrl, id]);
  //   return dbRes[0];
  // }
}

module.exports = new userService();