import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadProduct } from '@/services/itinerary-product'
import DailyTour from '@/components/itinerary/daily-tour'
import styles from '@/styles/itinerary.module.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { MdPlayArrow } from 'react-icons/md'

// 資料夾的中的`[pid].js`檔案代表這路由中，除了根路由與靜態路由之外的所有路由，例如 `/product/123` 就是這個檔案
// 資料來源:
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}

export default function Detail() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()

  const [product, setProduct] = useState({
    travel_id: 0,
    days: '',
    logo: '',
    time: '',
    title: '',
    introduce: '',
    seat: 0,
    number: 0,
    sale: 0,
    price: 0,
    airport: '',
    sign_up: '',
    country: '',
  })

  // 宣告一個指示是不是正在載入資料的狀態
  // 因為一開始一定是要載入資料，所以預設值為true
  const [isLoading, setIsLoading] = useState(true)

  const getProduct = async (pid) => {
    // const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`

    // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
    try {
      // const res = await fetch(url)
      // const data = await res.json()
      const data = await loadProduct(pid)

      console.log(data)

      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
      // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        setProduct(data)
        // 關掉載入動畫，1.5s後
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pidFirst}>
          <div className={styles.pid}>
            <Link
              href="/itinerary-product/list"
              style={{ color: '#ffb534', fontSize: '20px' }}
            >
              回到搜索頁
            </Link>
          </div>
          <div className={styles.pid2}>
            <a
              className={styles.itineraryBtn}
              href="http://localhost:3000/itinerary-order/3"
            >
              報名
              <MdPlayArrow />
            </a>
          </div>
        </section>
        <DailyTour />
        <Footer />
      </main>
    </>
  )
}
