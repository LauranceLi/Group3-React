import React, { useEffect, useState } from 'react'

function OrderQuery() {
  const [orderData, setOrderData] = useState({ orders: [], orderDetails: [] })
  // const memberId = '20150221008' // 替换成你要查詢的會員 ID
  const [memberId, setMemberId] = useState(null);
  useEffect(() => {
    // 檢查是否在瀏覽器端
      // 從 localStorage 中獲取資料
      const userString = localStorage.getItem('user');
      if (userString) {
        // 解析成 JSON 格式
        const user = JSON.parse(userString);
        // 獲取 member_id 的值
        const memberId = user.member_id;
        console.log(memberId);
        setMemberId(memberId);
      } }, []); 

  useEffect(() => {
    if (memberId) {
      fetch(`http://localhost:3005/api/order_query?memberId=${memberId}`)
        .then((response) => response.json())
        .then((data) => {
          setOrderData(data)
        })
        .catch((error) => console.error('Error fetching order data:', error))
    }
  }, [memberId])

  // 組合訂單和訂單詳情
  const combinedOrders = orderData.orders.map((order) => {
    const details = orderData.orderDetails.filter(
      (detail) => detail.transaction_id === order.transaction_id
    )
    return { ...order, details }
  })

  // 按照 created_at 日期從新到舊排序
  const sortedOrders = combinedOrders.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )

  return (
    <div>
      {/* <h2>Orders and Order Details for Member {memberId}</h2> */}
      {sortedOrders.map((order) => (
        <div key={order.transaction_id}>
          <h5 className="bottom-line d-inline">
            交易編號: {order.transaction_id}
          </h5>
          <div>
            <div className="d-flex">
              <div className="travel-saleitem">商品名稱</div>
              <div className="me-4 unit-price text-center">數量</div>
              <div className="me-4 unit-price text-center">單價</div>
            </div>
            {order.details.map((detail) => (
              <div key={detail.detail_id} className="d-flex mb-3">
                <p className="travel-saleitem"> {detail.product_name}</p>
                <p className="me-4 unit-price text-center">
                  {detail.quantity}{' '}
                </p>
                <p className="me-4 unit-price text-center">
                  {detail.unit_price}
                </p>
              </div>
            ))}
          </div>
          <div className="d-flex">
            <p>訂單金額: {order.net_total}</p>
          </div>
          <p>
            送貨地址:
            {order.country}
            {order.township}
            {order.shipping_address}
            {order.store_name}
            {order.store_address}
          </p>
          <p>下單時間: {new Date(order.created_at).toLocaleString()}</p>
          <p>付款方式: {order.payment_method}</p>
          <p>
            訂單狀態:
            <span className="m-2">{order.order_status}</span>
            <span className="m-2">{order.payment_status}</span>
            <span className="m-2">{order.shipping_status}</span>
          </p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default OrderQuery
