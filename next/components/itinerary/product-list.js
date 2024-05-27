import React from 'react'
import Image from 'next/image'
import styles from '@/styles/itinerary.module.css'
import products from '@/data/Itinerary.json'
import Link from 'next/link'


export default function ProductList() {
  return (
    <>
      <div className={styles.itineraryContainer}>
        {products.map((v, i) => {
          return (
            <div key={v.travel_id} className={styles.itineraryProductsItem3}>
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
                <div className={styles.itineraryProductsDays}>{v.days}</div>
              </div>

              <div className={styles.itineraryDetails}>
                <div className={styles.itineraryTime}>{v.time}</div>
                <div>
                  <div className={styles.itineraryDescription}>{v.introduce}</div>
                </div>

                <div className={styles.itineraryDetailsIn}>
                  <div className={styles.itineraryDetailsLeft}>
                    <div className={styles.itineraryItem}>機位{v.seat}</div>
                    <div className={styles.itineraryItem}>報名{v.number}</div>
                    <div
                      className={styles.itineraryItem}
                      style={{ color: '#04abf2' }}
                    >
                      可售{v.sale}
                    </div>
                  </div>
                  <div className={styles.itineraryDetailsRight}>
                    <div className={styles.itineraryPriceSmall}>售價</div>
                    <div className={styles.itineraryPriceAmount}>
                      NT${v.price}
                    </div>
                    <div className={styles.itineraryPriceSmall}>起</div>
                  </div>
                </div>
                <div className={styles.flightDetails}>{v.airport}</div>
              </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
