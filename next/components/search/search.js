import React from 'react'
import styles from '@/styles/search.module.css'

export default function ItineraryProducts() {
  const updateDestinationOptions = () => {
    const regionSelect = document.getElementById('regionSelect')
    const destinationSelect = document.getElementById('destinationSelect')

    // 清空目的地選項
    destinationSelect.innerHTML = ''

    // 添加"請選擇"選項
    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.disabled = true
    defaultOption.selected = true
    defaultOption.hidden = true
    defaultOption.textContent = '請選擇'
    destinationSelect.appendChild(defaultOption)

    switch (regionSelect.value) {
      case 'CentralSouthAmerica': // 中南美洲
        addOptionsToDestinationSelect([
          '秘魯',
          '智利',
          '阿根廷',
          '古巴',
          '墨西哥',
          '玻利維亞',
        ])
        break
      case 'Europe': // 歐洲
        addOptionsToDestinationSelect([
          '西班牙',
          '葡萄牙',
          '法國',
          '奧地利&捷克',
          ,
          '鐵道之旅',
        ])
        break
      case 'Japan': // 日本
        addOptionsToDestinationSelect([
          '鐵道之旅',
          '九州',
          '名古屋',
          '沖繩',
          '福岡',
          '東京',
        ])
        break
      default:
        destinationSelect.add(new Option('請選擇旅遊區域', ''))
    }
  }

  const addOptionsToDestinationSelect = (options) => {
    const destinationSelect = document.getElementById('destinationSelect')
    options.forEach((option) => {
      const newOption = document.createElement('option')
      newOption.value = option
      newOption.textContent = option
      destinationSelect.appendChild(newOption)
    })
  }

  const removePlaceholderOption = () => {
    const departureSelect = document.getElementById('departureSelect')
    departureSelect.removeChild(departureSelect.firstChild)
  }

  return (
    <>
      <title>行程搜索</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
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
                onChange={updateDestinationOptions}
              >
                <option value="" disabled selected hidden>
                  請選擇
                </option>
                <option value="CentralSouthAmerica">中南美洲</option>
                <option value="Europe">歐洲</option>
                <option value="Japan">日本</option>
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
                onChange={removePlaceholderOption}
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

          {/* <div className={styles.formGroup}>
            <label htmlFor="#"></label>
            <div className={styles.formField}>
              <a
                href="javascript: void(0)"
                className={styles.searchButton}
                type="button"
              >
                開始探索
                <i
                  className="fa-solid fa-angles-right fa-fade"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </div>
          </div> */}
          <div className={styles.formGroup}>
            <label htmlFor="#"></label>
            <div className={styles.formField}>
              <a
                href="http://localhost:3000/itinerary-product/list"
                className={styles.searchButton}
                type="button"
              >
                開始探索
                <i
                  className="fa-solid fa-angles-right fa-fade"
                  style={{ color: '#ffffff' }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
