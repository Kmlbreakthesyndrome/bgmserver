const express = require("express");
const multer = require('multer');
const { CreateUser, OtpVerification, UserLogIn } = require("../controller/userController");
const { validUser, validUserLogIn } = require('../middleware/AllAuth')
const { adminLogIn } = require("../controller/AdminController");
const router = express.Router();

const upload = multer({ storage: multer.diskStorage({}) });

router.post('/CreateUser', upload.single('profileImg'), validUser, CreateUser)
router.post('/OtpVerification/:userId', OtpVerification)
router.post('/UserLogIn', validUserLogIn, UserLogIn)

router.post('/adminLogIn', validUserLogIn, adminLogIn)

router.all('/*', (req, res)=> { return res.status(404).send({status: false, msg:'Invalid URL'})})

module.exports = router;