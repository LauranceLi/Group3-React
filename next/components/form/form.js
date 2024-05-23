import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFormContext } from '@/context/formContext'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
import TWZipCode from '@/components/zipcode/twzipcode'
import useFormCheck from '@/hooks/use_formCheck'
import CheckoutList from '../checkout/checkout_list'
import Privacy from '../checkout/privacy'

const MyFormComponent = () => {
  // 711的資料內容是存放在localStorage
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3005/api/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )
  const { formData, updateFormData, handlePostcodeChange } = useFormContext()
  const [myPostcode, setMyPostcode] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    updateFormData(name, checked)
  }
  const { errors, validate } = useFormCheck()

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault() // 防止表單的默認提交行為
    const updatedFormData = { ...formData, store711 }
    if (validate(formData)) {
      // 表單驗證通過，提交表單
      console.log('表單提交成功', updatedFormData)
      router.push('/cart/order')
    } else {
      // 表單驗證失敗，顯示錯誤信息
      console.log('表單驗證失敗')
      // 這裡可以添加顯示錯誤信息的邏輯，例如在界面上顯示錯誤提示
    }
  }

  useEffect(() => {
    // 確保 formData 和 myPostcode 在初始渲染時同步
    setMyPostcode(formData.postcode || '')
  }, [formData.postcode])

  // formData物件包物件可以先試著用解構賦值處理

  return (
    <>
      <form>
        <CheckoutList />
        <div className="mb-3">
          <h4 className="bottom-line d-inline">填寫訂購人資料</h4>
        </div>
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
                  autoComplete="off"
                  value="ATM轉帳"
                  onChange={handleInputChange}
                />
                <label className="btn btn-outline-dark" htmlFor="option1">
                  ATM轉帳
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
          <div className="ship711">
            <div className="mb-3 mt-5">
              <h4 className="bottom-line d-inline">輸入載具號碼</h4>
            </div>
            <div className="col-12">
              <div className="col">載具 : </div>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="invoiceValue"
                onChange={handleInputChange}
              />
            </div>
            {errors.invoiceValue && (
              <p className="text-danger">{errors.invoiceValue}</p>
            )}
          </div>
          <div className="ship711">
            <div className="mb-3 mt-5">
              <h4 className="bottom-line d-inline">輸入統編號碼</h4>
            </div>
            <div className="col-12">
              <div className="col">統編 : </div>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="invoiceValue"
                onChange={handleInputChange}
              />
            </div>
            {errors.invoiceValue && (
              <p className="text-danger">{errors.invoiceValue}</p>
            )}
          </div>
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
                    autoComplete="off"
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
                    autoComplete="off"
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
              <div className=" col-12">
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
                  id="address"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
              {errors.shippingAddress && (
                <p className="text-danger">{errors.shippingAddress}</p>
              )}
            </div>
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
