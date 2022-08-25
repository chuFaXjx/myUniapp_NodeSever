const connections = require("../data/db");

class userService {

// 查询轮播图数据
 async getTeamservice() {
    const statement = "select * from teambanner";
    const dbRes = await connections.execute(statement);
    console.log('获取名医工作室轮播图结果:', dbRes[0])
    return dbRes[0]
  }

  //  uploadAvatarByUserId(id, avatarUrl) {
  //   const statement = "update banner set avatar = ? where id = ?;";
  //   const dbRes =  connections.execute(statement, [avatarUrl, id]);
  //   return dbRes[0];
  // }
}

module.exports = new userService();