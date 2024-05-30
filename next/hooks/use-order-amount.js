// 計算總金額、訂金、尾款
const useOrderAmount = (price, adultQuantity, childQuantity) => {
  const totalAmount =  price * (adultQuantity + childQuantity);
  const depositAmount = totalAmount * 0.2;
  const finalAmount = totalAmount - depositAmount;

  return {
    totalAmount,
    depositAmount,
    finalAmount,
  };
};

export default useOrderAmount;
