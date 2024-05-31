import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/itinerary-product'
import BS5Pagination from '@/components/common/bs5-pagination'
import Image from 'next/image'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Preloader from '@/components/layout/preloader'

export default function List() {
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [products, setProducts] = useState([])
  const [titleLike, setTitleLike] = useState('')
  const [country, setCountry] = useState([])
  const [priceGte, setPriceGte] = useState(0)
  const [priceLte, setPriceLte] = useState(300000)
  const [days, setDays] = useState(15)

  const countryOptions = ['中南美洲', '歐洲', '日本']

  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(9)

  const extractDays = (daysString) => {
    const daysMatch = daysString.match(/\d+/) // 提取文字中的數字
    return daysMatch ? parseInt(daysMatch[0]) : 0 // 將提取的數字轉換為整數
  }

  const [orderby, setOrderby] = useState({ sort: 'travel_id', order: 'asc' })

  const getProducts = async (params) => {
    try {
      const { page: currentPage, ...restParams } = params
      const data = await loadProducts(params)

      if (data.pageCount && typeof data.pageCount === 'number') {
        setPageCount(data.pageCount)
      }

      if (data.total && typeof data.total === 'number') {
        setTotal(data.total)
      }

      const filteredProducts = data.products.filter((product) => {
        const productDays = extractDays(product.days)
        return productDays <= days
      })
      setProducts(filteredProducts)
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }

  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  }

  const handleCountryChecked = (e) => {
    const tv = e.target.value
    if (country.includes(tv)) {
      const nextCountry = country.filter((v) => v !== tv)
      setCountry(nextCountry)
    } else {
      const nextCountry = [...country, tv]
      setCountry(nextCountry)
    }
  }

  const handleSearch = () => {
    const params = {
      page: 1,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
      title_like: titleLike,
      country: country.join(','),
      price_gte: priceGte,
      price_lte: priceLte,
      days: days,
    }

    getProducts(params)
  }

  useEffect(() => {
    const params = {
      page,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
      title_like: titleLike,
      country: country.join(','),
      price_gte: priceGte,
      price_lte: priceLte,
      days: days,
    }

    getProducts(params)
  }, [page, perpage, orderby])

  return (
    <>
      <Preloader />
      <Navbar />
      <main className={styles.itineraryMain}>
        <div className={styles.itineraryDiv}>
          <div className="row">
            <div className="col-lg-3">
              <h3 className={styles.itineraryH3}>篩選項目</h3>
              <div className={styles.SliderDiv3}>
                <div className={styles.SliderDiv2}>
                  <div className={styles.itineraryProductsTitle}>價格區間</div>

                  <div className={styles.itineraryProductsItem1}>

                    <div className={styles.SliderDiv}>
                    <div className={styles.SliderPrice}>
                      大於 :&nbsp;
                      <input
                        type="range"
                        min={0}
                        max={300000}
                        step={5000}
                        value={priceGte}
                        onChange={(e) => setPriceGte(Number(e.target.value))}
                      />
                      <span>&nbsp;{priceGte}元</span>
                     </div> 
                     <div className={styles.SliderPrice}>
                      小於 :&nbsp;
                      <input
                        type="range"
                        min={0}
                        max={300000}
                        step={5000}
                        value={priceLte}
                        onChange={(e) => setPriceLte(Number(e.target.value))}
                      />
                      <span>&nbsp;{priceLte}元</span>
                    </div>  

                    </div>
                  </div>
                </div>

                <div className={styles.SliderDiv2}>
                  <div className={styles.itineraryProductsTitle}>天數</div>

                  <div className={styles.itineraryProductsItem1}>
                    <div className={styles.SliderDiv4}>
                    <span>&nbsp;{days}天以內</span>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        value={days}
                        onChange={(e) => setDays(extractDays(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.SliderDiv2}>
                  <div className={styles.itineraryProductsTitle}>旅遊區域</div>
                  <div className={styles.itineraryProductsItem1}>
                    <div className={styles.SliderDiv4}>
                      {countryOptions.map((v, i) => {
                        return (
                          <label key={i}>
                            <input
                              type="checkbox"
                              value={v}
                              checked={country.includes(v)}
                              onChange={handleCountryChecked}
                            />
                            {v}
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className={styles.SliderDiv2}>
                <div className={styles.keyWordDiv}>
                  <span className={styles.keyWord}>關鍵字搜尋 :&nbsp;</span>
                  <input
                    type="text"
                    placeholder="&nbsp;請輸入關鍵字"
                    value={titleLike}
                    onChange={(e) => {
                      setTitleLike(e.target.value)
                    }}
                  />
                  </div>
                  <div className={styles.searchBtn}>
                    {/* <button onClick={handleSearch}>搜尋</button> */}
                    <button onClick={handleSearch} class="btn">
                      <span>搜尋行程</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 ">
              <div className={styles.containerFluid}>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <h3 className={styles.itineraryH3}>搜尋結果</h3>
                      </div>
                      <div className="col-6 col-md-3"></div>
                      <div className="col-6 col-md-3">
                        <h6 className={styles.itineraryH6}>
                          共有 {total} 筆商品
                        </h6>
                      </div>
                      <label className="col-6 col-md-3">
                        <div className={styles.itineraryProductsP}>
                          排序方式:
                          <select
                            value={`${orderby.sort},${orderby.order}`}
                            onChange={(e) => {
                              const selected = e.target.value
                              setOrderby({
                                sort: selected.split(',')[0],
                                order: selected.split(',')[1],
                              })
                            }}
                          >
                            <option value="price,asc">價格(由低至高)</option>
                            <option value="price,desc">價格(由高至低)</option>
                            {/* <option value="days,asc">天數(由低至高)</option>
                            <option value="days,desc">天數(由高至低)</option> */}
                            <option value="time,asc">出發日期(由近至遠)</option>
                            <option value="time,desc">
                              出發日期(由遠至近)
                            </option>
                          </select>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.itineraryContainer}>
                {products.map((v, i) => {
                  return (
                    <div
                      key={v.travel_id}
                      className={styles.itineraryProductsItem3}
                    >
                      <Link href={`/itinerary-product/${v.travel_id}`}>
                        <div className={styles.itineraryProductsItem2}>
                          <Image
                            src={`/images/${v.logo}`}
                            width={336}
                            height={250}
                            alt=""
                            className={styles.itineraryProductsImg}
                          />
                          <div className={styles.triangleContainer}></div>
                          <div className={styles.itineraryProductsDays}>
                            {v.days}
                          </div>
                        </div>

                        <div className={styles.itineraryDetails}>
                          <div className={styles.itineraryTime}>
                            出發日期:&nbsp;{v.time}
                          </div>
                          <div>
                            <div className={styles.itineraryDescription}>
                              {v.introduce}
                            </div>
                          </div>

                          <div className={styles.itineraryDetailsIn}>
                            <div className={styles.itineraryDetailsLeft}>
                              <div className={styles.itineraryItem}>
                                機位{v.seat}
                              </div>
                              <div className={styles.itineraryItem}>
                                報名{v.number}
                              </div>
                              <div
                                className={styles.itineraryItem}
                                style={{ color: '#04abf2' }}
                              >
                                可售{v.sale}
                              </div>
                            </div>
                            <div className={styles.itineraryDetailsRight}>
                              <div className={styles.itineraryPriceSmall}>
                                售價
                              </div>
                              <div className={styles.itineraryPriceAmount}>
                                NT${v.price}
                              </div>
                              <div className={styles.itineraryPriceSmall}>
                                起
                              </div>
                            </div>
                          </div>
                          <div className={styles.flightDetails}>
                            {v.airport}
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paginationContainer}>
          <BS5Pagination
            forcePage={page - 1}
            onPageChange={handlePageClick}
            pageCount={pageCount}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
