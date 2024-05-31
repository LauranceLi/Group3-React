import express from 'express'
const router = express.Router()
import 'dotenv/config.js'
import sequelize from '#configs/db.js'
const { MembersInfo } = sequelize.models

// 這是處理購物車頁面的端點，接收使用者的 member_id 並返回相應的會員資訊
router.get('/', async (req, res) => {
  try {
    // 從請求查詢參數中獲取 member_id
    const member_id = req.query.member_id

    // 在 members_info 資料表中查詢是否存在對應的 member_id
    const memberInfo = await MembersInfo.findOne({
      where: {
        member_id: member_id,
      },
    })

    if (memberInfo) {
      // 如果存在對應的 member_id，返回成功狀態碼和找到的會員資訊
      res.status(200).json({ message: '會員存在', memberInfo })
    } else {
      // 如果不存在對應的 member_id，返回失敗狀態碼和相應訊息
      res.status(404).json({ message: '會員不存在' })
    }
  } catch (error) {
    console.error('查詢會員時出錯:', error)
    // 返回內部伺服器錯誤狀態碼和相應訊息
    res.status(500).json({ message: '內部伺服器錯誤', error })
  }
})

export default router
