const asyncHandler = require("../middleware/async");
const Chart = require("../models/Chart");

// @desc        get all charts
// @route       GET  /api/v1/charts
// @access      student only
exports.getCharts = asyncHandler(async (req, res, next) => {
  const charts = await Chart.find();
  res.status(200).json({
    success: true,
    data: charts,
  });
});

// @desc        create a chart
// @route       POST  /api/v1/charts
// @access      admin only
exports.createChart = asyncHandler(async (req, res, next) => {
    const chart = await Chart.create(req.body);
    res.status(201).json({
        success: true,
        data: chart
    });
});