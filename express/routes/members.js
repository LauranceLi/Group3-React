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
  res.render('index', { title: '123' })
})

// 登入
router.post('/login', async function (req, res, next) {
  // 從前端來的資料: req.body = {username:'xxx', password:'yyy'}
  const loginUser = req.body

  // 使用username查詢資料表，把資料表中加密過密碼字串提取出來
  const [rows] = await db.query('SELECT * FROM member WHERE username = ?', [
    loginUser.username,
  ])

  const dbUser = rows[0]

  // 沒找到
  if (rows.length === 0) {
    return res.json({ status: 'error', message: '帳號不存在' })
  }

  // 驗証密碼
  const isValid = await compareHash(loginUser.password, dbUser.password)

  if (!isValid) {
    return res.json({ status: 'error', message: '密碼錯誤' })
  }

  // 存取令牌中的資訊，只需要id和username就足夠，需要其它資料再向資料庫查詢
  const returnUser = {
    id: dbUser.id,
    username: dbUser.username,
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

router.get('/logout', (req, res) => {
  res.status(200).json({ message: `登出页` })
})
router.get('/register', (req, res) => {
  res.status(200).json({ message: `注册页` })
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
