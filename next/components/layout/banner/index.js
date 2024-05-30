import React from 'react'
import styles from '@/styles/layout/banner.module.css'

export default function Banner({imgUrl}) {
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
                <h2>近期講座</h2>
                <p>
                  在這廣袤的世界，心懷探索之志，欲遨遊四方！旅程的起點何在？終點又在何方？旅行的真諦是什麼？讓我們邀請智者、導師、探險家，解開這旅途之謎，揭開史詩般的旅程奧秘！
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
