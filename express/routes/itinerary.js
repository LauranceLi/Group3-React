import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
// import sequelize from '#configs/db.js'
// const { Itinerary } = sequelize.models

// 使用sql查詢的方式
import db from '#configs/mysql.js'

router.all('/', async function (req, res) {
  if (req.method === 'GET') {
    // 獲取query查詢字串參數值
    // const {
    //   title_like='', // 類型string, 用於 title LIKE  %title_like%
    //   country='', // 類型string, 用於 `country IN ('歐洲', '中南美洲')`
    //   price_gte=0, // 類型number, 用於`price >= 20000`
    //   price_lte=250000, // 類型number, 用於`price <= price_lte`
    //   page = 1, // 類型number, 用於 ˋOFFSET = (Number(page)-1) * Number(perpage)ˋ
    //   perpage = 9,
    //   sort='travel_id' // 類型string, 用於 ORDER BY
    //   order='asc'  // 類型string, 用於 ORDER BY
    // } = req.query

    // 記錄where查詢條件的陣列
    const conditions = []

    // 名稱
    // 查詢名稱中有關鍵字`印加帝國`(查詢字串qs: title_like=印加帝國)
    const title_like = req.query.title_like || ''
    conditions[0] = title_like ? `title LIKE '%${title_like}%'` : ''

    // 國家.從查詢字串得到的是'歐洲','中南美洲'. 逗點分隔字串
    const country = req.query.country ? req.query.country.split(',') : []
    conditions[1] =
      country.length > 0
        ? `country IN (${country.map((v) => `'${v}'`).join(',')})`
        : ''

    // 價格大於等於.0的情況會是空字串
    const price_gte = Number(req.query.price_gte) || 0
    conditions[2] = price_gte ? `price >= ${price_gte}` : ''

    // 價格小於等於，290000指的是價格最大值
    const price_lte = Number(req.query.price_lte) || 290000
    conditions[3] = price_lte ? `price <= ${price_lte}` : ''

    // 时间范围查询
    const startDate = req.query.startDate
    const endDate = req.query.endDate
    conditions[4] =
      startDate && endDate ? `time BETWEEN '${startDate}' AND '${endDate}'` : ''

    // 最後組合where從句
    // 1. 過濾空白的查詢從句
    const cvs = conditions.filter((v) => v)
    // 2. 使用AND組合有的從句
    const where =
      cvs.length > 0 ? 'WHERE ' + cvs.map((v) => `( ${v} )`).join(` AND `) : ''

    //觀察where
    console.log(where)

    // 排序
    const sort = req.query.sort || 'travel_id'
    const order = req.query.order || 'asc'
    const orderby = `ORDER BY ${sort} ${order}`

    // 分頁用
    const page = Number(req.query.page) || 1
    const perpage = Number(req.query.perpage) || 9 //預設每頁9筆資料
    const offset = (page - 1) * perpage
    const limit = perpage

    // 查詢本頁商品資料
    const [rows] = await db.query(
      `SELECT * FROM itinerary ${where} ${orderby} LIMIT ${limit} OFFSET ${offset}`
    )
    const products = rows

    // 計算目前的where過濾條件下的總資料筆數
    const [row2] = await db.query(
      `SELECT COUNT(*) AS count FROM itinerary ${where}`
    )
    const { count } = row2[0]

    //計算目前總共幾頁
    const pageCount = Math.ceil(count / perpage)

    // 處理如果沒找到資料

    // 標準回傳JSON
    return res.json({
      status: 'success',
      data: {
        total: count, // 代表目前查詢得到的所有筆數
        pageCount, // 代表目前的總共多少頁
        page, // 目前第幾頁
        perpage, // 目前每頁幾筆資料
        products, // 目前這頁的資料陣列
      },
    })
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  // const product = await Itinerary.findByPk(id, {
  //   raw: true, // 只需要資料表中資料
  // })

  const [rows] = await db.query('SELECT * FROM itinerary WHERE travel_id = ?', [
    id,
  ])
  const product = rows[0]

  return res.json({ status: 'success', data: { product } })
})

export default router
