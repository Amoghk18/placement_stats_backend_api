const express = require('express');
const {getProcess, createProcess} = require('../controllers/process');
const router = express.Router();

router.route('/:name/:year').get(getProcess)
router.route('/').post(createProcess);

module.exports = router;