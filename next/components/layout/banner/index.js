import React from 'react'
import styles from '@/styles/layout/banner.module.css'

export default function Banner({imgUrl, title, text}) {
  return (
    <>
      <div className="hero-area d-flex align-items-center">
        {/* Hero Thumbnail */}
        <div
          className={`hero-thumbnail equalize bg-img vstack`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>

        {/* Hero Content */}
        <div className="hero-content equalize">
          <div className={`container-fluid h-100`}>
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-12 col-md-8">
                <div className="line"></div>
                <h2>{title}</h2>
                <p>
                  {text}
                </p>
                {/* <div className="animationBox">
                  <a
                    href="#"
                    className="btn sonar-btn rotate-scale-up-hor lectureBtn"
                  >
                    講師介紹
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
