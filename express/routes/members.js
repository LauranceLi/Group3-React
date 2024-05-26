import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Members } = sequelize.models
const { MembersInfo } = sequelize.models

import db from '#configs/mysql.js'
// 密碼加密使用
import { generateHash, compareHash } from '##/db-helpers/password-hash.js'
// JWT
import jsonwebtoken from 'jsonwebtoken'
// 中介軟體，存取私有的會員資料用，會員在授權期內可以用JWT查出資料
import authenticate from '##/middlewares/authenticate.js'

// 存取.env檔案
import 'dotenv/config.js'
// 定義安全私鑰字串
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

/* GET home page. */
router.get('/get_info', authenticate, async function (req, res, next) {
  // 如果會員是在存取令牌合法的情況下，req.user中會有會員的id和username
  const memberId = req.user.member_id // 假设你已经从请求中获取了 member_id
  const [rows] = await db.query(
    `SELECT * 
    FROM members_info
    JOIN members ON members.member_id = members_info.member_id
    WHERE members_info.member_id = ?`,
    [memberId]
  )

  const user = rows[0]
  return res.json({ status: 'success', data: user })
})
router.get('/profilr', authenticate, async function (req, res, next) {
  // 如果會員是在存取令牌合法的情況下，req.user中會有會員的id和username
  const memberId = req.user.member_id // 假设你已经从请求中获取了 member_id
  const [rows] = await db.query(
    `SELECT * 
    FROM members_info
    JOIN members ON members.member_id = members_info.member_id
    WHERE members_info.member_id = ?`,
    [memberId]
  )

  const user = rows[0]
  return res.json({ status: 'success', data: user })
})

// 登入（完成）
router.post('/login', async function (req, res, next) {
  // res.status(200).json({ message: `12456789` })
  // 從前端來的資料: req.body = {email:'xxx', password:'yyy'}
  const loginUser = req.body

  // 使用email查詢資料表，把資料表中加密過密碼字串提取出來
  const [rows] = await db.query('SELECT * FROM members WHERE email = ?', [
    loginUser.email,
  ])

  const dbUser = rows[0]

  // 沒找到
  if (rows.length === 0) {
    return res.json({ status: 'error', message: `帳號不存在` })
  }

  // 驗証密碼
  const isValid = await compareHash(loginUser.password, dbUser.password)

  if (!isValid) {
    return res.json({ status: 'error', message: `密碼錯誤` })
  }

  // 存取令牌中的資訊，只需要id和email就足夠，需要其它資料再向資料庫查詢
  const returnUser = {
    member_id: dbUser.member_id,
    email: dbUser.email,
  }

  // 產生存取令牌(access token)
  const accessToken = jsonwebtoken.sign(returnUser, accessTokenSecret, {
    expiresIn: '3d',
  })

  // 在瀏覽器端使用httpOnly cookie儲存accessToken
  res.cookie('accessToken', accessToken, { httpOnly: true })

  // 回應accessToken到前端(讓react可以儲在狀態中)
  return res.json({ status: 'success', data: { accessToken } })
})

// 登出（完成）
router.post('/logout', async (req, res, next) => {
  // 清除瀏覽器對應cookie
  res.clearCookie('accessToken', { httpOnly: true })
  res.json({ status: 'success', data: null })
})

// 檢查登入狀態（完成）
router.get('/check', authenticate, async (req, res, next) => {
  // 如果會員是在存取令牌合法的情況下，req.user中會有會員的id和username
  // 使用username查詢資料表，把資料表中加密過密碼字串提取出來
  const [rows] = await db.query('SELECT * FROM members WHERE member_id = ?', [
    req.user.member_id,
  ])

  const user = rows[0]
  // 不回傳密碼
  delete user.password

  return res.json({ status: 'success', data: req.user })
})

// 註冊
router.post('/register', async (req, res, next) => {
  // res.status(200).json({ message: `注册页` })
  const newUser = req.body

  // 加密密碼文字
  const passwordHash = await generateHash(newUser.password)

  // 自動生成member_id
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  const dateString = `${year}${month}${day}`
  const [rows] = await db.query(
    'SELECT COUNT(*) as count FROM `members` WHERE DATE(`created_at`) = CURDATE()'
  )
  const userCountToday = rows[0].count + 1
  const memberId = `${dateString}${String(userCountToday).padStart(3, '0')}`

  if (!newUser.mobile || !newUser.email || !newUser.name || !newUser.password) {
    return res.json({ status: 'error', message: '缺少必要資料' })
  }

  // 執行後user是建立的會員資料，created為布林值
  // where指的是不可以有相同的資料，如username與email不能有相同的
  // defaults用於建立新資料用
  const [user, created] = await Members.findOrCreate({
    where: { email: newUser.email },
    defaults: {
      name: newUser.name,
      email: newUser.email,
      password: passwordHash,
      member_id: memberId,
    },
    logging: console.log,
  })

  if (!created) {
    return res.json({ status: 'error', message: '建立會員失敗' })
  } else {
    const [userInfo, createdInfo] = await MembersInfo.findOrCreate({
      where: { member_id: memberId },
      defaults: {
        mobile: newUser.mobile,
        member_id: newUser.member_id,
      },
      logging: console.log,
    })
    // if (!createdInfo) {
    //   return res.json({ status: 'error', message: '建立會員資料失敗' })
    // } else {
    //   return res.json({ status: 'success', data: userInfo })
    // }
  }

  // 新增失敗 !insertRows.insertId 代表沒新增
  return res.status(201).json({
    status: 'success',
    data: null,
  })
})
router.get('/forget_password', (req, res) => {
  res.status(200).json({ message: `忘记密码` })
})

router.post('/profile', (req, res) => {
  res.status(200).json({ message: `个人资料` })
})
router.post('/profile/edit', (req, res) => {
  res.status(200).json({ message: `编辑资料` })
})
router.post('/security', (req, res) => {
  res.status(200).json({ message: `账号安全` })
})
router.post('/points', (req, res) => {
  res.status(200).json({ message: `积分记录` })
})

export default router
