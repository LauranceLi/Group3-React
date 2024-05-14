import React from 'react';
import styles from '/styles/login.module.css'; // 确保路径正确

function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm}>
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
        <div className={styles.loginItem}>
          <label htmlFor="loginPassword">密碼</label>
          <input
            className={styles.loginInput}
            name="loginPassword"
            type="password"
            id="loginPassword"
          />
          <button className={styles.eyeIcon} type="button">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
        <div className={styles.loginItem}>
          <button type="submit" className={`${styles.btn} ${styles.sonarBtn} ${styles.whiteBtn} ${styles.loginBtn}`}>
            登入
          </button>
        </div>
        <div className={styles.loginItem}>
          <a className={`${styles.btn} ${styles.sonarBtn} ${styles.registerBtn}`} href="../register/register.html">
            立即加入
          </a>
        </div>
        <a href="#" className={styles.forgetPW}>忘記密碼</a>
      </form>
      <div className={styles.thirdPartyLogin}>
        <h5>其他登入方式</h5>
        <div className={styles.loginItem} style={{ border: 0 }}>
          <a href="" className={styles.thirdPartyLoginBtn}>
            <i className="fa-brands fa-facebook-f"></i>
            Facebook
          </a>
          <a href="" className={styles.thirdPartyLoginBtn}>
            <i className="fa-brands fa-google"></i>
            Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
