const express = require('express');
const {getCompanyYears, createCompanyYear} = require('../controllers/company_year');
const router = express.Router();

router.route('/').get(getCompanyYears).post(createCompanyYear);

module.exports = router;