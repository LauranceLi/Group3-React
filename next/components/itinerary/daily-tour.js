import React from 'react'
import Image from 'next/image'
import styles from '@/styles/dailyTour.module.css'
import Tab from '../../node_modules/react-bootstrap/Tab'
import Tabs from '../../node_modules/react-bootstrap/Tabs'
import { FaUtensils } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'

function itineraryCountry() {
  return (
    <>
      <main>
        <section className={styles.countryBody}>
          <Tabs
            defaultActiveKey="Day1"
            transition={false}
            id="tab"
            className={styles.tab}
          >
            <Tab eventKey="Day1" title="Day 1">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 1</div>
                  <div className={styles.dailyTourRoute}>
                    桃園機場 - 洛杉磯 Los Angeles
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    遠離喧囂忙碌的生活，轉換一下心情，全新旅程就此展開，隨著飛機起飛，我們即將前往南美洲千年古文明探索之旅，享受這最令人悸動的假期。
                  </span>
                  <span className={styles.dailyTourText}>
                    抵達洛杉磯機場後，我們將驅車前往機場飯店休息。
                  </span>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>X</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>X</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>機上餐</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Hilton Los Angeles Airport 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day2" title="Day 2">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 2</div>
                  <div className={styles.dailyTourRoute}>
                    洛杉磯 Los Angeles - 利馬 Lima
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    今日於飯店用完早餐後，我們將前往好萊塢，好萊塢地標可說是洛杉磯當地地標，也是美國的重要文化象徵。
                  </span>
                  <span className={styles.dailyTourText}>
                    午間享⽤加州⼈氣餐廳「In-N-Out
                    漢堡」；傍晚載著滿滿的回憶，驅車前往洛杉磯機場辦理登機手續，準備繼續飛往秘魯首都-利馬。
                  </span>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>In N Out</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>機上餐</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day3" title="Day 3">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 3</div>
                  <div className={styles.dailyTourRoute}>利馬 Lima</div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    今天將前往於1988年被聯合國教科文組織列為世界文化遺產的利馬老城區市區觀光參觀:◆軍事廣場
                    Plaza Mayor de Armas、◆總統府 Government Palace of
                    Peru、◆大教堂 Lima Metropolitan
                    Cathedral、◆聖法蘭西斯教堂修道院The Monastery of San
                    Francisco，這些都是來自當地及舊大陸的工藝師們所協力完成的建築瑰寶，將西班牙殖民時期的榮華表露無遺。
                  </span>
                  <span className={styles.dailyTourText}>
                    接著我們將參訪於1926年成立的◆歷史博物館 Larco Herrera
                    Museum，原本是十八世紀的西班牙皇家官邸，而在一千兩百年前，這裡是一座古秘魯文化的金字塔。館裡收藏了創辦人Rafael
                    Larco Herrera
                    發掘與購買共約一萬四千件古的秘魯文化考古文物，而除了展出藏品，這裡也是世界上少數開放民眾參觀館藏保存室的博物館之一。
                  </span>
                  <span className={styles.dailyTourText}>
                    貼心提醒 :
                    利馬老城區已於1988年被聯合國教科文組織列為世界文化遺產。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/lima-size.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>位於利馬市中心的武器廣場</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000913.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>建於18世紀西班牙皇家官邸的歷史博物館</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000974.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>擁有巴洛克風格的聖法蘭西斯教堂修道院</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>海濱景觀餐廳</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>碳烤餐廳</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Country Club Lima Hotel 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day4" title="Day 4">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 4</div>
                  <div className={styles.dailyTourRoute}>
                    利馬 Lima - 庫斯科 Cusco - 皮薩科市集 Mercado Pisac -
                    奧揚泰坦博 Ollantaytambo
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    一早搭機飛往古印加首都庫斯科。在身體尚未因高海拔開始感到辛苦之前，率先前往低海拔景點進發。
                  </span>
                  <span className={styles.dailyTourText}>
                    奧揚泰坦博這座印加老城是第九代印加皇帝Pachacútec征服了這個地區後建立的城鎮、軍事要塞和祭典中心;西班牙征服時期，更是印加反抗領袖
                    Manco Inca
                    Yupanqui的臨時帝國首都。晚間特別安排入住在此安地斯山谷間的精緻飯店，群山環繞的鄉間氣息，花園中眷養著羊駝，絕對是來秘魯高山旅遊絕佳的下榻飯店!
                  </span>
                  <span className={styles.dailyTourText}>
                    晚間特別安排印加古柯葉祈福，古柯葉不只可以減緩高山症的症狀還可以用來占卜！我們特別安排您一起體驗這個特別又有趣的活動，在大家的祈福下，希望本趟旅程順利、平安。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/cusco-size.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>擁有千年歷史的庫斯科古城</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000941.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>皮薩科印地安傳統市場</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000975.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>印加古柯葉祈福</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>飯店內</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Hotel Pakaritampu 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day5" title="Day 5">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 5</div>
                  <div className={styles.dailyTourRoute}>
                    奧揚泰坦博 Ollantaytambo - 馬丘比丘 Machu Picchu -
                    奧揚泰坦博 Ollantaytambo
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    清晨搭乘號稱南美最著名路線的◎觀光火車，利用火車特別設計的寬闊窗戶欣賞著窗外山谷美景，在一個半小時之後來到新世界七大奇觀之一，被稱為「空中城市」、「失落之城」的古印加帝國遺址★馬丘比丘
                    Machu Picchu進行一日的觀光。
                  </span>
                  <span className={styles.dailyTourText}>
                    馬丘比丘Machu Picchu
                    印加語意為〝古老的山頭〞，這座建於15世紀山城位於群山峻嶺和懸崖峭壁至高處，古城內分為數個區域，有廟宇、住宅區、墓園、宮殿、梯園等精巧的石造建築等等，充分體現了當年印加帝國的盛事輝煌。直至20世紀初，一名美國考古學家意外發現這個遺失的神秘山城遺跡才揭開了這層神秘的面紗，於1983年被聯合國教科文組織列為世界自然及文化雙重遺產，並於2007年當選新世界七大奇景之一。
                  </span>
                  <span className={styles.dailyTourText}>
                    貼心提醒:
                    1.馬丘比丘已於1983年被聯合國教科文組織列為世界自然及文化雙重遺產，並在2007年當選新世界七大奇景之一。
                    2.馬丘比丘海拔2400公尺
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000953.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>搭乘高山觀光列車</p>
                  </div>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000933.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>眺望山谷間的印加古城</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>馬丘比丘餐廳</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>飯店內</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Hotel Pakaritampu 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day6" title="Day 6">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 6</div>
                  <div className={styles.dailyTourRoute}>
                    奧揚泰坦博 Ollantaytambo - 馬拉斯鹽田 Maras - 莫瑞圓形梯田
                    Moray - 羊駝牧場－沙塞瓦曼 Sacsayhuaman - 庫斯科 Cusco
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    今日我們將離開山間小鎮奧揚泰坦博返回庫斯科，途中特別停留秘魯安地斯山兩大景點馬拉斯鹽田和莫瑞圓形梯田；馬拉斯鹽田
                    Maras由3000多個5平方公尺大的鹽洞組成，一塊塊雪白的鹽田輕撫在山坡上，陽光下晶瑩閃爍的鹽田，依著紅棕色的土壤、鵝黃色的石頭和碧綠的山崗，彷彿置身世外桃源；莫瑞圓形梯田
                    Moray於1932年發現，被視為古印加帝國實驗農場的圓形梯田，依靠著精準計算後的數值，隨著不同高度的階梯模擬多樣的氣候，並種植適合的蔬菜水果，對於古帝國農業的發展有著巨大的貢獻。
                  </span>
                  <span className={styles.dailyTourText}>
                    在羊駝牧場不只可親手餵飼，專業人員更在現場解說古老的印加羊駝毛清洗、染色及紡織技術，讓人目不轉睛；皮薩科則是一個擁有數百年歷史的古老印加城鎮，不僅可以看到當時用來耕種的梯田遺跡，更可以發現西班牙殖民者在印加建築上建立起西方建築的痕跡。在此將造訪熙來攘往、充滿鮮艷色彩的◎皮薩科印地安傳統市場
                    Mercado
                    Pisac，採買當地印地安人的許多不同類型之秘魯手工藝品和珠寶首飾。
                  </span>
                  <span className={styles.dailyTourText}>
                    接下來您將探訪位於庫斯科近郊的沙塞瓦曼軍事古堡Sacsayhuaman。由印加帝國第九代皇帝興建，古堡建築工程浩大並耗時108年完成，然而至今科學家仍不清楚印加人如何搬運如此巨大的石塊，以及如何在不使用任何黏著物之下就能完美接合石塊，充分顯示了古代印加人的高度智慧和創造才能。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/maras-size.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>被譽為「天神之淚」的馬拉斯鹽田</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000977.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>眷養可愛羊駝的牧場</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000917.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>集結古印加人智慧與工藝的沙塞瓦曼軍事古堡</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>當地料理</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Hotel Pakaritampu 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day7" title="Day 7">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 7</div>
                  <div className={styles.dailyTourRoute}>庫斯科 Cusco</div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    今日我們將遊覽庫斯科城內著名景點，建於1559年的◎主教堂 Cusco
                    Catedral是庫斯科最主要的教堂，同時也是西班牙殖民時期的代表建築，內部陳列可觀的庫斯科畫派油畫，融合了歐洲十六、七世紀的主流藝術及當時安地斯人的文化；於印加帝國時的信仰中心「太陽神廟」廢墟上的◎聖多明哥修道院
                    Convento of Santo Domingo
                    由每片重達兩公斤的黃金牆砌成，宏偉的建築令人嘆為觀止，過去神廟內黃金白銀打造的金器、神壇都於西班牙人初到庫斯科時皆被奪取一空，令人不勝唏噓。
                  </span>
                  <span className={styles.dailyTourText}>
                    午後您將享有自由活動時間，漫步在這座千年古城，細品這座古老城市的韻味。
                  </span>
                </div>

                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00001829.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>
                      西班牙殖民時期的代表建築-庫斯科主教堂
                    </p>
                  </div>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000989.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>
                      坐落在「太陽神廟」廢墟上的聖多明哥修道院
                    </p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>當地料理</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      JW Marriott El Convento Cusco 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day8" title="Day 8">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 8</div>
                  <div className={styles.dailyTourRoute}>
                    庫斯科 Cusco - 彩虹山 Cerro Colorado Vinicunca - 庫斯科
                    Cusco
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    破曉之際我們將驅車前往彩虹山健行起點，爾後開始挑戰往彩虹山頂前進。沿途可以看到四處悠閒走動的羊駝和周遭的壯麗雪山，路途的前半段為較平坦的路但由於健行起點已在海拔4000多公尺處，因此務必評估自己的身體狀況來調整步伐，也可以透過咀嚼古柯葉增加每次呼吸的含氧量，減緩高海拔對身體的影響。後半段的路程是最明顯的高度攀升，跟著專業領隊與導遊的步伐，突破海拔5000公尺，登上★彩虹山脈最高點，俯視安地斯山脈的彩虹印記以及壯闊的谷地。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000956.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>
                      跟著導遊的步伐 登上海拔5036公尺
                    </p>
                  </div>
                  <div className={styles.dailyTourItem2}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000987.jpg"
                      alt=""
                      className={styles.dailyTourPic2}
                      width={280}
                      height={510}
                    />
                    <p className={styles.TourP}>俯視安地斯山脈的彩虹印記</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>簡餐</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>飯店內</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      JW Marriott El Convento Cusco 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day9" title="Day 9">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 9</div>
                  <div className={styles.dailyTourRoute}>
                    庫斯科 Cusco - 普諾 Puno
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    早晨我們將從古都庫斯科出發前往世界最高淡水湖的的喀喀，沿途穿梭在雲與高原之間，經過河谷、平原、印加鄉間小鎮，景觀彷彿置身青藏高原。
                  </span>
                  <span className={styles.dailyTourText}>
                    午餐將安排於安地斯山脈景觀餐經用餐，除了當地特色料理，元本更另外準備秘魯傳統料理★窯烤天竺鼠，讓您親眼親口認識到這古老國家的傳統美食。
                  </span>
                  <span className={styles.dailyTourText}>
                    午後我們將上升至海拔約4330公尺的至高點◆ La
                    Raya，此處同時也為庫斯科和普諾的天然邊界，位於至高處眺望牧羊人趕著駱馬及羊駝悠行其間，將安地斯山脈的美景盡收眼底。
                  </span>
                  <span className={styles.dailyTourText}>
                    今晚我們將入住的的喀喀湖邊★唯一五星級飯店，並且考慮到整天疲憊，於飯店內享用晚餐。面對著廣闊的湖泊，浩瀚的星空、感人的日出都將是難忘的體驗。
                  </span>
                  <span className={styles.dailyTourText}>
                    貼心提醒:普諾地區平均海拔3820公尺
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000928.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>庫斯科特色料理 窯烤天竺鼠</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000958.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>庫斯科和普諾的天然邊界 La Raya</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000936.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>漫步在La Raya當地傳統市集</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>飯店內</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      GHL Hotel Lago Titicaca 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day310" title="Day 10">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 10</div>
                  <div className={styles.dailyTourRoute}>
                    普諾 Puno - 的的喀喀湖 Lago Titicaca - 忽利阿卡 Juliaca -
                    利馬 Lima
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    享用完早餐後，我們將乘坐◎包船航行在這面積8562
                    平方公里的淡水湖中，前往其湖中獨特的島嶼群參觀。這些島皆是人造島嶼，由古老Uros族的後裔沿著祖先的方法利用蘆葦製作而成並生活在湖上，乘坐船隻體驗在藍天碧水的生活，環境幽靜，彷彿世外仙境。
                  </span>
                  <span className={styles.dailyTourText}>
                    晚間我們將返回利馬，特別安排★道地豐盛的中式料理，一解您的鄉愁。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000932.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>世界最高船隻可以巡航的淡水湖</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000911.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>的的喀喀湖畔穿著傳統服飾的婦女</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000920.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>蘆葦島上販售傳統手工織物的原住民</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地簡餐</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>中式料理</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Country Club Lima Hotel 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day11" title="Day 11">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 11</div>
                  <div className={styles.dailyTourRoute}>
                    利馬 Lima - 伊卡 Ica - 納斯卡線 Nazca Lines - 伊卡 Ica -
                    帕拉卡斯 Paracas
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    沿著秘魯遼闊的沙漠海岸泛美公路南下，我們即將前往世上最大謎團之一的納斯卡大地畫參加飛行之旅，您將搭乘★12人座螺旋槳飛機，觀看這些謎一般的地畫，包括太空人、蜂鳥、禿騖、猴子、蜘蛛、鯨魚、蛇、花、幾何圖案如螺旋、三角形、長方塊等...
                    沉睡在高原荒漠中的納斯卡線，據說是西元400至650年間由納斯卡文明繪製出的畫作；在1939年飛機巡航的過程中被發現，而其構圖方式、繪畫技術、繪畫目的等真相仍未解密，留給世人無限的想像，並於1994年列入聯合國教科文組織的世界遺產。
                  </span>
                  <span className={styles.dailyTourText}>
                    午後我們即將探訪獨自隱藏在荒蕪沙漠深處當中的是一個名為★瓦卡奇納
                    Huacachina的古老綠洲；有著南美洲最美綠洲之稱的瓦卡奇納，以一匙天然湖水為中心，建築樹木倚著碧綠的湖畔而居。在這片寸草不生、細沙堆積的沙丘，將安排您乘坐刺激的沙丘越野車及俯身體驗滑沙運動，在綿密的白沙中自由滑翔，好不愜意。
                  </span>
                  <span className={styles.dailyTourText}>
                    貼心提醒:納斯卡大地畫於 1994
                    年被聯合國教科文組織列為世界文化遺產。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000947.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>從高空俯瞰巨型蜂鳥</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000966.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>12人座飛機</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000942.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>俯身在綿密的白沙中體驗滑沙</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>當地料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>飯店內</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <p className={styles.chargeBoxBed}>
                      Hotel la Hacienda Bahía Paracas 或同等級
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day12" title="Day 12">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 12</div>
                  <div className={styles.dailyTourRoute}>
                    帕拉卡斯 Paracas - 鳥島 Islas Ballestas - 利馬 Lima
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    帕拉卡斯保護區內最引人入勝的是距海岸11公里的鳥島。我們將搭乘快艇前往南太平洋，觀察當地獨特的生態系統。島上棲息著多樣化的動物，除了數萬隻的海鳥外，海獅、海豚和麥哲倫企鵝等海洋動物也同時居住在這片保護區，相當於一座天然海洋館。坐快艇途中您也將可看到岸邊坡面上一幅巨大的◆三叉大燭台刻畫，考古學家認為這是過去為船隻導航用的，也有人認為是外星人在山壁上刻畫的，不過確切的目的、誰建造、何時建造至今仍是一個謎。
                  </span>
                  <span className={styles.dailyTourText}>
                    特別安排返回利馬前於飯店內製作秘魯國菜★檸檬醃生魚
                    Ceviche體驗的廚藝課程，讓您不僅了解這道料理的製作過程，深入體會秘魯的飲食文化，更可以享用自己親手製作的Ceviche。
                  </span>
                  <span className={styles.dailyTourText}>
                    位於利馬中心的華卡布亞納金字塔建於公元 500
                    年，作為該族人的重要典禮和政治活動的場所，這座金字塔曾是古文明的活動中心，現在則是別出心裁的建築典範，晚間我們將安排於金字塔遺跡餐廳用餐，享受一場別出心裁的晚宴。
                  </span>
                </div>
                <div className={styles.dailyTourPicItem}>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000931.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>搭乘快艇前進南太平洋海濱的鳥島</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000963.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>棲息許多物種的天然海洋館</p>
                  </div>
                  <div className={styles.dailyTourItem}>
                    <Image
                      src="/images/詳細行程/秘魯・印加帝國15日/00000930.jpg"
                      alt=""
                      className={styles.dailyTourPic}
                      width={230}
                      height={340}
                    />
                    <p>全台首創體驗秘魯國菜廚藝課程</p>
                  </div>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>海鮮料理</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>金字塔遺跡餐廳</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                    <span className={styles.chargeBoxBed}>
                      Country Club Lima Hotel 或同等級
                    </span>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day13" title="Day 13">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 13</div>
                  <div className={styles.dailyTourRoute}>
                    利馬 Lima - 洛杉磯 Los Angeles
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    享用過早餐後，出發前往利馬國際機場，準備離開這南美文明古國。載著滿滿的回憶，首先搭乘班機飛往洛杉磯，踏上返回台灣的漫長旅途。
                  </span>
                  <span className={styles.dailyTourText}>
                    貼心提醒:凡在洛杉磯轉機時間超過6小時，即向每位全程參團之旅客提供餐費USD20。
                  </span>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>飯店內</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>機上餐</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>機上餐</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="14" title="Day 14">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 14</div>
                  <div className={styles.dailyTourRoute}>
                    洛杉磯 Los Angeles - 台北 Taipei
                  </div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    搭乘晚間班機返回台灣。
                  </span>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>機上餐</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>機上餐</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>機上餐</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
            <Tab eventKey="Day15" title="Day 15">
              <section className={styles.dailyTour}>
                <span className={styles.dailyTourH5}>
                  <h5 className={styles.dailyTourH5H5}>每日行程</h5>
                  <div className={styles.dailyTourLine}></div>
                </span>
                <span className={styles.dailyTourGray}>
                  <div className={styles.dailyTourDays}>Day 15</div>
                  <div className={styles.dailyTourRoute}>台北 Taipei</div>
                </span>
                <div>
                  <span className={styles.dailyTourText}>
                    今天抵達桃園國際機場，正式結束充滿冒險、神秘、熱情的秘魯探索之旅。依依不捨地揮別愉快的假期，滿載珍貴回憶返回溫暖的家，期待夢想旅行再次啟程。
                  </span>
                </div>
                <section className={styles.chargeBox}>
                  <div>
                    <p className="col-md-6">
                      <FaUtensils />
                      餐食 :
                    </p>
                    <span>
                      <p>早餐 :</p>
                      <p>機上餐</p>
                    </span>
                    <span>
                      <p>午餐 :</p>
                      <p>X</p>
                    </span>
                    <span>
                      <p>晚餐 :</p>
                      <p>X</p>
                    </span>
                  </div>
                  <div>
                    <p className="col-md-6">
                      <FaBed />
                      住宿 :
                    </p>
                  </div>
                </section>
                <br></br>
              </section>
            </Tab>
          </Tabs>
        </section>
      </main>
    </>
  )
}

export default itineraryCountry
