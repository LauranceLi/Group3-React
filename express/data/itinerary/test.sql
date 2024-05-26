-- 單選: 查詢品牌為Apple(查詢字串qs: brand=Apple)
SELECT *
FROM itinerary
WHERE title = '秘魯・印加帝國15日';

-- 複選: 查詢品牌為Apple或是Google
SELECT *
FROM itinerary
WHERE country = '歐洲' OR country = '中南美洲';

-- 複選: 查詢品牌為Apple或是Google (查詢字串qs: brands=Apple,Google)
SELECT *
FROM itinerary
WHERE country IN ('歐洲', '中南美洲');

-- TODO: 改用brand_id會比較好的設計

--- ---

-- 查詢名稱中有關鍵字`印加帝國`(查詢字串qs: name_like=印加帝國)
SELECT *
FROM itinerary
WHERE title LIKE '%印加帝國%';

-- 查詢價格介於5000到15000(查詢字串qs: price_gte=20000&price_lte=250000)
SELECT *
FROM itinerary
WHERE price BETWEEN 20000 AND 50000;

-- 使用大於等於與小於等於
SELECT *
FROM itinerary
WHERE price >= 20000 AND price <= 250000;

-- WHERE從句整合測試，每個條件間是用AND連接
SELECT *
FROM itinerary
WHERE country IN ('歐洲', '中南美洲')
AND title LIKE '%秘魯%'
AND price >= 20000 AND price <= 300000;

-- 排序 價格由小至大排序 (順向asc, 逆向desc) (查詢字串qs: sort=price&order=asc)
-- (時間也可排序)
SELECT *
FROM itinerary
WHERE country IN ('歐洲', '中南美洲')
ORDER BY price DESC;

-- 分頁 目前第page頁，每頁perpage個 (查詢字串qs: page=2&perpage=5)
-- 公式: limit = perpage
-- offset 範例:  page=1 offset=0, page=2 offset=perpage*1
-- 公式: offset = (page-1)*perpage
SELECT *
FROM itinerary
WHERE country IN ('歐洲', '中南美洲')
LIMIT 5 OFFSET 5;    -- (2-1)*5=5 (OFFSET

-- 需要計算在此條件下，總共有多少結果(為了之後要計算總共有多少頁數)
SELECT COUNT(*) AS count
FROM itinerary
WHERE country IN ('歐洲', '中南美洲');