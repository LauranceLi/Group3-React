import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '123' })
})

router.get("/login", (req, res) => {
  res.status(200).json({message: `登入页`})
})

router.get("/logout", (req, res) => {
  res.status(200).json({message: `登出页`})
})
router.get("/register", (req, res) => {
  res.status(200).json({message: `注册页`})
})
router.get("/forget_password", (req, res) => {
  res.status(200).json({message: `忘记密码`})
})

router.post("/profile", (req, res) => {
  res.status(200).json({message: `个人资料`})
})
router.post("/profile/edit", (req, res) => {
  res.status(200).json({message: `编辑资料`})
})
router.post("/security", (req, res) => {
  res.status(200).json({message: `账号安全`})
})
router.post("/points", (req, res) => {
  res.status(200).json({message: `积分记录`})
})



export default router