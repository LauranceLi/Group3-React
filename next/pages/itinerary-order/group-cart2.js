import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import toast from 'react-hot-toast'
import useLocalStorage from '../../hooks/use-group-order'; // 導入 useLocalStorage Hook


export default function GroupCart2() {
    // 从LocalStorage讀取 travel_id, introduce, price, adultQuantity, childQuantity
    const [storedId] = useLocalStorage('travel_id', 0);
    const [storedIntroduce] = useLocalStorage('introduce', '');
    const [storedPrice] = useLocalStorage('price', 0);
    const [storedAdultQuantity] = useLocalStorage('adultQuantity', 0);
    const [storedChildQuantity] = useLocalStorage('childQuantity', 0);



  // 在組件中獲取路由參數
  const router = useRouter();
  const { id, introduce } = router.query;
  const { totalAmount } = router.query;


  // 計算訂單總金額
  const orderTotalAmount = parseInt(storedPrice) * parseInt(storedAdultQuantity) + parseInt(storedPrice) * parseInt(storedChildQuantity);


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
                      ID:{storedId}&nbsp;{storedIntroduce}
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
                      <span>NT${storedPrice}</span>
                    </div>
                    <div className={styles.unitPrice}>
                      <input
                        type="number"
                        name="quantity"
                        className={styles.quantity}
                        value={storedAdultQuantity}
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
                    <span>NT${storedPrice}</span>
                    </div>
                    <div className={styles.unitPrice}>
                      <input
                        type="number"
                        name="quantity"
                        className={styles.quantity}
                        value={storedChildQuantity}
                        readOnly
                      />
                    </div>
                    <div className={styles.unitPrice}>
                      <span>NT$</span>
                    </div>
                  </div>
                  <div className="row mt-3 p-2">
                    <Col className={styles.totalAmount}>
                      <h4 style={{ fontSize: '22px', fontWeight: 600 }}>訂單總金額
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
                      <span className={styles.deadline}>2024-10-15</span>
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
                      <span className={styles.deadline}>2024-11-01</span>
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
