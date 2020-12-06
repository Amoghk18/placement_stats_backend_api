const express = require('express');
const {getEbooks, createEbook} = require("../controllers/ebooks");
const router = express.Router();

router.route('/').get(getEbooks).post(createEbook);

module.exports = router;