import React, { useEffect, useState } from 'react';

function OrderQueryNew() {
  const [latestOrder, setLatestOrder] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const memberId = user.member_id;
      fetch(`http://localhost:3005/api/order_query?memberId=${memberId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.orders.length > 0) {
            // 將訂單按照日期排序，最新的訂單排在最前面
            const sortedOrders = data.orders.sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            setLatestOrder(sortedOrders[0]);
            setDetails(data.orderDetails);
          } else {
            setLatestOrder(null);
            setDetails([]);
          }
        })
        .catch((error) => console.error('Error fetching order data:', error));
    }
  }, []);

  return (
    <div>
      {latestOrder ? (
        <div key={latestOrder.transaction_id}>
          <p>交易編號: {latestOrder.transaction_id}</p>
          <div className="d-flex mt-2">
            <p>訂單金額: {latestOrder.net_total}</p>
          </div>
          <p>
            送貨地址:
            {latestOrder.country}
            {latestOrder.township}
            {latestOrder.shipping_address}
            {latestOrder.store_name}
            {latestOrder.store_address}
          </p>
          <p>下單時間: {new Date(latestOrder.created_at).toLocaleString()}</p>
          <p>
            訂單狀態:
            <span className="m-2">{latestOrder.order_status}</span>
            <span className="m-2">{latestOrder.payment_status}</span>
            <span className="m-2">{latestOrder.shipping_status}</span>
          </p>
          <hr />
        </div>
      ) : (
        <p>暫無訂單</p>
      )}
    </div>
  );
}

export default OrderQueryNew;
