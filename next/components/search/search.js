import React from 'react'
import styles from '@/styles/search.module.css'

export default function itineraryProducts() {
  return (
    <>
      <title>行程搜索</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
        <div className={styles.SearchBAR}>
          <div className={styles.SearchContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="#">旅遊區域</label>
              <div className={styles.formField}>
                <select
                  name=""
                  id="regionSelect"
                  className="form-control form-select"
                  onchange="updateDestinationOptions()"
                >
                  <option value="" disabled selected hidden>
                    請選擇
                  </option>
                  <option value="1">中南美洲</option>
                  <option value="2">歐洲</option>
                  <option value="3">日本</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="#">目的地</label>
              <div className={styles.formField}>
                <select
                  name=""
                  id="destinationSelect"
                  className="form-control form-select"
                >
                  <option value="" disabled selected hidden>
                    請選擇
                  </option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="#">出發地</label>
              <div className={styles.formField}>
                <select
                  name=""
                  id="departureSelect"
                  className="form-control form-select"
                  onchange="removePlaceholderOption()"
                >
                  <option value="" disabled selected hidden>
                    請選擇
                  </option>
                  <option value="1">不限</option>
                  <option value="2">台北-桃園機場</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup2}>
              <label htmlFor="#">出發期間</label>
              <div className={styles.datepicker}>
                <div className={styles.formField2}>
                  <input className={styles.datepicker1} type="date" />
                  <div className={styles.datepickerDash}>–</div>
                  <input className={styles.datepicker1} type="date" />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="#">關鍵字搜尋</label>
              <div className={styles.formField}>
                <input
                  className={styles.keywordSearch}
                  type="text"
                  name=""
                  placeholder="    請輸入關鍵字"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <br />
              <div className={styles.formField}>
                <a
                  href="javascript: void(0)"
                  className={styles.searchButton}
                  type="button"
                >
                  開始探索
                  <i class="fa-solid fa-angles-right fa-fade"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
