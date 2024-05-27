import React, { useState } from 'react';
import GroupCart from '../pages/itinerary/group-cart';
import GroupCart2 from '../pages/itinerary/group-cart2';

export function useItineraryOrder() {
  // 定義狀態變數來存儲訂單總金額、adultCount、childCount 和 extraBedCount
  const [totalAmount, setTotalAmount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [extraBedCount, setExtraBedCount] = useState(0);

  // 設置一個函數，用於更新訂單總金額、adultCount、childCount 和 extraBedCount 的狀態
  const updateOrderDetails = (amount, adults, children, extraBeds) => {
    setTotalAmount(amount);
    setAdultCount(adults);
    setChildCount(children);
    setExtraBedCount(extraBeds);
  };

  // 返回一個容器，包含兩個頁面，並將訂單總金額、adultCount、childCount 和 extraBedCount 作為屬性傳遞給它們
  return (
    <div>
      <GroupCart updateOrderDetails={updateOrderDetails} />
      <GroupCart2 
        totalAmount={totalAmount} 
        adultCount={adultCount} 
        childCount={childCount} 
        extraBedCount={extraBedCount} 
      />
    </div>
  );
}
