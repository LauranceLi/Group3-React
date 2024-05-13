import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({message: `讲座`})
})
router.get('/:id', function (req, res, next) {
  res.status(200).json({message: `讲座介绍`})
})


// router.get('/member', function (req, res, next) {
//   res.render('index', { title: '123' })
// });


export default router
