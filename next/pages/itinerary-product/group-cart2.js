import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import toast from 'react-hot-toast'
// import useLocalStorage from '../../hooks/use-group-order' // 導入 useLocalStorage Hook
import { useOrder } from '../../hooks/OrderContext';




export default function GroupCart2() {
  const { order } = useOrder();
  const handleReset = () => {
    toast.success('報名成功')
  }
  return (
    <>
      <Navbar />
      <main className={styles.GroupCart1}>
        <br />
        <Container>
          <Row className={styles.GroupRow}>
            <Col className={styles.first}>1. 訂購內容</Col>
            <Col className={styles.activeCartTitle}>2. 填寫旅客資訊</Col>
          </Row>
          <section>
            <div>
              <div className="travelForm mb-3">
                <div className={styles.second}>
                  <div className={styles.orderTitle}>
                    ID:{order.travel_id}&nbsp;<span>,</span>{order.introduce}
                  </div>
                  <div>
                    <div className={styles.travelInfo2}>
                      <h6 className={styles.travelSaleItem}>訂購內容</h6>
                      <div className={styles.unitPrice}>單價</div>
                      <div className={styles.unitPrice}>數量</div>
                      <div className={styles.unitPrice}>金額</div>
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
                      <span>NT$</span>{order.price}
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
                      <span>NT$</span>{order.price}
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
                      <span>NT$</span>
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
                        ></span>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="second mb-3">
                  <div className={styles.orderTitle2}>
                    <div className="row">
                      <div className={styles.totalAmount1}>
                        <h4>訂金</h4>
                        <div className={styles.groupCart2Money}>
                          NT$&nbsp;
                          <span
                            style={{ color: 'tomato', fontWeight: 'bold' }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.totalAmount}>
                    <h6 className={styles.deadline}>
                      訂金付款期限 :&nbsp;
                      <span className={styles.deadline}></span>
                    </h6>
                  </div>
                </div>
                <div className="second mb-3">
                  <div className={styles.orderTitle2}>
                    <div className="row">
                      <div className={styles.totalAmount1}>
                        <h4 style={{ fontWeight: 600, fontSize: '20px' }}>
                          尾款
                        </h4>
                        <div className={styles.groupCart2Money}>
                          NT$&nbsp;
                          <span
                            style={{ color: 'tomato', fontWeight: 'bold' }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.totalAmount}>
                    <h6 className={styles.deadline}>
                      尾款付款期限 :&nbsp;
                      <span className={styles.deadline}></span>
                    </h6>
                  </div>
                </div>
                <div className={styles.orderWrite}>
                  <div className={styles.orderTitle}>
                    <h4 style={{ fontWeight: 600, fontSize: '22px' }}>
                      填寫旅客資料
                    </h4>
                  </div>
                  <div>
                    <div className={styles.travelInfo2}>
                      <h6 className={styles.travelSaleItem}>旅客 1</h6>
                      <div className={styles.unitPrice}>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          style={{ fontWeight: 600, fontSize: '14px' }}
                        >
                          新增旅客
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row m-3">
                    <Col>
                      <label htmlFor="name">中文姓名</label>
                      <input
                        type="text"
                        placeholder="姓名"
                        className="form-control"
                      />
                    </Col>
                    <Col>
                      <label htmlFor="name">英文姓名</label>
                      <input
                        type="text"
                        placeholder="英文姓名(同護照)"
                        className="form-control"
                      />
                    </Col>
                    <Col>
                      <label htmlFor="phone">聯絡電話</label>
                      <input
                        type="text"
                        placeholder="手機號碼"
                        className="form-control"
                      />
                    </Col>
                  </div>
                  <Row className="m-3">
                    <Col xs={12} md={4} className="mb-3">
                      <Form.Group controlId="gender">
                        <Form.Label>性別</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>請選擇</option>
                          <option value="1">男</option>
                          <option value="2">女</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} className="mb-3">
                      <Form.Group controlId="identity">
                        <Form.Label>身分證/護照號碼</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="身分證/護照號碼"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} className="mb-3">
                      <Form.Group controlId="birthday">
                        <Form.Label>出生日期</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder=""
                          style={{ color: 'gray' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="row m-3">
                    <Col>
                      <label htmlFor="address">聯絡地址</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="聯絡地址"
                      />
                    </Col>
                    <Col>
                      <label htmlFor="note">備註</label>
                      <input
                        type="text"
                        placeholder="備註"
                        className="form-control"
                      />
                    </Col>
                  </div>
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
                  <input type="checkbox" name="agreement" id="agreement" />
                  <label htmlFor="agreement" className={styles.agreement}>
                    已閱讀並同意「訂購須知」及「隱私權政策」。
                  </label>
                  <div className={styles.agreementDiv}>
                    <div className="m-1">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleReset}
                      >
                        完成訂購
                      </button>
                    </div>
                    <div className="m-1">
                      <button type="button" className="btn btn-secondary">
                        取消訂購
                      </button>
                    </div>
                  </div>
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
