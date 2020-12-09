const express = require('express');
const { signupS, signupR, loginS, loginR, forgotPassword, resetPassword, updatePassword } = require('../controllers/auth');
const router = express.Router();

router.route('/student/signup').post(signupS);
router.route('/recruiter/signup').post(signupR);
router.route('/student/login').post(loginS);
router.route('/recruiter/login').post(loginR);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword').post(resetPassword);
router.route('/updatepassword').put(updatePassword);

module.exports = router;