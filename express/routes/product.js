import express from 'express'
const router = express.Router()
import db from '#configs/mysql.js'

router.get('/productList', async function (req, res, next) {
  const [rows] = await db.query('SELECT * FROM product')
  return res.json({ status: 'success', data: rows })
})

router.get('/productDetail', async function (req, res, next) {
  const { id } = req.query.id
  const [rows] = await db.query('SELECT * FROM product where id = ?', [id])
  return res.json({ status: 'success', data: rows[0] })
})

export default router
