import express from 'express'
import sequelize from '#configs/db.js'
const { Order, OrderDetail } = sequelize.models

const router = express.Router()

router.get('/', async (req, res) => {
  const { memberId } = req.params
  console.log(memberId)
  try {
    const { memberId } = req.query
    // 查找 Orders
    const orders = await Order.findAll({
      where: { member_id: memberId },
    })

    // 查找 OrderDetails
    const orderDetails = await OrderDetail.findAll({
      where: { member_id: memberId },
    })

    res.json({
      orders,
      orderDetails,
    })
  } catch (error) {
    console.error('Error fetching orders or order details:', error)
    res.status(500).json({
      error: 'Error fetching orders or order details',
      details: error.message,
    })
  }
})

export default router
