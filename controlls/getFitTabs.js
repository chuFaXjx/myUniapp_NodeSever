const { addTabs } = require('../service/getTreelistservice')
class getfitTabs {
   async gettreeTabs(req, res) {
      try {
         const { tablist } = req.body
         await addTabs(tablist)
         res.send({
            code: 0,
            msg: '获取公益健康tab栏',
         })
      } catch (error) {
         console.log(error);
      }
      
   }
}
module.exports = new getfitTabs()