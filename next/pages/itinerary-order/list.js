import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loadProducts } from '@/services/itinerary-product'

export default function List() {
  // 注意1: 初始值至少要空白陣列。首次render會使用初始值，對應由伺服器得到的物件陣列模型。
  // 注意2: 在應用程式執行過程中，狀態一定都要保持陣列資料類型
  const [products, setProducts] = useState([])
  const baseUrl = 'http://localhost:3005/api/itinerary'


  // 自訂控制開關載入動畫
  // 要手動控制關閉，Context要給參數close={0} `<LoaderProvider close={0}>`
  // showLoader是開載入動畫函式，hideLoader為關動畫函式(手動控制關閉才有用)

  const getProducts = async (params) => {
    try {
      const { page: currentPage, ...restParams } = params
      const data = await loadProducts(params)
      setProducts(data.products)
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }

  // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  useEffect(() => {
    const params = {
      // 您可以在這裡定義需要傳遞的參數
      page: 1, // 示例參數
      // ...其他參數
    }

    getProducts(params)
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>

      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.travel_id}>
              <Link href={`/itinerary-order/${v.travel_id}`}>{v.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
