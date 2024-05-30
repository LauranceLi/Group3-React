import express from 'express'
const router = express.Router()
import 'dotenv/config.js'
import sequelize from '#configs/db.js'
const { Cart } = sequelize.models

router.post('/', async (req, res) => {
  console.log('原始請求數據:', req.body)
  const { items } = req.body // 獲取items數組
  console.log(items)
  try {
    // 假設 member_id 是已知的，這裡我們假設為 '20150221008'
    const memberId = '20150221008'

    for (const item of items) {
      const { id, name, price, qty } = item

      await Cart.create({
        member_id: memberId,
        product_id: id,
        product_name: name,
        quantity: price,
        unit_price: qty,
      })
    }
    res.json({ message: '已放入購物車', formData: req.body })
  } catch (error) {
    console.error('提交表單時出錯:', error)
    res.status(500).json({ message: '提交表單時出錯', error })
  }
})

export default router
