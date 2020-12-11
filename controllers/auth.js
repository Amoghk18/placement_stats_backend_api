const crypto = require('crypto');
const asyncHandler = require("../middleware/async");
const Student = require("../models/Student");
const Recruiter = require("../models/Recruiter");
const ErrorResponse = require('../utils/errorResponse');
const sendMail = require('../utils/sendEmail');

// @desc        sign up a student
// @route       POST  /api/v1/auth/student/signup
// @access      public
exports.signupS = asyncHandler(async (req, res, next) => {
    const { name, email, usn, sem, dept, password } = req.body;

    const user = await Student.create({
        name,
        email,
        usn,
        sem,
        dept,
        password
    });

    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token: token
    });
});

// @desc        sign up a recruiter
// @route       POST  /api/v1/auth/recruiter/signup
// @access      public
exports.signupR = asyncHandler(async (req, res, next) => {
    const { name, email, companyName, position, password } = req.body;

    const user = await Recruiter.create({
        name,
        email,
        companyName,
        position,
        password
    });

    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token: token
    });
});

// @desc        login a student
// @route       POST  /api/v1/auth/student/login
// @access      public
exports.loginS = asyncHandler(async (req, res, next) => {
    const { usn, password } = req.body;

    const user = await Student.findOne({ usn: usn }).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    const token = user.getSignedJwtToken();

    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    res.status(200).json({
        success: true,
        token: token,
        data: user
    });
});

// @desc        login a recruiter
// @route       POST  /api/v1/auth/recruiter/login
// @access      public
exports.loginR = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await Recruiter.findOne({ email: email }).select('+password');

    if(!user){
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    const token = user.getSignedJwtToken();

    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    res.status(200).json({
        success: true,
        token: token,
        data: user
    });
});

// @desc        forgot password
// @route       POST  /api/v1/auth/forgotpassword
// @access      public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    var user;
    if(req.body.email){
        user = await Recruiter.findOne({ email: req.body.email });
    }
    else{
        user = await Student.findOne({ usn: req.body.usn });
    }

    if(!user){
        return next(new ErrorResponse('No user found with given email', 404));
    }

    const resetToken = user.getResetToken();

    await user.save({ validateBeforeSave: false });

    const message = `Here is your OTP, ${resetToken}. OTP will expire after 10 minutes`;

    try{
        await sendMail({
            email: user.email,
            subject: 'Reset Password OTP',
            message: message
        });

        res.status(200).json({
            success: true,
            data: 'Email Sent'
        });        
    }catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetTokenExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorResponse('Email could not be sent', 500));
    }
});

// @desc        reset password
// @route       POST  /api/v1/auth/resetpassword
// @access      public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.body.otp).digest('hex');
    var user;
    if(req.body.role === 'student'){
        user = await Student.findOne({
            resetPasswordToken: resetPasswordToken,
            resetTokenExpire: { $gt: Date.now() }
        });
    }
    else{
        user = await Recruiter.findOne({
            resetPasswordToken: resetPasswordToken,
            resetTokenExpire: { $gt: Date.now() }
        });
    }

    if(!user){
        return next(new ErrorResponse('Invalid OTP', 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetTokenExpire = undefined;

    await user.save();

    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token: token
    });
});

// @desc        reset password
// @route       PUT  /api/v1/auth/updatepassword
// @access      private
exports.updatePassword = asyncHandler(async (req, res, next) => {
    var user;
    if(req.body.usn){
        user = await Student.findOne({ usn: req.body.usn }).select('+password');
    }
    else{
        user = await Recruiter.findOne({ email: req.body.email }).select('+password');
    }

    if(!user){
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token: token
    });
});