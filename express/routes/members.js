import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Member } = sequelize.models

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
router.get('/', function (req, res, next) {
  res.render('index', { title: '46' })
})

// 登入
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

// 登出
router.post('/logout', async (req, res, next) => {
  // 清除瀏覽器對應cookie
  res.clearCookie('accessToken', { httpOnly: true })
  res.json({ status: 'success', data: null })
})

// 檢查登入狀態，回應會員資料
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

router.post('/register', (req, res) => {
  res.status(200).json({ message: `注册页` })
  // 從前端來的資料: req.body = {email:'xxx', password:'yyy'}
  const loginUser = req.body
  // res.status(200).json(req.body)
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
