import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { loadProduct } from '@/services/itinerary-product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function GroupCart() {
  const [product, setProduct] = useState({
    travel_id: 0,
    days: '',
    time: '',
    title: '',
    seat: 0,
    number: 0,
    sale: 0,
    price: 0,
    deposit_date: '',
    final_payment_date: '',
  })

  // 通過點擊icon去增和減，在input中產生數字
  const [adultQuantity, setAdultQuantity] = useState(0)
  const [childQuantity, setChildQuantity] = useState(0)
  // 小計的金額計算
  const totalAmount =
    product.price * adultQuantity + product.price * childQuantity

  // 減少成人數量
  const decreaseAdultQuantity = () => {
    if (adultQuantity > 0) {
      setAdultQuantity(adultQuantity - 1)
    }
  }
  // 增加成人數量
  const increaseAdultQuantity = () => {
    setAdultQuantity(adultQuantity + 1)
  }
  // 減少小孩佔床數量
  const decreaseChildQuantity = () => {
    if (childQuantity > 0) {
      setChildQuantity(childQuantity - 1)
    }
  }
  // 增加小孩佔床數量
  const increaseChildQuantity = () => {
    setChildQuantity(childQuantity + 1)
  }

  // 計算訂金的值（totalAmount的20%）
  const depositAmount = totalAmount * 0.2

  const router = useRouter()

  // 使用 API 加載產品數據
  const getProduct = async (pid) => {
    try {
      const data = await loadProduct(pid)
      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        setProduct(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
  }, [router.isReady])

  return (
    <>
      {/* <Link href="/itinerary-order/list">連至 列表頁</Link> */}
      <Navbar />
      <main className={styles.GroupCart1}>
        <br />
        <Container>
          <div className="mb-3">
            <Row className={styles.GroupRow}>
              <Col className={styles.activeCartTitle}>1. 訂購內容</Col>
              <Col className={styles.first}>2. 填寫旅客資訊</Col>
              <Col className={styles.first}>3. 完成訂單</Col>
            </Row>
            <div className={styles.second}>
              <div className={styles.orderTitle}>
                <h4 style={{ fontSize: '18px', fontWeight: 600 }}>
                  訂購人資料
                </h4>
              </div>
              <div className="row">
                <div className="col m-2">
                  <label htmlFor="name">
                    <h6>訂購人姓名&nbsp;</h6>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="col m-2">
                  <label htmlFor="email">
                    <h6>電子信箱&nbsp;</h6>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="col m-2">
                  <label htmlFor="number">
                    <h6>手機號碼&nbsp;</h6>
                  </label>
                  <input
                    type="mobile"
                    name="mobile"
                    id="mobile"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className={styles.second2}>
              <div className={styles.orderTitle}>
                <h4
                  style={{ fontSize: '18px', fontWeight: 600 }}
                  className="mb-3"
                >
                  訂購內容
                </h4>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '22px' }}
                >
                  {product.introduce}
                </h6>
                <span className={styles.groupCartSpan1}>
                  出發日期:{product.time}
                </span>
              </div>
              <div>
                <div className={styles.travelInfo2}>
                  <h6 className={styles.travelSaleItem}>請確認訂購內容</h6>
                  <div className={styles.unitPrice}>單價</div>
                  <div className={styles.unitPrice}>
                    可售團位:
                    <div className={styles.groupCartSeat}>{product.sale}</div>
                  </div>
                  <div className={styles.unitPrice}>小計</div>
                </div>
              </div>
              <div className={styles.travelInfo2}>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '16px' }}
                >
                  大人
                </h6>
                <div className={styles.unitPrice}>
                  <span>NT$</span>
                  {product.price}
                </div>
                <div className={styles.unitPrice}>
                  <CiCircleMinus
                    size={24}
                    onClick={decreaseAdultQuantity}
                    style={{ cursor: 'pointer' }}
                  />
                  <input
                    type="number"
                    name="adultQuantity"
                    className={styles.quantity}
                    value={adultQuantity}
                    readOnly
                  />
                  <CiCirclePlus
                    size={24}
                    onClick={increaseAdultQuantity}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className={styles.unitPrice}>
                  <span>NT${product.price * adultQuantity}</span>
                </div>
              </div>
              <div className={styles.travelInfo2}>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '16px' }}
                >
                  小孩佔床
                </h6>
                <div className={styles.unitPrice}>
                  <span>NT$</span>
                  {product.price}
                </div>
                <div className={styles.unitPrice}>
                  <CiCircleMinus
                    size={24}
                    onClick={decreaseChildQuantity}
                    style={{ cursor: 'pointer' }}
                  />
                  <input
                    type="number"
                    name="childQuantity"
                    className={styles.quantity}
                    value={childQuantity}
                    readOnly
                  />
                  <CiCirclePlus
                    size={24}
                    onClick={increaseChildQuantity}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className={styles.unitPrice}>
                  <span>NT${product.price * childQuantity}</span>
                </div>
              </div>
              <span className={styles.unitPrice2}>
                總計&nbsp;NT${totalAmount}
              </span>
            </div>
            <div className="second mb-3">
              <div className={styles.orderTitle2}>
                <div className="row">
                  <div className="col">
                    <h4 style={{ fontSize: '22px' }}>
                      訂單總金額 <span>NT${totalAmount}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="second mb-3">
              <div className={styles.orderTitle2}>
                <div className="row">
                  <div className={styles.totalAmount1}>
                    <h4 style={{ fontWeight: 600, fontSize: '20px' }}>訂金</h4>
                    <div className={styles.groupCart2Money}>
                      NT$&nbsp;
                      <span style={{ color: 'tomato', fontWeight: 'bold' }}>
                        {depositAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalAmount}>
                <h6 className={styles.deadline}>
                  訂金付款期限 :&nbsp;
                  <span className={styles.deadline}>
                    {product.deposit_date}
                  </span>
                </h6>
              </div>
            </div>
            <div className="second mb-3">
              <div className={styles.orderTitle2}>
                <div className="row">
                  <div className={styles.totalAmount1}>
                    <h4 style={{ fontWeight: 600, fontSize: '20px' }}>尾款</h4>
                    <div className={styles.groupCart2Money}>
                      NT$&nbsp;
                      <span style={{ color: 'tomato', fontWeight: 'bold' }}>
                        {totalAmount - depositAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalAmount}>
                <h6 className={styles.deadline}>
                  尾款付款期限 :&nbsp;{product.final_payment_date}
                </h6>
              </div>
            </div>
            <div className={styles.second2}>
              <div className="row p-2">
                <div className="col">
                  <ul>12</ul>
                </div>
              </div>
            </div>
            <div className={styles.second2}>
              <div className="row p-2">
                <div className="col">
                  <h4 style={{ fontSize: '18px', fontWeight: 600 }}>
                    觀光署發布之國外旅遊定型化契約
                  </h4>
                  <embed
                    src="/合約書.pdf"
                    type="application/pdf"
                    className={styles.contractView}
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div className={styles.second2}>
              <div className="row p-2">
                <div className="col">
                  <h4 style={{ fontSize: '18px', fontWeight: 600 }}>
                    隱私權政策
                  </h4>
                  <p className={styles.viewTextScroll}></p>
                </div>
              </div>
            </div>
            <div className={styles.agreement}>
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement" className={styles.agreement}>
                已閱讀並同意「訂購須知」、「旅遊契約書」、及「隱私權政策」。
              </label>
              <div className={styles.agreementDiv}>
                <div className="m-1">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      (window.location.href =
                        'http://localhost:3000/itinerary-order/group-cart2')
                    }
                  >
                    確認訂購
                  </button>
                </div>
                <div className="m-1">
                  <button type="reset" className="btn btn-secondary">
                    取消訂購
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
