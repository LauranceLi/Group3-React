import React from 'react'
import styles from '/styles/members/register.module.css'
import { ImGoogle2 } from 'react-icons/im'
import { ImFacebook2 } from 'react-icons/im'

const RegisterForm = () => {
  return (
    <main>
      <div className={`${styles.registerFormContainer} bg-img`}>
        <div className={styles.registerBox}>
          <div className={styles.registerTitle}>
            <h2>歡迎加入締杉旅遊</h2>
          </div>

          <div className={styles.thirdPartyLogin}>
            <h5>其他方式</h5>
            <div
              className={`${styles.registerItem} ${styles.thirdPartyLoginBtns}  border-0 justify-content-start`}
            >
              <a href="" className={`${styles.thirdPartyLoginBtn} ${styles.facebookIcon}`}>
              <ImFacebook2 size={22} />
                Facebook
              </a>
              <a href="" className={`${styles.thirdPartyLoginBtn} ${styles.googleIcon}`}>
              <ImGoogle2 size={22} />
                Google
              </a>
            </div>
          </div>

          <form action="#" className={styles.registerForm} method="post">
            <h5>註冊</h5>
            <div className={styles.middleBox}>
              <div className={styles.leftBox}>
                <div className={styles.registerItem}>
                  <label htmlFor="email">帳號</label>
                  <input
                    className={styles.registerInput}
                    name="email"
                    type="text"
                    id="email"
                    placeholder="請填入信箱"
                  />
                </div>
                <div className={`${styles.registerItem} border-0 `}>
                  <button
                    type="submit"
                    className={`btn ${styles.checkMail}`}
                    
                  >
                    驗證信箱
                  </button>
                </div>
                <div className={styles.registerItem}>
                  <label htmlFor="password">密碼</label>
                  <input
                    className={styles.registerInput}
                    name="password"
                    type="password"
                    id="password"
                    placeholder="請輸入密碼"
                  />
                  <button className={styles.eyeIcon} type="button"></button>
                </div>
                <div className={styles.registerItem}>
                  <label htmlFor="passwordAgain">確認密碼</label>
                  <input
                    className={styles.registerInput}
                    name="passwordAgain"
                    type="password"
                    id="passwordAgain"
                    placeholder="請再次確認密碼"
                  />
                  <button className={styles.eyeIcon} type="button"></button>
                </div>
              </div>
              <div className={styles.rightBox}>
                <div className={styles.registerItem}>
                  <label htmlFor="name">姓名</label>
                  <input
                    className={styles.registerInput}
                    name="name"
                    type="text"
                    id="name"
                  />
                </div>
                <div className={styles.registerItem}>
                  <label htmlFor="mobile">電話</label>
                  <input
                    className={styles.registerInput}
                    name="mobile"
                    type="mobile"
                    id="mobile"
                  />
                </div>
                <div className={styles.registerItem}>
                  <label htmlFor="interest">興趣主題</label>
                  <select name="interest" className={styles.interestSelect}>
                    <option
                      className={styles.interestOption}
                      value="south-america"
                    >
                      中南美洲
                    </option>
                    <option className={styles.interestOption} value="japan">
                      日本
                    </option>
                    <option className={styles.interestOption} value="europe">
                      歐洲
                    </option>
                  </select>
                </div>

                <div
                  className={`${styles.registerItem} border-0 d-flex align-items-end`}
                >
                  <button
                    type="submit"
                    className={`btn sonar-btn  ${styles.registerBtn}`}
                  >
                    註冊
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default RegisterForm
