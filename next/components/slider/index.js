import React, { useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import styled from '@emotion/styled'

export default function Slider() {
  const swiperRef = useRef(null)
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start()
    }
  }

  return (
    <>
      <div
        ref={swiperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          watchSlidesProgress={true}
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1240: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1,
            },
          }}
          speed={1200}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>'
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Kumamoto-slide.jpg"
                  alt="日本"
                  className="swiper-image"
                />
              </div>
              <h3>日本・九州天空熊</h3>
              <div className="hr"></div>
              <p>
                天空小火車、高千穗峽、鵜戶神宮、櫻島渡輪、仙巖園、超大熊本熊港八代、熊本城
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Moai-slide.jpg"
                  className="swiper-image"
                />
              </div>
              <h3>智利．復活節島</h3>
              <div className="hr"></div>
              <p>
                與世隔絕神秘的復活節島．藍湖仙境百內國家公園．世界最乾旱阿塔卡馬沙漠．智利酒莊道地佳釀
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/PlaceCharlesDeGaulle-slide.jpg"
                  alt="歐洲"
                  className="swiper-image"
                />
              </div>
              <h3>法國・深度全覽</h3>
              <div className="hr"></div>
              <p>漫步走入南法生活美學，夜宿古堡朝暮晨昏。</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Cuba-slide.jpg"
                  alt="中南美洲"
                  className="swiper-image"
                />
              </div>
              <h3>古巴・迷情之境</h3>
              <div className="hr"></div>
              <p>
                世界遺產哈瓦那老城．古董車．雪茄．蘭姆酒．海明威朝聖路線．切格瓦拉革命國度
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Sakura-slide.jpg"
                  alt="日本"
                  className="swiper-image"
                />
              </div>
              <h3>日本・春櫻花見行</h3>
              <div className="hr"></div>
              <p>
                日本國寶犬山城.螃蟹燒肉餐.童話合掌村.粉紅隧道遊船.金澤兼六園.金華山纜車
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Austria-slide.jpg"
                  alt="歐洲"
                  className="swiper-image"
                />
              </div>
              <h3>奧捷・知識饗宴</h3>
              <div className="hr"></div>
              <p>
                慕夏走讀・季節音樂饗宴・夏夫堡火車・哈施達特・瓦豪河谷佳釀美饌・茜茜公主博物館
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/KurokawaOnsen-slide.jpg"
                  alt="日本"
                  className="swiper-image"
                />
              </div>
              <h3>日本・熊本X火山熊</h3>
              <div className="hr"></div>
              <p>
                阿蘇破火山口、由布院金麟湖、別府海地獄、太宰府天滿宮、柳川遊船、熊本熊電鐵、地獄蒸DIY
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/MachuPicchu-slide.jpg"
                  alt="中南美洲"
                  className="swiper-image"
                />
              </div>
              <h3>秘魯・印加帝國</h3>
              <div className="hr"></div>
              <p>世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src="images/slide/Portugal-slide.jpg"
                  alt="歐洲"
                  className="swiper-image"
                />
              </div>
              <h3>葡萄牙・西洋伊甸</h3>
              <div className="hr"></div>
              <p>漫遊酒香葡萄牙・艷彩佩納古蹟饗宴</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
