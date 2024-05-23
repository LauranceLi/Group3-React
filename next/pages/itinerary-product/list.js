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
  const [area, setArea] = useState([])
  const [priceGte, setPriceGte] = useState(0)
  const [priceLte, setPriceLte] = useState(300000)
  const [days, setDays] = useState(15)

  const updateDestinationOptions = () => {
    const [destinationOptions, setDestinationOptions] = useState([]); // 目的地下拉式選單的選項狀態
    //setState

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

    switch (selectedRegion) {
      case 'CentralSouthAmerica': // 中南美洲
        setDestinationOptions(['秘魯', '智利', '阿根廷', '古巴', '墨西哥', '玻利維亞']);
        break;
      case 'Europe': // 歐洲
        setDestinationOptions(['西班牙', '葡萄牙', '法國', '奧地利&捷克', '鐵道之旅']);
        break;
      case 'Japan': // 日本
        setDestinationOptions(['鐵道之旅', '九州', '名古屋', '沖繩', '福岡', '東京']);
        break;
      default:
        setDestinationOptions([]); // 預設情況下清空目的地選項
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

  const countryOptions = ['請選擇', '中南美洲', '歐洲', '日本']
  // const areaOptions = ['請選擇', '秘魯', '智利', '阿根廷']

  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(9)

  const [orderby, setOrderby] = useState({ sort: 'travel_id', order: 'asc' })

  // 新增保存初始價格範圍的狀態
  const [initialPriceGte, setInitialPriceGte] = useState(0)
  const [initialPriceLte, setInitialPriceLte] = useState(300000)

  // 新增保存是否已經搜尋的狀態
  const [searched, setSearched] = useState(false)

  const extractDays = (daysString) => {
    const daysMatch = daysString.match(/\d+/) // 提取文字中的數字
    return daysMatch ? parseInt(daysMatch[0]) : 0 // 將提取的數字轉換為整數
  }

  const getProducts = async (params) => {
    try {
      const data = await loadProducts(params)

      if (data.pageCount && typeof data.pageCount === 'number') {
        setPageCount(data.pageCount)
      }

      if (data.total && typeof data.total === 'number') {
        setTotal(data.total)
      }

      if (Array.isArray(data.products)) {
        // 篩選出符合條件的產品
        const filteredProducts = data.products.filter((product) => {
          const productDays = extractDays(product.days)
          // 比較產品的天數是否在您選擇的天數以內，只顯示相符的產品
          return productDays <= days
        })
        setProducts(filteredProducts) // 更新產品狀態
      }
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }

  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  }

  const handleSearch = () => {
    setPage(1)
    setSearched(true)

    const params = {
      page: 1,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
      title_like: titleLike,
      country: country.join(','), // 將選擇的旅遊區域轉換為字串
      area: area.join(','), // 將選擇的目的地轉換為字串
      price_gte: priceGte,
      price_lte: priceLte,
      days: days,
    }

    // 保存當前價格範圍的值
    setInitialPriceGte(priceGte)
    setInitialPriceLte(priceLte)

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
      area: area.join(','),
      price_gte: priceGte,
      price_lte: priceLte,
      days: days,
    }

    getProducts(params)
  }, [page, perpage, orderby])

  const resetFilters = () => {
    if (!searched) {
      setPriceGte(initialPriceGte)
      setPriceLte(initialPriceLte)
    }
  }

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
        旅遊區域 :&nbsp;
        <select
        value={country}
        id="regionSelect"
        onChange={(e) => {
          setCountry(e.target.value);
          updateDestinationOptions(e.target.value); // 更新目的地下拉式選單
        }}
      >
        {countryOptions.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
        <hr />
        目的地 :&nbsp;
        <select
        value={area}
        id="destinationSelect"
        onChange={(e) => {
          setArea(e.target.value.split(','));
        }}
      >
        {destinationOptions.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
        <hr />
      </div>
      <div>
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
        天數:&nbsp;
        <input
          type="range"
          min={0}
          max={15}
          value={days}
          onChange={(e) => setDays(extractDays(e.target.value))}
        />
        <span>&nbsp;{days}天</span>
      </div>
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
          {products.map((v) => (
            <li key={v.travel_id}>
              <Link href={`/itinerary-product/${v.travel_id}`}>
                <Image
                  src={`/images/${v.logo}`}
                  width={336}
                  height={250}
                  alt=""
                  className={styles.itineraryProductsImg}
                />
                {v.introduce} (價格:{v.price}) (出發日期:{v.time})
              </Link>
            </li>
          ))}
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
