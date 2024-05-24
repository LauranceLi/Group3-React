import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/itinerary-product'
import BS5Pagination from '@/components/common/bs5-pagination'
import Image from 'next/image'
import styles from '@/styles/itinerary.module.css'

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
    const daysMatch = daysString.match(/\d+/) 
    return daysMatch ? parseInt(daysMatch[0]) : 0 
  }

  const [orderby, setOrderby] = useState({ sort: 'travel_id', order: 'asc' })

  const getProducts = async (params) => {
    try {
      const { page: currentPage, ...restParams } = params;
      const data = await loadProducts(params);
  
      if (data.pageCount && typeof data.pageCount === 'number') {
        setPageCount(data.pageCount);
      }
  
      if (data.total && typeof data.total === 'number') {
        setTotal(data.total);
      }
  
      const filteredProducts = data.products.filter((product) => {
        const productDays = extractDays(product.days);
        return productDays <= days;
      });
      setProducts(filteredProducts); 
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };
  

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
      <h1>商品列表頁</h1>
      <div>
        <button
          onClick={() => {
            const nextPage = page - 1 >= 1 ? page - 1 : 1
            setPage(nextPage)
          }}
        >
          上一頁
        </button>
        <button
          onClick={() => {
            const nextPage = page + 1 <= pageCount ? page + 1 : pageCount
            setPage(nextPage)
          }}
        >
          下一頁
        </button>
        目前頁面 {page} / 總頁數: {pageCount} / 總項目數: {total}
      </div>
      <hr />
      <div>
        關鍵字搜尋 :&nbsp;
        <input
          type="text"
          placeholder="請輸入關鍵字"
          value={titleLike}
          onChange={(e) => {
            setTitleLike(e.target.value)
          }}
        />
        <hr />
        旅遊區域 :
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
      價格範圍 :&nbsp;
      <input
        type="range"
        min={0}
        max={300000}
        step={5000}
        value={priceGte}
        onChange={(e) => setPriceGte(Number(e.target.value))}
      />
      <span>&nbsp;{priceGte}元</span>
      <input
        type="range"
        min={0}
        max={300000}
        step={5000}
        value={priceLte}
        onChange={(e) => setPriceLte(Number(e.target.value))}
      />
      <span>&nbsp;{priceLte}元</span>
      <hr />
      <hr />
      天數:&nbsp;
      <input
        type="range"
        min={0}
        max={15}
        value={days}
        onChange={(e) => setDays(extractDays(e.target.value))}
      />
      <span>&nbsp;{days}天</span>
      <div>
        <button onClick={handleSearch}>搜尋</button>
      </div>
      <hr />
      <div>
        <label>
          排序:
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
            <option value="price,asc">價格排序(由低至高)</option>
            <option value="price,desc">價格排序(由高至低)</option>
            <option value="days,asc">天數排序(由低至高)</option>
            <option value="days,desc">天數排序(由高至低)</option>
            <option value="time,asc">出發日期排序(由低至高)</option>
            <option value="time,desc">出發日期排序(由高至低)</option>
          </select>
        </label>
        <hr />
        <ul>
          {products.map((v) => {
            return (
              <li key={v.travel_id}>
                <Link href={`/itinerary-product/${v.travel_id}`}>
                  <Image
                    src={`/images/${v.logo}`}
                    width={336}
                    height={250}
                    alt=""
                    className={styles.itineraryProductsImg}
                  />
                  {v.introduce}
                  (價格:{v.price}) (出發日期:{v.time})
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <BS5Pagination
        forcePage={page - 1}
        onPageChange={handlePageClick}
        pageCount={pageCount}
      />
    </>
  )
}
