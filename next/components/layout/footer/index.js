// Footer.js
import React from 'react'
import styles from '/styles/layout/footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <div className={styles.footerItemContext}>
            <h5>公司信息</h5>
            <ul>
              <li>企業名稱：ABC有限公司</li>
              <li>地址：台北市中山區林森北路100號1樓</li>
              <li>電話：02-1234-5678</li>
              <li>郵箱：info@example.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerItem}>
          <div className={styles.footerItemContext}>
            <h5>快速鏈接</h5>
            <ul>
              <li>
                <a href="#">關於我們</a>
              </li>
              <li>
                <a href="#">產品</a>
              </li>
              <li>
                <a href="#">服務</a>
              </li>
              <li>
                <a href="#">聯絡我們</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerItem}>
          <div className={styles.footerItemContext}>
            <h5>追蹤我們</h5>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Line@</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className={styles.copyRight}>
          <p>版權所有 &copy; 2024 締杉旅遊</p>
        </div>

    </footer>
  )
}

export default Footer
