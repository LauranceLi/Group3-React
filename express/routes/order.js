import express from 'express'
import sequelize from '#configs/db.js'
const { Order, OrderDetail, MembersInfo } = sequelize.models

const router = express.Router()

router.post('/', async (req, res) => {
  const {
    memberId,
    name,
    email,
    mobile,
    recipientName,
    recipientMobile,
    paymentMethod,
    discountAmount,
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
    // const memberId = '20150221008'
    // 更新訂單狀態函式
    const paymentStatus = paymentMethod === '貨到付款' ? '未付款' : '已付款'
    const shippingStatus = '未出貨'
    const orderStatus = '已成立'

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
        discount: discountAmount,
        payment_status: paymentStatus,
        shipping_status: shippingStatus,
        order_status: orderStatus,
        // 其他訂單相關欄位
      },
      { transaction }
    )

    // 創建訂單詳細資料
    let totalAmount = 0
    for (const item of items) {
      const { id, name, title, price, qty } = item
      const itemTotal = price * qty
      totalAmount += itemTotal

      await OrderDetail.create(
        {
          member_id: memberId,
          transaction_id: transactionID,
          product_id: id,
          product_name: name || title,
          quantity: qty,
          unit_price: price,
          // 其他訂單詳細資料相關欄位
        },
        { transaction }
      )
    }
    // 更新
    await Order.update(
      { total_amount: totalAmount },
      {
        where: { transaction_id: transactionID },
        transaction,
      }
    )
    await Order.update(
      { net_total: totalAmount - discountAmount },
      {
        where: { transaction_id: transactionID },
        transaction,
      }
    )

    // 使用 Sequelize 查詢特定 member_id 的 points
    MembersInfo.findOne({
      attributes: ['points'], // 只選擇 points 欄位
      where: { member_id: memberId }, // 指定查詢條件
    })
      .then(async (memberInfo) => {
        if (memberInfo) {
          // 如果找到對應的 memberInfo，則打印 points
          console.log('Member points:', memberInfo.points)

          // 更新會員的積分，將已使用的積分從總積分中扣除
          const updatedPoints = memberInfo.points - discountAmount * 300

          // 執行更新操作
          await MembersInfo.update(
            { points: updatedPoints },
            { where: { member_id: memberId } }
          )
          res.json({
            message: memberInfo.points,
            discountAmount,
            updatedPoints,
          })
          console.log('Member points updated successfully')
        } else {
          console.log('Member not found')
        }
      })
      .catch((error) => {
        console.error('Error fetching member points:', error)
      })
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
