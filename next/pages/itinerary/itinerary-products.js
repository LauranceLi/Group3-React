import React from 'react'
import Search from '@/components/search/search'
import ProductList from '@/components/itinerary/product-list'
import styles from '@/styles/itinerary.module.css'
// import Slider1 from '@/components/itinerary/slider1'
// import Slider2 from '@/components/itinerary/slider2'
import Pagination from '@/components/itinerary/pagination'

export default function itineraryProducts() {
  return (
    <>
      <Search />
      <main>
        <div className={styles.itineraryDiv}>
          <div className="row">
            <div className="col-lg-3">
              <h3 className={styles.itineraryH3}>篩選項目</h3>
              <div className={styles.itineraryProductsTitle}>價格區間</div>
              <div className={styles.itineraryProductsItem1}>
                <div className={styles.SliderDiv}>
                  {/* <Slider1 /> */}
                </div>
              </div>
              <div className={styles.SliderDiv2}>
                <div className={styles.itineraryProductsTitle}>天數</div>
                <div className={styles.itineraryProductsItem1}>
                  <div className={styles.SliderDiv}>
                    {/* <Slider2 /> */}
                  </div>
                </div>
              </div>
            </div>
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
                <ProductList />
              </div>
            </div>
            
          </div>
        </div>
        <Pagination />
      </main>
    </>
  )
}
