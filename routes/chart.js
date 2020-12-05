const express = require("express");
const {getCharts, createChart} = require("../controllers/charts");
const router = express.Router();

router.route("/").get(getCharts).post(createChart);

module.exports = router;
