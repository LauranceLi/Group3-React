// 團體行程購物車 context
import { createContext, useContext, useState, useEffect } from 'react';

// 定義上下文
const OrderContext = createContext();

// 定義上下文提供者
export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    travel_id: 0,
    introduce: '',
    time: '',
    price: 0,
    deposit_date: '',
    final_payment_date: '',
    adultQuantity: 0,
    childQuantity: 0,
  });

  // 將 useOrderCount 的狀態整合到 order 狀態中
  const [adultQuantity, setAdultQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);

  // 更新 order 狀態
  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      adultQuantity,
      childQuantity,
    }));
  }, [adultQuantity, childQuantity]);

  const decreaseAdultQuantity = () => {
    if (adultQuantity > 0) {
      setAdultQuantity(adultQuantity - 1);
    }
  };

  const increaseAdultQuantity = () => {
    setAdultQuantity(adultQuantity + 1);
  };

  const decreaseChildQuantity = () => {
    if (childQuantity > 0) {
      setChildQuantity(childQuantity - 1);
    }
  };

  const increaseChildQuantity = () => {
    setChildQuantity(childQuantity + 1);
  };

  return (
    <OrderContext.Provider value={{ order, setOrder, decreaseAdultQuantity, increaseAdultQuantity, decreaseChildQuantity, increaseChildQuantity }}>
      {children}
    </OrderContext.Provider>
  );
};

// 定義自訂 hook 以獲取上下文值
export const useOrder = () => {
  return useContext(OrderContext);
};
