import { useState, useEffect } from 'react';
import Link from 'next/link';

import { loadProducts } from '@/services/itinerary-product';

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案
export default function List() {
  // 最後得到的資料
  const [total, setTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [products, setProducts] = useState([]);

  // 分頁用
  const [page, setPage] = useState(1);
  const [perpage, setPerpage] = useState(9);

  // 加入參詢條件params物件 
  const getProducts = async (params) => {
    // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
    try {
      const data = await loadProducts(params)
      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
      
      if (data.pageCount && typeof data.pageCount === 'number') {
        setPageCount(data.pageCount);
      }
        
      if (data.total && typeof data.total === 'number') {
        setTotal(data.total);
      }
      
      // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
      // 因應要分頁和查詢，所以回應改為整個data，products是data.products  
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
    }

    getProducts(params)
  }, [page, perpage])

  return (
    <>
      <h1>商品列表頁</h1>
      <div>
      <button onClick={()=>{
        // 最小頁面是1(不能小於1)
        const nextPage = page - 1 > 1?page - 1 : 1
        setPage(nextPage)
      }}>上一頁</button>
            <button onClick={()=>{
        // 最大頁面不能大於總頁數pageCount
        const nextPage = page + 1 < pageCount ? page + 1 : pageCount
        setPage(nextPage)
      }}>下一頁</button>

        目前頁面 {page} / 總頁數: {pageCount} / 總項目數: {total}
      </div>
      <ul>
        {products.map((v, i) => (
          <li key={v.travel_id}>
            <Link href={`/itinerary-product/${v.travel_id}`}>{v.introduce}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
