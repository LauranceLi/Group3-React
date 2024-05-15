import React from 'react'
import styles from '/styles/login.module.css' 
import Avatar from './avatar'
import PasswordInput from './passwordInput'
import { ImGoogle2 } from 'react-icons/im'
import { ImFacebook2 } from 'react-icons/im'
import { GiCommercialAirplane } from "react-icons/gi";

const LoginForm = () => {
  return (
    <>
      <main className={'h-100'}>
        <div className={`${styles.loginFormContainer} bgImg h-100`}>

          <div className={styles.leftBox}>
          <Avatar />
            <form action="#" className={styles.loginForm} method="post">
              <h5>會員登入</h5>
              <div className={styles.loginItem}>
                <label htmlFor="loginAccount">帳號</label>
                <input
                  className={styles.loginInput}
                  name="loginAccount"
                  type="text"
                  id="loginAccount"
                  placeholder="請填入信箱"
                />
              </div>
<PasswordInput />

              <div className={styles.loginItem}>
                <button
                  type="submit"
                  className={`btn sonarBtn whiteBtn ${styles.loginBtn}`}
                >
                  登入
                </button>
              </div>
              <div className={styles.loginItem}>
                <a
                  className={`${styles.registerBtn}`}
                  href="../register/register.html"
                >
                  立即加入
                </a>
              </div>
              <a href="#" className={styles.forgetPW}>
                忘記密碼
              </a>
            </form>
            <div className={styles.thirdPartyLogin}>
              <h5>其他登入方式</h5>
              <div className={`${styles.loginItem} border-0`}>
                <a href="" className={styles.thirdPartyLoginBtn}>
                  <ImFacebook2 size={22} />
                  Facebook
                </a>
                <a href="" className={styles.thirdPartyLoginBtn}>
                  <ImGoogle2 size={22} />
                  Google
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.introduction}>
              <h1>締杉旅遊</h1>
              <h5>
                杉之質樸蒼翠，春迎萬物復甦，夏傍蔚藍湖畔，秋見金黃樹影，冬又敖然而立，如君子而締之以心。
                <br />
                <br />
                沐浴在溫潤儒雅間，徜徉於天地褒廣中，靈魂的祥和與寧靜，妙不可言。
              </h5>
              <h2>締杉旅遊 邀您領略，四季遞嬗。</h2>
            </div>
            <div className={styles.contact}>
              <button className={`${styles.contactBtn}`}>
                <div>
                  <span>探索更多精彩 <GiCommercialAirplane size={35}/></span>
                  <span>聯絡我們</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginForm
