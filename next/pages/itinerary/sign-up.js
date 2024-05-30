import React from 'react'
import Image from 'next/image'
import styles from '@/styles/itinerary.module.css'
import DailyTour from '@/components/itinerary/daily-tour'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Preloader from '@/components/layout/preloader'


export default function SignUp() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className={styles.SignUpMain}>
        <section className={styles.groupContainer}>
          <div className={styles.groupItinerary}>
            <div className={styles.groupTitle}>秘魯・印加帝國15日</div>
            <div className={styles.groupIntroduce}>
              星宇豪華經濟艙・世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山
            </div>
            <Image
              src="/images/秘魯・印加帝國15日.jpg"
              alt="秘魯・印加帝國15日"
              className={styles.signUpPic}
              width={390}
              height={319}
            />
          </div>

          <div className={styles.groupDeparture}>
            <span>
              <p className={styles.groupDepartureP}>出發日期</p>
              <div className={styles.groupDeparturePLine}></div>
            </span>
            <div>
              <div className="row">
                <div className="col-12">
                  <div>
                    <table className="table table-hover align-middle caption-top mt-3">
                      <thead>
                        <tr>
                          <th scope="col">出發日期</th>
                          <th scope="col">天數</th>
                          <th scope="col">航班</th>
                          <th scope="col">機位</th>
                          <th scope="col">報名</th>
                          <th scope="col">可售</th>
                          <th scope="col">售價</th>
                          <th scope="col">出團狀態</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={styles.DateCell}>2024-06-10</td>
                          <td>15天</td>
                          <td className={styles.textTd}>星宇航空</td>
                          <td>30</td>
                          <td>30</td>
                          <td>0</td>
                          <td className={styles.DateCell2}>282000</td>
                          <td>
                            <div className={styles.btn2}>額滿</div>
                          </td>
                        </tr>
                        <tr>
                          <td className={styles.DateCell}>2024-08-20</td>

                          <td>15天</td>
                          <td className={styles.textTd}>星宇航空</td>
                          <td>29</td>
                          <td>24</td>
                          <td>5</td>
                          <td className={styles.DateCell2}>279000</td>
                          <td>
                            <a
                              className={styles.btn}
                              href="http://localhost:3000/itinerary-product/48"
                            >
                              報名
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className={styles.DateCell}>2024-10-08</td>

                          <td>15天</td>
                          <td className={styles.textTd}>星宇航空</td>
                          <td>29</td>
                          <td>11</td>
                          <td>18</td>
                          <td className={styles.DateCell2}>280000</td>
                          <td>
                            <a
                              className={styles.btn}
                              href="http://localhost:3000/itinerary-product/27"
                            >
                              報名
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className={styles.DateCell}>2024-11-15</td>

                          <td>15天</td>
                          <td className={styles.textTd}>星宇航空</td>
                          <td>31</td>
                          <td>4</td>
                          <td>27</td>
                          <td className={styles.DateCell2}>282000</td>
                          <td>
                            <a
                              className={styles.btn}
                              href="http://localhost:3000/itinerary-product/3"
                            >
                              報名
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br>
        <div className={styles.groupTitle3}>
          <h4 className={styles.groupTitle2}>行程介紹:</h4>
        </div>
        <DailyTour />
        <Footer />
      </main>
    </>
  )
}
