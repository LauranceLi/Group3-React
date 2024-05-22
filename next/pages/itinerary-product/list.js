import { useState, useEffect } from 'react'
import Link from 'next/link'

import { loadProducts } from '@/services/itinerary-product'
import BS5Pagination from '@/components/common/bs5-pagination'

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案
export default function List() {
  // 最後得到的資料
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [products, setProducts] = useState([])

  // 查詢條件用
  const [titleLike, setTitleLike] = useState('')
  const [country, setCountry] = useState([]) // 複選要用陣列
  const [priceGte, setPriceGte] = useState(0)
  const [priceLte, setPriceLte] = useState(300000)

  // 國家選項陣列
  const countryOptions = ['中南美洲', '歐洲', '日本']

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(9)

  // 排序用
  const [orderby, setOrderby] = useState({ sort: 'travel_id', order: 'asc' })

  // 加入參詢條件params物件
  const getProducts = async (params) => {
    // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
    try {
      const data = await loadProducts(params)
      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料

      if (data.pageCount && typeof data.pageCount === 'number') {
        setPageCount(data.pageCount)
      }

      if (data.total && typeof data.total === 'number') {
        setTotal(data.total)
      }

      // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
      // 因應要分頁和查詢，所以回應改為整個data，products是data.products
      if (Array.isArray(data.products)) {
        setProducts(data.products)
      }
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }

  // BS5Pagination分頁控制列觸發事件使用
  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  }

  // 國家複選時使用
  const handleCountryChecked = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在陣列中
    if (country.includes(tv)) {
      // 如果有===>移出陣列
      const nextCountry = country.filter((v) => v !== tv)
      setCountry(nextCountry)
    } else {
      // 否則===>加入陣列
      const nextCountry = [...country, tv]
      setCountry(nextCountry)
    }
  }

  // 按下搜尋按鈕
  const handleSearch = () => {
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    setPage(1)

    const params = {
      page: 1, // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
      perpage,
      sort: orderby.sort,
      order: orderby.order,
      title_like: titleLike,
      country: country.join(','),
      price_gte: priceGte,
      price_lte: priceLte,
    }

    getProducts(params)
  }

  // 樣式3: didMount + didUpdate
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
    }

    getProducts(params)
  }, [page, perpage, orderby])

  return (
    <>
      <h1>商品列表頁</h1>
      <div>
        <button
          onClick={() => {
            // 最小頁面是1(不能小於1)
            const nextPage = page - 1 >= 1 ? page - 1 : 1
            setPage(nextPage)
          }}
        >
          上一頁
        </button>
        <button
          onClick={() => {
            // 最大頁面不能大於總頁數pageCount
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
        行程搜尋 :&nbsp;
        {countryOptions.map((v, i) => {
          return (
            <label
              // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
              key={i}
            >
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
      價格大於:
      <input
        type="number"
        value={priceGte}
        onChange={(e) => {
          setPriceGte(Number(e.target.value))
        }}
      />
      小於:
      <input
        type="number"
        value={priceLte}
        onChange={(e) => {
          setPriceLte(Number(e.target.value))
        }}
      />
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
            <option value="travel_id,asc">ID排序(由小至大)</option>
            <option value="travel_id,desc">ID排序(由大至小)</option>
            <option value="price,asc">價格排序(由低至高)</option>
            <option value="price,desc">價格排序(由高至低)</option>
            <option value="days,desc">天數排序(由高至低)</option>
            <option value="time,desc">出發日期排序(由高至低)</option>
          </select>
        </label>
        <hr />
        <ul>
          {products.map((v) => {
            return (
              <li key={v.travel_id}>
                <Link href={`/itinerary-product/${v.travel_id}`}>
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
