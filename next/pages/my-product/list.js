import { useState, useEffect } from 'react'
import Link from 'next/link'

import { loadProducts } from '@/services/my-product'

import BS5Pagination from '@/components/common/bs5-pagination'

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案
export default function List() {
  // 最後得到的資料
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [products, setProducts] = useState([])

  // 排序
  const [orderby, setOrderby] = useState({ sort: 'travel_id', order: 'asc' })

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(10)


  // 加入參詢條件params物件
  const getProducts = async (params) => {

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
  }

  // BS5Pagination分頁控制列觸發事件使用
  const handlePageClick = (e) => {
    setPage(e.selected + 1)
  }

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
      sort: orderby.sort,
      order: orderby.order,
    }

    getProducts(params)
  }, [page, perpage, orderby])

  return (
    <>
      <div>
        <button
          onClick={() => {
            // 最小頁面是1(不能小於1)
            const nextPage = page - 1 > 1 ? page - 1 : 1
            setPage(nextPage)
          }}
        >
          上一頁
        </button>
        <button
          onClick={() => {
            // 最大頁面不能大於總頁數pageCount
            const nextPage = page + 1 < pageCount ? page + 1 : pageCount
            setPage(nextPage)
          }}
        >
          下一頁
        </button>
        目前頁面 {page} / 總頁數: {pageCount} / 總項目數: {total}
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
          </select>
        </label>
      </div>
      <hr />
      <div>
        <ul className="list-group list-group-flush">
          {products.map((v, i) => {
            return (
              <li className="list-group-item" key={v.travel_id}>
                <Link href={`/my-product/${v.travel_id}`}>
                  {v.introduce}(價格:{v.price})
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <BS5Pagination
          forcePage={page - 1}
          onPageChange={handlePageClick}
          pageCount={pageCount}
        />
      </div>
    </>
  )
}
