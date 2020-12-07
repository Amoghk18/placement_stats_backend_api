const express = require('express');
const {getProcess, createProcess} = require('../controllers/process');
const router = express.Router();

router.route('/').get(getProcess).post(createProcess);

module.exports = router;