// context
import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

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
    setAdultQuantity: 0
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
