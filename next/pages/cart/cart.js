import React ,{useEffect} from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import CartList from '@/components/cart/cart_list'
import RecommendItems from '@/components/cart/recommend_items'

export default function Cart() {
  useEffect(() => {
    const checkUser = async () => {
      // 檢查 localStorage 中是否有 user 物件
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user.member_id) {
        // 如果 localStorage 中沒有 user 物件或者 member_id 屬性不存在，執行相應的操作，比如重新導向到登入頁面
        window.location.href = '/members/login'; // 這是一個簡單的重新導向示例
        // 或者根據你的業務邏輯顯示一個提示訊息
        alert('請先登入');
        return;
      }
  
      // 提取 member_id 並存儲在變數中
      const { member_id } = user;
  
      // 如果有 user 物件且 member_id 存在，則向後端發送請求檢查 member_id 是否存在於資料庫中
      try {
        const response = await fetch(`http://localhost:3005/api/cart?member_id=${member_id}`); // 假設 API 端點是 /api/checkMember/:member_id
        if (response.ok) {
          // 如果 member_id 存在於資料庫中，則繼續執行相應的操作
          const data = await response.json();
          console.log('Member exists in database:', data.memberInfo);
          // 在這裡你可以根據後端返回的資料做相應的處理
        } else {
          // 如果 member_id 不存在於資料庫中，執行相應的操作，比如重新導向到登入頁面或提示訊息
          window.location.href = '/members/login'; // 這是一個簡單的重新導向示例
          alert('請先註冊');
        }
      } catch (error) {
        console.error('Error checking member:', error);
        // 處理錯誤，比如顯示錯誤訊息給使用者
        alert('發生錯誤，請稍後再試');
      }
    };
  
    checkUser();
  }, []);
  
  return (
    <>
      <>
        <Navbar />
        {/* <Link href="/product/product_list">返回商城</Link> */}
        <div className="container">
          <h2 className="bottom-line d-inline">我的購物車</h2>
          <div className="second">
            <div className="travel-info2">
              <div className="travel-saleitem">品項</div>
              <div className="unit-price text-center">單價</div>
              <div className="unit-price text-center">數量</div>
              <div className="unit-price text-center">刪除</div>
              <div className="unit-price text-center">品項小計</div>
            </div>
            <CartList />
          </div>
        </div>
        <section className="mt-5 mb-3">
          <div className="container">
            <h2 className="d-inline bottom-line">猜你喜歡</h2>
            <div className="salebox mt-3">
              <RecommendItems />
            </div>
          </div>
        </section>
        <Footer />
      </>
    </>
  )
}
