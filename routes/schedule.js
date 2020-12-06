const express = require('express');
const {getSchedules, createSchedule} = require("../controllers/schedules");
const router = express.Router();

router.route('/').get(getSchedules).post(createSchedule);

module.exports = router;