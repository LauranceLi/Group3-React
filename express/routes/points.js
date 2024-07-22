import express from 'express'
const router = express.Router()
import 'dotenv/config.js'
import sequelize from '#configs/db.js'
const { MembersInfo } = sequelize.models

router.get('/', async (req, res) => {
  try {
    // 從資料庫中獲取會員積分信息，以 member_id 作為搜尋條件
    const { member_id } = req.query // 從請求中獲取 member_id
    const queryOptions = {
      attributes: ['points'], // 假設會員積分信息存儲在 MemberInfo 表中
    }

    // 如果有 member_id，將其添加為搜尋條件
    if (member_id) {
      queryOptions.where = { member_id }
    }

    const memberPoints = await MembersInfo.findAll(queryOptions)
    res.json(memberPoints)
  } catch (error) {
    console.error('Error fetching member points:', error)
    res.status(500).json({ error: 'Error fetching member points' })
  }
})

export default router
