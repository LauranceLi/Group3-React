import express from 'express'
import  {OAuth2Client} from 'google-auth-library'
const router = express.Router()



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})


// router.get('/member', function (req, res, next) {
//   res.render('index', { title: '123' })
// // });
// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   // 允许的请求方法
//   res.header('Access-Control-Allow-Methods', '*');
//   // 允许的请求头部
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
export default router
