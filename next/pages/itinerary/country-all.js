import React from 'react'
import Image from 'next/image'
import { Tab, Tabs } from 'react-bootstrap'
import styles from '@/styles/itinerary.module.css'

function CountryAll() {
  return (
    <>
      <main>
        <div>
          <h2 className={styles.itineraryCountryH2}>各國行程</h2>
          <div className={styles.itineraryDepartureLine}></div>
        </div>
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="全部">
            <section className={styles.itineraryCard}>
              <div className={styles.moduleContainer}>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・印加帝國13日.jpg"
                      alt=""
                      width={320}
                      height={250}
                      priority={true}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・印加帝國13日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界七大奇蹟馬丘比丘．世界遺產納斯卡線．印加古城庫斯科．絕美打卡點彩虹山．世界最高淡水的的喀喀湖
                    </h4>
                  </div>
                  <section className={styles.cardDiv3}>
                    <div className={styles.cardDiv1}>&nbsp;</div>
                    <div className={styles.cardDiv2}>點此報名</div>
                  </section>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・太陽祭14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・太陽祭14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      2023年金旅獎！世界七大奇景馬丘比丘・印加都城庫斯科・傳統盛典太陽祭・魔幻打卡聖地彩虹山
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・印加帝國15日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・印加帝國15日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      星宇豪華經濟艙・世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山
                    </h4>
                  </div>
                  <section className={styles.cardDiv3}>
                    <div className={styles.cardDiv1}>&nbsp;</div>
                    <div className={styles.cardDiv2}>
                      <a
                        className={styles.cardDiv2}
                        href="http://localhost:3000/itinerary/sign-up"
                      >
                        點此報名
                      </a>
                    </div>
                  </section>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯&智利・古文明探索13日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      秘魯&智利・古文明探索13日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界七大奇景馬丘比丘・印加都城庫斯科・神秘納斯卡線・與世隔絕復活節島山
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/智利・15日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>智利・15日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      與世隔絕復活節島．藍湖仙境百內國家公園．世界最乾旱阿塔卡馬沙漠．智利酒莊道地佳釀
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯&玻利維亞・秘境漫步14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      秘魯&玻利維亞・秘境漫步14日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      季節限定！世界七大奇景馬丘比丘・魔幻打卡聖地彩虹山・天空之鏡烏尤尼・世界最高首都拉巴斯
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/阿根廷・14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>阿根廷・14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界遺產萬年冰川健行、世界最寬伊瓜蘇瀑布、世界盡頭火地島、南美巴黎布宜諾斯艾利斯
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/古巴・迷情之境12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>古巴・迷情之境12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界遺產哈瓦那老城．古董車．雪茄．蘭姆酒．海明威朝聖路線．切格瓦拉革命國度
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/古巴&墨西哥・亡靈節12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>古巴・迷情之境12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      華麗繽紛骷髏嘉年華！哈瓦那、古董車體驗、親捲雪茄、馬雅金字塔、加勒比海豪華五星飯店
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/西班牙・13日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>西班牙・13日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      宮殿國營旅館．酒莊品酩．美食評鑑餐廳．巴塞隆納宿三晚
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/葡萄牙・12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>葡萄牙・12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      漫遊酒香葡萄牙、艷彩佩納古蹟饗宴
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/法國・深度全覽14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>法國・深度全覽14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      漫步走入南法生活美學、夜宿古堡朝暮晨昏
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/奧地利&捷克・12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>奧地利&捷克・12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      慕夏走讀、季節音樂饗宴、夏夫堡火車、哈施達特、瓦豪河谷佳釀美饌、茜茜公主博物館
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/東歐．鐵道之旅12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>東歐．鐵道之旅12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      知性與感性相遇，山谷迴盪著火車低鳴的動人樂章，跟隨導遊的腳步，走訪歷史上第一條鐵路的動人心弦。
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/法國波爾多紅酒馬拉松．12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      法國波爾多紅酒馬拉松．12日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      法西雙國12日、波爾多、梅鐸紅酒馬拉松、中古世紀卡爾卡頌、達利美術館、聖家堂、#一生必要跑一次、#跑者的夢想清單
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/日本登山鐵道之旅・7日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>探索日本登山鐵道・7日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      深度探索鐵道之美，感動幸福旅路。
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名古屋春櫻花見行５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>名古屋春櫻花見行5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      日本國寶犬山城.螃蟹燒肉餐.童話合掌村.粉紅隧道遊船.金澤兼六園.金華山纜車
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/花現櫻飛舞名古屋．京都６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      花現櫻飛舞名古屋．京都6日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      粉紅隧道～哲學之道、花見醍醐寺、紅色鳥居、平等院鳳凰堂、宇治抹茶香、泡湯趣
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/關東悠遊全覽三溫泉螃蟹吃到飽５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      關東悠遊全覽三溫泉螃蟹吃到飽5日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      澀谷露天展望台、採果體驗、輕井澤、伊豆箱根、鎌倉、權八日式居酒屋（加贈酒水暢飲）
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/星宇．名東雙城溫泉６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>星宇．名東雙城溫泉6日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      歡樂迪士尼、掛川花鳥園、濱名湖花博、蘆之湖遊船、修善寺、日本平纜車
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名東雙城立山黑部閃亮雪壁7日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      名東雙城立山黑部閃亮雪壁7日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      足利紫藤花、童話合掌村、日光東照宮、輕井澤OUTLET、國寶松本城、鬼怒川溫泉
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/琉球海炎祭-沖繩限定4日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>琉球海炎祭-沖繩限定4日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      夏季盛大音樂花火(自由席)、美麗海水族館、玉泉洞、單軌電車一日券、升等一晚海邊飯店
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/九州鯉躍春遊５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>九州鯉躍春遊5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      雙鐵道、雙遊船、日田小京都、春季限定鯉魚旗祭典、熊本熊甜點杯、米塚、草千里
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名古屋立山黑部漫步大雪谷．濱名花博５天.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      名古屋立山黑部漫步大雪谷．濱名花博5天
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      神的故鄉~上高地．童話合掌村．馬籠宿．雙溫泉～升等一晚五星飯店
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/閃耀九州X浪漫銀光５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>閃耀九州X浪漫銀光5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      銀光閃耀之街、九州野生公園叢林巴士、由布院金鱗湖、世界童話村、三隈川屋形船晚宴、太宰府天滿宮
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/熊本X火山熊雙溫泉５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>熊本X火山熊雙溫泉5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      阿蘇破火山口、由布院金麟湖、別府海地獄、太宰府天滿宮、柳川遊船、熊本熊電鐵、地獄蒸DIY
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/星宇九州X天空熊６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>星宇九州X天空熊6日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      天空小火車、高千穗峽、鵜戶神宮、櫻島渡輪、仙巖園、超大熊本熊港八代、熊本城
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
          <Tab eventKey="tab1" title="中南美洲">
            <section className={styles.itineraryCard}>
              <div className={styles.moduleContainer}>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・印加帝國13日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・印加帝國13日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界七大奇蹟馬丘比丘．世界遺產納斯卡線．印加古城庫斯科．絕美打卡點彩虹山．世界最高淡水的的喀喀湖
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・太陽祭14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・太陽祭14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      2023年金旅獎！世界七大奇景馬丘比丘・印加都城庫斯科・傳統盛典太陽祭・魔幻打卡聖地彩虹山
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯・印加帝國15日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>秘魯・印加帝國15日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      星宇豪華經濟艙・世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯&智利・古文明探索13日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      秘魯&智利・古文明探索13日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界七大奇景馬丘比丘・印加都城庫斯科・神秘納斯卡線・與世隔絕復活節島山
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/智利・15日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>智利・15日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      與世隔絕復活節島．藍湖仙境百內國家公園．世界最乾旱阿塔卡馬沙漠．智利酒莊道地佳釀
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/秘魯&玻利維亞・秘境漫步14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      秘魯&玻利維亞・秘境漫步14日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      季節限定！世界七大奇景馬丘比丘・魔幻打卡聖地彩虹山・天空之鏡烏尤尼・世界最高首都拉巴斯
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/阿根廷・14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>阿根廷・14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界遺產萬年冰川健行、世界最寬伊瓜蘇瀑布、世界盡頭火地島、南美巴黎布宜諾斯艾利斯
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/古巴・迷情之境12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>古巴・迷情之境12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      世界遺產哈瓦那老城．古董車．雪茄．蘭姆酒．海明威朝聖路線．切格瓦拉革命國度
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/古巴&墨西哥・亡靈節12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>古巴・迷情之境12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      華麗繽紛骷髏嘉年華！哈瓦那、古董車體驗、親捲雪茄、馬雅金字塔、加勒比海豪華五星飯店
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
          <Tab eventKey="tab2" title="歐洲">
            <section className={styles.itineraryCard}>
              <div className={styles.moduleContainer}>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/西班牙・13日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>西班牙・13日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      宮殿國營旅館．酒莊品酩．美食評鑑餐廳．巴塞隆納宿三晚
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/葡萄牙・12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>葡萄牙・12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      漫遊酒香葡萄牙、艷彩佩納古蹟饗宴
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/法國・深度全覽14日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>法國・深度全覽14日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      漫步走入南法生活美學、夜宿古堡朝暮晨昏
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/奧地利&捷克・12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>奧地利&捷克・12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      慕夏走讀、季節音樂饗宴、夏夫堡火車、哈施達特、瓦豪河谷佳釀美饌、茜茜公主博物館
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/東歐．鐵道之旅12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>東歐．鐵道之旅12日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      知性與感性相遇，山谷迴盪著火車低鳴的動人樂章，跟隨導遊的腳步，走訪歷史上第一條鐵路的動人心弦。
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/法國波爾多紅酒馬拉松．12日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      法國波爾多紅酒馬拉松．12日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      法西雙國12日、波爾多、梅鐸紅酒馬拉松、中古世紀卡爾卡頌、達利美術館、聖家堂、#一生必要跑一次、#跑者的夢想清單
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
          <Tab eventKey="tab3" title="日本">
            <section className={styles.itineraryCard}>
              <div className={styles.moduleContainer}>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/日本登山鐵道之旅・7日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>探索日本登山鐵道・7日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      深度探索鐵道之美，感動幸福旅路。
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名古屋春櫻花見行５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>名古屋春櫻花見行5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      日本國寶犬山城.螃蟹燒肉餐.童話合掌村.粉紅隧道遊船.金澤兼六園.金華山纜車
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/花現櫻飛舞名古屋．京都６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      花現櫻飛舞名古屋．京都6日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      粉紅隧道～哲學之道、花見醍醐寺、紅色鳥居、平等院鳳凰堂、宇治抹茶香、泡湯趣
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/關東悠遊全覽三溫泉螃蟹吃到飽５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      關東悠遊全覽三溫泉螃蟹吃到飽5日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      澀谷露天展望台、採果體驗、輕井澤、伊豆箱根、鎌倉、權八日式居酒屋（加贈酒水暢飲）
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/星宇．名東雙城溫泉６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>星宇．名東雙城溫泉6日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      歡樂迪士尼、掛川花鳥園、濱名湖花博、蘆之湖遊船、修善寺、日本平纜車
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名東雙城立山黑部閃亮雪壁7日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      名東雙城立山黑部閃亮雪壁7日
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      足利紫藤花、童話合掌村、日光東照宮、輕井澤OUTLET、國寶松本城、鬼怒川溫泉
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/琉球海炎祭-沖繩限定4日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>琉球海炎祭-沖繩限定4日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      夏季盛大音樂花火(自由席)、美麗海水族館、玉泉洞、單軌電車一日券、升等一晚海邊飯店
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/九州鯉躍春遊５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>九州鯉躍春遊5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      雙鐵道、雙遊船、日田小京都、春季限定鯉魚旗祭典、熊本熊甜點杯、米塚、草千里
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/名古屋立山黑部漫步大雪谷．濱名花博５天.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>
                      名古屋立山黑部漫步大雪谷．濱名花博5天
                    </h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      神的故鄉~上高地．童話合掌村．馬籠宿．雙溫泉～升等一晚五星飯店
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/閃耀九州X浪漫銀光５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>閃耀九州X浪漫銀光5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      銀光閃耀之街、九州野生公園叢林巴士、由布院金鱗湖、世界童話村、三隈川屋形船晚宴、太宰府天滿宮
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/熊本X火山熊雙溫泉５日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>熊本X火山熊雙溫泉5日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      阿蘇破火山口、由布院金麟湖、別府海地獄、太宰府天滿宮、柳川遊船、熊本熊電鐵、地獄蒸DIY
                    </h4>
                  </div>
                </div>
                <div className={styles.moduleItems}>
                  <div>
                    <Image
                      className={styles.imgCountry}
                      src="/images/星宇九州X天空熊６日.jpg"
                      alt=""
                      width={375}
                      height={293}
                    />
                  </div>
                  <div className={styles.moduleH3}>
                    <h3 className={styles.h3Country}>星宇九州X天空熊6日</h3>
                  </div>
                  <div className={styles.moduleH4}>
                    <h4 className={styles.h4Country}>
                      天空小火車、高千穗峽、鵜戶神宮、櫻島渡輪、仙巖園、超大熊本熊港八代、熊本城
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
        </Tabs>
      </main>
    </>
  )
}

export default CountryAll
