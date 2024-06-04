import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Preloader from '@/components/layout/preloader'
import toast from 'react-hot-toast'
import { useOrder } from '../../hooks/use-order'
import useOrderAmount from '@/hooks/use-order-amount' // 計算總金額、訂金、尾款
import { useState } from 'react'

export default function GroupCart2() {
  const { order } = useOrder()

  // 使用鉤子獲取總金額、訂金、尾款
  const { totalAmount, depositAmount, finalAmount } = useOrderAmount(
    order.price,
    order.adultQuantity,
    order.childQuantity
  )

  const adultTotal = order.price * order.adultQuantity // 計算 單價 * 大人數量後的小計
  const childTotal = order.price * order.childQuantity // 計算 單價 * 小孩數量後的小計

  // 提示需勾選checkbox
  const [isChecked, setIsChecked] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // 提示需勾選checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (showAlert) {
      setShowAlert(false)
    }
  }

  const handleFinish = async () => {
    if (!isChecked) {
      setShowAlert(true)
      return
    }

    // 如果 checkbox 已經勾選，執行訂購完成的相關操作
    toast.success('報名成功')
  }
  // 付款按鈕，連接綠界科技
  // 信用卡測試卡號：4311-9522-2222-2222 安全碼 222
  const handlePay = async (e) => {
    e.preventDefault()
    const updatedFormData = { depositAmount }
    try {
      window.location.href = `http://localhost:3005/api/ec-group/?amount=${depositAmount}`
    } catch (error) {
      console.error('跳轉時出錯:', error)
    }
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <main className={styles.GroupCart1}>
        <br />
        <Container>
          <Row className={styles.GroupRow}>
            <Col className={styles.first}>1. 訂購內容</Col>
            <Col className={styles.activeCartTitle}>2. 確認訂購內容</Col>
          </Row>
          <section>
            <div>
              <div className={styles.second}>
                <div className="travelForm mb-3">
                  <div className={styles.orderTitle}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600 }}>
                      訂購人資料_ID:{order.memberId}
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col m-2">
                      <label htmlFor="name">
                        <h6>訂購人姓名</h6>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={order.name}
                        style={{
                          color: '#273140',
                          fontWeight: 'bold',
                          backgroundColor: 'rgba(173, 216, 230, 0.2)',
                          border: '1px solid lightgray',
                        }}
                      />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="email">
                        <h6>電子信箱</h6>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        value={order.email}
                        style={{
                          color: '#273140',
                          fontWeight: 'bold',
                          backgroundColor: 'rgba(173, 216, 230, 0.2)',
                          border: '1px solid lightgray',
                        }}
                      />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="number">
                        <h6>手機號碼</h6>
                      </label>
                      <input
                        type="mobile"
                        name="mobile"
                        id="mobile"
                        className="form-control"
                        value={order.mobile}
                        style={{
                          color: '#273140',
                          fontWeight: 'bold',
                          backgroundColor: 'rgba(173, 216, 230, 0.2)',
                          border: '1px solid lightgray',
                        }}
                      />
                    </div>
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
                    ID:{order.travel_id}&nbsp;<span>,</span>
                    {order.introduce}
                  </h6>

                  <span className={styles.groupCartSpan1}>
                    出發日期:{order.time}
                  </span>
                </div>
                <div className={styles.travelInfo2}>
                  <h6 className={styles.travelSaleItem}>訂購內容</h6>
                  <div className={styles.unitPrice}>單價</div>
                  <div className={styles.unitPrice}>數量</div>
                  <div className={styles.unitPrice}>金額</div>
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
                    {order.price}
                  </div>
                  <div className={styles.unitPrice}>
                    <input
                      type="number"
                      name="quantity"
                      className={styles.quantity}
                      value={order.adultQuantity}
                      readOnly
                    />
                  </div>
                  <div className={styles.unitPrice}>
                    <span>NT$</span>
                    {adultTotal}
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
                    {order.price}
                  </div>
                  <div className={styles.unitPrice}>
                    <input
                      type="number"
                      name="quantity"
                      className={styles.quantity}
                      value={order.childQuantity}
                      readOnly
                    />
                  </div>
                  <div className={styles.unitPrice}>
                    <span>NT$&nbsp;</span>
                    {childTotal}
                  </div>
                </div>
                <div className="row mt-3 p-2">
                  <Col className={styles.totalAmount}>
                    <h4 style={{ fontSize: '22px', fontWeight: 600 }}>
                      訂單總金額
                    </h4>
                    <div className={styles.groupCart2Money}>
                      NT$&nbsp;
                      <span
                        style={{
                          fontSize: '20px',
                          color: 'tomato',
                          fontWeight: 'bold',
                        }}
                      >
                        {totalAmount}
                      </span>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
            <div className="second mb-3">
              <div className={styles.orderTitle2}>
                <div className="row">
                  <div className={styles.totalAmount1}>
                    <h4>訂金</h4>
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
                  訂金付款期限 :&nbsp;{order.deposit_date}
                  <span className={styles.deadline}></span>
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
                        {finalAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.totalAmount}>
                <h6 className={styles.deadline}>
                  尾款付款期限 :&nbsp;{order.final_payment_date}
                  <span className={styles.deadline}></span>
                </h6>
              </div>
            </div>
            <div className={styles.orderWrite}>
              <div className={styles.orderTitle3}>
                <h4 style={{ fontWeight: 600, fontSize: '22px' }}>
                  代收轉付收據
                </h4>
              </div>
              <Row className="m-3">
                <Form>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="不須提供(本公司依法開立保留，如日後需求，請來電)"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="電子代轉(同訂單訂購人Email)"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="紙本代轉"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>
              </Row>
              <div className="row p-2 m-3">
                <div className="col">
                  收據抬頭
                  <input
                    type="text"
                    className="form-control"
                    placeholder="請輸入收據抬頭(買受人)"
                  />
                </div>
                <div className="col">
                  統編/身分證字號
                  <input
                    type="text"
                    className="form-control"
                    placeholder="請輸入公司統編或身分證字號"
                  />
                </div>
              </div>
            </div>
            <div className={styles.second3}>
              <div className="row p-2">
                <div className="col">
                  <h4 style={{ fontWeight: 600, fontSize: '20px' }}>
                    隱私權政策
                  </h4>
                  <p className={styles.viewTextScroll}>
                    前言申明:
                    本公司在此聲明對於個人的網路隱私權，絕對尊重並予以保護。本公司在相關網站之資料收集及運用方式，以及我們的隱私權保護政策。
                    隱私權保護政策適用範圍:
                    隱私權保護政策內容，包括本公司如何處理在用戶使用網站服務時收集到的身份識別資料，也包括本公司如何處理在商業合作與本公司合作時分享的任何身份識別資料。隱私權保護政策不適用於本公司以外的公司或網站群，與非本站所僱用或管理人員。例如您透過本公司旗下網站上的廣告廠商連結，這些置放連結的廠商也可能蒐集您個人的資料。對於您主動提供的個人資訊，這些廣告廠商或連結網站有其個別的隱私權保護政策，其資料處理措施不適用於本公司隱私權保護政策。
                    您個人在本網站上的聊天室或討論區中任意公開個人資料的行為，在非經加密的保護下，亦不適用於本公司隱私權保護政策。
                    資料的蒐集與使用方式:
                    為了在本網站提供您最佳的互動性服務，可能會請您提供相關個人的資料，其範圍如下：
                    本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
                    於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的
                    IP
                    位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公布。
                    為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
                    除非取得您的同意或其他法令之特別規定，本網站絕不會將您的個人資料揭露予第三人或使用於蒐集目的以外之其他用途。
                    在您於本網站註冊帳號、使用本網站相關產品、服務、活動或贈獎時，本網站會收集您的個人識別資料，本網站也可以從商業夥伴處取得個人資料。
                    當客戶在本網站註冊時，我們會取得您的姓名、電話、住址、身份證字號、電子郵件、出生日期、性別、行業等相關資料，當您註冊成功，並登入使用我們的服務後，我們即取得您的資料。註冊時，本網站取得您的姓名、電話、住址、身份證字號、電子郵件、出生日期、性別、行業等相關資料，當您註冊成功，並登入使用我們的服務後，本網站即取得您的資料。
                    其他除了上述，會保留您在上網瀏覽或查詢時，伺服器自行產生的相關記錄，包括您使用連線設備的
                    IP
                    位址、使用時間、使用的瀏覽器、瀏覽及點選資料紀錄等。本網站會對個別連線者的瀏覽器予以標示，歸納使用者瀏覽器在本網站內部所瀏覽的網頁，除非您願意告知您的個人資料，否則本網站不會也無法將此項記錄和您對應。請您注意，在本網站網刊登廣告之廠商，或與連結本網站，也可能蒐集您個人的資料。對於您主動提供的個人資訊，這些廣告廠商、或連結網站有其個別的私權保護政策，其資料處理措施不適用本網站隱私權保護政策，本公司不負任何連帶責任。
                    本網站將在事前或註冊登錄取得您的同意後，傳送商業性資料或電子郵件給您。本公司除了在該資料或電子郵件上註明是由本公司發送，也會在該資料或電子郵件上提供您能隨時停止接收這些資料或電子郵件的方法及說明。
                    資料使用: 本公司不會向任何人出售或出借您的個人識別資料。
                    在以下情況下，
                    本公司會向其他人士或公司提供您的個人識別資料：
                    1.遵守法令或政府機關的要求；或我們發覺您在網站上的行為違反本公司旗下網站的會員條款或產品、服務的特定使用指南。
                    2.為了保護使用者個人隱私，我們無法為您查詢其他使用者的帳號資料。若您有相關法律上問題需查閱他人資料時，請務必向警政單位提出告訴，我們將全力配合警政單位調查並提供所有相關資料，以協助調查及破案！
                    自我保護措施:
                    請妥善保管您在本公司及相關企業伙伴網站的帳號、密碼或個人資料，不要將任何資料、密碼提供給任何人。並在您使用完本公司相關企業伙伴網站所提供的服務後，務必記得登出帳戶或關閉網頁瀏覽器，以防止他人讀取您的個人資料。
                    倘若您發現有任何非經授權的第三者使用您的帳號進行任何詢問或訂購時，請立即通知本站。
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.agreement}>
              <input
                type="checkbox"
                id="agreeTerms"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement" className={styles.agreement}>
                已閱讀並同意「隱私權政策」。
              </label>
              {showAlert && (
                <div
                  style={{
                    backgroundColor: '	#fff1f1',
                    color: 'red',
                    width: '25%',
                    margin: '0 auto',
                    padding: '1px',
                    border: '1px solid red',
                    borderRadius: '0px',
                    fontSize: '14px',
                  }}
                  className="alert"
                  role="alert"
                >
                  請閱讀「隱私權政策」並勾選按鈕。
                </div>
              )}
              <div className={styles.agreementDiv}>
                <div className="m-1">
                  <button
                    className="btn btn-outline-success"
                    onClick={handlePay}
                  >
                    訂金付款
                  </button>
                </div>
                <div className="m-1">
                  <button className="btn btn-primary" onClick={handleFinish}>
                    完成訂購
                  </button>
                </div>
                <div className="m-1">
                  <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href =
                        'http://localhost:3000/itinerary-product/list'
                    }}
                  >
                    取消訂購
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}
