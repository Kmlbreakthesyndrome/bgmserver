const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const { OtpVerification } = require('../nodemailer/AllMailFormat')
const { userProfileURL } = require('../cloudinary/ImageUrl')
const jwt = require('jsonwebtoken')


exports.adminLogIn = async (req, res) => {
    try {
        const data = req.body;
        const { email, password } = data;
        const findUser = await userModel.findOne({ email: email, role: 'Admin' })

        if (!findUser) return res.status(404).send({ status: false, msg: 'User Not Found pls SignUp' })

        const checkPass = await bcrypt.compare(password, findUser.password)
        if (!checkPass) return res.status(400).send({ status: false, msg: 'Wrong Password' })

        const token = await jwt.sign({ userId: findUser._id }, process.env.adminToken, { expiresIn: '1m' })

        res.status(200).send({ status: true, userid: findUser._id, token: token, email: findUser.email, profileImg: userProfileURL(findUser.profileImg) })

    }
    catch (err) {
        console.log(err.name)
        return res.status(500).send({ status: false, msg: err.message })
    }
}