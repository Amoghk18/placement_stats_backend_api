const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    usn: {
        type: String,
        required: [true, 'USN is required'],
        trim: true
    },
    sem: {
        type: String,
        required: [true, 'Semester is required'],
        trim: true
    },
    dept: {
        type: String,
        required: [true, 'Department is required'],
        trim: true
    },
    resetPasswordToken: String,
    resetTokenExpire: Date,
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    }
});

// password encryption
StudentSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// generating jwt
StudentSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

// match passwords
StudentSchema.methods.matchPassword = async function (givenPassword){
    return await bcrypt.compare(givenPassword, this.password);
};

// generate and hash password token
StudentSchema.methods.getResetToken = function () {
    const resetToken = crypto.randomBytes(6).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetTokenExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model('Student', StudentSchema);