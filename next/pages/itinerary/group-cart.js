import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CiCircleMinus } from 'react-icons/ci'
import { CiCirclePlus } from 'react-icons/ci'
import styles from '@/styles/itinerary.module.css'

export default function GroupCart() {
  return (
    <>
      <main>
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
                    type="text"
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
                  西班牙13日:設計酒莊古堡美食宴饗
                </h6>
                <span className={styles.groupCartSpan1}>
                  出發日期:2024/05/23{' '}
                </span>
                <span className={styles.groupCartSpan}>可售團位:經濟艙16</span>
              </div>
              <div>
                <div className={styles.travelInfo2}>
                  <h6 className={styles.travelSaleItem}>訂位人數</h6>
                  <div className={styles.unitPrice}>單價</div>
                  <div className={styles.unitPrice}>
                    可售
                    <div className={styles.groupCartSeat}>16</div>
                  </div>
                </div>
              </div>
              <div className={styles.travelInfo2}>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '16px' }}
                >
                  大人
                </h6>
                <div className={styles.unitPrice}>NT$219,900</div>
                <div className={styles.unitPrice}>
                  <CiCircleMinus size={24} />

                  <input
                    type="number"
                    name="quantity"
                    value="1"
                    className={styles.quantity}
                    disabled
                  />
                  <CiCirclePlus size={24} />
                </div>
              </div>
              <div className={styles.travelInfo2}>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '16px' }}
                >
                  小孩
                </h6>
                <div className={styles.unitPrice}>NT$219,900</div>
                <div className={styles.unitPrice}>
                  <CiCircleMinus size={24} />
                  <input
                    type="number"
                    name="quantity"
                    value="1"
                    className={styles.quantity}
                    disabled
                  />
                  <CiCirclePlus size={24} />
                </div>
              </div>
              <div className={styles.travelInfo2}>
                <h6
                  className={styles.travelSaleItem}
                  style={{ fontSize: '16px' }}
                >
                  加床
                </h6>
                <div className={styles.unitPrice}>NT$219,900</div>
                <div className={styles.unitPrice}>
                  <CiCircleMinus size={24} />
                  <input
                    type="number"
                    name="quantity"
                    value="1"
                    className={styles.quantity}
                    disabled
                  />
                  <CiCirclePlus size={24} />
                </div>
              </div>
              <div className="row mt-3 p-2">
                <div className="col">
                  <h4>
                    小計 <span>NT$ 657,000</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="second mb-3">
              <div className={styles.orderTitle2}>
                <div className="row">
                  <div className="col">
                    <h4 style={{ fontSize: '22px' }}>
                      訂單總金額 <span>NT$ 657,000</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.second2}>
              <div className="row p-2">
                <div className="col">
                  <h4>訂購須知</h4>
                  <ul>
                    <li>
                      1.選擇出符合您出發日期的行程，報名後確認行程表與旅遊契約書內容且填寫相關資料，並利用線上付款，完成訂購流程，我們也會
                      mail訂單通知給您。
                    </li>
                    <li>
                      2.詳細付款內容請依照行程內容頁中的付款說明。若您是訂購須立即付款的行程，請立即於線上即時完成
                      全額付款，若逾時未付，本站系統將自動取消訂單，不會保留您的訂位。
                    </li>
                    <li>
                      3.付款完成後，系統會
                      mail封付款成功通知信函給您，經專屬服務人員訂單確認OK後，最晚於出發前三天，提供行程確認單與團體行程確認文件給您，您也可以在訂單查詢中得知(若行程確認單有變更，業務人員會於出發前聯絡您)。
                    </li>
                    <li>
                      4.若有需要『旅行業代收轉付收據』，請通知業務人員郵寄到您指定寄送地址。
                    </li>
                    <li>5.取消訂單/退貨依照旅遊契約、金流等相關規定辦理。</li>
                  </ul>
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
                已閱讀並同意「訂購須知」、「旅遊契約書」、及「隱私權政策」。
              </label>
              <div className={styles.agreementDiv}>
                <div className="m-1">
                  <button type="submit" className="btn btn-primary">
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
    </>
  )
}
