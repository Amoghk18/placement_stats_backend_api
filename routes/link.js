const express = require('express');
const {getLinks, createLink} = require("../controllers/links");
const router = express.Router();

router.route('/').get(getLinks).post(createLink);

module.exports = router;