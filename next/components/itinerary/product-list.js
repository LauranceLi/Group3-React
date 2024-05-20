import React from 'react'
import Image from 'next/image'
import styles from '@/styles/itinerary.module.css'
import products from '@/data/Itinerary.json'

export default function ProductList() {
  return (
    <>
      <div className="col-lg-9 col-md-12">
        <div className={styles.containerFluid}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 col-md-3">
                  <h3 className={styles.itineraryH3}>搜尋結果</h3>
                </div>
                <div className="col-6 col-md-3"></div>
                <div className="col-6 col-md-3">
                  <p>共有 5 筆商品</p>
                </div>
                <div className="col-6 col-md-3">
                  <div className={styles.itineraryProductsP}>
                    排序方式
                    <select
                      className={styles.itinerarySelect}
                      name=""
                      id=""
                      onchange="removePlaceholderOption()"
                    >
                      <option value="" disabled selected hidden>
                        請選擇
                      </option>
                      <option value="datetime">出發日期</option>
                      <option value="money">售價</option>
                      <option value="day">天數</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.itineraryContainer}>
          <div className={styles.itineraryProductsItem3}>
            <div className={styles.itineraryProductsItem2}>
              <div>
                <Image
                  src="/images/秘魯・印加帝國13日.jpg"
                  alt="秘魯・印加帝國13日"
                  width={336}
                  height={250}
                  priority={true}
                />
                <div className={styles.triangleContainer}></div>
                <div className={styles.itineraryProductsDays}>13天</div>
              </div>
            </div>
            <div className={styles.itineraryDetails}>
              <div>
                2024/07/09(二)
                <button className={styles.departureButton}>保證出發</button>
              </div>
              <div className={styles.itineraryDescription}>
                秘魯單國13日：世界七大奇蹟馬丘比丘、世界遺產納斯卡線、印加古城庫斯科、絕美打卡點彩虹山、高山淡水的的喀喀湖
              </div>
              <div className={styles.itineraryDetailsIn}>
                <div className={styles.itineraryDetailsLeft}>
                  <div className={styles.itineraryItem}>機位31</div>
                  <div className={styles.itineraryItem}>報名11</div>
                  <div
                    className={styles.itineraryItem}
                    style={{ color: '#04abf2' }}
                  >
                    可售20
                  </div>
                </div>
                <div className={styles.itineraryDetailsRight}>
                  <div className={styles.itineraryPriceSmall}>售價</div>
                  <div className={styles.itineraryPriceAmount}>NT$272,000</div>
                  <div className={styles.itineraryPriceSmall}>起</div>
                </div>
              </div>
            </div>
            <div className={styles.flightDetails}>台北-桃園機場出發</div>
          </div>

          {products.map((v, i) => {
            return (
              <div key={v.id} className={styles.itineraryProductsItem3}>
              <div className={styles.itineraryProductsItem2}>
                <div>{v.photos}</div>
                <div className={styles.triangleContainer}></div>
                <div className={styles.itineraryProductsDays}>{v.days}</div>
                </div>


                <div>
                <div className={styles['w-400']}>{v.name}</div>
                  <button
                    onClick={() => {
                      addItem(v)

                      notify(v.name)
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
