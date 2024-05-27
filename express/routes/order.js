import express from 'express'
import sequelize from '#configs/db.js'
const { Order, OrderDetail } = sequelize.models

const router = express.Router()

router.post('/', async (req, res) => {
  const {
    name,
    email,
    mobile,
    recipientName,
    recipientMobile,
    paymentMethod,
    invoiceType,
    invoiceValue,
    shippingMethod,
    country,
    township,
    shippingAddress,
    store711,
    items, // 從前端獲取的購物車商品資訊
  } = req.body
  const { storeaddress, storeid, storename } = store711
  // 使用事務
  const transaction = await sequelize.transaction()
  const generateTransactionID = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // 月份從0開始，所以加1
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0')

    return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`
  }
  const transactionID = generateTransactionID()

  try {
    // 假設 member_id 是已知的，這裡我們假設為 '20150221008'
    const memberId = '20150221008'

    // 創建訂單
    await Order.create(
      {
        member_id: memberId,
        transaction_id: transactionID,
        name: name,
        email: email,
        mobile: mobile,
        recipient_name: recipientName,
        recipient_mobile: recipientMobile,
        shipping_method: shippingMethod,
        country: country,
        township: township,
        shipping_address: shippingAddress,
        payment_method: paymentMethod,
        invoice_type: invoiceType,
        invoice_value: invoiceValue,
        store_address: storeaddress,
        store_id: storeid,
        store_name: storename,
        // 其他訂單相關欄位
      },
      { transaction }
    )

    // 創建訂單詳細資料
    let totalAmount = 0
    for (const item of items) {
      const { id, name, price, qty } = item
      const itemTotal = price * qty
      totalAmount += itemTotal

      await OrderDetail.create(
        {
          member_id: memberId,
          transaction_id: transactionID,
          product_id: id,
          product_name: name,
          quantity: price,
          unit_price: qty,
          // 其他訂單詳細資料相關欄位
        },
        { transaction }
      )
    }
    await Order.update(
      { total_amount: totalAmount },
      {
        where: { transaction_id: transactionID },
        transaction,
      }
    )
    // 提交事務
    await transaction.commit()

    res.json({ message: '訂單已創建成功' })
  } catch (error) {
    // 回滾事務
    await transaction.rollback()

    console.error('提交訂單時出錯:', error)
    res.status(500).json({ message: '提交訂單時出錯', error })
  }
})

export default router
