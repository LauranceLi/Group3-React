import React, { useState, useEffect } from 'react'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
import TWZipCode from '@/components/zipcode/twzipcode'
import useFormCheck from '@/hooks/use_formCheck'
import CheckoutList from '../checkout/checkout_list'
import Privacy from '../checkout/privacy'
import { useCart } from '@/hooks/use_cart'
const MyFormComponent = () => {
  const { items, discountAmount, setItems, finalAmount } = useCart()

  // 711的資料內容是存放在localStorage
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3005/api/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )

   // 從 localStorage 中讀取 user
  //  const user = JSON.parse(localStorage.getItem('user'))
  //  const memberId = user ? user.memberId : null
  //  console.log(user)
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    recipientName: '',
    recipientMobile: '',
    paymentMethod: '', // 新增的付費方式欄位
    invoiceType: '', // 新增的發票類型欄位
    invoiceValue: '', //發票的值類型欄位
    shippingMethod: '', // 新增的送貨類型欄位
    shippingAddress: '', // 新增的送貨地址類型欄位
    country: '',
    township: '',
    postcode: '',
  })
  const handlePostcodeChange = (country, township, postcode) => {
    // 更新 formData
    setFormData({
      ...formData,
      country: country,
      township: township,
      postcode: postcode,
    })
  }
  const updateFormData = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value })
  }
  const [myPostcode, setMyPostcode] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
  }
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    updateFormData(name, checked)
  }

  const { errors, validate } = useFormCheck()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedFormData = { ...formData, store711, items, discountAmount,memberId }
    if (validate(updatedFormData)) {
      console.log(updatedFormData)
      if (formData.paymentMethod === '綠界科技') {
        window.location.href = `http://localhost:3005/api/ec/?amount=${finalAmount}`
        // 清空 localStorage 中的购物车数据
        localStorage.removeItem('cartItems')
        // 清空购物车状态
        setItems([])
      }
      try {
        const res = await fetch('http://localhost:3005/api/order', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        })
        const data = await res.json()
        console.log('後端返回的數據:', data)
        // 使用 orderId 執行跳轉到 /payment/callback 页面
        window.location.href = `http://localhost:3000/payment/callback`
        // 清空 localStorage 中的购物车数据
        localStorage.removeItem('cartItems')
        // 清空购物车状态
        setItems([])
      } catch (error) {
        console.error('提交表單時出錯:', error)
      }
    } else {
      console.log('表單驗證失敗')
    }
  }

  useEffect(() => {
    // 確保 formData 和 myPostcode 在初始渲染時同步
    setMyPostcode(formData.postcode || '')
  }, [formData.postcode])

  return (
    <>
          <form>
        <CheckoutList />
        <div className="mb-3">
          <h4 className="bottom-line d-inline">填寫訂購人資料</h4>
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            // 重置需要自行設定回初始化值
            setFormData({
              name: 'Group3',
              email: 'group3@gmail.com',
              mobile: '0970265836',
              recipientName: 'Group3',
              recipientMobile: '0970265836',
              shippingAddress:'南台路96號23樓',
              agreement: true,
            })
          }}
        >
          快速輸入
        </button>
        <div className="row customer-info">
          <div className="col m-2">
            <label htmlFor="name">
              <h6>訂購人姓名</h6>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="col m-2">
            <label htmlFor="email">
              <h6>訂購人Email</h6>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="col m-2">
            <label htmlFor="email">
              <h6>訂購人手機號碼</h6>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
          </div>
        </div>
        <div className="row customer-info">
          <div className="col m-2">
            <label htmlFor="name">
              <h6>收件人姓名</h6>
            </label>
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.recipientName && (
              <p className="text-danger">{errors.recipientName}</p>
            )}
          </div>
          <div className="col m-2">
            <label htmlFor="email">
              <h6>收件人手機號碼</h6>
            </label>
            <input
              type="tel"
              name="recipientMobile"
              value={formData.recipientMobile}
              onChange={handleInputChange}
              className="form-control"
            />
            {errors.recipientMobile && (
              <p className="text-danger">{errors.recipientMobile}</p>
            )}
          </div>
          <div className="col" />
        </div>
        <div className="">
          <div className="mb-3 mt-5">
            <h4 className="bottom-line d-inline">付費方式</h4>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col text-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="paymentMethod"
                  id="option1"
                  value="綠界科技"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option1">
                  綠界科技
                </label>
              </div>
            </div>
            <div className="col text-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="paymentMethod"
                  id="option2"
                  value="LINE PAY"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option2">
                  LINE PAY
                </label>
              </div>
            </div>
            <div className="col text-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="paymentMethod"
                  id="option3"
                  value="貨到付款"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option3">
                  貨到付款
                </label>
              </div>
            </div>
            {errors.paymentMethod && (
              <p className="text-danger">{errors.paymentMethod}</p>
            )}
          </div>
          <div className="mt-5 mb-3">
            <h4 className="bottom-line d-inline">發票類型</h4>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col text-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="invoiceType"
                  id="option4"
                  value="電子載具"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option4">
                  電子載具
                </label>
              </div>
            </div>
            <div className="col text-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="btn-check"
                  name="invoiceType"
                  id="option5"
                  value="三聯發票"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option5">
                  三聯發票
                </label>
              </div>
            </div>
            {errors.invoiceType && (
              <p className="text-danger">{errors.invoiceType}</p>
            )}
          </div>
          {formData.invoiceType === '電子載具' && (
            <div className="ship711">
              <div className="mb-3 mt-5">
                <h4 className="bottom-line d-inline">輸入載具號碼</h4>
              </div>
              <div className="col-12">
                <div className="col">載具 : </div>
                <input
                  type="text"
                  className="form-control"
                  name="invoiceValue"
                  value={formData.invoiceValue}
                  onChange={handleInputChange}
                />
              </div>
              {errors.invoiceValue && (
                <p className="text-danger">{errors.invoiceValue}</p>
              )}
            </div>
          )}
          {formData.invoiceType === '三聯發票' && (
            <div className="ship711">
              <div className="mb-3 mt-5">
                <h4 className="bottom-line d-inline">輸入統編號碼</h4>
              </div>
              <div className="col-12">
                <div className="col">統編 : </div>
                <input
                  type="text"
                  className="form-control"
                  name="invoiceValue"
                  value={formData.invoiceValue}
                  onChange={handleInputChange}
                />
              </div>
              {errors.invoiceValue && (
                <p className="text-danger">{errors.invoiceValue}</p>
              )}
            </div>
          )}
          <div className=" mb-5">
            <div className="mt-5 mb-3">
              <h4 className="bottom-line d-inline">送貨方式</h4>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="btn-check"
                    name="shippingMethod"
                    id="option6"
                    value="超商取貨"
                    onChange={handleInputChange}
                  />
                  <label className="btn btn-outline-dark" htmlFor="option6">
                    超商取貨
                  </label>
                </div>
              </div>
              <div className="col text-center">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="btn-check"
                    name="shippingMethod"
                    id="option7"
                    value="賣家宅配"
                    onChange={handleInputChange}
                  />
                  <label className="btn btn-outline-dark" htmlFor="option7">
                    賣家宅配
                  </label>
                </div>
              </div>
              <div className="col text-center"></div>
              {errors.shippingMethod && (
                <p className="text-danger">{errors.shippingMethod}</p>
              )}
            </div>

            {formData.shippingMethod === '超商取貨' && (
              <div className="ship711">
                <div className="mb-3 mt-5">
                  <h4 className="bottom-line d-inline">7-11 運送商店選擇</h4>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    openWindow()
                  }}
                  className="btn btn-dark mb-3"
                >
                  選擇門市
                </button>
                <br />
                <div className="col-12">
                  <div className="col">門市名稱 : </div>
                  <input
                    type="text"
                    value={store711.storename}
                    disabled
                    className="form-control"
                    name="shippingAddress"
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className="col-12">
                  <div className="col">門市地址 : </div>
                  <input
                    type="text"
                    value={store711.storeaddress}
                    disabled
                    className="form-control"
                    name="shippingAddress"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            {formData.shippingMethod === '賣家宅配' && (
              <div className="row customer-info">
                <div className="mb-3 mt-5">
                  <h4 className="bottom-line d-inline">宅配地址</h4>
                </div>
                <TWZipCode
                  initPostcode={formData.postcode}
                  onPostcodeChange={handlePostcodeChange}
                  name="TWZipCode"
                />
                <div className="col zipcode_address">
                  <label htmlFor="address">
                    <h6>詳細地址</h6>
                  </label>
                  <input
                    type="text"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    id="address"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                {errors.shippingAddress && (
                  <p className="text-danger">{errors.shippingAddress}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
      <Privacy />
      <div className="agreement text-center">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          className="form-check-input"
          checked={formData.agreement || false}
          onChange={handleCheckboxChange}
        />{' '}
        <label htmlFor="agreement">
          已閱讀並同意「訂購須知」及「隱私權政策」。
        </label>
        {errors.agreement && <p className="text-danger">{errors.agreement}</p>}
        <div className="agreement-btn">
          <div className="m-1">
            <button
              type="submit"
              className="text-center btn btn-warning go-shopping"
              onClick={handleSubmit}
            >
              確認付款
            </button>
          </div>
          <div className="m-1">
            <button
              type="reset"
              className="text-center btn btn-secondary go-shopping"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyFormComponent
