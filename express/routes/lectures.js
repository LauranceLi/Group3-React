import express from 'express'
const router = express.Router()
import axios from 'axios'
import qs from 'qs'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'

// 資料庫使用
import sequelize from '#configs/db.js'
const { Lectures } = sequelize.models

import db from '#configs/mysql.js'
// JWT
import jsonwebtoken from 'jsonwebtoken'
// 中介軟體，存取私有的會員資料用，會員在授權期內可以用JWT查出資料
import authenticate from '##/middlewares/authenticate.js'

// 存取.env檔案
import 'dotenv/config.js'

/* GET home page. */

// 首頁選擇
router.get('/', async function (req, res, next) {
  const category = req.body

  const [rows] = await db.query('SELECT * FROM lectures ')

  res.status(200).json({ status: 'success', data: rows })
})

export default router
