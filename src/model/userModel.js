const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profileImg: {type: String, require: false, trim: true},
    name: {type: String, require: true, trim: true},
    email: {type: String, require: true,  unique: true, trim: true},
    password: {type: String, require: true, trim: true},
    isDelete: {type: Boolean, default: false},
    isVerify: {type: Boolean, default: false},
    isAccountActive: {type: Boolean, default: true},
    role: {type: String, enum: ['user', 'Admin'], require: true, trim: true},
    otp: {type: String, require: true, trim: true},
    Adminotp: {type: String, require: false, trim: true},
},
    { timestamps: true }
)

module.exports = mongoose.model('UserDB', userSchema);