import React, { useEffect, useState } from 'react'

function OrderQueryNew() {
  const [orderData, setOrderData] = useState({ orders: [], orderDetails: [] })
  // const memberId = localStorage.getItem('member_id'); // 从本地存储中获取 member_id
  const memberId = '20150221008' // 替换成你要查詢的會員 ID

  useEffect(() => {
    fetch(`http://localhost:3005/api/order_query/${memberId}`)
      .then((response) => response.json())
      .then((data) => {
        // 获取最新的一笔订单
        if (data.orders.length > 0) {
          const latestOrder = data.orders.reduce((latest, order) => {
            return new Date(order.created_at) > new Date(latest.created_at)
              ? order
              : latest
          }, data.orders[0])

          // 获取该订单的详细信息
          const latestOrderDetails = data.orderDetails.filter(
            (detail) => detail.transaction_id === latestOrder.transaction_id
          )

          setOrderData({
            orders: [latestOrder],
            orderDetails: latestOrderDetails,
          })
        }
      })
      .catch((error) => console.error('Error fetching order data:', error))
  }, [memberId])

  // 组合最新的订单和订单详情
  const latestOrder = orderData.orders[0]
  const details = orderData.orderDetails

  return (
    <>

    <div>
      {latestOrder ? (
        <div key={latestOrder.transaction_id}>
        <div className="mt-2 mb-2">
          <h5 className="bottom-line d-inline">
            交易編號: {latestOrder.transaction_id}
          </h5>
        </div>
          {/* <div>
            <div className="d-flex">
              <div className="travel-saleitem">商品名稱</div>
              <div className="me-4 unit-price text-center">數量</div>
              <div className="me-4 unit-price text-center">單價</div>
            </div>
            {details.map((detail) => (
              <div key={detail.detail_id} className="d-flex mb-3">
                <p className="travel-saleitem"> {detail.product_name}</p>
                <p className="me-4 unit-price text-center">{detail.quantity}</p>
                <p className="me-4 unit-price text-center">
                  {detail.unit_price}
                </p>
              </div>
            ))}
          </div> */}
          <div className="d-flex">
            <p className="view_whitecolor">訂單金額: {latestOrder.net_total}</p>
          </div>
          <p className="view_whitecolor">
            送貨地址:
            {latestOrder.country}
            {latestOrder.township}
            {latestOrder.shipping_address}
            {latestOrder.store_name}
            {latestOrder.store_address}
          </p>
          <p className="view_whitecolor">下單時間: {new Date(latestOrder.created_at).toLocaleString()}</p>
          <p className="view_whitecolor">
            訂單狀態:
            <span className="m-2 view_whitecolor">{latestOrder.order_status}</span>
            <span className="m-2 view_whitecolor">{latestOrder.payment_status}</span>
            <span className="m-2 view_whitecolor">{latestOrder.shipping_status}</span>
          </p>
          <hr />
        </div>
      ) : (
        <p className="view_whitecolor">暫無訂單</p>
      )}
    </div>
    </>
  )
}

export default OrderQueryNew
