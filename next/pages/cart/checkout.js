import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="container">
          <form action="#">
            <div className="travel-form mb-3">
              <div className="row align-items-start justify-content-center text-center big-title">
                <div className="col first pass">1 選購商品</div>
                <div className="col first active-carttitle">2 填寫訂單資訊</div>
                <div className="col first">3 完成付款</div>
              </div>
              <div className="second mb-3 mt-5">
                <h4 className="bottom-line d-inline">確認購買商品</h4>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">商品名稱</h6>
                  <div className="unit-price text-center">單價</div>
                  <div className="unit-price text-center">數量</div>
                </div>
                <div className="travel-info">
                  <div className="travel-saleitem">
                    <Image
                      src="/001.jpg"
                      alt="001.jpg"
                      width={100}
                      height={150}
                    />
                    <span className="travel-saleitem bottom-line">
                      追夢到秘魯：探索失落文明，尋覓古都風華
                    </span>
                  </div>
                  <div className="unit-price text-center">NT$</div>
                  <div className="unit-price text-center">
                    <span className="number">1</span>
                  </div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">折扣碼</h6>
                  <div className="unit-price text-center">折扣金額</div>
                  <div className="unit-price text-center"></div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">無</h6>
                  <div className="unit-price text-center">
                    <span>$0</span>
                  </div>
                  <div className="unit-price text-center"></div>
                </div>
                <div className="row mt-3 p-2">
                  <div className="col total-amount">
                    <h4>小計</h4>
                    <h4>NT$</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col total-amount  mb-5">
                    <h4>確認訂單總金額</h4>
                    <h4>NT$</h4>
                  </div>
                </div>
              </div>
              <div className="second mb-3">
                <div className="">
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
                      id="name"
                      className="form-control"
                    />
                  </div>
                  <div className="col m-2">
                    <label htmlFor="email">
                      <h6>訂購人Email</h6>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                  <div className="col m-2">
                    <label htmlFor="email">
                      <h6>訂購人手機號碼</h6>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="customer-info-btn">
                  <button type="button" className="btn btn-dark m-2 col-2">
                    同訂購人資料
                  </button>
                </div>
                <div className="row customer-info">
                  <div className="col m-2">
                    <label htmlFor="name">
                      <h6>收件人姓名</h6>
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
                      <h6>收件人手機號碼</h6>
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                    />
                  </div>
                  <div className="col" />
                </div>
              </div>
              <div className="second mb-3">
                <h4 className="bottom-line d-inline">付費方式</h4>
                <div className="row mt-3 mb-3">
                  <div className="col text-center">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id="option1"
                        autoComplete="off"
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
                        name="options"
                        id="option2"
                        autoComplete="off"
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
                        name="options"
                        id="option3"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-dark" htmlFor="option3">
                        貨到付款
                      </label>
                    </div>
                  </div>
                </div>
                <h4 className="bottom-line d-inline">發票類型</h4>
                <div className="row mt-3 mb-3">
                  <div className="col text-center">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options2"
                        id="option4"
                        autoComplete="off"
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
                        name="options2"
                        id="option5"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-dark" htmlFor="option5">
                        三連發票
                      </label>
                    </div>
                  </div>
                  <div className="col" />
                </div>
              </div>
              <div className="second mb-5">
                <h4 className="bottom-line d-inline">送貨方式</h4>
                <div className="row mt-3">
                  <div className="col text-center">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options3"
                        id="option6"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-dark" htmlFor="option6">
                        超取
                      </label>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options3"
                        id="option7"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-dark" htmlFor="option7">
                        宅配
                      </label>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="btn-check"
                        name="options3"
                        id="option8"
                        autoComplete="off"
                      />
                      <label className="btn btn-outline-dark" htmlFor="option8">
                        中華郵政
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row customer-info">
                  <div className="col m-2">
                    <label htmlFor="city">
                      <h6>縣市</h6>
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="form-control"
                    />
                  </div>
                  <div className="col m-2">
                    <label htmlFor="administrative district">
                      <h6>行政區</h6>
                    </label>
                    <input
                      type="text"
                      name="administrative district
                "
                      id="administrative district
                "
                      className="form-control"
                    />
                  </div>
                  <div className="col m-2">
                    <label htmlFor="address">
                      <h6>詳細地址</h6>
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="second mb-3">
                <div className="row p-2">
                  <div className="col">
                    <h4>隱私權政策</h4>
                    <p className="view-text-scroll">
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
              <div className="agreement text-center">
                <input type="checkbox" name="agreement" id="agreement" />
                <label htmlFor="agreement">
                  已閱讀並同意「訂購須知」及「隱私權政策」。
                </label>
                <div className="agreement-btn">
                  <div className="m-1">
                    <button
                      type="submit"
                      className="text-center btn btn-warning go-shopping"
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
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
