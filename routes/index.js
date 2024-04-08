var express = require('express');
var router = express.Router();
const userModel = require("./users")

router.get('/', function (req, res, next) {

  res.cookie("age", 12);
  //server pe session banta hai
  req.session.ban = true;
  res.render('index', { title: 'Hero' });
});
router.get('/checkcookie', function (req, res) {
  res.send(req.cookies)
  console.log(req.cookies)
})
router.get('/deletecookie', function (req, res) {
res.clearCookie('age')
res.send('cleared')
})
router.get('/create', async function (req, res) {
  const createdUser = await userModel.create({
    username: "Ayush",
    name: "k",
    age: 21
  });
  res.send(createdUser)
});

router.get('/checksession', function (req, res) {
  res.send(req.session)
  console.log(req.session)
})
router.get('/deletesession', function (req, res) {
  req.session.destroy(function (err) {
    res.send(err);
  })
  res.send(req.session)
}
)
router.get('/allusers', async function (req, res) {
  const allusers = await userModel.find();

  res.send(allusers)
});

router.get('/delete', async function (req, res,) {
  const deleteUser = await userModel.deleteMany({ name: 'k' })
  res.send(deleteUser)
});



//flash generation



module.exports = router;
