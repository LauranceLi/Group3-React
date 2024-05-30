-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-05-30 03:54:44
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `the_travel_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `product` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `picture`, `product_id`, `product`, `price`, `type`, `description`) VALUES
(1, '/product_pics/01.jpg', 'product_01', '旅遊質感行李吊牌', 199, '旅遊必帶', '環保、自然，回到原點、以人為本。在設計上都是簡潔大方、材質上都是能夠重複使用，希望出遊一趟，除了美好的回憶，不再產生對地球不友善的物質或行為。'),
(2, '/product_pics/02.png', 'product_02', '帆布行李束箱帶', 249, '旅遊必帶', '環保、自然，回到原點、以人為本。在設計上都是簡潔大方、材質上都是能夠重複使用，希望出遊一趟，除了美好的回憶，不再產生對地球不友善的物質或行為。'),
(3, '/product_pics/03.jpg', 'product_03', '帆布拉鍊袋', 199, '旅遊必帶', '環保、自然，回到原點、以人為本。在設計上都是簡潔大方、材質上都是能夠重複使用，希望出遊一趟，除了美好的回憶，不再產生對地球不友善的物質或行為。'),
(4, '/product_pics/04.jpg', 'product_04', '男女款滑雪外套', 9990, '冬季旅遊', ' 重　　量：937g 防水防風＆透氣透濕 外　層：MOTRANS 　　　【耐水度】10000 mmH2O or higher(JIS L 1092) 　　　【透濕度】8000 g/㎡ 24h or higher(JIS L1099 B-1) '),
(5, '/product_pics/05.jpg', 'product_05', '防水滑雪手套(併指)', 1380, '冬季旅遊', '拉鍊有膠條防水保護 Primaloft 保暖、快乾、透氣 外層小口袋可放置零錢、票卡等小物手腕掛手繩設計,避免手套脫落遺失硬泡棉可保護手指關節'),
(6, '/product_pics/06.jpg', 'product_06', '機能保暖滑雪襪 ', 680, '冬季旅遊', '台灣自創品牌 - 銀離子纖維吸濕排汗、抗菌除臭、調節溫度 - 脛骨加厚織法、保護腿部肌肉 - 腳背加壓足弓拉提保護 - 兩種尺寸：小 (22cm-25cm) / 大 (25.5cm-28.5cm)'),
(7, '/product_pics/07.png', 'product_07', '防水滑雪手套 三指 ', 1580, '冬季旅遊', '拉鍊有膠條防水保護\n- Primaloft 保暖、快乾、透氣\n- 外層小口袋可放置零錢、票卡等小物\n- 手腕掛手繩設計，避免手套脫落遺失\n- 硬泡棉可保護手指關節\n'),
(8, '/product_pics/08.jpg', 'product_08', '鋪棉帽寬衣', 1880, '冬季旅遊', '街頭百搭 素面 加絨 連帽T恤 材質: 純棉 + 聚酯纖維'),
(9, '/product_pics/09.jpg', 'product_09', '強效運動款足墊', 2880, '保健用品', '擁有專利的3DBS動態足弓支撐，提供足弓如拱橋般的支撐。依不同足弓高低設計，硬中帶軟的材質可動態靈活調整，自然回彈又不僵硬，分散足底壓力，降低足部額外的負擔。\n\n'),
(10, '/product_pics/10.jpg', 'product_10', '3C隨身收納包', 288, '旅遊必帶', '雙層空間,告別凌亂,魔術貼開合設計,便攜式手提設計'),
(11, '/product_pics/11.jpg', 'product_11', '真空分裝瓶', 30, '旅遊必帶', '\n產品名稱：真空分裝瓶\n產品材質：AS+PP\n產品款式：乳液瓶 / 噴霧瓶\n'),
(12, '/product_pics/12.jpg', 'product_12', '旅行漱口杯', 59, '旅遊必帶', '盥洗收納 超方便 旅行、出差必備體積小 大容量 不佔空間造型簡約 低調時尚多種款式選項顏色 '),
(13, '/product_pics/13.jpg', 'product_13', '多功能護照套', 179, '旅遊必帶', '出國旅行最重要的護照機票 ,等等還找不到收納它們合適的家嗎,怕自己的卡被盜刷提心吊膽嗎,旅遊必備「防盜刷多功能護照套」'),
(14, '/product_pics/14.jpg', 'product_14', '大容量行李箱 ', 2990, '旅遊必帶', '1.側邊金屬包角防護設計，讓行李箱更堅固耐用。\n2.釋放雙手多功能設計:隱藏式杯架、防刮腳墊+購物袋掛鉤、USB充電孔。\n3.分層設計好收納。\n4.TPE靜音雙排萬向輪。\n5.加厚鋁合金拉桿。\n6.三位密碼鎖。 '),
(15, '/product_pics/15.jpg', 'product_15', '行李秤', 199, '旅遊必帶', '整體尺寸：129x43x28mm\n裸重：約95g\n電源：紐扣電池一個\n顯示方式：LCD綠光顯示幕\n單位：kg lb\n最大稱量：50kg'),
(16, '/product_pics/16.jpeg', 'product_16', '隨身藥盒', 99, '旅遊必帶', '產品材質 : 環保PP材質\n產品功能 : 分隔設計 密封儲藏\n產品顏色 : 藍紅色 / 黃粉色 / 灰白色'),
(17, '/product_pics/17.jpg', 'product_17', '一次性床單', 199, '旅遊必帶', '名稱：一次性旅行用品\n規格：毛巾\\浴巾\\枕套\\床單\\被套\n材質：植物纖維\n特點：加厚加大\\獨立包裝\\植物纖維\n'),
(18, '/product_pics/18.jpg', 'product_18', '真空壓縮袋', 69, '旅遊必帶', '材質； PA+PE材質\n單層厚度； 8絲 \n適用場景；臥室 衣櫃 宿舍 旅行\n風格；現代 簡約 '),
(19, '/product_pics/19.jpg', 'product_19', '盥洗收納包', 199, '旅遊必帶', '掛勾版 盥洗收納  一進飯店或民宿 \n就可以直接把小物通通就定位,網狀的隔層~基本防水的尼龍材質'),
(20, '/product_pics/20.jpg', 'product_20', '大容量登機包', 250, '旅遊必帶', '便攜式手提旅行包\n大容量設計 日常出行物品都能裝下\n側邊網格袋 可放置水杯雨傘等物件\n堅固耐用、承重性強\n前端拉鍊口袋 可放護照、行動電源\n'),
(21, '/product_pics/21.jpg', 'product_21', '簡約化妝包', 99, '旅遊必帶', '超大容量｜外出補妝必備物品一次收齊\n精緻拉環｜質感皮質雙拉環 開關更便利\n防水設計｜防潑水尼龍材質 有效保護內容物\n小巧體積｜旅遊攜帶不佔空間 超好用\n優選材質｜耐磨耐用 不易損壞'),
(22, '/product_pics/22.jpg', 'product_22', '合利EXP ', 765, '保健用品', '保健補品功能\n心臟&血壓, 維生素&礦物質, 營養食品&飲料, 壓力、睡眠及焦慮\n營養成分分類\n維生素B, 維生素E\n產地日本'),
(23, '/product_pics/23.jpg', 'product_23', '緩釋型維他命C', 280, '保健用品', '4種族群加強補充維生素C攝取：\n1.習慣挑食、常吃零食、炸物、燒烤食物的人\n2.抽菸、處在二手煙環境的人。\n3.國民健康署建議孕婦每日多補充10mg維生素C、哺乳中媽媽多40mg維生素C。\n4.生活步調繁忙可額外補充維生素Ｃ。'),
(24, '/product_pics/24.jpg', 'product_24', '日本上網卡', 499, '旅行必帶', '套餐內容  吃到飽不降速\n原生卡依【日本時間】計算， 其他卡片均為【台灣時間】計算，插卡日到當天23:59算第一天，到連續最後一天晚上23:59失效。\n網卡皆支援4G(LTE) 訊號，若地區、手機不支援4G(LTE)，將自動切換3G、2G訊號，皆以當地訊號為主。\n'),
(25, '/product_pics/25.jpg', 'product_25', '多功能行動電源', 1780, '旅行必帶', 'QC/PD3.0雙協議快充 22.5W大功率快速充電\n2種自帶線＋雙口輸出＋磁吸無線充電，最高支援五台設備同時\n充電\n隱藏式手機支架 LED電量顯示 充電狀態顯示 90度旋轉收\n納插頭\n全方位安全機制保護(過充保護、短路保護、電芯保護)\n');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
