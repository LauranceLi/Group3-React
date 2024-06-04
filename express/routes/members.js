import express from 'express'
const router = express.Router()
import axios from 'axios'
import qs from 'qs'
import nodemailer from 'nodemailer'
import multer from 'multer'
import path from 'path'
import fs from 'fs/promises'

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
const googleClientId =
  '800909597978-ros4m9t6dfugt5im5df6ulfud19henpo.apps.googleusercontent.com'
const googleClientSecret = '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'
const googleRedirectUri = 'http://localhost:3000'

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

// 資料編輯`（完成）
router.post('/profile_edit', authenticate, async function (req, res, next) {
  // 如果會員是在存取令牌合法的情況下，req.user中會有會員的id和username
  const memberId = req.user.member_id

  // newProfile 接住新輸入的訊息
  const newProfile = req.body

  try {
    // 更新會員資料
    const [memberResult] = await db.query(
      `UPDATE members 
      SET name = ? ,
      email =?
      WHERE member_id = ?`,
      [newProfile.name, newProfile.email, memberId]
    )
    const [memberInfoResult] = await db.query(
      `UPDATE members_info
      SET first_name = ?,
      last_name =?,
      id_num =?,
      mobile =?,
      tag =?,
      address=?,
      birthday =?
      WHERE member_id = ?`,
      [
        newProfile.firstName,
        newProfile.lastName,
        newProfile.idNum,
        newProfile.mobile,
        newProfile.tag,
        newProfile.address,
        newProfile.birthday.slice(0, 10),
        memberId,
      ]
    )

    // // 检查是否有任何資料被更新
    // if (memberResult.affectedRows === 0) {
    //   return res.status(404).json({ status: 'error', message: '找不到該會員' })
    // }

    // 查詢更新後的會員資料
    const [rows] = await db.query(
      `SELECT * 
      FROM members_info
      JOIN members ON members.member_id = members_info.member_id
      WHERE members_info.member_id = ?`,
      [memberId]
    )
    const user = rows[0]

    // 返回更新後的會員資料
    return res.json({ status: 'success', data: user })
  } catch (error) {
    // 處理錯誤
    console.error(error)
    return res.status(500).json({ status: 'error', message: '伺服器錯誤' })
  }
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
    return res.json({ status: 'error', message: `此帳號不存在` })
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

router.post('/login-avatar', async function (req, res, next) {
  const loginUser = req.body
  const [rows] = await db.query('SELECT * FROM members WHERE email = ?', [
    loginUser.email,
  ])

  if (rows.length === 0) {
    return res.json({ status: 'error', data: null })
  } else {
    return res.json({ status: 'success', data: rows[0].avatar })
  }
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

// 註冊（完成）
router.post('/register', async (req, res, next) => {
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
    return res.json({ status: 'error', message: '創建會員失敗' })
  } else {
    const [userInfo, createdInfo] = await MembersInfo.findOrCreate({
      where: { member_id: memberId },
      defaults: {
        mobile: newUser.mobile,
        member_id: newUser.member_id,
      },
      logging: console.log,
    })
  }

  // 新增失敗 !insertRows.insertId 代表沒新增
  return res.status(201).json({
    status: 'success',
    data: null,
  })
})
router.post('/auth/google', async (req, res) => {
  const { code } = req.body
  const googleTokenUrl = 'https://oauth2.googleapis.com/token'

  const values = {
    code,
    client_id: googleClientId,
    client_secret: googleClientSecret,
    redirect_uri: googleRedirectUri,
    grant_type: 'authorization_code',
  }

  try {
    const response = await axios.post(googleTokenUrl, qs.stringify(values), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { id_token, access_token } = response.data

    const decodedToken = jsonwebtoken.decode(id_token)
    const [rows] = await db.query('SELECT * FROM members WHERE email = ?', [
      decodedToken.email,
    ])

    if (rows.length === 0) {
      const [user, created] = await Members.findOrCreate({
        where: { email: decodedToken.email },
        defaults: {
          name: decodedToken.name,
          email: decodedToken.email,
          member_id: decodedToken.sub,
        },
        logging: console.log,
      })

      if (!created) {
        return res.json({ status: 'error', message: '創建會員失敗' })
      } else {
        await MembersInfo.findOrCreate({
          where: { member_id: decodedToken.sub },
          defaults: {
            mobile: decodedToken.phone_number,
            avatar: decodedToken.picture,
            points: 0,
          },
          logging: console.log,
        })
      }
    } else {
      await Members.update(
        { name: decodedToken.name },
        { where: { member_id: decodedToken.sub }, logging: console.log }
      )
      await MembersInfo.update(
        { avatar: decodedToken.picture },
        { where: { member_id: decodedToken.sub }, logging: console.log }
      )
    }

    const [newRows] = await db.query(
      'SELECT * FROM members WHERE member_id = ?',
      [decodedToken.sub]
    )

    const dbUser = newRows[0]
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
  } catch (error) {
    console.error('Failed to fetch Google OAuth tokens', error)
    res.status(500).json({ error: 'Failed to fetch Google OAuth tokens' })
  }
})

router.post('/register/mailCheck', async (req, res) => {
  const loginUser = req.body

  if (!loginUser.email) {
    return res.json({ status: 'error', message: `帳號欄位不可為空` })
  }
  const [rows] = await db.query('SELECT * FROM members WHERE email = ?', [
    loginUser.email,
  ])

  if (rows.length === 1) {
    return res.json({ status: 'error', message: `此信箱已被使用` })
  } else {
    return res.json({ status: 'success', message: '此信箱可使用' })
  }
})

export default router
